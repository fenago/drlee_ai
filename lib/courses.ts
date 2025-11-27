// Course data for all 21 masterclasses
export interface Course {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  categoryId: string;
  rarity?: string;
  price: number;
  hook: string;
  description: string;
  outcomes: string[];
  hours: number;
  modules: number;
  technologies: string[];
  curriculum: {
    title: string;
    lessons: string[];
  }[];
  instructor: {
    name: string;
    title: string;
    bio: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  signatureSolution?: {
    stages: Array<{
      title: string;
      subtitle: string;
      weeks: string;
      from: string;
      to: string;
      moat: string;
      moatDesc: string;
      color: 'blue' | 'purple' | 'green';
    }>;
    steps: Array<{
      title: string;
      from: string;
      to: string;
      moat: string;
      stage: number;
    }>;
    millionDollarMessages?: {
      careerAdvancers?: string;
      founders?: string;
    };
  };
  pricingModalities?: {
    selfPaced: {
      price: number;
      description: string;
      features: string[];
    };
    cohort: {
      price: number;
      description: string;
      features: string[];
    };
    bootcamp: {
      price: number;
      description: string;
      features: string[];
    };
    founders: {
      price: number;
      description: string;
      features: string[];
    };
  };
}

export const courses: Course[] = [
  // HARDCORE DEVELOPERS
  {
    id: "llm",
    slug: "large-language-models",
    name: "Build Your Own LLM",
    subtitle: "The LLM Sovereignty Stack™ — Stop Renting AI, Start Owning It",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Flagship",
    price: 1997,
    hook: "The ONLY masterclass teaching you to build production-ready LLMs from scratch—own your technology, stop renting from OpenAI.",
    description: "This is not another course on using APIs. This is executive business education (Harvard/MIT/Stanford caliber) merged with a masterclass for tech founders and AI leaders. Using the DrLee.AI Shu-Ha-Ri learning method, you'll go from API consumer to model builder in 9 transformative steps. Each module begins with a TedTalk-style presentation, then you immediately build it yourself with hands-on coding. You'll construct a complete GPT architecture from scratch, train on real data, fine-tune for your use cases, and deploy with zero API dependency. By the end, you won't just understand how LLMs work—you'll own production-ready models that become your competitive moat. Available in 4 modalities: 9-Week Live Cohort, 5-Day Immersive Bootcamp, Self-Paced Mastery, or Founder's Edition (1:1 mentorship/Fractional CTO).",
    outcomes: [
      "Build complete GPT architecture from scratch in PyTorch (4,000+ lines of code you understand)",
      "Implement self-attention, causal attention, and multi-head attention mechanisms from first principles",
      "Code the complete transformer: embeddings, layer normalization, feed-forward networks, residual connections",
      "Tokenize text using BPE (same technique as modern ChatGPT/Claude/Gemini), create embeddings, encode positions",
      "Train language models on 100M+ tokens using next-token prediction",
      "Fine-tune for classification tasks (spam detection, sentiment analysis) with 95%+ accuracy",
      "Fine-tune for instruction-following to create your own ChatGPT-style assistant",
      "Implement LoRA for parameter-efficient fine-tuning (0.1% of parameters, 10x faster training)",
      "Apply production training techniques: warmup, cosine decay, gradient clipping",
      "Deploy production models with zero API costs—own your model weights forever"
    ],
    hours: 50,
    modules: 9,
    technologies: ["PyTorch", "Tiktoken", "GPT-2", "LoRA", "Weights & Biases", "CUDA", "Hugging Face"],
    curriculum: [
      {
        title: "Step 1: The Architecture of Intelligence",
        lessons: [
          "The Nature of Language Models: From Pattern Matching to Understanding",
          "Real-World Applications and Possibilities: Where LLMs Create Business Value",
          "The Three-Stage Journey: Build, Train, Deploy",
          "Why Transformers Changed Everything: The Attention Revolution",
          "Data: The Foundation of Intelligence",
          "Deconstructing the GPT Blueprint: Every Component Explained",
          "Your Roadmap to Model Ownership: What You'll Build"
        ]
      },
      {
        title: "Step 2: Text as Data",
        lessons: [
          "Semantic Space: How Words Become Vectors",
          "Breaking Text into Intelligent Chunks: Tokenization Mastery",
          "Building the Model's Vocabulary: Token-to-ID Mapping",
          "Strategic Special Tokens for Context Control",
          "Byte Pair Encoding: The Production Standard (GPT-3/4, Claude, Llama)",
          "Efficient Data Sampling Strategies: Sliding Windows",
          "Learning Semantic Representations: Embedding Layers",
          "Position Encoding: Teaching Order to Parallel Systems"
        ]
      },
      {
        title: "Step 3: The Attention Revolution",
        lessons: [
          "Why Sequential Models Hit a Wall: The Case for Attention",
          "The Attention Mechanism: Weighted Relevance Explained",
          "Self-Attention: The Simplest Form (10 Lines of Python)",
          "Scaling Attention to Full Sequences: Batched Implementation",
          "Queries, Keys, Values: The Trainable Triplet",
          "Building Reusable Attention Components",
          "Causal Masking: The Secret of Text Generation",
          "Dropout: Preventing Attention Overfitting",
          "Building Production Causal Attention",
          "Why Multi-Head Attention Outperforms Single-Head",
          "Efficient Multi-Head Implementation: Parallel Computation"
        ]
      },
      {
        title: "Step 4: Architecting Language Models",
        lessons: [
          "Assembling the Complete Architecture: Embeddings → Transformer → Head",
          "Layer Normalization for Training Stability",
          "Feed-Forward Networks: The Other Half of Transformers",
          "Residual Connections: Enabling Deep Learning",
          "Building the Transformer Block: Modular Design",
          "Implementing the Full GPT Model: 4,000+ Lines You Understand",
          "Text Generation: Bringing Models to Life with Temperature Sampling"
        ]
      },
      {
        title: "Step 5: Training at Scale",
        lessons: [
          "Why Untrained Models Generate Noise: The Need for Pretraining",
          "The Loss Function: Measuring Learning (Cross-Entropy)",
          "Training vs Validation: Preventing Overfitting",
          "The Complete Training Loop: Forward, Loss, Backprop, Optimizer",
          "Temperature: Controlling Creativity (High = Creative, Low = Deterministic)",
          "Top-K Sampling: Quality Control for Generation",
          "Flexible Generation Functions: Customizable Decoding",
          "Persisting Model Weights: Deployment Readiness",
          "Leveraging Pretrained Weights: Loading GPT-2 for Transfer Learning"
        ]
      },
      {
        title: "Step 6: Task Specialization",
        lessons: [
          "The Fine-Tuning Landscape: Classification vs Instruction vs RLHF",
          "Data Preparation for Classification: Labeled Datasets",
          "Efficient Data Loading: PyTorch DataLoaders",
          "Transfer Learning Strategy: Freeze/Unfreeze Layers",
          "Adding Task-Specific Heads: Linear Projection Layers",
          "Training with Supervised Signals: Cross-Entropy on Class Distributions",
          "Fine-Tuning in Practice: 3-5 Epochs to Production",
          "Real-World Deployment: 95%+ Accuracy on Spam Detection"
        ]
      },
      {
        title: "Step 7: Instruction Intelligence",
        lessons: [
          "The Foundation of Helpful AI: How ChatGPT Was Created",
          "Formatting Instruction Data: (Instruction, Input, Output) Triples",
          "Batching Conversational Data: Padding and Attention Masks",
          "Building Instruction Data Loaders: Custom Collate Functions",
          "Choosing Your Starting Point: Pretrained vs From Scratch",
          "Training Instruction-Following Behavior: Supervised Fine-Tuning",
          "Capturing Model Responses: Generation and Evaluation",
          "Evaluating AI Assistant Quality: Helpfulness, Accuracy, Safety",
          "The Path to Alignment: RLHF and Beyond"
        ]
      },
      {
        title: "Step 8: Production Training Excellence",
        lessons: [
          "Warm Start: Preventing Early Instability with Learning Rate Warmup",
          "Cosine Annealing: Smooth Convergence with LR Scheduling",
          "Gradient Clipping: Explosive Gradient Protection",
          "The Production Training Function: Warmup + Cosine + Clipping + Logging",
          "GPU Optimization: Making Training 10x Faster",
          "Monitoring Training: TensorBoard and Weights & Biases"
        ]
      },
      {
        title: "Step 9: Efficient Adaptation at Scale",
        lessons: [
          "Low-Rank Adaptation Explained: How Modern ChatGPT/Gemini/Claude Fine-Tune",
          "Preparing Data for Efficient Training: Same Data, 10x Faster",
          "Injecting LoRA Adapters: Freezing Weights, Training Low-Rank Matrices",
          "Training with LoRA: 0.1% Parameters, 95-100% Performance",
          "Comparing LoRA vs Full Fine-Tuning: Cost-Benefit Analysis",
          "Multi-Task Adaptation: Swapping LoRA Adapters for Different Tasks",
          "Deployment Strategies: Serving Multiple Fine-Tuned Models Efficiently"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His philosophy: the best way to understand something is to build it yourself."
    },
    faqs: [
      {
        question: "Who is this masterclass for?",
        answer: "This is for AI engineers earning $100K-$150K who want to command $250K-$400K salaries, and for technical founders burning $5K-$50K/month on APIs who want to own their technology. If you're tired of being an API consumer and want to become a model builder, this is for you."
      },
      {
        question: "What's included in the different modalities?",
        answer: "Self-Paced ($1,997): All 9 modules, lifetime access, community support. 9-Week Cohort ($6,997): Live workshops, direct instructor access, accountability. 5-Day Bootcamp: Intensive executive format. Founder's Edition ($19,997): 1:1 coaching, custom architecture consulting, or Fractional CTO services."
      },
      {
        question: "What technical background do I need?",
        answer: "Intermediate Python skills and basic ML concepts. This is hands-on implementation using the Shu-Ha-Ri method: TedTalk-style inspiration + guided coding + experimentation. No PhD required. If you can code in Python, you're ready."
      },
      {
        question: "What hardware do I need?",
        answer: "Any modern laptop. GPU acceleration is optional—we provide cloud GPU options for faster training. The models you build will run locally on your machine. No specialized hardware required."
      },
      {
        question: "Will I actually build a working GPT model?",
        answer: "Yes. You'll build a complete GPT architecture from scratch (4,000+ lines of PyTorch), train on 100M+ tokens, fine-tune for classification and instruction-following, and deploy with zero API dependency. This is not a toy project—it's production-ready code."
      },
      {
        question: "How is this different from using the OpenAI API?",
        answer: "APIs are rented capability—you own nothing. This masterclass teaches you to OWN model weights. Stop paying $50K/year to OpenAI. Build proprietary models that become your competitive moat. Understand every line of code, customize architectures, eliminate API costs forever."
      },
      {
        question: "What's the ROI for engineers vs founders?",
        answer: "Engineers: Avg $80K-$150K salary increase within 12 months. 75% promoted to Senior+. Command $250K-$400K as irreplaceable AI architect. Founders: Save $100K-$500K/year in API costs. Build defensible moat. Raise Series A on proprietary technology. ROI in 3-6 months."
      },
      {
        question: "What's the DrLee.AI Shu-Ha-Ri learning method?",
        answer: "Shu (Learn): TedTalk-style masterclass + hands-on coding. Ha (Break): Modify architectures, experiment, adapt to your problems. Ri (Transcend): Innovate beyond what's taught, lead AI initiatives. Each module follows: Inspire → Implement → Integrate → Innovate."
      },
      {
        question: "Can I load pretrained weights like GPT-2?",
        answer: "Yes. You'll learn to load pretrained weights (GPT-2, Llama, etc.) into your custom architecture, giving you a powerful starting point for fine-tuning without training from scratch. Best of both worlds: understand the internals + leverage existing pretraining."
      },
      {
        question: "What if I'm not satisfied?",
        answer: "30-day money-back guarantee for Self-Paced and Cohort tiers. No questions asked. For Founder's Edition: 90-day satisfaction guarantee—we'll work with you until you achieve results or refund 50% (reflecting value already delivered)."
      }
    ],
    signatureSolution: {
      stages: [
        {
          title: "Foundation",
          subtitle: "Shu (守) - Learn the Fundamentals",
          weeks: "Weeks 1-3",
          from: "What is an LLM? How does attention work? I don't understand transformers.",
          to: "I can explain transformer architecture, code attention mechanisms from scratch, and prepare production data pipelines.",
          moat: "Knowledge Foundation",
          moatDesc: "Speak the language of frontier AI—explain LLM architecture to executives, engineers, and investors with clarity and confidence.",
          color: "blue"
        },
        {
          title: "Implementation",
          subtitle: "Ha (破) - Build and Deploy",
          weeks: "Weeks 4-6",
          from: "I've never built a complete model from scratch. How do you train on real data?",
          to: "I've coded a complete GPT architecture, trained it on 100M+ tokens, and fine-tuned for classification tasks.",
          moat: "Implementation Mastery",
          moatDesc: "Build and train models without libraries or APIs—own the complete pipeline from tokenization to deployment.",
          color: "purple"
        },
        {
          title: "Mastery",
          subtitle: "Ri (離) - Optimize and Lead",
          weeks: "Weeks 7-9",
          from: "Fine-tuning is expensive. Training is unstable. I can't deploy efficiently.",
          to: "I implement production-grade training with warmup/cosine decay/gradient clipping, use LoRA for efficient fine-tuning, and deploy instruction-following models.",
          moat: "Production Excellence",
          moatDesc: "Match the training techniques of OpenAI and Google—optimize for speed, stability, and efficiency at scale.",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Step 1: The Architecture of Intelligence",
          from: "What is an LLM and how does it actually work?",
          to: "I can explain transformer architecture, training paradigms, and the GPT design to technical leaders, investors, and engineering teams",
          moat: "Knowledge Moat: Speak the language of frontier AI",
          stage: 1
        },
        {
          title: "Step 2: Text as Data",
          from: "How do models understand and process text?",
          to: "I can tokenize text, create embeddings, encode positions, and prepare production-grade data pipelines for transformer training",
          moat: "Data Engineering Moat: Control the entire pipeline from raw text to training-ready batches",
          stage: 1
        },
        {
          title: "Step 3: The Attention Revolution",
          from: "Attention mechanisms are too complex to understand",
          to: "I can code self-attention, causal attention, and multi-head attention from scratch in PyTorch—the core innovation that powers all modern AI",
          moat: "Architectural Mastery Moat: Attention is the core innovation—master this and you can modify, optimize, and create novel architectures",
          stage: 1
        },
        {
          title: "Step 4: Architecting Language Models",
          from: "I can't build a complete language model from scratch",
          to: "I have coded a full GPT architecture that generates coherent text—every component, every line understood",
          moat: "Implementation Mastery Moat: You've built GPT from scratch—no more black boxes",
          stage: 2
        },
        {
          title: "Step 5: Training at Scale",
          from: "How do you train an LLM on massive datasets?",
          to: "I can pretrain language models from scratch using next-token prediction on large corpora—the $100M training process, demystified",
          moat: "Training Mastery Moat: Pretraining is the most expensive and valuable step—master this to train domain-specific models worth millions",
          stage: 2
        },
        {
          title: "Step 6: Task Specialization",
          from: "How do you adapt LLMs for specific business tasks?",
          to: "I can fine-tune pretrained models for classification tasks with custom heads and supervised learning—turning general models into specialized assets",
          moat: "Specialization Moat: General models are commodities—task-specific fine-tuned models with proprietary data are defensible assets",
          stage: 2
        },
        {
          title: "Step 7: Instruction Intelligence",
          from: "How do you make models follow instructions like ChatGPT?",
          to: "I can fine-tune models on instruction datasets to follow user commands and respond helpfully—the secret behind conversational AI",
          moat: "Instruction-Following Moat: This is what makes ChatGPT valuable—master this to create custom AI assistants for any domain",
          stage: 3
        },
        {
          title: "Step 8: Production Training Excellence",
          from: "My training is slow and unstable",
          to: "I implement production-grade training with warmup, cosine decay, and gradient clipping—techniques used by OpenAI and Google",
          moat: "Training Excellence Moat: These techniques separate hobbyist training from production training—achieve results 10x faster with better stability",
          stage: 3
        },
        {
          title: "Step 9: Efficient Adaptation at Scale",
          from: "Fine-tuning is too expensive with billions of parameters",
          to: "I use LoRA to fine-tune models with 0.1% of parameters and 10x faster training—the modern standard for efficient adaptation",
          moat: "Efficiency Moat: LoRA is how modern AI companies deploy hundreds of fine-tuned models—iterate 10x faster at 1/10th the cost",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help AI engineers and technical leaders build production-ready large language models from scratch, so they can command $250K-$400K salaries and become irreplaceable AI architects without depending on OpenAI's API, paying $5K-$50K/month in usage fees, or being viewed as just another 'prompt engineer' who doesn't understand how models actually work.",
        founders: "I help technical founders and CTOs build proprietary large language models that create defensible competitive moats, so they can save $200K-$500K in API costs annually and own their model weights without being held hostage by OpenAI rate limits, vendor lock-in, or spending $300K-$500K hiring ML engineers who may not deliver."
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 1997,
        description: "Self-Paced Mastery",
        features: [
          "All 9 modules available immediately",
          "Lifetime access to content and updates",
          "Community support and code reviews",
          "Monthly live office hours",
          "Learn on your own schedule"
        ]
      },
      cohort: {
        price: 6997,
        description: "9-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee",
          "Cohort accountability and peer learning",
          "Direct instructor access",
          "Graduation certificate",
          "Alumni network access",
          "Fixed start dates (4 cohorts per year)"
        ]
      },
      bootcamp: {
        price: 12997,
        description: "5-Day Immersive Bootcamp",
        features: [
          "Executive format (Monday-Friday intensive)",
          "8am-6pm daily with hands-on labs",
          "Build complete GPT in one week",
          "Immediate feedback and support",
          "Limited to 15 participants",
          "Ideal for busy founders/CTOs"
        ]
      },
      founders: {
        price: 19997,
        description: "Founder's Edition",
        features: [
          "One-on-one mentorship with Dr. Lee",
          "Custom learning path for your specific needs",
          "Build YOUR proprietary model with guidance",
          "Fractional CTO services (for funded startups)",
          "Architecture consulting and strategic advising",
          "90-day satisfaction guarantee"
        ]
      }
    }
  },
  {
    id: "reasoning",
    slug: "reasoning-models",
    name: "Build Your Own Reasoning Model",
    subtitle: "The Reasoning Sovereignty Stack™ — Stop Renting Reasoning, Start Owning It",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Cutting Edge",
    price: 1997,
    hook: "The ONLY masterclass teaching you to build o1-class reasoning systems from scratch—own your reasoning technology, stop renting from OpenAI.",
    description: "This is not another course on using reasoning APIs. This is executive business education (Harvard/MIT/Stanford caliber) merged with a masterclass for tech founders and AI leaders. Using the DrLee.AI Shu-Ha-Ri learning method, you'll go from reasoning API consumer to reasoning architect in 9 transformative steps. Each module begins with a TedTalk-style presentation, then you immediately build it yourself with hands-on coding. You'll implement process-supervised reward modeling, train reasoning through reinforcement learning, deploy inference-time compute scaling, and build the breakthrough techniques behind o1, o3, and DeepSeek-R1. By the end, you won't just understand how reasoning models work—you'll own production-ready reasoning systems that become your competitive moat. Available in 4 modalities: 9-Week Live Cohort, 5-Day Immersive Bootcamp, Self-Paced Mastery, or Founder's Edition (1:1 mentorship/Fractional CTO).",
    outcomes: [
      "Build complete reasoning system with process-supervised reward modeling from scratch",
      "Implement inference-time compute scaling: best-of-N, beam search, tree search",
      "Train reasoning models using reinforcement learning with process and outcome rewards",
      "Code reward models that score reasoning step quality, not just final answers",
      "Deploy tool-augmented reasoning (calculators, code interpreters, search)",
      "Implement chain-of-thought supervision and verification systems",
      "Distill reasoning from large models into fast, deployable student models",
      "Evaluate reasoning quality on GSM8K, MATH, HumanEval benchmarks",
      "Apply production techniques: KV caching, torch.compile, batched inference",
      "Own reasoning capabilities worth $120K-$600K in API elimination annually"
    ],
    hours: 40,
    modules: 9,
    technologies: ["PyTorch", "Transformers", "Process Reward Models", "GRPO", "PPO", "vLLM", "Weights & Biases"],
    curriculum: [
      {
        title: "Step 1: The Intelligence Behind Reasoning",
        lessons: [
          "What Makes Reasoning Models Different from Base LLMs",
          "The Power of Step-by-Step Thinking in o1 and o3",
          "Process vs. Outcome Supervision: The PSRM Breakthrough",
          "Inference-Time Compute Scaling: Why o1 Takes Time to Think",
          "Real-World Reasoning Applications: Math, Code, Logic, Planning",
          "The Reasoning Model Pipeline: From Base LLM to o1-Class System"
        ]
      },
      {
        title: "Step 2: Text Generation Foundations",
        lessons: [
          "Sampling Strategies for Reasoning: Temperature, Top-p, Top-k",
          "Temperature and Creativity in Reasoning Chains",
          "Nucleus and Top-K Sampling for Quality Control",
          "Chain-of-Thought Data Preparation and Formatting",
          "Best-of-N Sampling: Exploring Solution Space",
          "Generating Diverse Reasoning Chains for Training"
        ]
      },
      {
        title: "Step 3: Measuring Reasoning Quality",
        lessons: [
          "Outcome-Based Evaluation: Automated Grading",
          "Process-Based Evaluation: Scoring Reasoning Steps",
          "Benchmark Implementation: GSM8K, MATH, HumanEval",
          "Failure Mode Analysis: Identifying Reasoning Errors",
          "Pass@K Metrics: Measuring with Multiple Attempts",
          "Building Automated Evaluation Pipelines"
        ]
      },
      {
        title: "Step 4: Scaling Intelligence at Inference Time",
        lessons: [
          "Best-of-N with Rewards: Quality Scaling Through Compute",
          "Beam Search for Reasoning: Maintaining Top-K Paths",
          "Adaptive Inference Budgets: Allocating Compute Wisely",
          "Tree Search for Reasoning: Exploring Branching Paths",
          "Latency-Quality Tradeoffs: Production Optimization",
          "Implementing Efficient Inference Scaling"
        ]
      },
      {
        title: "Step 5: Learning to Reason Through Reinforcement",
        lessons: [
          "Process-Supervised Reward Modeling (PSRM): The Core Breakthrough",
          "Outcome Reward Models: Rewarding Correct Solutions",
          "Collecting Process Annotations: Labeling Reasoning Steps",
          "Policy Gradient Training: REINFORCE and PPO for Reasoning",
          "Reward Model Accuracy: Measuring and Improving Quality",
          "Complete RL Training Loop Implementation"
        ]
      },
      {
        title: "Step 6: Knowledge Compression and Efficiency",
        lessons: [
          "Reasoning Distillation: Transferring from Teacher to Student",
          "Chain-of-Thought Distillation: Compressing Reasoning Patterns",
          "Implicit Reasoning: Internal Processing Without Visible CoT",
          "Outcome Supervision for Efficiency: Simplifying for Speed",
          "Distillation Data Quality: Generating High-Quality Examples",
          "Deploying Fast Reasoning Models"
        ]
      },
      {
        title: "Step 7: Advanced Reasoning Architectures",
        lessons: [
          "Tool-Augmented Reasoning: Calculators, Code, Search Integration",
          "Retrieval-Augmented Reasoning: Grounding in Knowledge Bases",
          "Multi-Step Tool Chains: Agentic Reasoning Systems",
          "Verification and Self-Correction: Automated Error Detection",
          "Ensemble Reasoning: Combining Multiple Strategies",
          "Building Novel Reasoning Architectures"
        ]
      },
      {
        title: "Step 8: Production Integration Techniques",
        lessons: [
          "KV Caching for Reasoning: 2-5x Latency Reduction",
          "PyTorch Compilation: 10-30% Speedup with torch.compile()",
          "Batched Inference: Maximizing GPU Utilization",
          "Reasoning Monitoring: Tracking Quality in Production",
          "Cost Optimization: Reducing Inference Costs at Scale",
          "Building Production Serving Infrastructure"
        ]
      },
      {
        title: "Step 9: Frontier Reasoning Capabilities",
        lessons: [
          "Search-Based Reasoning (o3): Next-Generation Techniques",
          "Recursive Reasoning: Meta-Reasoning Systems",
          "Continuous Improvement: Production Data Feedback Loops",
          "Domain-Specific Reasoning: Specialization Strategies",
          "The Reasoning Frontier: Multi-Modal, Long-Horizon Planning",
          "Staying Current in Rapidly Evolving Field"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "Reasoning AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His teaching philosophy: the best way to understand something is to build it yourself. Specializes in reasoning systems, process-supervised reward modeling, and production deployment."
    },
    faqs: [
      {
        question: "Isn't this too advanced for me?",
        answer: "If you understand transformers and basic RL concepts, you're ready. We build from first principles, starting with reward modeling and working up to full reasoning systems. Every concept is explained and coded step-by-step."
      },
      {
        question: "Can't I just use the o1 API?",
        answer: "You can—if you're okay with $50K/year in reasoning costs, zero differentiation, vendor lock-in, and being viewed as an API consumer instead of a reasoning architect. APIs are for prototypes. Model ownership is for production and moats."
      },
      {
        question: "What hardware do I need?",
        answer: "A laptop with a GPU is sufficient. We use compact base models (7B parameters or smaller) that fit in 8GB VRAM for reasoning training. Cloud GPU options are provided for faster experiments."
      },
      {
        question: "How does this differ from the Large Language Models course?",
        answer: "The LLM course teaches you to build the base model architecture. This course assumes you have a pre-trained model and focuses on adding reasoning capabilities through PSRM training, inference scaling, and distillation—the techniques that make o1 and o3 work."
      },
      {
        question: "Will I build a working reasoning model?",
        answer: "Yes. By the end, you'll have a production-ready reasoning system with process-supervised reward modeling, achieving competitive performance on math and code benchmarks—built entirely from scratch."
      },
      {
        question: "What's the business case for reasoning models?",
        answer: "Reasoning models enable reliable automation of complex knowledge work. For engineers: command $250K-$400K salaries. For founders: eliminate $120K-$600K annual reasoning API costs and create defensible moats through proprietary reasoning."
      },
      {
        question: "Is reasoning too complex to build myself?",
        answer: "DeepSeek-R1 proved reasoning models can be built openly. We teach the exact techniques: process rewards, chain-of-thought supervision, inference scaling. If DeepSeek can do it, so can you with proper guidance."
      },
      {
        question: "Do I need to take the LLM course first?",
        answer: "Not required, but recommended. This course includes a refresher on transformer architecture, but deeper understanding from the LLM course will accelerate your learning of reasoning concepts."
      }
    ],
    signatureSolution: {
      stages: [
        {
          title: "Foundation",
          subtitle: "Understanding Core Reasoning Principles",
          weeks: "Weeks 1-3",
          from: "What makes o1 different? How does reasoning work? Can't explain PSRM or inference scaling.",
          to: "I can explain reasoning architecture, process-supervised reward modeling, and evaluation methods. I understand how o1, o3, and DeepSeek-R1 work internally.",
          moat: "Knowledge Foundation",
          moatDesc: "Speak the language of frontier reasoning AI—communicate with researchers, engineers, and executives about reasoning capabilities. Understand what 99% of 'AI engineers' don't.",
          color: "blue"
        },
        {
          title: "Implementation",
          subtitle: "Building Production Reasoning Systems",
          weeks: "Weeks 4-6",
          from: "Never trained a reasoning model. Don't know how to implement PSRM or RL training. Can't build inference scaling systems.",
          to: "I implemented inference-time scaling, trained process reward models, applied RL for reasoning, and distilled into efficient models. I've built working reasoning systems.",
          moat: "Implementation Mastery",
          moatDesc: "No more black boxes in reasoning—you can code PSRM, inference scaling, and RL training from scratch. Modify and optimize reasoning systems at will.",
          color: "purple"
        },
        {
          title: "Mastery",
          subtitle: "Leading Frontier Reasoning Initiatives",
          weeks: "Weeks 7-9",
          from: "Only know basic reasoning. Can't build tool-augmented systems. Don't know production optimization or frontier techniques.",
          to: "I build tool-augmented reasoning, deploy at production scale, and implement cutting-edge techniques like o3's search. I lead reasoning AI initiatives.",
          moat: "Production Excellence + Frontier Positioning",
          moatDesc: "Deploy reasoning at scale with production infrastructure, implement frontier techniques before they become mainstream, and maintain edge as field evolves.",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Step 1: The Intelligence Behind Reasoning",
          from: "What makes o1 and reasoning models different from standard models?",
          to: "I can explain how reasoning models work, why they outperform base models, and the architectural principles that enable step-by-step thinking",
          moat: "Knowledge Moat: Speak the language of frontier reasoning AI",
          stage: 1
        },
        {
          title: "Step 2: Text Generation Foundations",
          from: "How do I prepare data and generate text for reasoning tasks?",
          to: "I can implement sampling strategies, control generation parameters, and prepare datasets for reasoning model training",
          moat: "Data Engineering Moat: Control the generation pipeline for reasoning data",
          stage: 1
        },
        {
          title: "Step 3: Measuring Reasoning Quality",
          from: "How do you evaluate if a reasoning model is working?",
          to: "I can implement judgment-based and benchmark-based evaluation, measure reasoning quality, and identify failure modes",
          moat: "Quality Assurance Moat: Objectively measure reasoning performance",
          stage: 1
        },
        {
          title: "Step 4: Scaling Intelligence at Inference Time",
          from: "How does o1 use 'thinking time' to get better answers?",
          to: "I can implement inference-time compute scaling with search algorithms, beam search, and best-of-N sampling",
          moat: "Inference Mastery Moat: Control the intelligence-compute tradeoff",
          stage: 2
        },
        {
          title: "Step 5: Learning to Reason Through Reinforcement",
          from: "How do you train models to reason step-by-step?",
          to: "I can implement process-supervised reward models, outcome rewards, and RL training pipelines for reasoning",
          moat: "Training Mastery Moat: Train reasoning from scratch—the most valuable skill",
          stage: 2
        },
        {
          title: "Step 6: Knowledge Compression and Efficiency",
          from: "Can I distill reasoning from o1 into faster models?",
          to: "I can implement distillation to transfer reasoning capabilities from large models to smaller, faster ones",
          moat: "Efficiency Moat: Compress reasoning into fast, deployable models",
          stage: 2
        },
        {
          title: "Step 7: Advanced Reasoning Architectures",
          from: "How can I improve reasoning beyond standard techniques?",
          to: "I can implement tool integration, retrieval-augmented reasoning, and multi-model reasoning systems",
          moat: "Architectural Innovation Moat: Design novel reasoning systems",
          stage: 3
        },
        {
          title: "Step 8: Production Integration Techniques",
          from: "How do I deploy reasoning models in production?",
          to: "I can implement efficient serving, caching, batching, and monitoring for production reasoning systems",
          moat: "Production Excellence Moat: Deploy reasoning at scale",
          stage: 3
        },
        {
          title: "Step 9: Frontier Reasoning Capabilities",
          from: "What's next in reasoning AI?",
          to: "I understand cutting-edge techniques like o3-style search, recursive reasoning, and continuous improvement",
          moat: "Frontier Position Moat: Stay at cutting edge of reasoning AI",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help AI engineers and technical leaders build production-ready reasoning models from scratch—the breakthrough behind o1, o3, and DeepSeek—so they can command $250K-$400K salaries and architect next-generation AI systems without being limited to API wrappers, stuck explaining 'prompt engineering' skills, or missing the reasoning revolution that's creating the next wave of $300K+ AI architect roles.",
        founders: "I help technical founders and CTOs build proprietary reasoning models that create defensible competitive moats—like o1 but owned and customized—so they can eliminate $100K-$500K in annual API costs and own reasoning capabilities without being held hostage by OpenAI rate limits, building 'thin wrapper' businesses that VCs won't fund, or spending $300K-$500K hiring ML engineers who may not understand reasoning systems."
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 1997,
        description: "Learn on your own schedule with lifetime access",
        features: [
          "All 9 modules (40+ hours)",
          "Complete PyTorch code repositories",
          "Reasoning datasets (math, code, logic)",
          "Private community access",
          "Code review from TAs (48-hour turnaround)",
          "Monthly group office hours",
          "Lifetime access to updates"
        ]
      },
      cohort: {
        price: 6997,
        description: "12-week intensive with live workshops and accountability",
        features: [
          "Everything in Self-Paced PLUS:",
          "Live weekly workshops (2 hours)",
          "Real-time code reviews and feedback",
          "Direct instructor access (office hours 2x/week)",
          "1-on-1 kickoff and graduation calls",
          "Cohort accountability partners",
          "Priority support and 24-hour code review",
          "Alumni network access"
        ]
      },
      bootcamp: {
        price: 9997,
        description: "5-day immersive executive format",
        features: [
          "Monday-Friday intensive (8am-6pm)",
          "Build complete reasoning system in one week",
          "Hands-on labs with immediate feedback",
          "Limited to 15 participants",
          "All course materials included",
          "Lifetime access to recordings",
          "Post-bootcamp support (30 days)"
        ]
      },
      founders: {
        price: 19997,
        description: "1:1 mentorship and custom implementation guidance",
        features: [
          "Everything in Cohort PLUS:",
          "6 months of 1-on-1 coaching (60 min/month)",
          "Direct Slack/WhatsApp instructor access",
          "Same-day code review turnaround",
          "Architecture review for your use case",
          "Done-with-you: Build YOUR reasoning model",
          "Career/investor pitch coaching",
          "Exclusive alumni group and network"
        ]
      }
    }
  },
  {
    id: "frontier-arch",
    slug: "frontier-model-architecture",
    name: "Build Your Own Frontier AI",
    subtitle: "Master Mixture-of-Experts, Advanced Attention, 64x Efficiency—Own Production-Grade AI",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Extremely Rare",
    price: 1997,
    hook: "The ONLY masterclass teaching you to build production-grade frontier AI systems from scratch—cut API costs 90%, own your stack, stop renting from OpenAI.",
    description: "This is THE FIRST and ONLY course where you build a complete production-grade frontier AI system end-to-end. Not toy examples. Not API tutorials. A real system matching modern ChatGPT/Claude/Gemini quality that serves millions of requests. This is executive business education (Harvard/MIT/Stanford caliber) merged with a tech founder masterclass. Using the DrLee.AI Shu-Ha-Ri learning method, each module follows: TedTalk → Build → Transcend. You'll master the techniques powering ALL frontier models: Mixture-of-Experts (sparse activation), Multi-Head Latent Attention (64x KV cache compression), FP8 quantization (2x speedup), Multi-Token Prediction, DualPipe parallelization, and production serving optimization. By the end, you won't just understand frontier AI—you'll have deployed a complete system serving millions of requests at 90% lower cost than APIs. Available in 4 modalities: 9-Week Live Cohort ($6,997), 5-Day Bootcamp ($9,997), Self-Paced ($1,997), or Founder's Edition with 1:1 coaching + Fractional CTO support ($19,997).",
    outcomes: [
      "Implement Group-Query Attention (GQA) reducing KV cache 8x vs. standard attention",
      "Build Multi-Head Latent Attention (MLA) achieving 64x KV cache compression (DeepSeek technique)",
      "Master Mixture-of-Experts (MoE) with 8+ experts and sparse routing (powers modern ChatGPT/Claude/Gemini/Mixtral/DeepSeek)",
      "Implement Multi-Token Prediction for richer training signals and better representations",
      "Deploy FP8 quantization achieving 2x training speedup on H100/H200 GPUs",
      "Build distributed training pipelines with DualPipe parallelization (90%+ GPU utilization)",
      "Implement post-training alignment: Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO)",
      "Master knowledge distillation compressing models 8-10x with <5% quality loss",
      "Deploy production serving handling millions of requests with <100ms P95 latency",
      "Reduce AI infrastructure costs 90% vs. API rental (from $500K/month → $50K/month)"
    ],
    hours: 55,
    modules: 10,
    technologies: ["PyTorch", "Transformers", "FlashAttention", "FSDP", "bitsandbytes", "Weights & Biases", "vLLM"],
    curriculum: [
      {
        title: "Module 1: The Strategic Landscape of Frontier AI",
        lessons: [
          "Executive Overview: What Makes a Model 'Frontier-Class'",
          "The Innovation Gap: From GPT-2 to Modern Frontier Models",
          "Architecture, Efficiency, and Scale: The Three Pillars",
          "Build vs. Buy: When Custom Architecture Creates Competitive Advantage",
          "What You Will Build: A Laptop-Scale Frontier Model"
        ]
      },
      {
        title: "Module 2: The Inference Bottleneck",
        lessons: [
          "The Autoregressive Loop: How LLMs Generate Text Token by Token",
          "From Embeddings to Logits: A Visual Walkthrough",
          "The Key Insight: Why Only the Last Row of Attention Matters",
          "Identifying Redundant Computations: The Cost of Naive Inference",
          "Hands-On: Visualizing and Measuring Inference Performance"
        ]
      },
      {
        title: "Module 3: The Key-Value Cache—Memory vs. Speed",
        lessons: [
          "What to Cache: Understanding KV Storage",
          "Implementing Caching in Code: The New Inference Loop",
          "Demonstrating 10x Speedups with Proper KV Management",
          "The Dark Side: When Cache Memory Becomes the Bottleneck",
          "Understanding Cache Size Requirements for Production Scale"
        ]
      },
      {
        title: "Module 4: Attention Variants—From Multi-Head to Grouped-Query",
        lessons: [
          "Multi-Head Self-Attention: The Foundation",
          "Multi-Query Attention (MQA): Sharing Keys and Values",
          "The Performance Trade-off: Memory Savings vs. Expressivity",
          "Grouped-Query Attention (GQA): The Production Sweet Spot",
          "Implementing MQA and GQA Layers in Code",
          "Empirical Comparison: Choosing the Right Variant"
        ]
      },
      {
        title: "Module 5: Latent Attention—The Breakthrough Innovation",
        lessons: [
          "The Best of Both Worlds: How Latent Compression Works",
          "The Architecture: Query and Key/Value Paths Visualized",
          "How Latent Attention Scores Are Computed",
          "Building a Complete Latent Attention Module",
          "Achieving 64x Cache Reduction While Preserving Quality",
          "Strategic Implications: What This Means for Deployment Costs"
        ]
      },
      {
        title: "Module 6: Positional Encoding—Teaching Order to Transformers",
        lessons: [
          "The Problem of Order: Why Position Information Matters",
          "From Sinusoidal to Rotary: The Evolution of Position Encoding",
          "Rotary Position Embeddings (RoPE): How and Why They Work",
          "The Compatibility Challenge: Combining RoPE with Advanced Attention",
          "Implementing Decoupled Rotary Embeddings"
        ]
      },
      {
        title: "Module 7: Mixture-of-Experts—Scaling Intelligence Efficiently",
        lessons: [
          "The Intuition: Why Sparse Networks Win",
          "Expert Specialization: Conditional Computation Explained",
          "The Routing Mechanism: From Input to Expert Selection",
          "Top-K Selection: Controlling Sparsity and Load Balance",
          "The Balance Problem: Keeping All Experts Useful",
          "Advanced Innovations: Fine-Grained Segmentation and Shared Experts",
          "Building a Complete MoE Layer"
        ]
      },
      {
        title: "Module 8: Production Training Pipelines",
        lessons: [
          "Multi-Token Prediction: Training Models to See Ahead",
          "Efficient Quantization: FP8 and Beyond",
          "Dataset Curation: What Training Data Actually Matters",
          "Distributed Training: Data, Model, and Pipeline Parallelism",
          "Monitoring Training: Loss Curves and Early Warning Signs",
          "Cost Optimization: Maximizing Value per Compute Dollar"
        ]
      },
      {
        title: "Module 9: Post-Training—From Base Model to Assistant",
        lessons: [
          "Why Post-Training Matters: The Gap Between Pretraining and Usefulness",
          "Supervised Fine-Tuning (SFT): Curating Instruction Data",
          "Reinforcement Learning from Human Feedback (RLHF): The Reward Pipeline",
          "Direct Preference Optimization (DPO): A Simpler Alternative",
          "Multi-Stage Post-Training Strategies",
          "Evaluation: Measuring What Matters"
        ]
      },
      {
        title: "Module 10: Distillation and Deployment",
        lessons: [
          "Knowledge Distillation: Transferring Capabilities to Smaller Models",
          "Teacher-Student Architectures That Work",
          "Quantization for Deployment: INT8, INT4, and Trade-offs",
          "Inference Optimization: Batching, Speculation, and Compression",
          "Serving at Scale: Production Architecture Patterns",
          "Capstone: Your Frontier Model in Production"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His approach: intuitive explanations first, then implementation, always with strategic context."
    },
    faqs: [
      {
        question: "How is this different from the Large Language Models course?",
        answer: "The LLM course teaches you to build a GPT-style model from scratch—the foundation. This course teaches the innovations that make frontier models efficient and powerful: latent attention, mixture-of-experts, advanced training pipelines. Take LLM first, then this course to level up."
      },
      {
        question: "Do I need advanced math background?",
        answer: "No. We focus on intuitive explanations and clear visualizations—understanding why things work, not deriving equations. If you can read Python code, you can follow along."
      },
      {
        question: "What hardware do I need?",
        answer: "A modern laptop for development. We provide cloud compute credits for training exercises. The techniques scale from laptop to data center—you'll understand both ends."
      },
      {
        question: "Will I build something that actually works?",
        answer: "Yes. You'll build a laptop-scale model using the same architectural innovations as ChatGPT and Claude. Small enough to run locally, sophisticated enough to demonstrate real capability gains."
      },
      {
        question: "What's the business value?",
        answer: "Massive cost reduction (90% vs. APIs), faster time to market, and complete control over your AI stack. Engineers command $250K-$400K salaries with this expertise. Founders reduce costs from $500K/month to $50K/month while raising at premium valuations."
      },
      {
        question: "How is this different from the LLM and Reasoning courses?",
        answer: "LLM course teaches basic transformers. Reasoning course teaches chain-of-thought and PSRM. THIS course teaches production-grade efficiency and scale: MoE, MLA, FP8, serving millions of requests. This is THE FIRST course where you build a complete end-to-end production system."
      },
      {
        question: "Will this work with my existing infrastructure?",
        answer: "Yes. Techniques are framework-agnostic (we use PyTorch for teaching). You'll learn principles that apply to any infrastructure: cloud, on-premise, or hybrid. We cover deployment strategies for all scales."
      },
      {
        question: "What if I get stuck?",
        answer: "Live Cohort includes weekly office hours and Slack access. Founder's Edition includes 1:1 coaching. Self-paced includes community access and monthly Q&A sessions. You're never alone."
      }
    ],
    signatureSolution: {
      stages: [
        {
          title: "Foundation",
          subtitle: "Memory & Efficiency Fundamentals",
          weeks: "Weeks 1-3",
          from: "Using standard attention with massive memory waste and slow inference",
          to: "Implementing GQA (8x compression), MLA (64x compression), and MoE (8x capacity) architectures",
          moat: "Memory & Architecture Advantage",
          moatDesc: "Build models with 64x better memory efficiency and 8x more capacity than competitors",
          color: "blue"
        },
        {
          title: "Implementation",
          subtitle: "Advanced Training & Optimization",
          weeks: "Weeks 4-6",
          from: "Training slowly in FP32 on single GPUs with basic next-token prediction",
          to: "Deploying FP8 training (2x speedup), DualPipe parallelization (90% utilization), and MTP for better representations",
          moat: "Training Efficiency Moat",
          moatDesc: "Train models 2-3x faster than competitors while achieving better quality",
          color: "purple"
        },
        {
          title: "Mastery",
          subtitle: "Production Deployment at Scale",
          weeks: "Weeks 7-9",
          from: "Models that work in development but can't serve production traffic",
          to: "Deployed systems serving millions of requests with SFT/DPO alignment, distillation, and optimized serving",
          moat: "Production Scale Moat",
          moatDesc: "Serve millions of requests economically—capabilities API-dependent competitors can't match",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Memory & Attention Optimization",
          from: "Wasting 90% of memory on KV cache with standard Multi-Head Attention",
          to: "Implemented GQA reducing KV cache 8x, serving 8x larger batches with same memory",
          moat: "8x better memory efficiency enables 8x more throughput per GPU",
          stage: 0
        },
        {
          title: "Multi-Head Latent Attention (MLA)",
          from: "Still hitting memory limits even with GQA on long contexts (100K+ tokens)",
          to: "Deployed MLA achieving 64x KV cache compression vs. standard attention",
          moat: "Serve 256K-1M token contexts economically—impossible for API-dependent competitors",
          stage: 0
        },
        {
          title: "Mixture-of-Experts (MoE)",
          from: "Dense models where every parameter activates—can't scale without cost explosion",
          to: "Built MoE with 8 experts and sparse routing—8x capacity at same compute cost",
          moat: "Match frontier model quality with 1/8th the active parameters per token",
          stage: 0
        },
        {
          title: "Multi-Token Prediction (MTP)",
          from: "Training with single next-token prediction missing richer gradient signals",
          to: "Implemented 4-token ahead prediction improving quality with same training data",
          moat: "20-30% better sample efficiency—achieve same quality with less data",
          stage: 1
        },
        {
          title: "FP8 Quantization & Training",
          from: "Training in FP16/FP32 leaving 50% of GPU performance unused",
          to: "Deployed FP8 training achieving 2x speedup on H100 GPUs without quality loss",
          moat: "2x faster training than competitors = half the cost or 2x iteration speed",
          stage: 1
        },
        {
          title: "Training Pipeline & Parallelization",
          from: "Training on single GPUs hitting memory limits on large models",
          to: "Built DualPipe distributed training with 90%+ GPU utilization across multi-node clusters",
          moat: "Train billion-parameter models efficiently—scale impossible for small teams without this expertise",
          stage: 1
        },
        {
          title: "Post-Training & Alignment",
          from: "Base models with poor instruction-following and unsafe outputs",
          to: "Deployed SFT and DPO alignment creating production-ready assistants",
          moat: "Domain-specialized models outperforming generic ChatGPT for specific use cases",
          stage: 2
        },
        {
          title: "Knowledge Distillation",
          from: "Large models too expensive to serve at scale ($0.10 per request)",
          to: "Distilled to 8x smaller models maintaining 95%+ quality ($0.01 per request)",
          moat: "10x better economics—serve premium quality at commodity pricing",
          stage: 2
        },
        {
          title: "Production Deployment & Serving",
          from: "Models that work in notebook but fail in production (high latency, low throughput)",
          to: "Deployed complete serving infrastructure: millions of requests, <100ms latency, 99.9%+ uptime",
          moat: "End-to-end production expertise—ship real products, not just prototypes",
          stage: 2
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help senior ML engineers build production-grade frontier AI systems with MoE, MLA, and 64x efficiency optimizations, so they can architect models serving millions of users and command $250K-$400K salaries without being commoditized as API integrators.",
        founders: "I help technical founders and CTOs build owned frontier AI infrastructure with 90% cost reduction, so they can raise at premium valuations and reach profitability without burning $500K/month on API rentals."
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 1997,
        description: "Learn at your own pace with lifetime access",
        features: [
          "50+ hours of video instruction",
          "9 hands-on coding projects (complete implementations)",
          "Complete code repositories with solutions",
          "Private Slack community",
          "Monthly live Q&A sessions (1 year)",
          "Lifetime access to all updates",
          "Certificate of completion"
        ]
      },
      cohort: {
        price: 6997,
        description: "9-week live cohort with instructor + peers (Limited to 50 students)",
        features: [
          "Everything in Self-Paced (lifetime access)",
          "27 hours of live instruction (9 weeks × 3 hours)",
          "Weekly assignments with instructor feedback",
          "Live coding sessions with instructor",
          "Peer collaboration and project showcase",
          "Private cohort Slack channel",
          "3 months of office hours after cohort",
          "Direct instructor access",
          "Certificate with cohort distinction",
          "Career support (resume review, interview prep)"
        ]
      },
      bootcamp: {
        price: 9997,
        description: "5-day intensive (8 hours/day, in-person or virtual, max 20 students)",
        features: [
          "Everything in Self-Paced (lifetime access)",
          "40 hours of intensive hands-on instruction",
          "All 9 modules compressed into 5 days",
          "Small group size (max 20 students)",
          "Dedicated lab time with instructor",
          "Meals included (if in-person)",
          "1 month post-bootcamp office hours",
          "Certificate of completion",
          "LinkedIn badge and endorsement"
        ]
      },
      founders: {
        price: 19997,
        description: "Live cohort + 1:1 coaching + Fractional CTO support (Limited to 10 students)",
        features: [
          "Everything in Live Cohort",
          "6 hours of private 1:1 coaching (12 weeks)",
          "Fractional CTO advisory and implementation support",
          "Weekly code reviews on YOUR production system",
          "Architecture review and optimization",
          "Direct Slack/email access (6 months)",
          "Guest expert sessions (Mixtral, DeepSeek teams)",
          "Priority access to new techniques",
          "Lifetime access to all future updates",
          "Annual Frontier AI Summit invitation",
          "Private mastermind (Founder's Edition alumni)"
        ]
      }
    }
  },
  {
    id: "diffusion",
    slug: "diffusion-models",
    name: "Build Your Own Image Generator",
    subtitle: "Train Vision Models from Scratch—Stop Renting, Start Owning",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Extremely Rare",
    price: 2997,
    hook: "Create images from words. Own the visual AI your competitors rent.",
    description: "This masterclass takes you inside the powerful models behind DALL-E and Stable Diffusion. You'll explore two distinct approaches to image generation—vision transformers and diffusion models—building each from scratch. Learn how transformers turn images into sequences of patches, and how diffusion models refine noise into coherent images. By the end, you'll have built models that classify images, add captions automatically, and generate high-resolution content from text prompts. You'll understand not just how to use these tools, but how they work—because you built them yourself.",
    outcomes: [
      "Build and train models to generate high-resolution images from text descriptions",
      "Implement vision transformers (ViT) to classify images",
      "Create a transformer that automatically adds captions to images",
      "Understand and implement the forward and reverse diffusion processes",
      "Build the U-Net denoising architecture with attention mechanisms",
      "Implement CLIP to measure similarity between images and text",
      "Create a latent diffusion model for efficient high-resolution generation",
      "Modify existing images based on text prompts",
      "Better differentiate real images from AI-generated deepfakes"
    ],
    hours: 50,
    modules: 11,
    technologies: ["PyTorch", "Vision Transformers", "CLIP", "VQGAN", "Stable Diffusion", "DistilBERT", "Diffusers"],
    curriculum: [
      {
        title: "Module 1: A Tale of Two Models",
        lessons: [
          "Executive Overview: The Business of Visual AI Generation",
          "Unimodal vs. Multimodal Models: Understanding the Landscape",
          "Practical Use Cases: Where Text-to-Image Creates Value",
          "Transformer-Based vs. Diffusion-Based Generation: Two Paths",
          "Challenges: The Pink Elephant Problem and Geometric Inconsistency",
          "Social, Environmental, and Ethical Considerations"
        ]
      },
      {
        title: "Module 2: Build a Transformer",
        lessons: [
          "How the Attention Mechanism Works: A Visual Walkthrough",
          "Word Embedding and Positional Encoding",
          "Creating an Encoder-Decoder Transformer",
          "Coding the Attention Mechanism Step by Step",
          "Building a Language Translator: End-to-End Example",
          "Training and Using Your Translator"
        ]
      },
      {
        title: "Module 3: Classify Images with Vision Transformers",
        lessons: [
          "How to Convert Images to Sequences of Patches",
          "The CIFAR-10 Dataset: Download and Visualization",
          "Dividing Images into Patches",
          "Modeling Patch Positions in an Image",
          "Multi-Head Self-Attention for Vision",
          "Building and Training a Complete Vision Transformer Classifier"
        ]
      },
      {
        title: "Module 4: Add Captions to Images",
        lessons: [
          "How to Train a Transformer for Image Captioning",
          "The Flickr 8k Dataset: Images and Captions",
          "Building a Vocabulary of Tokens",
          "Creating a Vision Transformer as the Image Encoder",
          "The Decoder to Generate Text",
          "Training and Using Your Image Captioning Model"
        ]
      },
      {
        title: "Module 5: Generate Images with Diffusion Models",
        lessons: [
          "How Diffusion Models Work: Forward and Reverse Processes",
          "Visualizing the Forward Diffusion Process",
          "Different Diffusion Schedules and Their Effects",
          "The Reverse Diffusion Process: Denoising",
          "Training a Denoising U-Net Model",
          "The DDPM Noise Scheduler",
          "Inference: Generating New Images"
        ]
      },
      {
        title: "Module 6: Control What Images to Generate",
        lessons: [
          "Classifier-Free Guidance in Diffusion Models",
          "Time Step Embedding and Label Embedding",
          "The U-Net Architecture: Down Blocks and Up Blocks",
          "Building the Complete Denoising U-Net",
          "Training with Classifier-Free Guidance",
          "How the Guidance Parameter Affects Generated Images"
        ]
      },
      {
        title: "Module 7: High-Resolution Image Generation",
        lessons: [
          "Incorporating Attention in the U-Net",
          "Denoising Diffusion Implicit Models (DDIM): Faster Sampling",
          "Image Interpolation in Diffusion Models",
          "Building a U-Net for High-Resolution Images",
          "Training on High-Resolution Data",
          "Transitioning Smoothly Between Images"
        ]
      },
      {
        title: "Module 8: CLIP—Connecting Images and Text",
        lessons: [
          "How the CLIP Model Works",
          "Preparing Image-Caption Pairs for Training",
          "Creating Text and Image Encoders",
          "Building a Complete CLIP Model",
          "Training Your CLIP Model",
          "Using CLIP to Select Images Based on Text Descriptions"
        ]
      },
      {
        title: "Module 9: Latent Diffusion Models",
        lessons: [
          "How Variational Autoencoders (VAEs) Work",
          "Combining Latent Diffusion with VAE",
          "Compressing and Reconstructing Images",
          "Text-to-Image Generation in Latent Space",
          "Guidance by CLIP: Steering Generation with Text",
          "Modifying Existing Images with Text Prompts"
        ]
      },
      {
        title: "Module 10: A Deep Dive into Stable Diffusion",
        lessons: [
          "The Complete Stable Diffusion Architecture",
          "How Text Becomes Images: The Full Pipeline",
          "Text Embedding Interpolation",
          "Creating Text Embeddings with CLIP",
          "Image Generation in Latent Space",
          "Converting Latent Images to High-Resolution Output"
        ]
      },
      {
        title: "Module 11: Transformer-Based Generation and Deepfake Detection",
        lessons: [
          "VQGAN: Converting Images to Sequences of Integers",
          "VQ-VAEs: Why We Need Discrete Representations",
          "A Minimal DALL-E Implementation",
          "From Text Prompt to Image Tokens",
          "Fine-Tuning ResNet-50 to Detect Fake Images",
          "Capstone: Your Complete Text-to-Image System"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His approach: build it yourself to truly understand it."
    },
    faqs: [
      {
        question: "What technical background do I need?",
        answer: "Intermediate Python skills and some knowledge of machine learning. We explain concepts visually and build everything step by step—no advanced math background required."
      },
      {
        question: "What hardware do I need?",
        answer: "A modern laptop for development. GPU acceleration (local or cloud) is recommended for training but not required for understanding. We provide cloud compute options."
      },
      {
        question: "Will I build something that actually generates images?",
        answer: "Yes. You'll build multiple working models: a vision transformer classifier, an image captioning model, and a complete text-to-image diffusion model. All running on your own machine."
      },
      {
        question: "How is this different from using Stable Diffusion APIs?",
        answer: "APIs are black boxes. By building from scratch, you'll understand every component—enabling customization, fine-tuning for your domain, and the ability to build proprietary visual AI systems."
      },
      {
        question: "Does this cover detecting AI-generated images?",
        answer: "Yes. The final module includes fine-tuning models to detect deepfakes—increasingly important as visual AI becomes more prevalent."
      }
    ]
  },
  {
    id: "agentic",
    slug: "agentic-systems",
    name: "Build Your Own Autonomous AI Agent",
    subtitle: "The Agent Architecture Blueprint™ — From Framework Dependency to Autonomous Systems Mastery",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Very Rare",
    price: 1997,
    hook: "The ONLY masterclass teaching autonomous agent architecture from scratch—build the ReAct loops, tool orchestrators, memory systems, and multi-agent coordination that frameworks hide from you.",
    description: "LLMs can answer questions, but agents can complete tasks. This masterclass teaches you to build the infrastructure that transforms a language model into an autonomous system capable of using tools, maintaining memory, and executing multi-step workflows. You won't rely on frameworks—you'll build the foundations yourself: the processing loop, tool orchestration, memory modules, and human-in-the-loop patterns. By the end, you'll have a complete, working agent system and the deep understanding to extend it for research, business automation, or production deployment.",
    outcomes: [
      "Build autonomous agent systems from first principles (no framework dependency like LangChain/AutoGPT)",
      "Implement ReAct loops (Thought → Action → Observation) with full transparency and control",
      "Design MCP-compliant tool orchestration infrastructure that scales to dozens of tools",
      "Create agentic RAG systems with specialized knowledge bases for domain expertise",
      "Build memory systems (episodic, semantic, procedural) enabling agent learning and personalization",
      "Implement planning and reflection capabilities for multi-step strategic execution",
      "Deploy code-generating agents that extend their own capabilities",
      "Build multi-agent coordination with A2A (Agent-to-Agent) communication protocols",
      "Achieve 95%+ agent reliability with production-grade monitoring and evaluation",
      "Deploy on-premise for enterprise compliance (SOC2, HIPAA, GDPR-ready)"
    ],
    hours: 40,
    modules: 10,
    technologies: ["Python", "Ollama", "OpenAI API", "Claude API", "Pydantic", "asyncio", "MCP"],
    curriculum: [
      {
        title: "Module 1: What Are LLM Agents?",
        lessons: [
          "Executive Overview: Why Agents Create Business Value Beyond Chatbots",
          "Defining LLM Agents: From Pattern Matching to Autonomous Action",
          "Use Cases: Report Generation, Web Search, Coding Agents, Computer Use",
          "Prerequisite LLM Capabilities: Tool Use, Reasoning, and Instruction Following",
          "The Processing Loop: How Agents Think, Decide, and Act",
          "Build vs. Buy: When Custom Agents Create Competitive Advantage"
        ]
      },
      {
        title: "Module 2: Working with Tools",
        lessons: [
          "The Tool Abstraction: Why Agents Need a Consistent Interface",
          "Implementing ToolCall and ToolCallResult Data Structures",
          "Building BaseTool: A Blueprint for All Agent Tools",
          "SimpleFunctionTool: Wrapping Python Functions as Tools",
          "PydanticFunctionTool: Type-Safe Tool Inputs with Validation",
          "Async Tool Patterns: Non-Blocking Tool Execution",
          "Hands-On: Building Your First Working Tool"
        ]
      },
      {
        title: "Module 3: Working with LLMs",
        lessons: [
          "The LLM Abstraction: Why Provider Independence Matters",
          "Implementing ChatMessage and ChatRole Structures",
          "Building BaseLLM: A Blueprint for LLM Interfaces",
          "OllamaLLM: Connecting to Local Models",
          "OpenAI and Claude Adapters: Cloud Provider Integration",
          "Tool Calling with LLMs: The Complete Flow",
          "Hands-On: Hailstone Tool Call with Your LLM Interface"
        ]
      },
      {
        title: "Module 4: The LLM Agent Class",
        lessons: [
          "Agent Architecture: Bringing Tools and LLMs Together",
          "The Agent Loop: Observe, Think, Act, Repeat",
          "Managing Conversation History and Context Windows",
          "Tool Selection: How Agents Choose Which Tool to Use",
          "Error Handling: What Happens When Tools Fail",
          "Building the Complete Agent Class from Scratch"
        ]
      },
      {
        title: "Module 5: Capstone—Your First Working Agent",
        lessons: [
          "Designing a Research Agent: Requirements and Architecture",
          "Implementing Web Search and Content Extraction Tools",
          "The Agent in Action: Step-by-Step Execution Walkthrough",
          "Debugging Agent Behavior: Understanding Decision Points",
          "Extending Your Agent: Adding New Capabilities",
          "Performance Analysis: What Works and What Doesn't"
        ]
      },
      {
        title: "Module 6: Making Agents MCP Compatible",
        lessons: [
          "The Model Context Protocol: Why Standards Matter",
          "MCP Architecture: Servers, Clients, and Tool Discovery",
          "Connecting Your Agent to the MCP Ecosystem",
          "Implementing MCP-Compatible Tool Interfaces",
          "Resource Management: Files, Databases, and APIs",
          "Testing MCP Compatibility"
        ]
      },
      {
        title: "Module 7: Capstone—Deep Research with MCP",
        lessons: [
          "Building a Deep Research Agent: Multi-Source Information Gathering",
          "Integrating Multiple MCP Servers",
          "Orchestrating Complex Research Workflows",
          "Synthesizing Information Across Sources",
          "Generating Structured Research Reports",
          "Evaluation: Measuring Research Quality"
        ]
      },
      {
        title: "Module 8: Human-in-the-Loop Patterns",
        lessons: [
          "When Agents Need Human Oversight: High-Stakes Decisions",
          "Approval Patterns: Pause, Review, and Continue",
          "Confirmation Interfaces: Designing for Human Review",
          "Escalation Logic: When to Ask vs. When to Act",
          "Audit Trails: Recording Agent Decisions for Review",
          "Implementing Human-in-the-Loop in Your Agent"
        ]
      },
      {
        title: "Module 9: Memory Modules",
        lessons: [
          "Why Agents Need Memory: State Across Tasks and Sessions",
          "Short-Term Memory: Conversation Context and Working Memory",
          "Long-Term Memory: Persistent Knowledge and Learning",
          "Memory Architectures: Vector Stores, Key-Value, and Hybrid",
          "Implementing Memory Modules for Your Agent",
          "Sharing State Across Tasks: Session Management"
        ]
      },
      {
        title: "Module 10: Production Deployment and Evaluation",
        lessons: [
          "Evaluating Agent Performance: Task Completion Metrics",
          "Benchmarking on Real-World Tasks",
          "Cost Analysis: LLM Calls, Tool Execution, and Optimization",
          "Monitoring Agent Behavior in Production",
          "Scaling Agent Workloads",
          "Capstone: Your Complete Production-Ready Agent"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His approach: build the infrastructure yourself to truly understand how agents work."
    },
    faqs: [
      {
        question: "Do I need to use LangChain or other frameworks?",
        answer: "No. You'll build everything from scratch—the processing loop, tool abstractions, LLM interfaces, and memory modules. This gives you deeper understanding and complete control over your agent architecture."
      },
      {
        question: "What hardware do I need?",
        answer: "Everything runs on a standard laptop. We use Ollama for local models and provide cloud API integration for OpenAI and Claude. No specialized hardware required."
      },
      {
        question: "How is this different from prompt engineering?",
        answer: "Prompt engineering optimizes what you ask the LLM. Agent engineering builds the infrastructure around the LLM—tool calling, memory, loops, and orchestration—that enables autonomous task execution."
      },
      {
        question: "Will I build something that actually works?",
        answer: "Yes. You'll build a complete research agent that can search the web, extract content, synthesize information, and generate reports—all running on your own machine."
      },
      {
        question: "What's the business case for building custom agents?",
        answer: "Custom agents automate complex workflows that chatbots can't handle. They reduce manual work, operate 24/7, and can be tailored exactly to your business processes—creating defensible competitive advantage."
      },
      {
        question: "Do I need to take other courses first?",
        answer: "Python proficiency and basic LLM familiarity are required. The LLM course is helpful but not required—we include enough context to get started."
      }
    ],
    signatureSolution: {
      stages: [
        {
          title: "PHASE 1: Foundation",
          subtitle: "Specialization & Architecture Mastery",
          weeks: "Weeks 1-3",
          from: "Using pre-built frameworks as black boxes, no understanding of agent internals, framework-dependent implementations",
          to: "Architecting custom agent systems from first principles, understanding every component, owning the infrastructure",
          moat: "Agent Architecture Expertise",
          moatDesc: "Ability to design and build autonomous systems without framework dependency—understanding ReAct loops, tool orchestration, and memory systems at the architectural level",
          color: "blue"
        },
        {
          title: "PHASE 2: Advanced Capabilities",
          subtitle: "Knowledge, Memory & Planning Systems",
          weeks: "Weeks 4-6",
          from: "Stateless agents with no learning, generic knowledge, single-shot execution",
          to: "Agents with specialized knowledge, persistent memory, multi-step planning capabilities",
          moat: "Advanced Agent Capabilities",
          moatDesc: "Building agents that learn from experience, leverage domain-specific knowledge, and plan complex multi-step executions",
          color: "purple"
        },
        {
          title: "PHASE 3: Multi-Agent & Production",
          subtitle: "Coordination, Code Generation & Scale",
          weeks: "Weeks 7-9",
          from: "Single-agent systems, manual code updates, local deployments only",
          to: "Multi-agent coordination, self-improving code agents, production-scale deployments",
          moat: "Production Agent Systems",
          moatDesc: "Enterprise-ready multi-agent architectures with self-improvement capabilities and production deployment expertise",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Module 1: Agent Fundamentals & LLM Architecture",
          from: "Confusion about what 'AI agent' means, treating agents as chatbots, no framework for agent thinking",
          to: "Clear agent architecture understanding, knowing when agents add value over LLMs, designing agent systems strategically, understanding LLM role as agent 'brain'",
          moat: "Strategic agent architecture knowledge—ability to distinguish when autonomous systems are needed vs simple LLM calls",
          stage: 1
        },
        {
          title: "Module 2: Tool Integration & Orchestration",
          from: "Agents that only output text, no ability to take actions, manual execution of agent suggestions, fragmented tool integrations",
          to: "Agents that use tools autonomously, unified tool orchestration layer, automatic execution with safety, MCP-compliant tool architecture",
          moat: "Tool orchestration expertise—ability to design unified tool interfaces that scale to dozens of tools without custom integration per tool",
          stage: 1
        },
        {
          title: "Module 3: ReAct Loop Implementation",
          from: "One-shot LLM responses, no iterative reasoning, can't recover from errors, shallow problem-solving",
          to: "ReAct loop (Thought → Action → Observation), multi-step autonomous execution, self-correction capability, deep problem-solving",
          moat: "ReAct architecture mastery—ability to implement the core autonomous agent loop that enables iterative reasoning and self-correction",
          stage: 1
        },
        {
          title: "Module 4: Knowledge Augmentation with RAG",
          from: "Agents limited to LLM training data, no domain expertise, generic responses, can't use proprietary knowledge",
          to: "Agents with specialized knowledge bases, domain-specific expertise, context-aware responses, leveraging proprietary data",
          moat: "Agentic RAG expertise—building knowledge systems that agents can actively query for domain-specific decision-making",
          stage: 2
        },
        {
          title: "Module 5: Memory & Continuous Learning",
          from: "Stateless agents (no memory between executions), repeating mistakes, no personalization, can't learn from interactions",
          to: "Agents with persistent memory, learning from experience, personalized behaviors, continuous improvement",
          moat: "Memory architecture mastery—building agents that remember, learn, and improve over time",
          stage: 2
        },
        {
          title: "Module 6: Planning & Reflection Systems",
          from: "Reactive agents (respond to immediate inputs), no strategic planning, trial-and-error execution, no self-improvement",
          to: "Proactive agents with planning capabilities, multi-step strategy generation, deliberate execution, self-reflection and improvement",
          moat: "Planning and reflection expertise—building agents that think ahead, strategize, and learn from mistakes",
          stage: 2
        },
        {
          title: "Module 7: Code Generation & Self-Improvement",
          from: "Agents that can't modify code, static tool sets, manual feature additions, limited adaptability",
          to: "Code-generating agents, self-improving capabilities, dynamic tool creation, adaptive agents",
          moat: "Code generation expertise—building agents that write their own tools and extend their own capabilities",
          stage: 3
        },
        {
          title: "Module 8: Multi-Agent Coordination",
          from: "Single-agent limitations (one agent does everything), monolithic agent systems, no specialization, poor scalability",
          to: "Multi-agent systems with coordination, specialized agents, parallel execution, scalable agent teams",
          moat: "Multi-agent architecture mastery—building systems where multiple specialized agents collaborate to solve complex problems",
          stage: 3
        },
        {
          title: "Module 9: Production Deployment & Monitoring",
          from: "Local-only agents, no production deployment, no monitoring, unpredictable production behavior",
          to: "Production-deployed agents, full observability, performance monitoring, reliable production systems",
          moat: "Production deployment mastery—operating autonomous agent systems at scale with reliability and continuous improvement",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help AI engineers and ML practitioners build production-ready autonomous agent systems from first principles, so they can deploy reliable multi-agent architectures earning $200K-$400K salaries without being commoditized as framework users or stuck debugging black-box systems they don't understand.",
        founders: "I help technical founders and CTOs build proprietary autonomous agent infrastructure from first principles, so they can raise Series A at 2-3x premium valuations with defensible moats without burning $10K-$500K/month on APIs or being dismissed by VCs as 'just an API wrapper.'"
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 1997,
        description: "Self-Paced Mastery",
        features: [
          "All 9 modules available immediately (45+ hours)",
          "Lifetime access to content and updates",
          "Private Discord community (peer support)",
          "Monthly live office hours with Q&A",
          "9 production system templates (starter code)",
          "GitHub repository with all implementations",
          "Certificate of completion",
          "Learn on your own schedule"
        ]
      },
      cohort: {
        price: 6997,
        description: "9-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee (3 hours each)",
          "Cohort accountability and peer learning",
          "Direct instructor access (24-hour response)",
          "Weekly code reviews (instructor + peer feedback)",
          "Pair programming sessions",
          "Career advancement coaching",
          "Alumni network access",
          "Graduation certificate",
          "Job board access (companies hiring agent engineers)",
          "Fixed start dates (4 cohorts per year)"
        ]
      },
      bootcamp: {
        price: 9997,
        description: "5-Day Immersive Bootcamp",
        features: [
          "Executive format (Monday-Friday intensive)",
          "8am-6pm daily with hands-on labs (70% building)",
          "Build production multi-agent system in 5 days",
          "Small group (max 15 people)",
          "1:1 architecture review with Dr. Lee",
          "Capstone project (deploy your custom system)",
          "90 days post-bootcamp support",
          "Catered meals + coffee (in-person)",
          "Recordings of all sessions",
          "Corporate pricing available"
        ]
      },
      founders: {
        price: 19997,
        description: "Founder's Edition (1:1 Implementation + Fractional CTO)",
        features: [
          "One-on-one implementation partnership",
          "Weekly architecture sessions (2 hours private)",
          "Custom curriculum for YOUR specific use case",
          "Hands-on pair programming (we code together)",
          "Production deployment support",
          "90 days of fractional CTO access",
          "Architecture design document (custom)",
          "Code review (every pull request)",
          "Team training (upskill your engineers)",
          "Three tiers: Solo Founder ($19,997), CTO + Team ($34,997), Enterprise ($49,997)"
        ]
      }
    }
  },
  {
    id: "multi-agent",
    slug: "multi-agent-systems",
    name: "Build Your Own Multi-Agent AI Teams",
    subtitle: "Train Agent Swarms That Collaborate at Scale—Own Your AI Workforce",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Frontier AI",
    price: 2997,
    hook: "One agent is powerful. Multiple agents working together are transformative.",
    description: "Single agents are limited by what one LLM can do in one conversation. Multi-agent systems break that barrier—distributing complex tasks across specialized agents that collaborate using protocols like MCP and A2A. This masterclass takes you from single-agent foundations to fully orchestrated multi-agent architectures. You'll build the complete infrastructure: agent loops, tool orchestration, inter-agent communication, shared memory, and distributed task execution. By the end, you'll have a working multi-agent system capable of tackling problems no single agent could solve—and the deep understanding to adapt it for research, business automation, or production deployment.",
    outcomes: [
      "Build a complete multi-agent system from scratch: agents, protocols, and orchestration",
      "Implement the Agent2Agent (A2A) protocol for inter-agent communication",
      "Connect multiple agents to the Model Context Protocol (MCP) ecosystem",
      "Design agent roles and responsibilities for effective task distribution",
      "Implement shared memory modules so agents can collaborate on state",
      "Build human-in-the-loop patterns for multi-agent oversight",
      "Evaluate multi-agent system performance on complex, distributed tasks",
      "Deploy production multi-agent systems with proper monitoring and cost control"
    ],
    hours: 45,
    modules: 12,
    technologies: ["Python", "Ollama", "MCP", "A2A Protocol", "Pydantic", "asyncio", "JSON-RPC"],
    curriculum: [
      {
        title: "Module 1: The Strategic Case for Multi-Agent Systems",
        lessons: [
          "Executive Overview: Why Multi-Agent Systems Create Business Value",
          "Single Agent Limitations: When One Agent Isn't Enough",
          "Use Cases: Report Generation, Deep Research, Coding Teams, Business Automation",
          "Agent Specialization: Why Roles Matter",
          "Protocols for Coordination: MCP, A2A, and the Emerging Standard",
          "Build vs. Buy: When Custom Multi-Agent Systems Create Advantage"
        ]
      },
      {
        title: "Module 2: Agent Infrastructure Review",
        lessons: [
          "Quick Review: The Agent Processing Loop",
          "Tool Abstractions: BaseTool, ToolCall, ToolCallResult",
          "LLM Interfaces: Provider Independence and Abstraction",
          "The Agent Class: Bringing It All Together",
          "Prerequisites: What Your Agents Need Before They Can Collaborate"
        ]
      },
      {
        title: "Module 3: The Model Context Protocol (MCP)",
        lessons: [
          "What is MCP? The Standard for Agent-Service Communication",
          "MCP Architecture: Servers, Clients, and Tool Discovery",
          "Making Your Agents MCP-Compatible",
          "Resource Management: Files, Databases, and External APIs",
          "Implementing MCP Servers for Your Services",
          "Testing MCP Integration"
        ]
      },
      {
        title: "Module 4: Capstone—Deep Research with MCP",
        lessons: [
          "Designing a Deep Research Agent",
          "Connecting to Multiple MCP Servers",
          "Orchestrating Multi-Source Research Workflows",
          "Synthesizing Information Across Sources",
          "Generating Structured Research Reports",
          "Evaluating Research Quality"
        ]
      },
      {
        title: "Module 5: Human-in-the-Loop for Multi-Agent Systems",
        lessons: [
          "Why Multi-Agent Systems Need More Oversight",
          "Approval Checkpoints: Pausing Distributed Workflows",
          "Escalation Patterns: When Any Agent Can Request Human Input",
          "Audit Trails: Tracking Decisions Across Multiple Agents",
          "Implementing Multi-Agent Human-in-the-Loop",
          "Balancing Autonomy and Oversight"
        ]
      },
      {
        title: "Module 6: Shared Memory for Agent Collaboration",
        lessons: [
          "Why Agents Need Shared State",
          "Memory Architectures for Multi-Agent Systems",
          "Implementing Shared Memory Modules",
          "Conflict Resolution: When Agents Disagree About State",
          "Persistence: Saving and Restoring Multi-Agent State",
          "Memory Patterns for Different Use Cases"
        ]
      },
      {
        title: "Module 7: Capstone—Deep Research Revisited",
        lessons: [
          "Upgrading Your Research Agent with Memory",
          "Adding Human-in-the-Loop Checkpoints",
          "Persistent Research Sessions",
          "Iterative Refinement Based on Human Feedback",
          "Performance Comparison: Before and After Enhancements"
        ]
      },
      {
        title: "Module 8: The Agent2Agent (A2A) Protocol",
        lessons: [
          "What is A2A? The Standard for Inter-Agent Communication",
          "A2A Architecture: Agent Cards, Task Distribution, and Responses",
          "Implementing A2A-Compatible Agents",
          "Task Delegation: How Agents Assign Work to Each Other",
          "Response Handling: Processing Results from Other Agents",
          "Error Handling in Distributed Agent Systems"
        ]
      },
      {
        title: "Module 9: Multi-Agent Orchestration Patterns",
        lessons: [
          "Manager-Worker Pattern: Centralized Task Distribution",
          "Peer-to-Peer Pattern: Decentralized Collaboration",
          "Pipeline Pattern: Sequential Agent Processing",
          "Debate Pattern: Agents Challenging Each Other's Work",
          "Consensus Pattern: Multiple Agents Agreeing on Results",
          "Choosing the Right Pattern for Your Use Case"
        ]
      },
      {
        title: "Module 10: Building Multi-Agent Teams",
        lessons: [
          "Designing Agent Roles: Researcher, Writer, Reviewer, Editor",
          "Specialization vs. Generalization Trade-offs",
          "Dynamic Role Assignment: Agents That Adapt",
          "Team Composition: How Many Agents and Which Roles",
          "Implementing Your First Multi-Agent Team"
        ]
      },
      {
        title: "Module 11: Capstone—Multi-Agent Report Generation",
        lessons: [
          "The Report Generation Use Case: End-to-End Automation",
          "Designing the Agent Team: Researchers, Analysts, Writers",
          "Implementing Task Distribution and Coordination",
          "Quality Control: Review and Revision Cycles",
          "Generating Professional Reports Automatically",
          "Evaluation: Measuring Multi-Agent Performance"
        ]
      },
      {
        title: "Module 12: Production Deployment",
        lessons: [
          "Monitoring Multi-Agent Systems: What to Track",
          "Cost Optimization: Managing LLM Calls Across Agents",
          "Failure Handling: What Happens When Agents Fail",
          "Scaling Multi-Agent Workloads",
          "Security Considerations for Distributed Agents",
          "Capstone: Your Production-Ready Multi-Agent System"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His approach: build the complete infrastructure yourself to truly understand how multi-agent systems work."
    },
    faqs: [
      {
        question: "How is this different from the Agentic Systems course?",
        answer: "Agentic Systems teaches you to build a single agent from scratch. This course assumes you have that foundation and focuses on multi-agent coordination: A2A protocol, shared memory, distributed task execution, and orchestration patterns."
      },
      {
        question: "Do I need to take Agentic Systems first?",
        answer: "Recommended but not required. We include a quick review of agent fundamentals, but you'll get more value if you've built a single agent first."
      },
      {
        question: "Do I need special frameworks like AutoGen or CrewAI?",
        answer: "No. You'll build everything from scratch—agent communication, task distribution, shared memory, and orchestration. This gives you deeper understanding and complete control."
      },
      {
        question: "What hardware do I need?",
        answer: "Everything runs on a standard laptop. Multi-agent systems don't require more hardware—just more LLM calls, which we optimize throughout the course."
      },
      {
        question: "What will I build by the end?",
        answer: "A complete multi-agent system with A2A communication, shared memory, human-in-the-loop patterns, and MCP integration—capable of automated research, report generation, and complex task execution."
      },
      {
        question: "What's the business case for multi-agent systems?",
        answer: "Complex business processes often require multiple specialized roles working together. Multi-agent systems can automate these workflows—research teams, review processes, content pipelines—at a fraction of the cost of human teams."
      }
    ]
  },
  {
    id: "product-factory",
    slug: "the-ai-product-factory",
    name: "Production AI",
    subtitle: "Ship Models That Last—Build Your Own MLOps Platform",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    price: 1997,
    hook: "90% of ML projects never make it to production. This course ensures yours does.",
    description: "Delivering a successful machine learning project is hard. Most models die in notebooks. This masterclass teaches you to build a production-quality ML platform from scratch—incorporating MLOps and DevOps with a stack of proven infrastructure tools. You'll design reliable systems that streamline data workflows, improve collaboration between data and operations teams, and provide the structure needed for both training and deployment. Whether you're deploying traditional models or frontier LLMs, this course provides the crucial MLOps framework to get them into production and keep them running.",
    outcomes: [
      "Set up a complete MLOps platform from scratch using open source tools",
      "Deploy machine learning models to production with confidence",
      "Build end-to-end data pipelines with proper orchestration",
      "Implement experiment tracking and model versioning with MLflow",
      "Create feature stores for consistent feature engineering with Feast",
      "Orchestrate ML pipelines with Kubeflow",
      "Deploy and serve models at scale with BentoML",
      "Monitor model performance and detect data drift with Evidently",
      "Implement proper CI/CD for ML systems"
    ],
    hours: 45,
    modules: 11,
    technologies: ["Docker", "Kubernetes", "Kubeflow", "MLflow", "BentoML", "Evidently", "Feast", "Argo CD", "Prometheus", "Grafana"],
    curriculum: [
      {
        title: "Module 1: Getting Started with MLOps",
        lessons: [
          "Executive Overview: Why Most ML Projects Fail in Production",
          "The ML Life Cycle: Experimentation to Production",
          "Skills Needed for MLOps: Bridging Data Science and Engineering",
          "Build vs. Buy: When to Build Your Own Platform",
          "Tools and Infrastructure Overview",
          "Introducing the ML Projects You'll Build"
        ]
      },
      {
        title: "Module 2: What is MLOps?",
        lessons: [
          "ML as a Continuous Loop: The Full Workflow",
          "Data Collection and Exploratory Analysis",
          "Modeling, Training, and Evaluation",
          "Deployment, Monitoring, and Maintenance",
          "Why Robust MLOps Matters for Business",
          "DevOps vs. MLOps: Key Differences",
          "MLOps Maturity Levels: Basic to Advanced"
        ]
      },
      {
        title: "Module 3: Building Applications on Kubernetes",
        lessons: [
          "Docker Fundamentals: Writing Applications and Dockerfiles",
          "Building and Pushing Docker Images",
          "Kubernetes Architecture: Clusters, Nodes, and Pods",
          "Kubectl: Managing Kubernetes from the Command Line",
          "Kubernetes Objects: Deployments, Services, ConfigMaps",
          "Networking and Service Discovery",
          "Helm Charts: Package Management for Kubernetes"
        ]
      },
      {
        title: "Module 4: Continuous Integration and Deployment",
        lessons: [
          "CI/CD for Machine Learning: Why It's Different",
          "GitLab CI: Automating Build and Test Pipelines",
          "Argo CD: GitOps for Kubernetes Deployments",
          "Prometheus and Grafana: Infrastructure Monitoring",
          "Building a Complete CI/CD Pipeline for ML"
        ]
      },
      {
        title: "Module 5: Designing Reliable ML Systems",
        lessons: [
          "MLflow for Experiment Tracking: Logging Runs and Parameters",
          "Data Exploration Best Practices",
          "MLflow Model Registry: Versioning and Staging",
          "Feast as a Feature Store: Registering and Retrieving Features",
          "Feature Server and Feast UI",
          "Integrating Experiment Tracking with Feature Engineering"
        ]
      },
      {
        title: "Module 6: Orchestrating ML Pipelines",
        lessons: [
          "Why Pipeline Orchestration Matters",
          "Kubeflow: The Task Orchestrator for ML",
          "Kubeflow Components: Building Reusable Pipeline Steps",
          "Building an Income Classifier Pipeline",
          "Passing Data Between Pipeline Components",
          "Scheduling and Monitoring Pipelines"
        ]
      },
      {
        title: "Module 7: Productionizing ML Models",
        lessons: [
          "BentoML: A Platform for Model Deployment",
          "Building a Bento: Packaging Models for Production",
          "Deploying Bentos to Production",
          "Evidently for Data Drift Monitoring",
          "Building Drift Detection Dashboards",
          "Integrating Drift Detection into Kubeflow Pipelines"
        ]
      },
      {
        title: "Module 8: Data Analysis and Preparation",
        lessons: [
          "Launching Notebook Servers in Kubeflow",
          "Workspace and Data Volume Management",
          "Creating Custom Kubeflow Notebook Images",
          "Data Passing: Simple Values vs. Large Datasets",
          "Project: Data Preparation for Object Detection",
          "Project: Data Preparation for Movie Recommender"
        ]
      },
      {
        title: "Module 9: Model Training and Validation",
        lessons: [
          "Training Object Detection Models with YOLO",
          "Downloading Data with MinIO",
          "Creating Training and Validation Components",
          "Building and Executing Training Pipelines",
          "VolumeOp for Persistent Data Storage",
          "Tracking Training with TensorBoard",
          "Experiment Tracking and Model Registry with MLflow"
        ]
      },
      {
        title: "Module 10: Model Inference and Serving",
        lessons: [
          "Why Model Deployment is Hard",
          "BentoML Services and Runners",
          "Loading Models with BentoML Runner",
          "Building Bentos for Deployment",
          "BentoML with MLflow Integration",
          "Creating Inference Services with MLflow",
          "KServe: An Alternative Serving Platform"
        ]
      },
      {
        title: "Module 11: Monitoring and Explainability",
        lessons: [
          "Basic Monitoring: Metrics and Health Checks",
          "Custom Metrics for ML Systems",
          "Logging Best Practices for Production ML",
          "Alerting: When to Wake Someone Up",
          "Data Drift Detection in Production",
          "Model Explainability: Understanding Predictions",
          "Capstone: Your Complete ML Platform in Production"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His approach: build the complete infrastructure yourself to truly understand production ML."
    },
    faqs: [
      {
        question: "Is this just for LLMs or all ML models?",
        answer: "The MLOps principles and infrastructure work for any ML model—traditional classifiers, deep learning models, or LLMs. You'll build pipelines for object detection and recommendation systems, and the patterns apply to any model type."
      },
      {
        question: "Do I need Kubernetes experience?",
        answer: "No. We teach Kubernetes from the ground up, including Docker fundamentals. By the end, you'll be comfortable deploying and managing ML systems on Kubernetes."
      },
      {
        question: "What if my company uses different tools?",
        answer: "The concepts transfer across tools. We teach with Kubeflow, MLflow, and BentoML, but the patterns—experiment tracking, pipeline orchestration, model serving, drift detection—apply to any MLOps stack."
      },
      {
        question: "What hardware do I need?",
        answer: "A standard laptop for development. We provide cloud setup instructions for running Kubernetes clusters. Local development uses Minikube or similar."
      },
      {
        question: "Will I build something that actually works?",
        answer: "Yes. You'll build complete pipelines for object detection and movie recommendation—from data preparation through training, deployment, and monitoring. Real projects, not toy examples."
      },
      {
        question: "What's the business case for MLOps?",
        answer: "MLOps is the difference between models that sit in notebooks and models that generate business value. Proper infrastructure reduces time-to-production, improves reliability, and enables the continuous improvement loop that makes ML valuable."
      }
    ]
  },
  {
    id: "graphrag",
    slug: "graphrag",
    name: "Build Your Own GraphRAG System",
    subtitle: "Knowledge Graphs That Outperform Vector Search—Build, Don't Rent",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Very Rare",
    price: 1997,
    hook: "RAG only works when you find the right context. Knowledge graphs ensure you always do.",
    description: "Retrieval Augmented Generation is powerful, but only when you can quickly identify and supply the most relevant context to your LLM. This masterclass shows you how to use knowledge graphs to model your RAG data and deliver better performance, accuracy, traceability, and completeness. You'll learn vector similarity-based approaches, semantic layers, agentic RAG patterns, and how to generate Cypher queries that retrieve precisely the data your LLM needs. By the end, you'll have built a production-quality GraphRAG system that dramatically outperforms basic vector search.",
    outcomes: [
      "Build a complete GraphRAG system from scratch",
      "Implement vector similarity search and hybrid retrieval",
      "Generate Cypher queries from natural language questions",
      "Construct knowledge graphs using LLMs",
      "Build agentic RAG with retriever agents and answer critics",
      "Implement Microsoft's GraphRAG pipeline pattern",
      "Evaluate RAG performance with proper metrics",
      "Deploy production-ready GraphRAG applications"
    ],
    hours: 35,
    modules: 8,
    technologies: ["Neo4j", "Python", "OpenAI", "Cypher", "Vector Databases", "LangChain"],
    curriculum: [
      {
        title: "Module 1: Improving LLM Accuracy",
        lessons: [
          "Executive Overview: Why RAG Matters for Production AI",
          "Introduction to LLMs and Their Limitations",
          "The Knowledge Cutoff Problem",
          "Hallucinations and Outdated Information",
          "Lack of Private Information",
          "Supervised Fine-tuning vs. Retrieval-Augmented Generation",
          "Knowledge Graphs as Data Storage for RAG Applications"
        ]
      },
      {
        title: "Module 2: Vector Similarity Search and Hybrid Search",
        lessons: [
          "Components of a RAG Architecture: Retriever and Generator",
          "RAG Using Vector Similarity Search",
          "Text Chunking Strategies",
          "Embedding Models: Choosing and Using",
          "Database with Vector Similarity Search Function",
          "Performing Vector Search",
          "Generating Answers Using an LLM",
          "Adding Full-Text Search for Hybrid Retrieval"
        ]
      },
      {
        title: "Module 3: Advanced Vector Retrieval Strategies",
        lessons: [
          "Step-Back Prompting: Asking Better Questions",
          "Parent Document Retriever Pattern",
          "Retrieving Parent Document Strategy Data",
          "Building the Complete RAG Pipeline",
          "Combining Strategies for Better Results"
        ]
      },
      {
        title: "Module 4: Generating Cypher Queries from Natural Language",
        lessons: [
          "The Basics of Query Language Generation",
          "Where Query Language Generation Fits in the RAG Pipeline",
          "Using Few-Shot Examples for In-Context Learning",
          "Using Database Schema to Guide the LLM",
          "Terminology Mapping: Semantically Mapping Questions to Schema",
          "Implementing a Text2Cypher Generator",
          "Specialized Fine-Tuned LLMs for Text2Cypher",
          "What Text2Cypher Enables for Your Applications"
        ]
      },
      {
        title: "Module 5: Agentic RAG",
        lessons: [
          "What is Agentic RAG?",
          "Retriever Agents: Specialized Retrieval Components",
          "The Retriever Router: Choosing the Right Tool",
          "Answer Critic: Validating Generated Responses",
          "Why We Need Agentic RAG",
          "Implementing Retriever Tools",
          "Implementing the Retriever Router",
          "Implementing the Answer Critic",
          "Tying It All Together: A Complete Agentic RAG System"
        ]
      },
      {
        title: "Module 6: Constructing Knowledge Graphs with LLMs",
        lessons: [
          "Extracting Structured Data from Text",
          "Structured Outputs Model Definition",
          "Structured Outputs Extraction Request",
          "Working with Real Datasets (CUAD Example)",
          "Constructing the Graph: Data Import",
          "Entity Resolution: Deduplicating Entities",
          "Adding Unstructured Data to the Graph"
        ]
      },
      {
        title: "Module 7: Microsoft's GraphRAG Implementation",
        lessons: [
          "The Microsoft GraphRAG Pipeline",
          "Dataset Selection and Preparation",
          "Graph Indexing: Chunking Documents",
          "Entity and Relationship Extraction",
          "Entity and Relationship Summarization",
          "Community Detection and Summarization",
          "Graph Retrievers: Global Search",
          "Graph Retrievers: Local Search"
        ]
      },
      {
        title: "Module 8: RAG Application Evaluation",
        lessons: [
          "Designing the Benchmark Dataset",
          "Coming Up with Test Examples",
          "Context Recall: Are You Finding the Right Information?",
          "Faithfulness: Is the LLM Using the Context?",
          "Answer Correctness: Is the Answer Right?",
          "Running Evaluation on Your System",
          "Observations and Next Steps",
          "Capstone: Your Production GraphRAG System"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His approach: build the complete system yourself to truly understand GraphRAG."
    },
    faqs: [
      {
        question: "Do I need to know Neo4j already?",
        answer: "No. We cover Neo4j and Cypher from the ground up, including installation and basic queries. By the end, you'll be proficient in graph database operations."
      },
      {
        question: "How is this different from basic RAG tutorials?",
        answer: "Most RAG tutorials stop at vector similarity search. This course goes further—knowledge graphs, Cypher generation, agentic RAG, and the Microsoft GraphRAG pipeline. You'll build a production-quality system, not a toy demo."
      },
      {
        question: "What's the advantage of GraphRAG over vector RAG?",
        answer: "Vector search finds similar content but misses relationships. GraphRAG captures entities, relationships, and context—enabling multi-hop reasoning, better traceability, and more accurate answers to complex questions."
      },
      {
        question: "Will I build something that actually works?",
        answer: "Yes. You'll build a complete GraphRAG system with vector search, Cypher generation, agentic retrieval, and proper evaluation metrics. A real production system, not a tutorial project."
      },
      {
        question: "What's the business case for GraphRAG?",
        answer: "GraphRAG delivers better accuracy, traceability, and completeness than basic RAG. For enterprise applications where correctness matters—legal, medical, financial—the graph advantage is significant."
      },
      {
        question: "Do I need expensive hardware?",
        answer: "No. Everything runs on a standard laptop. We use Neo4j (free tier available) and cloud LLM APIs. No specialized hardware required."
      }
    ]
  },
  // Add remaining courses with similar structure...
  {
    id: "ml-intuition",
    slug: "machine-learning-intuition",
    name: "Machine Learning Intuition",
    subtitle: "Master ML Fundamentals—Build Models You Own from First Principles",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    price: 1797,
    hook: "No PhD required. Just high school algebra and a desire to understand how ML actually works.",
    description: "Machine learning doesn't have to be intimidating. This masterclass teaches you core ML techniques using only standard Python and high school-level math. No specialist knowledge required. You'll build intuition for how algorithms work by implementing them yourself—from linear regression and classification to neural networks and ensemble methods. Through hands-on exercises and real projects like spam detection and image recognition, you'll develop the understanding that separates practitioners who debug and improve models from those who just call library functions.",
    outcomes: [
      "Understand machine learning algorithms intuitively without advanced math",
      "Build supervised learning models for regression and classification",
      "Implement the perceptron and logistic regression algorithms from scratch",
      "Master underfitting, overfitting, and regularization",
      "Evaluate models using accuracy, precision, recall, and ROC curves",
      "Build decision trees and understand ensemble methods",
      "Train neural networks and understand how they learn",
      "Apply everything to real datasets like Titanic survival prediction"
    ],
    hours: 35,
    modules: 13,
    technologies: ["Python", "NumPy", "Scikit-learn", "Keras", "Pandas", "Matplotlib"],
    curriculum: [
      {
        title: "Module 1: What is Machine Learning?",
        lessons: [
          "Executive Overview: Why ML Intuition Matters for AI Practitioners",
          "Do I Need Heavy Math? (No, You Don't)",
          "What Exactly Is Machine Learning?",
          "The Remember-Formulate-Predict Framework",
          "How Machines Make Decisions with Data"
        ]
      },
      {
        title: "Module 2: Types of Machine Learning",
        lessons: [
          "Labeled vs. Unlabeled Data",
          "Supervised Learning: Working with Labels",
          "Unsupervised Learning: Finding Structure",
          "Reinforcement Learning: Learning from Rewards",
          "Choosing the Right Approach for Your Problem"
        ]
      },
      {
        title: "Module 3: Linear Regression",
        lessons: [
          "The Problem: Predicting House Prices",
          "Building a Regression Model Step by Step",
          "How to Get the Computer to Draw This Line",
          "The Linear Regression Algorithm",
          "Measuring Results: The Error Function",
          "Real-Life Application: Housing Price Prediction",
          "Polynomial Regression: When Data Isn't a Line",
          "Parameters vs. Hyperparameters"
        ]
      },
      {
        title: "Module 4: Underfitting, Overfitting, and Regularization",
        lessons: [
          "An Example Using Polynomial Regression",
          "How to Get the Computer to Pick the Right Model",
          "Testing: The Key to Model Selection",
          "The Golden Rule and the Validation Set",
          "The Model Complexity Graph",
          "Regularization: Another Way to Avoid Overfitting",
          "Hands-On: Testing and Regularization in Practice"
        ]
      },
      {
        title: "Module 5: The Perceptron Algorithm",
        lessons: [
          "The Problem: A Classification Challenge",
          "How Do We Determine If a Classifier Is Good?",
          "The Error Function for Classification",
          "The Perceptron Algorithm: Finding a Good Classifier",
          "Coding the Perceptron from Scratch",
          "Applications of the Perceptron"
        ]
      },
      {
        title: "Module 6: Logistic Regression",
        lessons: [
          "Logistic Classifiers: A Continuous Version of Perceptrons",
          "How to Find a Good Logistic Classifier",
          "The Logistic Regression Algorithm",
          "Coding Logistic Regression from Scratch",
          "Real-Life Application: Classifying Movie Reviews",
          "Multiple Classes: The Softmax Function"
        ]
      },
      {
        title: "Module 7: Measuring Classification Models",
        lessons: [
          "Accuracy: How Often Is My Model Correct?",
          "The Accuracy Problem: When Accuracy Lies",
          "Different Types of Errors: False Positives and False Negatives",
          "Precision and Recall",
          "The F1 Score: Balancing Precision and Recall",
          "The ROC Curve: A Powerful Evaluation Tool"
        ]
      },
      {
        title: "Module 8: Naive Bayes",
        lessons: [
          "Sick or Healthy? A Story with Bayes' Theorem",
          "Understanding Bayes' Theorem Intuitively",
          "Use Case: Building a Spam Detection Model",
          "Building Spam Detection with Real Data",
          "When Naive Bayes Works and When It Doesn't"
        ]
      },
      {
        title: "Module 9: Decision Trees",
        lessons: [
          "The Problem: Recommending Apps to Users",
          "Building an App Recommendation System",
          "Splitting Data by Asking Questions",
          "Beyond Yes/No Questions",
          "The Graphical Boundary of Decision Trees",
          "Real-Life Application: Student Admissions with Scikit-Learn",
          "Decision Trees for Regression"
        ]
      },
      {
        title: "Module 10: Neural Networks",
        lessons: [
          "Neural Networks with an Example",
          "How Neural Networks Learn: Training",
          "Backpropagation Explained Simply",
          "Coding Neural Networks in Keras",
          "Neural Networks for Regression",
          "Other Architectures for Complex Datasets"
        ]
      },
      {
        title: "Module 11: Support Vector Machines",
        lessons: [
          "Using a New Error Function for Better Classifiers",
          "The SVM Intuition: Finding the Best Boundary",
          "Coding SVMs in Scikit-Learn",
          "The Kernel Method: Nonlinear Boundaries",
          "When to Use SVMs"
        ]
      },
      {
        title: "Module 12: Ensemble Learning",
        lessons: [
          "With a Little Help from Our Friends",
          "Bagging: Combining Weak Learners Randomly",
          "AdaBoost: Combining Weak Learners Cleverly",
          "Gradient Boosting: Using Decision Trees for Power",
          "XGBoost: Extreme Gradient Boosting",
          "Applications of Ensemble Methods"
        ]
      },
      {
        title: "Module 13: Putting It All Together",
        lessons: [
          "The Titanic Dataset: A Real-World Challenge",
          "Cleaning Up: Missing Values and How to Handle Them",
          "Feature Engineering: Transforming Features Before Training",
          "Training Multiple Models",
          "Grid Search: Finding the Best Hyperparameters",
          "K-Fold Cross-Validation: Reusing Data Smartly",
          "Capstone: Your Complete ML Workflow"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His philosophy: understanding beats memorization, and anyone can learn ML."
    },
    faqs: [
      {
        question: "Do I need advanced math?",
        answer: "No. This course uses only high school algebra. We explain concepts visually and intuitively, avoiding academic jargon and complex proofs."
      },
      {
        question: "Do I need prior ML experience?",
        answer: "No ML knowledge required. If you know basic Python, you're ready. We build everything from first principles."
      },
      {
        question: "Will I just call library functions?",
        answer: "No. You'll implement algorithms from scratch first, then learn to use libraries like Scikit-Learn effectively. Understanding comes from building."
      },
      {
        question: "What will I build?",
        answer: "You'll build spam detectors, image classifiers, recommendation systems, and complete the Titanic survival prediction challenge—real projects, not toy examples."
      },
      {
        question: "How does this differ from the Deep Learning course?",
        answer: "This course covers the breadth of classical ML: regression, classification, decision trees, SVMs, ensembles. Deep Learning goes deeper into neural networks specifically."
      },
      {
        question: "Is this the right foundation for LLMs and modern AI?",
        answer: "Yes. Understanding classical ML—especially gradient descent, regularization, and optimization—provides the foundation for understanding transformers and large models."
      }
    ]
  },
  {
    id: "dl-intuition",
    slug: "deep-learning-intuition",
    name: "Deep Learning Intuition",
    subtitle: "Build Neural Networks from Scratch—Own Every Layer, No Dependencies",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    price: 1997,
    hook: "Understand every detail of training neural networks. No frameworks, no magic—just clarity.",
    description: "Deep learning powers translation, self-driving cars, voice assistants, and recommendation systems. This masterclass teaches you the science under the hood by building neural networks from scratch using only Python and NumPy—no frameworks hiding the mechanics. You'll train networks to understand images, translate text, and even write like Shakespeare. By building everything yourself, you'll develop intuition that separates practitioners who debug and improve networks from those mystified by black boxes. When you're done, you'll be prepared to use any deep learning framework with full understanding of what's happening inside.",
    outcomes: [
      "Build and train neural networks from scratch using only Python and NumPy",
      "Understand gradient descent and backpropagation at a deep level",
      "Implement regularization, dropout, and batch normalization",
      "Build convolutional neural networks for image understanding",
      "Create recurrent neural networks and LSTMs for sequence data",
      "Train networks on real datasets like MNIST and IMDB reviews",
      "Understand word embeddings and how language models learn meaning",
      "Build your own deep learning framework with automatic differentiation"
    ],
    hours: 40,
    modules: 16,
    technologies: ["Python", "NumPy", "MNIST", "IMDB Dataset"],
    curriculum: [
      {
        title: "Module 1: Introducing Deep Learning",
        lessons: [
          "Executive Overview: Why Deep Learning Changes Everything",
          "Why You Should Learn Deep Learning",
          "What You Need to Get Started",
          "Setting Up Your Environment"
        ]
      },
      {
        title: "Module 2: Fundamental Concepts",
        lessons: [
          "What Is Deep Learning?",
          "Supervised vs. Unsupervised Machine Learning",
          "Parametric vs. Nonparametric Learning",
          "Supervised Parametric Learning",
          "Unsupervised Parametric Learning"
        ]
      },
      {
        title: "Module 3: Neural Prediction—Forward Propagation",
        lessons: [
          "A Simple Neural Network Making a Prediction",
          "What Is a Neural Network?",
          "Making a Prediction with Multiple Inputs",
          "Making a Prediction with Multiple Outputs",
          "Predicting with Multiple Inputs and Outputs",
          "Predicting on Predictions",
          "A Quick Primer on NumPy"
        ]
      },
      {
        title: "Module 4: Neural Learning—Gradient Descent",
        lessons: [
          "Predict, Compare, and Learn",
          "Measuring Error: Does Your Network Make Good Predictions?",
          "Hot and Cold Learning",
          "Calculating Direction and Amount from Error",
          "One Iteration of Gradient Descent",
          "Learning Is Just Reducing Error",
          "Visualizing the Learning Process",
          "The Alpha Parameter: Avoiding Overcorrections"
        ]
      },
      {
        title: "Module 5: Learning Multiple Weights",
        lessons: [
          "Gradient Descent with Multiple Inputs",
          "Freezing Weights: What Does It Do?",
          "Gradient Descent with Multiple Outputs",
          "Gradient Descent with Multiple Inputs and Outputs",
          "Visualizing Weight Values",
          "Visualizing Dot Products (Weighted Sums)"
        ]
      },
      {
        title: "Module 6: Your First Deep Neural Network—Backpropagation",
        lessons: [
          "The Streetlight Problem",
          "Preparing the Data with Matrices",
          "Building a Neural Network",
          "Learning the Whole Dataset",
          "Full, Batch, and Stochastic Gradient Descent",
          "Neural Networks Learn Correlation",
          "Edge Cases: Overfitting and Conflicting Pressure",
          "Learning Indirect Correlation",
          "Backpropagation: Long-Distance Error Attribution",
          "Your First Deep Neural Network in Code"
        ]
      },
      {
        title: "Module 7: Visualizing Neural Networks",
        lessons: [
          "It's Time to Simplify",
          "Correlation Summarization",
          "The Simplified Visualization",
          "Visualizing Using Letters Instead of Pictures",
          "Linking the Variables",
          "The Importance of Visualization Tools"
        ]
      },
      {
        title: "Module 8: Regularization and Batching",
        lessons: [
          "Three-Layer Network on MNIST",
          "Memorization vs. Generalization",
          "Overfitting in Neural Networks",
          "Where Overfitting Comes From",
          "The Simplest Regularization: Early Stopping",
          "Industry Standard: Dropout",
          "Why Dropout Works: Ensembling",
          "Dropout in Code",
          "Batch Gradient Descent"
        ]
      },
      {
        title: "Module 9: Activation Functions",
        lessons: [
          "What Is an Activation Function?",
          "Standard Hidden-Layer Activation Functions",
          "Standard Output Layer Activation Functions",
          "The Core Issue: Inputs Have Similarity",
          "Softmax Computation",
          "Converting Output to Slope (Derivative)",
          "Upgrading the MNIST Network"
        ]
      },
      {
        title: "Module 10: Convolutional Neural Networks",
        lessons: [
          "Reusing Weights in Multiple Places",
          "The Convolutional Layer",
          "Understanding Edges and Corners",
          "A Simple Implementation in NumPy"
        ]
      },
      {
        title: "Module 11: Neural Networks for Language",
        lessons: [
          "What Does It Mean to Understand Language?",
          "Natural Language Processing (NLP)",
          "IMDB Movie Reviews Dataset",
          "Capturing Word Correlation in Input Data",
          "Predicting Movie Reviews",
          "Introduction to the Embedding Layer",
          "Comparing Word Embeddings",
          "King — Man + Woman = Queen"
        ]
      },
      {
        title: "Module 12: Recurrent Neural Networks",
        lessons: [
          "The Challenge of Arbitrary Length",
          "The Surprising Power of Averaged Word Vectors",
          "Using Identity Vectors to Sum Word Embeddings",
          "Learning the Transition Matrices",
          "Learning to Create Useful Sentence Vectors",
          "Forward Propagation in Python",
          "Backpropagation with Arbitrary Length"
        ]
      },
      {
        title: "Module 13: Building a Deep Learning Framework",
        lessons: [
          "What Is a Deep Learning Framework?",
          "Introduction to Tensors",
          "Introduction to Automatic Gradient Computation (Autograd)",
          "Tensors Used Multiple Times",
          "Adding Support for Various Functions",
          "Using Autograd to Train a Neural Network",
          "Adding Automatic Optimization",
          "Adding Support for Layer Types"
        ]
      },
      {
        title: "Module 14: Long Short-Term Memory (LSTM)",
        lessons: [
          "Character Language Modeling",
          "The Need for Truncated Backpropagation",
          "Vanishing and Exploding Gradients",
          "Long Short-Term Memory Cells",
          "Intuition About LSTM Gates",
          "The Long Short-Term Memory Layer",
          "Training the LSTM Character Language Model",
          "Writing Like Shakespeare"
        ]
      },
      {
        title: "Module 15: Federated Learning and Privacy",
        lessons: [
          "The Problem of Privacy in Deep Learning",
          "Federated Learning",
          "Learning to Detect Spam",
          "Making It Federated",
          "Hacking into Federated Learning",
          "Secure Aggregation",
          "Homomorphic Encryption"
        ]
      },
      {
        title: "Module 16: Where to Go from Here",
        lessons: [
          "Learning PyTorch and TensorFlow",
          "Moving to Advanced Deep Learning",
          "Implementing Academic Papers",
          "Getting Access to GPUs",
          "Contributing to Open Source",
          "Capstone: Your Complete Deep Learning Foundation"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His philosophy: build it yourself to truly understand it."
    },
    faqs: [
      {
        question: "Do I need to know advanced math?",
        answer: "No. We use only high school math and explain concepts intuitively. The focus is on understanding through building, not deriving equations."
      },
      {
        question: "Why no frameworks like PyTorch or TensorFlow?",
        answer: "Frameworks hide the mechanics. By building from scratch, you'll understand what's actually happening. After this course, you'll use frameworks with full understanding of the magic inside."
      },
      {
        question: "What will I actually build?",
        answer: "You'll build image classifiers (MNIST), sentiment analysis models (IMDB reviews), language models that write like Shakespeare, and your own deep learning framework with autograd."
      },
      {
        question: "How is this different from the ML Intuition course?",
        answer: "ML Intuition covers the breadth of classical machine learning. This course goes deep on neural networks specifically—forward prop, backprop, CNNs, RNNs, LSTMs, and modern techniques."
      },
      {
        question: "Is this relevant for understanding LLMs?",
        answer: "Absolutely. LLMs are built on the same foundations—embeddings, attention (an extension of what you'll learn), and gradient-based optimization. This course gives you the deep understanding to grok transformers."
      },
      {
        question: "What hardware do I need?",
        answer: "Just a laptop. We use NumPy and small datasets that run quickly on CPU. No GPU required for this course."
      }
    ]
  },
  {
    id: "slm",
    slug: "small-language-models",
    name: "Build Your Own Domain Specific Small Language Model (SLM)",
    subtitle: "The Domain SLM Mastery Stack™ — Bigger Isn't Always Better, Focused Is Faster",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "High Demand",
    price: 1997,
    hook: "The ONLY masterclass teaching domain-specific SLMs that outperform frontier LLMs by 20-40% on specialized tasks—while running on a $2K laptop with zero API costs.",
    description: "This is not another course on API integration. This is executive business education (Harvard/MIT/Stanford caliber) merged with a masterclass for tech founders and AI architects. Using the DrLee.AI Shu-Ha-Ri learning method, you'll go from API consumer burning $50K-$500K/month to SLM architect owning specialized models in 9 transformative steps. Each module begins with a TedTalk-style presentation on strategy, then you immediately build it yourself with hands-on coding. You'll master fine-tuning, quantization (4-bit/8-bit), ONNX optimization, and cross-platform deployment from cloud to edge to mobile. By the end, you won't just understand domain-specific AI—you'll own production-ready specialized models that eliminate vendor dependency, run anywhere, and become your competitive moat. Available in 4 modalities: 9-Week Live Cohort, 5-Day Immersive Bootcamp, Self-Paced Mastery, or Founder's Edition (1:1 mentorship/Fractional CTO).",
    outcomes: [
      "Build domain-specific SLMs that outperform frontier LLMs by 20-40% on specialized tasks while using 1/100th the compute",
      "Fine-tune transformers for any domain (legal, medical, code, finance) using LoRA (train with 0.1% of parameters, 10x faster)",
      "Master quantization: compress models 75-87.5% with 4-bit/8-bit precision while maintaining 90%+ performance",
      "Deploy production SLMs with ONNX Runtime achieving 2-5x faster inference vs standard PyTorch",
      "Eliminate $50K-$500K/month API costs by running frontier-quality models on $2K laptops",
      "Run inference on commodity hardware: laptops, Raspberry Pi, mobile devices, edge servers, air-gapped systems",
      "Deploy with vLLM (PagedAttention for 24x throughput), FastAPI (production REST APIs), Ollama/LM Studio (local execution)",
      "Build specialized models for code generation (GitHub Copilot-quality) and biomolecular AI (protein/antibody design)",
      "Implement advanced compression: FlexGen (offload to CPU/disk), SmoothQuant (activation-aware), BitNet (1-bit models)",
      "Create production RAG systems and agentic AI powered entirely by owned SLMs (no API dependency)",
      "Profile and optimize ONNX graphs to identify bottlenecks and achieve maximum performance",
      "Deploy cross-platform: Android, iOS, web browsers, edge devices using MLC LLM and mobile frameworks",
      "Build Graph RAG with knowledge graphs for multi-hop reasoning without sending data to third-party APIs",
      "Integrate test-time compute and reasoning enhancement (chain-of-thought, self-consistency) into specialized SLMs"
    ],
    hours: 45,
    modules: 15,
    technologies: ["PyTorch", "Hugging Face", "ONNX", "vLLM", "Ollama", "LM Studio", "GPTQ", "LoRA", "DeepSpeed"],
    curriculum: [
      {
        title: "Module 1: Large Language Models Overview",
        lessons: [
          "Executive Overview: When Small Models Beat Large Ones",
          "The Transformer Architecture: A Visual Refresher",
          "Evolutions of Transformers",
          "The Open Source Revolution",
          "Risks and Challenges with Generalist LLMs",
          "When Domain-Specific SLMs Provide Greater Business Value"
        ]
      },
      {
        title: "Module 2: Tuning for a Specific Domain",
        lessons: [
          "Data Preparation Fundamentals",
          "Data Preparation for BERT Fine-Tuning",
          "Data Preparation for GPT Fine-Tuning",
          "Data Preparation for RAG Applications",
          "Retrieval Augmented Generation with SLMs",
          "Fine-Tuning Strategies",
          "LoRA: Low-Rank Adaptation for Efficient Training",
          "RAG or Fine-Tuning? When to Use Each"
        ]
      },
      {
        title: "Module 3: End-to-End Transformer Fine-Tuning",
        lessons: [
          "Data Preparation for Your Domain",
          "Fine-Tuning Process: Step by Step",
          "Testing the Fine-Tuned Model",
          "Domain-Specific Evaluation Metrics",
          "Iterating on Your Results"
        ]
      },
      {
        title: "Module 4: Running Inference",
        lessons: [
          "How to Generate Content with SLMs",
          "Text Completion Strategies",
          "Few-Shot Learning",
          "Code Generation",
          "Evaluating Generated Content",
          "Inference Cost Calculation",
          "Getting the Most from Your GPU",
          "Batching Strategies",
          "Optimizing GPU Usage with DeepSpeed"
        ]
      },
      {
        title: "Module 5: Exploring ONNX",
        lessons: [
          "The ONNX Format: Why It Matters",
          "ONNX Operators and Types",
          "The ONNX Runtime",
          "ONNX Runtime Providers",
          "ONNX for LLMs on CPU",
          "ONNX for LLMs on GPU",
          "I/O Binding for Performance"
        ]
      },
      {
        title: "Module 6: Quantizing for Production",
        lessons: [
          "Transformer Precision Formats Explained",
          "8-Bit Quantization: Theory and Practice",
          "Hands-On 8-Bit Quantization",
          "LLM.int8() and Quantization",
          "8-Bit Quantization with ONNX",
          "4-Bit Quantization with GPTQ",
          "4-Bit Quantization with ggml",
          "Choosing the Right Precision for Your Use Case"
        ]
      },
      {
        title: "Module 7: Generating Python Code",
        lessons: [
          "Transformers for Programming Language Generation",
          "Python Code Generation with CodeGen",
          "ONNX Conversion and Quantization for Custom Models",
          "Model Evaluation for Code Generation",
          "Python Code Generation with Better Models",
          "Inference (Coding Assistance) on Commodity Hardware"
        ]
      },
      {
        title: "Module 8: Generating Protein Structures",
        lessons: [
          "Application of Transformers in Chemistry",
          "From Natural Language to Protein Structures",
          "Antibody Generation with SLMs",
          "From CIF Files to Crystal Structures",
          "Domain-Specific Models for Scientific Applications"
        ]
      },
      {
        title: "Module 9: Advanced Quantization Techniques",
        lessons: [
          "What If a Domain-Specific Model Isn't Small?",
          "FlexGen: Offloading to Disk and CPU",
          "SmoothQuant: Activation-Aware Quantization",
          "BitNet: 1-Bit Language Models",
          "Implementing BitNet in Python"
        ]
      },
      {
        title: "Module 10: Profiling Insights",
        lessons: [
          "Profiling ONNX-Ported LLMs",
          "Transforming Raw Profiling Data into Insights",
          "Optimization of ONNX Graphs for LLMs",
          "Identifying Bottlenecks and Fixing Them"
        ]
      },
      {
        title: "Module 11: Deployment and Serving",
        lessons: [
          "vLLM: Offline and Online Serving",
          "FastAPI: Building Production APIs",
          "Benchmarking Various Models",
          "Deploying the Most Performant Model with FastAPI",
          "MLC LLM: Cross-Platform Deployment"
        ]
      },
      {
        title: "Module 12: Running on Your Laptop",
        lessons: [
          "Why a Personal Local Assistant?",
          "Running LLMs Locally with Ollama",
          "Importing Custom Models into Ollama",
          "User Privacy in Ollama",
          "Running LLMs with LM Studio",
          "The LM Studio Python SDK",
          "Running LLMs with Jan and Cortex"
        ]
      },
      {
        title: "Module 13: Deployment on Mobile Devices",
        lessons: [
          "Inference on Android Devices",
          "MLC LLM Framework for Mobile",
          "MLLM Framework",
          "Hugging Face Transformers on Mobile",
          "Optimizing for Mobile Constraints"
        ]
      },
      {
        title: "Module 14: End-to-End LLM Applications",
        lessons: [
          "Why LLMs Alone Aren't Enough",
          "Combining Domain-Specific SLMs with RAG",
          "Using Vector Databases with SLMs",
          "Building an Agent Powered by an SLM",
          "Graph RAG with SLMs",
          "RAG + Agentic AI",
          "Long- and Short-Term Memory Management"
        ]
      },
      {
        title: "Module 15: Test-Time Compute and Reasoning",
        lessons: [
          "Test-Time Compute: What It Is and Why It Matters",
          "The OptiLLM Inference Proxy",
          "SLMs with Embedded Test-Time Compute",
          "Building a Reasoning Domain-Specific SLM",
          "Capstone: Your Production-Ready Domain-Specific SLM"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His approach: smaller can be smarter when you know how to build it right."
    },
    faqs: [
      {
        question: "Why would I use an SLM instead of modern ChatGPT/Claude/Gemini?",
        answer: "Cost, speed, privacy, and control. SLMs run on your hardware, don't send data to third parties, respond faster for domain-specific tasks, and cost nothing per query after deployment."
      },
      {
        question: "What hardware do I need?",
        answer: "A laptop with a decent GPU is sufficient. The course teaches quantization and optimization techniques specifically to enable running on commodity hardware."
      },
      {
        question: "Do I need to train models from scratch?",
        answer: "No. You'll learn to fine-tune existing open-source models for your domain. This is far more practical than training from scratch and delivers excellent results."
      },
      {
        question: "What domains does this cover?",
        answer: "The principles apply to any domain. We use code generation and protein structures as examples, but you'll learn techniques that work for legal, medical, financial, or any specialized field."
      },
      {
        question: "Will I build something that actually works?",
        answer: "Yes. You'll build domain-specific models, quantize them for production, deploy with vLLM or FastAPI, and run on your laptop with Ollama. Real production systems, not toy demos."
      },
      {
        question: "How is this different from the Fine-Tuning course?",
        answer: "The Fine-Tuning course focuses on adapting any model with LoRA and QLoRA. This course goes deeper into SLMs specifically—quantization, ONNX optimization, mobile deployment, and domain-specific applications."
      }
    ],
    signatureSolution: {
      stages: [
        {
          title: "PHASE 1: Foundation",
          subtitle: "Specialization & Optimization Mastery",
          weeks: "Weeks 1-3",
          from: "API consumer burning cash, no control over models, vendor-dependent",
          to: "Domain SLM builder fine-tuning specialized models, optimizing with ONNX, eliminating API costs",
          moat: "Domain Specialization Capability",
          moatDesc: "Ability to build focused models that outperform general LLMs for specific tasks while running on commodity hardware",
          color: "blue"
        },
        {
          title: "PHASE 2: Optimization",
          subtitle: "Compression & Deployment Excellence",
          weeks: "Weeks 4-6",
          from: "Models too large for production, can't deploy to edge/mobile, limited by cloud GPUs",
          to: "Compression expert quantizing to 4-bit, deploying anywhere (laptop, mobile, edge, air-gapped)",
          moat: "Cross-Platform Deployment Expertise",
          moatDesc: "Master quantization and ONNX optimization to deploy frontier-quality models on $2K laptops and mobile devices",
          color: "purple"
        },
        {
          title: "PHASE 3: Production Mastery",
          subtitle: "Complete Systems & Advanced Capabilities",
          weeks: "Weeks 7-9",
          from: "Standalone models with limited capabilities, no RAG/agent integration, basic inference only",
          to: "Complete AI systems architect building production RAG, agentic AI, and reasoning-enhanced SLMs",
          moat: "The Domain SLM Ownership Stack™",
          moatDesc: "End-to-end capability from fine-tuning → quantization → deployment → production systems—own your AI stack completely",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Step 1: Domain-Specific AI Strategy & Architecture",
          from: "Use general LLMs through APIs, no understanding of when smaller models outperform larger ones",
          to: "Architect domain-specific AI strategy, understand transformer internals, choose right model for each use case",
          moat: "Strategic SLM architecture expertise—know when to specialize vs generalize",
          stage: 1
        },
        {
          title: "Step 2: Data Mastery & Model Specialization",
          from: "Rely on pre-trained general models, no custom domain data, limited to API capabilities",
          to: "Prepare domain-specific datasets, fine-tune transformers with LoRA, create specialized models for your field",
          moat: "Domain fine-tuning expertise—transform general models into specialized experts",
          stage: 1
        },
        {
          title: "Step 3: Production Inference & Generation Techniques",
          from: "Basic text generation, no optimization, inefficient GPU usage, high inference costs",
          to: "Master inference optimization, code generation, few-shot learning, batching strategies, DeepSpeed acceleration",
          moat: "Production inference optimization—10x throughput at 1/10th the cost",
          stage: 1
        },
        {
          title: "Step 4: Runtime Optimization & Cross-Platform Deployment",
          from: "PyTorch-only models, cloud GPU dependency, can't deploy to production edge/mobile environments",
          to: "Master ONNX conversion, runtime providers (CPU/CUDA/TensorRT), I/O binding, cross-platform optimization",
          moat: "ONNX deployment mastery—run anywhere from cloud to Raspberry Pi",
          stage: 2
        },
        {
          title: "Step 5: Applied SLMs: Code & Biomolecular Intelligence",
          from: "Generic models for specialized tasks, no domain-specific applications for code or science",
          to: "Build GitHub Copilot-quality code generators, protein/antibody design models, scientific AI applications",
          moat: "Applied domain SLM expertise—solve real-world problems with specialized models",
          stage: 2
        },
        {
          title: "Step 6: Advanced Compression & Performance Analysis",
          from: "Large models requiring expensive GPUs, no compression techniques, can't run on commodity hardware",
          to: "Master 4-bit/8-bit quantization, FlexGen, SmoothQuant, BitNet (1-bit), achieve 75-87.5% compression",
          moat: "Extreme compression expertise—run frontier-quality models on laptops and edge devices",
          stage: 2
        },
        {
          title: "Step 7: Production Deployment & Local Execution",
          from: "Cloud-only deployment, API dependency, can't run offline or on-premise, privacy concerns",
          to: "Deploy with vLLM/FastAPI for production, run locally with Ollama/LM Studio, enable on-premise/air-gapped execution",
          moat: "Complete deployment autonomy—eliminate vendor lock-in, deploy anywhere",
          stage: 3
        },
        {
          title: "Step 8: End-to-End AI Systems & Intelligent Retrieval",
          from: "Standalone models, no RAG integration, limited context, can't build agentic systems",
          to: "Build production RAG with vector DBs, Graph RAG for multi-hop reasoning, agentic AI with memory management",
          moat: "Complete AI systems architecture—build enterprise-grade applications with owned SLMs",
          stage: 3
        },
        {
          title: "Step 9: Reasoning Enhancement & Test-Time Optimization",
          from: "Basic inference only, no reasoning capabilities, limited to model's base performance",
          to: "Integrate test-time compute (chain-of-thought, self-consistency), build reasoning-enhanced SLMs, OptiLLM proxy",
          moat: "The Domain SLM Ownership Stack™—complete mastery from fine-tuning to reasoning-enhanced production systems",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help ML engineers and AI specialists build production-ready domain-specific language models that run on commodity hardware, so they can command $250K-$400K salaries and eliminate $50K-$200K monthly API costs without being commoditized as API integrators or locked into vendor dependencies.",
        founders: "I help technical founders and CTOs build proprietary domain-specific AI models that eliminate 90-99% of API costs, so they can raise funding at 2-3x premium valuations with defensible moats without burning $500K/month on vendor APIs or settling for commodity 'wrapper' business models."
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 1997,
        description: "Complete self-paced mastery with lifetime access to all 9 modules, 80+ videos, 36 hands-on segments, and production code templates.",
        features: [
          "Lifetime access to 40-60 hours of comprehensive video content",
          "36 hands-on coding segments with Shu-Ha-Ri methodology (Learn → Build → Transcend)",
          "Complete code repositories, datasets, and model checkpoints",
          "Production deployment templates and ONNX optimization toolkits",
          "Community forum access with peer support",
          "Monthly group Q&A calls with instructors",
          "Email support (48-hour response time)",
          "Lifetime updates to all course materials",
          "SLM Deployment Checklist and Model Compression Toolkit bonuses"
        ]
      },
      cohort: {
        price: 6997,
        description: "9-week live cohort with 2× weekly sessions, office hours, peer learning, and accountability—master domain SLMs with expert guidance.",
        features: [
          "Everything in Self-Paced PLUS:",
          "18 live 2-hour sessions (Tuesdays/Thursdays) over 9 weeks",
          "Weekly 1-hour office hours every Friday",
          "Private Discord community with 30-50 cohort peers",
          "3 milestone project reviews (weeks 3, 6, 9) with detailed feedback",
          "1:1 mid-program check-in (30 minutes) to ensure you're on track",
          "Career Accelerator Workshop ($497 value) — resume, portfolio, interview prep",
          "Founder's Pitch Deck Template ($297 value) — fundraise with 'owned AI moat' positioning",
          "Alumni network access (400+ SLM architects and founders)",
          "Priority email/Discord support (24-hour response)",
          "Certificate of completion with portfolio showcase"
        ]
      },
      bootcamp: {
        price: 4997,
        description: "Immersive 5-day in-person bootcamp (8-10 hours/day) in major cities—accelerated SLM mastery for time-constrained executives.",
        features: [
          "5 intense days of hands-on instruction (40-50 hours total)",
          "Day 1: Foundation (Transformers, fine-tuning, domain specialization)",
          "Day 2: Optimization (Quantization, compression, performance analysis)",
          "Day 3: Deployment (ONNX runtime, cross-platform execution, edge devices)",
          "Day 4: Advanced Applications (Code generation, biomolecular AI, RAG)",
          "Day 5: Production Systems (Complete pipeline, testing, monitoring, reasoning)",
          "In-person labs every 2 hours with immediate instructor feedback",
          "Catered meals and networking events included",
          "Quarterly bootcamps in SF, NYC, Boston, Seattle",
          "30-day post-bootcamp email support",
          "Bootcamp alumni network access",
          "6-month access to online platform with recordings",
          "SLM Production Toolkit with production-ready templates"
        ]
      },
      founders: {
        price: 19997,
        description: "9-week cohort + 1:1 coaching, architecture review, code review, and deployment support—premium hands-on implementation guidance.",
        features: [
          "Everything in Cohort PLUS:",
          "6× private 1-hour coaching sessions (biweekly) with SLM expert",
          "Custom SLM architecture design for your specific domain/use case",
          "3× detailed code reviews of your implementations with optimization guidance",
          "Hands-on deployment support for your first production SLM",
          "Hiring guidance (for founders): JDs, interview questions, candidate assessment",
          "Career strategy (for engineers): job search, interview prep, salary negotiation",
          "Priority instructor access (24-hour response on Slack/email)",
          "Unlimited support during program + 90-day post-program support",
          "SLM Hiring Playbook ($997 value) — hire and assess SLM talent",
          "Enterprise Sales Kit ($1,497 value) — pitch on-premise AI to Fortune 500"
        ]
      }
    }
  },
  {
    id: "fine-tuning",
    slug: "the-art-of-adaptation",
    name: "Fine-Tune Your Own Models",
    subtitle: "LoRA, QLoRA, and Full Fine-Tuning—Own Your Model Weights",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    price: 1997,
    hook: "Make any model an expert in your domain.",
    description: "Master the art of fine-tuning with LoRA, QLoRA, and full fine-tuning approaches.",
    outcomes: ["Master LoRA and QLoRA techniques", "Create high-quality training datasets", "Evaluate fine-tuned models properly", "Deploy specialized models"],
    hours: 25,
    modules: 8,
    technologies: ["PEFT", "LoRA", "Axolotl", "Weights & Biases"],
    curriculum: [{title: "Fine-Tuning Mastery", lessons: ["When to Fine-Tune", "Dataset Preparation", "LoRA Architecture", "Evaluation"]}],
    instructor: {name: "Dr. Lee", title: "AI Architect & Educator", bio: "Former ML lead at a Fortune 500 company."},
    faqs: []
  },
  {
    id: "10x-developer",
    slug: "the-10x-developer",
    name: "AI-Augmented Engineering",
    subtitle: "Amplifying Developer Impact with Intelligent Tools",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    price: 1497,
    hook: "Code 10x faster without losing quality.",
    description: "Master AI pair programming and multiply your output without sacrificing code quality.",
    outcomes: ["Master AI pair programming", "Build custom coding workflows", "Automate repetitive tasks", "Review and refactor with AI"],
    hours: 20,
    modules: 7,
    technologies: ["Claude", "Cursor", "GitHub Copilot", "Cody"],
    curriculum: [{title: "AI-Assisted Development", lessons: ["Effective Prompting for Code", "Review and Refactoring", "Test Generation", "Documentation"]}],
    instructor: {name: "Dr. Lee", title: "AI Architect & Educator", bio: "Former ML lead at a Fortune 500 company."},
    faqs: []
  },
  {
    id: "automated-insights",
    slug: "automated-insights",
    name: "Automated Insights",
    subtitle: "AI-Driven Analytics for Strategic Decision-Making",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    price: 1797,
    hook: "Cut your analysis time by 75%. Do more work, faster, with better results.",
    description: "Whether you're a data novice or an experienced analyst looking to do more work faster, generative AI can transform your analytics workflow. This masterclass teaches you to use ChatGPT and other AI tools to simplify and speed up every step of data analysis—from data cleaning and exploration to statistical inference, text mining, and report generation. You'll learn to write effective prompts, generate code for complex analyses, and develop intuition about the risks that still come with AI tools. The result: dramatically faster analysis with reliable, high-quality outputs.",
    outcomes: [
      "Write great prompts for ChatGPT and other generative AI tools",
      "Perform end-to-end descriptive and inferential analytics with AI assistance",
      "Set up an AI-friendly data analytics environment",
      "Evaluate and ensure data quality with AI-generated code",
      "Develop strategic analysis plans using AI collaboration",
      "Generate code to analyze both structured and text data",
      "Perform sentiment analysis, text summarization, and topic modeling",
      "Prepare reliable reports and presentations with AI assistance",
      "Understand and mitigate AI risks in analytics workflows"
    ],
    hours: 35,
    modules: 8,
    technologies: ["Python", "ChatGPT", "Pandas", "OpenAI API", "Scikit-learn", "NLTK", "Hugging Face"],
    curriculum: [
      {
        title: "Module 1: Introduction to Generative AI in Data Analytics",
        lessons: [
          "Executive Overview: How AI Accelerates Analytics Workflows",
          "Inherent Limitations of Generative AI Models",
          "Generative AI in the Data Analytics Flow",
          "The Complementarity of LLMs and Traditional Analytics Tools",
          "Getting Started: Web Interface, API, and Local LLMs",
          "Beware of Tokens: Understanding Context Limits",
          "Best Practices for Successful AI Implementation"
        ]
      },
      {
        title: "Module 2: Using Generative AI for Data Quality",
        lessons: [
          "Quality Assessment Structure",
          "Data Cleaning Steps with AI Assistance",
          "Removing Duplicates",
          "Handling Missing Values",
          "Correcting Data Entry Errors",
          "Data Validation",
          "Exploratory Data Analysis Elements",
          "Time Series Exploration",
          "Harmonizing Data from Multiple Sources"
        ]
      },
      {
        title: "Module 3: Descriptive Analysis and Statistical Inference",
        lessons: [
          "Formulating Research Questions with AI",
          "Analysis Design with AI Collaboration",
          "Descriptive Data Analysis: Category Popularity, Performance, Distributions",
          "Inferential Analysis: When and How to Use",
          "Relationship Analysis: Attributes, Costs, and Outcomes",
          "Performance Comparison Across Segments",
          "Generating Statistical Code from Plain English"
        ]
      },
      {
        title: "Module 4: Using Generative AI for Result Interpretation",
        lessons: [
          "Problem Definition and Framing",
          "Interpreting Category and Performance Analysis",
          "Distribution Analysis Interpretation",
          "Understanding Relationship Results",
          "Translating Statistics into Business Insights",
          "Communicating Findings Effectively"
        ]
      },
      {
        title: "Module 5: Basic Text Mining with Generative AI",
        lessons: [
          "Text Mining in the Era of Generative AI",
          "Generative AI is a Game Changer for Text",
          "Beware of AI Intimidation: Know the Limits",
          "Data Quality for Text Analysis",
          "Frequency Analysis: Common Words and Phrases",
          "Co-occurrence Analysis: What Appears Together",
          "Keyword Search: Generating and Using Keywords",
          "Dictionary-Based Methods: Sentiment and Topics"
        ]
      },
      {
        title: "Module 6: Advanced Text Mining with Generative AI",
        lessons: [
          "Review Analysis at Scale",
          "Sentiment Analysis: Direct, API, and ML Approaches",
          "Sentiment Analysis on Translated Inputs",
          "Multilingual Sentiment with Zero-Shot Models",
          "Text Summarization: ChatGPT vs. Dedicated Libraries",
          "Topic Modeling: Discovering Themes in Text",
          "Comparing Results Across Methods"
        ]
      },
      {
        title: "Module 7: Scaling and Performance Optimization",
        lessons: [
          "Performance Measurement: Time, Throughput, Resources",
          "Improving Code Performance with AI Assistance",
          "Optimizing and Scaling Your Code",
          "Cloud-Based Deployment: What and When",
          "Moving Your Analytics to the Cloud",
          "Code Conversion Between Languages and Frameworks"
        ]
      },
      {
        title: "Module 8: Risk, Mitigation, and Tradeoffs",
        lessons: [
          "The Risks of GenAI in Context",
          "AI Use Policy and Governance",
          "Encouraging Transparency and Accountability",
          "AI Delusion and Hallucination Risks",
          "Mitigating Misinterpretation and Miscommunication",
          "Model Bias and Fairness Risks",
          "Privacy and Security: Data Anonymization and Compliance",
          "Legal and Compliance Considerations",
          "Emergent Risks: Rogue Models and Unknown Unknowns"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His approach: use AI to accelerate your work while understanding the risks."
    },
    faqs: [
      {
        question: "Do I need to be an expert data scientist?",
        answer: "No. If you know basic data analysis concepts and some Python, this course will show you how to use AI to accelerate your work. We explain techniques clearly and provide working code."
      },
      {
        question: "Which AI tools does this cover?",
        answer: "Primarily ChatGPT (web and API), but the principles apply to Claude, Gemini, and other generative AI tools. You'll also learn when to use traditional ML libraries like scikit-learn."
      },
      {
        question: "How much faster will I actually be?",
        answer: "The authors report needing one-third to one-quarter the time they needed before. Your results will vary, but significant speedup is realistic for most analytics tasks."
      },
      {
        question: "What about AI hallucinations and errors?",
        answer: "A full module covers risks and mitigation. You'll learn to validate AI outputs, detect errors, and build workflows that catch problems before they affect your results."
      },
      {
        question: "Will I build something that actually works?",
        answer: "Yes. You'll work through complete analytics projects—from data cleaning through statistical inference, text mining, and report generation—all accelerated by AI."
      },
      {
        question: "Is this just about prompting ChatGPT?",
        answer: "Prompting is part of it, but you'll also learn to use the API programmatically, integrate with Python analytics libraries, and build repeatable AI-assisted workflows."
      }
    ]
  },
  // CITIZEN DEVELOPER
  {
    id: "agentic-automation",
    slug: "agentic-automation",
    name: "Agentic Automation",
    subtitle: "Strategic Workflow Automation for Business Leaders",
    category: "Citizen Developer",
    categoryId: "citizen",
    price: 1497,
    hook: "Your personal AI workforce, no coding required.",
    description: "Build powerful automations without writing code. Connect your tools with AI orchestration.",
    outcomes: ["Automate repetitive workflows", "Build no-code AI agents", "Connect tools with AI orchestration", "Measure and optimize automation ROI"],
    hours: 18,
    modules: 6,
    technologies: ["Zapier AI", "Make.com", "n8n", "ChatGPT"],
    curriculum: [{title: "No-Code Automation", lessons: ["Automation Fundamentals", "AI-Enhanced Workflows", "Tool Integration", "ROI Measurement"]}],
    instructor: {name: "Dr. Lee", title: "AI Architect & Educator", bio: "Former ML lead at a Fortune 500 company."},
    faqs: []
  },
  {
    id: "predictive-insight",
    slug: "predictive-insight",
    name: "Predictive Insight",
    subtitle: "Data-Driven Forecasting for Strategic Decisions",
    category: "Citizen Developer",
    categoryId: "citizen",
    price: 1297,
    hook: "Predict the future with your data.",
    description: "Understand predictive models intuitively and build forecasting dashboards.",
    outcomes: ["Understand predictive models intuitively", "Build forecasting dashboards", "Make data-driven decisions", "Communicate insights effectively"],
    hours: 16,
    modules: 6,
    technologies: ["Excel AI", "Power BI", "ChatGPT", "Claude"],
    curriculum: [{title: "Data Analytics", lessons: ["Statistical Thinking", "Forecasting Basics", "Dashboard Design", "Insight Communication"]}],
    instructor: {name: "Dr. Lee", title: "AI Architect & Educator", bio: "Former ML lead at a Fortune 500 company."},
    faqs: []
  },
  {
    id: "decision-engine",
    slug: "the-decision-engine",
    name: "The Decision Engine",
    subtitle: "Experimental Design for Evidence-Based Strategy",
    category: "Citizen Developer",
    categoryId: "citizen",
    price: 1497,
    hook: "Stop guessing. Start knowing.",
    description: "Design experiments, analyze results, and make confident data-driven decisions.",
    outcomes: ["Design proper experiments", "Analyze results statistically", "Make confident decisions", "Build a culture of experimentation"],
    hours: 15,
    modules: 5,
    technologies: ["Optimizely", "VWO", "Google Optimize", "Mixpanel"],
    curriculum: [{title: "Experimentation", lessons: ["Experiment Design", "Statistical Analysis", "Result Interpretation", "Organizational Culture"]}],
    instructor: {name: "Dr. Lee", title: "AI Architect & Educator", bio: "Former ML lead at a Fortune 500 company."},
    faqs: []
  },
  {
    id: "agentic-sdk",
    slug: "agentic-sdk",
    name: "Agentic SDK",
    subtitle: "Custom AI Agent Development for Business Automation",
    category: "Citizen Developer",
    categoryId: "citizen",
    price: 1997,
    hook: "Scale your team without scaling headcount.",
    description: "Design and deploy AI agents that work like virtual employees.",
    outcomes: ["Design AI agent architectures", "Build custom agent tools", "Orchestrate multi-agent workflows", "Deploy and monitor agents"],
    hours: 22,
    modules: 7,
    technologies: ["OpenAI API", "Claude API", "LangChain", "Zapier"],
    curriculum: [{title: "Agent Development", lessons: ["Agent Design Patterns", "Tool Building", "Workflow Orchestration", "Production Deployment"]}],
    instructor: {name: "Dr. Lee", title: "AI Architect & Educator", bio: "Former ML lead at a Fortune 500 company."},
    faqs: []
  },
  // CITIZEN DEVELOPER (continued)
  {
    id: "vibe-marketing",
    slug: "vibe-marketing",
    name: "Vibe Marketing",
    subtitle: "AI-Powered Marketing Systems That Scale",
    category: "Citizen Developer",
    categoryId: "citizen",
    rarity: "Flagship",
    price: 2997,
    hook: "Marketing that runs while you sleep.",
    description: "Build a fully autonomous marketing system that creates content, manages social media, and optimizes campaigns.",
    outcomes: ["Build AI-powered content pipelines", "Automate social media completely", "Create personalized campaigns at scale", "Measure and optimize autonomously"],
    hours: 35,
    modules: 11,
    technologies: ["ChatGPT", "Jasper", "Buffer", "HubSpot"],
    curriculum: [{title: "Autonomous Marketing", lessons: ["Content Pipeline Design", "Social Media Automation", "Campaign Personalization", "Performance Optimization"]}],
    instructor: {name: "Dr. Lee", title: "AI Architect & Educator", bio: "Former ML lead at a Fortune 500 company."},
    faqs: []
  },
  {
    id: "ai-native-university",
    slug: "the-ai-native-university",
    name: "The AI-Native University",
    subtitle: "Transforming Educational Institutions with AI Infrastructure",
    category: "Citizen Developer",
    categoryId: "citizen",
    price: 1997,
    hook: "Lead the future of education.",
    description: "Transform educational institutions with AI-enhanced curricula and ethical policies.",
    outcomes: ["Design AI-enhanced curricula", "Implement ethical AI policies", "Train faculty on AI tools", "Measure learning outcomes"],
    hours: 24,
    modules: 8,
    technologies: ["LMS Integration", "AI Assessment", "Adaptive Learning", "Analytics"],
    curriculum: [{title: "Educational Transformation", lessons: ["AI Curriculum Design", "Policy Development", "Faculty Training", "Outcome Measurement"]}],
    instructor: {name: "Dr. Lee", title: "AI Architect & Educator", bio: "Former ML lead at a Fortune 500 company."},
    faqs: []
  },
  {
    id: "token-economy",
    slug: "the-token-economy",
    name: "The Token Economy",
    subtitle: "Architecting the Future of Value",
    category: "Citizen Developer",
    categoryId: "citizen",
    rarity: "High Demand",
    price: 1997,
    hook: "Build the financial rails of tomorrow.",
    description: "Design, build, and launch successful token-based ecosystems on the blockchain. From tokenomics to DAOs, learn to create digital assets and decentralized economies that drive real value.",
    outcomes: ["Design sustainable token economics", "Build smart contracts and DAOs", "Launch token-based communities", "Navigate regulatory landscape", "Create incentive systems that drive network effects"],
    hours: 28,
    modules: 10,
    technologies: ["Solidity", "Ethereum", "DeFi Protocols", "DAO Frameworks", "Web3.js"],
    curriculum: [{title: "Token Economics", lessons: ["Beyond Bitcoin: Blockchain Evolution", "The Tokenomics Canvas", "Utility vs Security Tokens", "Incentive Design Psychology", "Governance Models & DAOs", "Launch Playbook", "Community Building"]}],
    instructor: {name: "Dr. Lee", title: "AI Architect & Educator", bio: "Former ML lead at a Fortune 500 company."},
    faqs: []
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map(course => course.slug);
}
