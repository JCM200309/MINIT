import nodemailer from 'nodemailer';

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
    console.log(recaptchaData);

    if (!recaptchaData.success) {
      const errorCodes = recaptchaData['error-codes'] ? recaptchaData['error-codes'].join(', ') : 'Unknown error';
      return new Response(JSON.stringify({ error: `Invalid CAPTCHA: ${errorCodes}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Send Email with Nodemailer
    const emailUser = process.env.SMTP_EMAIL;
    const emailPass = process.env.SMTP_PASSWORD;
    const destEmail = process.env.CONTACT_DESTINATION_EMAIL;

    if (!emailUser || !emailPass || !destEmail) {
      throw new Error('SMTP configuration is missing');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"MINIT Website Form" <${emailUser}>`,
      to: destEmail,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
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
        <p><strong>Empresa:</strong> ${company} </p>
        <p><strong>Email:</strong> ${email}</p>
        <br>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
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
