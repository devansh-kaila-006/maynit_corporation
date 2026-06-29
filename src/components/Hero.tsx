import { motion } from 'motion/react';
import { ActiveTab } from '../types';
import { ShieldCheck, ArrowRight, Shield, Award, Users, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { INDUSTRIES } from '../data';

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  const stats = [
    { value: '25+', label: 'Years IT Industry Leadership' },
    { value: '2011', label: 'Co-Founded Maynit Corp' },
    { value: '3+', label: 'Global Regions (NA, APAC, EMEA)' },
    { value: '50%', label: 'GRC Audit Overhead Deflected' },
  ];

  const values = [
    {
      title: 'Integrity',
      desc: 'Our absolute foundation. We construct long-term relationships of deep trust, delivering measurable business value at every touchpoint.',
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Transparency',
      desc: 'No hidden layers. From technology delivery to talent resourcing margins, we maintain clear, open communication and actionable reports.',
      icon: Award,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Client Satisfaction',
      desc: 'We map ServiceNow tools to address immediate challenges while engineering flexible, resilient architectures for future scale.',
      icon: Users,
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const expertises = ['ITSM', 'ITOM', 'GRC', 'ITBM', 'SecOps', 'CSM', 'HRSD'];

  return (
    <div className="space-y-8 pb-16 animate-fade-in" id="home-view">
      
      {/* 1. Main Bento Grid Block */}
      <section className="grid grid-cols-12 gap-6" id="bento-hero-section">
        
        {/* Left: Hero Banner/Intro Card (7 Cols) */}
        <div className="col-span-12 lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col justify-between text-left relative overflow-hidden" id="hero-banner">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-bold text-blue-700">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
              <span>ServiceNow Consulting & Strategic Staffing Partners</span>
            </div>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl" id="hero-title">
              Empowering Organizations to Reach Their <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Fullest Potential</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl" id="hero-description">
              At Maynit, we partner with mid-market and global enterprises to deliver world-class consulting, seamless ServiceNow implementation, and highly targeted resourcing that accelerates your digital transformation.
            </p>

            {/* Strategic Bio Callout */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 flex gap-4 items-start max-w-2xl">
              <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Founders’ Commitment</span>
                <p className="text-xs text-slate-600 leading-normal">
                  "Through deep technical depth, cross-industry acumen, and collaborative frameworks, we design solutions that streamline operations, enhance risk posture, and drive strategic growth."
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-8">
            <button
              onClick={() => setActiveTab('advisor')}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all hover:scale-[1.01]"
              id="hero-cta-advisor"
            >
              Assess Your ServiceNow Readiness
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveTab('servicenow')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              id="hero-cta-capabilities"
            >
              Explore Capabilities
            </button>
          </div>
        </div>

        {/* Right: Executive Profile Hero Card (5 Cols) */}
        <div className="col-span-12 lg:col-span-5 bg-slate-900 text-white rounded-[2rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between text-left" id="hero-executive-profile">
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-start">
              <div className="inline-block px-3 py-1 bg-blue-600 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                Co-Founder
              </div>
              <span className="text-[10px] font-mono text-slate-400">MAY-CORP PORTAL</span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">Ashwani <br/>Handa</h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                With 25+ years of IT leadership across Banking, Finance, Healthcare, and Insurance, Ashwani leads Maynit's global technology implementation strategies.
              </p>
            </div>

            <ul className="space-y-2.5 pt-2">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span className="text-slate-300 text-[11px] font-mono">BITS Pilani | Software Systems</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span className="text-slate-300 text-[11px] font-mono">Kurukshetra University | EE</span>
              </li>
            </ul>
          </div>

          <div className="relative z-10 pt-6 mt-8 border-t border-slate-800 flex gap-4">
            <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-800">
              <div className="text-xl font-bold text-white">25+</div>
              <div className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Years Exp</div>
            </div>
            <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-800">
              <div className="text-xl font-bold text-white">2011</div>
              <div className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Founded</div>
            </div>
            <button 
              onClick={() => setActiveTab('leadership')}
              className="ml-auto bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/20 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors self-center flex items-center gap-1"
            >
              Full Profile
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Abstract background glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

      </section>

      {/* 2. Secondary Bento Grid Block */}
      <section className="grid grid-cols-12 gap-6" id="bento-secondary-section">
        
        {/* Mission Statement (col-span-12 md:col-span-4) */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm text-left flex flex-col justify-between" id="bento-mission">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-5 bg-emerald-500 rounded-full"></div>
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Our Mission</h3>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Empowering organizations to reach their fullest potential through ServiceNow. We design systems built on integrity, transparency, and an unwavering commitment to measurable business value.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-4 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <span>Guiding Directive</span>
            <span className="text-emerald-500">Integrity First</span>
          </div>
        </div>

        {/* ServiceNow Expertise Tag Card (col-span-12 md:col-span-4) */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm text-left flex flex-col justify-between" id="bento-expertise">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">ServiceNow Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {expertises.map((exp) => (
                <span 
                  key={exp} 
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase ${
                    exp === 'ITOM' || exp === 'GRC'
                      ? 'bg-blue-50 text-blue-700 border border-blue-100'
                      : exp === 'SecOps'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : 'bg-slate-50 text-slate-600 border border-slate-200/60'
                  }`}
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-[11px] text-slate-400 font-medium leading-snug italic">
            "Harnessing the full platform potential to drive operational excellence."
          </p>
        </div>

        {/* Global Geographic Reach (col-span-12 md:col-span-4) */}
        <div className="col-span-12 md:col-span-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-6 text-white border border-blue-500 shadow-lg flex flex-col justify-between text-left" id="bento-reach">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-blue-200 block mb-1">Geographic Reach</span>
            <h3 className="text-xl font-extrabold mb-2 leading-tight">NORTH AMERICA<br/>APAC & EMEA</h3>
            <p className="text-[10px] text-blue-100 leading-normal">
              Continuous near-shore and offshore delivery models managed 24/7.
            </p>
          </div>
          <div className="pt-4 border-t border-blue-500/50 flex justify-between items-center text-[10px] text-blue-200">
            <span>HQ: Princeton, NJ, USA</span>
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
          </div>
        </div>

      </section>

      {/* 3. Core Services List & Stats Row */}
      <section className="grid grid-cols-12 gap-6" id="bento-tertiary-section">
        
        {/* Talent Solutions (col-span-12 md:col-span-4) */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm text-left flex flex-col justify-between" id="bento-talent">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-5 bg-slate-900 rounded-full"></div>
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Talent Solutions</h3>
            </div>
            <div className="space-y-3">
              <div className="group">
                <p className="text-xs font-bold text-slate-800 flex justify-between">
                  <span>Executive Search</span>
                  <span className="text-[10px] text-slate-400">95% Match</span>
                </p>
                <div className="w-full h-1 bg-slate-100 mt-1 overflow-hidden rounded-full">
                  <div className="w-4/5 h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="group">
                <p className="text-xs font-bold text-slate-800 flex justify-between">
                  <span>Full-Time Resourcing</span>
                  <span className="text-[10px] text-slate-400">Direct</span>
                </p>
                <div className="w-full h-1 bg-slate-100 mt-1 overflow-hidden rounded-full">
                  <div className="w-3/4 h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="group">
                <p className="text-xs font-bold text-slate-800 flex justify-between">
                  <span>Contract Staffing</span>
                  <span className="text-[10px] text-slate-400">Augmentation</span>
                </p>
                <div className="w-full h-1 bg-slate-100 mt-1 overflow-hidden rounded-full">
                  <div className="w-[85%] h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setActiveTab('staffing')}
            className="mt-6 w-full text-center text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center justify-between"
          >
            <span>Explore Staffing Models</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Corporate Stats Counter Block (col-span-12 md:col-span-8) */}
        <div className="col-span-12 md:col-span-8 bg-slate-900 text-white rounded-[2rem] p-8 border border-slate-800 shadow-xl flex flex-col justify-between text-left relative overflow-hidden" id="bento-stats">
          <div>
            <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest block mb-4">Corporate Valuation Metrics</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-2xl md:text-3xl font-black text-white block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span>Guaranteed compliance standards applied internationally.</span>
            <div className="flex gap-4 text-white font-bold">
              <span>BFSI</span>
              <span>HEALTHCARE</span>
              <span>INSURANCE</span>
            </div>
          </div>
          
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

      </section>

      {/* 4. Specialized Sectors Section */}
      <section className="space-y-6 pt-8" id="specialized-sectors">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="w-2.5 h-6 bg-blue-600 rounded-full"></div>
          <div className="text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Industry Depth</span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Where We Excel</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <div 
              key={index} 
              id={`industry-focus-${index}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-left space-y-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="inline-block rounded-lg bg-blue-50 border border-blue-100 px-2.5 py-1 text-blue-800 font-bold text-xs uppercase">
                    {industry.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-bold">SECTOR 0{index + 1}</span>
                </div>
                
                <div className="space-y-4 pt-2">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Common Challenges</h4>
                    <ul className="space-y-1.5">
                      {industry.challenges.map((c, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-rose-500 font-semibold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">Maynit's Strategic Solution</h4>
                    <ul className="space-y-1.5">
                      {industry.solutions.map((s, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5 font-medium">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">SLA Verified Solutions</span>
                <button 
                  onClick={() => setActiveTab('advisor')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  Plan Strategy
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Geographic Reach Callout Container */}
      <section className="pt-8" id="geographic-reach">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 p-8 md:p-12 text-white text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="lg:col-span-8 space-y-4 relative z-10">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Global Service Delivery</span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Geographic Reach & Near-shore execution</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Headquartered in Princeton, New Jersey, Maynit services leading global organizations across North America, APAC, and EMEA. Our strategic partnerships in India bring strong, certified developer capacity, combining international standard consulting with agile, 24/7 delivery executions.
            </p>
            <div className="flex flex-wrap gap-4 text-[11px] font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> North America HQ
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> APAC Service Hubs
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> EMEA Placements
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center relative z-10">
            <div className="rounded-3xl bg-slate-800/80 p-6 border border-slate-700/60 max-w-xs space-y-4 w-full">
              <div className="text-center">
                <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider mb-0.5">Our Office</span>
                <span className="text-sm font-bold text-white">Princeton, New Jersey</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed text-center">
                Positioned to support Fortune 500 financial, healthcare, and IT clients across the Northeast corridor and beyond.
              </p>
              <button 
                onClick={() => setActiveTab('contact')}
                className="w-full rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
              >
                Schedule Introduction
              </button>
            </div>
          </div>
          
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </section>

    </div>
  );
}
