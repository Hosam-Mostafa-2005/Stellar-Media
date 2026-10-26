/**
 * ==============================================================================
 * STELLAR MEDIA — CONTACT API BACKEND (EXPRESS.JS REFACTOR)
 * ==============================================================================
 * 
 * هذا الخادم مبني باستخدام Express.js ليكون سهلاً، واضحاً، ومثالياً للتعلم والتطوير.
 * 
 * المكونات الرئيسية:
 * 1. Environment Loader: قراءة ملف الإعدادات (.env) بأمان دون تسريب المفاتيح.
 * 2. Middleware: معالجة ترويسات CORS وفك تشفير بيانات الـ JSON القادمة في الطلبات.
 * 3. GET /api/contact/status: فحص جاهزية الخادم وحالة مفتاح Resend.
 * 4. POST /api/contact: استلام بيانات نموذج التواصل، التحقق منها، وإرسالها عبر Resend API.
 * 5. Error Handlers: معالجة صيغ الـ JSON غير الصحيحة والمسارات غير الموجودة (404).
 */

import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ==============================================================================
// 1. ENVIRONMENT VARIABLES LOADER (محمّل متغيرات البيئة)
// ==============================================================================
// دالة تقرأ ملف .env بمرونة سواء شُغّل الخادم من داخل مجلد Stellar أو من المجلد الأب.
function loadEnvVariables() {
  const candidatePaths = [
    path.resolve(__dirname, "../.env"),
    path.resolve(process.cwd(), ".env"),
    path.resolve(process.cwd(), "Stellar/.env"),
    path.resolve(__dirname, ".env"),
  ];

  const parsedEnv = {};

  for (const envPath of candidatePaths) {
    if (fs.existsSync(envPath)) {
      try {
        const content = fs.readFileSync(envPath, "utf-8");
        for (const rawLine of content.split(/\r?\n/)) {
          const trimmed = rawLine.trim();
          if (trimmed && !trimmed.startsWith("#")) {
            const idx = trimmed.indexOf("=");
            if (idx !== -1) {
              const key = trimmed.slice(0, idx).trim();
              let val = trimmed.slice(idx + 1).trim();
              // إزالة علامات التنصيص الخارجية إن وجدت
              if (
                (val.startsWith('"') && val.endsWith('"')) ||
                (val.startsWith("'") && val.endsWith("'"))
              ) {
                val = val.slice(1, -1);
              }
              parsedEnv[key] = val;
            }
          }
        }
        break; // نكتفي بأول ملف .env موجود
      } catch {
        // تجاهل الخطأ والمتابعة للمسار التالي
      }
    }
  }

  return parsedEnv;
}

const fileEnv = loadEnvVariables();

// دالة مساعدة لجلب قيمة أي متغير مع توفير قيمة افتراضية اختيارية
function getEnv(key, fallback = "") {
  return process.env[key] || fileEnv[key] || fallback;
}

// منفذ الخادم الافتراضي (3001)
const PORT = Number(getEnv("PORT", "3001"));

// ==============================================================================
// 2. INITIALIZE EXPRESS APPLICATION (تهيئة تطبيق Express)
// ==============================================================================
const app = express();

/**
 * MIDDLEWARE 1: CORS Headers
 * يسمح للمتصفح بإرسال طلبات من واجهة React (التي تعمل عادة على منفذ 5173)
 * إلى خادم Express (الذي يعمل على منفذ 3001) دون مشاكل في الأمان.
 */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

/**
 * MIDDLEWARE 2: express.json()
 * هذه الدالة تقوم بمهمة حيوية: قراءة محتوى الطلب (Body) وتحويله تلقائياً
 * من نص خام إلى كائن JavaScript جاهز للاستخدام في req.body.
 * تم تحديد الحد الأقصى للحجم بـ 1MB لمنع هجمات إغراق الخادم.
 */
app.use(express.json({ limit: "1mb" }));

// ==============================================================================
// 3. API ROUTES (مسارات الخادم)
// ==============================================================================

/**
 * ROUTE 1: GET /api/contact/status
 * فحص صحة وجاهزية الخادم والتأكد من إعداد مزود البريد (Resend)
 * دون كشف أي أسرار أو مفاتيح للمستخدم أو المتصفح.
 */
app.get("/api/contact/status", (req, res) => {
  const activeResendKey = getEnv("RESEND_API_KEY");
  const activeRecipient = getEnv("CONTACT_RECIPIENT_EMAIL", "inquiries@stellarmedia.ae");

  // نتحقق من وجود المفتاح وبدئه بـ re_ كدليل على صحة التكوين
  const isConfigured = Boolean(activeResendKey && activeResendKey.startsWith("re_"));

  res.status(200).json({
    status: "operational",
    provider: "Resend",
    configured: isConfigured,
    recipientConfigured: Boolean(activeRecipient),
  });
});

/**
 * ROUTE 2: POST /api/contact
 * استلام بيانات استمارة التواصل، التحقق منها من طرف الخادم،
 * ثم إرسال البريد الإلكتروني عبر Resend REST API.
 */
app.post("/api/contact", async (req, res) => {
  // 1. استخراج الحقول الخمسة المتوقعة من req.body
  const { fullName, email, company, service, message } = req.body || {};

  // 2. التحقق من صحة المدخلات في الخادم (Server-Side Validation)
  const errors = {};
  if (!fullName || typeof fullName !== "string" || fullName.trim().length < 3) {
    errors.fullName = "Full name must be at least 3 characters.";
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "A valid email address is required.";
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.message = "Project description must be at least 10 characters.";
  }

  // إذا وجدنا أي خطأ، نعيد كود 400 (Bad Request) مع تفاصيل الحقول الخاطئة
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      error: "Validation failed.",
      fieldErrors: errors,
    });
  }

  // 3. جلب بيانات الإعدادات الخاصة بـ Resend
  const activeResendKey = getEnv("RESEND_API_KEY");
  const activeRecipient = getEnv("CONTACT_RECIPIENT_EMAIL", "inquiries@stellarmedia.ae");
  const activeSender = getEnv("CONTACT_SENDER_EMAIL", "Stellar Media <onboarding@resend.dev>");

  // 4. التحقق من توفر مفتاح Resend في البيئة
  if (
    !activeResendKey ||
    activeResendKey.trim() === "" ||
    activeResendKey.includes("your_resend_api_key")
  ) {
    return res.status(503).json({
      success: false,
      code: "PROVIDER_NOT_CONFIGURED",
      error:
        "Email delivery provider is not configured on the server. Please define RESEND_API_KEY in the server environment (.env) to enable live message dispatch.",
    });
  }

  // 5. إرسال البريد الإلكتروني عبر Resend REST API
  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${activeResendKey.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: activeSender,
        to: activeRecipient,
        reply_to: email.trim(), // يسمح بالرد المباشر على بريد العميل
        subject: `[Stellar Media Inquiry] ${fullName.trim()} — ${service || "General"}`,
        html: `
          <div style="font-family: sans-serif; background-color: #080D1B; color: #F5F7FC; padding: 32px; border-radius: 12px;">
            <h2 style="color: #48D9E8; margin-top: 0;">New Consultation Request — Stellar Media</h2>
            <p style="color: #AEBBD0; font-size: 14px;">Received via stellarmedia.ae official contact portal.</p>
            <hr style="border: 0; border-top: 1px solid rgba(174,187,208,0.2); margin: 20px 0;" />
            <table style="width: 100%; font-size: 14px; color: #F5F7FC;">
              <tr><td style="width: 140px; color: #48D9E8; padding: 6px 0;"><strong>Full Name:</strong></td><td>${fullName.trim()}</td></tr>
              <tr><td style="color: #48D9E8; padding: 6px 0;"><strong>Email Address:</strong></td><td><a href="mailto:${email.trim()}" style="color: #168BFF;">${email.trim()}</a></td></tr>
              <tr><td style="color: #48D9E8; padding: 6px 0;"><strong>Company/Brand:</strong></td><td>${company ? company.trim() : "Not specified"}</td></tr>
              <tr><td style="color: #48D9E8; padding: 6px 0;"><strong>Service Discipline:</strong></td><td>${service ? service.trim() : "General Inquiry"}</td></tr>
            </table>
            <hr style="border: 0; border-top: 1px solid rgba(174,187,208,0.2); margin: 20px 0;" />
            <div style="background-color: #101E38; padding: 16px; border-radius: 8px; border: 1px solid rgba(72,217,232,0.2);">
              <strong style="color: #48D9E8; display: block; margin-bottom: 8px;">Project Brief & Objectives:</strong>
              <p style="white-space: pre-wrap; margin: 0; color: #F5F7FC; line-height: 1.6;">${message.trim()}</p>
            </div>
            <p style="margin-top: 24px; font-size: 11px; color: #AEBBD0; font-family: monospace;">TIMESTAMP: ${new Date().toISOString()} • AUH</p>
          </div>
        `,
      }),
    });

    const data = await resendResponse.json();

    // نتحقق من قبول الخادم ورجوع معرّف الرسالة (id)
    if (resendResponse.ok && data.id) {
      return res.status(200).json({
        success: true,
        messageId: data.id,
        provider: "Resend",
        timestamp: new Date().toISOString(),
      });
    } else {
      return res.status(502).json({
        success: false,
        error: `Email provider rejected delivery: ${data.message || data.name || "Unknown error"}`,
      });
    }
  } catch (err) {
    return res.status(502).json({
      success: false,
      error: `Network failure connecting to transactional email gateway: ${err?.message || "Gateway error"}`,
    });
  }
});

// ==============================================================================
// 4. ERROR HANDLING & FALLBACKS (معالجة الأخطاء والمسارات غير المعروفة)
// ==============================================================================

/**
 * معالج أخطاء صيغة JSON غير الصالحة
 * في حال أرسل العميل طلباً بنص تالف ليس بصيغة JSON سليمة.
 */
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      error: "Malformed JSON payload.",
    });
  }
  next(err);
});

/**
 * معالج أي مسار غير معرف (404 Not Found)
 */
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found." });
});

// ==============================================================================
// 5. START SERVER LISTENER (بدء تشغيل الخادم)
// ==============================================================================
app.listen(PORT, () => {
  console.log(`[Stellar Media API] Express server listening on http://localhost:${PORT}`);
});
