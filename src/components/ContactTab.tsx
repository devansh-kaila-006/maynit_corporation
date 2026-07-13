import React, { useState } from 'react';
import { FAQS, OFFICE_LOCATIONS } from '../data';
import { 
  Mail, 
  Phone, 
  MapPin, 
  HelpCircle, 
  Plus, 
  Minus,
  Building,
  ShieldCheck,
  Clock,
  Globe
} from 'lucide-react';

export default function ContactTab() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="space-y-16 pb-12" id="contact-view">
      
      {/* Page Title Header */}
      <section className="text-left space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Connect With Us</span>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" id="contact-title">
          Connect with Our Delivery Partners
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Whether you require a rapid ServiceNow GRC assessment, specialized ITOM consulting, or certified engineers to fill immediate project surges, our leadership team is ready to assist.
        </p>
      </section>

      {/* Direct Contact Cards Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6" id="direct-contact-channels">
        
        {/* Email Card */}
        <div className="rounded-3xl border border-blue-100/60 bg-gradient-to-br from-blue-50/20 via-white to-slate-50/20 p-6 text-left space-y-4 shadow-sm hover:scale-[1.01] transition-transform">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Mail className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</h4>
            <a 
              href="mailto:contactus@maynitcorporation.com" 
              className="block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors break-words"
            >
              contactus@maynitcorporation.com
            </a>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Send us your request for proposals, statements of work, or general business inquiries.
          </p>
        </div>

        {/* Phone Card */}
        <div className="rounded-3xl border border-blue-100/60 bg-gradient-to-br from-blue-50/20 via-white to-slate-50/20 p-6 text-left space-y-4 shadow-sm hover:scale-[1.01] transition-transform">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Phone className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Executive Hotline</h4>
            <a 
              href="tel:+917355820907" 
              className="block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              +91 73558 20907
            </a>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Call us directly to speak with an executive talent advisor or senior ServiceNow consultant.
          </p>
        </div>

        {/* Business Hours Card */}
        <div className="rounded-3xl border border-blue-100/60 bg-gradient-to-br from-blue-50/20 via-white to-slate-50/20 p-6 text-left space-y-4 shadow-sm hover:scale-[1.01] transition-transform">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Clock className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Consultation Hours</h4>
            <span className="block text-sm font-bold text-slate-900">
              Monday – Friday (EST & IST)
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Our global delivery teams operate across multiple time zones to provide continuous coverage.
          </p>
        </div>

      </section>

      {/* Main Grid: Locations & SLA */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="contact-locations-and-details">
        
        {/* Office Locations */}
        <div className="lg:col-span-8 space-y-6 text-left" id="locations-panel">
          
          <div className="border-b border-slate-200 pb-3 flex items-center gap-2 text-slate-900">
            <Building className="h-4.5 w-4.5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Global Headquarters & Delivery Centers
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFICE_LOCATIONS.map((loc, idx) => (
              <div 
                key={idx} 
                className="rounded-3xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between" 
                id={`location-${idx}`}
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-950 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                      {loc.city}
                    </h4>
                    <span className="block text-[10px] font-semibold text-blue-600 uppercase tracking-wider">
                      {loc.role}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {loc.address}
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span className="truncate">{loc.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span>{loc.phone.split(',')[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* SLA commitment & Global Coverage Info */}
        <div className="lg:col-span-4 space-y-6 text-left" id="security-assurance-panel">
          
          <div className="border-b border-slate-200 pb-3 flex items-center gap-2 text-slate-900">
            <Globe className="h-4.5 w-4.5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Security & Coverage
            </span>
          </div>

          {/* Quick SLA Assurance */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-50/50 via-white to-slate-50/50 text-slate-800 p-6 border border-blue-100/60 text-xs leading-relaxed space-y-3 relative overflow-hidden shadow-sm">
            <div className="flex items-center gap-1.5 text-blue-600 relative z-10">
              <ShieldCheck className="h-4 w-4" />
              <span className="font-bold uppercase tracking-wider text-[10px]">SLA Commitment Assurance</span>
            </div>
            <p className="text-slate-600 relative z-10 font-sans">
              We operate under standard compliance guarantees. All data shared through our consulting channels is protected, secure, and restricted from public repositories or external telemetry networks.
            </p>
            {/* Ambient glow decoration */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl"></div>
          </div>

          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 text-xs text-slate-600 space-y-2">
            <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Global Sourcing Reach</h4>
            <p className="leading-relaxed">
              Headquartered in Princeton, New Jersey, Maynit leverages certified delivery networks globally across North America, India, APAC, and EMEA.
            </p>
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
