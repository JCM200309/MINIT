import { Resend } from 'resend';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, company, email, message, captchaToken } = await req.json();

    // 1. Validate reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      throw new Error('RECAPTCHA_SECRET_KEY is not configured');
    }

    const verifyParams = new URLSearchParams();
    verifyParams.append("secret", recaptchaSecret);
    verifyParams.append("response", captchaToken);

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      { 
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: verifyParams.toString(),
      }
    );

    const recaptchaData = await recaptchaRes.json();
    console.log(recaptchaData)

    if (!recaptchaData.success) {
      const errorCodes = recaptchaData['error-codes'] ? recaptchaData['error-codes'].join(', ') : 'Unknown error';
      return new Response(JSON.stringify({ error: `Invalid CAPTCHA: ${errorCodes}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Send Email with Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const destEmail = process.env.CONTACT_DESTINATION_EMAIL;

    if (!resendApiKey || !destEmail) {
      throw new Error('Resend configuration is missing');
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: 'MINIT Contact <onboarding@resend.dev>', // You can change this once domain is verified
      to: [destEmail],
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      text: `
Nombre: ${name}
Empresa: ${company}
Email: ${email}

Mensaje:
${message}
      `,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return new Response(JSON.stringify({ error: `Resend API Error: ${error.message}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Handler Error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
