export type QuestionType = "text" | "single-choice" | "multi-choice";

// AI Maturity Model — 11 levels (0-10) grouped into 4 tiers
export interface MaturityLevel {
  level: number;
  name: string;
  description: string;
  tier: "Foundational" | "Operational" | "Strategic" | "Visionary";
}

export const maturityLevels: MaturityLevel[] = [
  { level: 0, name: "Unaware", description: "No understanding of AI concepts or applications. Organization has not considered AI in any capacity.", tier: "Foundational" },
  { level: 1, name: "Aware", description: "Basic awareness of AI exists. Leadership has discussed AI conceptually but no concrete steps have been taken.", tier: "Foundational" },
  { level: 2, name: "Exploring", description: "Actively researching AI possibilities. Some team members experimenting with consumer AI tools individually.", tier: "Foundational" },
  { level: 3, name: "Experimenting", description: "Running initial AI pilots. Small teams testing specific use cases with measurable but limited results.", tier: "Foundational" },
  { level: 4, name: "Implementing", description: "Deploying AI solutions in specific departments. Formal budget allocated and initial KPIs being tracked.", tier: "Operational" },
  { level: 5, name: "Integrating", description: "AI embedded into multiple workflows across departments. Cross-functional AI initiatives with dedicated teams.", tier: "Operational" },
  { level: 6, name: "Optimizing", description: "Continuously improving AI systems based on performance data. AI governance policies in place and scaling rapidly.", tier: "Operational" },
  { level: 7, name: "Scaling", description: "AI is a core part of business strategy. Organization-wide adoption with sophisticated measurement frameworks.", tier: "Strategic" },
  { level: 8, name: "Leading", description: "Industry-leading AI capabilities. Creating competitive moats through proprietary AI systems and data advantages.", tier: "Strategic" },
  { level: 9, name: "Innovating", description: "Pushing boundaries of what's possible with AI. Developing novel applications that redefine industry standards.", tier: "Visionary" },
  { level: 10, name: "Transforming", description: "AI is fundamental to the organization's identity. Business model is AI-native with self-improving systems.", tier: "Visionary" },
];

export const maturityTiers = {
  Foundational: { range: "0-3", color: "from-amber-500 to-orange-500", description: "Building awareness and running first experiments" },
  Operational: { range: "4-6", color: "from-blue-500 to-indigo-500", description: "Deploying, integrating, and optimizing AI across the business" },
  Strategic: { range: "7-8", color: "from-purple-500 to-violet-500", description: "AI as a core strategic differentiator" },
  Visionary: { range: "9-10", color: "from-emerald-500 to-teal-500", description: "Redefining what's possible with AI-native operations" },
} as const;

export function getMaturityLevel(score: number): MaturityLevel {
  const clamped = Math.max(0, Math.min(10, Math.round(score)));
  return maturityLevels[clamped];
}

export function getMaturityTier(level: number): keyof typeof maturityTiers {
  if (level <= 3) return "Foundational";
  if (level <= 6) return "Operational";
  if (level <= 8) return "Strategic";
  return "Visionary";
}

export interface QuestionOption {
  label: string;
  value: string;
}

export interface UnifiedQuestion {
  id: string;
  phase: 1 | 2 | 3 | 4 | 5;
  type: QuestionType;
  questionText: string;
  subtitle?: string;
  placeholder?: string;
  options?: QuestionOption[];
  probes?: string[];
  maxSelections?: number;
  category: string;
}

export interface Phase {
  number: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  icon: string;
}

export const phases: Phase[] = [
  {
    number: 1,
    title: "Personal AI Maturity",
    subtitle: "Let's understand where you are personally with AI.",
    icon: "user",
  },
  {
    number: 2,
    title: "Organizational AI Maturity",
    subtitle:
      "Now let's look at how AI has been adopted across your organization.",
    icon: "building",
  },
  {
    number: 3,
    title: "Pain Points",
    subtitle: "Let's identify what's eating your time and costing you money.",
    icon: "alert",
  },
  {
    number: 4,
    title: "Business Context",
    subtitle: "Tell us about your business so we can tailor our analysis.",
    icon: "briefcase",
  },
  {
    number: 5,
    title: "Core Workflows",
    subtitle:
      "Finally, let's map where AI could add the most value in your business.",
    icon: "workflow",
  },
];

export const unifiedQuestions: UnifiedQuestion[] = [
  // ── Phase 1: Personal AI Maturity ──
  {
    id: "personal-tool-usage",
    phase: 1,
    type: "single-choice",
    questionText:
      "Which best describes your personal AI usage right now, {name}?",
    category: "Personal AI Maturity",
    options: [
      { label: "I haven't really used AI tools yet", value: "none" },
      {
        label: "I've tried ChatGPT or similar a few times",
        value: "exploring",
      },
      { label: "I use AI tools weekly for specific tasks", value: "regular" },
      { label: "AI is embedded in my daily workflow", value: "advanced" },
      {
        label: "I build custom AI solutions and automations",
        value: "builder",
      },
    ],
  },
  {
    id: "personal-sophistication",
    phase: 1,
    type: "text",
    questionText:
      "What's the most impressive thing you've done with AI that actually stuck in your workflow?",
    subtitle: "Not something you tried once — something that changed how you work.",
    placeholder:
      "e.g., Built a custom GPT for deal analysis, automated my weekly reporting, nothing yet...",
    probes: [
      "Did it save you time or money?",
      "Is it still part of your workflow?",
    ],
    category: "Personal AI Maturity",
  },
  {
    id: "personal-barriers",
    phase: 1,
    type: "multi-choice",
    questionText:
      "What's been your biggest barrier to going deeper with AI?",
    subtitle: "Select up to 3.",
    maxSelections: 3,
    category: "Personal AI Maturity",
    options: [
      { label: "Not enough time to learn", value: "time" },
      { label: "Don't know where to start", value: "direction" },
      { label: "Don't trust the outputs", value: "trust" },
      { label: "Can't see the ROI for my role", value: "roi" },
      { label: "Bad experiences / frustrating tools", value: "experience" },
      { label: "My organization hasn't prioritized it", value: "org" },
      { label: "Honestly, it's intimidating", value: "intimidation" },
    ],
  },

  // ── Phase 2: Organizational AI Maturity ──
  {
    id: "org-adoption-level",
    phase: 2,
    type: "single-choice",
    questionText:
      "What percentage of your team is genuinely AI-capable right now?",
    subtitle:
      "Not interested, not dabbling — actually using AI independently.",
    category: "Organizational AI Maturity",
    options: [
      { label: "Less than 10% — a few curious individuals", value: "nascent" },
      { label: "10-25% — pockets of adoption", value: "emerging" },
      {
        label: "25-50% — growing adoption with some champions",
        value: "developing",
      },
      { label: "50-75% — most teams are using AI", value: "established" },
      {
        label: "75%+ — AI is embedded in most workflows",
        value: "leading",
      },
    ],
  },
  {
    id: "org-strategy",
    phase: 2,
    type: "single-choice",
    questionText:
      "How would you describe your organization's AI strategy?",
    category: "Organizational AI Maturity",
    options: [
      { label: "We don't have one — it's ad hoc", value: "none" },
      {
        label: "We're exploring — lots of talk, few pilots",
        value: "exploring",
      },
      {
        label: "We have pilots running but no scaled deployment",
        value: "piloting",
      },
      {
        label: "We have a formal strategy with budget and KPIs",
        value: "formal",
      },
      { label: "AI is a core part of our business strategy", value: "core" },
    ],
  },
  {
    id: "org-knowledge",
    phase: 2,
    type: "text",
    questionText:
      "If your top three people left tomorrow, how much of how your business actually operates is documented vs. living in their heads?",
    placeholder:
      "e.g., Most processes are tribal knowledge, SOPs are outdated, critical knowledge is concentrated in 2-3 people...",
    probes: ["What's your bus factor?", "What would break first?"],
    category: "Organizational AI Maturity",
  },

  // ── Phase 3: Pain Points ──
  {
    id: "pain-personal-time",
    phase: 3,
    type: "text",
    questionText:
      "What repetitive work eats hours of your week that shouldn't require your attention?",
    subtitle:
      "Think about what you did this week that felt like a waste of your talent.",
    placeholder:
      "e.g., Reviewing reports, formatting presentations, filtering emails, manual data entry...",
    probes: ["What do you dread doing?", "What would you automate if you could?"],
    category: "Pain Points",
  },
  {
    id: "pain-business-critical",
    phase: 3,
    type: "multi-choice",
    questionText: "Which of these business pain points keep you up at night?",
    subtitle: "Select your top 3.",
    maxSelections: 3,
    category: "Pain Points",
    options: [
      {
        label: "Inconsistent quality / errors in deliverables",
        value: "quality",
      },
      {
        label: "Slow decision-making due to scattered data",
        value: "decisions",
      },
      {
        label: "Key-person dependencies (single points of failure)",
        value: "keyman",
      },
      { label: "Customer experience gaps", value: "cx" },
      {
        label: "Can't scale without proportionally scaling headcount",
        value: "scaling",
      },
      { label: "Falling behind competitors", value: "competitive" },
      {
        label: "Wasted spend on tools that don't integrate",
        value: "tools",
      },
      { label: "Compliance / risk management gaps", value: "compliance" },
    ],
  },
  {
    id: "pain-cost-inaction",
    phase: 3,
    type: "single-choice",
    questionText:
      "If a competitor started using AI to do what you do 3x faster with more accuracy, how would that change your position?",
    category: "Pain Points",
    options: [
      {
        label: "It would be devastating — we'd lose clients fast",
        value: "critical",
      },
      {
        label: "It would be concerning — we'd need to respond quickly",
        value: "high",
      },
      {
        label: "It would matter, but our relationships protect us for now",
        value: "moderate",
      },
      {
        label: "Our industry is slow to change — it wouldn't hit us for years",
        value: "low",
      },
    ],
  },
  {
    id: "pain-uncomfortable-truth",
    phase: 3,
    type: "text",
    questionText:
      "What's the uncomfortable truth about your readiness for AI that people think but don't say out loud?",
    subtitle: "This is the question that matters most. Be brutally honest.",
    placeholder:
      "e.g., Most of us are pretending we understand AI, leadership is resistant, we're years behind...",
    probes: [
      "What's the real blocker?",
      "Is it cultural, technical, or strategic?",
    ],
    category: "Pain Points",
  },

  // ── Phase 4: Business Context ──
  {
    id: "context-business",
    phase: 4,
    type: "text",
    questionText:
      "Describe your business or role in a sentence or two. What are you responsible for?",
    placeholder:
      "e.g., I run a 50-person sales team at a SaaS company, manage a $20M real estate portfolio, oversee product development at a fintech startup...",
    probes: [
      "What does a high-stakes week look like?",
      "Where does your time actually go?",
    ],
    category: "Business Context",
  },
  {
    id: "context-industry",
    phase: 4,
    type: "single-choice",
    questionText: "What industry are you in?",
    category: "Business Context",
    options: [
      { label: "Technology / SaaS", value: "tech" },
      { label: "Financial Services / Real Estate", value: "finance" },
      { label: "Healthcare / Life Sciences", value: "health" },
      { label: "Professional Services / Consulting", value: "services" },
      { label: "Education / Nonprofit", value: "education" },
      { label: "Manufacturing / Supply Chain", value: "manufacturing" },
      { label: "Media / Marketing / Creative", value: "media" },
      { label: "Government / Public Sector", value: "government" },
      { label: "Other", value: "other" },
    ],
  },

  // ── Phase 5: Core Workflows ──
  {
    id: "context-workflows",
    phase: 5,
    type: "text",
    questionText:
      "Describe 2-3 critical business workflows that are high-volume, error-prone, or require expensive expertise.",
    subtitle:
      "Think about the processes with the most manual handoffs or where errors cost you the most.",
    placeholder:
      "e.g., Client onboarding takes 3 weeks and involves 5 handoffs, our quarterly reporting requires pulling data from 8 systems manually...",
    probes: [
      "What processes have the most manual handoffs?",
      "Where do errors cost you the most?",
    ],
    category: "Core Workflows",
  },
  {
    id: "context-dream-automation",
    phase: 5,
    type: "text",
    questionText:
      "If you could wave a magic wand and have AI handle one thing perfectly starting tomorrow, what would it be?",
    placeholder:
      "e.g., Automatically qualify and route all inbound leads, generate board-ready reports from raw data, handle first-pass document review...",
    category: "Core Workflows",
  },
  {
    id: "context-biggest-bottleneck",
    phase: 5,
    type: "text",
    questionText:
      "What's the single biggest bottleneck or process failure that costs your business the most time or money?",
    placeholder:
      "e.g., Deal evaluation is all in the founder's head, customer support takes 48 hours to resolve, manual invoice reconciliation...",
    probes: [
      "How much time or money does this cost?",
      "What have you tried to fix it?",
    ],
    category: "Core Workflows",
  },
];

// Helper to get questions for a specific phase
export function getQuestionsForPhase(
  phaseNumber: number
): UnifiedQuestion[] {
  return unifiedQuestions.filter((q) => q.phase === phaseNumber);
}

// ── Backward-compatible exports for legacy AssessmentForm ──
export type AssessmentQuestion = UnifiedQuestion;
export const individualQuestions: UnifiedQuestion[] = [];
export const organizationalQuestions: UnifiedQuestion[] = [];
