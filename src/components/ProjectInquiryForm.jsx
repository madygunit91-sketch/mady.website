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
    
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Failed to submit');
      }
    } catch (error) {
      console.error('Network error:', error);
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
          <div className="text-center py-12">
            <svg className="mx-auto mb-4 size-12 text-gilt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="body-copy text-bone/80">Thank you for your inquiry. We will review your details and get back to you shortly with an honest assessment.</p>
            <button onClick={onClose} className="mt-8 rounded-full bg-bone px-6 py-2.5 text-[0.9rem] font-medium text-ink transition-transform hover:-translate-y-px">
              Close
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
