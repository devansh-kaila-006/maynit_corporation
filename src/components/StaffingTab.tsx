import { useState } from 'react';
import { STAFFING_SERVICES } from '../data';
import { StaffingService } from '../types';
import { 
  Award, 
  UserPlus, 
  Clock, 
  Network, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  Briefcase,
  Users,
  Search,
  Check
} from 'lucide-react';

interface StaffingTabProps {
  onPlanSourcing: () => void;
}

export default function StaffingTab({ onPlanSourcing }: StaffingTabProps) {
  const [selectedService, setSelectedService] = useState<StaffingService>(STAFFING_SERVICES[0]);
  
  // Sourcing Matcher State
  const [roleTitle, setRoleTitle] = useState<string>('ServiceNow Architect');
  const [urgency, setUrgency] = useState<'immediate' | 'medium' | 'strategic'>('immediate');
  const [experienceLevel, setExperienceLevel] = useState<'mid-level' | 'senior' | 'leadership'>('senior');

  // Sourcing Recommendation logic
  const getRecommendation = () => {
    let placementModel = "";
    let reason = "";
    let timeline = "";
    let steps: string[] = [];

    if (urgency === 'immediate') {
      placementModel = "Contract Staffing (Augmentation)";
      reason = "For immediate short-term gaps or project milestones, our pre-vetted, contract-based ServiceNow administrators and developers can start within 7-14 business days, eliminating long recruitment delays.";
      timeline = "7 - 14 Days to Onboard";
      steps = [
        "Sourcing and pre-selection from Maynit certified consultant pool",
        "Technical verification match tailored to your custom sandbox setup",
        "Direct client coordination and rapid sandbox onboarding"
      ];
    } else if (experienceLevel === 'leadership' || urgency === 'strategic') {
      placementModel = "Executive Search & Strategic Advisory";
      reason = "Niche platform leadership and director roles require meticulous, multi-tiered vetting. Our retained executive search ensures confidential candidate scouting and deep alignment with company cultures.";
      timeline = "30 - 45 Days to Placement";
      steps = [
        "Strategic profiling of candidate competencies and corporate goals",
        "Passive candidate outreach and multi-round peer reviews",
        "Structured negotiation, background validations, and transition support"
      ];
    } else {
      placementModel = "Full-Time Resourcing (Direct Placement)";
      reason = "Permanent staffing minimizes long-term platform costs. We target mid to senior ServiceNow specialists, validating active platform certifications and evaluating behavioral traits for retention.";
      timeline = "14 - 30 Days to Placement";
      steps = [
        "Custom resume sorting paired with verified technical assessments",
        "Culture-fit reviews to evaluate long-term corporate loyalty",
        "Placement agreement with direct 90-day candidate retention assurance"
      ];
    }

    return { placementModel, reason, timeline, steps };
  };

  const rec = getRecommendation();

  // Icon mapping helper
  const renderIcon = (iconName: string, className: string = "h-5 w-5") => {
    switch (iconName) {
      case 'Award': return <Award className={className} />;
      case 'UserPlus': return <UserPlus className={className} />;
      case 'Clock': return <Clock className={className} />;
      case 'Network': return <Network className={className} />;
      default: return <Award className={className} />;
    }
  };

  return (
    <div className="space-y-12" id="staffing-services-view">
      
      {/* Page Title Header */}
      <section className="text-left space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Flexible Staffing & Professional Search</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" id="staffing-title">
          Staffing Services & Industry Specialization
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Through a globally managed recruiter network, Maynit serves enterprise recruitment needs. Headquartered in New Jersey, we ensure a seamless match between candidate expertise and client requirements across North America, APAC, and EMEA.
        </p>
      </section>

      {/* Services Cards Switcher Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="staffing-services-grid">
        {STAFFING_SERVICES.map((srv) => {
          const isSelected = selectedService.id === srv.id;
          return (
            <div
              key={srv.id}
              id={`staffing-card-${srv.id}`}
              onClick={() => setSelectedService(srv)}
              className={`rounded-3xl border p-6 text-left cursor-pointer transition-all flex flex-col justify-between hover:scale-[1.01] ${
                isSelected
                  ? 'bg-slate-900 border-slate-900 text-white shadow-xl -translate-y-1'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                  isSelected ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10' : 'bg-slate-100 text-slate-600'
                }`}>
                  {renderIcon(srv.icon, "h-5 w-5")}
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-bold text-sm leading-snug">{srv.title}</h3>
                  <span className={`block text-[10px] font-semibold tracking-wider uppercase ${
                    isSelected ? 'text-blue-400' : 'text-slate-400'
                  }`}>
                    {srv.subtitle}
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100/10 flex justify-between items-center text-xs">
                <span className={isSelected ? 'text-slate-400' : 'text-slate-500'}>
                  Explore details
                </span>
                <ArrowRight className={`h-4 w-4 ${isSelected ? 'text-blue-400' : 'text-slate-400'}`} />
              </div>
            </div>
          );
        })}
      </section>

      {/* Detail Showcase of Selected Staffing Model */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm text-left grid grid-cols-1 lg:grid-cols-12 gap-8" id="staffing-detail-showcase">
        
        {/* Left Side: Text description */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1 flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Selected Service Model</span>
              <h3 className="text-2xl font-bold text-slate-900">{selectedService.title}</h3>
              <p className="text-sm font-semibold text-slate-500">{selectedService.subtitle}</p>
            </div>
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {selectedService.description}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Maynit Delivery Focus Points
            </h4>
            <ul className="space-y-2.5">
              {selectedService.keyPoints.map((point, index) => (
                <li key={index} className="text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Engagement model details */}
        <div className="lg:col-span-5 rounded-3xl bg-slate-50 p-6 border border-slate-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <HelpCircle className="h-4.5 w-4.5 text-blue-600" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Engagement & Pricing
              </span>
            </div>
            
            <div className="space-y-1 text-xs">
              <span className="font-bold text-slate-500 uppercase block">Typical Framework</span>
              <p className="text-slate-700 leading-normal font-medium">
                {selectedService.engagementModel}
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-2 text-xs shadow-sm">
              <span className="font-bold text-slate-900 block">Long-Term Value Alignment</span>
              <p className="text-slate-600 leading-normal">
                We understand that talent fit is crucial to digital success. Every search process we coordinate is matched against standard corporate compliance guidelines and internal governance structures.
              </p>
            </div>
          </div>

          <button
            onClick={onPlanSourcing}
            className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-md"
          >
            Request Staffing Profiles
          </button>
        </div>

      </section>

      {/* Interactive Role Sourcing Matcher Widget */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-left space-y-6" id="sourcing-matcher-widget">
        
        <div className="border-b border-slate-200 pb-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Talent Sourcing Matcher & Milestone Planner
            </h3>
            <p className="text-xs text-slate-500 leading-normal">
              Enter your immediate engineering, management, or administrative resource needs to receive an optimal resourcing blueprint.
            </p>
          </div>
          <div className="w-1.5 h-6 bg-emerald-500 rounded-full shrink-0 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Target Role / Platform Position
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={roleTitle}
                  onChange={(e) => setRoleTitle(e.target.value)}
                  placeholder="e.g., ServiceNow Developer"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 bg-white shadow-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Urgency of Onboarding
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setUrgency('immediate')}
                  className={`py-2 px-2 text-[10px] font-bold rounded-xl border transition-all ${
                    urgency === 'immediate'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Immediate (7-14 Days)
                </button>
                <button
                  onClick={() => setUrgency('medium')}
                  className={`py-2 px-2 text-[10px] font-bold rounded-xl border transition-all ${
                    urgency === 'medium'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Medium (15-30 Days)
                </button>
                <button
                  onClick={() => setUrgency('strategic')}
                  className={`py-2 px-2 text-[10px] font-bold rounded-xl border transition-all ${
                    urgency === 'strategic'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Strategic (30+ Days)
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Target Professional Seniority
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setExperienceLevel('mid-level')}
                  className={`py-2 px-2 text-[10px] font-bold rounded-xl border transition-all ${
                    experienceLevel === 'mid-level'
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Mid-Level Specialist
                </button>
                <button
                  onClick={() => setExperienceLevel('senior')}
                  className={`py-2 px-2 text-[10px] font-bold rounded-xl border transition-all ${
                    experienceLevel === 'senior'
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Senior Expert / Tech Lead
                </button>
                <button
                  onClick={() => setExperienceLevel('leadership')}
                  className={`py-2 px-2 text-[10px] font-bold rounded-xl border transition-all ${
                    experienceLevel === 'leadership'
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Management / Director
                </button>
              </div>
            </div>

          </div>

          {/* Sourcing Blueprint Recommendations */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 space-y-5 shadow-sm">
            
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase block tracking-wider">
                  Recommended Recruitment Path
                </span>
                <h4 className="font-bold text-sm text-slate-950">
                  {rec.placementModel}
                </h4>
              </div>
              <span className="rounded-full bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                {rec.timeline}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {rec.reason}
            </p>

            {/* Sourcing Milestones Timeline */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Engagement & Verification Milestones
              </span>
              <div className="space-y-2">
                {rec.steps.map((st, i) => (
                  <div key={i} className="flex gap-2 text-xs">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 leading-normal">{st}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={onPlanSourcing}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                Submit Request for "{roleTitle}" Candidates
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
