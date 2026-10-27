import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import type { Plugin, Connect } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to dynamically read .env so updates are picked up seamlessly
function getDynamicEnv(): Record<string, string> {
  const candidatePaths = [
    path.resolve(__dirname, '.env'),
    path.resolve(process.cwd(), '.env'),
    path.resolve(process.cwd(), 'Stellar/.env'),
  ];

  const parsedEnv: Record<string, string> = {};

  for (const envPath of candidatePaths) {
    if (fs.existsSync(envPath)) {
      try {
        const content = fs.readFileSync(envPath, 'utf-8');
        for (const rawLine of content.split(/\r?\n/)) {
          const trimmed = rawLine.trim();
          if (trimmed && !trimmed.startsWith('#')) {
            const idx = trimmed.indexOf('=');
            if (idx !== -1) {
              const key = trimmed.slice(0, idx).trim();
              let val = trimmed.slice(idx + 1).trim();
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
        break;
      } catch {
        // Continue to next candidate
      }
    }
  }

  return parsedEnv;
}

// Server-side Contact API Middleware Plugin
function contactApiPlugin(initialEnv: Record<string, string>): Plugin {
  return {
    name: 'stellar-contact-api',
    configureServer(server) {
      server.middlewares.use(async (req: Connect.IncomingMessage, res, next) => {
        const url = req.url?.split('?')[0];
        const dynamicEnv = getDynamicEnv();
        const getVal = (key: string, fallback = '') =>
          process.env[key] || dynamicEnv[key] || initialEnv[key] || fallback;

        // Status check endpoint
        if (url === '/api/contact/status' && req.method === 'GET') {
          const resendKey = getVal('RESEND_API_KEY');
          const isConfigured = Boolean(resendKey && resendKey.startsWith('re_'));
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(
            JSON.stringify({
              status: 'operational',
              provider: 'Resend',
              configured: isConfigured,
              recipientConfigured: Boolean(getVal('CONTACT_RECIPIENT_EMAIL')),
            })
          );
          return;
        }

        // Contact submission endpoint
        if (url === '/api/contact' && req.method === 'POST') {
          let bodyStr = '';
          req.on('data', (chunk) => {
            bodyStr += chunk;
            // Guard against oversized payload (limit to 1MB)
            if (bodyStr.length > 1024 * 1024) {
              req.destroy();
            }
          });

          req.on('end', async () => {
            res.setHeader('Content-Type', 'application/json');

            let body: {
              fullName?: string;
              email?: string;
              company?: string;
              service?: string;
              message?: string;
            } = {};

            try {
              body = JSON.parse(bodyStr);
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: 'Malformed JSON payload.' }));
              return;
            }

            const { fullName, email, company, service, message } = body;

            // Type guard to ensure value is a valid string
            const isString = (val: unknown): val is string => typeof val === 'string';

            // Server-side field validation
            const errors: Record<string, string> = {};
            if (!isString(fullName) || fullName.trim().length < 3) {
              errors.fullName = 'Full name must be at least 3 characters.';
            }
            if (!isString(email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
              errors.email = 'A valid email address is required.';
            }
            if (!isString(message) || message.trim().length < 10) {
              errors.message = 'Project description must be at least 10 characters.';
            }

            if (
              Object.keys(errors).length > 0 ||
              !isString(fullName) ||
              !isString(email) ||
              !isString(message)
            ) {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: 'Validation failed.', fieldErrors: errors }));
              return;
            }

            // Strictly narrowed local variables (100% type-safe strings)
            const cleanFullName = fullName.trim();
            const cleanEmail = email.trim();
            const cleanMessage = message.trim();
            const cleanCompany = isString(company) && company.trim() ? company.trim() : 'Not specified';
            const cleanService = isString(service) && service.trim() ? service.trim() : 'General Inquiry';

            const escapeHtml = (str: string): string =>
              str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');

            const safeFullName = escapeHtml(cleanFullName);
            const safeEmail = escapeHtml(cleanEmail);
            const safeCompany = escapeHtml(cleanCompany);
            const safeService = escapeHtml(cleanService);
            const safeMessage = escapeHtml(cleanMessage);

            const resendApiKey = getVal('RESEND_API_KEY');
            const recipientEmail = getVal('CONTACT_RECIPIENT_EMAIL', 'inquiries@stellarmedia.ae');
            const senderEmail = getVal('CONTACT_SENDER_EMAIL', 'Stellar Media <onboarding@resend.dev>');

            // Check if transactional provider is configured
            if (!resendApiKey || resendApiKey.trim() === '' || resendApiKey.includes('your_resend_api_key')) {
              // Truthful 503 response: Provider credentials not yet supplied in .env
              res.statusCode = 503;
              res.end(
                JSON.stringify({
                  success: false,
                  code: 'PROVIDER_NOT_CONFIGURED',
                  error:
                    'Email delivery provider is not configured on the server. Please define RESEND_API_KEY in the server environment (.env) to enable live message dispatch.',
                })
              );
              return;
            }

            // Real dispatch through Resend REST API
            try {
              const resendResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${resendApiKey.trim()}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  from: senderEmail,
                  to: recipientEmail,
                  reply_to: cleanEmail,
                  subject: `[Stellar Media Inquiry] ${cleanFullName} — ${cleanService}`,
                  html: `
                    <div style="font-family: sans-serif; background-color: #080D1B; color: #F5F7FC; padding: 32px; border-radius: 12px;">
                      <h2 style="color: #48D9E8; margin-top: 0;">New Consultation Request — Stellar Media</h2>
                      <p style="color: #AEBBD0; font-size: 14px;">Received via stellarmedia.ae official contact portal.</p>
                      <hr style="border: 0; border-top: 1px solid rgba(174,187,208,0.2); margin: 20px 0;" />
                      <table style="width: 100%; font-size: 14px; color: #F5F7FC;">
                        <tr><td style="width: 140px; color: #48D9E8; padding: 6px 0;"><strong>Full Name:</strong></td><td>${safeFullName}</td></tr>
                        <tr><td style="color: #48D9E8; padding: 6px 0;"><strong>Email Address:</strong></td><td><a href="mailto:${safeEmail}" style="color: #168BFF;">${safeEmail}</a></td></tr>
                        <tr><td style="color: #48D9E8; padding: 6px 0;"><strong>Company/Brand:</strong></td><td>${safeCompany}</td></tr>
                        <tr><td style="color: #48D9E8; padding: 6px 0;"><strong>Service Discipline:</strong></td><td>${safeService}</td></tr>
                      </table>
                      <hr style="border: 0; border-top: 1px solid rgba(174,187,208,0.2); margin: 20px 0;" />
                      <div style="background-color: #101E38; padding: 16px; border-radius: 8px; border: 1px solid rgba(72,217,232,0.2);">
                        <strong style="color: #48D9E8; display: block; margin-bottom: 8px;">Project Brief & Objectives:</strong>
                        <p style="white-space: pre-wrap; margin: 0; color: #F5F7FC; line-height: 1.6;">${safeMessage}</p>
                      </div>
                      <p style="margin-top: 24px; font-size: 11px; color: #AEBBD0; font-family: monospace;">TIMESTAMP: ${new Date().toISOString()} • AUH</p>
                    </div>
                  `,
                }),
              });

              const resendData = (await resendResponse.json()) as { id?: string; message?: string; name?: string };

              if (resendResponse.ok && resendData.id) {
                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    success: true,
                    messageId: resendData.id,
                    provider: 'Resend',
                    timestamp: new Date().toISOString(),
                  })
                );
              } else {
                res.statusCode = 502;
                res.end(
                  JSON.stringify({
                    success: false,
                    error: `Email provider rejected delivery: ${resendData.message || resendData.name || 'Unknown error'}`,
                  })
                );
              }
            } catch (dispatchErr: any) {
              res.statusCode = 502;
              res.end(
                JSON.stringify({
                  success: false,
                  error: `Network failure connecting to transactional email gateway: ${dispatchErr?.message || 'Gateway error'}`,
                })
              );
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      contactApiPlugin(env),
    ],
    server: {
      port: 5173,
    },
  };
});
