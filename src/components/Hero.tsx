import { motion } from 'motion/react';
import { ActiveTab } from '../types';
import { ShieldCheck, ArrowRight, Shield, Award, Users, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { INDUSTRIES } from '../data';

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  const stats = [
    { value: '25+', label: 'Years IT Leadership' },
    { value: '2011', label: 'Co-Founded Maynit' },
    { value: '3+', label: 'Global Regions Active' },
    { value: '50%', label: 'Audit Effort Deflected' },
  ];

  const expertises = ['ITSM', 'ITOM', 'GRC', 'ITBM', 'SecOps', 'CSM', 'HRSD'];

  return (
    <div className="space-y-12 pb-16 animate-fade-in text-slate-800" id="home-view">
      
      {/* 1. Light, Soothing Hero Banner Row */}
      <section className="grid grid-cols-12 gap-6" id="bento-hero-section">
        
        {/* Left: Main elegant banner card (Lighter, airier, comforting look) */}
        <div className="col-span-12 lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between text-left relative overflow-hidden" id="hero-banner">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/60 border border-blue-100/60 px-3.5 py-1 text-xs font-medium text-blue-700">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>ServiceNow & Strategic Advisory Partners</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl" id="hero-title">
              Empowering enterprise scale with <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">clarity and flow</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl" id="hero-description">
              We design structured ServiceNow architectures and coordinate high-caliber talent solutions to streamline workflows, deflecting complexity and audit overhead for global institutions.
            </p>

            {/* Concise strategic bio */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/40 p-4 flex gap-3.5 items-start max-w-xl">
              <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100/30">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-slate-900">Founders' Vision</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  "Our goal is absolute alignment. We configure resilient platform tools and match pre-vetted specialists to deliver measurable operational trust."
                </p>
              </div>
            </div>
          </div>

          {/* Simple Clean CTAs */}
          <div className="flex flex-wrap gap-3.5 pt-8 relative z-10">
            <button
              onClick={() => setActiveTab('contact')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5.5 py-3 text-xs font-semibold text-white shadow-md shadow-blue-500/10 hover:bg-blue-700 transition-all hover:scale-[1.01]"
              id="hero-cta-advisor"
            >
              Schedule Strategy Session
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setActiveTab('servicenow')}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5.5 py-3 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              id="hero-cta-capabilities"
            >
              View Pillars
            </button>
          </div>

          {/* Subtle decoration */}
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-50/30 rounded-full blur-3xl"></div>
        </div>

        {/* Right: Soft, Eye-Friendly Executive Highlight Card */}
        <div className="col-span-12 lg:col-span-5 bg-gradient-to-b from-slate-50 to-blue-50/30 rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col justify-between text-left relative overflow-hidden" id="hero-executive-profile">
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-white border border-blue-100 rounded-full text-[10px] font-semibold text-blue-600 uppercase tracking-wider">
                Founder Overview
              </span>
              <span className="text-[9px] font-medium tracking-wider text-slate-400 uppercase font-mono">Maynit Advisory</span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">Ashwani Handa</h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                With 25+ years of IT delivery across BFSI and Healthcare, Ashwani orchestrates Maynit’s platform deployment models and technical delivery teams.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>BITS Pilani | M.S. Software Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Kurukshetra University | B.S. EE</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 mt-8 border-t border-slate-200/60 flex items-center justify-between gap-4">
            <div className="flex gap-4">
              <div>
                <div className="text-lg font-bold text-slate-800">25+ Yrs</div>
                <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Experience</div>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div>
                <div className="text-lg font-bold text-slate-800">2011</div>
                <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Established</div>
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('leadership')}
              className="bg-white hover:bg-blue-50/50 text-blue-600 border border-blue-100 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm flex items-center gap-1"
            >
              Credentials
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Smooth, soothing background blob */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>

      </section>

      {/* 2. Secondary Row: Clean & Concise Bento Blocks */}
      <section className="grid grid-cols-12 gap-6" id="bento-secondary-section">
        
        {/* Core Directives */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] text-left flex flex-col justify-between" id="bento-mission">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-4 bg-emerald-500 rounded-full"></div>
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Strategic Mission</h3>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              We design high-transparency architectures built on absolute client satisfaction, turning manual friction into automated enterprise intelligence.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 mt-4 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <span>Core Priority</span>
            <span className="text-emerald-600">Integrity & Value</span>
          </div>
        </div>

        {/* Platform Capabilities */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] text-left flex flex-col justify-between" id="bento-expertise">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-4 bg-blue-500 rounded-full"></div>
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Platform Capabilities</h3>
            </div>
            <div className="flex flex-wrap gap-1">
              {expertises.map((exp) => (
                <span 
                  key={exp} 
                  className={`px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide uppercase ${
                    exp === 'ITOM' || exp === 'GRC'
                      ? 'bg-blue-50 text-blue-600 border border-blue-100/50'
                      : exp === 'SecOps'
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100/50'
                      : 'bg-slate-50 text-slate-500 border border-slate-100'
                  }`}
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-[11px] text-slate-400 italic">
            "Harnessing full workflow modularity to lower audit burden."
          </p>
        </div>

        {/* Geographic Presence (Soothing Light Blue) */}
        <div className="col-span-12 md:col-span-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/60 rounded-3xl p-6 text-slate-800 border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col justify-between text-left" id="bento-reach">
          <div className="space-y-2">
            <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600 block">International Presence</span>
            <h3 className="text-lg font-bold leading-tight text-slate-900">North America, APAC & EMEA Markets</h3>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Active global coordination via New Jersey headquarters, providing near-shore and offshore delivery execution.
            </p>
          </div>
          <div className="pt-3 border-t border-blue-100 flex justify-between items-center text-[10px] text-slate-500 font-medium">
            <span>HQ: Princeton, NJ, USA</span>
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>
        </div>

      </section>

      {/* 3. Core Solutions & Metrics Block */}
      <section className="grid grid-cols-12 gap-6" id="bento-tertiary-section">
        
        {/* Talent Placement Solutions */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] text-left flex flex-col justify-between" id="bento-talent">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-400 rounded-full"></div>
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Talent Solutions</h3>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-700 flex justify-between">
                  <span>Executive Placement</span>
                  <span className="text-[10px] text-slate-400 font-normal">Sought Niche Match</span>
                </p>
                <div className="w-full h-1 bg-slate-100 overflow-hidden rounded-full">
                  <div className="w-4/5 h-full bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-700 flex justify-between">
                  <span>Full-Time Teams</span>
                  <span className="text-[10px] text-slate-400 font-normal">Direct Hire</span>
                </p>
                <div className="w-full h-1 bg-slate-100 overflow-hidden rounded-full">
                  <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-700 flex justify-between">
                  <span>Contract Augmentation</span>
                  <span className="text-[10px] text-slate-400 font-normal">Pre-Vetted Specialists</span>
                </p>
                <div className="w-full h-1 bg-slate-100 overflow-hidden rounded-full">
                  <div className="w-[85%] h-full bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setActiveTab('staffing')}
            className="mt-6 text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center justify-between"
          >
            <span>Explore Services</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Soothing Light Stats Row */}
        <div className="col-span-12 md:col-span-8 bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col justify-between text-left relative overflow-hidden" id="bento-stats">
          <div className="space-y-4">
            <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block">Operational Metrics & Footprint</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1 border-l-2 border-blue-100 pl-3">
                  <span className="text-2xl font-bold text-slate-900 block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span>Guaranteed compliance alignment tailored to your industry.</span>
            <div className="flex gap-4 text-slate-600 font-semibold text-[10px] tracking-wider">
              <span>BFSI</span>
              <span>HEALTHCARE</span>
              <span>INSURANCE</span>
            </div>
          </div>
          
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-50/20 rounded-full blur-3xl"></div>
        </div>

      </section>

      {/* 4. Industry Competencies Block (Streamlined to avoid heavy clutter) */}
      <section className="space-y-6 pt-6" id="specialized-sectors">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <div className="w-1.5 h-5 bg-blue-500 rounded-full"></div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">Focused Industry Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <div 
              key={index} 
              id={`industry-focus-${index}`}
              className="rounded-3xl border border-slate-100 bg-white p-6 text-left space-y-4 flex flex-col justify-between hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="inline-block rounded-lg bg-blue-50/70 border border-blue-100/40 px-2.5 py-1 text-blue-700 font-semibold text-xs">
                    {industry.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">SECTOR 0{index + 1}</span>
                </div>
                
                <div className="grid grid-cols-1 gap-3 pt-2">
                  <div>
                    <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest block mb-1">Common Blockers</span>
                    <p className="text-xs text-slate-500 leading-normal">
                      {industry.challenges.join(", ")}
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] font-semibold text-blue-500 uppercase tracking-widest block mb-1">Strategic Realization</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {industry.solutions.join(" ")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-[10px]">
                <span className="text-slate-400">Compliance & SLA Assured</span>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  Plan Strategy
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Geographic Reach Callout Container (Soothing, Airy Lighter theme) */}
      <section className="pt-6" id="geographic-reach">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50/50 p-8 md:p-10 text-slate-800 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-blue-100/30 shadow-[0_8px_30px_rgb(0,0,0,0.01)] relative overflow-hidden">
          <div className="lg:col-span-8 space-y-4 relative z-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Global Support Blueprint</span>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">Offshore Efficiencies & New Jersey Oversight</h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              Operating out of Princeton, NJ, Maynit bridges certified technical hubs in India with strict local service management delivery. This offers continuous timezone coverage combined with meticulous, compliance-aligned corporate oversight.
            </p>
            <div className="flex flex-wrap gap-4 text-[11px] font-semibold text-slate-600">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Princeton Head Office
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> APAC Engineering Labs
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 24/7 SLA Guarantees
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center relative z-10">
            <div className="rounded-2xl bg-white p-6 border border-blue-100/40 max-w-xs space-y-4 w-full shadow-sm">
              <div className="text-center">
                <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider mb-0.5">Princeton HQ</span>
                <span className="text-xs font-semibold text-slate-800">New Jersey Corridor</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed text-center">
                Direct advisory for banking, healthcare, and insurance enterprise architectures.
              </p>
              <button 
                onClick={() => setActiveTab('contact')}
                className="w-full rounded-xl bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Connect With Us
              </button>
            </div>
          </div>
          
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>
      </section>

    </div>
  );
}

