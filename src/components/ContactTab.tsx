import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { FAQS, OFFICE_LOCATIONS } from '../data';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  HelpCircle, 
  Plus, 
  Minus,
  MessageSquare,
  Building,
  ShieldCheck
} from 'lucide-react';

export default function ContactTab() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    serviceOfInterest: 'ServiceNow Implementation'
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill out all required fields (Name, Email, Message).');
      return;
    }

    // Save/persist simulation
    setSubmitted(true);
    setTimeout(() => {
      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        serviceOfInterest: 'ServiceNow Implementation'
      });
    }, 1000);
  };

  return (
    <div className="space-y-16 pb-12" id="contact-view">
      
      {/* Page Title Header */}
      <section className="text-left space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Global Offices</span>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" id="contact-title">
          Connect with Our Delivery Partners
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Whether you require a rapid ServiceNow GRC assessment, specialized ITOM consulting, or certified engineers to fill immediate project surges, our leadership team is ready to assist.
        </p>
      </section>

      {/* Grid: Form and Info */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-main-grid">
        
        {/* Left Side: Professional Contact Form */}
        <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm text-left space-y-6 hover:shadow-md transition-all">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
            <MessageSquare className="h-5 w-5 text-blue-600" />
            <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Consultation intake form
            </span>
          </div>

          {submitted ? (
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 text-center space-y-3 shadow-inner">
              <CheckCircle className="mx-auto h-10 w-10 text-emerald-600 animate-bounce" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Consultation Submission Received!</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you for contacting Maynit Corporation. One of our senior ServiceNow partners or client managers will review your profile and contact you within 24 business hours.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g., Jane Doe"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="e.g., jane@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="e.g., Enterprise Inc."
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="e.g., +1 (555) 123-4567"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                  Service of Interest
                </label>
                <select
                  value={formData.serviceOfInterest}
                  onChange={(e) => setFormData(prev => ({ ...prev, serviceOfInterest: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none"
                >
                  <option value="ServiceNow Implementation">ServiceNow Implementation (GRC & ITOM)</option>
                  <option value="Executive Sourcing">Executive Search & Placement</option>
                  <option value="Contract Staffing">Contract Staffing & Support</option>
                  <option value="Strategic Business Assessment">Strategic Business Consulting</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                  Detailed Inquiry <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  placeholder="Outline your ServiceNow system scope, compliance framework requirements, or recruitment needs..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/15 hover:bg-blue-700 transition-all hover:scale-[1.01]"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Submit Secure Consulting Message</span>
              </button>

            </form>
          )}

        </div>

        {/* Right Side: Office Locations Map list */}
        <div className="lg:col-span-5 space-y-6 text-left" id="locations-panel">
          
          <div className="border-b border-slate-200 pb-3 flex items-center gap-2 text-slate-900">
            <Building className="h-4.5 w-4.5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Global Headquarters & Delivery
            </span>
          </div>

          <div className="space-y-4">
            {OFFICE_LOCATIONS.map((loc, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 space-y-3 shadow-inner hover:scale-[1.01] transition-transform" id={`location-${idx}`}>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-950 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                    {loc.city}
                  </h4>
                  <span className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    {loc.role}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-normal">
                  {loc.address}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-200/50 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span>{loc.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick SLA Assurance */}
          <div className="rounded-3xl bg-slate-900 text-white p-5 border border-slate-800 text-xs leading-relaxed space-y-2 relative overflow-hidden shadow-xl">
            <div className="flex items-center gap-1.5 text-blue-400 relative z-10">
              <ShieldCheck className="h-4 w-4 animate-pulse" />
              <span className="font-bold uppercase tracking-wider">SLA Commitment Assurance</span>
            </div>
            <p className="text-slate-300 relative z-10">
              We operate under standard compliance guarantees. All data shared through our Consulting and Intake channels is protected, secure, and restricted from public repositories or external telemetry networks.
            </p>
            {/* Ambient glow decoration */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>

        </div>

      </section>

      {/* Accordion FAQ Section */}
      <section className="mx-auto max-w-4xl text-left space-y-8" id="faq-section">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Common Queries</h2>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3.5" id="faqs-accordion">
          {FAQS.map((faq, index) => {
            const isActive = activeFaq === index;
            return (
              <div 
                key={index} 
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-sm"
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => setActiveFaq(isActive ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-blue-600 shrink-0" />
                    {faq.question}
                  </span>
                  <div className="rounded-full bg-slate-100 p-1 text-slate-500 shrink-0 ml-4">
                    {isActive ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </div>
                </button>
                
                {isActive && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
