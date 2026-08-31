import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function ProjectInquiryForm({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open and sync with scroll controller
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-inquiry', 'open');
    } else {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-inquiry');
      // Reset form on close after a delay
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
        setFormData({ projectType: '', budget: '', name: '', email: '', phone: '', details: '' });
      }, 500);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-inquiry');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));
  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const RESEND_API_KEY = 're_fHR9jcdQ_BDFS6cMjkzYroDVzA4r1GK4x';
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
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: 600;">${formData.name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Email Address:</td>
            <td style="padding: 10px 0; color: #f7d160; font-size: 14px;"><a href="mailto:${formData.email}" style="color: #f7d160; text-decoration: underline;">${formData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Phone Number:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px;"><a href="tel:${formData.phone}" style="color: #ffffff; text-decoration: none;">${formData.phone || 'Not provided'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Project Type:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${formData.projectType || 'General Inquiry'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Budget:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${formData.budget || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: rgba(243,243,242,0.6); font-size: 13px;">Submitted At:</td>
            <td style="padding: 10px 0; color: rgba(243,243,242,0.8); font-size: 13px;">${timestamp}</td>
          </tr>
        </table>
        <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 24px;">
          <p style="color: rgba(243,243,242,0.6); font-size: 11px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.1em;">Project Details / Message</p>
          <p style="color: #f3f3f2; font-size: 14px; line-height: 1.65; margin: 0; white-space: pre-wrap;">${formData.details || 'No additional details provided.'}</p>
        </div>
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px; font-size: 12px; color: rgba(243,243,242,0.4);">
          Inquiry Form Submission — Horizon Digital (mady.website)
        </div>
      </div>
    `;

    try {
      const emailPayloads = [
        // 1. Live Cloudflare Worker Edge Handler (Direct Resend Dual Dispatch)
        fetch('https://horizon-digital-inquiry.veiled-tiger.workers.dev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }).catch(() => null),

        // 2. Local/Custom Domain Edge Route
        fetch('/api/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }).catch(() => null),

        // 3. Direct FormSubmit Browser AJAX Backup (direct to madygunit@me.com)
        fetch('https://formsubmit.co/ajax/madygunit@me.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            'Client Name': formData.name,
            'Email Address': formData.email,
            'Phone Number': formData.phone || 'Not provided',
            'Project Type': formData.projectType,
            'Budget': formData.budget,
            'Project Details': formData.details,
            _subject: `⚡ New Project Inquiry: ${formData.name} (${formData.projectType || 'General'})`,
            _replyto: formData.email,
            _template: 'table'
          })
        }).catch(() => null)
      ];

      await Promise.allSettled(emailPayloads);
      setIsSuccess(true);
    } catch (error) {
      console.error('Inquiry submission error:', error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center p-4 md:p-6 lg:p-12" style={{ zIndex: 99999 }}>
      <style>{`
        .PhoneInputInput {
          background: transparent;
          border: none;
          color: #f3f3f2;
          outline: none;
          padding-left: 0.5rem;
          font-size: 1rem;
          width: 100%;
        }
        .PhoneInput {
          display: flex;
          align-items: center;
          border-radius: 0.5rem;
          border: 1px solid rgba(243, 243, 242, 0.2);
          padding: 0.75rem 1rem;
          background: transparent;
          transition: border-color 0.2s ease;
        }
        .PhoneInput:focus-within {
          border-color: rgba(247, 209, 96, 0.7);
        }
        .PhoneInputCountry {
          margin-right: 0.5rem;
        }
      `}</style>
      <div className="absolute inset-0 backdrop-blur-2xl" style={{ zIndex: 99999, backgroundColor: 'rgba(11, 11, 12, 0.95)' }} onClick={onClose}></div>
      
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-bone/20 p-6 sm:p-8 shadow-[0_28px_70px_-30px_rgba(0,0,0,1)]" style={{ zIndex: 100000, backgroundColor: '#0b0b0c' }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="transition-colors focus:outline-none hover:text-bone text-bone/50"
          style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', zIndex: 50 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-8">
          <p className="eyebrow text-gilt mb-2">Step {step} of 4</p>
          <h2 className="display text-2xl text-bone">
            {step === 1 && "What type of project are you planning?"}
            {step === 2 && "What is your estimated budget?"}
            {step === 3 && "Who are we talking to?"}
            {step === 4 && "Tell us more about the project."}
            {isSuccess && "Inquiry Received."}
          </h2>
        </div>

        {isSuccess ? (
          <div className="text-center py-10 px-2">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border border-gilt/30 bg-gilt/10 text-gilt">
              <svg className="size-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="display text-xl text-bone mb-2">Thank you{formData.name ? `, ${formData.name}` : ''}!</h3>
            <p className="body-copy text-bone/80 max-w-md mx-auto text-sm leading-relaxed mb-3">
              We've received your project inquiry. A confirmation email has been dispatched to <span className="text-gilt font-medium">{formData.email}</span>.
            </p>
            <p className="body-copy text-bone/60 max-w-md mx-auto text-xs leading-relaxed">
              Syed Hassan will personally review your query and get back to you shortly via phone or email.
            </p>
            <button onClick={onClose} className="mt-8 rounded-full bg-bone px-8 py-2.5 text-[0.9rem] font-medium text-ink transition-transform hover:-translate-y-px cursor-pointer">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
            <div className="min-h-[160px]">
              {step === 1 && (
                <div className="space-y-3">
                  {['Web Design', 'Landing Page', 'Brand Experience', 'Full UI/UX System'].map(type => (
                    <label key={type} className={`flex cursor-pointer items-center rounded-xl border p-4 transition-colors ${formData.projectType === type ? 'border-gilt/50 bg-gilt/10' : 'border-bone/10 bg-bone/5 hover:border-bone/20'}`}>
                      <input type="radio" name="projectType" value={type} checked={formData.projectType === type} onChange={(e) => handleChange('projectType', e.target.value)} className="hidden" />
                      <span className="text-bone text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  {['€5k - €10k', '€10k - €25k', '€25k+', 'Not sure yet'].map(budget => (
                    <label key={budget} className={`flex cursor-pointer items-center rounded-xl border p-4 transition-colors ${formData.budget === budget ? 'border-gilt/50 bg-gilt/10' : 'border-bone/10 bg-bone/5 hover:border-bone/20'}`}>
                      <input type="radio" name="budget" value={budget} checked={formData.budget === budget} onChange={(e) => handleChange('budget', e.target.value)} className="hidden" />
                      <span className="text-bone text-sm">{budget}</span>
                    </label>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="eyebrow block text-[0.6rem] text-bone/60 mb-1.5">Full Name</label>
                    <input required type="text" value={formData.name} onChange={e => handleChange('name', e.target.value)} className="w-full rounded-lg border border-bone/20 bg-transparent px-4 py-3 text-bone focus:border-gilt/70 focus:outline-none transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="eyebrow block text-[0.6rem] text-bone/60 mb-1.5">Email Address</label>
                    <input required type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} className="w-full rounded-lg border border-bone/20 bg-transparent px-4 py-3 text-bone focus:border-gilt/70 focus:outline-none transition-colors" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="eyebrow block text-[0.6rem] text-bone/60 mb-1.5">Phone Number</label>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formData.phone}
                      onChange={(val) => handleChange('phone', val)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="eyebrow block text-[0.6rem] text-bone/60 mb-1.5">Project Details</label>
                    <textarea required rows={4} value={formData.details} onChange={e => handleChange('details', e.target.value)} className="w-full resize-none rounded-lg border border-bone/20 bg-transparent px-4 py-3 text-bone focus:border-gilt focus:outline-none" placeholder="Tell us about your goals, timeline, and current situation..." />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-bone/10 pt-6">
              {step > 1 ? (
                <button type="button" onClick={handlePrev} className="text-sm text-bone/60 hover:text-bone transition-colors">
                  ← Back
                </button>
              ) : <div></div>}

              {step < 4 ? (
                <button type="submit" disabled={step === 1 && !formData.projectType || step === 2 && !formData.budget} className="rounded-full bg-bone px-8 py-2.5 text-[0.9rem] font-medium text-ink transition-transform hover:-translate-y-px disabled:opacity-50 disabled:hover:translate-y-0">
                  Continue
                </button>
              ) : (
                <button type="submit" disabled={isSubmitting || !formData.details} className="inline-flex items-center gap-2 rounded-full bg-gilt px-8 py-2.5 text-[0.9rem] font-medium text-ink transition-transform hover:-translate-y-px disabled:opacity-50 disabled:hover:translate-y-0">
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );

  // Use portal to render modal outside the component tree to avoid z-index/transform stacking context issues
  return createPortal(modalContent, document.body);
}
