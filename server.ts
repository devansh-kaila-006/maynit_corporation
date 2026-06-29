import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

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

  // API Route: Digital Transformation & GRC Advisor (Gemini)
  app.post("/api/gemini/assess", async (req, res) => {
    try {
      const { industry, scale, compliance, painPoints, currentSystems } = req.body;

      if (!process.env.GEMINI_API_KEY) {
        return res.status(400).json({
          error: "API Key Not Found",
          message: "The Gemini API key is missing. Please add your GEMINI_API_KEY in the Settings > Secrets panel."
        });
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
      res.status(500).json({
        error: "Consultation Generation Failed",
        message: err.message || "An unexpected error occurred while analyzing with Gemini."
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
