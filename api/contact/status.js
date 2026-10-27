export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const activeResendKey = process.env.RESEND_API_KEY || '';
  const activeRecipient =
    process.env.CONTACT_RECIPIENT_EMAIL || 'inquiries@stellarmedia.ae';
  const isConfigured = Boolean(
    activeResendKey && activeResendKey.startsWith('re_')
  );

  return res.status(200).json({
    status: 'operational',
    provider: 'Resend',
    configured: isConfigured,
    recipientConfigured: Boolean(activeRecipient),
  });
}
