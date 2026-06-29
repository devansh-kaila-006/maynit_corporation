export type ActiveTab = 'home' | 'servicenow' | 'staffing' | 'leadership' | 'advisor' | 'contact';

export interface ServiceNowModule {
  id: string;
  name: string;
  shortName: string;
  category: 'Operations' | 'Security & Risk' | 'Business & Core' | 'Enterprise';
  icon: string;
  description: string;
  features: string[];
  businessValue: string;
  readinessChecklist: string[];
}

export interface StaffingService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  engagementModel: string;
  icon: string;
}

export interface IndustryFocus {
  name: string;
  icon: string;
  challenges: string[];
  solutions: string[];
}

export interface AdvisoryInput {
  industry: string;
  scale: string;
  compliance: string[];
  painPoints: string;
  currentSystems: string;
}

export interface RecommendedModule {
  module: string;
  reason: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface ImplementationPhase {
  phase: string;
  duration: string;
  deliverables: string[];
}

export interface ComplianceGap {
  framework: string;
  riskLevel: 'Critical' | 'High' | 'Medium';
  remediation: string;
}

export interface AdvisoryResponse {
  executiveSummary: string;
  recommendedServiceNowModules: RecommendedModule[];
  implementationPhases: ImplementationPhase[];
  complianceGaps: ComplianceGap[];
  estimatedRoi: {
    efficiencyGain: string;
    complianceConfidence: string;
    narrative: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  serviceOfInterest: string;
}
