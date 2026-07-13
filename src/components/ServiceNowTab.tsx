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
  CheckCircle
} from 'lucide-react';

interface ServiceNowTabProps {
  onPlanStrategy: () => void;
}

export default function ServiceNowTab({ onPlanStrategy }: ServiceNowTabProps) {
  const [selectedModule, setSelectedModule] = useState<ServiceNowModule>(SERVICENOW_MODULES[0]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

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
                      ? 'bg-blue-50/80 border-blue-200 text-blue-900 shadow-sm'
                      : 'bg-white border-slate-100 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-600 group-hover:bg-slate-100'
                    }`}>
                      {renderIcon(mod.icon, "h-4 w-4")}
                    </div>
                    <div>
                      <span className="block text-sm font-bold">{mod.shortName}</span>
                      <span className={`block text-[10px] uppercase font-semibold tracking-wider ${
                        isSelected ? 'text-blue-600' : 'text-slate-400'
                      }`}>{mod.category}</span>
                    </div>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-transform ${
                    isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
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

        </div>
      </section>

    </div>
  );
}
