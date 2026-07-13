import { ServiceNowModule, StaffingService, IndustryFocus } from './types';

export const SERVICENOW_MODULES: ServiceNowModule[] = [
  {
    id: 'grc',
    name: 'Governance, Risk, and Compliance',
    shortName: 'GRC / IRM',
    category: 'Security & Risk',
    icon: 'ShieldCheck',
    description: 'Transform manual, siloed risk assessments into a unified, continuous monitoring and compliance engine. Align enterprise-wide risks, regulatory tracking, and audit protocols automatically.',
    features: [
      'Policy and Compliance Management',
      'Operational Risk Management',
      'Audit Management & Continuous Authorization',
      'Vendor Risk Management',
      'Regulatory Change Management'
    ],
    businessValue: 'Reduces manual audit workloads by up to 50%, eliminates compliance blindspots, and guarantees real-time executive visibility into corporate risk postures.',
    readinessChecklist: [
      'Documented compliance policies and controls exist.',
      'Active regulatory frameworks are identified (e.g., SOX, HIPAA, GDPR).',
      'Ownership of risks and controls is assigned within the business units.'
    ]
  },
  {
    id: 'itom',
    name: 'IT Operations Management',
    shortName: 'ITOM',
    category: 'Operations',
    icon: 'Activity',
    description: 'Bridge the gap between business service health and underlying infrastructure. Gain full visibility into multi-cloud and on-prem assets, automate service mapping, and predict outages before they affect customers.',
    features: [
      'Discovery & Service Mapping',
      'Event Management & AIOps Alert Grouping',
      'Operational Intelligence',
      'Cloud Provisioning and Governance'
    ],
    businessValue: 'Improves Mean Time to Resolution (MTTR) by 40-60%, reduces alert fatigue via AI-driven event grouping, and prevents costly unplanned downtime.',
    readinessChecklist: [
      'Credentials for network scanning/discovery are available.',
      'CMDB owners are designated and service ownership maps are draft-ready.',
      'Standard operating procedures for alerts exist.'
    ]
  },
  {
    id: 'itsm',
    name: 'IT Service Management',
    shortName: 'ITSM',
    category: 'Operations',
    icon: 'Sliders',
    description: 'Deliver resilient IT services that increase productivity, satisfy employee expectations, and support organizational velocity. Built-in virtual assistants and machine learning-based routing accelerate resolution.',
    features: [
      'Incident, Problem, and Change Management',
      'Request Management with Self-Service Portal',
      'Asset and Configuration Management (CMDB)',
      'Service Level Management (SLA)',
      'Knowledge Management Hub'
    ],
    businessValue: 'Enables employee self-service deflection rates of up to 35%, decreases ticket cycle times, and provides a singular point of truth for IT services.',
    readinessChecklist: [
      'Current helpdesk/ticketing flows are mapped.',
      'SLA requirements are documented and approved by business units.',
      'Categories for configuration items are standard.'
    ]
  },
  {
    id: 'secops',
    name: 'Security Operations',
    shortName: 'SecOps',
    category: 'Security & Risk',
    icon: 'Fingerprint',
    description: 'Incorporate threat intelligence and vulnerability assessment directly with IT remediation paths. Automate standard security incident response workflows to isolate threats in minutes, not days.',
    features: [
      'Vulnerability Response Tracking',
      'Security Incident Response Automation',
      'Threat Intelligence Consolidation',
      'Security Configuration Compliance'
    ],
    businessValue: 'Speeds vulnerability remediation times by over 70% and aligns Security Operations seamlessly with IT infrastructure teams.',
    readinessChecklist: [
      'Existing vulnerability scanner integration APIs are active.',
      'Security response playbook drafts are ready.',
      'Threat feeds/vendors are contracted.'
    ]
  },
  {
    id: 'itbm',
    name: 'IT Business Management',
    shortName: 'ITBM / SPM',
    category: 'Business & Core',
    icon: 'Briefcase',
    description: 'Align strategic portfolios, funding targets, and software release timelines with corporate strategic objectives. Optimize project deliveries using Lean, Agile, Waterfall, or Hybrid methods.',
    features: [
      'Project Portfolio Management (PPM)',
      'Demand and Resource Management',
      'Application Portfolio Management (APM)',
      'Financial Planning and Costing'
    ],
    businessValue: 'Maximizes ROI on capital technology investments, eliminates redundant applications, and aligns developer velocity with strategic corporate priorities.',
    readinessChecklist: [
      'Enterprise intake/demand process is documented.',
      'Strategic corporate priorities for the year are clearly outlined.',
      'Resource capacity and cost models are standardized.'
    ]
  },
  {
    id: 'csm',
    name: 'Customer Service Management',
    shortName: 'CSM',
    category: 'Business & Core',
    icon: 'Users',
    description: 'Unify customer service with field operations, engineering, and product quality teams to resolve root-cause issues directly. Elevate the customer journey from reactive fixes to proactive service care.',
    features: [
      'Omni-channel Case Management',
      'Proactive Customer Service Triggers',
      'Visual Workflow and Automation Engine',
      'Field Service Management Integration'
    ],
    businessValue: 'Drives customer retention, lowers cost-to-serve via intelligent routing, and resolves customer issues before customers are even aware of them.',
    readinessChecklist: [
      'Customer-facing channel protocols are established (Email, Phone, Chat).',
      'Customer database fields are accessible via integrations.',
      'Service level agreements for clients are configured.'
    ]
  },
  {
    id: 'hrsd',
    name: 'Human Resources Service Delivery',
    shortName: 'HRSD',
    category: 'Business & Core',
    icon: 'UserCheck',
    description: 'Simplify complex employee life-cycle journeys like onboarding, transfer, and leaves of absence. Give employees a consumer-grade workspace where answers are instant and workflows span multiple departments seamlessly.',
    features: [
      'Employee Service Center Unified Portal',
      'Enterprise Lifecycle Event Management',
      'Case and Knowledge Management',
      'Universal Request Deflection'
    ],
    businessValue: 'Reduces HR admin burdens by up to 45%, improves employee satisfaction indexes, and guarantees structured, compliant employee experiences.',
    readinessChecklist: [
      'Standard Onboarding checklist is established.',
      'Employee handbook/policies documentation is finalized.',
      'Integrations with HRIS (e.g., Workday) are scoped.'
    ]
  }
];

export const STAFFING_SERVICES: StaffingService[] = [
  {
    id: 'executive-search',
    title: 'Executive Search',
    subtitle: 'Niche Leadership Recruitment',
    description: 'Identifying and recruiting top-level visionaries, C-suite executives, and regional vice presidents. Our process is meticulous, matching your organization’s cultural values with candidates’ strategic depth.',
    keyPoints: [
      'Confidential and discreet candidate outreach',
      'Meticulous multi-round vetting and competency mapping',
      'Thorough cultural alignment assessments',
      'Comprehensive negotiation and onboarding transition support'
    ],
    engagementModel: 'Retained search model, specializing in highly niche and proprietary assignments with targeted timelines.',
    icon: 'Award'
  },
  {
    id: 'full-time-resourcing',
    title: 'Full-Time Resourcing',
    subtitle: 'Permanent Workforce Solutions',
    description: 'Comprehensive permanent placement services for mid to senior-level technical and operations positions. We emphasize long-term employee fit, ensuring technical excellence and sustainable cultural retention.',
    keyPoints: [
      'Proprietary technical evaluation matching your stack',
      'Behavioral fit assessments for long-term retention',
      'Continuous sourcing of passive top-tier industry candidates',
      'Pre-negotiated placement agreements with clear performance guarantees'
    ],
    engagementModel: 'Contingency or exclusive placement options based on volume and hiring priorities.',
    icon: 'UserPlus'
  },
  {
    id: 'contract-staffing',
    title: 'Contract Staffing',
    subtitle: 'Agile & Temporary Resourcing',
    description: 'Flexible staffing solutions designed to meet specialized short-term project milestones, seasonal surges, or specialized technical gaps. We supply vetted professionals who hit the ground running.',
    keyPoints: [
      'Rapid turnaround times for urgent project starts',
      'Comprehensive payroll, compliance, and benefit management',
      'Vetted, highly-skilled ServiceNow certified administrators and developers',
      'Agile scaling — scale up or down based on project lifecycle demands'
    ],
    engagementModel: 'Hourly contract-to-hire or straight contract, fully insured and compliant with local labor regulations.',
    icon: 'Clock'
  },
  {
    id: 'consulting-services',
    title: 'Strategic Talent Consulting',
    subtitle: 'Talent Management & Workforce Planning',
    description: 'Strategic advisory partnerships providing deep talent insights, compensation mapping, and organizational design for scale. We help build optimized high-performing engineering structures.',
    keyPoints: [
      'Workforce capacity planning models',
      'Compensation benchmarking against global competitors',
      'Strategic near-shoring & offshore transition consultation',
      'Skill gap analyses for enterprise platforms'
    ],
    engagementModel: 'Project-based statement of work (SOW) or ongoing monthly executive advisory retainer.',
    icon: 'Network'
  }
];

export const INDUSTRIES: IndustryFocus[] = [
  {
    name: 'BFSI (Banking, Financial Services, Insurance)',
    icon: 'TrendingUp',
    challenges: [
      'Managing highly volatile risk categories and dynamic regulatory auditing demands (SOX, FDIC, SEC).',
      'Inefficient manual coordination across operational silos, slowing down credit reviews and trade approvals.'
    ],
    solutions: [
      'Real-time automated compliance testing with ServiceNow GRC.',
      'Cross-departmental case routing and audit tracking linked to core banking systems.'
    ]
  },
  {
    name: 'Healthcare & Life Sciences',
    icon: 'HeartPulse',
    challenges: [
      'Strict HIPAA compliance, data integrity, and complex patient-record handling audits.',
      'Siloed incident resolution in emergency environments with critical legacy interfaces.'
    ],
    solutions: [
      'End-to-end ServiceNow IRM mapping of clinical systems and continuous HIPAA controls validation.',
      'ITIL-aligned high-priority alert routing using ITOM event grouping.'
    ]
  },
  {
    name: 'Information Technology & Software Services',
    icon: 'Cpu',
    challenges: [
      'Rapidly scaling infrastructure leading to alert fatigue, frequent unplanned downtime, and blind spots.',
      'Sub-optimal release management, causing conflicts between development speeds and IT governance.'
    ],
    solutions: [
      'Automated service mapping and AIOps event aggregation with ServiceNow ITOM.',
      'Continuous dev-to-release policy engine integrating JIRA/GitHub with ITSM Change Management.'
    ]
  },
  {
    name: 'Automotive & Engineering',
    icon: 'Wrench',
    challenges: [
      'Supply chain disruptions and complex procurement workflow delays.',
      'High operational risk within factory floor equipment and software firmware configurations.'
    ],
    solutions: [
      'Third-party Vendor Risk Assessments using GRC portals.',
      'Predictive maintenance alerts grouped and routed to active floor engineering teams via CSM and ITOM.'
    ]
  }
];

export const OFFICE_LOCATIONS = [
  {
    city: 'Princeton, New Jersey, USA',
    role: 'Global Headquarters & Strategic Leadership',
    address: 'Princeton, New Jersey, USA - 08536',
    email: 'contactus@maynitcorporation.com',
    phone: '+91 73558 20907, +91 870-8717010',
    coords: { lat: 40.3573, lng: -74.6672 }
  },
  {
    city: 'India Partner Networks',
    role: 'Global Delivery & Execution Excellence',
    address: 'Business Process Consulting hubs combining global best practices with local execution.',
    email: 'india.ops@maynitcorporation.com',
    phone: '+91 73558 20907',
    coords: { lat: 28.6139, lng: 77.2090 }
  }
];

export const FAQS = [
  {
    question: 'What is Maynit Corporation’s specialization within ServiceNow?',
    answer: 'While we possess deep end-to-end expertise in ServiceNow (covering ITSM, ITBM, HRSD, and CSM), we specialize heavily in Governance, Risk, and Compliance (GRC) and IT Operations Management (ITOM). We help clients build unified, continuous monitoring compliance ecosystems and automated AIOps-powered operations.'
  },
  {
    question: 'How do Maynit’s staffing and consulting services interact?',
    answer: 'They are perfectly complementary. As co-founder Ashwani Handa outlines, digital transformation fails without the right talent. Our Consulting branch designs your enterprise ServiceNow or GRC architecture, while our Staffing branch (Executive Search, Permanent Placement, Contract Staffing) provides certified experts to implement and run those solutions long-term.'
  },
  {
    question: 'How does Maynit manage ServiceNow consulting and strategy engagements?',
    answer: 'We begin with an in-depth portfolio review of your existing systems and target compliance frameworks (such as SOX or HIPAA). Our seasoned architects then design a customized platform roadmap and project charter modeled on Maynit’s global delivery standards, coordinating closely with your internal stakeholders.'
  },
  {
    question: 'Are Maynit’s staffing solutions limited to the United States?',
    answer: 'No. Headquartered in New Jersey, we serve clients and placement candidates across North America, APAC (including active execution hubs in India), and EMEA. Our global search database and recruiter network allow us to support multi-national enterprise placements.'
  }
];
