import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const sendGemini = async (
  prompt: string,
  systemInstruction?: string,
  maxTokens = 4096,
  temp = 0.7
): Promise<string | null> => {
  console.log("Ask Gemini >>>");
  console.log(" - PROMPT: " + prompt.substring(0, 200) + "...");

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      generationConfig: {
        maxOutputTokens: maxTokens,
        temperature: temp,
      },
      ...(systemInstruction && { systemInstruction }),
    });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const answer = response.text();

    console.log(">>> " + answer.substring(0, 200) + "...");
    console.log("TOKENS USED: " + JSON.stringify(response.usageMetadata));

    return answer;
  } catch (e: any) {
    console.error("Gemini Error:", e?.message || e);
    return null;
  }
};

// Legacy function for old individual/organizational assessments (backward compat)
export const generateRealityGapReport = async (
  assessmentType: "individual" | "organizational",
  answers: { questionId: string; questionText: string; answer: string }[]
): Promise<string | null> => {
  const answersFormatted = answers
    .map((a) => `**${a.questionText}**\n${a.answer}`)
    .join("\n\n---\n\n");

  const systemInstruction = `You are Dr. Lee's AI Assessment Analyst at DrLee.ai, the premier executive AI education platform. You specialize in evaluating ${assessmentType === "individual" ? "individual professionals'" : "organizations'"} AI readiness and producing actionable Reality Gap Reports.

Your analysis should be:
- Brutally honest but constructive
- Specific to their actual situation (not generic)
- Action-oriented with concrete next steps
- Tied to measurable outcomes

You MUST respond in valid JSON format only. No markdown fences, no extra text.`;

  const prompt = `Analyze this ${assessmentType === "individual" ? "Individual" : "Organizational"} AI Readiness Assessment and produce a Reality Gap Report.

## Assessment Responses

${answersFormatted}

## Required Output (JSON)

Respond ONLY with a JSON object in this exact structure:

{
  "overallScore": <number 0-100>,
  "maturityLevel": "<one of: Unaware | Exploring | Experimenting | Implementing | Scaling | Leading>",
  "executiveSummary": "<2-3 paragraph executive summary of their AI readiness reality>",
  "topGaps": ["<gap 1>", "<gap 2>", "<gap 3>"],
  "quickWins": ["<specific action 1 for next 30 days>", "<action 2>", "<action 3>"],
  "bigOpportunity": "<the single biggest AI opportunity based on their specific situation>",
  "recommendedPath": "<specific DrLee.ai learning path and reasoning>",
  "detailedAnalysis": [
    {
      "title": "Current AI Maturity",
      "content": "<detailed assessment of where they are now>"
    },
    {
      "title": "Critical Gaps",
      "content": "<deep analysis of what's missing>"
    },
    {
      "title": "Risk of Inaction",
      "content": "<what happens if they don't address these gaps>"
    },
    {
      "title": "90-Day Action Plan",
      "content": "<specific steps for the first 90 days>"
    },
    {
      "title": "Recommended Training Path",
      "content": "<specific DrLee.ai courses and why, with learning sequence>"
    }
  ]
}`;

  return sendGemini(prompt, systemInstruction, 8192, 0.7);
};

// New unified assessment report generator with 0-10 maturity model
export const generateUnifiedReport = async (
  answers: {
    questionId: string;
    questionText: string;
    category: string;
    type: string;
    answer: string;
  }[],
  respondent: {
    name: string;
    email: string;
    company?: string;
    role?: string;
    website?: string;
    linkedin?: string;
  }
): Promise<string | null> => {
  const answersFormatted = answers
    .map(
      (a) =>
        `[${a.category}] **${a.questionText}**\nType: ${a.type}\nAnswer: ${a.answer}`
    )
    .join("\n\n---\n\n");

  const respondentContext = [
    `Name: ${respondent.name}`,
    respondent.company ? `Company: ${respondent.company}` : null,
    respondent.role ? `Role: ${respondent.role}` : null,
    respondent.website ? `Website: ${respondent.website}` : null,
    respondent.linkedin ? `LinkedIn: ${respondent.linkedin}` : null,
  ]
    .filter(Boolean)
    .join(" | ");

  const systemInstruction = `You are Dr. Lee's AI Transformation Advisor at DrLee.ai. You produce personalized AI Reality Gap Reports based on a 5-area assessment covering Personal AI Maturity, Organizational AI Maturity, Pain Points, Business Context, and Core Workflows.

## AI Maturity Model (0-10 Scale)

You score both personal and organizational maturity on this 11-level scale:

- **0 (Unaware)**: No understanding of AI concepts or applications
- **1 (Aware)**: Basic awareness; leadership has discussed AI conceptually
- **2 (Exploring)**: Actively researching; some experimenting with consumer AI tools
- **3 (Experimenting)**: Running initial AI pilots with limited results
- **4 (Implementing)**: Deploying AI in specific departments with formal budget
- **5 (Integrating)**: AI embedded into multiple workflows across departments
- **6 (Optimizing)**: Continuously improving AI systems; governance policies in place
- **7 (Scaling)**: AI is a core part of business strategy; org-wide adoption
- **8 (Leading)**: Industry-leading AI capabilities; creating competitive moats
- **9 (Innovating)**: Pushing boundaries; developing novel applications
- **10 (Transforming)**: AI-native business model with self-improving systems

## Tier Clustering
- Foundational (0-3): Building awareness and running first experiments
- Operational (4-6): Deploying, integrating, and optimizing AI
- Strategic (7-8): AI as a core strategic differentiator
- Visionary (9-10): Redefining what's possible with AI-native operations

## Analysis Rules
- Be brutally honest but constructive
- Personalize everything to their specific situation — use their name, company, role, and industry
- Reference their actual answers; never be generic
- Action-oriented with concrete next steps tied to measurable outcomes
- Each area score should be justified by their specific responses

You MUST respond in valid JSON format only. No markdown fences, no extra text.`;

  const prompt = `Analyze this Unified AI Reality Gap Assessment and produce a personalized report.

## Respondent
${respondentContext}

## Assessment Responses (5 Areas)

${answersFormatted}

## Required Output (JSON)

Respond ONLY with a JSON object in this exact structure:

{
  "overallScore": <number 0-100>,
  "personalMaturityScore": <number 0-10>,
  "orgMaturityScore": <number 0-10>,
  "painSeverityScore": <number 0-100>,
  "businessReadinessScore": <number 0-100>,
  "workflowOpportunityScore": <number 0-100>,
  "personalMaturityLevel": "<level name from 0-10 scale above>",
  "orgMaturityLevel": "<level name from 0-10 scale above>",
  "personalTier": "<Foundational | Operational | Strategic | Visionary>",
  "orgTier": "<Foundational | Operational | Strategic | Visionary>",
  "executiveSummary": "<2-3 paragraph personalized executive summary using their name and specific context>",
  "topGaps": ["<gap 1>", "<gap 2>", "<gap 3>"],
  "quickWins": ["<specific action 1 for next 30 days>", "<action 2>", "<action 3>"],
  "bigOpportunity": "<the single biggest AI opportunity based on their specific workflows, pain points, and business context>",
  "recommendedPath": "<specific DrLee.ai recommended next step: the AI Mastermind experience customized to their maturity level>",
  "personalAnalysis": {
    "currentState": "<narrative of where they are personally with AI, referencing their answers>",
    "gaps": ["<personal gap 1>", "<personal gap 2>"],
    "quickWins": ["<personal quick win 1>", "<personal quick win 2>"]
  },
  "orgAnalysis": {
    "currentState": "<narrative of where their organization stands, referencing their answers>",
    "gaps": ["<org gap 1>", "<org gap 2>"],
    "quickWins": ["<org quick win 1>", "<org quick win 2>"]
  },
  "painPointAnalysis": {
    "currentState": "<narrative of their pain points and urgency level>",
    "topPains": ["<pain 1>", "<pain 2>", "<pain 3>"],
    "aiSolutions": ["<solution 1>", "<solution 2>", "<solution 3>"]
  },
  "businessContextAnalysis": {
    "currentState": "<narrative of their business situation and industry context>",
    "opportunities": ["<opportunity 1>", "<opportunity 2>"],
    "risks": ["<risk 1>", "<risk 2>"]
  },
  "workflowAnalysis": {
    "currentState": "<narrative of their workflow opportunities>",
    "topWorkflows": ["<workflow to automate 1>", "<workflow 2>", "<workflow 3>"],
    "estimatedImpact": "<description of potential time/money savings>"
  },
  "ninetyDayPlan": [
    { "week": "Week 1-2", "action": "<specific action>", "outcome": "<expected outcome>" },
    { "week": "Week 3-4", "action": "<specific action>", "outcome": "<expected outcome>" },
    { "week": "Month 2", "action": "<specific action>", "outcome": "<expected outcome>" },
    { "week": "Month 3", "action": "<specific action>", "outcome": "<expected outcome>" }
  ],
  "detailedAnalysis": [
    {
      "title": "Personal AI Maturity Assessment",
      "content": "<detailed analysis of their personal AI journey>"
    },
    {
      "title": "Organizational Readiness",
      "content": "<detailed analysis of their org's AI readiness>"
    },
    {
      "title": "The Cost of Inaction",
      "content": "<what happens if they don't close the gap, personalized to their competitive situation>"
    },
    {
      "title": "Your AI Transformation Roadmap",
      "content": "<comprehensive 90-day roadmap with specific milestones>"
    },
    {
      "title": "Recommended Next Step: AI Mastermind",
      "content": "<why the DrLee.ai AI Mastermind experience is the right next step, customized to their maturity level and business needs>"
    }
  ]
}`;

  return sendGemini(prompt, systemInstruction, 12288, 0.7);
};
