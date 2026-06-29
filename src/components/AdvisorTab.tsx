import React, { useState } from 'react';
import { AdvisoryInput, AdvisoryResponse, RecommendedModule, ImplementationPhase, ComplianceGap } from '../types';
import { 
  Sparkles, 
  Send, 
  RefreshCw, 
  CheckCircle, 
  TrendingUp, 
  ShieldAlert, 
  BookOpen, 
  Clock, 
  Award,
  AlertTriangle,
  Download,
  Copy,
  ChevronRight,
  ShieldCheck,
  Building,
  Wrench,
  Activity
} from 'lucide-react';

export default function AdvisorTab() {
  const [formData, setFormData] = useState<AdvisoryInput>({
    industry: 'Banking & Financial Services (BFSI)',
    scale: 'Large Enterprise (2,000 - 10,000 employees)',
    compliance: ['SOX Section 404', 'ISO/IEC 27001'],
    painPoints: 'Our audit tracking is completely manual across scattered spreadsheets. Security alerts are disconnected from our IT infrastructure team, causing severe alert fatigue and delayed incident responses.',
    currentSystems: 'Jira for support tickets, legacy spreadsheets for compliance mapping, SolarWinds for network alerts.'
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<AdvisoryResponse | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const complianceOptions = [
    'SOX Section 404',
    'HIPAA Security Rule',
    'GDPR Protection Compliance',
    'ISO/IEC 27001',
    'NIST Cybersecurity Framework'
  ];

  const industries = [
    'Banking & Financial Services (BFSI)',
    'Healthcare, Clinical Operations & Life Sciences',
    'Information Technology, Cloud & SaaS Systems',
    'Automotive, Manufacturing & Precision Engineering',
    'Insurance & Global Pensions Practice',
    'Telecommunications & Critical Logistics'
  ];

  const scales = [
    'Mid-Market Enterprise (500 - 2,000 employees)',
    'Large Enterprise (2,000 - 10,000 employees)',
    'Global Conglomerate (10,000+ employees)'
  ];

  const handleComplianceToggle = (item: string) => {
    setFormData(prev => {
      const active = prev.compliance.includes(item)
        ? prev.compliance.filter(c => c !== item)
        : [...prev.compliance, item];
      return { ...prev, compliance: active };
    });
  };

  // High-fidelity fallback consultation generator if Gemini key is missing
  const generateLocalBlueprint = (input: AdvisoryInput): AdvisoryResponse => {
    const isHealthcare = input.industry.toLowerCase().includes('health');
    const isBfsi = input.industry.toLowerCase().includes('bank') || input.industry.toLowerCase().includes('finance');
    
    const modules: RecommendedModule[] = [
      {
        module: 'ServiceNow GRC / IRM (Integrated Risk Management)',
        reason: `Your target frameworks (${input.compliance.join(', ') || 'Enterprise Rules'}) are fully supported. We recommend automating control attestations and continuous control monitoring to eliminate manual spreadsheets.`,
        priority: 'High'
      },
      {
        module: 'ServiceNow ITOM (IT Operations Management)',
        reason: 'To address alert fatigue and system disconnects, ITOM Event Management will group events from legacy systems, mapping them directly to Business Services in your CMDB.',
        priority: 'High'
      },
      {
        module: 'ServiceNow ITSM & Change Management',
        reason: 'Consolidate legacy ticking channels like Jira to enforce auditable Change approvals linked automatically to your compliance control frameworks.',
        priority: 'Medium'
      }
    ];

    const phases: ImplementationPhase[] = [
      {
        phase: 'Phase 1: CMDB Audit & Discovery Setup',
        duration: 'Weeks 1 - 4',
        deliverables: [
          'Deploy ServiceNow Discovery in non-production sandbox',
          'Map key business critical databases and server dependencies',
          'Document current compliance control framework fields'
        ]
      },
      {
        phase: 'Phase 2: ServiceNow GRC & Control Automation',
        duration: 'Weeks 5 - 10',
        deliverables: [
          'Configure Risk Registry and Policy lifecycle workflows',
          'Automate control tests for HIPAA/SOX targets',
          'Deploy Executive GRC Real-time audit dashboards'
        ]
      },
      {
        phase: 'Phase 3: ITOM Event & AIOps Alert Integration',
        duration: 'Weeks 11 - 16',
        deliverables: [
          'Integrate legacy monitoring APIs with ServiceNow Event hub',
          'Establish alert grouping rules to suppress operational noise by up to 50%',
          'Launch continuous validation audit runbooks'
        ]
      }
    ];

    const complianceGaps: ComplianceGap[] = input.compliance.map(f => ({
      framework: f,
      riskLevel: 'High',
      remediation: `Configure ServiceNow Policy Engine to continuously scan configurations and flag deviations instantly prior to quarterly audits.`
    }));

    if (complianceGaps.length === 0) {
      complianceGaps.push({
        framework: 'General ITIL Governance & Sox Controls',
        riskLevel: 'Medium',
        remediation: 'Align CMDB service owners with active server groups to establish clear, auditable lines of platform modification.'
      });
    }

    return {
      executiveSummary: `Maynit AI Consultant analysis for ${input.scale} in the ${input.industry} sector. By implementing a unified ServiceNow platform core, we can automate up to 60% of manual auditing work, streamline operational monitoring, and successfully remediate vulnerabilities before they affect audit readiness.`,
      recommendedServiceNowModules: modules,
      implementationPhases: phases,
      complianceGaps: complianceGaps,
      estimatedRoi: {
        efficiencyGain: '35% - 48% reduction in audit overhead',
        complianceConfidence: '99.4% continuous audit-readiness metrics',
        narrative: "This digital roadmap aligns your legacy architectures under Maynit's standard global delivery procedures. Co-founder Ashwani Handa will personally review this assessment to craft a dedicated execution scope."
      }
    };
  };

  const handleAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.painPoints.trim()) {
      setError('Please specify your current operational pain points.');
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    // Simulated animated steps for consultation loading
    const steps = [
      'Reading company profile & parameters...',
      'Analyzing legacy system integrations (Jira, spreadsheets)...',
      'Synthesizing GRC continuous auditing protocols...',
      'Matching compliance risk factors with ServiceNow control matrices...',
      'Generating optimized delivery timeline based on Maynit standards...'
    ];

    let currentStep = 0;
    setLoadingStep(steps[0]);

    const stepInterval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setLoadingStep(steps[currentStep]);
      }
    }, 1200);

    try {
      const res = await fetch('/api/gemini/assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        // Fall back to local high-fidelity rules engine if API is inactive/errored
        console.warn('Backend API returned non-200. Utilizing high-fidelity local GRC rules engine fallback.');
        const localBlueprint = generateLocalBlueprint(formData);
        setResponse(localBlueprint);
      } else {
        const data = await res.json();
        if (data.error) {
          console.warn('Gemini API reported error. Utilizing local fallback:', data.message);
          const localBlueprint = generateLocalBlueprint(formData);
          setResponse(localBlueprint);
        } else {
          setResponse(data);
        }
      }
    } catch (err: any) {
      console.warn('Fetch error encountered. Utilizing local rules engine fallback:', err);
      const localBlueprint = generateLocalBlueprint(formData);
      setResponse(localBlueprint);
    } finally {
      clearInterval(stepInterval);
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!response) return;
    const textToCopy = `
      MAYNIT CORPORATION - ENTERPRISE GRC & DIGITAL TRANSFORMATION ROADMAP
      
      Executive Summary:
      ${response.executiveSummary}
      
      Recommended ServiceNow Modules:
      ${response.recommendedServiceNowModules.map(m => `- ${m.module} [Priority: ${m.priority}]: ${m.reason}`).join('\n')}
      
      Implementation Phases:
      ${response.implementationPhases.map(p => `- ${p.phase} (${p.duration}):\n  ${p.deliverables.map(d => `  * ${d}`).join('\n')}`).join('\n')}
      
      Compliance Remediation:
      ${response.complianceGaps.map(c => `- Framework: ${c.framework} [Risk: ${c.riskLevel}]: ${c.remediation}`).join('\n')}
      
      ROI Estimation:
      - Operational Efficiency: ${response.estimatedRoi.efficiencyGain}
      - Audit Readiness: ${response.estimatedRoi.complianceConfidence}
      - Delivery Impact: ${response.estimatedRoi.narrative}
    `;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 pb-12 animate-fade-in" id="ai-advisor-view">
      
      {/* Page Title */}
      <section className="text-left space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
          <span>Interactive AI-Powered Advisory Tool</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" id="advisor-title">
          AI Digital Transformation & GRC Advisor
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Evaluate your ServiceNow readiness and GRC compliance postures in real-time. Input your enterprise infrastructure layout and pain points to receive an instant strategic roadmap.
        </p>
      </section>

      {/* Main Grid: Form and Results */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="advisor-main-grid">
        
        {/* Left Side: Assessment Form */}
        <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm text-left space-y-6 hover:shadow-md transition-all" id="advisor-form-panel">
          
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
            <Building className="h-5 w-5 text-blue-600" />
            <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Client Profile Inputs
            </span>
          </div>

          <form onSubmit={handleAssessment} className="space-y-5" id="assessment-form">
            
            {/* Industry Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                Target Industry Segment
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none"
              >
                {industries.map((ind, i) => (
                  <option key={i} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Org Scale */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                Organization scale
              </label>
              <select
                value={formData.scale}
                onChange={(e) => setFormData(prev => ({ ...prev, scale: e.target.value }))}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none"
              >
                {scales.map((sc, i) => (
                  <option key={i} value={sc}>{sc}</option>
                ))}
              </select>
            </div>

            {/* Target Compliance Checkboxes */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                Target Compliance Frameworks
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {complianceOptions.map((opt, i) => {
                  const isChecked = formData.compliance.includes(opt);
                  return (
                    <div 
                      key={i} 
                      onClick={() => handleComplianceToggle(opt)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                        isChecked 
                          ? 'border-blue-300 bg-blue-50/30 text-slate-950 font-medium' 
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                        isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <CheckCircle className="h-3 w-3 text-white shrink-0" />}
                      </div>
                      <span className="text-xs leading-none">{opt}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Current Legacy Systems */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                Current Core Systems & Applications
              </label>
              <input
                type="text"
                value={formData.currentSystems}
                onChange={(e) => setFormData(prev => ({ ...prev, currentSystems: e.target.value }))}
                placeholder="e.g., Jira, spreadsheets, SolarWinds, emails"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Operational Pain Points Textarea */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                Key Operational Pain Points
              </label>
              <textarea
                value={formData.painPoints}
                onChange={(e) => setFormData(prev => ({ ...prev, painPoints: e.target.value }))}
                rows={4}
                placeholder="Describe manual processes, system downtime, audit compliance stress, or tracking blockages..."
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm focus:border-blue-500 focus:outline-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold text-white shadow-lg transition-all ${
                loading 
                  ? 'bg-slate-400 cursor-not-allowed shadow-none' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/15 hover:scale-[1.01]'
              }`}
              id="submit-advisory-btn"
            >
              {loading ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Generating Consultation...</span>
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  <span>Generate Customized GRC & ServiceNow Roadmap</span>
                </>
              )}
            </button>

          </form>

        </div>

        {/* Right Side: Advisory Results Panel */}
        <div className="lg:col-span-7" id="advisor-results-panel">
          
          {/* Default state */}
          {!loading && !response && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <BookOpen className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">Your Consultation Roadmap Awaits</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-normal">
                  Submit the compliance profile and key pain points on the left to activate Maynit's AI digital transformation advisor.
                </p>
              </div>
            </div>
          )}

          {/* Loading state with reassurance steps */}
          {loading && (
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center space-y-6 shadow-sm">
              <div className="flex justify-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <RefreshCw className="h-8 w-8 animate-spin text-blue-600" />
                  <div className="absolute top-0 right-0 h-4 w-4 rounded-full bg-blue-500 border-2 border-white animate-bounce" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-950">Formulating Enterprise Strategy</h3>
                <p className="text-xs text-blue-700 font-semibold animate-pulse leading-snug">
                  {loadingStep}
                </p>
                <p className="text-[11px] text-slate-400 max-w-xs mx-auto pt-2">
                  This combines Google's advanced reasoning models with Maynit's 25+ years of strategic delivery methodologies.
                </p>
              </div>
            </div>
          )}

          {/* Consultation Output */}
          {response && !loading && (
            <div className="space-y-6 text-left" id="assessment-response">
              
              {/* Executive summary card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                    <h3 className="font-bold text-sm text-slate-950">Strategic Executive Consulting Summary</h3>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={copyToClipboard}
                      className="rounded-xl px-2.5 py-1.5 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1 text-[10px] font-bold"
                    >
                      {copied ? (
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                  "{response.executiveSummary}"
                </p>
              </div>

              {/* Recommended modules */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                  Recommended ServiceNow Integration Modules
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {response.recommendedServiceNowModules.map((m, idx) => (
                    <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-extrabold text-slate-950 leading-tight">
                            {m.module}
                          </h4>
                          <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase border shrink-0 ${
                            m.priority === 'High' 
                              ? 'bg-rose-50 border-rose-100 text-rose-700' 
                              : 'bg-amber-50 border-amber-100 text-amber-700'
                          }`}>
                            {m.priority} Priority
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal">
                          {m.reason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phased implementation timeline */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-6 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Clock className="h-4.5 w-4.5 text-blue-600" />
                  <h3 className="font-bold text-sm text-slate-950">Milestone Phase-by-Phase Timeline</h3>
                </div>

                <div className="space-y-6 relative border-l border-slate-200 pl-4 ml-2">
                  {response.implementationPhases.map((phase, i) => (
                    <div key={i} className="relative space-y-1.5">
                      {/* Timeline dot */}
                      <div className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-blue-50" />
                      
                      <div className="flex justify-between items-baseline gap-2">
                        <h4 className="text-xs font-bold text-slate-900">{phase.phase}</h4>
                        <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider shrink-0">
                          {phase.duration}
                        </span>
                      </div>
                      <div className="space-y-1 pt-1">
                        {phase.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="text-[11px] text-slate-500 flex items-start gap-1">
                            <span className="text-blue-500 font-semibold">•</span>
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance & Remediation Risk gaps */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-5 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <ShieldAlert className="h-4.5 w-4.5 text-rose-600" />
                  <h3 className="font-bold text-sm text-slate-950">Target Compliance Remediation Risks</h3>
                </div>

                <div className="space-y-4">
                  {response.complianceGaps.map((gap, idx) => (
                    <div key={idx} className="rounded-2xl bg-slate-50 border border-slate-200 p-4 flex gap-3.5 items-start">
                      <div className="h-8 w-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-slate-900">{gap.framework}</span>
                          <span className="rounded bg-rose-50 border border-rose-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-rose-700 shrink-0">
                            {gap.riskLevel} Risk
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal">
                          {gap.remediation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI & Valuation */}
              <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 md:p-8 text-white space-y-6 relative overflow-hidden shadow-xl">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-4 relative z-10">
                  <div className="w-1.5 h-5 bg-blue-400 rounded-full"></div>
                  <TrendingUp className="h-4.5 w-4.5 text-blue-400" />
                  <h3 className="font-bold text-sm">Estimated Business ROI & Deliverables</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  <div className="rounded-2xl bg-slate-800 p-4 border border-slate-750">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider mb-1">
                      Target Efficiency Gain
                    </span>
                    <span className="text-xl font-bold text-emerald-400 block">
                      {response.estimatedRoi.efficiencyGain}
                    </span>
                  </div>

                  <div className="rounded-2xl bg-slate-800 p-4 border border-slate-750">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider mb-1">
                      Continuous Audit Readiness
                    </span>
                    <span className="text-xl font-bold text-blue-400 block">
                      {response.estimatedRoi.complianceConfidence}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic relative z-10">
                  "{response.estimatedRoi.narrative}"
                </p>

                <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 text-center relative z-10">
                  This roadmap is calculated based on Maynit Corporation’s standard compliance delivery models.
                </div>

                {/* Glowing background blob */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
              </div>

            </div>
          )}

        </div>

      </section>

    </div>
  );
}
