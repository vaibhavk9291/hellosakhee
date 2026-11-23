import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required.' },
        { status: 400, headers: corsHeaders }
      );
    }

    const host = process.env.ZOHO_HOST || 'smtp.zoho.in';
    const user = process.env.ZOHO_USER || 'contact@hellosakhee.com';
    const pass = process.env.ZOHO_PASS || 'QHfPKwyMVmtH';

    const transporter = nodemailer.createTransport({
      host: host,
      port: 465,
      secure: true,
      auth: { user, pass }
    });

    const emailSubject = subject?.trim()
      ? `[Hello Sakhee Inquiry] ${subject}`
      : `[Hello Sakhee Inquiry] New message from ${name}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fff9f9; color: #472639; margin: 0; padding: 24px; }
            .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid rgba(71,38,57,0.12); padding: 32px; box-shadow: 0 4px 20px rgba(71,38,57,0.06); }
            .header { border-bottom: 2px solid #e7c8c2; padding-bottom: 16px; margin-bottom: 24px; }
            .brand { font-size: 22px; font-weight: 700; color: #472639; letter-spacing: -0.5px; }
            .tagline { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #9b533b; margin-top: 4px; }
            .field { margin-bottom: 18px; }
            .label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #9b533b; margin-bottom: 4px; }
            .value { font-size: 16px; color: #381d2c; line-height: 1.5; }
            .message-box { background: #fff9f9; border: 1px solid #e7c8c2; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #472639; }
            .footer { margin-top: 28px; padding-top: 16px; border-top: 1px solid rgba(71,38,57,0.1); font-size: 12px; color: rgba(71,38,57,0.6); }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="brand">Hello Sakhee</div>
              <div class="tagline">Website Contact Form Submission</div>
            </div>

            <div class="field">
              <div class="label">From</div>
              <div class="value"><strong>${name}</strong> &lt;<a href="mailto:${email}" style="color: #472639;">${email}</a>&gt;</div>
            </div>

            ${subject ? `
            <div class="field">
              <div class="label">Subject</div>
              <div class="value">${subject}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${message || '(No message content provided)'}</div>
            </div>

            <div class="footer">
              This message was sent from the Hello Sakhee website contact form. You can reply directly to this email to contact <strong>${name}</strong> (${email}).
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Hello Sakhee Website" <${user}>`,
      to: user,
      replyTo: email,
      subject: emailSubject,
      text: `New contact form submission from ${name} (${email}):\n\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message || ''}`,
      html: htmlContent
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully.'
    }, { headers: corsHeaders });
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500, headers: corsHeaders }
    );
  }
}
