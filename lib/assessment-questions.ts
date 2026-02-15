export interface AssessmentQuestion {
  id: string;
  questionText: string;
  subtitle?: string;
  placeholder: string;
  probes?: string[];
  category: string;
}

export const individualQuestions: AssessmentQuestion[] = [
  {
    id: "ind-ai-tools",
    questionText:
      "What AI tools have you personally used this week? Not your team — you specifically.",
    subtitle: "Be honest. This is between you and the assessment.",
    placeholder:
      "e.g., ChatGPT for drafting emails, nothing specific, Copilot for coding...",
    probes: ["Which ones? How often?", "Paid or free versions?"],
    category: "Current Usage",
  },
  {
    id: "ind-sophistication",
    questionText:
      "What is the most sophisticated thing you have done with AI that genuinely changed how you work?",
    subtitle: "Not something you tried once — something that stuck.",
    placeholder:
      "e.g., Built a custom GPT for deal analysis, automated my reporting...",
    probes: [
      "Did it save you time or money?",
      "Is it still part of your workflow?",
    ],
    category: "Sophistication Level",
  },
  {
    id: "ind-barriers",
    questionText:
      "What has been the biggest barrier to you getting more invested in AI? Time? Knowledge? Trust? Something else?",
    placeholder:
      "e.g., I don't have time to learn, I don't trust the outputs, I don't know where to start...",
    probes: [
      "Is it the learning curve?",
      "Bad experiences?",
      "Not seeing the ROI?",
    ],
    category: "Barriers",
  },
  {
    id: "ind-private-learning",
    questionText:
      "If you could have an AI expert sit with you privately for two hours — no team, no judgment — what would you want to learn?",
    subtitle: "What would you be embarrassed to ask publicly?",
    placeholder:
      "e.g., How to actually use AI beyond chatting, how to build agents, basics I've been too busy to learn...",
    probes: [
      "What do you feel you should already know?",
      "What feels intimidating?",
    ],
    category: "Learning Gaps",
  },
  {
    id: "ind-business-context",
    questionText:
      "Describe your current business or role. What are you responsible for? What does a typical high-stakes week look like?",
    placeholder:
      "e.g., I run a 50-person sales team, manage $20M portfolio, oversee product development...",
    probes: [
      "What decisions keep you up at night?",
      "Where does your time actually go?",
    ],
    category: "Business Context",
  },
  {
    id: "ind-bottlenecks",
    questionText:
      "What repetitive work eats hours of your day that should not require the attention it gets from you?",
    subtitle:
      "Think about what you did this week that felt like a waste of your talent.",
    placeholder:
      "e.g., Reviewing reports, formatting presentations, filtering emails, manual data entry...",
    probes: [
      "What takes too long?",
      "What do you dread doing?",
      "What would you automate if you could?",
    ],
    category: "Automation Opportunities",
  },
  {
    id: "ind-data-landscape",
    questionText:
      "Where does your critical business knowledge live? In documents? Spreadsheets? People's heads? All of the above?",
    placeholder:
      "e.g., Mostly in my head and scattered across emails, some in Notion, critical stuff in Excel...",
    probes: [
      "If you were gone for a month, what would break?",
      "What is not documented?",
    ],
    category: "Data & Knowledge",
  },
  {
    id: "ind-uncomfortable-truth",
    questionText:
      "What is the uncomfortable truth about your industry's or your own readiness for AI that people think but don't say out loud?",
    subtitle: "This is the question that matters most. Be brutally honest.",
    placeholder:
      "e.g., Most of us are pretending we understand AI, the decision-makers are too old to adapt, we're years behind...",
    probes: [
      "What are your competitors doing that you are not?",
      "What would happen if a competitor adopted AI and you did not?",
    ],
    category: "Honest Reality",
  },
];

export const organizationalQuestions: AssessmentQuestion[] = [
  {
    id: "org-team-capability",
    questionText:
      "What percentage of your team is genuinely AI-capable right now? Not interested, not dabbling — actually using AI independently to improve their work.",
    subtitle: "Give us a real number, not an aspirational one.",
    placeholder:
      "e.g., Maybe 10%, most people are curious but not using it, a few power users...",
    probes: [
      "Are they self-taught or trained?",
      "Is there a champion driving adoption?",
    ],
    category: "Team Capability",
  },
  {
    id: "org-documented-knowledge",
    questionText:
      "If your top three people left tomorrow, how much of how your organization actually operates is documented versus exists in their heads?",
    placeholder:
      "e.g., Most processes are tribal knowledge, SOPs are outdated, critical knowledge is in 2-3 people's heads...",
    probes: [
      "What is your bus factor?",
      "Are processes documented or just known?",
    ],
    category: "Knowledge Management",
  },
  {
    id: "org-tool-landscape",
    questionText:
      "Walk me through your technology stack. CRM, project management, communication, data, analytics. How many tools and how well do they talk to each other?",
    placeholder:
      "e.g., Salesforce, Slack, Google Workspace, custom Excel models, nothing is integrated...",
    probes: [
      "What data gets manually moved between systems?",
      "Any shadow IT?",
    ],
    category: "Tool Landscape",
  },
  {
    id: "org-single-failure",
    questionText:
      "Where is your single biggest point of failure? The thing that only one person knows how to do, or the process that would break everything if it stopped.",
    placeholder:
      "e.g., Our head of ops is the only one who understands the pricing model, deal evaluation is all in the founder's head...",
    probes: ["What if that person was unavailable for a month?"],
    category: "Single Points of Failure",
  },
  {
    id: "org-automate-wishes",
    questionText:
      "Name three things where you think: 'My god, if I could automate this, it would change everything.'",
    subtitle:
      "Don't filter yourself. What would genuinely transform your operations?",
    placeholder:
      "e.g., Client reporting, invoice processing, lead qualification, onboarding new team members...",
    probes: [
      "What is manual that shouldn't be?",
      "What would free up the most senior time?",
    ],
    category: "Automation Priorities",
  },
  {
    id: "org-error-patterns",
    questionText:
      "Where do errors, quality issues, or costly mistakes most commonly show up in your organization? How do you catch them — proactively or when something goes wrong?",
    placeholder:
      "e.g., Data entry errors catch us quarterly, estimation mistakes cost us projects, QA is always reactive...",
    probes: [
      "What is the cost of these errors?",
      "How do you discover them today?",
    ],
    category: "Error Patterns",
  },
  {
    id: "org-competitive-pressure",
    questionText:
      "If a competitor started using AI to do what you do but three times faster and with more accuracy, how would that change your competitive position?",
    placeholder:
      "e.g., It would be devastating, we'd lose clients fast, honestly we'd be fine because our relationships matter more...",
    probes: [
      "Is this already happening?",
      "What is your current information advantage?",
    ],
    category: "Competitive Pressure",
  },
  {
    id: "org-uncomfortable-truth",
    questionText:
      "What is the uncomfortable truth about your organization's AI readiness that your leadership team thinks but does not say out loud?",
    subtitle: "This answer drives the most valuable part of your report.",
    placeholder:
      "e.g., We talk about AI transformation but nobody actually knows what to do, leadership is resistant, we're years behind...",
    probes: [
      "What is the real blocker?",
      "Is it cultural, technical, or strategic?",
    ],
    category: "Honest Organizational Reality",
  },
];
