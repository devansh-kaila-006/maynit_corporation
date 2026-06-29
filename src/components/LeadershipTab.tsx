import { ActiveTab } from '../types';
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle, 
  Calendar, 
  FileCheck,
  Building,
  ArrowRight
} from 'lucide-react';

interface LeadershipTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function LeadershipTab({ setActiveTab }: LeadershipTabProps) {
  const highlights = [
    { label: 'IT Industry Leadership', value: '25+ Years Global Exp' },
    { label: 'U.S. Technology Leadership', value: 'Since 2003 relocation' },
    { label: 'Maynit Strategic Foundation', value: 'Established in 2011' },
    { label: 'Core Industry Domains', value: 'BFSI, Healthcare, Insurance' },
  ];

  const credentials = [
    {
      title: 'Master of Science in Software Systems',
      institution: 'BITS Pilani (Birla Institute of Technology and Science)',
      description: 'Advanced software systems engineering, distributed database models, and scalable architectures.'
    },
    {
      title: 'Bachelor of Science in Electrical Engineering',
      institution: 'Kurukshetra University',
      description: 'System controls, logic design, and enterprise technology foundational sciences.'
    },
    {
      title: 'Enterprise Platform & Agile Architect',
      institution: 'Multiple Industry Board Certifications',
      description: 'Vetted scrum master, platform delivery manager, and scaled ITIL governance specialist.'
    }
  ];

  return (
    <div className="space-y-16 pb-12" id="leadership-view">
      
      {/* Intro Header */}
      <section className="text-left space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Company Leadership</span>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" id="leadership-title">
          Strategic Leadership & Vision
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          At Maynit Corporation, our platform strategies are backed by over two decades of hands-on delivery leadership, ensuring your digital transformation matches global compliance thresholds.
        </p>
      </section>

      {/* Profile Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="founder-profile">
        
        {/* Left: Professional Visual Card representing the co-founder's profile */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-center relative overflow-hidden hover:shadow-md transition-all">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-700 to-indigo-600" />
            
            <div className="mx-auto mt-4 mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 border-4 border-slate-50 text-slate-700 shadow-inner">
              <span className="text-3xl font-extrabold tracking-tight text-blue-700">AH</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-950">Ashwani Handa</h3>
              <span className="block text-xs font-bold text-blue-600 uppercase tracking-wider">
                Co-Founder, Maynit Corporation
              </span>
              <span className="text-xs text-slate-400 block font-semibold">
                Princeton, NJ, USA
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 border-t border-b border-slate-100 py-4 my-6 text-left">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">IT Experience</span>
                <span className="text-sm font-bold text-slate-800">25+ Years</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Co-Founded</span>
                <span className="text-sm font-bold text-slate-800">2011</span>
              </div>
              <div className="col-span-2 pt-1 border-t border-slate-50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Specializations</span>
                <span className="text-xs font-medium text-slate-700">ServiceNow GRC, ITOM, Delivery</span>
              </div>
            </div>

            <button 
              onClick={() => setActiveTab('contact')}
              className="w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-md"
            >
              Request Leadership Meeting
            </button>
          </div>

          {/* Quick Highlights list */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 space-y-4 text-left shadow-inner">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Leadership Snapshot</span>
            <div className="space-y-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex justify-between items-center text-xs border-b border-slate-200/50 pb-2 last:border-0 last:pb-0">
                  <span className="text-slate-500 font-medium">{h.label}</span>
                  <span className="text-slate-900 font-bold text-right">{h.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Detailed Bio & Educational Qualifications */}
        <div className="lg:col-span-8 space-y-10 text-left">
          
          {/* Detailed Narrative */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-600 shrink-0" />
              Professional Biography
            </h3>
            
            <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
              <p>
                Ashwani Handa brings over 25 years of diverse IT industry experience gained across leading technical organizations worldwide. Since relocating to the United States in 2003, he has been instrumental in leading large-scale technology implementations, with deep domain experience spanning the Banking, Finance, Healthcare, and Insurance industries.
              </p>
              <p>
                In 2011, Ashwani co-founded Maynit Corporation, building strong business process consulting partnerships with companies in India that combine global best practices with local execution. Under his leadership, Maynit has expanded into a premier boutique ServiceNow consulting practice, helping organizations streamline complex GRC, ITSM, and ITOM workflows.
              </p>
              <p>
                Ashwani's unique combination of technical depth, business acumen, and cross-industry experience continues to drive lasting, measurable business value for Maynit's enterprise clients and global implementation partners.
              </p>
            </div>
          </div>

          {/* Co-Founder's Mission Statement Box */}
          <div className="rounded-3xl bg-blue-50/60 border border-blue-100 p-6 md:p-8 space-y-4">
            <h4 className="text-xs font-bold text-blue-700 uppercase tracking-widest">Maynit's Mission under Ashwani</h4>
            <p className="text-sm font-medium text-slate-800 leading-relaxed italic">
              "Through deep expertise and a collaborative approach, we partner with our clients to design tailored ServiceNow solutions that address immediate operational risks while laying the groundwork for long-term success in an ever-evolving digital landscape."
            </p>
            <div className="flex gap-4 text-xs font-bold text-slate-500 pt-2">
              <span className="flex items-center gap-1"><FileCheck className="h-4 w-4 text-emerald-600" /> Client Trust</span>
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Regulatory Soundness</span>
            </div>
          </div>

          {/* Education & Academic Foundation */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
              <GraduationCap className="h-5.5 w-5.5 text-blue-600 shrink-0" />
              Academic & Technical Credentials
            </h3>

            <div className="space-y-4">
              {credentials.map((cred, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 flex gap-4 items-start shadow-sm" id={`cred-item-${idx}`}>
                  <div className="h-9 w-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <BookOpen className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">{cred.title}</h4>
                    <span className="text-xs text-blue-600 font-semibold block leading-tight">{cred.institution}</span>
                    <p className="text-xs text-slate-500 pt-1 leading-normal">{cred.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action to GRC Advisor */}
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Consultation Workshop</span>
              <h4 className="text-sm font-bold">Deploy Handa's Strategic ServiceNow Delivery Framework</h4>
              <p className="text-xs text-slate-300">Run our smart interactive digital transformation planner for immediate insights.</p>
            </div>
            <button 
              onClick={() => setActiveTab('advisor')}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors shrink-0 shadow-md"
            >
              Analyze ServiceNow Portfolio
            </button>
          </div>

        </div>

      </section>

    </div>
  );
}
