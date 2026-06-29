import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Helper for GRC Local fallback
function generateLocalBlueprint(formData: any) {
  const { industry, scale, compliance = [], painPoints = "", currentSystems = "" } = formData;
  const isLarge = scale === 'large-enterprise';
  
  const recommendedModules = [
    {
      module: "ServiceNow GRC (Governance, Risk, and Compliance)",
      reason: `Automates compliance mapping for ${compliance.join(', ') || 'regulatory frameworks'} and resolves critical manual testing pain points.`,
      priority: "High"
    },
    {
      module: "ServiceNow ITOM (IT Operations Management)",
      reason: `Provides visibility into legacy infrastructure (${currentSystems || 'active network'}) and reduces service downtime.`,
      priority: isLarge ? "High" : "Medium"
    }
  ];

  if (painPoints.toLowerCase().includes('security') || painPoints.toLowerCase().includes('vulnerabilit')) {
    recommendedModules.push({
      module: "ServiceNow SecOps (Security Operations)",
      reason: "Integrates vulnerability scanning with automated threat incident response pipelines.",
      priority: "High"
    });
  }

  return {
    executiveSummary: `Maynit strategic roadmap for ${scale} operating in the ${industry} sector. By transitioning manual tracking to automated workflows, the organization will establish continuous compliance safeguards and consolidate operational visibility.`,
    recommendedServiceNowModules: recommendedModules,
    implementationPhases: [
      {
        phase: "Phase 1: Foundation & Discovery",
        duration: "Months 1-3",
        deliverables: [
          "Install ServiceNow GRC application & configure compliance authority documents",
          "Deploy Discovery schedules across legacy infrastructure",
          "Establish baseline risk register aligned with industry compliance rules"
        ]
      },
      {
        phase: "Phase 2: Integration & Automation",
        duration: "Months 4-6",
        deliverables: [
          "Integrate ServiceNow with active directory & asset directory",
          "Automate control testing & evidence collection policies",
          "Configure dashboard reporting for executive leadership audit reviews"
        ]
      }
    ],
    complianceGaps: compliance.map((framework: string) => ({
      framework,
      riskLevel: "High",
      remediation: `Deploy certified ServiceNow GRC Policy and Compliance templates mapped to ${framework} controls to automate testing and evidence repository updates.`
    })),
    estimatedRoi: {
      efficiencyGain: isLarge ? "35% - 45% lower manual audit burden" : "25% - 35% time savings",
      complianceConfidence: "99.8% continuous audit readiness posture",
      narrative: "Guided by Co-Founder Ashwani Handa’s standardized 25+ year enterprise IT advisory standards, this roadmap eliminates single-point-of-failure vulnerabilities in compliance reporting."
    }
  };
}

// API Route: Digital Transformation & GRC Advisor (Gemini)
app.post("/api/gemini/assess", async (req, res) => {
  try {
    const { industry, scale, compliance = [], painPoints = "", currentSystems = "" } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY environment variable is not defined on Vercel. Utilizing high-fidelity local GRC rules engine fallback.");
      const localBlueprint = generateLocalBlueprint(req.body);
      return res.json(localBlueprint);
    }

    const prompt = `
      You are Maynit's AI Digital Transformation & GRC Consultant.
      Based on the following client profile, generate a highly professional, strategic digital transformation and GRC (Governance, Risk, and Compliance) roadmap.
      
      Client Profile:
      - Industry: ${industry}
      - Organization Scale: ${scale}
      - Target Compliance Frameworks: ${compliance.join(", ") || "None specified"}
      - Current Systems: ${currentSystems || "None specified"}
      - Key Operational Pain Points: ${painPoints}
      
      Provide the response as a JSON object with the following structure:
      {
        "executiveSummary": "A concise executive consulting summary (2-3 sentences).",
        "recommendedServiceNowModules": [
          {
            "module": "e.g., GRC (Governance, Risk, and Compliance) or ITOM",
            "reason": "Why this module is highly recommended for their specific pain points.",
            "priority": "High / Medium / Low"
          }
        ],
        "implementationPhases": [
          {
            "phase": "Phase 1: Foundation (or custom title)",
            "duration": "e.g., Months 1-3",
            "deliverables": ["Deliverable A", "Deliverable B"]
          }
        ],
        "complianceGaps": [
          {
            "framework": "e.g., SOX / HIPAA",
            "riskLevel": "Critical / High / Medium",
            "remediation": "Specific ServiceNow security/compliance actions to take."
          }
        ],
        "estimatedRoi": {
          "efficiencyGain": "e.g., 30-40% operational efficiency",
          "complianceConfidence": "e.g., 99% audit readiness",
          "narrative": "A brief narrative of the value Maynit co-founder Ashwani Handa's delivery approach will bring."
        }
      }
      
      Return ONLY a raw, valid JSON object matching the schema exactly. Do not wrap in markdown or backticks.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text || "{}";
    const cleanJson = text.trim();
    
    let data;
    try {
      data = JSON.parse(cleanJson);
    } catch (parseErr) {
      // Fallback parse if wrapped in markdown or backticks
      const jsonMatch = cleanJson.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        throw parseErr;
      }
    }

    res.json(data);
  } catch (err: any) {
    console.error("Gemini Advisor Error:", err);
    console.warn("Utilizing high-fidelity local fallback.");
    const localBlueprint = generateLocalBlueprint(req.body);
    res.json(localBlueprint);
  }
});

// Export the Express app for Vercel serverless environment
export default app;
