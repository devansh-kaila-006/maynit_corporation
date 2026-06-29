import { ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 px-4 md:px-8" id="main-footer">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Company Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-white" id="footer-logo">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
              <ShieldCheck className="h-5.5 w-5.5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight">MAYNIT</span>
              <span className="block text-[9px] font-semibold tracking-wider text-blue-400 uppercase leading-none">Corporation</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Empowering organizations to reach their fullest potential through ServiceNow platform excellence, governance, and tailored technical talent resourcing solutions.
          </p>
          <div className="text-xs text-slate-500">
            Co-founded in 2011 • Trusted Enterprise Platform Delivery
          </div>
        </div>

        {/* Quick Consulting Navigation */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-200">Our Pillars</h3>
          <ul className="space-y-2.5 text-sm" id="footer-pillars-links">
            <li>
              <button 
                onClick={() => setActiveTab('servicenow')} 
                className="hover:text-blue-400 transition-colors text-left"
              >
                ServiceNow Integration (GRC & ITOM)
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('staffing')} 
                className="hover:text-blue-400 transition-colors text-left"
              >
                Executive Search & Placements
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('leadership')} 
                className="hover:text-blue-400 transition-colors text-left"
              >
                Leadership & Strategic Vision
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('advisor')} 
                className="hover:text-blue-400 transition-colors text-left flex items-center gap-1"
              >
                AI digital transformation advisor
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-200">Get in Touch</h3>
          <ul className="space-y-3 text-sm" id="footer-contact-info">
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <a href="mailto:contactus@maynitcorporation.com" className="hover:text-white transition-colors block">
                  contactus@maynitcorporation.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <a href="tel:+917355820907" className="hover:text-white transition-colors block leading-tight">
                  +91 73558 20907
                </a>
                <a href="tel:+918708717010" className="hover:text-white transition-colors block leading-tight">
                  +91 870-8717010
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
              <span className="leading-tight">
                Princeton, New Jersey, USA - 08536
              </span>
            </li>
          </ul>
        </div>

        {/* Global Delivery Hub */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-200">Global Coverage</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Headquartered in Princeton, NJ, USA, Maynit manages enterprise partners and delivery teams globally across North America, APAC, and EMEA.
          </p>
          <div className="rounded-lg bg-slate-900 border border-slate-800 p-3 text-xs">
            <span className="block font-medium text-slate-300 mb-1">Execution Practice</span>
            <span className="text-slate-500">Combining global IT practices with dedicated local execution.</span>
          </div>
        </div>

      </div>

      <div className="mx-auto max-w-7xl pt-8 border-t border-slate-900 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {new Date().getFullYear()} Maynit Corporation. All rights reserved.
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <span>www.maynitcorporation.com</span>
            <ExternalLink className="h-3 w-3" />
          </span>
          <span className="text-slate-600">|</span>
          <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setActiveTab('contact')}>
            Privacy & Business Conduct
          </span>
        </div>
      </div>
    </footer>
  );
}
