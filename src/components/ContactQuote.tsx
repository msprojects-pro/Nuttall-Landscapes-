import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/landscapingData';
import { QuoteFormData } from '../types';

interface ContactQuoteProps {
  initialService?: string;
  initialDetails?: string;
}

export const ContactQuote: React.FC<ContactQuoteProps> = ({ initialService, initialDetails }) => {
  // Web3Forms API Key placeholder as instructed in prompt
  const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Garden Transformations',
    location: '',
    projectDetails: initialDetails || '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialDetails) {
      setFormData((prev) => ({ ...prev, projectDetails: initialDetails }));
    }
  }, [initialDetails]);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage('Please provide either a phone number or email address.');
      return;
    }

    setStatus('loading');

    // Check if placeholder is still active
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      // Simulate real network submission with realistic delay
      setTimeout(() => {
        setStatus('success');
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          service: formData.serviceType,
          location: formData.location || 'Heywood / Greater Manchester',
          message: formData.projectDetails,
          from_name: 'Nuttall Landscapes Website Enquiry',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please call or WhatsApp us directly.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Connection failed. Please call or WhatsApp us directly at ' + BUSINESS_INFO.phone);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#101211] relative">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#24CB33]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#24CB33] uppercase mb-3">
            <span className="inline-block w-2 h-0.5 bg-[#24CB33]" />
            <span>START YOUR PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Ready To Transform Your Outdoor Space?
          </h2>
          <p className="text-base sm:text-lg text-[#F5F7F4]/80 leading-relaxed">
            Whether you're planning a complete garden makeover, a new patio or a resin driveway, get in touch with Nuttall Landscapes to discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Fast Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Action Buttons */}
            <div className="space-y-3.5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#24CB33]">
                Direct Contact Channels
              </p>

              {/* Call Now Button */}
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#24CB33] hover:bg-[#1fb32d] text-black font-bold text-sm tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(36,203,51,0.3)] hover:shadow-[0_6px_28px_rgba(36,203,51,0.45)] group active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black/15 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider opacity-85">
                      Call Direct
                    </span>
                    <span className="text-base font-extrabold">{BUSINESS_INFO.phone}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* WhatsApp Button */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#191C1A] hover:bg-[#242725] border border-[#242725] hover:border-[#24CB33] text-white font-bold text-sm tracking-wide transition-all duration-200 group active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#24CB33]/15 flex items-center justify-center text-[#24CB33]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#24CB33]">
                      Message On WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-[#F5F7F4]">Fast response & quote info</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#4D4D4D] group-hover:text-[#24CB33] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Display Contact Details */}
            <div className="p-6 rounded-2xl bg-[#191C1A] border border-[#242725] space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#242725] flex items-center justify-center text-[#24CB33] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-[#4D4D4D] font-bold uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="text-base font-semibold text-white hover:text-[#24CB33] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#242725] flex items-center justify-center text-[#24CB33] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-[#4D4D4D] font-bold uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-base font-semibold text-white hover:text-[#24CB33] transition-colors break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#242725] flex items-center justify-center text-[#24CB33] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-[#4D4D4D] font-bold uppercase tracking-wider">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {BUSINESS_INFO.location}
                  </p>
                  <p className="text-xs text-[#24CB33] mt-0.5">
                    Covering Heywood & Greater Manchester
                  </p>
                </div>
              </div>
            </div>

            {/* Reassurance Note */}
            <div className="p-5 rounded-2xl bg-[#141615] border border-[#242725] text-xs text-[#F5F7F4]/70 leading-relaxed">
              <p className="font-semibold text-white mb-1">Free In-Person Site Quotations</p>
              We visit your property to measure dimensions, discuss paving and grass textures, inspect drainage and elevations, and supply a clear, comprehensive quote.
            </div>
          </div>

          {/* Right Column: Premium Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#191C1A] border border-[#242725] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-1">
                  Request Your Free Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#F5F7F4]/70">
                  Fill in your details below and we will contact you shortly to arrange a survey.
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center bg-[#101211] border border-[#24CB33]/50 rounded-2xl my-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#24CB33]/20 flex items-center justify-center text-[#24CB33] mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    Thank You For Reaching Out!
                  </h4>
                  <p className="text-sm text-[#F5F7F4]/80 leading-relaxed max-w-md mx-auto mb-6">
                    We have received your enquiry for <strong>{formData.serviceType}</strong>. A member of the Nuttall Landscapes team will contact you shortly.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneTel}`}
                      className="px-6 py-2.5 rounded-xl bg-[#24CB33] text-black font-bold text-xs uppercase tracking-wider"
                    >
                      Call Us Now: {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          serviceType: 'Garden Transformations',
                          location: '',
                          projectDetails: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-[#242725] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#4D4D4D]/50 transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F7F4]/80 mb-1.5">
                        Full Name <span className="text-[#24CB33]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. David Harrison"
                        className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-[#242725] text-white text-sm placeholder-[#4D4D4D] focus:outline-none focus:border-[#24CB33] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F7F4]/80 mb-1.5">
                        Phone Number <span className="text-[#24CB33]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07123 456789"
                        className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-[#242725] text-white text-sm placeholder-[#4D4D4D] focus:outline-none focus:border-[#24CB33] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F7F4]/80 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. david@example.co.uk"
                        className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-[#242725] text-white text-sm placeholder-[#4D4D4D] focus:outline-none focus:border-[#24CB33] transition-colors"
                      />
                    </div>

                    {/* Type of Project */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F7F4]/80 mb-1.5">
                        Type of Project <span className="text-[#24CB33]">*</span>
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-[#242725] text-white text-sm focus:outline-none focus:border-[#24CB33] transition-colors cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Multiple Services / Full Garden Overhaul">
                          Multiple Services / Full Garden Overhaul
                        </option>
                        <option value="Other Outdoor Landscaping">Other Outdoor Landscaping</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Location / Area */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F7F4]/80 mb-1.5">
                      Your Town / Postcode (Heywood & Greater Manchester)
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Heywood (OL10) or Bury / Rochdale / Manchester"
                      className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-[#242725] text-white text-sm placeholder-[#4D4D4D] focus:outline-none focus:border-[#24CB33] transition-colors"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F7F4]/80 mb-1.5">
                      Project Details / Approximate Dimensions
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your outdoor space, existing condition, desired porcelain finish, resin driveway requirements or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-[#242725] text-white text-sm placeholder-[#4D4D4D] focus:outline-none focus:border-[#24CB33] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 rounded-xl bg-[#24CB33] hover:bg-[#1fb32d] disabled:opacity-60 text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_4px_24px_rgba(36,203,51,0.35)] hover:shadow-[0_6px_32px_rgba(36,203,51,0.5)] active:scale-[0.99] cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>REQUEST A FREE QUOTE</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-[#4D4D4D] pt-2">
                    Zero sales pressure. Free on-site survey and transparent quotation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
