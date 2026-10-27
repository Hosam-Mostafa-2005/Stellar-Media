export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { fullName, email, company, service, message } = req.body || {};
  const isString = (val) => typeof val === 'string';

  const errors = {};
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
    return res.status(400).json({
      success: false,
      error: 'Validation failed.',
      fieldErrors: errors,
    });
  }

  const cleanFullName = fullName.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();
  const cleanCompany =
    isString(company) && company.trim() ? company.trim() : 'Not specified';
  const cleanService =
    isString(service) && service.trim() ? service.trim() : 'General Inquiry';

  const escapeHtml = (str) =>
    String(str)
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

  const activeResendKey = process.env.RESEND_API_KEY || '';
  const activeRecipient =
    process.env.CONTACT_RECIPIENT_EMAIL || 'inquiries@stellarmedia.ae';
  const activeSender =
    process.env.CONTACT_SENDER_EMAIL || 'Stellar Media <onboarding@resend.dev>';

  if (
    !activeResendKey ||
    activeResendKey.trim() === '' ||
    activeResendKey.includes('your_resend_api_key')
  ) {
    return res.status(503).json({
      success: false,
      code: 'PROVIDER_NOT_CONFIGURED',
      error:
        'Email delivery provider is not configured on the server. Please define RESEND_API_KEY in the server environment to enable live message dispatch.',
    });
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${activeResendKey.trim()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: activeSender,
        to: activeRecipient,
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

    const data = await resendResponse.json();

    if (resendResponse.ok && data.id) {
      return res.status(200).json({
        success: true,
        messageId: data.id,
        provider: 'Resend',
        timestamp: new Date().toISOString(),
      });
    } else {
      return res.status(502).json({
        success: false,
        error: `Email provider rejected delivery: ${data.message || data.name || 'Unknown error'}`,
      });
    }
  } catch (err) {
    return res.status(502).json({
      success: false,
      error: `Network failure connecting to transactional email gateway: ${err?.message || 'Gateway error'}`,
    });
  }
}
