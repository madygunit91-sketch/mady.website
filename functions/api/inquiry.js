// Cloudflare Worker for mady.website
// Route to attach in Cloudflare Dashboard: *mady.website/api/*
export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method === 'POST') {
      try {
        const formData = await request.json();
        const { name, email, phone, projectType, budget, details } = formData || {};

        if (!email || !name) {
          return new Response(JSON.stringify({ success: false, error: 'Missing required fields' }), {
            status: 400,
            headers: corsHeaders
          });
        }

        const RESEND_API_KEY = env?.RESEND_API_KEY || 're_fHR9jcdQ_BDFS6cMjkzYroDVzA4r1GK4x';
        const FOUNDER_EMAILS = ['madygunit@me.com', 'madygunit91@gmail.com'];
        const SENDER_EMAIL = 'Syed Hassan <info@mady.website>';
        const timestamp = new Date().toUTCString();

        const clientText = `Hi there,

I'm Syed Hassan, founder of Horizon Digital LTD.

Thank you for getting in touch and for your interest in what we're building.

I've received your query and have all the information you've submitted. I'll personally review it and get back to you shortly via phone or email, depending on the best way to discuss your enquiry.

Horizon Digital was created around a simple belief: technology should make ambitious ideas possible, not make them more complicated.

We work across digital products, web development, AI, automation, and emerging technologies, turning ideas into practical and scalable digital solutions.

If you've reached out regarding a project, partnership, service, or simply an idea you'd like to explore, I look forward to learning more about it and seeing how we can help.

In the meantime, you can learn more about Horizon Digital here:
https://mady.website?utm_source=chatgpt.com

If you need to provide any additional information before I get back to you, you can reply directly to this email or contact:
info@mady.website

Thank you again for reaching out. I'll be in touch soon.

Best regards,
Syed Hassan
Founder & Director
Horizon Digital LTD
info@mady.website
https://mady.website?utm_source=chatgpt.com`;

        const clientHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; color: #1a1a1c; padding: 40px 32px; border-radius: 12px; border: 1px solid #eaeaea; line-height: 1.65; font-size: 15px;">
            <div style="margin-bottom: 28px; border-bottom: 2px solid #f7d160; padding-bottom: 16px;">
              <span style="font-weight: 700; letter-spacing: 0.2em; font-size: 11px; text-transform: uppercase; color: #b8860b;">HORIZON DIGITAL LTD</span>
            </div>
            <p style="margin-top: 0; font-size: 16px; font-weight: 500; color: #111;">Hi there,</p>
            <p>I'm <strong>Syed Hassan</strong>, founder of <strong>Horizon Digital LTD</strong>.</p>
            <p>Thank you for getting in touch and for your interest in what we're building.</p>
            <p>I've received your query and have all the information you've submitted. I'll personally review it and get back to you shortly via phone or email, depending on the best way to discuss your enquiry.</p>
            <p>Horizon Digital was created around a simple belief: technology should make ambitious ideas possible, not make them more complicated.</p>
            <p>We work across digital products, web development, AI, automation, and emerging technologies, turning ideas into practical and scalable digital solutions.</p>
            <p>If you've reached out regarding a project, partnership, service, or simply an idea you'd like to explore, I look forward to learning more about it and seeing how we can help.</p>
            <p>In the meantime, you can learn more about Horizon Digital here:<br/>
              <a href="https://mady.website?utm_source=chatgpt.com" style="color: #b8860b; font-weight: 600; text-decoration: underline;" target="_blank">mady.website</a>
            </p>
            <p>If you need to provide any additional information before I get back to you, you can reply directly to this email or contact:<br/>
              <a href="mailto:info@mady.website" style="color: #b8860b; font-weight: 600; text-decoration: underline;">info@mady.website</a>
            </p>
            <p style="margin-bottom: 28px;">Thank you again for reaching out. I'll be in touch soon.</p>
            <div style="border-top: 1px solid #eaeaea; padding-top: 20px; color: #444; font-size: 14px;">
              <p style="margin: 0 0 4px 0; font-weight: 600; color: #111;">Best regards,</p>
              <p style="margin: 0; font-weight: 600; color: #111;">Syed Hassan</p>
              <p style="margin: 2px 0 0 0; color: #666; font-size: 13px;">Founder &amp; Director</p>
              <p style="margin: 2px 0 12px 0; color: #b8860b; font-size: 13px; font-weight: 600;">Horizon Digital LTD</p>
              <p style="margin: 0 0 4px 0; font-size: 13px;"><a href="mailto:info@mady.website" style="color: #666; text-decoration: none;">info@mady.website</a></p>
              <p style="margin: 0; font-size: 13px;"><a href="https://mady.website?utm_source=chatgpt.com" style="color: #b8860b; text-decoration: underline;" target="_blank">mady.website</a></p>
            </div>
          </div>
        `;

        const adminHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0b0c; color: #f3f3f2; padding: 32px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px;">
              <p style="color: #f7d160; text-transform: uppercase; font-size: 11px; letter-spacing: 0.2em; margin: 0 0 8px 0;">HORIZON DIGITAL LTD</p>
              <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 500;">⚡ New Project Inquiry Received</h1>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px; width: 140px;">Client Name:</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: 600;">${name || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Email Address:</td>
                <td style="padding: 10px 0; color: #f7d160; font-size: 14px;"><a href="mailto:${email}" style="color: #f7d160; text-decoration: underline;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Phone Number:</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 14px;"><a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone || 'Not provided'}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Project Type:</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${projectType || 'General Inquiry'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Budget:</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${budget || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Submitted At:</td>
                <td style="padding: 10px 0; color: rgba(243,243,242,0.8); font-size: 13px;">${timestamp}</td>
              </tr>
            </table>
            <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 24px;">
              <p style="color: rgba(243,243,242,0.6); font-size: 11px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.1em;">Project Details / Message</p>
              <p style="color: #f3f3f2; font-size: 14px; line-height: 1.65; margin: 0; white-space: pre-wrap;">${details || 'No additional details provided.'}</p>
            </div>
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px; font-size: 12px; color: rgba(243,243,242,0.4); display: flex; justify-content: space-between;">
              <span>Inquiry Form Submission — Horizon Digital</span>
              <span>mady.website</span>
            </div>
          </div>
        `;

        const [adminRes, clientRes] = await Promise.all([
          fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'Horizon Digital <info@mady.website>',
              to: FOUNDER_EMAILS,
              reply_to: `${name} <${email}>`,
              subject: `⚡ New Project Inquiry: ${name} (${projectType || 'General'})`,
              html: adminHtml,
              text: `New project inquiry from ${name} (${email}, ${phone || 'N/A'})\n\nProject Type: ${projectType}\nBudget: ${budget}\nDetails:\n${details}`
            })
          }),
          fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: SENDER_EMAIL,
              to: [email],
              reply_to: 'info@mady.website',
              subject: 'Thank You for Contacting Horizon Digital',
              text: clientText,
              html: clientHtml
            })
          })
        ]);

        const adminData = await adminRes.json();
        const clientData = await clientRes.json();

        return new Response(JSON.stringify({
          success: true,
          adminEmailId: adminData.id,
          clientEmailId: clientData.id
        }), {
          status: 200,
          headers: corsHeaders
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: corsHeaders
        });
      }
    }

    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405, headers: corsHeaders });
  }
};
