/**
 * Contact Form API Route
 * 
 * Handles contact form submissions with reCAPTCHA v3 validation and email sending.
 * Configured to use Mailjet SMTP service.
 * 
 * Environment Variables (configured in .env.local):
 * - SMTP_HOST: Mailjet SMTP hostname (smtp.mailjet.com)
 * - SMTP_PORT: SMTP server port (587 for TLS)
 * - SMTP_USER: Mailjet API Key
 * - SMTP_PASSWORD: Mailjet Secret Key
 * - EMAIL_FROM: From email address
 */

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECAPTCHA_SECRET_KEY = '6LfPRgIsAAAAAKwNgHr8U5cX2pAMEP2TuaOlbt2-';
const RECIPIENT_EMAIL = 'info@qfisol.com';

// Validate reCAPTCHA v3 token
async function validateRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    
    // reCAPTCHA v3 returns a score (0.0 to 1.0)
    // Consider scores above 0.5 as valid human interaction
    return data.success === true && (data.score || 0) > 0.5;
  } catch (error) {
    console.error('reCAPTCHA validation error:', error);
    return false;
  }
}

// Generate intelligent email subject based on form content
function generateSubject(formData: {
  name: string;
  company?: string;
  industry?: string;
  message: string;
}): string {
  const { name, company, industry, message } = formData;
  
  // Extract key topics from message
  const messageLower = message.toLowerCase();
  let topic = 'Inquiry';
  
  if (messageLower.includes('consultation') || messageLower.includes('consult')) {
    topic = 'Consultation Request';
  } else if (messageLower.includes('quote') || messageLower.includes('pricing')) {
    topic = 'Pricing Inquiry';
  } else if (messageLower.includes('service') || messageLower.includes('accounting')) {
    topic = 'Service Inquiry';
  } else if (messageLower.includes('support') || messageLower.includes('help')) {
    topic = 'Support Request';
  }
  
  const companyPart = company ? ` from ${company}` : '';
  const industryPart = industry && industry !== 'Select an industry' ? ` (${industry})` : '';
  
  return `${topic}${companyPart}${industryPart} - ${name}`;
}

// Send email using nodemailer
async function sendEmail(formData: {
  name: string;
  email: string;
  company?: string;
  industry?: string;
  message: string;
}) {
  // Check environment variables
  const smtpHost = process.env.SMTP_HOST || 'smtp.mailjet.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  // Remove quotes from EMAIL_FROM if present
  const emailFrom = (process.env.EMAIL_FROM || 'info@qfisol.com').replace(/^["']|["']$/g, '');

  console.log('Email Configuration:', {
    host: smtpHost,
    port: smtpPort,
    user: smtpUser ? `${smtpUser.substring(0, 10)}...` : 'NOT SET',
    password: smtpPassword ? 'SET' : 'NOT SET',
    from: emailFrom,
  });

  if (!smtpUser || !smtpPassword) {
    throw new Error('SMTP credentials are not configured. Please check your .env.local file.');
  }

  // Mailjet SMTP configuration
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false, // Use TLS (true for 465, false for other ports)
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
    // Add timeout and debug options
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  // Verify transporter connection
  console.log('Verifying SMTP connection...');
  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');
  } catch (verifyError) {
    const verifyMsg = verifyError instanceof Error 
      ? verifyError.message 
      : (verifyError !== null && verifyError !== undefined ? String(verifyError) : 'Unknown verification error');
    console.error('SMTP verification failed:', {
      error: verifyError,
      message: verifyMsg,
      type: typeof verifyError,
    });
    throw new Error(`SMTP connection failed: ${verifyMsg}`);
  }

  const subject = generateSubject(formData);
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0015ff;">New Contact Form Submission</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        ${formData.industry && formData.industry !== 'Select an industry' ? `<p><strong>Industry:</strong> ${formData.industry}</p>` : ''}
      </div>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #333;">Message:</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
      </div>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
      
      <p style="color: #666; font-size: 12px;">
        This email was sent from the contact form on your website.
        Reply directly to this email to respond to ${formData.name}.
      </p>
    </div>
  `;

  const textContent = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}
${formData.industry && formData.industry !== 'Select an industry' ? `Industry: ${formData.industry}` : ''}

Message:
${formData.message}
  `.trim();

  // For Mailjet, the "from" email must be a verified sender in your Mailjet account
  // Format: "Display Name <email@domain.com>" or just "email@domain.com"
  const fromAddress = emailFrom.includes('<') 
    ? emailFrom 
    : `"Contact Form" <${emailFrom}>`;

  const mailOptions = {
    from: fromAddress,
    to: RECIPIENT_EMAIL,
    replyTo: formData.email,
    subject: subject,
    text: textContent,
    html: htmlContent,
  };

  console.log('Sending email...', {
    from: mailOptions.from,
    to: mailOptions.to,
    subject: mailOptions.subject,
  });

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      response: info.response,
    });
    return info;
  } catch (sendError) {
    const sendMsg = sendError instanceof Error 
      ? sendError.message 
      : (sendError !== null && sendError !== undefined ? String(sendError) : 'Unknown send error');
    console.error('Email sending failed:', {
      error: sendError,
      message: sendMsg,
      type: typeof sendError,
    });
    throw new Error(`Failed to send email: ${sendMsg}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { recaptchaToken, name, email, company, industry, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

        // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA token is missing' },
        { status: 400 }
      );
    }

    const isValidRecaptcha = await validateRecaptcha(recaptchaToken);

    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'reCAPTCHA validation failed. Please try again.' },
        { status: 403 }
      );
    }

    // Send email
    await sendEmail({
      name,
      email,
      company,
      industry,
      message,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Ensure we always have a valid error message
    let errorMessage = 'Unknown error';
    let errorDetails: string | undefined;
    
    if (error instanceof Error) {
      errorMessage = error.message || 'Failed to send email';
      errorDetails = error.stack;
    } else if (error !== null && error !== undefined) {
      errorMessage = String(error);
    } else {
      errorMessage = 'Failed to send email. No error details available.';
    }
    
    console.error('Contact form error:', {
      message: errorMessage,
      details: errorDetails,
      error: error,
      errorType: typeof error,
    });

    // Return more detailed error message for debugging
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
