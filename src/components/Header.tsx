import { ActiveTab } from '../types';
import { ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home & Mission' },
    { id: 'servicenow', label: 'ServiceNow Platform' },
    { id: 'staffing', label: 'Staffing & Services' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'advisor', label: 'AI GRC Advisor' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm" id="main-header">
      {/* Top Bar for Professional Contact Info */}
      <div className="bg-slate-900 px-4 py-2 text-xs text-slate-300 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-blue-400" />
              <a href="mailto:contactus@maynitcorporation.com" className="hover:text-white transition-colors">
                contactus@maynitcorporation.com
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-blue-400" />
              <a href="tel:+917355820907" className="hover:text-white transition-colors">
                +91 73558 20907
              </a>
            </span>
          </div>
          <div className="hidden items-center gap-4 sm:flex md:gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="h-3.5 w-3.5 text-blue-400" />
              <span>Princeton, New Jersey, USA</span>
            </span>
            <span className="h-3 w-px bg-slate-700"></span>
            <span className="font-semibold text-blue-400">Maynit Corp</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Corporate Branding */}
          <div 
            className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-90"
            onClick={() => setActiveTab('home')}
            id="brand-logo"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-700 to-slate-800 text-white shadow-md">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">MAYNIT</h1>
              <span className="text-[10px] font-semibold tracking-widest text-blue-600 uppercase">Corporation</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-blue-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-blue-600" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Consultation Fast CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('advisor')}
              id="header-cta-btn"
              className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/10 hover:bg-blue-700 transition-all hover:scale-[1.02]"
            >
              Consulting Portal
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="flex lg:hidden overflow-x-auto border-t border-slate-100 bg-slate-50 px-2 py-1.5 scrollbar-none" id="mobile-sub-nav">
        <div className="flex gap-1 min-w-max">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
