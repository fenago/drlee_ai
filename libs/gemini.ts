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
