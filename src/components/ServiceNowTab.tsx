import { useState } from 'react';
import { SERVICENOW_MODULES } from '../data';
import { ServiceNowModule } from '../types';
import { 
  ShieldCheck, 
  Activity, 
  Sliders, 
  Fingerprint, 
  Briefcase, 
  Users, 
  UserCheck, 
  Check, 
  ArrowRight, 
  Info, 
  Sparkles, 
  CheckCircle,
  Clock,
  Gauge
} from 'lucide-react';

interface ServiceNowTabProps {
  onPlanStrategy: () => void;
}

export default function ServiceNowTab({ onPlanStrategy }: ServiceNowTabProps) {
  const [selectedModule, setSelectedModule] = useState<ServiceNowModule>(SERVICENOW_MODULES[0]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  
  // Custom calculator state
  const [orgScale, setOrgScale] = useState<'mid-market' | 'large-enterprise'>('mid-market');
  const [integrationsCount, setIntegrationsCount] = useState<number>(2);

  const toggleCheck = (item: string) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  // Icon mapping helper
  const renderIcon = (iconName: string, className: string = "h-5 w-5") => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Sliders': return <Sliders className={className} />;
      case 'Fingerprint': return <Fingerprint className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Users': return <Users className={className} />;
      case 'UserCheck': return <UserCheck className={className} />;
      default: return <ShieldCheck className={className} />;
    }
  };

  // Dynamic estimate generator
  const getDeploymentEstimate = () => {
    const isGrcOrItom = selectedModule.id === 'grc' || selectedModule.id === 'itom';
    const baseWeeks = isGrcOrItom ? 10 : 6;
    const scaleFactor = orgScale === 'large-enterprise' ? 4 : 0;
    const integrationFactor = integrationsCount * 2;
    
    // Checklist discount: the more items checked, the smoother/faster the project start
    const checkedCount = Object.keys(checkedItems).filter(k => checkedItems[k]).length;
    const readinessDiscount = checkedCount * 1; 

    const estimatedWeeks = Math.max(4, baseWeeks + scaleFactor + integrationFactor - readinessDiscount);
    
    let readinessScore = "Drafting Needs";
    let scoreColor = "text-amber-600 bg-amber-50 border-amber-100";
    if (checkedCount === 3) {
      readinessScore = "Fully Ready";
      scoreColor = "text-emerald-700 bg-emerald-50 border-emerald-100";
    } else if (checkedCount >= 1) {
      readinessScore = "Pre-Scoped";
      scoreColor = "text-blue-700 bg-blue-50 border-blue-100";
    }

    return {
      weeks: estimatedWeeks,
      readinessScore,
      scoreColor,
      phases: [
        { title: 'Discovery & Design', duration: `${Math.ceil(estimatedWeeks * 0.2)} Weeks`, task: 'Service scoping, API audits, design approval' },
        { title: 'Development & Sandbox', duration: `${Math.ceil(estimatedWeeks * 0.5)} Weeks`, task: 'Form setups, workflow scripting, platform triggers' },
        { title: 'UAT & Deployment', duration: `${Math.ceil(estimatedWeeks * 0.3)} Weeks`, task: 'Training, compliance signing, live migration' }
      ]
    };
  };

  const estimate = getDeploymentEstimate();

  return (
    <div className="space-y-12" id="servicenow-capabilities-view">
      
      {/* Intro Header */}
      <section className="text-left space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Specialized ServiceNow System Integrator</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" id="servicenow-title">
          ServiceNow Portfolio & GRC Governance
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          At Maynit Corporation, we design ServiceNow roadmaps that resolve complex technology gaps. Our engineers specialize in transforming unstructured, manual procedures into structured, auditable, and automated digital workflows.
        </p>
      </section>

      {/* Main Grid: Interactive Module Explorer */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="module-explorer-grid">
        
        {/* Left Side: Module Selector Sidebar */}
        <div className="lg:col-span-4 space-y-3" id="module-sidebar">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-left mb-2">
            Select ServiceNow Pillar
          </span>
          <div className="space-y-2">
            {SERVICENOW_MODULES.map((mod) => {
              const isSelected = selectedModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  id={`btn-select-mod-${mod.id}`}
                  onClick={() => {
                    setSelectedModule(mod);
                    setCheckedItems({}); // reset readiness checklist on switch for fun
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}>
                      {renderIcon(mod.icon, "h-4 w-4")}
                    </div>
                    <div>
                      <span className="block text-sm font-bold">{mod.shortName}</span>
                      <span className={`block text-[10px] uppercase font-semibold tracking-wider ${
                        isSelected ? 'text-blue-400' : 'text-slate-400'
                      }`}>{mod.category}</span>
                    </div>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-transform ${
                    isSelected ? 'text-blue-400 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Interactive Module Details */}
        <div className="lg:col-span-8 space-y-8" id="module-detail-panel">
          
          {/* Detailed Specifications Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-6 text-left hover:shadow-md transition-all">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  ServiceNow module
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedModule.name}
                </h3>
              </div>
              <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 uppercase">
                {selectedModule.category}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedModule.description}
            </p>

            {/* Core Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Key Deliverables & Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedModule.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Value Highlight */}
            <div className="rounded-2xl bg-blue-50 border border-blue-100/50 p-4 space-y-1.5">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Estimated Business Impact
              </span>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {selectedModule.businessValue}
              </p>
            </div>

            {/* Client Readiness Checklist */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <Info className="h-4.5 w-4.5 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Client Readiness Assessment Check
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Does your team satisfy these prerequisites? Check them to optimize your implementation roadmap.
              </p>
              
              <div className="space-y-2.5">
                {selectedModule.readinessChecklist.map((item, i) => {
                  const isChecked = !!checkedItems[item];
                  return (
                    <div 
                      key={i} 
                      onClick={() => toggleCheck(item)}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked 
                          ? 'border-emerald-300 bg-emerald-50/40 text-slate-900' 
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                        isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="h-3 w-3 stroke-[3px]" />}
                      </div>
                      <span className="text-xs leading-snug">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Deployment Complexity Calculator (Engaging Tool) */}
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 md:p-8 text-white text-left space-y-6 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-4 relative z-10">
              <div className="w-1.5 h-5 bg-blue-400 rounded-full"></div>
              <Gauge className="h-5 w-5 text-blue-400" />
              <h3 className="text-md font-bold text-white">
                ServiceNow Integration Estimate Calculator
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              
              {/* Inputs */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Organization Scale
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setOrgScale('mid-market')}
                      className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                        orgScale === 'mid-market'
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                      }`}
                    >
                      Mid-Market
                    </button>
                    <button
                      onClick={() => setOrgScale('large-enterprise')}
                      className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                        orgScale === 'large-enterprise'
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                      }`}
                    >
                      Enterprise / Global
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-400 uppercase tracking-wider">
                      Target Core Integrations
                    </span>
                    <span className="font-semibold text-blue-400">
                      {integrationsCount} Systems
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={integrationsCount}
                    onChange={(e) => setIntegrationsCount(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>1 (e.g., AD Only)</span>
                    <span>3 (e.g., Jira, HRIS)</span>
                    <span>6+ Systems</span>
                  </div>
                </div>
              </div>

              {/* Calculated Results */}
              <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold uppercase">Est. Deployment Speed</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${estimate.scoreColor}`}>
                    {estimate.readinessScore}
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5 justify-center py-2">
                  <Clock className="h-5 w-5 text-blue-400 shrink-0 self-center" />
                  <span className="text-3xl font-extrabold text-white">{estimate.weeks}</span>
                  <span className="text-sm font-semibold text-slate-400">Weeks</span>
                </div>

                <p className="text-[11px] text-slate-400 leading-normal text-center italic">
                  *This calculates scoping discounts based on checked requirements.
                </p>

                <div className="space-y-2 border-t border-slate-700 pt-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">
                    Maynit Operational Phases
                  </span>
                  <div className="space-y-1.5">
                    {estimate.phases.map((ph, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-300 font-medium">{ph.title}</span>
                        <span className="text-blue-400 font-bold">{ph.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Action Box */}
            <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <span className="text-xs text-slate-400 max-w-md">
                Want a dedicated, certified architect to vet these calculations? Maynit co-founder Ashwani Handa will draft a custom statement of work for your review.
              </span>
              <button
                onClick={onPlanStrategy}
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/15 hover:bg-blue-700 transition-colors shrink-0"
              >
                Request Custom Architecture Workshop
              </button>
            </div>

            {/* Glowing background blob */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </section>

    </div>
  );
}
