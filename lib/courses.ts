// Course data for all 16 masterclasses
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
    subtitle: "The Visual AI Sovereignty Stack™ — Master Text-to-Image Generation from First Principles",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Extremely Rare",
    price: 1997,
    hook: "Stop using DALL-E 3's API. Build your own image generator instead. The ONLY masterclass teaching text-to-image systems from vision transformers to modern diffusion architectures—own your visual AI, stop renting from OpenAI, Google, and Replicate.",
    description: "Build production text-to-image systems from scratch—from vision transformers and diffusion models to Stable Diffusion and Flux-class architectures. Master the visual AI stack that powers DALL-E 3, Nano Banana Pro, Flux, Ideogram, and cutting-edge generative AI platforms. For AI engineers: Command $250K-$400K salaries with irreplaceable visual AI expertise. For technical founders: Eliminate $100K-$300K/year API costs and build fundable technical moats. 9 modules. Live instruction. From first principles to production deployment.",
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
    modules: 9,
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
    ],
    signatureSolution: {
      stages: [
        {
          title: "PHASE 1: Foundation",
          subtitle: "Vision Transformers & Attention Mechanisms",
          weeks: "Weeks 1-3",
          from: "Using DALL-E 3, Nano Banana Pro, and Flux APIs without understanding the underlying architectures—stuck debugging black boxes with zero customization ability",
          to: "Building complete vision transformer and encoder-decoder architectures from scratch—understanding how images are processed by modern visual AI systems",
          moat: "Vision Transformer Mastery",
          moatDesc: "95% of computer vision engineers only know CNNs. By mastering transformer architectures for vision, you gain access to cutting-edge techniques that power modern visual AI systems.",
          color: "blue"
        },
        {
          title: "PHASE 2: Diffusion & Conditioning",
          subtitle: "Build Diffusion Models & Text-to-Image Systems",
          weeks: "Weeks 4-6",
          from: "No understanding of diffusion mathematics, can't control image generation with text, limited to pre-built models",
          to: "Building DDPM, implementing text conditioning with CLIP, constructing complete text-to-image systems with cross-attention",
          moat: "Text-to-Image Generation Expertise",
          moatDesc: "This is where you build modern text-to-image systems from scratch. Less than 1,000 people globally truly understand these systems end-to-end.",
          color: "purple"
        },
        {
          title: "PHASE 3: Production & Scale",
          subtitle: "Advanced Architectures & Deployment",
          weeks: "Weeks 7-9",
          from: "Models work in notebooks but are too slow for production, no deployment experience, limited to single architecture approach",
          to: "Deploying optimized production visual AI with TensorRT, implementing alternative architectures (VQGAN, CLIP), serving 1000s of requests/hour",
          moat: "Production Visual AI Systems",
          moatDesc: "Most AI practitioners never ship to production. You'll build deployable, profitable visual AI that solves real business problems at scale.",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Module 1: Visual Attention Foundations",
          from: "I understand text transformers but don't know how attention mechanisms work for images—confused by patch embeddings and positional encodings for 2D data",
          to: "I've implemented attention mechanisms for images from scratch, built complete Vision Transformer architectures, understanding patches, embeddings, and multi-head attention",
          moat: "Vision transformer mastery—rare knowledge that separates you from 95% of CV engineers who only know CNNs",
          stage: 1
        },
        {
          title: "Module 2: Transformer Architectures for Vision",
          from: "I've seen ViT for classification but don't understand encoder-decoder architectures for vision or how image captioning models work",
          to: "I've implemented encoder-decoder transformer architectures, built image captioning systems, understanding how attention bridges visual and textual modalities",
          moat: "Multimodal architecture expertise—understanding the 'glue' that 98% of developers skip when building text-to-image systems",
          stage: 1
        },
        {
          title: "Module 3: Diffusion Process Fundamentals",
          from: "I've heard of diffusion models (DALL-E 3, Flux) but don't understand the math, can't explain how noise is added and removed",
          to: "I've built Denoising Diffusion Probabilistic Models (DDPM) from scratch—understanding forward diffusion, reverse diffusion, and noise schedules",
          moat: "DDPM implementation mastery—this alone separates you from 99.5% of developers who only call APIs",
          stage: 2
        },
        {
          title: "Module 4: Advanced Diffusion Engineering",
          from: "My DDPM models are slow and produce mediocre results—don't know how to optimize training or speed up sampling",
          to: "I've mastered DDIM fast sampling, classifier guidance, improved architectures—producing high-quality 512x512 images in seconds",
          moat: "Production diffusion expertise—bridging the gap from academic papers to deployable products",
          stage: 2
        },
        {
          title: "Module 5: Conditional Image Synthesis",
          from: "I can generate random images but can't control generation with text prompts—don't understand text conditioning",
          to: "I've built text-to-image diffusion systems with CLIP/T5 encoding, cross-attention conditioning, and controllable generation",
          moat: "Text-to-image generation mastery—the billion-dollar capability that less than 1,000 people globally understand end-to-end",
          stage: 2
        },
        {
          title: "Module 6: Latent Diffusion Systems",
          from: "My text-to-image models are slow and memory-intensive (512x512 takes 40 seconds)—don't understand latent space",
          to: "I've built latent diffusion architecture with VAE encoding—achieving 8x speed improvements and 16x memory reductions",
          moat: "Latent diffusion mastery—the architectural breakthrough that powers Stable Diffusion, Flux, and modern generative systems",
          stage: 2
        },
        {
          title: "Module 7: Token-Based Visual Generation",
          from: "I only know continuous diffusion models—don't understand discrete token approaches or VQGAN",
          to: "I've implemented VQGAN and autoregressive transformer generation—mastering both diffusion and token-based paradigms",
          moat: "Multi-paradigm expertise—versatility that makes you invaluable as most practitioners only know one approach",
          stage: 3
        },
        {
          title: "Module 8: Multimodal Understanding with CLIP",
          from: "I don't understand how CLIP aligns text and images or why it's critical for text-to-image models",
          to: "I've built CLIP from scratch—dual encoders, contrastive loss, and understanding how CLIP powers modern multimodal systems",
          moat: "Multimodal AI foundations—knowledge that unlocks entire categories of AI products beyond just image generation",
          stage: 3
        },
        {
          title: "Module 9: Production Visual AI Systems",
          from: "My models work in notebooks but are too slow, memory-intensive, and unstable for production",
          to: "I've deployed production visual AI with TensorRT/ONNX optimization, built scalable APIs, implemented monitoring and cost control",
          moat: "Production deployment mastery—the rarest skill that most AI practitioners never achieve, transforming research into profit",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help AI engineers build production text-to-image systems from scratch—from vision transformers to latent diffusion—so they can command $250K-$400K salaries as visual AI architects without being limited to API integration skills that commoditize their careers.",
        founders: "I help technical founders build proprietary visual AI systems that eliminate $100K-$300K/year API costs and create 12-24 month technical moats, so they can raise Series A at premium valuations without hearing 'you're just an API wrapper' from every investor."
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 1997,
        description: "Complete text-to-image generation mastery at your own pace. Build DALL-E 3, Nano Banana Pro, Flux, and modern diffusion systems from first principles.",
        features: [
          "All 9 modules (45+ hours of video)",
          "Complete PyTorch implementations",
          "Lifetime access to all content",
          "Private Discord community",
          "Monthly live office hours",
          "All future updates included",
          "Certificate of completion"
        ]
      },
      cohort: {
        price: 6997,
        description: "9-Week Live Cohort",
        features: [
          "Everything in Self-Paced PLUS:",
          "9 weekly 3-hour live workshops",
          "Direct access to Dr. Lee (24-hour response)",
          "Weekly code reviews on your implementations",
          "2x 30-minute 1:1 architecture consultations",
          "Pair programming with cohort peers",
          "Job board access (companies hiring visual AI engineers)",
          "Alumni network (500+ engineers and founders)",
          "Cohort session recordings",
          "Resume/LinkedIn review (engineers) or pitch deck review (founders)"
        ]
      },
      bootcamp: {
        price: 9997,
        description: "5-Day Intensive Bootcamp",
        features: [
          "5 full days (Monday-Friday, 8am-6pm)",
          "50 hours of instruction + hands-on building",
          "Maximum 15 participants (high-touch instruction)",
          "Build production system by Friday",
          "Deploy on AWS/GCP with autoscaling",
          "1:1 architecture review with Dr. Lee (60 min)",
          "90 days post-bootcamp support",
          "Catered meals + networking dinner",
          "Lifetime access to self-paced course",
          "Certificate of completion"
        ]
      },
      founders: {
        price: 19997,
        description: "Founder's Edition",
        features: [
          "Everything in 9-Week Cohort PLUS:",
          "3 additional 1:1 sessions with Dr. Lee (60 min each)",
          "Custom visual AI architecture for your product",
          "Pitch deck technical section review",
          "'Technical Moat' narrative development",
          "Train up to 5 engineers on your team",
          "6 months of email/Slack support",
          "Monthly check-ins (30 min) for 6 months",
          "Priority response time (<12 hours)",
          "Hiring support (job descriptions, interview questions)",
          "Case study feature opportunity"
        ]
      }
    }
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
    price: 1497,
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
    signatureSolution: {
      stages: [
        {
          title: "PHASE 1: Foundation",
          subtitle: "Agent Infrastructure & Coordination Fundamentals",
          weeks: "Weeks 1-3",
          from: "Using frameworks like LangChain/AutoGPT without understanding, building single agents only, framework-dependent implementations",
          to: "Building complete agent infrastructure from scratch, understanding tool orchestration and processing loops, owning the agent architecture",
          moat: "Agent Infrastructure Mastery",
          moatDesc: "Ability to design and build autonomous agent systems without framework dependency—understanding tools, LLM integration, and ReAct loops at the architectural level",
          color: "blue"
        },
        {
          title: "PHASE 2: Enhancement",
          subtitle: "MCP Protocol, Research Agents & Human-in-the-Loop",
          weeks: "Weeks 4-6",
          from: "Custom tool integrations only, basic single-purpose agents, no human oversight capabilities",
          to: "MCP-compatible agents, production research workflows, human-in-the-loop patterns for critical decisions",
          moat: "Production Agent Capabilities",
          moatDesc: "Building agents that integrate with tool ecosystems, handle complex research workflows, and include appropriate human oversight for business-critical operations",
          color: "purple"
        },
        {
          title: "PHASE 3: Coordination",
          subtitle: "Memory, Multi-Agent Systems & Production Deployment",
          weeks: "Weeks 7-9",
          from: "Stateless single agents, no coordination between agents, local deployments only",
          to: "Multi-agent coordination with A2A protocols, shared memory systems, production-scale deployments with monitoring",
          moat: "Multi-Agent Systems Architecture",
          moatDesc: "Enterprise-ready multi-agent architectures with coordinated agent teams, shared state management, and production deployment expertise",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Module 1: Agent Foundations & Tool Integration",
          from: "Call APIs and chain prompts without understanding agent autonomy or tool architecture fundamentals",
          to: "Built complete tool orchestration system with BaseTool architecture, function tools, and Pydantic validation—understanding exactly how agents interact with tools",
          moat: "Tool integration foundation—ability to integrate ANY API, database, or system as agent-accessible tools without framework limitations",
          stage: 1
        },
        {
          title: "Module 2: LLM Integration & Inference Control",
          from: "Call LLM APIs with default settings, tightly coupled to specific providers, no understanding of inference control",
          to: "Built BaseLLM abstraction working with any provider (Ollama, OpenAI, Anthropic), full control over inference parameters, streaming, and error handling",
          moat: "Provider abstraction expertise—ability to implement custom LLM integrations including local/on-premise models for zero API dependency",
          stage: 1
        },
        {
          title: "Module 3: Agent Architecture & Processing Loops",
          from: "Chain prompts manually with no structured agent loop, ad-hoc code that breaks on edge cases",
          to: "Built complete agent class with ReAct processing loop (Reason → Act → Observe), error handling, retry logic, and termination conditions for autonomous operation",
          moat: "ReAct architecture mastery—deep understanding of loop mechanics, termination, and error recovery that enables 95%+ reliability",
          stage: 1
        },
        {
          title: "Module 4: MCP Protocol Mastery",
          from: "Don't understand MCP or why it matters, custom tools incompatible with ecosystem standards",
          to: "Implemented complete MCP compatibility—agents discover, connect to, and use any MCP-compatible tool server, understanding client-server architecture and protocol specifications",
          moat: "MCP protocol expertise—positioning as expert in emerging agent infrastructure layer commanding premium compensation",
          stage: 2
        },
        {
          title: "Module 5: Research Agent Implementation",
          from: "Basic single-shot agents with no multi-step workflow capability, can't handle complex research tasks",
          to: "Built complete research agent with web search, data extraction, multi-source synthesis, citation tracking, and structured report generation",
          moat: "Research workflow mastery—building agents that handle complex information gathering and synthesis workflows end-to-end",
          stage: 2
        },
        {
          title: "Module 6: Human-in-the-Loop Patterns",
          from: "Fully autonomous agents with no human oversight or approval mechanisms, inappropriate for business-critical decisions",
          to: "Implemented HITL patterns: approval gates, confidence thresholds, escalation workflows, and human override capabilities for production safety",
          moat: "Production safety expertise—designing agent systems appropriate for business-critical operations with proper human oversight",
          stage: 2
        },
        {
          title: "Module 7: Memory Systems & State Management",
          from: "Stateless agents with no memory between executions, can't learn from experience or maintain context",
          to: "Built memory systems (episodic, semantic, procedural, shared) enabling agents to remember, learn, and improve over time",
          moat: "Memory architecture mastery—building agents that maintain state, share context, and coordinate through shared memory",
          stage: 3
        },
        {
          title: "Module 8: Multi-Agent Coordination with Agent2Agent",
          from: "Single-agent limitations, no ability to coordinate multiple agents, monolithic agent systems",
          to: "Implemented Agent2Agent (A2A) communication protocols—message passing, task delegation, result aggregation, and coordination patterns (hierarchical, peer-to-peer)",
          moat: "Multi-agent coordination mastery—building specialized agent teams that collaborate to solve complex problems no single agent can handle",
          stage: 3
        },
        {
          title: "Module 9: Production Multi-Agent Systems",
          from: "Local-only deployments, no monitoring, no production-scale deployment experience, unpredictable production behavior",
          to: "Production-deployed multi-agent systems with observability, monitoring, error handling, and scaling—reliable operation serving real users with 95%+ success rates",
          moat: "Production deployment mastery—operating coordinated multi-agent systems at scale with reliability and continuous improvement",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help AI engineers and ML practitioners master production multi-agent systems from first principles, so they can command $250K-$400K+ salaries as irreplaceable multi-agent architects—without being dependent on frameworks that turn their skills into commodities.",
        founders: "I help technical founders and CTOs build proprietary multi-agent infrastructure from first principles, so they can eliminate $500K-$2M/year in API costs and raise seed rounds at 10-15x revenue multiples—without hiring $300K+ ML engineers or spending 12-18 months on R&D."
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 1497,
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
        price: 5997,
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
          "Job board access (companies hiring multi-agent engineers)",
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
        price: 17997,
        description: "Founder's Edition",
        features: [
          "Everything in 9-Week Cohort",
          "3x additional 1:1 strategy sessions (60 min each)",
          "Custom multi-agent architecture for your company",
          "Business-focused capstone implementation",
          "Pitch deck review (present your moat to VCs)",
          "Fundraising strategy consultation",
          "Team training support (up to 5 people)",
          "Priority access to instructor",
          "6 months of email support post-cohort",
          "Introductions to VC network"
        ]
      }
    },
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
    subtitle: "Build Your Own MLOps Platform—Ship ML Reliably at Scale",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    price: 997,
    hook: "Stop using AWS SageMaker's APIs. Build your own MLOps platform instead. The ONLY masterclass teaching production ML infrastructure from Kubernetes orchestration to automated deployment—own your platform, stop renting from AWS, Google, and managed services.",
    description: "Most ML models never make it to production—they rot in Jupyter notebooks because data scientists don't understand Docker, Kubernetes, or deployment pipelines. This masterclass teaches you to build production-grade MLOps platforms from scratch—from Kubernetes orchestration and Docker containerization to automated deployment with Kubeflow, experiment tracking with MLflow, and model serving with BentoML. Master the ML platform engineering that powers Netflix, Uber, and Airbnb. For ML engineers: Command $200K-$350K salaries with production deployment expertise. For technical founders: Eliminate $300K-$800K/year in infrastructure costs and build fundable technical systems. This is not another course on using managed platforms. This is executive business education (Harvard/MIT/Stanford caliber) merged with a masterclass for tech founders and AI leaders. Using the DrLee.AI Shu-Ha-Ri learning method, you'll go from notebook scientist to platform builder in 9 transformative steps. Each module begins with a TedTalk-style presentation, then you immediately build it yourself with hands-on coding. You'll construct a complete MLOps platform with Kubernetes, orchestrate pipelines with Kubeflow, deploy models with BentoML, and monitor everything with Prometheus and Grafana—with zero dependency on AWS SageMaker or Google Vertex AI. By the end, you won't just understand how production ML works—you'll own infrastructure that becomes your competitive moat. This masterclass is for the 1% who want to BUILD production ML platforms like Netflix and Uber—not those who want to be consumers of managed services.",
    outcomes: [
      "Set up a complete MLOps platform from scratch using open source tools (Kubernetes, Kubeflow, MLflow, BentoML)",
      "Deploy machine learning models to production with <100ms latency and 99.9% uptime",
      "Build end-to-end automated ML pipelines with Kubeflow orchestration",
      "Implement experiment tracking and model versioning with MLflow Model Registry",
      "Create feature stores for consistent feature engineering with Feast",
      "Orchestrate complex ML workflows with Kubeflow Pipelines and DAG execution",
      "Deploy and serve models at scale with BentoML (handling millions of predictions/day)",
      "Monitor model performance and detect data drift with Evidently in real-time",
      "Implement proper CI/CD for ML systems with GitLab CI and Argo CD"
    ],
    hours: 45,
    modules: 9,
    technologies: ["Docker", "Kubernetes", "Kubeflow", "MLflow", "BentoML", "Evidently", "Feast", "Argo CD", "Prometheus", "Grafana"],
    curriculum: [
      {
        title: "Module 1: Production ML Fundamentals & The MLOps Lifecycle",
        lessons: [
          "Executive Overview: Why 87% of ML Projects Never Reach Production",
          "The Complete ML Lifecycle: From Data Collection to Continuous Monitoring",
          "Skills Bridging Data Science and Infrastructure Engineering",
          "Build vs. Buy Decision Framework for ML Platforms",
          "MLOps Maturity Assessment: Level 0 to Level 2 Progression",
          "DevOps vs. MLOps: Why ML Requires Different Infrastructure",
          "Tools and Infrastructure Stack Overview: Kubernetes, Kubeflow, MLflow, BentoML"
        ]
      },
      {
        title: "Module 2: Containerization & Kubernetes Orchestration",
        lessons: [
          "Docker Fundamentals: Writing Dockerfiles for ML Applications",
          "Building and Optimizing Docker Images for Production",
          "Kubernetes Architecture Deep Dive: Clusters, Nodes, Pods, and Services",
          "Kubectl Mastery: Managing Kubernetes from Command Line",
          "Kubernetes Objects: Deployments, Services, ConfigMaps, Secrets",
          "Networking and Service Discovery for ML Workloads",
          "Helm Charts: Package Management and Infrastructure as Code",
          "CI/CD for ML: GitLab CI and Argo CD Implementation",
          "Prometheus and Grafana: Infrastructure Monitoring Stack"
        ]
      },
      {
        title: "Module 3: Experiment Tracking & Feature Engineering",
        lessons: [
          "MLflow for Complete Experiment Tracking: Parameters, Metrics, Artifacts",
          "Data Exploration and Analysis Best Practices",
          "MLflow Model Registry: Versioning, Staging, and Production Promotion",
          "Feast Feature Store: Registering and Managing Features",
          "Feature Retrieval: Online vs. Offline Feature Stores",
          "Real-Time Feature Serving with Feast Server",
          "Feast UI: Feature Discovery and Governance",
          "Integrating Experiment Tracking with Feature Engineering Workflows"
        ]
      },
      {
        title: "Module 4: Workflow Orchestration with Kubeflow",
        lessons: [
          "Why Pipeline Orchestration is Critical for Production ML",
          "Kubeflow Architecture: Components, Pipelines, and Workflows",
          "Building Modular Pipeline Components with Clear Input/Output Contracts",
          "Creating ML Pipeline DAGs: Dependency Graphs and Parallel Execution",
          "Data Passing Strategies: Small Values vs. Large Datasets",
          "Building an Income Classifier Pipeline from Scratch",
          "Pipeline Monitoring: Tracking Execution and Debugging Failures",
          "Reusable Component Libraries for Team Collaboration"
        ]
      },
      {
        title: "Module 5: Model Deployment & Serving Infrastructure",
        lessons: [
          "Why Model Deployment is Hard: Challenges and Solutions",
          "BentoML Service Architecture: Services and Runners",
          "Building Bentos: Packaging Models for Production Deployment",
          "Loading Models with BentoML Runner from MLflow Registry",
          "Deploying Bentos to Kubernetes at Scale",
          "Model Serving Optimization: Latency, Throughput, and Batching",
          "BentoML with MLflow Integration: End-to-End Workflow",
          "KServe Alternative: When to Use Different Serving Platforms",
          "Evidently for Data Drift Monitoring and Detection"
        ]
      },
      {
        title: "Module 6: Production Data Engineering for ML",
        lessons: [
          "Launching Kubeflow Notebook Servers with Custom Environments",
          "Workspace and Data Volume Management for Collaboration",
          "Creating Custom Notebook Docker Images with Dependencies",
          "Efficient Data Passing: Simple Values, Paths, and Artifacts",
          "MinIO S3-Compatible Object Storage for Training Data",
          "Data Quality Validation and Early Failure Detection",
          "Project: Data Preparation Pipeline for Object Detection",
          "Project: Data Preparation Pipeline for Movie Recommender"
        ]
      },
      {
        title: "Module 7: Distributed Training Pipelines",
        lessons: [
          "GPU Resource Management and Scheduling in Kubernetes",
          "Training on Custom Datasets: Data Loading and Preprocessing",
          "Model Checkpointing and Fault Tolerance for Long Training Runs",
          "TensorBoard Integration: Real-Time Training Visualization",
          "Automated Hyperparameter Optimization with Kubeflow Katib",
          "Building Modular Training Components for Multiple Architectures",
          "Training Object Detection Models with YOLO on Custom Data",
          "Downloading and Managing Data with MinIO in Training Pipelines"
        ]
      },
      {
        title: "Module 8: Advanced Training & Model Validation",
        lessons: [
          "VolumeOp for Persistent Data Storage Across Pipeline Runs",
          "Advanced Data Splitting: Time-Based, Stratified, and K-Fold Strategies",
          "Domain-Specific Metrics: Precision, Recall, F1, AUC-ROC, Business KPIs",
          "MLflow Experiment Comparison: Analyzing Metrics Across Runs",
          "Model Registry Lifecycle Management: Staging Gates and Approvals",
          "Pre-Production Inference Testing: Validating Models Before Deployment",
          "Creating Training and Validation Kubeflow Components",
          "Building Complete Training Pipelines with Automated Validation"
        ]
      },
      {
        title: "Module 9: Monitoring, Drift Detection & Explainability",
        lessons: [
          "Basic Monitoring with Prometheus: Request Rates, Latency, Errors",
          "Custom ML Metrics: Prediction Distribution, Confidence Scores, Feature Statistics",
          "Centralized Logging Infrastructure for Distributed ML Systems",
          "Alerting Strategies: When to Notify Teams of Production Issues",
          "Evidently Drift Detection: Automated Data and Model Drift Monitoring",
          "Building Drift Detection Dashboards and Alerting Pipelines",
          "Model Explainability: SHAP, LIME, and Domain-Specific Techniques",
          "Capstone: Your Complete MLOps Platform in Production"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His approach: build the complete infrastructure yourself to truly understand production ML."
    },
    signatureSolution: {
      stages: [
        {
          title: "PHASE 1: Foundation Infrastructure",
          subtitle: "MLOps Foundations, Kubernetes & Feature Engineering",
          weeks: "Weeks 1-3",
          from: "Our ML works locally but we can't deploy it anywhere—DevOps teams reject our code as 'not production-ready'",
          to: "We've built a complete Kubernetes-based ML infrastructure from scratch with experiment tracking, feature stores, and container orchestration",
          moat: "Production Infrastructure Mastery",
          moatDesc: "Only 5% of ML engineers can build Kubernetes-based ML platforms from scratch. This foundational capability separates you from notebook-only data scientists.",
          color: "blue"
        },
        {
          title: "PHASE 2: Pipeline Automation",
          subtitle: "Kubeflow Orchestration, Deployment & Data Engineering",
          weeks: "Weeks 4-6",
          from: "Deploying a model takes our team 3 weeks of manual work—no automation, no consistency, constant failures",
          to: "We deploy ML models to production automatically in under an hour using Kubeflow pipelines and BentoML serving",
          moat: "End-to-End Automation",
          moatDesc: "Automated ML deployment worth $500K/year in velocity. Companies that ship models daily outcompete those waiting weeks for manual deployment.",
          color: "purple"
        },
        {
          title: "PHASE 3: Operational Excellence",
          subtitle: "Training at Scale, Validation & Production Monitoring",
          weeks: "Weeks 7-9",
          from: "Our models degrade silently and we find out from angry users—no monitoring, no drift detection, no observability",
          to: "We monitor drift in real-time, retrain automatically, and maintain 99.9% uptime with comprehensive Prometheus/Grafana/Evidently monitoring",
          moat: "Netflix-Level ML Reliability",
          moatDesc: "Production operations at scale—the capability to serve millions of predictions per day reliably while competitors' models break in production.",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Module 1: Production ML Fundamentals & The MLOps Lifecycle",
          from: "I understand ML algorithms but have no idea how to deploy them to production—my models work in notebooks but DevOps rejects them",
          to: "I've built the complete MLOps lifecycle from data ingestion through monitoring, understand maturity levels, and can design production workflows from first principles",
          moat: "Strategic MLOps architecture knowledge—you understand WHEN and HOW to apply production practices, separating you from 90% of data scientists who only know algorithms",
          stage: 1
        },
        {
          title: "Module 2: Containerization & Kubernetes Orchestration",
          from: "I've heard of Docker and Kubernetes but never used them—deploying my Python code to a server feels like black magic",
          to: "I've built complete Kubernetes applications from scratch, can write Dockerfiles, deploy to clusters, manage networking, orchestrate with Helm, and implement CI/CD",
          moat: "Container orchestration expertise—the foundation of modern ML infrastructure that 85% of data scientists lack entirely",
          stage: 1
        },
        {
          title: "Module 3: Experiment Tracking & Feature Engineering",
          from: "I run hundreds of experiments and lose track of results—I re-engineer the same features across projects because there's no central repository",
          to: "I've implemented MLflow for complete experiment tracking and model registry, built Feast feature stores providing consistent features across training and serving",
          moat: "Reproducible ML systems with centralized feature management—infrastructure that prevents data leakage and ensures consistency worth millions in avoided failures",
          stage: 1
        },
        {
          title: "Module 4: Workflow Orchestration with Kubeflow",
          from: "My ML pipelines are scripts I run manually in order—failures mean starting from scratch, no visibility into what's running",
          to: "I've built complete Kubeflow pipelines orchestrating data preprocessing, training, validation, and deployment with automatic retries and visual DAG monitoring",
          moat: "Workflow orchestration at scale—automated pipelines that would cost $200K/year in engineering time to build and maintain manually",
          stage: 2
        },
        {
          title: "Module 5: Model Deployment & Serving Infrastructure",
          from: "I train models but deploying them as APIs is a multi-week DevOps nightmare—scaling is manual, latency is unpredictable, rollbacks break everything",
          to: "I've deployed production ML serving with BentoML providing <50ms latency, automatic scaling, and instant rollbacks, integrated with MLflow model registry",
          moat: "Production model serving expertise—the capability to serve millions of predictions per day reliably, worth $300K/year in platform costs avoided",
          stage: 2
        },
        {
          title: "Module 6: Production Data Engineering for ML",
          from: "Data preparation is a tangled mess of notebooks—data quality issues break training, I can't efficiently pass datasets between pipeline stages",
          to: "I've built production data pipelines with Kubeflow notebooks, MinIO object storage, data quality checks, and reusable preprocessing components",
          moat: "Production data engineering for ML—the capability to process terabytes of data reliably for model training, worth $250K/year in data engineer hiring costs",
          stage: 2
        },
        {
          title: "Module 7: Distributed Training Pipelines",
          from: "Training takes days on my laptop—I can't utilize GPUs efficiently, hyperparameter tuning is manual, failed runs waste hours of compute",
          to: "I've built distributed training pipelines on Kubernetes with GPU scheduling, automated hyperparameter search, TensorBoard monitoring, and fault tolerance",
          moat: "Distributed training infrastructure—the capability to train models 100x faster than laptop-bound data scientists, worth $400K/year in compute optimization",
          stage: 3
        },
        {
          title: "Module 8: Advanced Training & Model Validation",
          from: "Model validation is running accuracy on a test set and calling it done—I don't understand domain-specific metrics or proper validation strategies",
          to: "I've implemented comprehensive model validation with domain-specific metrics, stratified splitting, automated model comparison, and seamless MLflow registry integration",
          moat: "Rigorous validation infrastructure—preventing bad model deployments that could cost millions in business impact, while accelerating iteration 5x",
          stage: 3
        },
        {
          title: "Module 9: Monitoring, Drift Detection & Explainability",
          from: "Models degrade silently over months—users complain before we know there's a problem, no drift detection, no explainability, no alerting",
          to: "I've implemented comprehensive ML monitoring with Prometheus, Evidently drift detection, explainability tools, and alerting—99.9% uptime with proactive issue detection",
          moat: "Production ML observability—Netflix-level reliability worth millions in prevented downtime and customer trust",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help ML engineers build production-grade MLOps platforms from scratch—from Kubernetes orchestration to automated deployment—so they can command $200K-$350K roles as ML infrastructure architects without being dismissed as 'notebook scientists who can't ship to production.'",
        founders: "I help technical founders build production MLOps platforms that eliminate $300K-$800K/year in hiring costs and create defensible infrastructure moats, so they can raise Series A with 'we ship ML reliably at scale' positioning without hearing 'your models aren't production-ready' from every technical investor."
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 997,
        description: "Complete production ML infrastructure mastery at your own pace. Build Netflix-scale MLOps platforms from Kubernetes to automated deployment.",
        features: [
          "All 9 modules (45+ hours of video)",
          "Complete code repositories for every module",
          "Downloadable infrastructure templates (Kubernetes YAML, Helm charts)",
          "Lifetime access to all content and updates",
          "Private Discord community access",
          "Monthly group Q&A sessions (recorded)",
          "Certificate of completion"
        ]
      },
      cohort: {
        price: 3997,
        description: "9-Week Live Cohort",
        features: [
          "Everything in Self-Paced PLUS:",
          "9 live weekly sessions (3 hours each) with Dr. Lee",
          "Live coding demonstrations and Q&A",
          "Weekly homework with personalized code review",
          "Private cohort-only Slack channel",
          "1:1 office hours (30 minutes, 2x per cohort)",
          "Graduation project: deploy your own production ML system",
          "Job search support (resume review, interview prep) for engineers",
          "Investor pitch support (technical slides, architecture diagrams) for founders",
          "Lifetime access to all future cohort recordings"
        ]
      },
      bootcamp: {
        price: 9997,
        description: "5-Day Intensive Bootcamp",
        features: [
          "Everything in Cohort PLUS:",
          "5 consecutive days, 8 hours/day (40 hours total)",
          "Intensive hands-on implementation (70% coding, 30% instruction)",
          "Daily 1:1 code reviews (30 minutes per day)",
          "Architecture consultation for your specific use case",
          "Custom infrastructure templates for your organization",
          "Post-bootcamp implementation support (2 weeks Slack access)",
          "Recorded sessions for your team",
          "Production ML Certification (industry-recognized credential)"
        ]
      },
      founders: {
        price: 19997,
        description: "Founder's Edition (1:1 Implementation)",
        features: [
          "Everything in Bootcamp PLUS:",
          "12 weeks of 1:1 implementation support (2 hours/week, 24 hours total)",
          "Custom ML platform architecture design for your organization",
          "Technology stack selection consulting",
          "Infrastructure cost optimization analysis",
          "Hiring/team building guidance (what roles to hire, when)",
          "Code review of your production systems (unlimited during 12 weeks)",
          "Strategic consulting on ML platform roadmap",
          "Investor presentation support (technical architecture slides)",
          "Quarterly check-ins for 1 year post-program",
          "Private advisory board access (quarterly meetups)"
        ]
      }
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
  // CITIZEN DEVELOPER
  {
    id: "agentic-sdk",
    slug: "agentic-sdk",
    name: "Build Your Own Synthetic Employees",
    subtitle: "Build Your AI Team That Works Together 24/7—Own Your Intelligence Infrastructure",
    category: "Citizen Developer",
    categoryId: "citizen",
    rarity: "Flagship",
    price: 997,
    hook: "Stop renting AI from OpenAI. Build your own team of synthetic employees—a Legal Advisor, Financial Analyst, and Operations Manager working together 24/7—that know YOUR business, connect to YOUR systems, and save $200K-$500K annually without hiring consultants or risking sensitive data with third-party services.",
    description: "Imagine having a team of expert employees who have read every book ever written, studied every case in your legal domain, analyzed every financial model, reviewed every operational framework—working together 24/7 at pennies on the dollar. That's what you're building. This masterclass teaches you to take frontier AI (trained on all human knowledge) and transform it into a team of synthetic employees that collaborate to provide expert decision support. You'll build a Legal Advisor to review contracts, a Financial Analyst to evaluate deals, an Operations Manager to optimize processes—all working together seamlessly. But unlike consultants who just give advice, your synthetic team EXECUTES—they read contracts, update your CRM, pull invoices from your accounting system, extract data automatically, and analyze deals in real-time. You're not learning to prompt better. You're learning to build an AI workforce that knows YOUR business, accesses YOUR systems, remembers every interaction, and executes decisions together as a coordinated team—replacing $200K-$500K in consultant spend while making faster, better-informed strategic decisions. The smartest technology ever created, customized for your specific business, working as your personal team.",
    outcomes: [
      "Build a team of synthetic employees (Legal Advisor, Financial Analyst, Operations Manager) that collaborate to provide expert decision support",
      "Build your AI workforce instead of renting from OpenAI ($200K-$500K annual savings)",
      "Create agents that remember every conversation, analyze documents, and maintain perfect context across your entire business",
      "Automatically extract data from contracts, invoices, and documents—feeding directly into your CRM and accounting systems with zero manual data entry",
      "Connect your synthetic employees to all your business systems (CRM, accounting software, document storage)",
      "Have multiple AI specialists work together in parallel—Legal reviews contracts while Finance analyzes deals while Operations optimizes workflows",
      "Implement business controls: who can do what, spending limits, approval workflows, complete audit trails for compliance",
      "Automate complete business processes from start to finish (month-end financial close, compliance reviews, deal approvals)",
      "Deploy across your entire organization—business users can interact through web interface without technical knowledge",
      "Scale infinitely without hiring—handle 10x workload with the same AI workforce at marginal cost"
    ],
    hours: 45,
    modules: 9,
    technologies: ["Claude Agent SDK", "TypeScript/Python", "MCP Protocol", "React", "Zod", "OAuth"],
    curriculum: [
      {
        title: "Foundation - Your First Synthetic Employee",
        lessons: [
          "Agent SDK Overview & Installation",
          "Building Your First Decision Support Agent",
          "System Prompts for Business Domains",
          "Session Management & Streaming"
        ]
      },
      {
        title: "Memory & Context - Teaching Your Employee to Remember",
        lessons: [
          "Implementing Session Persistence",
          "Document Upload & Analysis (PDFs, Images)",
          "Forking Sessions for Scenario Planning",
          "Context Compaction Strategies"
        ]
      },
      {
        title: "Structured Intelligence - Getting Reliable Data",
        lessons: [
          "JSON Schema for Business Data",
          "Zod Type Safety & Validation",
          "Database Integration Patterns",
          "Error Handling & Recovery"
        ]
      },
      {
        title: "Custom Capabilities - Teaching New Skills",
        lessons: [
          "Creating Custom MCP Tools",
          "API Integration (CRM, ERP, Accounting)",
          "OAuth Authentication Patterns",
          "Building Business Intelligence Toolkit"
        ]
      },
      {
        title: "Delegation & Specialization - Building Your AI Team",
        lessons: [
          "Designing Specialized Subagents",
          "Tool Restrictions for Security",
          "Parallel Multi-Agent Orchestration",
          "Building Role-Based Agent Libraries"
        ]
      },
      {
        title: "Control & Security - Keeping Your AI Accountable",
        lessons: [
          "Permission Systems & Governance",
          "Cost Tracking & Budget Controls",
          "Approval Workflows for Sensitive Operations",
          "Audit Trails for Compliance"
        ]
      },
      {
        title: "Workflows & Automation - Orchestrating Complex Processes",
        lessons: [
          "Custom Slash Commands for Workflows",
          "Autonomous Agent Skills",
          "Todo Tracking for Transparency",
          "Multi-Agent Process Orchestration"
        ]
      },
      {
        title: "Integration & Scale - Connecting to the Enterprise",
        lessons: [
          "Remote MCP Server Configuration",
          "Multi-System Integration via MCP",
          "OAuth Flows & Token Management",
          "Resilience Patterns & Failovers"
        ]
      },
      {
        title: "Production & Mastery - Deploying for Real Business Impact",
        lessons: [
          "Container-Based Deployment",
          "React UI for Business Users",
          "Monitoring & Optimization",
          "Self-Service Agent Platform"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Creator of 21 Masterclasses",
      bio: "Former ML lead at Fortune 500. Built production AI systems serving millions. Creator of The Synthetic Employee Framework™ teaching 2,000+ students to build AI teams that work together—replacing consultant spend and creating sustainable competitive advantages."
    },
    faqs: [
      {
        question: "How is this different from 'Professional Vibe Coding with Claude Code'?",
        answer: "That course is for hardcore developers building Virtual Employees for software development (code reviews, testing, etc.). THIS course is for business leaders building Synthetic Employees for decision support (financial analysis, contract review, compliance checking). Different target audience, different use cases, different outcomes."
      },
      {
        question: "I'm not technical—can I really build this myself?",
        answer: "Yes. This course is specifically designed for anyone who wants to own their intelligence infrastructure, not just developers. We provide code templates for every exercise—you'll customize them for your needs without writing from scratch. If you can use Excel and understand the problems you're trying to solve, you can build synthetic employees. Most students deploy their first agent in Week 1."
      },
      {
        question: "Why build instead of using ChatGPT Teams or other AI tools?",
        answer: "ChatGPT doesn't know YOUR business, forgets context, can't access your systems, and charges per seat. You're building OWNED intelligence that: (1) Trains on your documents/processes, (2) Remembers every interaction forever, (3) Connects to your CRM/ERP/accounting, (4) Costs ~$50/month for unlimited users vs $30-50/user/month. It's the difference between renting and owning real estate."
      },
      {
        question: "What about data privacy and security?",
        answer: "This is a KEY advantage of building your own. You deploy on YOUR infrastructure, data never leaves your control, you maintain complete audit trails, and you set granular permissions. Use it with your most sensitive contracts, financials, and client data—something you CAN'T do with ChatGPT or cloud AI services. Built-in SOC 2 compliance features."
      },
      {
        question: "How long until I see ROI?",
        answer: "Most students report measurable ROI within 60 days of completing Module 3. You'll build your first synthetic employee in Week 1 saving 2-5 hours/week. By Module 5, you'll have a specialized team saving $10K-$20K/month. Our guarantee: If you don't achieve $2K+/month savings within 60 days of Module 3, we provide 1-on-1 consulting or refund 100% plus $1,000."
      },
      {
        question: "What's the total cost beyond the course?",
        answer: "Course: $997-$9,997 one-time. After that: API costs only (~$20-$200/month depending on usage). No per-seat licensing. No vendor subscriptions. Compare to: ChatGPT Teams ($30-50/user/month), consultants ($5K-$50K per project), or hiring analysts ($200K-$300K each). Your investment pays back in 1-2 months."
      },
      {
        question: "Do I need to know how to code?",
        answer: "Basic familiarity helps but isn't required. We teach fundamentals as needed, provide complete code templates, and focus on logic over programming syntax. Many successful students hadn't coded since college (or never)—they bring domain expertise in their field, and the SDK does the heavy lifting. You provide the intelligence about what to build; the framework handles how to build it."
      },
      {
        question: "Can this work for my specific industry?",
        answer: "Yes. The Claude Agent SDK is domain-agnostic—it works for ANY industry. We have examples from legal, finance, healthcare, manufacturing, real estate, and more. The framework is universal; you customize with YOUR industry knowledge, making it MORE powerful than any pre-built solution. Your synthetic employees learn your specific terminology, processes, and compliance requirements."
      },
      {
        question: "What happens after I complete the course?",
        answer: "You'll have: (1) Production synthetic workforce deployed and generating ROI, (2) Complete codebase and infrastructure you own, (3) Knowledge to build unlimited new agents, (4) Lifetime community access, (5) Free updates forever. Many graduates join Alumni Membership ($97/month) for ongoing support, advanced workshops, and networking with other successful students."
      },
      {
        question: "How is this different from hiring a data science team?",
        answer: "Building a team costs $600K-$1.5M annually (3-5 engineers at $200K-$300K each), takes 6-12 months to hire, requires ongoing management, and knowledge leaves when they do. This course: $997-$9,997 one-time, deploy in weeks, SDK maintained by Anthropic, knowledge stays with you, infinite scale without headcount limits. You're learning to fish instead of buying fish."
      }
    ],
    signatureSolution: {
      stages: [
        {
          title: "PHASE 1: Foundation",
          subtitle: "Transform Frontier AI into Your Workforce",
          weeks: "Weeks 1-3",
          from: "Renting generic AI that forgets context, can't access confidential data, only provides advice (no execution), per-seat costs spiraling—consultants who've read a fraction of what AI knows charging $200K-$500K annually",
          to: "Building synthetic employees powered by AI trained on all human knowledge—perfect memory, secure confidential data processing, agents with tools that execute (not just advise), unlimited usage for pennies on the dollar",
          moat: "Frontier AI Workforce Ownership",
          moatDesc: "Transform the smartest technology ever created into YOUR workforce—expert-level decision support across every domain, customized for your specific business, executing autonomously with tools",
          color: "blue"
        },
        {
          title: "PHASE 2: Advanced Capabilities",
          subtitle: "Specialized AI Teams & System Integration",
          weeks: "Weeks 4-6",
          from: "Isolated AI with no system access, single generalist agent trying to do everything, unrestricted permissions risking compliance, consultants charging per engagement",
          to: "Specialized AI workforce (Legal, Finance, Operations experts) connected to ALL your systems (CRM, ERP, accounting)—reading contracts, extracting invoice data, analyzing deals in real-time with enterprise governance and audit trails",
          moat: "Proprietary Intelligence That Executes",
          moatDesc: "AI trained on YOUR business that doesn't just advise—it ACTS. Reads your documents, writes to your systems, executes decisions. Intelligence competitors can't replicate because it's built from your proprietary processes and data",
          color: "purple"
        },
        {
          title: "PHASE 3: Production & Scale",
          subtitle: "Autonomous Workflows & Organizational Transformation",
          weeks: "Weeks 7-9",
          from: "Manual multi-step workflows eating days, personal experiments on laptop, CLI-only interfaces, limited to your personal use, no way to scale to organization",
          to: "Autonomous end-to-end business processes (month-end close, compliance reviews, deal approvals), production platform serving entire organization with React UI, self-service portal for business users to create agents—AI workforce operating at scale",
          moat: "Infinite Scalability Without Headcount",
          moatDesc: "When competitors are limited by hiring budgets and consultant availability, your AI workforce scales infinitely at marginal cost—handle 10x volume without adding people, creating sustainable competitive advantage",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Module 1: Foundation Builder—Your First Synthetic Employee",
          from: "Renting generic AI that forgets context, can't access confidential data, only provides suggestions (no execution)—consultants who've read a tiny fraction of what AI knows yet charge $5K-$50K per engagement",
          to: "Building your first synthetic employee powered by frontier AI trained on all human knowledge—expert across every domain (legal, finance, operations), perfect memory, works securely with your most confidential contracts and financials",
          moat: "Frontier AI Knowledge Moat—AI that has studied every case, every model, every framework vs. consultants with limited expertise. Data Privacy Moat—use with sensitive data competitors can't. Cost Moat—unlimited usage for <$50/month vs consultant retainers",
          stage: 1
        },
        {
          title: "Module 2: Memory Master—Perfect Long-Term Memory",
          from: "Single-use conversations starting from zero each time, repeating context endlessly, can't explore scenarios, hitting context limits",
          to: "Synthetic employees with perfect long-term memory across unlimited sessions, remembers all previous work, compare multiple scenarios side-by-side, analyze any document (PDFs/images)",
          moat: "Institutional Memory Moat + Scenario Planning Moat + Document Intelligence Moat—AI accumulates business knowledge while competitors start over, run parallel analyses, extract insights from documents others can't",
          stage: 1
        },
        {
          title: "Module 3: Data Structurer—Validated JSON Integration",
          from: "Conversational responses requiring manual data entry, unreliable extraction, manual validation of every output, can't integrate with business systems",
          to: "Validated JSON feeding directly into business systems, perfect data extraction from messy documents, automatic CRM/ERP population, zero-touch integration",
          moat: "Automation Moat + Accuracy Moat + Integration Moat—10x faster data processing than manual entry, 99.9% extraction accuracy vs 95% human, AI-to-system pipelines competitors can't build",
          stage: 1
        },
        {
          title: "Module 4: Integration Architect—Agents with Tools That Execute",
          from: "AI isolated from business systems, manual lookups across multiple platforms, can only provide advice (no execution)—consultants who review documents and write reports but don't DO anything",
          to: "AGENTS with TOOLS that execute autonomously—read contracts from DocuSign, write opportunities to Salesforce, pull invoices from QuickBooks, extract data and populate systems, analyze deals in real-time and create records. Not advice, ACTION.",
          moat: "Execution Moat—while consultants advise and competitors use AI that only talks, your agents READ, WRITE, EXTRACT, ANALYZE, and EXECUTE across all systems. Autonomous operations replacing 40-60% of manual work that competitors still do by hand",
          stage: 2
        },
        {
          title: "Module 5: Workforce Builder—Specialized AI Teams",
          from: "Single generalist agent trying to do everything, sequential analysis taking hours, generic advice missing nuanced expertise, can't delegate to appropriate specialists",
          to: "Specialized AI team with Legal, Finance, Operations experts working in parallel—expert-level analysis from domain specialists, parallel processing cutting time by 10x, coordinated multi-perspective insights",
          moat: "Expertise Moat + Speed Moat + Quality Moat—deep specialists vs shallow generalists, 10x faster through parallelization, multi-expert review catches what single AI misses",
          stage: 2
        },
        {
          title: "Module 6: Governance Engineer—Enterprise Controls",
          from: "AI with unrestricted access risking destructive operations, unpredictable API costs spiraling, no audit trail for compliance, can't enforce approval workflows",
          to: "Enterprise-grade governance with granular permissions matching org chart, real-time cost tracking with budget alerts, complete audit logs for SOC 2 compliance, automatic approval workflows",
          moat: "Compliance Moat + Cost Control Moat + Security Moat—audit-ready AI while competitors can't prove compliance, predictable budgets vs surprise bills, enterprise-grade controls vs consumer-grade AI",
          stage: 2
        },
        {
          title: "Module 7: Process Automator—Intelligent Workflows",
          from: "Manual multi-step workflows requiring human coordination, repetitive monthly/quarterly processes eating days, black-box AI with no visibility, manual exception handling derailing automation",
          to: "Intelligent end-to-end automation with transparent progress tracking, complete business processes running autonomously (month-end close, compliance reviews, deal approvals), intelligent exception handling",
          moat: "Operational Speed Moat + Scalability Moat + Reliability Moat—24-hour processes done in 2 hours, handle 10x volume without hiring, zero human errors in automated processes",
          stage: 3
        },
        {
          title: "Module 8: Enterprise Integrator—Unified Intelligence Platform",
          from: "Disconnected tools and siloed data across 10+ systems, manual data aggregation for cross-functional insights, can't get answers requiring multiple system queries, integrations taking 6-12 months",
          to: "Unified intelligence platform connecting every business system, single question pulling from all relevant systems, real-time cross-functional business intelligence, new integrations deployed in hours",
          moat: "Data Access Moat + Integration Speed Moat + Insight Depth Moat—unified intelligence vs siloed reports, hours to add systems vs months, cross-functional analysis competitors can't match",
          stage: 3
        },
        {
          title: "Module 9: Platform Operator—Production Deployment",
          from: "Personal AI experiments on laptop, can't scale beyond your personal use, no professional interface for business stakeholders, downtime and performance issues, can't monitor systematically",
          to: "Production platform serving entire organization with enterprise SLAs, polished React UI for non-technical users, enterprise-grade reliability and monitoring, self-service portal for business teams to create agents",
          moat: "Platform Moat + User Experience Moat + Organizational Moat—owned infrastructure vs vendor dependency, custom interfaces vs generic chat, company-wide adoption creating switching costs",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help anyone build their own team of AI-powered synthetic employees that work together to provide expert decision support across their domain, so they can make faster data-driven decisions saving $200K-$500K annually without hiring expensive consultants, waiting weeks for analysis, or risking sensitive data with third-party AI services.",
        founders: "I help people build proprietary synthetic employee teams from first principles, so they can achieve sustainable competitive advantage through owned AI that knows their specific domain without burning $200K-$500K annually on consultants, being limited by vendor platforms, or struggling with data privacy compliance."
      }
    }
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
  },
  {
    id: "10x-dev",
    slug: "the-10x-developer",
    name: "Professional Vibe Coding with Claude Code",
    subtitle: "Build AI-Augmented Development Infrastructure—Own Your Productivity, Stop Renting",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Medium",
    price: 697,
    hook: "You're losing to engineers half as skilled because they're building 10x faster.",
    description: "While you're debugging transformers and writing boilerplate, competitors who barely understand the math are shipping AI features faster than you can review PRs. The difference? They've mastered AI-augmented development infrastructure. This isn't a course about 'using Claude Code.' This is executive education in building AI-augmented development systems from first principles. You'll build autonomous agent systems, custom command libraries, plugin frameworks, and production CI/CD automation. By the end, you'll have complete AI infrastructure that compounds your productivity monthly—and the deep understanding to own your technology stack instead of renting it.",
    outcomes: [
      "Build autonomous sub-agent systems that work 24/7 on research, testing, and optimization",
      "Engineer custom command libraries and plugin frameworks that encode your expertise",
      "Master context engineering and context stuffing techniques for 10x agent effectiveness",
      "Integrate MCP (Model Context Protocol) servers to connect your entire toolchain",
      "Implement production-grade CI/CD automation with headless AI execution",
      "Build 6 complete React applications using multi-agent orchestration",
      "Create persistent memory architectures that preserve organizational knowledge",
      "Design enterprise-grade security and governance for AI systems"
    ],
    hours: 80,
    modules: 9,
    technologies: ["Claude Code", "React", "Node.js", "MCP", "PostgreSQL", "Git", "CI/CD", "Terminal"],
    curriculum: [
      {
        title: "Module 1: Claude Code Fundamentals",
        lessons: [
          "What is Claude Code? Terminal-Native AI vs IDE Plugins",
          "Installation Methods: NPM, Homebrew, Standalone Binary",
          "Authentication & Initial Configuration",
          "Core Tools: Read, Write, Edit, Bash, Grep, Glob",
          "Understanding Context Windows and Token Management",
          "Hands-On: Build Your First To-Do List (HTML/CSS/JS or React)",
          "Multi-File Operations: Adding Task Persistence",
          "Git Integration: AI-Powered Commits and PRs",
          "Customizing Your Claude Code Workflow"
        ]
      },
      {
        title: "Module 2: MCP Server Integration",
        lessons: [
          "What are MCP Servers? Model Context Protocol Explained",
          "MCP Architecture: Servers, Clients, Resources, Tools",
          "Available MCP Servers: PostgreSQL, MongoDB, GitHub, Stripe",
          "Installing Your First MCP Server",
          "Hands-On: Add PostgreSQL MCP Server to To-Do App",
          "Hands-On: Migrate from localStorage to Postgres Database",
          "Hands-On: Add Stripe API Integration for Payments",
          "Hands-On: Add GitHub MCP Server for Issue Syncing",
          "Building Custom MCP Servers for Internal Tools",
          "MCP Security, Permissions, and Best Practices"
        ]
      },
      {
        title: "Module 3: Sub-Agent Systems",
        lessons: [
          "What are Sub-Agents? Specialization and Parallel Execution",
          "Sub-Agent Architecture: Context Isolation and Independence",
          "Context Engineering: Structuring Information for Agents",
          "Context Stuffing: Loading Agents with Optimal Information",
          "Hands-On: Create Research Sub-Agent for Feature Discovery",
          "Hands-On: Create Testing Sub-Agent for Automated Tests",
          "Hands-On: Create Deployment Sub-Agent for CI/CD",
          "Multi-Agent Coordination Patterns",
          "Advanced: Agent Communication and State Sharing",
          "Performance Monitoring and Optimization for Agent Systems"
        ]
      },
      {
        title: "Module 4: Skills Development",
        lessons: [
          "What are Skills? Model-Invoked vs User-Invoked Capabilities",
          "Skills vs Commands: When to Use Each",
          "YAML-Based Skill Definitions",
          "Skill Discovery and Execution Flow",
          "Hands-On: Build Code Review Skill",
          "Hands-On: Build Testing Skill (Unit, Integration, E2E)",
          "Hands-On: Build Deployment Skill with Rollback",
          "Skill Composition and Chaining",
          "Building Domain-Specific Skill Libraries",
          "Self-Improving Skills and Learning Patterns"
        ]
      },
      {
        title: "Module 5: Meta Agent Architecture",
        lessons: [
          "What are Meta Agents? Agents Managing Agents",
          "Meta Agent Patterns: Supervisor, Delegator, Coordinator",
          "Agent Lifecycle Management",
          "Resource Allocation and Optimization",
          "Hands-On: Build Supervisor Meta Agent",
          "Hands-On: Build Coordinator Meta Agent for Parallel Work",
          "Hands-On: Build Learning Meta Agent with Adaptation",
          "Advanced: Recursive Meta Agents (Agents Managing Meta Agents)",
          "Self-Organizing Agent Systems",
          "Production Deployment and Scaling Strategies"
        ]
      },
      {
        title: "Module 6: Orchestration Agent Patterns",
        lessons: [
          "What is Agent Orchestration? Centralized Control vs Coordination",
          "Orchestration Patterns: Sequential, Parallel, Conditional, Loops",
          "State Machines and Workflow Engines",
          "Event-Driven vs Request-Driven Patterns",
          "Hands-On: Build Feature Development Orchestrator (Research → Design → Code → Test → Deploy)",
          "Hands-On: Build CI/CD Pipeline Orchestrator (Lint → Test → Build → Deploy → Monitor)",
          "Hands-On: Build Code Review Orchestrator (Syntax → Security → Performance → Style)",
          "Dynamic Orchestration Based on Context",
          "Self-Healing Orchestration Systems",
          "Production-Scale Orchestration and Observability"
        ]
      },
      {
        title: "Module 7: Production Agent Systems",
        lessons: [
          "Production Requirements: Reliability, Observability, Scalability",
          "Understanding Production Failure Modes for Agents",
          "Logging and Monitoring for Agent Systems",
          "Agent-Specific Observability Patterns",
          "Hands-On: Implement Production Logging with Structured Logs",
          "Hands-On: Implement Performance Monitoring and Cost Tracking",
          "Hands-On: Deploy Agents to Production with Blue-Green Deployment",
          "Automated Rollback on Agent Failures",
          "Self-Healing Agent Systems",
          "Chaos Engineering and Cost Optimization at Scale"
        ]
      },
      {
        title: "Module 8: Context Engineering & Memory",
        lessons: [
          "What is Context Engineering? Windows, Stuffing, Optimization",
          "How Context Affects Agent Performance (10x Gains)",
          "Memory Systems: Short-Term vs Long-Term",
          "Vector Databases and Semantic Search",
          "Hands-On: Implement Context Optimization (Pruning, Summarization)",
          "Hands-On: Add Vector Database for Agent Memory",
          "Hands-On: Implement Semantic Search Over Past Interactions",
          "Hands-On: Build Stateful Agent Sessions with Persistence",
          "Advanced Context Patterns: Hierarchical Context, Multi-Agent Sharing",
          "Production Memory Management and Cost Optimization"
        ]
      },
      {
        title: "Module 9: CI/CD & Headless Automation",
        lessons: [
          "What is Headless Claude Code? Interactive vs Non-Interactive",
          "Understanding stdin/stdout Protocol",
          "CI/CD Integration: GitHub Actions, GitLab CI, Jenkins",
          "Automation Patterns: Pre-Commit Hooks, Post-Deploy Validation",
          "Hands-On: Build Automated Code Review in CI/CD Pipeline",
          "Hands-On: Build Automated Test Generation and Execution",
          "Hands-On: Build Automated Deployment to Production",
          "Zero-Downtime Deployments and Automated Rollback",
          "End-to-End Autonomous Pipeline: PR Creation to Production Monitoring",
          "Production Mastery Capstone: Complete AI-Augmented Infrastructure"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Infrastructure Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI infrastructure from first principles. His approach: build the systems yourself to truly understand how AI-augmented development works—and own your productivity instead of renting it."
    },
    faqs: [
      {
        question: "Is this just a 'how to use Claude Code' tutorial?",
        answer: "No. This is executive education in building AI-augmented development infrastructure from first principles. You'll learn architecture patterns, context engineering, agent orchestration, and production deployment—skills that apply across any AI development platform."
      },
      {
        question: "Do I need to know Claude Code before taking this?",
        answer: "No. We start from installation and authentication. However, you should be proficient in JavaScript/React and comfortable with terminal/command-line interfaces."
      },
      {
        question: "What's the difference between this and using GitHub Copilot or Cursor?",
        answer: "Copilot gives you autocomplete. Cursor gives you an IDE plugin. Claude Code gives you a platform for building autonomous agent systems, custom workflows, and production automation. This course teaches you to build infrastructure, not just use tools."
      },
      {
        question: "Will I actually build production applications?",
        answer: "Yes. You'll build 6 complete React applications: Authentication System, E-Commerce Catalog, Analytics Dashboard, Multi-Tenant SaaS, CMS Platform, and Social Media App—all using sub-agents, MCP integrations, and context engineering."
      },
      {
        question: "How is this different from your other AI courses?",
        answer: "Other courses teach you how to build LLMs, agents, or ML systems. This course teaches you how to build the development infrastructure that builds those systems—meta-level productivity engineering."
      },
      {
        question: "What if I'm already using Claude Code at work?",
        answer: "Perfect. This course will 10x your effectiveness by teaching context engineering, sub-agent orchestration, custom command libraries, plugin development, and production automation patterns you won't discover through trial-and-error."
      }
    ],
    signatureSolution: {
      stages: [
        {
          title: "STAGE 1-3: Foundation & Integration",
          subtitle: "Terminal Command Center, Workflow Acceleration, Cross-Platform Mastery",
          weeks: "Weeks 1-3",
          from: "Opening multiple tools (IDE, terminal, browser, ChatGPT), manually switching contexts, writing every line of code by hand",
          to: "Single terminal environment where AI handles multi-file operations, git workflows, and autonomous task completion across Terminal, Desktop, and VS Code",
          moat: "Terminal-Native AI Infrastructure",
          moatDesc: "Understanding terminal-native AI architecture gives you 10x more control than IDE plugin users—workflow efficiency that saves 2-3 hours per day and enables automation impossible in GUI tools",
          color: "blue"
        },
        {
          title: "STAGE 4-6: Infrastructure & Automation",
          subtitle: "Memory Architecture, Command Engineering, Agent Orchestration",
          weeks: "Weeks 4-6",
          from: "Starting every coding session from zero context, writing same prompts repeatedly, doing every task manually",
          to: "Four-tier memory systems preserving organizational knowledge, library of 50+ custom commands, sub-agents autonomously handling research/testing/optimization",
          moat: "Custom Development Infrastructure",
          moatDesc: "Proprietary command libraries, autonomous agent systems working 24/7, and memory architectures that compound productivity monthly—infrastructure competitors can't replicate by hiring",
          color: "purple"
        },
        {
          title: "STAGE 7-9: Enterprise & Mastery",
          subtitle: "Plugin Development, CI/CD Automation, Security & Sovereignty",
          weeks: "Weeks 7-9",
          from: "Manual testing, deployment, code review processes taking hours, security bolted on at the end",
          to: "Plugin packages scaling expertise across organization, headless AI automating entire development pipeline, enterprise-grade security from day one",
          moat: "Production AI Infrastructure Sovereignty",
          moatDesc: "Complete organizational AI infrastructure with plugins as IP, fully automated CI/CD, and defense-in-depth security—technology ownership that creates $1M-$3M in value",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Module 1: Claude Code Fundamentals",
          from: "Opening multiple tools (IDE, terminal, browser, ChatGPT) and manually switching contexts, writing CRUD routes by hand for 2 hours",
          to: "Single terminal environment with terminal-native AI workflows, building complete REST API with sub-agents in 20 minutes, 6x productivity increase on Day 1",
          moat: "Terminal-native AI mastery—deep understanding of tool execution, context windows, agent decision-making from first principles enables building custom systems",
          stage: 1
        },
        {
          title: "Module 2: MCP Server Integration",
          from: "Manual API integrations, disconnected tools requiring context switching, weeks to integrate databases and payment systems",
          to: "Model Context Protocol connecting entire toolchain (PostgreSQL, Stripe, GitHub), one-command integrations, unified development platform",
          moat: "MCP integration expertise—ability to connect any service to AI agents using open protocol, creating seamless toolchain impossible for API-wrapper developers",
          stage: 1
        },
        {
          title: "Module 3: Sub-Agent Systems",
          from: "Doing every task manually even with AI assistance, single AI context handling everything sequentially, limited by hours in day",
          to: "Specialized sub-agents with independent contexts for research, testing, refactoring working in parallel, agents working 24/7 while you sleep",
          moat: "Sub-agent orchestration mastery—parallel execution patterns that enable 10x faster development than sequential workflows, team-level output from individual contributor",
          stage: 2
        },
        {
          title: "Module 4: Skills Development",
          from: "Manually invoking every AI action, no autonomous agent behavior, AI waits for constant human direction",
          to: "Model-invoked skills that AI uses autonomously, domain-specific skill libraries in .claude/skills, AI takes initiative while you're in meetings",
          moat: "Skills architecture expertise—building autonomous capabilities that agents invoke without prompting, enabling truly hands-off automation",
          stage: 2
        },
        {
          title: "Module 5: Meta Agent Architecture",
          from: "Single-agent limitations (one agent does everything), no specialization, manual agent management for each task",
          to: "Meta agents managing other agents (supervisor, delegator, coordinator patterns), agent hierarchies, self-improving systems that compound monthly",
          moat: "Meta agent design mastery—systems where agents manage agents enable recursive scaling and self-organizing architectures worth $100K+ in productivity",
          stage: 2
        },
        {
          title: "Module 6: Orchestration Agent Patterns",
          from: "Ad-hoc workflows, manual coordination between development stages, no systematic approach to complex features",
          to: "Orchestration patterns (sequential, parallel, conditional, loops), state machines for feature development (Research → Design → Code → Test → Deploy)",
          moat: "Orchestration architecture expertise—centralized control patterns that coordinate multi-agent workflows for production-scale feature development",
          stage: 3
        },
        {
          title: "Module 7: Production Agent Systems",
          from: "Local-only agents, no production deployment, no monitoring, unpredictable production behavior, catastrophic failures",
          to: "Production-deployed agents, full observability, performance monitoring, blue-green deployments, automated rollback, self-healing systems",
          moat: "Production deployment mastery—operating autonomous agent systems at scale with reliability, monitoring, and cost optimization that enterprises require",
          stage: 3
        },
        {
          title: "Module 8: Context Engineering & Memory",
          from: "Every session is blank slate, hitting token limits, slow responses, AI forgets conversation after 2 hours",
          to: "Four-tier memory hierarchy (Enterprise → Project → User → Local), context optimization (pruning, summarization), vector databases, persistent knowledge",
          moat: "Context engineering mastery—memory architectures that preserve organizational knowledge permanently, enabling agents 10x more effective than competitors starting from zero",
          stage: 3
        },
        {
          title: "Module 9: CI/CD & Headless Automation",
          from: "Manual code reviews taking 2 hours, manual deployments, no automation, development pipeline requires constant human intervention",
          to: "Headless AI automating entire development pipeline end-to-end, automated code review in 5 minutes, zero-touch deployments, self-healing CI/CD",
          moat: "Headless automation mastery—AI in production running 24/7 unsupervised, deploying 10x per day vs competitors' 1x per week, $100K-$500K in labor savings",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help AI engineers and ML practitioners build production-ready AI-augmented development infrastructure from first principles, so they can deploy autonomous sub-agent systems and ship 10-100x faster earning $250K-$400K salaries without being commoditized as 'prompt engineers' or stuck debugging tools they don't understand.",
        founders: "I help technical founders and CTOs build proprietary AI-augmented development infrastructure from first principles, so they can save $200K-$500K/year in engineering costs and ship 10x faster without burning cash on API dependencies or hiring expensive engineers who can't keep pace with AI-augmented teams."
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 697,
        description: "Self-Paced Mastery",
        features: [
          "All 9 modules available immediately (80+ hours)",
          "Lifetime access to content and updates",
          "Build 6 production React applications",
          "Command library templates (50+ pre-built commands)",
          "Sub-agent architecture templates",
          "Plugin scaffolding and MCP examples",
          "Private Discord community (peer support)",
          "Monthly live office hours with Q&A",
          "Certificate of completion",
          "Learn on your own schedule"
        ]
      },
      cohort: {
        price: 2497,
        description: "9-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee (2 hours each)",
          "Cohort accountability and peer learning (30-50 students)",
          "Direct instructor access (24-hour response)",
          "Weekly code reviews (instructor + peer feedback)",
          "Pair programming sessions",
          "Career advancement coaching",
          "Resume and LinkedIn optimization",
          "Interview prep for $300K+ roles",
          "Alumni network access (1,000+ students)",
          "Job board access (companies hiring AI-augmented engineers)",
          "Graduation certificate",
          "Fixed start dates (4 cohorts per year)"
        ]
      },
      bootcamp: {
        price: 9997,
        description: "5-Day Immersive Bootcamp",
        features: [
          "Executive format (Monday-Friday intensive)",
          "8am-4pm daily with hands-on labs (70% building)",
          "Build 3-4 production React apps in 5 days",
          "Small group (max 25 people)",
          "1-on-1 architecture review with Dr. Lee",
          "Teaching assistant support during all sessions",
          "Daily code reviews of your implementations",
          "Capstone project (deploy your custom system)",
          "4 weeks post-bootcamp support",
          "Career acceleration (resume, LinkedIn, interviews)",
          "Recordings of all sessions",
          "Early bird pricing: $7,997 (save $2,000)"
        ]
      },
      founders: {
        price: 6997,
        description: "Founder's Edition (1:1 Implementation + Fractional CTO)",
        features: [
          "One-on-one implementation partnership (12-24 sessions)",
          "Weekly architecture sessions (1 hour private with Dr. Lee)",
          "Custom curriculum for YOUR specific tech stack",
          "Hands-on pair programming (we code together)",
          "Production deployment support",
          "Fractional CTO services (3-6 months)",
          "Team training (up to 5 members included)",
          "Architecture design document (custom)",
          "Code review (every pull request)",
          "Direct Slack/WhatsApp access to Dr. Lee",
          "Custom MCP servers for your company tools",
          "Enterprise security and compliance configuration",
          "Long-term partnership opportunities available"
        ]
      }
    }
  },
  {
    id: "ai-alignment",
    slug: "ai-alignment",
    name: "AI Alignment and RLHF",
    subtitle: "The AI Alignment Mastery System™ — Build Models That Do What You Want",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "High Demand",
    price: 1497,
    hook: "Master RLHF, DPO, and constitutional AI to build aligned models that reliably do what they're supposed to—the expertise separating $180K API users from $350K alignment architects.",
    description: "Powerful AI models are useless if they're unpredictable, unsafe, or uncontrollable. This masterclass teaches you reinforcement learning from human feedback (RLHF), direct preference optimization (DPO), constitutional AI, and modern alignment techniques used by Anthropic, OpenAI, and DeepMind. Unlike other RLHF courses teaching superficial HuggingFace API calls, this is executive business education (Harvard/MIT/Stanford caliber) merged with hands-on implementation. Using the DrLee.AI Shu-Ha-Ri learning method, you'll build complete alignment pipelines from scratch: collect preference data, train reward models, implement PPO and DPO, create constitutional AI systems, and deploy reasoning models using RLVR. Each module begins with TED-talk style instruction, then you immediately build it yourself. By the end, you'll deploy production-aligned models stakeholders trust—owning the critical capability that's transforming $180K ML engineers into $350K+ alignment specialists. Available in 4 modalities: 9-Week Live Cohort, 5-Day Immersive Bootcamp, Self-Paced Mastery, or Founder's Edition (1:1 mentorship/Fractional CTO). This masterclass builds on LLM foundations to teach the next critical layer: making those models safe, controllable, and aligned with human values. Unlike the LLM course which teaches model architecture and pretraining, this focuses exclusively on post-training alignment techniques that make models production-ready.",
    outcomes: [
      "Implement complete RLHF pipeline: preference data collection → reward model → PPO training → aligned model",
      "Build reward models from human preferences using Bradley-Terry loss and pairwise comparisons",
      "Train policies with Proximal Policy Optimization (PPO) and Group Relative Policy Optimization (GRPO)",
      "Implement Direct Preference Optimization (DPO) for simpler alignment without reward models",
      "Create constitutional AI systems using AI feedback and self-improvement loops",
      "Train reasoning models like DeepSeek R1 using reinforcement learning from verifiable rewards (RLVR)",
      "Apply instruction tuning, rejection sampling, and KL regularization for stable training",
      "Build process reward models and outcome reward models for step-by-step verification",
      "Implement tool use and function calling with Model Context Protocol (MCP)",
      "Deploy production-aligned AI with evaluation suites, over-optimization detection, and safety monitoring",
      "Debug reward hacking, mode collapse, and alignment failures in production systems",
      "Design synthetic data generation and constitutional principles for scalable alignment"
    ],
    hours: 45,
    modules: 9,
    technologies: ["Python", "PyTorch", "HuggingFace Transformers", "Weights & Biases", "OpenAI Gym", "Anthropic Constitutional AI"],
    curriculum: [
      {
        title: "Module 1: Alignment Foundations",
        lessons: [
          "Introduction: Why Alignment is Critical for Production AI",
          "The Alignment Problem: Helpful, Honest, Harmless (HHH)",
          "Historical Evolution: 2018 Origins to ChatGPT Era to DeepSeek R1",
          "Core Definitions: Preferences, Rewards, Policies, Values",
          "Language Modeling Overview and Post-Training Pipeline",
          "The Problem Formulation: RLHF vs. Supervised Learning",
          "Canonical Training Recipes: InstructGPT, Tülu 3, DeepSeek R1",
          "Setting Up Your Complete RLHF Development Environment"
        ]
      },
      {
        title: "Module 2: Preference Intelligence",
        lessons: [
          "The Nature of Preferences: Why Preferences > Labels",
          "Bias in Preference Data and Mitigation Strategies",
          "Collecting Preference Data: Interface Design and Annotation",
          "Rankings vs. Ratings: K-wise Comparisons",
          "Structured Preference Data for Multi-Turn Conversations",
          "Training Reward Models with Bradley-Terry Loss",
          "Reward Model Architectures and Variants",
          "Outcome Reward Models vs. Process Reward Models vs. Value Functions",
          "Generative Reward Modeling for Explanations"
        ]
      },
      {
        title: "Module 3: Training Dynamics",
        lessons: [
          "KL Divergence Penalties: Preventing Model Collapse",
          "Reference Models and Stable Training",
          "Implementing KL Regularization in Policy Optimization",
          "Pretraining Gradients and Regularization Techniques",
          "Chat Templates and the Structure of Instructions",
          "Best Practices of Instruction Tuning",
          "Rejection Sampling: Data-Efficient Improvement",
          "Best-of-N Sampling for Inference-Time Quality"
        ]
      },
      {
        title: "Module 4: Policy Optimization",
        lessons: [
          "Policy Gradient Algorithms: REINFORCE Foundation",
          "Vanilla Policy Gradient Implementation",
          "Proximal Policy Optimization (PPO) Mechanics",
          "Implementing PPO from Scratch with Clipping",
          "Group Relative Policy Optimization (GRPO)",
          "Generalized Advantage Estimation (GAE) for Credit Assignment",
          "Comparing PPO vs. GRPO for Language Models",
          "Loss Aggregation, Asynchronicity, and Distributed Training",
          "Debugging Gradient Explosion and Training Instabilities"
        ]
      },
      {
        title: "Module 5: Direct Alignment",
        lessons: [
          "Direct Preference Optimization (DPO): Eliminating Reward Models",
          "How DPO Works: Mathematical Derivation",
          "Implementing DPO Loss Function from Scratch",
          "Numerical Concerns and DPO Weaknesses",
          "DPO Alternatives: IPO, KTO, and Other Direct Methods",
          "Online RL (PPO) vs. Offline (DPO): When to Use Each",
          "Hybrid Approaches Combining DPO and PPO",
          "Production DPO Pipelines at Scale"
        ]
      },
      {
        title: "Module 6: Constitutional AI",
        lessons: [
          "Constitutional AI Principles and Methodology",
          "AI Feedback for Scalable Alignment",
          "Using LLMs as Judges for Preference Generation",
          "Designing Constitutional Principles for Your Use Case",
          "Implementing Multi-Turn Constitutional AI Training",
          "Automated Red-Teaming with AI Feedback",
          "Recursive Self-Improvement Loops",
          "Debugging AI Feedback Biases and Failure Modes"
        ]
      },
      {
        title: "Module 7: Reasoning and Inference Scaling",
        lessons: [
          "Why Reasoning Requires RL, Not Just Supervised Learning",
          "The Origins of DeepSeek R1 and OpenAI o1",
          "Verifiable Rewards vs. Preference-Based Rewards",
          "Implementing Verifiable Reward Functions for Math/Coding",
          "Training Reasoning Models with Outcome-Based RL",
          "Building Process Reward Models for Step-by-Step Verification",
          "Chain-of-Thought Reasoning and Inference-Time Scaling",
          "Test-Time Compute: Improving Outputs with Search",
          "Debugging Reward Hacking in Reasoning Tasks"
        ]
      },
      {
        title: "Module 8: Production Deployment",
        lessons: [
          "Function Calling and Tool Use for Agentic Behavior",
          "Model Context Protocol (MCP) Implementation",
          "Multi-Step Reasoning with Tool Orchestration",
          "Modern Evaluation Beyond Static Benchmarks",
          "Contamination Risks and Proper Holdout Sets",
          "Detecting Over-Optimization and Proxy Reward Issues",
          "Qualitative Over-Optimization: Sycophancy and Refusal",
          "Building Comprehensive Evaluation Suites",
          "Production Alignment Monitoring and Continuous Verification"
        ]
      },
      {
        title: "Module 9: Advanced Techniques",
        lessons: [
          "Synthetic Data Generation for Alignment at Scale",
          "Distilling Alignment from Large Models to Smaller Ones",
          "Style and Information Control: Chattiness vs. Conciseness",
          "Model Character and Personality Training",
          "Product UX and Alignment Integration",
          "Model Specifications and Character Design",
          "Building Autonomous Data Generation Pipelines",
          "Product-Driven Alignment Iterations",
          "Creating Feedback Loops: Users → Alignment → Deployment",
          "Capstone: Deploy Your Complete Aligned AI System"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Alignment Architect & Educator",
      bio: "Former alignment lead at a frontier AI company, Dr. Lee has trained hundreds of engineers to build production-aligned AI systems from first principles. His philosophy: understanding RLHF beats using HuggingFace APIs, and anyone can learn alignment with hands-on implementation."
    },
    faqs: [
      {
        question: "Do I need RL background for this course?",
        answer: "No RL prerequisite required. We teach reinforcement learning from scratch specifically for alignment. If you understand supervised learning and backpropagation, you're ready. All RL concepts are built step-by-step."
      },
      {
        question: "How is this different from the LLM masterclass?",
        answer: "The LLM course teaches transformer architecture, pretraining, and tokenization—building the model. This course teaches post-training alignment: RLHF, DPO, constitutional AI—making models safe and controllable. They're complementary: LLM builds the engine, Alignment adds steering and safety."
      },
      {
        question: "Will I just use HuggingFace's RLHF trainer?",
        answer: "No. You'll implement PPO, DPO, and reward models from scratch in PyTorch to understand every component. Then you'll learn to use frameworks effectively, not blindly. Understanding comes from building."
      },
      {
        question: "Can I align models without massive compute?",
        answer: "Yes. We teach techniques that work on consumer GPUs and cloud instances. Reward models train on single GPUs. PPO/DPO fine-tuning works with small models (1B-7B parameters). You don't need GPT-4 scale compute to learn alignment."
      },
      {
        question: "Is this relevant for my industry (healthcare/finance/legal)?",
        answer: "Absolutely. Regulated industries need alignment more than anyone. We cover constitutional AI for compliance, preference data for domain expertise, and safety monitoring for production deployment. The techniques transfer to any domain."
      },
      {
        question: "Will this help me get hired at Anthropic/OpenAI/DeepMind?",
        answer: "This course teaches the exact techniques used at frontier labs. You'll build portfolio projects (RLHF pipelines, DPO implementations, constitutional AI systems) that demonstrate alignment expertise. Combined with our career support, alumni have landed roles at top AI companies."
      },
      {
        question: "How long until I can deploy aligned models in production?",
        answer: "By end of Week 5 (cohort) or Day 3 (bootcamp), you'll have a working DPO pipeline. By end of course, you'll deploy complete alignment systems. Self-paced students typically achieve production deployment within 60-90 days."
      },
      {
        question: "What's the ROI for my career?",
        answer: "Alignment specialists command $300K-$500K vs. $180K-$220K for ML generalists. The salary premium alone pays back the course investment 20x-100x in Year 1. Plus you become irreplaceable as alignment becomes critical for all AI deployment."
      }
    ],
    signatureSolution: {
      stages: [
        {
          title: "PHASE 1: Alignment Foundations",
          subtitle: "From Unpredictable AI to Controlled Behavior",
          weeks: "Weeks 1-3",
          from: "Models generate toxic content, ignore instructions, produce unpredictable outputs—treating alignment as optional",
          to: "Building complete RLHF pipelines from scratch—reward models, preference data, policy optimization—with production safety",
          moat: "RLHF Pipeline Expertise",
          moatDesc: "Ability to build and deploy reinforcement learning from human feedback systems that 99% of ML engineers can't—transforming unpredictable models into controllable, safe AI",
          color: "blue"
        },
        {
          title: "PHASE 2: Advanced Alignment Techniques",
          subtitle: "From Basic Training to Constitutional AI",
          weeks: "Weeks 4-6",
          from: "Using black-box API fine-tuning with no control, reward hacking failures, expensive alignment iterations",
          to: "Implementing DPO, constitutional AI, and RLVR for reasoning—owning the complete alignment stack with cost-efficient techniques",
          moat: "Direct Alignment Mastery",
          moatDesc: "Expertise in DPO (Direct Preference Optimization) and constitutional AI that enables rapid alignment iterations without expensive reward model training",
          color: "purple"
        },
        {
          title: "PHASE 3: Production Deployment & Safety",
          subtitle: "From Lab Experiments to Trusted Production AI",
          weeks: "Weeks 7-9",
          from: "Models fail in production, no evaluation framework, manual safety monitoring, reactive incident response",
          to: "Production-grade alignment with comprehensive evaluation suites, safety monitoring, and continuous verification systems",
          moat: "Production Alignment Systems",
          moatDesc: "Enterprise-ready safety infrastructure that ensures AI behaves correctly in production—avoiding catastrophic failures that destroy competitor products",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Module 1: Alignment Foundations",
          from: "Treating alignment as optional, believing supervision is enough, viewing safety as post-deployment concern",
          to: "Understanding alignment as critical production requirement, knowing why supervised learning fails for safety, treating alignment as core architecture",
          moat: "Strategic alignment thinking—recognizing when models need alignment vs. fine-tuning, understanding the alignment problem space",
          stage: 1
        },
        {
          title: "Module 2: Preference Intelligence",
          from: "Using simple labels (good/bad), treating all feedback equally, manually collecting preferences at small scale",
          to: "Building reward models from pairwise comparisons, understanding Bradley-Terry loss, implementing process vs. outcome reward models",
          moat: "Reward modeling expertise—ability to train models that predict human preferences, the foundation of all RLHF",
          stage: 1
        },
        {
          title: "Module 3: Training Dynamics",
          from: "Models collapse during training, overfitting to reward signal, unstable policy updates destroying model quality",
          to: "Implementing KL regularization, using reference models for stability, applying rejection sampling and instruction tuning",
          moat: "Stable alignment training—preventing mode collapse and reward hacking that causes 90% of alignment projects to fail",
          stage: 1
        },
        {
          title: "Module 4: Policy Optimization",
          from: "Black-box understanding of PPO, can't debug alignment failures, dependent on HuggingFace trainers",
          to: "Implementing PPO and GRPO from scratch in PyTorch, understanding clipping and GAE, debugging gradient issues",
          moat: "Policy optimization mastery—building PPO/GRPO implementations from first principles, not relying on abstracted frameworks",
          stage: 2
        },
        {
          title: "Module 5: Direct Alignment",
          from: "Expensive two-stage RLHF (reward model + policy training), long iteration cycles, high compute costs",
          to: "Implementing DPO for single-stage alignment, understanding when to use DPO vs. PPO, hybrid approaches",
          moat: "DPO expertise—faster, cheaper alignment iterations that reduce training costs by 50-70% compared to traditional RLHF",
          stage: 2
        },
        {
          title: "Module 6: Constitutional AI",
          from: "Manually reviewing every output, can't scale safety monitoring, dependent on human labelers for all feedback",
          to: "Building constitutional AI systems with AI feedback, automated red-teaming, recursive self-improvement loops",
          moat: "Scalable safety systems—using AI to monitor AI, enabling alignment at scale without proportional human labor",
          stage: 2
        },
        {
          title: "Module 7: Reasoning & Inference Scaling",
          from: "Models that pattern-match without reasoning, can't solve complex math/code problems, limited to training data",
          to: "Training reasoning models using RLVR (verifiable rewards), implementing process reward models, deploying test-time compute",
          moat: "Reasoning alignment expertise—building models that think before answering like DeepSeek R1 and o1, not just recall patterns",
          stage: 3
        },
        {
          title: "Module 8: Production Deployment",
          from: "Lab-only alignment with no production validation, reactive failure response, manual quality monitoring",
          to: "Building comprehensive evaluation suites, detecting over-optimization, implementing continuous alignment monitoring",
          moat: "Production safety infrastructure—systems that catch alignment failures before they reach users, not after disasters",
          stage: 3
        },
        {
          title: "Module 9: Advanced Techniques",
          from: "One-time alignment with static behavior, manual data collection for every iteration, no feedback loops",
          to: "Automated synthetic data generation, continuous alignment from user feedback, self-improving safety systems",
          moat: "Autonomous alignment systems—infrastructure that continuously improves model alignment from production feedback, compounding safety",
          stage: 3
        }
      ]
    },
    pricingModalities: {
      selfPaced: {
        price: 1497,
        description: "Self-Paced Mastery (Complete at Your Own Speed)",
        features: [
          "All 9 modules (45 hours of video content)",
          "100+ video lessons (TED-talk style instruction)",
          "50+ Jupyter notebooks with full implementations",
          "Complete code templates (PPO, DPO, reward models, constitutional AI)",
          "Quizzes and self-assessments",
          "Private Discord community access",
          "Course materials updated for life",
          "Certificate of completion",
          "Build and deploy complete RLHF pipeline (capstone project)"
        ]
      },
      cohort: {
        price: 5997,
        description: "9-Week Live Cohort (Structured Transformation)",
        features: [
          "Everything in Self-Paced PLUS:",
          "18 live sessions (2× weekly for 9 weeks)",
          "Live Q&A with Dr. Lee during each session",
          "Code reviews and personalized feedback",
          "Weekly implementation workshops",
          "Study groups and peer collaboration",
          "Private mentorship Slack channel",
          "Career support (resume, interviews, placement)",
          "Capstone project with instructor review",
          "Lifetime access to alumni network",
          "Certificate of completion (verified)",
          "Early bird pricing: $4,797 (save $1,200)"
        ]
      },
      bootcamp: {
        price: 6997,
        description: "5-Day Intensive Bootcamp (Rapid Immersion)",
        features: [
          "All 9 modules compressed into intensive 5-day format",
          "Daily live sessions (8am-5pm, 40 hours total)",
          "Hands-on labs each afternoon",
          "Real-time debugging and implementation",
          "Build complete alignment pipeline in 5 days",
          "30-day post-bootcamp support",
          "All course materials and recordings",
          "Certificate of completion",
          "Networking with cohort peers",
          "Optional team rates available"
        ]
      },
      founders: {
        price: 17997,
        description: "Founder's Edition (1:1 Implementation + Fractional CTO)",
        features: [
          "Everything in Cohort/Bootcamp PLUS:",
          "6 private 1-on-1 sessions with Dr. Lee (90 min each)",
          "Custom alignment strategy for your specific use case",
          "Complete code review of your production pipeline",
          "Architecture design session for your AI product",
          "Direct Slack/email access to Dr. Lee",
          "Monthly lifetime office hours (30-min check-ins)",
          "Introductions to hiring managers at Anthropic/OpenAI/DeepMind",
          "VC introduction for AI safety-focused startups",
          "Fractional CTO guidance on AI strategy",
          "Custom deliverables: Alignment roadmap, tech audit, deployment plan",
          "Optional: $4,997/month retainer for ongoing support"
        ]
      }
    }
  },
  // AI FOR DECISION MAKERS — 2-Day Bootcamp (Tailored for Elevate Prize Foundation)
  {
    id: "ai-decision-makers",
    slug: "ai-for-decision-makers",
    name: "AI for Decision Makers",
    subtitle: "Lead Smarter. Decide Faster. Amplify What Matters.",
    category: "Citizen Developer",
    categoryId: "citizen",
    rarity: "Flagship",
    price: 4997,
    hook: "A 2-day hands-on experience that gives organizational leaders the clarity, confidence, and practical tools to use AI as a force multiplier for the decisions that drive your mission forward.",
    description: "You don't need to become a technologist. You need to become the kind of leader who knows how to put AI to work for your mission. This 2-day immersive bootcamp is designed for the leaders in the room—not the engineers. It meets you exactly where you are, whether you're AI-curious, AI-cautious, or somewhere in between. Before Day 1, every participant completes a personalized AI Readiness Assessment so we can tailor the material, examples, and hands-on exercises to your specific team and organizational reality. Over two days, you'll move from understanding what AI can actually do (and what it can't) to building real, working tools that help you see patterns in your data, pressure-test your decisions, and free up hours you're currently spending on manual analysis. By the end, you'll have configured a collection of AI-powered advisors—trained on YOUR organization's data—that serve as a permanent decision support layer for your leadership team. AI doesn't replace your judgment. It gives you better information to exercise it. Available as a 2-Day Immersive Bootcamp or 4 Half-Day Sessions (spread across 2 weeks for teams who can't step away for 2 full days). Also available Self-Paced or as a 4-Week Live Cohort.",
    outcomes: [
      "Complete a personalized AI Readiness Assessment before Day 1—so the experience meets you exactly where you are",
      "Develop a clear, honest understanding of what AI can and cannot do for mission-driven organizations",
      "Gain hands-on confidence working with AI tools—no coding, no jargon, no engineering background required",
      "Connect your existing data—spreadsheets, reports, donor records, impact metrics—to AI tools that actually understand it",
      "Learn to ask AI the right questions so it gives you useful, grounded, trustworthy answers about YOUR organization",
      "Build AI-powered analysis workflows that save your team 10-20 hours per week on manual reporting",
      "Pressure-test strategic decisions with scenario modeling grounded in your real numbers",
      "Create a personalized collection of AI advisors trained on your data for grants, impact, fundraising, and stakeholder intelligence",
      "Understand AI ethics, data privacy, and responsible use—especially when your work affects real communities",
      "Walk away with a working system and a 90-day roadmap to deepen AI adoption across your organization"
    ],
    hours: 16,
    modules: 9,
    technologies: ["AI-Powered Analysis", "Knowledge Libraries", "Data Integration", "Scenario Modeling", "Decision Dashboards", "Impact Reporting", "Responsible AI"],
    curriculum: [
      {
        title: "Step 1: Demystifying AI — What It Actually Can (and Can't) Do for You",
        lessons: [
          "Starting Honest: What AI Is Great At, What It's Terrible At, and Why That Matters for Leaders",
          "The Hype vs. The Reality: Cutting Through the Noise With Clear Eyes",
          "How AI Can Serve Mission-Driven Work Without Replacing the Human Heart of It",
          "Live Demo: See AI Analyze Real Organizational Data—Then See Where It Falls Short",
          "Reviewing Your AI Readiness Assessment: Where YOU and Your Organization Stand Today",
          "Setting Your Intentions: What Decisions Do You Want to Make With More Confidence?"
        ]
      },
      {
        title: "Step 2: Your Data Is More Valuable Than You Think",
        lessons: [
          "You Already Have What You Need: Discovering the Data Assets Hiding in Plain Sight",
          "Connecting What You Already Use: Spreadsheets, Reports, Grant Applications, Impact Metrics",
          "Organizing the Knowledge Your Organization Has Built Over Years",
          "Making Your Data AI-Ready: Simple Steps, No Technical Skills Required",
          "Privacy First: Protecting Beneficiary, Donor, and Community Information",
          "The Ethical Foundation: Responsible Data Practices for Mission-Driven Organizations",
          "Hands-On: Load Your First Real Dataset and See What AI Sees"
        ]
      },
      {
        title: "Step 3: Asking AI the Right Questions",
        lessons: [
          "Why the Question You Ask Matters More Than the Tool You Use",
          "A Non-Technical Tour: How AI Reasoning Actually Works (In Plain Language)",
          "The Art of the Prompt: How to Get Useful, Specific, Trustworthy Answers",
          "Building Your First AI Workflow: A Real Analysis on Your Real Data",
          "Testing Together: When to Trust the Answer and When to Push Back",
          "Getting Better Results: Simple Techniques That Make a Dramatic Difference",
          "Hands-On: Run Your First AI-Powered Analysis and Evaluate What You Get"
        ]
      },
      {
        title: "Step 4: Teaching AI to Understand YOUR Organization",
        lessons: [
          "Why Generic AI Doesn't Know Your Mission (And Why That's Actually Good News)",
          "Grounding AI in Your Reality: Connecting It to YOUR Documents, Reports, and History",
          "Building Your Organization's Knowledge Library—Strategic Plans, Grant Reports, Board Materials",
          "From Generic to Specific: Watch AI Go From Useless to Insightful in Real Time",
          "Hands-On: Connect Your Knowledge Library and See the Difference Immediately",
          "Trust and Verification: How to Confirm AI Is Citing Your Real Data, Not Making Things Up",
          "Responsible AI: What It Means When Your Decisions Affect Real Communities"
        ]
      },
      {
        title: "Step 5: Funding, Finance, and Fundraising — Your Numbers, Clarified",
        lessons: [
          "What Would It Mean to See Your Entire Financial and Funding Picture in Minutes?",
          "Connecting Financial Data: Budgets, Grant Expenditures, Revenue Streams, Donor Records",
          "Pattern Recognition: Surfacing Trends in Both Spending and Giving That Your Team May Miss",
          "Scenario Planning: 'What Happens If This Grant Doesn't Renew?' — Modeled in Seconds",
          "Donor Intelligence: Identifying Opportunities, At-Risk Relationships, and Major Gift Signals",
          "Hands-On: Run Your First AI-Powered Financial and Fundraising Analysis on Your Real Data",
          "Board-Ready Insights: Getting Funding and Development Answers in the Format Leaders Use"
        ]
      },
      {
        title: "Step 6: Seeing Your Impact More Clearly",
        lessons: [
          "You're Already Making an Impact — AI Helps You See It, Prove It, and Grow It",
          "Connecting Impact Data: Beneficiary Outcomes, Program Metrics, Longitudinal Trends",
          "What's Working and What Needs Attention: AI-Assisted Program Analysis",
          "From Data to Story: Turning Outcomes Into Compelling Narratives for Funders and Boards",
          "Funder Reporting Made Easier: Generating Data-Backed Summaries From Your Real Work",
          "Hands-On: Analyze a Real Program and See What the Data Reveals",
          "From Insight to Action: Using What You Learn to Strengthen What You're Already Doing"
        ]
      },
      {
        title: "Step 7: Meta-Prompting — Teaching AI How to Think About Your Problems",
        lessons: [
          "Beyond Simple Questions: What Meta-Prompting Is and Why It's a Leadership Superpower",
          "The Prompt Architect Mindset: Designing Prompts That Get Expert-Level Responses Every Time",
          "Chain-of-Thought for Leaders: Getting AI to Show Its Reasoning So You Can Verify It",
          "Role-Based Prompting: Making AI Think Like a Financial Analyst, Program Evaluator, or Strategist",
          "Building Reusable Prompt Templates Your Whole Team Can Use",
          "Hands-On: Create a Library of Meta-Prompts Tailored to Your Organization's Most Common Decisions",
          "When to Trust the Output and When to Redesign the Prompt: Developing Your Judgment"
        ]
      },
      {
        title: "Step 8: Your AI Toolkit — Choosing and Using the Right Tools",
        lessons: [
          "The AI Tool Landscape: An Honest Tour of What's Available for Non-Technical Leaders",
          "Evaluating AI Tools: What to Look For, What to Avoid, and What Questions to Ask Vendors",
          "No-Code Platforms That Actually Work: Hands-On With Tools You Can Use Monday Morning",
          "Connecting Tools to Your Workflow: Email, Spreadsheets, Calendars, and Communication Platforms",
          "Automating the Repetitive: Setting Up Simple AI-Powered Workflows for Weekly Tasks",
          "Hands-On: Build a Complete Workflow That Connects Your Data to AI to a Decision Output",
          "Security, Privacy, and Vendor Evaluation: What Mission-Driven Organizations Need to Know"
        ]
      },
      {
        title: "Step 9: Bringing It All Together — Your Decision Intelligence Roadmap",
        lessons: [
          "The Full Picture: How Everything You've Built Works Together",
          "Cross-Domain Intelligence: When Financial Analysis and Impact Data Tell a Bigger Story",
          "Your Decision Dashboard: One Place to Access All Your AI-Powered Insights",
          "Setting Up Simple Automations for the Analysis You Do Every Week",
          "Growing Over Time: How to Expand Your AI Capabilities as Your Confidence Grows",
          "Keeping It Current: Simple Habits for Updating Your AI Tools With Fresh Data",
          "Your 90-Day Roadmap: Realistic Next Steps to Deepen AI Adoption Across Your Organization"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Educator & Leadership Partner",
      bio: "Dr. Lee has spent his career helping non-technical leaders develop real confidence with AI. He doesn't teach technology for technology's sake—he helps people lead better. His philosophy: your judgment, your experience, and your mission knowledge are irreplaceable. AI just gives you better information to work with."
    },
    faqs: [
      {
        question: "I'm not a tech person. Is this really for me?",
        answer: "This is specifically for you. This bootcamp was designed for organizational leaders—Executive Directors, CEOs, program directors, development leads—not engineers. There's no coding, no jargon, no assumption that you've used AI before. We start where you are. Before Day 1, every participant completes an AI Readiness Assessment so we can tailor the material to your comfort level, your data, and your real challenges. You'll be surprised how capable you feel by the end of Day 1."
      },
      {
        question: "What is the AI Readiness Assessment?",
        answer: "Before the bootcamp, every participant completes a personalized assessment that looks at where your organization stands with data, what kinds of decisions you're making, and where AI might (and might not) help. We use the results to customize examples, exercises, and pacing so the experience resonates with YOUR team—not a room full of engineers. Whether you're AI-curious or AI-cautious, the assessment ensures we meet you where you are."
      },
      {
        question: "I'm honestly skeptical about AI. Should I still attend?",
        answer: "Especially if you're skeptical. We don't start with hype—we start with honesty. What can AI actually do? Where does it fall short? Where should you absolutely NOT rely on it? Healthy skepticism makes you a better leader in this space, not a worse one. This bootcamp gives you the firsthand experience to form your own informed opinion—not one shaped by headlines or vendor pitches."
      },
      {
        question: "I'm worried AI will replace the human elements of our work.",
        answer: "It won't—and it shouldn't. AI is a terrible replacement for human judgment, empathy, and relationships. But it's an extraordinary tool for handling the analysis, pattern recognition, and data synthesis that currently consume hours of your team's time. The goal is to give your people more capacity for the work that only humans can do—the listening, the strategy, the relationship-building—by letting AI handle the manual, repetitive parts."
      },
      {
        question: "What data should we bring?",
        answer: "Bring whatever your organization works with day to day: grant reports, program outcome data, financial summaries, donor records, strategic plans, stakeholder surveys, board materials. The more relevant data you bring, the more personal and useful the experience will be. Your AI Readiness Assessment will include specific guidance on what to prepare—and we help you organize everything during the bootcamp."
      },
      {
        question: "Is our organizational data safe?",
        answer: "Yes. Your data stays on your machine or in your organization's private environment. Nothing is shared with other participants. We cover data privacy and responsible AI practices as part of the curriculum—including specific guidance for protecting beneficiary and donor information. When your work affects real communities, data ethics isn't optional. It's built into everything we do."
      },
      {
        question: "Can this be delivered as 4 half-day sessions instead of 2 full days?",
        answer: "Yes! We offer the same content as 4 Half-Day Sessions (4 × 4 hours, spread across 2 weeks). Same outcomes, same hands-on experience—just structured for teams who can't step away for 2 consecutive days. This is our most popular format for organizations with packed calendars."
      },
      {
        question: "What will we actually leave with?",
        answer: "You'll leave with three things: first, a clear and honest understanding of how AI can support your leadership. Second, hands-on confidence—you'll have built real AI-powered workflows on your own data during the bootcamp. And third, a set of working AI advisors tailored to your organization's needs—for grants, impact analysis, fundraising, and stakeholder intelligence—plus a 90-day roadmap to deepen adoption at your own pace. This isn't theory. You leave with tools you can use Monday morning."
      },
      {
        question: "Can our whole leadership team attend together?",
        answer: "Yes—and we strongly recommend it. When your ED, program director, development lead, and operations manager go through this together, the shared language and confidence changes how your entire team approaches decisions. We offer team rates for 3+ participants from the same organization."
      },
      {
        question: "How is this different from just using ChatGPT?",
        answer: "ChatGPT doesn't know your organization, your beneficiaries, or your strategic plan. It gives generic answers that might sound impressive but miss your reality entirely. What you build here is grounded in YOUR data—it references your actual reports, analyzes your real numbers, and understands your specific context. It's the difference between asking a stranger for advice and working with someone who's read every document your organization has ever produced."
      }
    ],
    signatureSolution: {
      stages: [
        {
          title: "Clarity",
          subtitle: "Shu (守) - See Clearly",
          weeks: "Day 1 Morning",
          from: "I know AI is everywhere but I honestly don't know what it can do for an organization like ours—or if I even trust it.",
          to: "I have a clear, honest understanding of where AI helps and where it doesn't. My data is connected and I've seen it work on OUR information for the first time.",
          moat: "Informed Confidence",
          moatDesc: "You now see AI clearly—not through hype or fear, but through your own firsthand experience with your own data.",
          color: "blue"
        },
        {
          title: "Capability",
          subtitle: "Ha (破) - Build Confidence",
          weeks: "Day 1 Afternoon – Day 2 Morning",
          from: "I've seen what's possible but I need to go deeper—finances, impact, fundraising—on OUR real data.",
          to: "I've personally built AI-powered analysis workflows for our grant data, program outcomes, and development pipeline. I did it myself and I understand how it works.",
          moat: "Hands-On Confidence",
          moatDesc: "You're no longer dependent on vendors or consultants to use AI. You've built it yourself and you know how to refine it.",
          color: "purple"
        },
        {
          title: "Leadership",
          subtitle: "Ri (離) - Lead the Way",
          weeks: "Day 2 Afternoon",
          from: "I have new capabilities but I need to bring this back to my team and make it part of how we work.",
          to: "I have a complete set of AI-powered tools, a unified dashboard, and a 90-day roadmap to lead AI adoption across my organization—on my terms.",
          moat: "Leadership Advantage",
          moatDesc: "You're now the person in the room who understands AI, knows what it can do, and can lead your organization forward with confidence.",
          color: "green"
        }
      ],
      steps: [
        {
          title: "Step 1: Demystifying AI",
          from: "I've heard a lot about AI but don't know what's real, what's hype, or how it applies to us",
          to: "I have a clear, honest understanding of what AI can and can't do—and I've seen it work on real organizational data",
          moat: "Clarity: You can now cut through the noise and make informed decisions about AI for your organization",
          stage: 1
        },
        {
          title: "Step 2: Your Data Is More Valuable Than You Think",
          from: "Our data is scattered across spreadsheets, reports, and disconnected systems",
          to: "Our data is connected, organized, and AI-ready—I did it myself and it was simpler than I expected",
          moat: "Foundation: Your organizational data, properly connected, becomes your most powerful leadership asset",
          stage: 1
        },
        {
          title: "Step 3: Asking AI the Right Questions",
          from: "I've tried ChatGPT but I don't know how to get useful, trustworthy answers about OUR work",
          to: "I know how to ask AI the right questions and get answers grounded in our real data—not generic internet responses",
          moat: "Confidence: You've gone from AI spectator to someone who can use it effectively, right now, today",
          stage: 1
        },
        {
          title: "Step 4: Teaching AI Your Organization",
          from: "Generic AI gives generic answers because it doesn't know our mission, our history, or our community",
          to: "AI now references OUR documents, reports, and data—it understands our context and cites our actual sources",
          moat: "Trust: When AI grounds its answers in your real data, you can actually trust what it tells you",
          stage: 2
        },
        {
          title: "Step 5: Funding, Finance, and Fundraising",
          from: "Financial analysis, grant reviews, and donor research each take our team weeks—and we still miss patterns",
          to: "I can surface budget insights, model grant scenarios, and identify donor opportunities in minutes—on our real numbers",
          moat: "Funding Clarity: Faster, deeper insight into your complete financial and fundraising picture",
          stage: 2
        },
        {
          title: "Step 6: Seeing Your Impact More Clearly",
          from: "We collect impact data but struggle to turn it into strategy or tell the story to funders",
          to: "I can analyze what's working, spot what needs attention, and generate compelling impact narratives from real data",
          moat: "Impact Clarity: Your program data becomes both a strategic tool and a storytelling engine",
          stage: 2
        },
        {
          title: "Step 7: Meta-Prompting — Teaching AI How to Think",
          from: "I get generic or unhelpful answers because I don't know how to ask AI the right way",
          to: "I can design expert-level prompts, build reusable templates, and teach my team to get reliable, trustworthy AI outputs every time",
          moat: "Prompt Mastery: The single most valuable AI skill for leaders—getting AI to reason like the expert you need",
          stage: 3
        },
        {
          title: "Step 8: Your AI Toolkit",
          from: "There are hundreds of AI tools and I don't know which ones are worth my time or safe for our data",
          to: "I know exactly which tools to use, how to evaluate new ones, and I've built working AI workflows into our operations",
          moat: "Tool Fluency: You can evaluate, adopt, and connect AI tools without depending on a vendor or IT team",
          stage: 3
        },
        {
          title: "Step 9: Bringing It All Together",
          from: "I have new skills but need a plan to bring this back to my team and sustain it",
          to: "I have working tools, a unified dashboard, and a realistic 90-day roadmap to lead AI adoption at my organization",
          moat: "Leadership: You're now the person who can guide your organization's AI journey with confidence and clarity",
          stage: 3
        }
      ],
      millionDollarMessages: {
        careerAdvancers: "I help organizational leaders go from AI-overwhelmed to AI-empowered in 2 days—giving them the practical skills, confidence, and working tools to make faster, smarter decisions using their own data, without writing a single line of code or depending on anyone else.",
        founders: "I help mission-driven organizations turn the data they already have into a leadership advantage—so leaders can spend less time on manual analysis and more time on the work that actually moves their mission forward."
      }
    },
    pricingModalities: {
      selfPaced: {
        price: 1497,
        description: "Self-Paced Learning",
        features: [
          "All 9 modules available immediately",
          "Lifetime access to content and updates",
          "Community support and Q&A forum",
          "Monthly live office hours with Dr. Lee",
          "Template library for all consultant types",
          "AI Readiness Assessment included",
          "Learn on your own schedule"
        ]
      },
      cohort: {
        price: 3997,
        description: "4-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee",
          "Build one consultant per week with direct feedback",
          "Cohort accountability and peer learning with fellow leaders",
          "Direct instructor access between sessions",
          "AI Readiness Assessment with personalized debrief",
          "Certificate of completion",
          "Alumni network of AI-empowered leaders"
        ]
      },
      bootcamp: {
        price: 4997,
        description: "2-Day Immersive Bootcamp",
        features: [
          "Executive format (2 full days, 9am-5pm)",
          "Also available as 4 Half-Day Sessions (4 × 4hrs over 2 weeks)",
          "AI Readiness Assessment for every participant before Day 1",
          "Bring YOUR data—leave with a working AI advisory board",
          "Hands-on support and immediate feedback throughout",
          "Limited to 15 participants for personalized attention",
          "Designed for leaders, not engineers—no coding required",
          "Includes 30-day post-bootcamp support"
        ]
      },
      founders: {
        price: 14997,
        description: "Organization Edition (1:1 Implementation + Advisory)",
        features: [
          "Everything in Bootcamp PLUS:",
          "Comprehensive AI Readiness Assessment with executive debrief",
          "4 private 1-on-1 sessions with Dr. Lee (90 min each)",
          "Custom consultant design for your specific mission and sector",
          "Data strategy review and optimization for your organization",
          "Direct Slack/email access to Dr. Lee",
          "Integration support with your existing systems",
          "Monthly lifetime office hours (30-min check-ins)",
          "Optional: $3,997/month retainer for ongoing advisory"
        ]
      }
    }
  },
  // NEW MASTERCLASSES — 2026 CATALOG EXPANSION
  {
    id: "context-engine",
    slug: "context-engine",
    name: "Master Context Engineering",
    subtitle: "Stop AI Hallucinations at the Source — the #1 Skill Behind Reliable AI",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Cutting Edge",
    price: 1497,
    hook: "Your agents don't fail because the model is weak. They fail because you fed them the wrong context. Master the discipline behind every great AI system.",
    description: "Prompt engineering was the warm-up. Context engineering is the real game: the discipline of selecting, organizing, compressing, and prioritizing exactly what enters the context window—and what stays out. With million-token contexts and autonomous agents, sloppy context means hallucinations, brittle agents, and unpredictable output. In this masterclass you'll engineer the complete context stack from first principles: instruction design and agent skills, retrieval grounding, MCP tool integration, memory and state, and multi-agent context coordination. Each module starts with a TedTalk-style deep dive, then you build the system yourself. By the end, you'll think like a context system designer—knowing exactly what gets retrieved just-in-time, what becomes persistent memory, and why your agents suddenly stopped hallucinating.",
    outcomes: [
      "Design the full context stack: instructions, retrieval, tools, memory, and state as one coherent system",
      "Engineer system prompts, agent skills, and instruction artifacts that survive contact with production",
      "Build RAG grounding pipelines that select and filter context instead of dumping documents",
      "Integrate tools through MCP so agents discover capabilities without context bloat",
      "Implement memory hierarchies: sliding windows, compaction, summarization, and persistent state",
      "Coordinate context across multi-agent systems without cross-contamination",
      "Apply compression and prioritization strategies for million-token context windows",
      "Ship production context systems with observability into every token the model sees"
    ],
    hours: 35,
    modules: 7,
    technologies: ["Python", "MCP", "DSPy", "LangChain", "LlamaIndex", "Vector Databases", "Claude API", "OpenAI API"],
    curriculum: [
      {
        title: "Module 1: The Context Revolution",
        lessons: [
          "Why Context Beats Prompts: The Discipline Nobody Named Until Now",
          "Anatomy of a Context Window: What the Model Actually Sees",
          "The Cost of Bad Context: Hallucinations, Brittle Agents, Unpredictable Output",
          "From Prompts to Workflows to Agents: Why Automation Is Non-Negotiable",
          "The Context Engineering Stack: Your Roadmap for This Masterclass"
        ]
      },
      {
        title: "Module 2: Instruction Architecture & Agent Skills",
        lessons: [
          "System Prompts as Code: Designing Instructions with Engineering Rigor",
          "Agent Skills: Packaging Expertise the Model Can Load On Demand",
          "Instruction Artifacts: Versioning, Testing, and Reusing Your Instructions",
          "Instruction Hierarchies: What Wins When Instructions Conflict",
          "Hands-On: Build a Skill-Driven Instruction Layer for Your Agent"
        ]
      },
      {
        title: "Module 3: Grounding with Retrieval",
        lessons: [
          "RAG as Context Selection: Retrieval Is a Filter, Not a Firehose",
          "Chunking, Embedding, and Indexing for Precision Retrieval",
          "Content Filtering and Reranking: Only the Relevant Survives",
          "Advanced RAG Patterns: Query Transformation and Hybrid Search",
          "Hands-On: Build a Grounding Pipeline That Kills Hallucinations"
        ]
      },
      {
        title: "Module 4: Tools Through MCP",
        lessons: [
          "Function Calling from First Principles: APIs, Services, and Code",
          "The Model Context Protocol: Standardized Tool Discovery",
          "The CLI as a Tool Surface: Direct System Interaction",
          "Tool Context Budgeting: Exposing Capability Without Bloat",
          "Hands-On: Wire Your Agent into the MCP Ecosystem"
        ]
      },
      {
        title: "Module 5: Memory & State",
        lessons: [
          "Short-Term vs Long-Term Memory: What to Keep, What to Forget",
          "Context Growth Management: Sliding Windows, Compaction, Summarization",
          "Persistent State: Sessions, Profiles, and Knowledge That Survives Restarts",
          "Memory Retrieval: Bringing the Right Past into the Present",
          "Hands-On: Add a Memory Hierarchy to Your Context Engine"
        ]
      },
      {
        title: "Module 6: Multi-Agent Context Coordination",
        lessons: [
          "Context Isolation: Why Agents Poison Each Other's Windows",
          "Shared Context Stores: Blackboards, Artifacts, and Handoffs",
          "Orchestration Patterns: Who Knows What, and When",
          "Context Routing: Delivering the Right Slice to the Right Agent",
          "Hands-On: Coordinate Context Across a Research Agent Team"
        ]
      },
      {
        title: "Module 7: Production Context Systems",
        lessons: [
          "Context Observability: Tracing Every Token into the Window",
          "Evaluating Context Quality: Relevance, Freshness, and Efficiency Metrics",
          "Cost Engineering: Caching, Compression, and Token Budgets at Scale",
          "Failure Modes: Context Poisoning, Drift, and Silent Truncation",
          "Capstone: Ship a Production-Grade Context Engine End to End"
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
        question: "How is this different from prompt engineering?",
        answer: "Prompt engineering is writing better sentences. Context engineering is systems design: programmatically selecting, retrieving, compressing, and prioritizing everything that enters the model's window—instructions, retrieved knowledge, tool results, memory, and state. Prompts are one input; you'll engineer the whole pipeline."
      },
      {
        question: "Do I need to have taken the agent masterclasses first?",
        answer: "No, but they pair perfectly. This masterclass is the connective tissue between Build Your Own Autonomous AI Agent and Build Your Own Multi-Agent AI Teams—the layer that determines whether those systems are reliable or brittle. Intermediate Python is the only hard requirement."
      },
      {
        question: "Which frameworks and models do you use?",
        answer: "You'll build the core mechanisms from first principles, then see how tools like DSPy, LangChain, and LlamaIndex implement them—working against frontier models from Anthropic, OpenAI, and Google. You learn the discipline, not a framework, so your skills survive every new release."
      },
      {
        question: "What will I have built by the end?",
        answer: "A complete, production-grade context engine: instruction and skill layer, retrieval grounding, MCP tool integration, memory hierarchy, multi-agent context coordination, and observability. It's infrastructure you can drop under any agent you ever build."
      }
    ],
    pricingModalities: {
      selfPaced: {
        price: 1497,
        description: "Self-Paced Mastery",
        features: [
          "All 7 modules available immediately",
          "Lifetime access to content and updates",
          "Community support and code reviews",
          "Monthly live office hours",
          "Learn on your own schedule"
        ]
      },
      cohort: {
        price: 5997,
        description: "7-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee",
          "Cohort accountability and peer learning",
          "Direct instructor access",
          "Graduation certificate",
          "Alumni network access"
        ]
      },
      bootcamp: {
        price: 10997,
        description: "4-Day Immersive Bootcamp",
        features: [
          "Executive intensive format",
          "Hands-on labs with immediate feedback",
          "Build your context engine in one week",
          "Limited to 15 participants"
        ]
      },
      founders: {
        price: 17997,
        description: "Founder's Edition",
        features: [
          "One-on-one mentorship with Dr. Lee",
          "Context architecture review for YOUR product",
          "Custom implementation guidance",
          "90-day satisfaction guarantee"
        ]
      }
    }
  },
  {
    id: "gpu-kernels",
    slug: "gpu-kernels",
    name: "Make AI Run 10x Faster",
    subtitle: "Write the GPU Code Frontier Labs Fight to Hire — No CUDA Required",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Extremely Rare",
    price: 1997,
    hook: "Everyone can call PyTorch. Almost nobody can write the kernels underneath it. Build FlashAttention from scratch—in Python—and join the rarest tier of AI engineers.",
    description: "The deepest moat in AI isn't the model—it's the kernel layer that makes models fast. Until recently that meant years of CUDA and C++. Triton changed everything: an open-source, Python-based GPU language built into PyTorch 2 and backed by NVIDIA, Intel, and AMD. In this masterclass, you'll go from zero GPU programming experience to writing production-grade kernels: memory coalescing, tiling, shared memory, reductions, and fusion—then build the kernels that power modern AI, including FlashAttention, native sparse attention, and sparse matrix multiplication. You'll profile real workloads, find real bottlenecks, and integrate your kernels end-to-end into PyTorch. This is how you make training and inference 10x faster—and how you become the engineer nobody can replace.",
    outcomes: [
      "Understand how GPUs actually execute code: blocks, warps, memory hierarchies, and occupancy",
      "Write production-grade Triton kernels with the block-level programming model—no CUDA required",
      "Master core optimizations: memory coalescing, tiling, shared memory, reductions, and fusion",
      "Build FlashAttention from scratch and understand why it changed transformer economics",
      "Implement Native Sparse Attention and sparse matrix multiplication kernels",
      "Profile real workloads, identify bottlenecks, and prove your speedups with data",
      "Integrate custom kernels into PyTorch models end to end",
      "Wrap kernels for production: testing, autotuning, and deployment"
    ],
    hours: 40,
    modules: 8,
    technologies: ["Triton", "PyTorch 2", "CUDA", "NVIDIA Nsight", "FlashAttention", "Python"],
    curriculum: [
      {
        title: "Module 1: How GPUs Actually Work",
        lessons: [
          "The GPU Mental Model: Thousands of Threads, One Goal",
          "Memory Hierarchies: Global, Shared, Registers—and Why They Rule Performance",
          "Why Frameworks Hit a Wall: The Case for Custom Kernels",
          "Triton vs CUDA: Block-Level Programming Explained",
          "Setting Up Your Kernel Development Environment"
        ]
      },
      {
        title: "Module 2: Your First Triton Kernels",
        lessons: [
          "Anatomy of a Triton Kernel: Programs, Blocks, and Pointers",
          "Vector Addition to Softmax: The Foundational Patterns",
          "Masking and Boundary Conditions Done Right",
          "Benchmarking Honestly: Measuring Against PyTorch Baselines",
          "Hands-On: Ship Your First Kernel That Beats the Baseline"
        ]
      },
      {
        title: "Module 3: Memory Coalescing & Tiling",
        lessons: [
          "Why Memory Access Patterns Make or Break Performance",
          "Coalescing: Aligning Threads with Memory Transactions",
          "Tiling: Decomposing Big Problems into Fast Blocks",
          "Matrix Multiplication: The Canonical Tiled Kernel",
          "Hands-On: Build a Tiled MatMul That Rivals cuBLAS"
        ]
      },
      {
        title: "Module 4: Shared Memory & Reductions",
        lessons: [
          "Shared Memory: The Programmable Cache",
          "Reduction Patterns: Sums, Maxes, and Normalizations at Speed",
          "Numerical Stability in Parallel Reductions",
          "LayerNorm and RMSNorm Kernels from Scratch",
          "Hands-On: Build the Normalization Kernels Inside Every LLM"
        ]
      },
      {
        title: "Module 5: Kernel Fusion",
        lessons: [
          "Why Fusion Wins: Eliminating Round-Trips to Global Memory",
          "Fusing Elementwise Chains: Bias, Activation, Dropout in One Pass",
          "On-Chip Fused Operations for Transformer Blocks",
          "When NOT to Fuse: Register Pressure and Occupancy Tradeoffs",
          "Hands-On: Fuse a Transformer Sub-Block and Measure the Win"
        ]
      },
      {
        title: "Module 6: Build FlashAttention from Scratch",
        lessons: [
          "Why Naive Attention Is Memory-Bound: The O(N²) Problem",
          "The FlashAttention Insight: Tiling + Online Softmax",
          "Implementing the Forward Pass Block by Block",
          "Handling Causal Masking Efficiently",
          "Hands-On: Your FlashAttention vs PyTorch SDPA—Head to Head"
        ]
      },
      {
        title: "Module 7: Sparse Attention & Sparse Compute",
        lessons: [
          "Native Sparse Attention: The Frontier of Efficient Transformers",
          "Sparse Matrix Multiplication Kernels",
          "Block-Sparse Patterns: Trading Density for Speed",
          "Where Sparsity Pays Off in Real Models",
          "Hands-On: Implement Native Sparse Attention"
        ]
      },
      {
        title: "Module 8: Profiling & Production Integration",
        lessons: [
          "Profiling Real Workloads: Finding the Actual Bottleneck",
          "Autotuning: Letting Triton Search the Configuration Space",
          "Integrating Custom Kernels into PyTorch Models End to End",
          "Testing and Wrapping Kernels for Production",
          "Capstone: Accelerate a Real Model with Your Own Kernel Suite"
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
        question: "Do I need GPU programming experience?",
        answer: "No. This masterclass assumes zero GPU programming background. Triton's block-level model in Python removes the thread-wrangling that makes CUDA brutal for beginners. If you can write NumPy-style Python, you can learn to write kernels."
      },
      {
        question: "Do I need my own GPU?",
        answer: "A consumer NVIDIA card (or a cloud GPU) is enough for every exercise. We provide cloud GPU setup guides, and the profiling techniques you learn transfer directly to datacenter hardware."
      },
      {
        question: "Why learn kernels when frameworks keep improving?",
        answer: "Because kernel engineers are the scarcest talent in AI. Frameworks are built ON kernels—Triton is literally inside PyTorch 2. When your model is memory-bound and the framework has nothing left to give, the engineer who can write a fused kernel is the one who ships. That skill commands frontier-lab compensation."
      },
      {
        question: "How does this connect to the other masterclasses?",
        answer: "It's the layer beneath everything else in the catalog. Build Your Own LLM teaches the architecture; Build Your Own Frontier AI teaches efficiency at the model level; this masterclass teaches the silicon level—the kernels that make attention, normalization, and MoE actually fast."
      }
    ],
    pricingModalities: {
      selfPaced: {
        price: 1997,
        description: "Self-Paced Mastery",
        features: [
          "All 8 modules available immediately",
          "Lifetime access to content and updates",
          "Community support and code reviews",
          "Monthly live office hours",
          "Cloud GPU setup guides included"
        ]
      },
      cohort: {
        price: 6997,
        description: "8-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee",
          "Kernel code reviews and profiling sessions",
          "Direct instructor access",
          "Graduation certificate",
          "Alumni network access"
        ]
      },
      bootcamp: {
        price: 12997,
        description: "5-Day Immersive Bootcamp",
        features: [
          "Executive intensive format",
          "Build FlashAttention in one week",
          "Live profiling labs on real hardware",
          "Limited to 15 participants"
        ]
      },
      founders: {
        price: 19997,
        description: "Founder's Edition",
        features: [
          "One-on-one mentorship with Dr. Lee",
          "Kernel-level optimization of YOUR workload",
          "Inference cost reduction roadmap",
          "90-day satisfaction guarantee"
        ]
      }
    }
  },
  {
    id: "evaluation-stack",
    slug: "evaluation-stack",
    name: "Prove Your AI Works",
    subtitle: "Master AI Evaluation — the Skill Every Enterprise Is Desperate to Hire",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "High Demand",
    price: 1197,
    hook: "Every AI team ships on vibes until the day it costs them. The engineers who can PROVE their AI works are the ones enterprises fight to hire.",
    description: "All software is broken—AI systems most of all. The difference between teams that improve and teams that guess is evaluation. This masterclass turns the foundational research on judging AI systems into working infrastructure you build yourself. You'll trace the full progression: surface metrics like BLEU and ROUGE, semantic similarity with BERTScore and COMET, and judgment-based evaluation with LLM-as-a-judge. You'll detect and quantify hallucinations, then close the loop from evaluation to alignment with RLHF, constitutional AI, and red teaming. Evaluation becomes a design constraint, not an afterthought—and you become the engineer who can look at any AI system and say, with evidence, exactly where it fails and how to fix it.",
    outcomes: [
      "Treat evaluation as a design constraint that shapes every AI system you build",
      "Implement the classic metrics—BLEU, ROUGE, and exact-match—and know precisely when they lie",
      "Deploy semantic evaluation with BERTScore and COMET for meaning-level comparison",
      "Build LLM-as-a-judge pipelines with calibration, bias controls, and rubric design",
      "Detect and quantify hallucinations with reproducible measurement",
      "Close the loop from evaluation to alignment: RLHF, constitutional AI, and red teaming",
      "Choose the right metric for any task—and defend that choice to stakeholders",
      "Build evaluation infrastructure that survives model upgrades and vendor swaps"
    ],
    hours: 30,
    modules: 8,
    technologies: ["Python", "Hugging Face", "BERTScore", "COMET", "OpenAI API", "Claude API", "pytest", "Weights & Biases"],
    curriculum: [
      {
        title: "Module 1: Evaluation as a Design Constraint",
        lessons: [
          "Why All AI Systems Are Broken—and Why That's Your Opportunity",
          "The Evaluation Taxonomy: Reference-Based, Reference-Free, Judgment-Based",
          "Failure Modes: How Teams Ship on Vibes and Pay Later",
          "Designing Systems Backward from Their Evaluation",
          "Your Evaluation Stack Roadmap"
        ]
      },
      {
        title: "Module 2: Surface Metrics That Started It All",
        lessons: [
          "BLEU: N-Gram Precision and Its Blind Spots",
          "ROUGE: Recall-Oriented Evaluation for Summarization",
          "Exact Match, F1, and Token-Level Scoring",
          "When Surface Metrics Work—and When They Actively Mislead",
          "Hands-On: Build a Surface-Metric Harness from Scratch"
        ]
      },
      {
        title: "Module 3: Semantic Similarity",
        lessons: [
          "From Strings to Meaning: Why Embeddings Changed Evaluation",
          "BERTScore: Token-Level Semantic Matching",
          "COMET: Learned Metrics That Track Human Judgment",
          "Calibrating Semantic Metrics for Your Domain",
          "Hands-On: Semantic Evaluation of a Real Generation Task"
        ]
      },
      {
        title: "Module 4: LLM-as-a-Judge",
        lessons: [
          "Judgment-Based Evaluation: The Modern Standard",
          "Rubric Design: Turning Quality into Scoreable Criteria",
          "Judge Biases: Position, Verbosity, Self-Preference—and How to Control Them",
          "Calibrating Judges Against Human Labels",
          "Hands-On: Build a Calibrated LLM Judge Pipeline"
        ]
      },
      {
        title: "Module 5: Hallucination Detection & Quantification",
        lessons: [
          "A Taxonomy of Hallucinations: Factual, Contextual, Logical",
          "Detection Strategies: Grounding Checks and Claim Verification",
          "Quantifying Hallucination Rates Reproducibly",
          "Tracking Hallucination Across Model and Prompt Changes",
          "Hands-On: Build a Hallucination Detector for a RAG System"
        ]
      },
      {
        title: "Module 6: From Evaluation to Alignment",
        lessons: [
          "Closing the Loop: Evaluation Data as Training Signal",
          "RLHF in Practice: Preference Data and Reward Models",
          "Constitutional AI: Principles as Scalable Oversight",
          "Choosing Your Alignment Strategy by Failure Mode",
          "Hands-On: Turn Eval Failures into an Alignment Dataset"
        ]
      },
      {
        title: "Module 7: Red Teaming",
        lessons: [
          "Adversarial Evaluation: Finding Failures Before Users Do",
          "Systematic Red Team Design: Coverage, Not Anecdotes",
          "Automated Adversarial Probing",
          "From Red Team Findings to Regression Suites",
          "Hands-On: Red Team a Production Assistant"
        ]
      },
      {
        title: "Module 8: Evaluation Infrastructure That Lasts",
        lessons: [
          "Eval Suites as Code: Versioned, Repeatable, CI-Integrated",
          "Building Golden Datasets That Stay Golden",
          "Metrics Dashboards and Regression Alerts",
          "Timeless Practices That Survive Every Model Release",
          "Capstone: Ship a Complete Evaluation Stack for a Real System"
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
        question: "Why is evaluation suddenly such a big deal?",
        answer: "Because every company shipped AI features in the last two years and almost none can prove they work. Evaluation engineering is now one of the most requested skills in enterprise AI hiring—the person who owns the eval stack owns the roadmap."
      },
      {
        question: "How does this relate to the AI Alignment and RLHF masterclass?",
        answer: "They're two halves of a reliability track. This masterclass is measurement: metrics, judges, hallucination detection, red teaming. AI Alignment and RLHF goes deep on the training side. Take this one first if you want the loop: measure, then align."
      },
      {
        question: "Is this only for people training their own models?",
        answer: "No—it's equally valuable if you build on APIs. Evaluation is how you compare vendors, catch regressions when models silently update, and prove your prompts and pipelines actually improved. It's the skill that survives every model release."
      },
      {
        question: "What will I have built by the end?",
        answer: "A complete evaluation stack: surface and semantic metric harnesses, a calibrated LLM-as-a-judge pipeline, a hallucination detector, a red-team regression suite, and CI-integrated eval infrastructure with dashboards."
      }
    ],
    pricingModalities: {
      selfPaced: {
        price: 1197,
        description: "Self-Paced Mastery",
        features: [
          "All 8 modules available immediately",
          "Lifetime access to content and updates",
          "Community support and code reviews",
          "Monthly live office hours"
        ]
      },
      cohort: {
        price: 4997,
        description: "8-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee",
          "Eval suite reviews on your real systems",
          "Direct instructor access",
          "Graduation certificate",
          "Alumni network access"
        ]
      },
      bootcamp: {
        price: 8997,
        description: "4-Day Immersive Bootcamp",
        features: [
          "Executive intensive format",
          "Build your eval stack in one week",
          "Live red-teaming labs",
          "Limited to 15 participants"
        ]
      },
      founders: {
        price: 12997,
        description: "Founder's Edition",
        features: [
          "One-on-one mentorship with Dr. Lee",
          "Evaluation architecture for YOUR product",
          "Custom golden dataset design",
          "90-day satisfaction guarantee"
        ]
      }
    }
  },
  {
    id: "bulletproof-ai",
    slug: "bulletproof-ai",
    name: "From Prototype to Production",
    subtitle: "The Reliability Engineering That Turns AI Demos Into Products You Can Trust",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "High Demand",
    price: 1497,
    hook: "The demo took a weekend. Production is where AI products die. Learn the reliability engineering that separates prototypes from products.",
    description: "Every team has a promising AI prototype. Almost none can grow it into a product that survives real users, real data, and real compliance. This masterclass teaches AI reliability as an engineering discipline across six dimensions—accuracy and grounding, safe agency, graceful failure, consistency, fairness, and operational efficiency—organized into a three-layer framework: Reliable Outputs (prompts, RAG, model customization), Reliable Agents (memory, tool use, orchestration), and Reliable Operations (deployment, monitoring, responsible AI). You'll measure everything with fine-grained, LLM-native rubrics like Grounding Defect Rate, Hallucination Severity Score, and FActScore—auditing not just outputs but the entire step-by-step reasoning trajectory of autonomous agents. You'll build real projects, including a multi-agent travel planner and a medical assistant, using industry standards like LangGraph and MCP, and finish with reference architectures and decision checklists you'll reuse for every system you ever ship.",
    outcomes: [
      "Engineer reliability across six dimensions: grounding, safe agency, graceful failure, consistency, fairness, efficiency",
      "Apply the three-layer framework: Reliable Outputs, Reliable Agents, Reliable Operations",
      "Eliminate hallucinations with grounded prompting, RAG, and model customization",
      "Measure quality with LLM-native rubrics: Grounding Defect Rate, Hallucination Severity Score, FActScore",
      "Audit the full reasoning trajectory of autonomous agents, not just their final answers",
      "Set safe parameters for agent memory, tool usage, and orchestration",
      "Implement semantic caching, multi-model fallbacks, and graceful degradation",
      "Deploy with monitoring and compliance patterns for standards like HIPAA and GDPR"
    ],
    hours: 40,
    modules: 11,
    technologies: ["LangGraph", "MCP", "Python", "Vector Databases", "OpenAI API", "Claude API", "Observability Tools"],
    curriculum: [
      {
        title: "Module 1: The Six Dimensions of AI Reliability",
        lessons: [
          "Why 90% of AI Prototypes Never Become Products",
          "Defining Reliability: Accuracy, Safe Agency, Graceful Failure, Consistency, Fairness, Efficiency",
          "The Three-Layer Framework: Outputs, Agents, Operations",
          "You Cannot Improve What You Do Not Measure",
          "Auditing a Fragile Prototype: Your Baseline"
        ]
      },
      {
        title: "Module 2: Reliable Outputs—Prompt Engineering for Consistency",
        lessons: [
          "Well-Engineered Prompts vs Lucky Prompts",
          "Structured Outputs and Schema Enforcement",
          "Determinism Controls: Temperature, Seeds, and Sampling",
          "Prompt Regression Testing",
          "Hands-On: Stabilize an Inconsistent Assistant"
        ]
      },
      {
        title: "Module 3: Reliable Outputs—Grounding with RAG",
        lessons: [
          "Grounding Outputs in Real Business Data",
          "Retrieval Quality: The Root of Most Hallucinations",
          "Citation and Attribution Patterns",
          "Grounding Defect Rate: Measuring What Slipped Through",
          "Hands-On: Ground a Q&A System and Prove It"
        ]
      },
      {
        title: "Module 4: Reliable Outputs—Model Customization",
        lessons: [
          "When Prompting Isn't Enough: The Customization Decision",
          "Fine-Tuning for Consistency and Domain Fit",
          "Model Compression and Quantization Without Quality Loss",
          "Version Pinning and Upgrade Discipline",
          "Hands-On: Customize a Model for a Reliability Target"
        ]
      },
      {
        title: "Module 5: LLM-Native Evaluation Rubrics",
        lessons: [
          "Beyond Accuracy: Fine-Grained Quality Measurement",
          "Hallucination Severity Score: Not All Errors Are Equal",
          "FActScore: Auditing Factual Precision Claim by Claim",
          "Building Rubrics Your Whole Team Can Run",
          "Hands-On: Score a Real System Across All Rubrics"
        ]
      },
      {
        title: "Module 6: Reliable Agents—Memory",
        lessons: [
          "Agent Memory as a Reliability Surface",
          "Memory Corruption, Staleness, and Contamination",
          "Bounding What Agents Remember and Retrieve",
          "Testing Memory Behavior Over Long Horizons",
          "Hands-On: Harden an Agent's Memory Layer"
        ]
      },
      {
        title: "Module 7: Reliable Agents—Safe Tool Use",
        lessons: [
          "Tools Are Where Agents Touch the Real World",
          "Permission Boundaries and Blast-Radius Design",
          "Validating Tool Inputs and Outputs",
          "Human Approval Gates for Consequential Actions",
          "Hands-On: Add Safety Rails to a Tool-Using Agent"
        ]
      },
      {
        title: "Module 8: Reliable Agents—Orchestration",
        lessons: [
          "Safe, Consistent Multi-Step Workflows with LangGraph",
          "MCP Integration Without Losing Control",
          "Trajectory Evaluation: Auditing Every Step, Not Just the Answer",
          "Failure Recovery in Multi-Agent Flows",
          "Hands-On: Build the Multi-Agent Travel Planner"
        ]
      },
      {
        title: "Module 9: Reliable Operations—Deployment",
        lessons: [
          "Semantic Caching: Faster and Cheaper Without Staleness",
          "Multi-Model Fallbacks: Surviving Provider Outages",
          "Graceful Degradation Under Load",
          "Cost Engineering as a Reliability Practice",
          "Hands-On: Deploy with Caching and Fallbacks"
        ]
      },
      {
        title: "Module 10: Reliable Operations—Monitoring & Responsible AI",
        lessons: [
          "Production Monitoring for AI-Specific Failures",
          "Drift Detection and Regression Alerts",
          "Fairness Auditing in Production",
          "Compliance Patterns: HIPAA, GDPR, and Enterprise Standards",
          "Hands-On: Build the Monitoring Layer"
        ]
      },
      {
        title: "Module 11: Capstone—The Medical Assistant",
        lessons: [
          "Applying All Three Layers to a High-Stakes Domain",
          "Reference Architecture Walkthrough",
          "Decision Checklists for Every Future System",
          "Capstone: Ship a Compliant, Monitored, Trustworthy Assistant",
          "Your Reliability Playbook Going Forward"
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
        question: "How is this different from Prove Your AI Works?",
        answer: "Prove Your AI Works teaches measurement as a discipline—metrics, judges, red teaming. From Prototype to Production is the systems course: it uses those measurements inside a full reliability framework covering prompts, RAG, agents, deployment, monitoring, and compliance. Together they form the complete reliability track."
      },
      {
        question: "Is this for API-based apps or self-hosted models?",
        answer: "Both. The three-layer framework applies whether you call Claude or serve your own weights. Multi-model fallbacks, semantic caching, and trajectory auditing matter in every architecture."
      },
      {
        question: "What real projects will I build?",
        answer: "A multi-agent travel planner (orchestration and trajectory auditing) and a medical assistant (grounding, compliance, and monitoring in a high-stakes domain)—plus the reusable reference architecture and checklists you'll apply to your own systems."
      },
      {
        question: "Do I need agent-building experience first?",
        answer: "Basic familiarity with LLM apps is enough. If you've taken Build Your Own Autonomous AI Agent, you'll move faster through the agent modules, but everything is built up from working code."
      }
    ],
    pricingModalities: {
      selfPaced: {
        price: 1497,
        description: "Self-Paced Mastery",
        features: [
          "All 11 modules available immediately",
          "Lifetime access to content and updates",
          "Community support and code reviews",
          "Monthly live office hours"
        ]
      },
      cohort: {
        price: 5997,
        description: "10-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee",
          "Reliability audits of your real systems",
          "Direct instructor access",
          "Graduation certificate",
          "Alumni network access"
        ]
      },
      bootcamp: {
        price: 10997,
        description: "5-Day Immersive Bootcamp",
        features: [
          "Executive intensive format",
          "Harden a real system in one week",
          "Live incident-response simulations",
          "Limited to 15 participants"
        ]
      },
      founders: {
        price: 17997,
        description: "Founder's Edition",
        features: [
          "One-on-one mentorship with Dr. Lee",
          "Reliability audit of YOUR production system",
          "Compliance architecture guidance",
          "90-day satisfaction guarantee"
        ]
      }
    }
  },
  {
    id: "agent-playbook",
    slug: "agent-playbook",
    name: "The Agent Playbook",
    subtitle: "20+ Battle-Tested Design Patterns—Stop Building Agents by Trial and Error",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Cutting Edge",
    price: 1197,
    hook: "Most agents are built by trial and error. Yours won't be. Master the pattern language that turns agent-building from guesswork into engineering.",
    description: "AI agents are showing up everywhere—and most of them are duct tape. This masterclass gives you what the field has been missing: a durable engineering vocabulary of 20+ composable, production-tested design patterns for building agents that are reliable, efficient, controllable, and easy to reason about. Every pattern follows a rigorous template—named problem, clear solution, benefits, drawbacks, variants, and composition rules—so patterns click together like well-designed APIs. You'll learn to read an underperforming agent, pinpoint exactly which quality is missing, and reach for the specific pattern that fixes it. You'll lower per-run costs without redesigning, add human-in-the-loop control where it matters, and build self-improving agents that auto-tune their own prompts. Frameworks age in months; design intuition outlasts every model release.",
    outcomes: [
      "Master 20+ composable agent design patterns with a shared engineering vocabulary",
      "Diagnose underperforming agents and map each symptom to its corrective pattern",
      "Design agent architectures deliberately instead of by accretion",
      "Cut per-run costs with reliability and cost-optimization patterns—no redesign required",
      "Apply human-in-the-loop patterns that add control without killing autonomy",
      "Build self-improving agents that auto-tune their own prompts",
      "Compose patterns into transparent, testable, deployment-ready applications",
      "Develop design intuition that outlasts every framework and model release"
    ],
    hours: 30,
    modules: 7,
    technologies: ["Python", "LLM APIs", "MCP", "Agent Frameworks (framework-agnostic)", "Evaluation Harnesses"],
    curriculum: [
      {
        title: "Module 1: Why Patterns—The End of Trial and Error",
        lessons: [
          "The State of Agent Building: Everyone Improvising",
          "What a Design Pattern Is (and Isn't) for Agents",
          "The Pattern Template: Problem, Solution, Tradeoffs, Composition Rules",
          "Reading Agent Flow Diagrams Fluently",
          "How to Diagnose an Agent Like an Architect"
        ]
      },
      {
        title: "Module 2: Composable Agent Patterns",
        lessons: [
          "The Core Pattern Set: The Building Blocks of Every Agent",
          "Composition Rules: Which Patterns Click Together—and Which Clash",
          "Worked Examples: Assembling Agents from Named Parts",
          "Variants: Adapting Patterns to Your Constraints",
          "Hands-On: Rebuild a Duct-Tape Agent with Named Patterns"
        ]
      },
      {
        title: "Module 3: Designing Agent Architectures",
        lessons: [
          "From Patterns to Architecture: Structuring Whole Systems",
          "Choosing Control Flow: Loops, Routers, and Pipelines",
          "State and Data Flow Across Pattern Boundaries",
          "Architecture Reviews: Reasoning About Agents on Paper",
          "Hands-On: Design an Architecture Before Writing a Line of Code"
        ]
      },
      {
        title: "Module 4: Reliability & Cost Optimization Patterns",
        lessons: [
          "Where Agent Costs Actually Come From",
          "Patterns That Cut Cost per Run Without Redesign",
          "Reliability Patterns: Retries, Verification, and Guarded Execution",
          "The Reliability-Cost-Latency Triangle",
          "Hands-On: Halve an Agent's Cost While Raising Its Success Rate"
        ]
      },
      {
        title: "Module 5: Human-in-the-Loop Patterns",
        lessons: [
          "Autonomy Is a Dial, Not a Switch",
          "Approval Gates, Escalation, and Steering Patterns",
          "Designing Interfaces Humans Actually Use",
          "When to Remove the Human: Graduation Criteria",
          "Hands-On: Add Control to an Agent Without Killing Its Value"
        ]
      },
      {
        title: "Module 6: Self-Improving Agents",
        lessons: [
          "Agents That Learn from Their Own Runs",
          "Auto-Tuning Prompts from Outcome Data",
          "Guardrails for Self-Modification",
          "Measuring Improvement Honestly",
          "Hands-On: Build an Agent That Optimizes Itself"
        ]
      },
      {
        title: "Module 7: Production-Ready Applications",
        lessons: [
          "Composing the Full Pattern Stack for Deployment",
          "Transparency and Testability as First-Class Requirements",
          "Pattern-Level Observability",
          "Capstone: Ship a Production Agent Built Entirely from Named Patterns",
          "Your Pattern Library Going Forward"
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
        question: "How is this different from Build Your Own Autonomous AI Agent?",
        answer: "That masterclass teaches you to build the machinery—ReAct loops, tools, memory—from scratch. The Agent Playbook is the senior-engineer sequel: the design vocabulary for architecting, diagnosing, and optimizing agents. Build the machine first, then learn to design with it."
      },
      {
        question: "Is this tied to a specific framework?",
        answer: "No—deliberately. Patterns are framework-agnostic by design. Whether you build on raw APIs, your own infrastructure from our other masterclasses, or a commercial framework, the patterns and their composition rules apply unchanged."
      },
      {
        question: "I already have agents in production. Is this still useful?",
        answer: "That's exactly who it's for. You'll learn to read an underperforming agent, name the missing quality, and apply the specific corrective pattern—including cost patterns that typically cut per-run spend dramatically without a redesign."
      },
      {
        question: "What will I have by the end?",
        answer: "A working pattern library in code, a production agent composed entirely from named patterns, and the architectural vocabulary to design and review agent systems the way senior engineers review distributed systems."
      }
    ],
    pricingModalities: {
      selfPaced: {
        price: 1197,
        description: "Self-Paced Mastery",
        features: [
          "All 7 modules available immediately",
          "Lifetime access to content and updates",
          "Community support and code reviews",
          "Monthly live office hours"
        ]
      },
      cohort: {
        price: 4997,
        description: "7-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee",
          "Architecture reviews of your agents",
          "Direct instructor access",
          "Graduation certificate",
          "Alumni network access"
        ]
      },
      bootcamp: {
        price: 8997,
        description: "4-Day Immersive Bootcamp",
        features: [
          "Executive intensive format",
          "Pattern-driven rebuild of a real agent",
          "Live design review sessions",
          "Limited to 15 participants"
        ]
      },
      founders: {
        price: 12997,
        description: "Founder's Edition",
        features: [
          "One-on-one mentorship with Dr. Lee",
          "Architecture review of YOUR agent systems",
          "Cost optimization roadmap",
          "90-day satisfaction guarantee"
        ]
      }
    }
  },
  {
    id: "agent-matrix",
    slug: "agent-architecture-matrix",
    name: "The Agent Architecture Matrix",
    subtitle: "7 Cognitive Functions × 6 Topologies—Design, Budget, and Govern Agents That Actually Ship",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Very Rare",
    price: 1197,
    hook: "What do you do with an agent that 'almost works'? Most engineers guess. You'll diagnose it on a matrix and fix it systematically.",
    description: "Agents promise to automate work at unprecedented scale—but where do you start? How do you budget dev time and token spend? How do you scale a multi-agent system that's grown organically? This masterclass teaches a systematic two-axis framework: seven cognitive functions (perception, memory, reasoning, action, reflection, collaboration, governance) crossed with six topologies (chain, route, parallel, orchestrate, hierarchy, loop), yielding 27 reusable patterns stress-tested by thousands of engineers shipping production agents in banks, manufacturers, and AI startups. You'll learn to establish architectures that manage cost and take governance seriously from day one, impose certainty on the non-deterministic behavior of LLM-driven agents through harness design, and apply everything in a full capstone: building a production code-review agent. You'll stop asking 'which tools?' and start asking the questions that actually determine whether agents ship.",
    outcomes: [
      "Apply the two-axis framework: 7 cognitive functions × 6 topologies = a complete design space",
      "Diagnose any agent by locating its weakness on the matrix",
      "Master all 27 reusable patterns, stress-tested in banks, manufacturers, and AI startups",
      "Budget dev time and token spend before you build—not after the bill arrives",
      "Design governance into agent architectures from day one",
      "Impose reliability on non-deterministic LLM behavior through harness design",
      "Choose topologies deliberately: chain, route, parallel, orchestrate, hierarchy, loop",
      "Build a complete production code-review agent as your capstone"
    ],
    hours: 30,
    modules: 7,
    technologies: ["Python", "LLM APIs", "MCP", "Git Integrations", "CI/CD", "Observability Tools"],
    curriculum: [
      {
        title: "Module 1: The Agent Paradigm Shift",
        lessons: [
          "From Deterministic Code to Non-Deterministic Systems",
          "Why 'Almost Works' Is the Default—and What to Do About It",
          "The Engineer's New Role: Harness Designer",
          "Where Agent Projects Die: Budget, Governance, and Scale",
          "The Case for a Systematic Framework"
        ]
      },
      {
        title: "Module 2: The Two-Axis Framework",
        lessons: [
          "Axis One: The Seven Cognitive Functions",
          "Axis Two: The Six Topologies",
          "The Matrix: 27 Patterns from Two Axes",
          "Locating Any Agent Problem on the Matrix",
          "Hands-On: Map an Existing Agent onto the Framework"
        ]
      },
      {
        title: "Module 3: Cognitive Functions in Depth",
        lessons: [
          "Perception: What the Agent Sees and How",
          "Memory and Reasoning: The Thinking Core",
          "Action and Reflection: Doing and Self-Correcting",
          "Collaboration and Governance: Working with Others, Staying in Bounds",
          "Hands-On: Implement Each Function as a Swappable Component"
        ]
      },
      {
        title: "Module 4: Topologies in Depth",
        lessons: [
          "Chain and Route: Sequential and Conditional Flows",
          "Parallel and Orchestrate: Concurrency and Coordination",
          "Hierarchy and Loop: Delegation and Iteration",
          "Choosing (and Changing) Topologies as Systems Grow",
          "Hands-On: Rebuild One Workflow in Three Topologies and Compare"
        ]
      },
      {
        title: "Module 5: Cost Management in AI Development",
        lessons: [
          "Token Economics: Where Agent Spend Actually Goes",
          "Budgeting Dev Time and Runtime Cost per Pattern",
          "Cost-Aware Architecture: Cheap Paths First, Expensive Paths Gated",
          "Monitoring Spend in Production",
          "Hands-On: Put a Real Agent on a Budget"
        ]
      },
      {
        title: "Module 6: Governance Patterns",
        lessons: [
          "Governance from Day One—Not Bolted On Later",
          "Certainty Harnesses: Constraining Non-Deterministic Behavior",
          "Audit Trails, Permissions, and Policy Enforcement",
          "Governance Patterns from Banks and Regulated Industries",
          "Hands-On: Wrap an Agent in a Governance Harness"
        ]
      },
      {
        title: "Module 7: Capstone—Build a Code-Review Agent",
        lessons: [
          "Designing the Agent on the Matrix Before Coding",
          "Implementing Perception, Reasoning, and Action for Code Review",
          "Adding Reflection, Cost Controls, and Governance",
          "Evaluating Review Quality Against Human Baselines",
          "Capstone: Ship Your Production Code-Review Agent"
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
        question: "How does this differ from The Agent Playbook?",
        answer: "The Agent Playbook is a pattern catalog—composable solutions to specific problems. The Agent Architecture Matrix is a design framework—a systematic method for structuring, budgeting, and governing whole systems. The Playbook gives you vocabulary; the Matrix gives you method. Serious agent architects want both."
      },
      {
        question: "Is the framework practical or academic?",
        answer: "Ruthlessly practical. The 27 patterns have been stress-tested at scale by engineers shipping production agents in banks, manufacturers, and AI startups. Every module ends with hands-on implementation, and the capstone is a working code-review agent."
      },
      {
        question: "Why so much emphasis on cost and governance?",
        answer: "Because that's where agent projects actually die. Teams can prototype an agent in a weekend; they fail when token spend surprises finance or when compliance asks who approved the agent's actions. This masterclass makes both first-class architectural concerns from day one."
      },
      {
        question: "What background do I need?",
        answer: "Intermediate Python and basic familiarity with LLM APIs. If you've built any agent—even a fragile one—you'll get dramatically more from the diagnosis-oriented modules."
      }
    ],
    pricingModalities: {
      selfPaced: {
        price: 1197,
        description: "Self-Paced Mastery",
        features: [
          "All 7 modules available immediately",
          "Lifetime access to content and updates",
          "Community support and code reviews",
          "Monthly live office hours"
        ]
      },
      cohort: {
        price: 4997,
        description: "7-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee",
          "Matrix-based reviews of your agents",
          "Direct instructor access",
          "Graduation certificate",
          "Alumni network access"
        ]
      },
      bootcamp: {
        price: 8997,
        description: "4-Day Immersive Bootcamp",
        features: [
          "Executive intensive format",
          "Design and ship the code-review agent in one week",
          "Live governance workshops",
          "Limited to 15 participants"
        ]
      },
      founders: {
        price: 12997,
        description: "Founder's Edition",
        features: [
          "One-on-one mentorship with Dr. Lee",
          "Framework applied to YOUR agent roadmap",
          "Cost and governance architecture review",
          "90-day satisfaction guarantee"
        ]
      }
    }
  },
  {
    id: "model-surgery",
    slug: "model-surgery",
    name: "Model Surgery",
    subtitle: "Prune, Distill, and Rewire Open Models—Cut 90% of the Cost, Keep the Intelligence",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Extremely Rare",
    price: 1497,
    hook: "General-purpose models carry billions of parameters you're paying for and never using. Learn to cut them out—surgically.",
    description: "Every general-purpose LLM ships with vast neural machinery your use case never touches—and you pay for it in latency, memory, and cost on every single call. This masterclass turns the latest research on structural model optimization into production practice. You'll perform hands-on surgery on open models like Llama-3, Gemma, and Qwen: pruning unnecessary components, distilling knowledge into smaller students, and applying specialized fine-tuning to create cost-effective local SLMs optimized for YOUR domain and business goals. You'll combine behavioral analysis with structural modification—identifying exactly which parts of a model contribute to your goals and removing the ones that don't—and even apply fair pruning to reduce bias at the neuron level, improving ethics and efficiency in the same operation. This is model ownership at its deepest: not just training weights, but reshaping the architecture itself.",
    outcomes: [
      "Perform structural surgery on open models: Llama-3, Gemma, and Qwen",
      "Apply universal techniques for customizing model architecture to business goals",
      "Build end-to-end rearchitecting pipelines from analysis to deployment",
      "Use behavioral analysis to find which components actually serve your use case",
      "Prune unnecessary neural components and distill knowledge into smaller students",
      "Replace external LLM APIs with local SLMs you fully own",
      "Apply fair pruning to reduce bias at the neuron level",
      "Deploy rearchitected models that cost less, run faster, and answer better in your domain"
    ],
    hours: 40,
    modules: 10,
    technologies: ["PyTorch", "Hugging Face Transformers", "Llama-3", "Gemma", "Qwen", "Quantization Tools", "Distillation Frameworks"],
    curriculum: [
      {
        title: "Module 1: Why Rearchitect—The Case for Model Surgery",
        lessons: [
          "What You're Really Paying For in a General-Purpose Model",
          "The Optimization Landscape: Fine-Tuning vs Pruning vs Distillation",
          "From Research Papers to Production Practice",
          "Setting Surgical Goals: Cost, Latency, Accuracy, Fairness",
          "Your Operating Room: Tooling and Model Setup"
        ]
      },
      {
        title: "Module 2: Universal Architecture Customization",
        lessons: [
          "Inside the Patient: Layers, Heads, and MLP Blocks",
          "Techniques That Work Across Model Families",
          "Measuring Component Contribution",
          "Safe Modification: Change, Test, Verify",
          "Hands-On: Your First Structural Modification"
        ]
      },
      {
        title: "Module 3: End-to-End Rearchitecting Pipelines",
        lessons: [
          "The Full Pipeline: Analyze → Modify → Recover → Evaluate",
          "Recovery Training: Healing the Model After Surgery",
          "Reproducibility: Pipelines You Can Run Again",
          "Regression Testing Structural Changes",
          "Hands-On: Build Your Rearchitecting Pipeline"
        ]
      },
      {
        title: "Module 4: Model Cleanup—Bias & Explainability",
        lessons: [
          "What Model Cleanup Reveals About Behavior",
          "Improving Explainability Through Structure",
          "Locating Bias in Neural Components",
          "Cleanup as a Trust-Building Practice",
          "Hands-On: Clean Up an Open Model and Document the Gains"
        ]
      },
      {
        title: "Module 5: Replacing External LLMs with Local SLMs",
        lessons: [
          "The API Replacement Decision: Economics and Risk",
          "Sizing the Local Model for Your Task",
          "Migration Strategy: Parallel Running and Cutover",
          "Proving Parity: Evaluation Before You Switch",
          "Hands-On: Replace an API Call with a Model You Own"
        ]
      },
      {
        title: "Module 6: Specialized Fine-Tuning Techniques",
        lessons: [
          "Fine-Tuning as Part of the Surgical Toolkit",
          "Domain Specialization on Modified Architectures",
          "Combining Structural Change with Targeted Training",
          "Avoiding Catastrophic Forgetting After Surgery",
          "Hands-On: Specialize Your Rearchitected Model"
        ]
      },
      {
        title: "Module 7: Pruning & Knowledge Distillation",
        lessons: [
          "Pruning Strategies: Width, Depth, and Structured Sparsity",
          "Knowledge Distillation: Teacher-Student Transfer",
          "How Much Can You Cut? Finding the Efficiency Frontier",
          "Combining Pruning and Distillation for Maximum Compression",
          "Hands-On: Distill a Pruned Model That Keeps Its Skills"
        ]
      },
      {
        title: "Module 8: Behavioral Analysis & Structural Modification",
        lessons: [
          "Watching the Model Think: Behavioral Probing",
          "Mapping Behavior to Structure",
          "Removing What Doesn't Serve Your Goals",
          "Verifying Behavior Is Preserved Where It Matters",
          "Hands-On: Behavior-Guided Surgery on a Real Model"
        ]
      },
      {
        title: "Module 9: Fair Pruning",
        lessons: [
          "Bias Lives in Neurons: The Fair Pruning Insight",
          "Identifying Bias-Carrying Components",
          "Pruning for Fairness AND Efficiency Simultaneously",
          "Measuring Bias Reduction Rigorously",
          "Hands-On: Apply Fair Pruning to an Open Model"
        ]
      },
      {
        title: "Module 10: Cost-Effective Deployment & The Road Ahead",
        lessons: [
          "Serving Your Rearchitected Models in Production",
          "Quantization as the Final Compression Step",
          "Total Cost of Ownership: Proving the 90% Savings",
          "Future Directions in Structural Optimization",
          "Capstone: Ship a Surgically Optimized Model End to End"
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
        question: "How is this different from Fine-Tune Your Own Models?",
        answer: "Fine-tuning changes what weights say; model surgery changes what architecture exists. This masterclass operates a level deeper—pruning components, distilling into smaller students, and structurally rewiring open models. Fine-tuning is one tool in the surgical kit here, not the whole discipline."
      },
      {
        question: "What models will I operate on?",
        answer: "Popular open models: Llama-3, Gemma, and Qwen families. The techniques are universal, so they transfer to new open-weight releases as they appear."
      },
      {
        question: "What hardware do I need?",
        answer: "A single consumer GPU (or affordable cloud equivalent) handles the course exercises—working on smaller open models is exactly the point. The economics of surgery mean you need LESS hardware than standard fine-tuning workflows."
      },
      {
        question: "What is fair pruning?",
        answer: "A technique for identifying and removing bias-carrying components at the neuron level—reducing model bias and model size in the same operation. You'll implement it hands-on and measure both the fairness and efficiency gains."
      }
    ],
    pricingModalities: {
      selfPaced: {
        price: 1497,
        description: "Self-Paced Mastery",
        features: [
          "All 10 modules available immediately",
          "Lifetime access to content and updates",
          "Community support and code reviews",
          "Monthly live office hours"
        ]
      },
      cohort: {
        price: 5997,
        description: "9-Week Live Cohort",
        features: [
          "Weekly live workshops with Dr. Lee",
          "Surgery reviews on your target models",
          "Direct instructor access",
          "Graduation certificate",
          "Alumni network access"
        ]
      },
      bootcamp: {
        price: 10997,
        description: "5-Day Immersive Bootcamp",
        features: [
          "Executive intensive format",
          "Prune and distill a real model in one week",
          "Live behavioral-analysis labs",
          "Limited to 15 participants"
        ]
      },
      founders: {
        price: 17997,
        description: "Founder's Edition",
        features: [
          "One-on-one mentorship with Dr. Lee",
          "Surgical optimization plan for YOUR models",
          "API-replacement cost analysis",
          "90-day satisfaction guarantee"
        ]
      }
    }
  },
  {
    id: "ai-red-team",
    slug: "ai-red-team",
    name: "Build Your Own AI Red Team",
    subtitle: "AI-Powered Security Agents—Understand Tomorrow's Attacks, Automate Today's Defenses",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Very Rare",
    price: 1497,
    hook: "Attackers are already weaponizing AI agents. The security professionals who understand how—and can build the same capabilities under proper authorization—are the ones every enterprise fights to hire.",
    description: "AI is transforming how offensive security work is designed, executed, and analyzed—on both sides of the fight. This masterclass, built for authorized security professionals, teaches you to build AI agents and multi-agent pipelines that support reconnaissance, triage, vulnerability discovery, reporting, and red-team/blue-team workflows. You'll create intelligent agents that automate parts of security testing while preserving safety, auditability, and human oversight. You'll build your first security agent, structure agentic workflows around artifacts and pipelines, and use AI to interpret results, prioritize findings, and slash manual triage. Throughout, the emphasis is on governance, authorization controls, resilience, and transparency—understanding not just where AI adds value in security work, but where it introduces operational and security risk. You'll finish with a clear framework for integrating AI into day-to-day security work responsibly.",
    outcomes: [
      "Build AI agents for authorized offensive security workflows from first principles",
      "Use LLMs for reconnaissance, triage, and vulnerability discovery",
      "Design multi-agent security pipelines with orchestration and shared artifacts",
      "Automate reporting and reduce manual triage with AI assistance",
      "Engineer authorization controls, audit trails, and human oversight into every agent",
      "Analyze failure modes, resilience, and auditing in agentic security systems",
      "Understand AI-powered attacks well enough to defend against them",
      "Integrate AI into red-team and blue-team workflows responsibly"
    ],
    hours: 35,
    modules: 8,
    technologies: ["Python", "LLM APIs", "MCP", "Security Tooling", "Multi-Agent Frameworks", "Audit Logging"],
    curriculum: [
      {
        title: "Module 1: AI in Offensive Security",
        lessons: [
          "How AI Is Reshaping Offensive and Defensive Security",
          "Authorization First: The Ethics and Legality of AI Security Work",
          "Where AI Adds Value—and Where It Adds Risk",
          "The Agentic Security Workflow at a Glance",
          "Your Responsible-AI Security Roadmap"
        ]
      },
      {
        title: "Module 2: Building Your First Security Agent",
        lessons: [
          "Why One-Off LLM Calls Break Down in Dynamic Environments",
          "The Anatomy of a Security Agent",
          "Guardrails and Scope Enforcement from Line One",
          "Logging Everything: Auditability by Design",
          "Hands-On: Build a Scoped, Auditable Security Agent"
        ]
      },
      {
        title: "Module 3: LLMs for Reconnaissance",
        lessons: [
          "Automating Recon with Language Models",
          "Structuring and Enriching Recon Data",
          "Rate Limits, Noise, and Staying in Scope",
          "Turning Raw Recon into Actionable Signal",
          "Hands-On: Build a Recon Agent"
        ]
      },
      {
        title: "Module 4: Triage & Vulnerability Discovery",
        lessons: [
          "AI-Assisted Triage: Prioritizing What Matters",
          "Vulnerability Discovery with LLM Reasoning",
          "Reducing False Positives Without Missing Real Issues",
          "Confidence Scoring and Human Escalation",
          "Hands-On: Build a Triage and Discovery Agent"
        ]
      },
      {
        title: "Module 5: Artifacts & Pipelines",
        lessons: [
          "Artifacts: The Shared Memory of Agentic Security Work",
          "Structuring Multi-Step Security Pipelines",
          "Passing State Safely Between Stages",
          "Reproducible, Reviewable Workflows",
          "Hands-On: Build an Artifact-Driven Pipeline"
        ]
      },
      {
        title: "Module 6: Multi-Agent Security Pipelines",
        lessons: [
          "Orchestrating Specialized Security Agents",
          "Coordination Patterns for Recon, Triage, and Reporting",
          "Shared Artifacts Across an Agent Team",
          "Preventing Cross-Agent Scope Creep",
          "Hands-On: Orchestrate a Multi-Agent Security Pipeline"
        ]
      },
      {
        title: "Module 7: Reporting & Blue-Team Workflows",
        lessons: [
          "AI-Assisted Reporting That Humans Trust",
          "From Findings to Prioritized Remediation",
          "Feeding Offensive Findings into Blue-Team Defenses",
          "Communicating Risk to Non-Technical Stakeholders",
          "Hands-On: Automate a Security Report"
        ]
      },
      {
        title: "Module 8: Failure Modes, Resilience & Governance",
        lessons: [
          "How Agentic Security Systems Fail",
          "Resilience and Recovery in Automated Testing",
          "Auditing Agent Decisions After the Fact",
          "The Governance Framework for AI in Security Work",
          "Capstone: Ship an Authorized, Auditable Security Pipeline"
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
        question: "Is this masterclass ethical / legal to take?",
        answer: "Yes—it is built for authorized security professionals doing sanctioned work: pentesting engagements, red-team/blue-team exercises, and defensive research. Every module emphasizes authorization controls, scope enforcement, auditability, and human oversight. It is not a guide to unauthorized attacks."
      },
      {
        question: "Who is this for?",
        answer: "Security engineers, pentesters, and red/blue-team members who want to understand AI-powered attacks and safely automate parts of their authorized workflows. Intermediate Python and a security background are assumed."
      },
      {
        question: "How does this connect to the agent masterclasses?",
        answer: "It applies the agent-building skills from Build Your Own Autonomous AI Agent and the coordination patterns from the multi-agent courses to the security domain—with governance and auditability elevated to first-class requirements."
      }
    ],
    pricingModalities: {
      selfPaced: { price: 1497, description: "Self-Paced Mastery", features: ["All 8 modules available immediately", "Lifetime access to content and updates", "Community support and code reviews", "Monthly live office hours"] },
      cohort: { price: 5997, description: "8-Week Live Cohort", features: ["Weekly live workshops with Dr. Lee", "Reviews of your authorized security agents", "Direct instructor access", "Graduation certificate", "Alumni network access"] },
      bootcamp: { price: 10997, description: "5-Day Immersive Bootcamp", features: ["Executive intensive format", "Build a security pipeline in one week", "Live governance and scoping labs", "Limited to 15 participants"] },
      founders: { price: 17997, description: "Founder's Edition", features: ["One-on-one mentorship with Dr. Lee", "Security agent architecture for YOUR team", "Governance and authorization design review", "90-day satisfaction guarantee"] }
    }
  },
  {
    id: "digital-twin",
    slug: "digital-twin",
    name: "Build Your Own Digital Twin",
    subtitle: "From Sensors to Simulation—Create Living Virtual Replicas of Real-World Systems",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "High Demand",
    price: 1497,
    hook: "The physical world is going virtual. Learn to build the living, sensor-fed replicas that let companies test, monitor, and predict without touching the real thing.",
    description: "A digital twin is a living virtual replica of a real-world system—fed by sensors, updated in real time, and rich enough to simulate, monitor, and predict. In this hands-on masterclass you'll build one end to end, drawing on software development, data science, robotics, and visual design. You'll map real-world opportunities to data, extract knowledge from legacy documents with OCR, deploy IoT sensor networks, manage real-time data streams, and build visual and geometric models of physical systems. Then you'll layer machine learning on top to make your twin predictive—and secure the whole environment for production. This is a different kind of AI course: one that reaches out of the datacenter and into factories, buildings, and machines.",
    outcomes: [
      "Build a complete digital twin from real-world system to living virtual replica",
      "Map business opportunities to the data that powers a twin",
      "Extract knowledge from legacy documents using OCR",
      "Deploy IoT sensor networks that feed your twin",
      "Manage real-time data streams at scale",
      "Build visual and geometric models of physical systems",
      "Apply machine learning to make the twin predictive",
      "Secure the digital twin environment for production"
    ],
    hours: 40,
    modules: 10,
    technologies: ["Python", "IoT Sensors", "MQTT", "OCR", "3D Modeling", "Time-Series Databases", "Machine Learning", "Computer Vision"],
    curriculum: [
      {
        title: "Module 1: Introduction to Digital Twins",
        lessons: [
          "What a Digital Twin Really Is—and Isn't",
          "Where Twins Create Value: Industry, Buildings, Machines",
          "The Anatomy of a Living Replica",
          "Software, Data, Robotics, and Design Together",
          "Your Digital Twin Roadmap"
        ]
      },
      {
        title: "Module 2: Building a Digital Twin",
        lessons: [
          "From Physical System to Virtual Model",
          "Choosing What to Represent—and at What Fidelity",
          "The Twin Architecture: Data In, Insight Out",
          "Your First Minimal Twin",
          "Hands-On: Stand Up a Basic Twin"
        ]
      },
      {
        title: "Module 3: Opportunity-to-Data Mapping",
        lessons: [
          "Starting from the Business Opportunity",
          "Mapping Outcomes to Required Data",
          "Identifying Data Sources and Gaps",
          "The Data Chain That Powers the Twin",
          "Hands-On: Build an Opportunity-to-Data Map"
        ]
      },
      {
        title: "Module 4: Legacy Document Extraction with OCR",
        lessons: [
          "The Hidden Data in Legacy Documents",
          "OCR Fundamentals for Real Documents",
          "Structuring Extracted Content",
          "Feeding Legacy Knowledge into the Twin",
          "Hands-On: Extract and Integrate Document Data"
        ]
      },
      {
        title: "Module 5: Deploying IoT Sensor Networks",
        lessons: [
          "Sensors: The Twin's Connection to Reality",
          "Designing a Sensor Network",
          "Protocols and Connectivity (MQTT and Friends)",
          "Reliability and Calibration",
          "Hands-On: Deploy a Sensor Network"
        ]
      },
      {
        title: "Module 6: Managing Real-Time Data Streams",
        lessons: [
          "Streaming Architecture for Live Twins",
          "Ingesting and Buffering High-Volume Data",
          "Time-Series Storage and Querying",
          "Handling Late, Missing, and Noisy Data",
          "Hands-On: Build a Real-Time Streaming Pipeline"
        ]
      },
      {
        title: "Module 7: Visual Modeling Techniques",
        lessons: [
          "Making the Twin Visible: 2D, 3D, and Geometric Models",
          "Mapping Sensor Data onto Visual Models",
          "Interactive Twin Dashboards",
          "Design Principles for Operator Trust",
          "Hands-On: Build a Visual Twin Interface"
        ]
      },
      {
        title: "Module 8: Data Integration Techniques",
        lessons: [
          "Fusing Data from Many Sources",
          "Reconciling Conflicting Signals",
          "Building a Unified Twin Data Model",
          "APIs for Twin Consumers",
          "Hands-On: Integrate Multiple Data Sources"
        ]
      },
      {
        title: "Module 9: Machine Learning for Digital Twins",
        lessons: [
          "From Monitoring to Prediction",
          "Anomaly Detection on Twin Data",
          "Predictive Maintenance Models",
          "Simulation and What-If Analysis",
          "Hands-On: Make Your Twin Predictive"
        ]
      },
      {
        title: "Module 10: Securing the Digital Twin",
        lessons: [
          "The Attack Surface of a Connected Twin",
          "Securing Sensors, Streams, and Models",
          "Access Control and Data Privacy",
          "Monitoring the Twin for Compromise",
          "Capstone: Ship a Secure, Predictive Digital Twin"
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
        question: "Do I need hardware or IoT experience?",
        answer: "No prior IoT experience required. You'll learn sensor networks and streaming from the ground up, and exercises can be done with simulated sensors if you don't have physical hardware. Intermediate Python is the main prerequisite."
      },
      {
        question: "How is this different from the rest of the catalog?",
        answer: "Most of the catalog lives in the datacenter. This masterclass reaches into the physical world—factories, buildings, machines—combining IoT, real-time data, visualization, and ML. It's a distinct vertical for engineers who want to bridge software and physical systems."
      },
      {
        question: "What will I have built by the end?",
        answer: "A complete, secured digital twin: sensor network, real-time streaming pipeline, visual model, integrated data sources, and predictive ML layer—applied to a real or simulated physical system."
      }
    ],
    pricingModalities: {
      selfPaced: { price: 1497, description: "Self-Paced Mastery", features: ["All 10 modules available immediately", "Lifetime access to content and updates", "Community support and code reviews", "Monthly live office hours"] },
      cohort: { price: 5997, description: "9-Week Live Cohort", features: ["Weekly live workshops with Dr. Lee", "Reviews of your twin architecture", "Direct instructor access", "Graduation certificate", "Alumni network access"] },
      bootcamp: { price: 10997, description: "5-Day Immersive Bootcamp", features: ["Executive intensive format", "Build a working twin in one week", "Live sensor and streaming labs", "Limited to 15 participants"] },
      founders: { price: 17997, description: "Founder's Edition", features: ["One-on-one mentorship with Dr. Lee", "Digital twin design for YOUR system", "Deployment and security roadmap", "90-day satisfaction guarantee"] }
    }
  },
  {
    id: "ai-data-engineer",
    slug: "ai-native-data-engineer",
    name: "The AI-Native Data Engineer",
    subtitle: "Put LLMs to Work Inside Your Pipelines—Automate the Grind, Own the Insight",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "High Demand",
    price: 997,
    hook: "Every model you build is only as good as the data feeding it. Learn to weave LLMs directly into your pipelines and turn data engineering's grind into an unfair advantage.",
    description: "Data engineering is the unglamorous foundation every AI system stands on—and it's ripe for reinvention. This masterclass is a fast, hands-on guide to integrating large language models directly into your data workflows. You'll go far beyond copy-pasting prompts: you'll craft smarter prompts for data tasks, use AI to write, debug, and optimize SQL and Python faster, embed LLMs at the API level inside pipelines for automation and enrichment, clean and transform messy real-world data with AI, and build agentic workflows that capture and scale subject-matter expertise. Everything is illustrated with instantly-familiar SQL and Python use cases, so you can apply it Monday morning. This is the data course the rest of the catalog depends on.",
    outcomes: [
      "Integrate LLMs directly into data workflows at the API level",
      "Craft prompts that get reliable results on real data tasks",
      "Use AI to write, debug, and optimize SQL and Python faster",
      "Embed AI into pipelines for automation, analysis, and enrichment",
      "Clean, transform, and extract insight from messy real-world data with AI",
      "Build agentic data workflows that capture subject-matter expertise",
      "Boost pipeline performance and efficiency, not just developer speed",
      "Ship AI-augmented data pipelines to production"
    ],
    hours: 25,
    modules: 7,
    technologies: ["Python", "SQL", "LLM APIs", "Pandas", "Data Pipelines", "Agentic Frameworks"],
    curriculum: [
      {
        title: "Module 1: Introduction to AI Data Engineering",
        lessons: [
          "Why Data Engineering Is Being Reinvented by AI",
          "Beyond the Coding Assistant: LLMs Inside Pipelines",
          "The AI-Native Data Stack",
          "Where AI Helps—and Where It Hurts—in Data Work",
          "Your AI Data Engineering Roadmap"
        ]
      },
      {
        title: "Module 2: AI and Data Workflows",
        lessons: [
          "Mapping the Modern Data Workflow",
          "Identifying High-Leverage Automation Points",
          "API-Level Integration vs Manual Prompting",
          "Cost and Latency in AI-Augmented Pipelines",
          "Hands-On: Instrument a Workflow with an LLM"
        ]
      },
      {
        title: "Module 3: Crafting Smarter Prompts for Data",
        lessons: [
          "Prompting for Structured, Reliable Data Output",
          "Schema-Constrained Generation",
          "Prompt Patterns for Transformation and Enrichment",
          "Guarding Against Silent Data Errors",
          "Hands-On: Build a Prompt Library for Data Tasks"
        ]
      },
      {
        title: "Module 4: AI for SQL and Python",
        lessons: [
          "Generating and Debugging SQL with AI",
          "Optimizing Queries with LLM Assistance",
          "Writing and Refactoring Python Data Code Faster",
          "Verifying AI-Generated Code Before It Ships",
          "Hands-On: Accelerate a Real SQL/Python Task"
        ]
      },
      {
        title: "Module 5: Integrating AI into Pipelines",
        lessons: [
          "Embedding LLM Calls at the API Level",
          "Automation, Analysis, and Enrichment in Flight",
          "Batching, Caching, and Rate Management",
          "Error Handling for AI Steps in Pipelines",
          "Hands-On: Add an AI Enrichment Stage to a Pipeline"
        ]
      },
      {
        title: "Module 6: Data Cleaning with AI",
        lessons: [
          "The Never-Ending Chore: Cleaning Messy Data",
          "AI-Driven Standardization and Deduplication",
          "Extracting Structure from Unstructured Data",
          "Validating AI-Cleaned Data",
          "Hands-On: Clean a Real Messy Dataset with AI"
        ]
      },
      {
        title: "Module 7: Building Agentic Data Workflows",
        lessons: [
          "From Steps to Agents: Autonomous Data Workflows",
          "Capturing Subject-Matter Expertise in Agents",
          "Scaling Expert Workflows Across the Team",
          "Monitoring Agentic Pipelines",
          "Capstone: Ship an Agentic Data Pipeline"
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
        question: "Is this just 'use ChatGPT to write SQL'?",
        answer: "No. That's one small piece. The core of this masterclass is integrating LLMs at the API level inside your pipelines—automating transformation, enrichment, and cleaning, and building agentic workflows that scale expertise. It's engineering, not copy-paste."
      },
      {
        question: "Why should a model-builder care about data engineering?",
        answer: "Because every model in this catalog is only as good as its data. This masterclass fills the one gap the rest of the catalog assumes away: the pipelines that produce clean, enriched, training-ready data."
      },
      {
        question: "What do I need to know already?",
        answer: "Working SQL and Python. If you can write a query and a data script, you're ready. No ML background required."
      }
    ],
    pricingModalities: {
      selfPaced: { price: 997, description: "Self-Paced Mastery", features: ["All 7 modules available immediately", "Lifetime access to content and updates", "Community support and code reviews", "Monthly live office hours"] },
      cohort: { price: 3997, description: "7-Week Live Cohort", features: ["Weekly live workshops with Dr. Lee", "Pipeline reviews on your real data", "Direct instructor access", "Graduation certificate", "Alumni network access"] },
      bootcamp: { price: 6997, description: "4-Day Immersive Bootcamp", features: ["Executive intensive format", "Build an AI pipeline in one week", "Live data-cleaning labs", "Limited to 15 participants"] },
      founders: { price: 9997, description: "Founder's Edition", features: ["One-on-one mentorship with Dr. Lee", "Pipeline architecture for YOUR data stack", "Automation opportunity audit", "90-day satisfaction guarantee"] }
    }
  },
  {
    id: "decode-codebase",
    slug: "decode-any-codebase",
    name: "Decode Any Codebase with AI",
    subtitle: "10 Timeless Mental Models to Map, Understand, and Ship Into Any Codebase in Hours",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Medium",
    price: 697,
    hook: "Working with code you didn't write is now the default. Learn the AI-driven process that maps any unfamiliar codebase in under an hour—and ships a real change the same day.",
    description: "Whether it's a legacy monster or an AI-generated project, 'code you didn't write' is now most of your job. Standard profilers, debuggers, and static analysis make understanding it slow and painful. This masterclass teaches an efficient, AI-driven process to make sense of any software project in hours—complete with prompts, workflow pipelines, and ten timeless mental models. You'll map an unfamiliar codebase on a single page in under an hour, reverse-engineer a product's intent from its schema and git history, and decode backend, frontend, ML, and infrastructure code using universal patterns. Every technique is visual-first: you'll generate ERDs, sequence diagrams, component trees, and architecture maps with a single prompt. The goal isn't to let AI think for you—it's to build the architectural thinking that makes you dangerous, then ship a real, tested PR to an unfamiliar repo.",
    outcomes: [
      "Map any unfamiliar codebase on one page in under an hour",
      "Reverse-engineer a product's intent from its schema and git history",
      "Decode backend, frontend, ML, and infrastructure code with universal patterns",
      "Generate ERDs, sequence diagrams, and architecture maps with one prompt",
      "Master 10 timeless mental models that work on any language at any scale",
      "Interrogate AI output and catch its confident nonsense",
      "Build a reusable Codebase Knowledge Builder workflow",
      "Ship a real, tested PR to an unfamiliar open-source repo"
    ],
    hours: 20,
    modules: 7,
    technologies: ["AI Coding Assistants", "Git", "Mermaid", "Static Analysis", "Prompt Workflows"],
    curriculum: [
      {
        title: "Module 1: The Architectural Thinking Advantage",
        lessons: [
          "Why 'Code You Didn't Write' Is the New Default",
          "AI as a Comprehension Tool, Not a Crutch",
          "The 10 Mental Models Overview",
          "Asking Sharper Questions, Demanding Concrete Outputs",
          "Your Codebase-Cracking Roadmap"
        ]
      },
      {
        title: "Module 2: The One-Page Codebase Map",
        lessons: [
          "Mapping an Unfamiliar Codebase Fast",
          "Finding the Entry Points and Core Flows",
          "Generating an Architecture Map with One Prompt",
          "Separating Signal from Noise",
          "Hands-On: Map a Real Repo in Under an Hour"
        ]
      },
      {
        title: "Module 3: Reverse-Engineering Intent",
        lessons: [
          "Reading a Product's Purpose from Its Schema",
          "Mining Git History for Design Decisions",
          "Reconstructing the 'Why' Behind the Code",
          "Generating ERDs from a Database",
          "Hands-On: Reverse-Engineer a Product's Intent"
        ]
      },
      {
        title: "Module 4: Decoding Backend & Data Code",
        lessons: [
          "Universal Backend Patterns",
          "Tracing Requests End to End",
          "Understanding Data Models and Migrations",
          "Generating Sequence Diagrams with AI",
          "Hands-On: Decode a Backend Service"
        ]
      },
      {
        title: "Module 5: Decoding Frontend, ML & Infra Code",
        lessons: [
          "Frontend Patterns and Component Trees",
          "Making Sense of ML Code and Pipelines",
          "Reading Infrastructure and Configuration",
          "Generating Component Trees and DAGs",
          "Hands-On: Decode a Frontend and an ML Module"
        ]
      },
      {
        title: "Module 6: The Codebase Knowledge Builder",
        lessons: [
          "Turning Ad-Hoc Exploration into a Workflow",
          "Building a Reusable Knowledge Builder Pipeline",
          "Creating an Agent Skill File for a Codebase",
          "Keeping the Map Fresh as Code Changes",
          "Hands-On: Build Your Knowledge Builder Workflow"
        ]
      },
      {
        title: "Module 7: Ship a Real Change",
        lessons: [
          "From Understanding to Contribution",
          "Scoping a Safe First Change",
          "Writing Tests That Prove It's Safe",
          "Opening a Real PR to an Unfamiliar Repo",
          "Capstone: Ship a Tested PR to an Open-Source Project"
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
        question: "How is this different from Professional Vibe Coding with Claude Code?",
        answer: "That masterclass is about building AI-augmented development infrastructure to write code faster. This one is about comprehension—using AI to understand code you didn't write, map it, and safely ship into it. Writing vs understanding: two different superpowers."
      },
      {
        question: "Is this tied to a specific language or AI tool?",
        answer: "No. The ten mental models are language-agnostic and work on any codebase at any scale. Techniques are demonstrated on real open-source projects across multiple stacks, using whichever AI coding assistant you prefer."
      },
      {
        question: "What will I walk away with?",
        answer: "A repeatable process, a prompt library, a reusable Codebase Knowledge Builder workflow, and a real tested PR shipped to an unfamiliar open-source repository."
      }
    ],
    pricingModalities: {
      selfPaced: { price: 697, description: "Self-Paced Mastery", features: ["All 7 modules available immediately", "Lifetime access to content and updates", "Community support and code reviews", "Monthly live office hours"] },
      cohort: { price: 2497, description: "7-Week Live Cohort", features: ["Weekly live workshops with Dr. Lee", "Live codebase-cracking sessions", "Direct instructor access", "Graduation certificate", "Alumni network access"] },
      bootcamp: { price: 4997, description: "3-Day Immersive Bootcamp", features: ["Executive intensive format", "Crack and contribute to a real repo", "Live PR review", "Limited to 15 participants"] },
      founders: { price: 6997, description: "Founder's Edition", features: ["One-on-one mentorship with Dr. Lee", "Onboarding workflow for YOUR codebase", "Team knowledge-transfer playbook", "90-day satisfaction guarantee"] }
    }
  },
  {
    id: "ship-ready",
    slug: "ship-ready-ai-development",
    name: "Ship-Ready: Full-Spectrum AI Development",
    subtitle: "Beyond Vibe Coding—Turn AI-Generated Code Into Production Systems You Can Trust",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Medium",
    price: 997,
    hook: "AI-generated code that 'just works' is often hiding technical debt, unverifiable logic, and slow-burn bugs. Learn the full-spectrum process that turns vibe coding into engineering.",
    description: "Generating code with AI feels effortless—but generation is only one part of software engineering. A production-grade pipeline includes specification, testing, validation, refactoring, optimization, and deployment. This masterclass teaches the end-to-end process of taking AI-assisted coding all the way to trustworthy, shipped software. You'll build a mental model for this full-spectrum approach, master agentic coding best practices, accelerate the modernization of legacy applications, and use AI for evaluation, validation, and refactoring—not just first-draft generation. You'll learn to install the checks and guardrails that catch the most common AI-coding failures from specification through production, and to use LLMs and agents to test, improve, and deploy more efficiently. This is how you get the speed of AI without the slow-burn bugs that rot a codebase.",
    outcomes: [
      "Build a mental model for full-spectrum, AI-infused development",
      "Master agentic coding best practices from spec to deployment",
      "Install checks and guardrails that catch common AI-coding failures",
      "Use AI for evaluation, validation, and refactoring—not just generation",
      "Accelerate modernization of legacy applications with AI",
      "Detect and pay down hidden technical debt in AI-generated code",
      "Apply AI to team setup and cross-functional work",
      "Test, improve, and deploy applications more efficiently with LLMs and agents"
    ],
    hours: 25,
    modules: 8,
    technologies: ["AI Coding Agents", "CI/CD", "Testing Frameworks", "Static Analysis", "Refactoring Tools", "Git"],
    curriculum: [
      {
        title: "Module 1: Beyond Generation—The Full Spectrum",
        lessons: [
          "Why 'It Just Works' Is a Trap",
          "The Full-Spectrum Development Pipeline",
          "A Mental Model for AI-Infused Engineering",
          "The Hidden Costs of Vibe-Coded Software",
          "Your Ship-Ready Roadmap"
        ]
      },
      {
        title: "Module 2: Agentic Coding Best Practices",
        lessons: [
          "Working With Coding Agents, Not Against Them",
          "Scoping Tasks Agents Can Actually Complete",
          "Context and Instructions for Reliable Output",
          "Observability for Headless Agents",
          "Hands-On: Drive an Agent Through a Real Task"
        ]
      },
      {
        title: "Module 3: Specification & Guardrails",
        lessons: [
          "Specifying Before You Generate",
          "Guardrails from Specification Through Production",
          "Catching AI's Most Common Failure Modes",
          "Encoding Standards the Agent Must Follow",
          "Hands-On: Add Guardrails to an AI Workflow"
        ]
      },
      {
        title: "Module 4: AI-Assisted Testing & Validation",
        lessons: [
          "Using AI to Generate Meaningful Tests",
          "Validating AI-Written Logic",
          "Property-Based and Adversarial Testing with AI",
          "Proving Correctness, Not Just Coverage",
          "Hands-On: Build an AI-Assisted Test Suite"
        ]
      },
      {
        title: "Module 5: Refactoring & Optimization",
        lessons: [
          "AI-Assisted Refactoring at Scale",
          "Finding and Fixing Technical Debt",
          "Performance Optimization with AI",
          "Keeping Behavior Stable While Improving Code",
          "Hands-On: Refactor an AI-Generated Module"
        ]
      },
      {
        title: "Module 6: Modernizing Legacy Applications",
        lessons: [
          "Accelerating Legacy Modernization with AI",
          "Understanding Before Rewriting",
          "Incremental Migration Strategies",
          "De-Risking Big Changes",
          "Hands-On: Modernize a Legacy Component"
        ]
      },
      {
        title: "Module 7: AI in Teams & Cross-Functional Work",
        lessons: [
          "AI in Team Setup and Workflow Design",
          "Standardizing AI Practices Across a Team",
          "Cross-Functional Collaboration with AI",
          "Measuring Team-Level Productivity Gains",
          "Hands-On: Design an AI-Augmented Team Workflow"
        ]
      },
      {
        title: "Module 8: Deployment & Production",
        lessons: [
          "AI-Assisted Deployment Pipelines",
          "Monitoring AI-Built Systems in Production",
          "Incident Response for AI-Generated Code",
          "Sustaining Quality Over Time",
          "Capstone: Ship an AI-Built Feature to Production"
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
        question: "How is this different from Professional Vibe Coding with Claude Code?",
        answer: "That masterclass gets you generating code fast with AI-augmented infrastructure. Ship-Ready is the discipline layer on top: specification, testing, validation, refactoring, and deployment that turn fast generation into trustworthy production software. Speed first, then the process that makes speed safe."
      },
      {
        question: "Is this framework- or tool-specific?",
        answer: "No. The full-spectrum process applies to any AI coding assistant and any stack. You'll use CI/CD, testing, and refactoring tools, but the practices transfer across tools and languages."
      },
      {
        question: "Who is this for?",
        answer: "Engineers and teams already using AI to write code who keep getting bitten by hidden bugs and technical debt. If you can generate code with AI but aren't sure you can trust it in production, this is for you."
      }
    ],
    pricingModalities: {
      selfPaced: { price: 997, description: "Self-Paced Mastery", features: ["All 8 modules available immediately", "Lifetime access to content and updates", "Community support and code reviews", "Monthly live office hours"] },
      cohort: { price: 3997, description: "8-Week Live Cohort", features: ["Weekly live workshops with Dr. Lee", "Reviews of your AI-development pipeline", "Direct instructor access", "Graduation certificate", "Alumni network access"] },
      bootcamp: { price: 6997, description: "4-Day Immersive Bootcamp", features: ["Executive intensive format", "Ship an AI-built feature in one week", "Live guardrail and testing labs", "Limited to 15 participants"] },
      founders: { price: 9997, description: "Founder's Edition", features: ["One-on-one mentorship with Dr. Lee", "AI-development process design for YOUR team", "Quality and guardrail audit", "90-day satisfaction guarantee"] }
    }
  },
  {
    id: "rlhf",
    slug: "human-feedback-alignment",
    name: "Teach Your AI What Humans Want",
    subtitle: "The RLHF Post-Training Stack™ — Build the Alignment Layer Behind Every Frontier Model",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Cutting Edge",
    price: 1497,
    hook: "Pretraining gives a model knowledge. RLHF gives it judgment. Master the post-training layer that turned raw language models into assistants people actually trust.",
    description: "Reinforcement Learning from Human Feedback is how a capable-but-unruly base model becomes a helpful, harmless, honest assistant. It's the technique that made ChatGPT feel different—and the post-training layer every frontier lab now depends on. This masterclass takes you inside RLHF from first principles: why it emerged to solve hard-to-specify problems, how to collect and model human preferences, how to train reward models, and how to optimize policies with the full post-training toolkit. You'll work through preference data, reward modeling, policy optimization, synthetic data generation, and modern alternatives like DPO—then wire it all into a working post-training pipeline. This is the deep, build-it-yourself companion to alignment: not the philosophy of alignment, but the machinery that produces it.",
    outcomes: [
      "Understand why RLHF emerged to solve hard-to-specify, preference-driven problems",
      "Collect, curate, and model human preference data",
      "Train reward models that capture what humans actually want",
      "Optimize policies with reinforcement learning from a reward signal",
      "Generate and use synthetic data to scale human feedback",
      "Apply modern alternatives like DPO and understand the tradeoffs",
      "Run safety regressions throughout the post-training loop",
      "Assemble a complete, working RLHF post-training pipeline"
    ],
    hours: 40,
    modules: 9,
    technologies: ["PyTorch", "Hugging Face TRL", "Transformers", "Reward Models", "DPO", "PPO", "Weights & Biases"],
    curriculum: [
      {
        title: "Module 1: Why RLHF Exists",
        lessons: [
          "The Hard-to-Specify Problem: When You Can't Write the Reward",
          "From Base Model to Assistant: The Post-Training Layer",
          "How RLHF Changed What AI Feels Like",
          "The RLHF Pipeline at a Glance",
          "Your Post-Training Roadmap"
        ]
      },
      {
        title: "Module 2: Human Preferences as Data",
        lessons: [
          "What Counts as a Preference: Pairwise, Ranked, and Rated",
          "Designing Preference Collection That Isn't Noise",
          "Annotator Guidelines and Inter-Rater Reliability",
          "Preference Data Quality Gates",
          "Hands-On: Build a Preference Dataset"
        ]
      },
      {
        title: "Module 3: Reward Modeling",
        lessons: [
          "Turning Preferences into a Scalar Reward",
          "Training a Reward Model from Pairwise Data",
          "Reward Model Evaluation and Calibration",
          "Reward Hacking: How Models Game the Signal",
          "Hands-On: Train Your First Reward Model"
        ]
      },
      {
        title: "Module 4: Policy Optimization Foundations",
        lessons: [
          "RL for Language Models: The Core Loop",
          "PPO and the Post-Training Objective",
          "KL Penalties: Staying Close to the Base Model",
          "Stability Techniques for RL Fine-Tuning",
          "Hands-On: Optimize a Policy Against Your Reward Model"
        ]
      },
      {
        title: "Module 5: Direct Preference Optimization",
        lessons: [
          "DPO: Skipping the Reward Model",
          "When DPO Beats Full RLHF—and When It Doesn't",
          "Implementing DPO End to End",
          "Comparing DPO and PPO Head to Head",
          "Hands-On: Align a Model with DPO"
        ]
      },
      {
        title: "Module 6: Synthetic Data for Feedback",
        lessons: [
          "Scaling Beyond Human Labels with Synthetic Data",
          "AI Feedback: RLAIF and Constitutional Approaches",
          "Quality Control for Synthetic Preferences",
          "Blending Human and Synthetic Signal",
          "Hands-On: Generate and Validate Synthetic Preferences"
        ]
      },
      {
        title: "Module 7: Instruction & Post-Training Recipes",
        lessons: [
          "Supervised Fine-Tuning as the Foundation",
          "Sequencing SFT, Reward Modeling, and RL",
          "Post-Training Recipes Used by Frontier Labs",
          "Ablations: Knowing Which Step Did What",
          "Hands-On: Run a Full SFT-to-RLHF Sequence"
        ]
      },
      {
        title: "Module 8: Safety in the Loop",
        lessons: [
          "Safety Regressions at Every Post-Training Step",
          "Red Teaming the Aligned Model",
          "Measuring Helpfulness vs Harmlessness Tradeoffs",
          "Guardrails Against Alignment Regressions",
          "Hands-On: Add Safety Regressions to Your Pipeline"
        ]
      },
      {
        title: "Module 9: The Complete Post-Training Pipeline",
        lessons: [
          "Assembling Preferences, Reward, Policy, and Safety",
          "Evaluating the Aligned Model End to End",
          "Deploying and Monitoring an RLHF'd Model",
          "Timeless Practices as Methods Evolve",
          "Capstone: Ship a Working RLHF Pipeline"
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
        question: "How is this different from AI Alignment and RLHF?",
        answer: "AI Alignment and RLHF is the broad alignment course—DPO, constitutional AI, and the theory of building models that do what you want. This masterclass is a deep, hands-on build of the RLHF post-training pipeline specifically: preference data, reward modeling, policy optimization, synthetic feedback, and safety regressions. Think of it as the machine-room companion to the alignment course."
      },
      {
        question: "Do I need to have trained a model before?",
        answer: "You should be comfortable with PyTorch and fine-tuning. If you've taken Build Your Own LLM or Fine-Tune Your Own Models, you're well prepared. RLHF sits on top of a base or instruction-tuned model, which you'll start from."
      },
      {
        question: "Is RLHF still relevant with DPO around?",
        answer: "Yes—and you'll learn both. DPO simplifies parts of the pipeline but doesn't replace understanding reward modeling and policy optimization. You'll implement both and learn exactly when each wins."
      }
    ],
    pricingModalities: {
      selfPaced: { price: 1497, description: "Self-Paced Mastery", features: ["All 9 modules available immediately", "Lifetime access to content and updates", "Community support and code reviews", "Monthly live office hours"] },
      cohort: { price: 5997, description: "9-Week Live Cohort", features: ["Weekly live workshops with Dr. Lee", "Pipeline reviews on your models", "Direct instructor access", "Graduation certificate", "Alumni network access"] },
      bootcamp: { price: 10997, description: "5-Day Immersive Bootcamp", features: ["Executive intensive format", "Build an RLHF pipeline in one week", "Live reward-modeling labs", "Limited to 15 participants"] },
      founders: { price: 17997, description: "Founder's Edition", features: ["One-on-one mentorship with Dr. Lee", "Post-training strategy for YOUR model", "Custom reward-model design", "90-day satisfaction guarantee"] }
    }
  },
  {
    id: "private-ai-lab",
    slug: "private-ai-lab",
    name: "Your Private AI Lab",
    subtitle: "Run Powerful AI Entirely on Your Own Machine—Free Forever, Zero Data Leaving",
    category: "Citizen Developer",
    categoryId: "citizen",
    rarity: "Flagship",
    price: 497,
    hook: "Stop paying subscription fees and sending your data to the cloud. Build your own private, offline ChatGPT—running 100% on your own machine.",
    description: "Forget subscription fees, privacy worries, and cloud dependency. This masterclass shows you exactly how to build and run a ChatGPT-style assistant entirely on your own computer—free forever, with zero data ever leaving your machine. Using open-source models, Ollama, Python, and Streamlit, every module builds toward one goal: your own private AI app, running fully offline. You'll install and manage models like Llama, Gemma, Qwen, and Mistral, set up a clean Python environment, and master Streamlit's elegant Python-only UI. You'll customize AI behavior with system prompts, temperature tuning, and model files to create your own AI personalities—and verify true privacy by watching the network stay silent while your assistant runs. No data science required; just a desire to own your AI instead of renting it.",
    outcomes: [
      "Install and run open models—Llama, Gemma, Qwen, Mistral—on your own machine",
      "Build a complete ChatGPT-like chatbot with Streamlit",
      "Add streaming responses, conversation memory, and model selection",
      "Customize AI personalities with system prompts, temperature, and model files",
      "Run AI fully offline with verifiable, provable privacy",
      "Set up a clean local Python + Ollama environment from scratch",
      "Troubleshoot memory errors, port conflicts, and common local-LLM issues",
      "Own your AI assistant with zero subscription fees and zero cloud dependency"
    ],
    hours: 15,
    modules: 7,
    technologies: ["Ollama", "Python", "Streamlit", "Llama", "Gemma", "Qwen", "Mistral"],
    curriculum: [
      {
        title: "Module 1: Your Own AI, No Cloud Required",
        lessons: [
          "Why Run AI Locally: Cost, Privacy, Control",
          "How Local Models Work",
          "Meet the Open Models: Llama, Gemma, Qwen, Mistral",
          "What You'll Build: A Private ChatGPT",
          "Setting Expectations for Local Hardware"
        ]
      },
      {
        title: "Module 2: Installing and Running Models",
        lessons: [
          "Installing Ollama",
          "Downloading and Managing Multiple Models",
          "Running Your First Local Prompt",
          "Comparing Models for Speed and Quality",
          "Hands-On: Run Four Models Locally"
        ]
      },
      {
        title: "Module 3: Your Python Environment",
        lessons: [
          "Setting Up Python the Professional Way",
          "Homebrew, VS Code, and a Clean Workspace",
          "Talking to Ollama from Python",
          "Your First Programmatic Chat",
          "Hands-On: Script a Conversation"
        ]
      },
      {
        title: "Module 4: Building the Chatbot UI",
        lessons: [
          "Streamlit: Beautiful UIs in Pure Python",
          "Building a Chat Interface in ~70 Lines",
          "Wiring the UI to Your Local Model",
          "Layout and Polish",
          "Hands-On: Build Your ChatGPT-Style App"
        ]
      },
      {
        title: "Module 5: Streaming, Memory & Model Selection",
        lessons: [
          "Streaming Responses Token by Token",
          "Adding Conversation Memory",
          "Letting Users Switch Models Live",
          "Managing State in Streamlit",
          "Hands-On: Add the Pro Features"
        ]
      },
      {
        title: "Module 6: Custom AI Personalities",
        lessons: [
          "System Prompts: Shaping Behavior",
          "Temperature and Sampling for Tone",
          "Ollama Modelfiles: Your Own Custom Models",
          "Building a Themed Assistant",
          "Hands-On: Create Your Own AI Personality"
        ]
      },
      {
        title: "Module 7: Verifiable Privacy & Troubleshooting",
        lessons: [
          "Proving Nothing Leaves Your Machine",
          "Running Fully Offline",
          "Troubleshooting Memory Errors and Port Conflicts",
          "Keeping Your Private AI Running",
          "Capstone: Ship Your Private AI Assistant"
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
        question: "Do I need to be a programmer?",
        answer: "No data science and only light Python are required. This is a Citizen Developer masterclass—every step is guided, from installing tools to shipping the app. If you can follow a recipe, you can build your private AI."
      },
      {
        question: "Do I need a Mac?",
        answer: "The workflow is demonstrated on macOS with Ollama, but the same tools (Ollama, Python, Streamlit) run on Windows and Linux. The concepts and code transfer directly."
      },
      {
        question: "Is the AI really private?",
        answer: "Yes—and you'll prove it. A whole module is devoted to verifying that nothing leaves your machine, running the assistant fully offline with the network disconnected."
      }
    ],
    pricingModalities: {
      selfPaced: { price: 497, description: "Self-Paced Mastery", features: ["All 7 modules available immediately", "Lifetime access to content and updates", "Community support", "Monthly live office hours"] },
      cohort: { price: 1997, description: "7-Week Live Cohort", features: ["Weekly live workshops with Dr. Lee", "Setup help and code reviews", "Direct instructor access", "Graduation certificate", "Alumni network access"] },
      bootcamp: { price: 3997, description: "2-Day Immersive Bootcamp", features: ["Hands-on weekend intensive", "Build your private AI in a weekend", "Live troubleshooting", "Limited to 20 participants"] },
      founders: { price: 6997, description: "Organization Edition", features: ["One-on-one setup with Dr. Lee", "Private AI deployment for your team", "Privacy and compliance walkthrough", "90-day satisfaction guarantee"] }
    }
  },
  {
    id: "image-studio",
    slug: "ai-image-studio",
    name: "Your Own AI Image Studio",
    subtitle: "Make Stunning Images with Stable Diffusion—On Your Machine, On Your Terms",
    category: "Citizen Developer",
    categoryId: "citizen",
    rarity: "High Demand",
    price: 497,
    hook: "Anyone can make damn fine images with Stable Diffusion—no data science required. Learn to get exactly the image you want, running on your own machine.",
    description: "You don't need a PhD to create striking, professional images with AI. This practical, entertaining masterclass teaches you to get the images you want out of Stable Diffusion without the jargon and technical ceremony. You'll write prompts that actually work, use custom models to dramatically improve your results, and tune Stable Diffusion until your images are just right. You'll work from both the command line and the Web UI, automate workflows with the Hugging Face Diffusers library, and even build your own custom image tools. Along the way you'll learn just enough about LoRAs and fine-tuning models to personalize the studio for your own style. This is the Citizen Developer companion to the hardcore diffusion course: less theory, more damn fine images—fast.",
    outcomes: [
      "Write image-generation prompts that actually produce what you want",
      "Use custom models to dramatically improve image quality",
      "Tune Stable Diffusion to get images just right",
      "Work fluently from both the command line and the Web UI",
      "Automate image workflows with the Hugging Face Diffusers library",
      "Personalize the studio with LoRAs and lightweight fine-tuning",
      "Create high-resolution images and custom tools",
      "Run your own private image studio on your own machine"
    ],
    hours: 15,
    modules: 7,
    technologies: ["Stable Diffusion", "Hugging Face Diffusers", "Web UI", "LoRA", "Python", "ControlNet"],
    curriculum: [
      {
        title: "Module 1: Introduction to Stable Diffusion",
        lessons: [
          "What Stable Diffusion Does—Without the Jargon",
          "Getting It Running on Your Machine",
          "Your First Generated Images",
          "How the Pieces Fit Together",
          "Your Image Studio Roadmap"
        ]
      },
      {
        title: "Module 2: Writing Effective Prompts",
        lessons: [
          "Prompts That Work vs Prompts That Don't",
          "Structure, Detail, and Style Keywords",
          "Negative Prompts and Steering",
          "Iterating Toward the Image in Your Head",
          "Hands-On: Build a Prompt Playbook"
        ]
      },
      {
        title: "Module 3: Custom Models",
        lessons: [
          "Why Custom Models Change Everything",
          "Finding and Installing Model Checkpoints",
          "Matching Models to Styles",
          "Managing a Model Library",
          "Hands-On: Transform Your Images with Custom Models"
        ]
      },
      {
        title: "Module 4: Tuning Stable Diffusion",
        lessons: [
          "Steps, Guidance, and Samplers Explained Simply",
          "Resolution and Aspect Ratios",
          "Seeds and Reproducibility",
          "Dialing In the Look You Want",
          "Hands-On: Tune a Scene to Perfection"
        ]
      },
      {
        title: "Module 5: Command Line & Web UI Workflows",
        lessons: [
          "The Web UI: Power Without Code",
          "The Command Line: Speed and Control",
          "Choosing the Right Tool for the Job",
          "Organizing Your Outputs",
          "Hands-On: Build a Two-Track Workflow"
        ]
      },
      {
        title: "Module 6: Automating with Hugging Face Diffusers",
        lessons: [
          "Generating Images from Python",
          "Batch Generation and Variations",
          "Building Repeatable Pipelines",
          "Just Enough LoRA and Fine-Tuning",
          "Hands-On: Automate a Batch of Images"
        ]
      },
      {
        title: "Module 7: Build Your Own Tools",
        lessons: [
          "Wrapping Your Workflow in a Custom Tool",
          "High-Resolution and Upscaling",
          "Personalizing the Studio to Your Style",
          "Sharing and Reusing Your Tools",
          "Capstone: Ship Your Own Image Studio"
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
        question: "How is this different from Build Your Own Image Generator?",
        answer: "Build Your Own Image Generator is the hardcore course—you build diffusion models from scratch and understand the math. Your Own AI Image Studio is the Citizen Developer companion: you use Stable Diffusion expertly to create images, without building the model. Creation vs construction."
      },
      {
        question: "Do I need a powerful GPU?",
        answer: "A consumer GPU helps, and we cover cloud options if your machine is modest. The course focuses on getting great results with the hardware you have."
      },
      {
        question: "Do I need to code?",
        answer: "Only lightly. Much of the course uses the Web UI, and the Python automation modules are fully guided. It's built for creators, not engineers."
      }
    ],
    pricingModalities: {
      selfPaced: { price: 497, description: "Self-Paced Mastery", features: ["All 7 modules available immediately", "Lifetime access to content and updates", "Community support", "Monthly live office hours"] },
      cohort: { price: 1997, description: "7-Week Live Cohort", features: ["Weekly live workshops with Dr. Lee", "Image critiques and prompt reviews", "Direct instructor access", "Graduation certificate", "Alumni network access"] },
      bootcamp: { price: 3997, description: "2-Day Immersive Bootcamp", features: ["Hands-on weekend intensive", "Build your image studio in a weekend", "Live prompt-and-tune sessions", "Limited to 20 participants"] },
      founders: { price: 6997, description: "Studio Edition", features: ["One-on-one mentorship with Dr. Lee", "Custom studio setup for your brand style", "LoRA training walkthrough", "90-day satisfaction guarantee"] }
    }
  },
  {
    id: "llm-customization",
    slug: "make-the-model-yours",
    name: "Make the Model Yours",
    subtitle: "The Complete Customization Playbook — Turn a Generic LLM Into Your Business's Unfair Advantage",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "High Demand",
    price: 1497,
    hook: "A generic model is a commodity your competitors rent too. Learn to turn an open-weights model into one that knows your business, runs on your budget, and stays reliable in production.",
    description: "Most teams reach for fine-tuning the moment a model underperforms—and waste weeks and GPUs doing the wrong thing. This masterclass is the complete customization playbook: a decision framework that tells you exactly when to prompt, when to reach for RAG, when to use LoRA or QLoRA, when full fine-tuning is worth it, and when to distill or align with DPO—weighed against real cost, latency, privacy, and ROI. One running example, an enterprise IT help desk, carries through every chapter so you can compare techniques head to head on the same problem. Everything is reproducible on affordable hardware: you'll train LoRA and QLoRA adapters on a modest card and run full fine-tuning on a single 24GB GPU. And because most fine-tuned models fail months after launch, not at launch, you'll build the production layer other courses skip entirely—a model and data registry, drift detection with canary prompts, rollback procedures, a red-team safety monitor, and an outcome-based retraining cadence. You'll walk away swapping generic LLMs for ones that know your business, respect your budget, run on your infrastructure, and stay reliable in the wild.",
    outcomes: [
      "Master a decision framework for choosing between prompting, RAG, LoRA/QLoRA, SFT, distillation, and DPO",
      "Weigh cost, latency, privacy, and ROI to pick the right technique for each problem",
      "Train LoRA and QLoRA adapters end to end on a modest consumer GPU",
      "Run full supervised fine-tuning on a single 24GB card",
      "Build a training-data pipeline with quality gates and lineage tracking",
      "Distill smaller, cheaper student models and align them with DPO",
      "Ship production ops: model/data registry, drift detection, canary prompts, and rollback",
      "Run a red-team safety monitor and an outcome-based retraining cadence"
    ],
    hours: 35,
    modules: 8,
    technologies: ["PyTorch", "Hugging Face", "PEFT", "LoRA", "QLoRA", "DPO", "Qwen", "bitsandbytes"],
    curriculum: [
      {
        title: "Module 1: The Customization Decision Framework",
        lessons: [
          "The Adaptation Spectrum: Prompting → RAG → LoRA/QLoRA → SFT → Distillation → DPO",
          "The $5K Mistake: Fine-Tuning When You Should Have Prompted",
          "Weighing Cost, Latency, Privacy, and ROI",
          "Build-vs-Buy Decisions with Real Numbers",
          "Your Customization Roadmap"
        ]
      },
      {
        title: "Module 2: The Running Example & Honest Baselines",
        lessons: [
          "Meet the Enterprise IT Help Desk (Our Case Study Throughout)",
          "Defining Success Before You Touch a GPU",
          "Establishing Baselines You Can Beat",
          "Reproducibility: Matching the Book's Numbers on Your Machine",
          "Hands-On: Set Up Your Baseline and Metrics"
        ]
      },
      {
        title: "Module 3: Prompting & RAG First",
        lessons: [
          "The Cheapest Win: Getting More from Prompting",
          "When RAG Beats Fine-Tuning",
          "Grounding the Help Desk in Real Documentation",
          "Knowing When Adaptation Isn't Needed at All",
          "Hands-On: Solve the Problem Without Fine-Tuning First"
        ]
      },
      {
        title: "Module 4: LoRA & QLoRA on a Single GPU",
        lessons: [
          "Parameter-Efficient Fine-Tuning Explained",
          "LoRA End to End on a Modest Card",
          "QLoRA: Fine-Tuning Quantized Models Cheaply",
          "Reading the Training Logs—Including the Runs That Fail",
          "Hands-On: Train a LoRA Adapter for the Help Desk"
        ]
      },
      {
        title: "Module 5: Full Supervised Fine-Tuning",
        lessons: [
          "When PEFT Isn't Enough: The Case for Full SFT",
          "Full Fine-Tuning on a Single 24GB GPU",
          "Managing Memory, Batch Size, and Stability",
          "Comparing Full SFT vs LoRA on the Same Task",
          "Hands-On: Full Fine-Tune and Compare Head to Head"
        ]
      },
      {
        title: "Module 6: Building a Training-Data Pipeline",
        lessons: [
          "Data Quality Is the Whole Game",
          "Curating Real Data with Quality Gates",
          "Generating Teacher-Model Outputs at Scale",
          "Lineage Tracking: Knowing Where Every Example Came From",
          "Hands-On: Build a Data Pipeline with Quality Gates"
        ]
      },
      {
        title: "Module 7: Distillation & Preference Alignment",
        lessons: [
          "Distilling a Smaller, Cheaper Student from a Stronger Teacher",
          "Preference Alignment with DPO",
          "Running Safety Regressions at Every Step",
          "Scaling the Same Recipe from a 4B Model to Frontier",
          "Hands-On: Distill and Align a Deployable Student"
        ]
      },
      {
        title: "Module 8: Production Ops—Where Models Really Fail",
        lessons: [
          "Why Fine-Tuned Models Fail Months After Launch, Not At Launch",
          "The Model and Data Registry",
          "Drift Detection with Canary Prompts",
          "Rollback Procedures and a Red-Team Safety Monitor",
          "Capstone: Ship a Customized Model with a Full Production Layer"
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
        question: "How is this different from Fine-Tune Your Own Models?",
        answer: "Fine-Tune Your Own Models is the hands-on weights course: LoRA, QLoRA, and full fine-tuning, deep and focused. Make the Model Yours is the strategic playbook around it—a decision framework for the whole adaptation spectrum (prompting, RAG, fine-tuning, distillation, DPO) plus the production ops layer that keeps a customized model alive: registries, drift detection, canary prompts, rollback, and safety monitoring. One teaches the technique; this one teaches which technique, when, and how to run it in production."
      },
      {
        question: "What hardware do I need?",
        answer: "Everything is reproducible on affordable, accessible hardware. You'll train LoRA and QLoRA adapters on a modest consumer card and run full fine-tuning on a single 24GB GPU such as an RTX 4090 or A30. No datacenter required, and cloud GPU options are included."
      },
      {
        question: "Will the techniques scale beyond small models?",
        answer: "Yes. The methods scale unchanged from a small model on your workstation to frontier models on a cluster. You'll learn on affordable hardware, but the decision framework and production practices apply at any scale."
      },
      {
        question: "Who is this for?",
        answer: "Engineers and technical founders who need a model that knows their business without burning budget on the wrong approach—and who need it to stay reliable in production. Intermediate Python and comfort with PyTorch are assumed."
      }
    ],
    pricingModalities: {
      selfPaced: { price: 1497, description: "Self-Paced Mastery", features: ["All 8 modules available immediately", "Lifetime access to content and updates", "Community support and code reviews", "Monthly live office hours"] },
      cohort: { price: 5997, description: "8-Week Live Cohort", features: ["Weekly live workshops with Dr. Lee", "Customization reviews on your real use case", "Direct instructor access", "Graduation certificate", "Alumni network access"] },
      bootcamp: { price: 10997, description: "5-Day Immersive Bootcamp", features: ["Executive intensive format", "Customize and ship a model in one week", "Live decision-framework and ops labs", "Limited to 15 participants"] },
      founders: { price: 17997, description: "Founder's Edition", features: ["One-on-one mentorship with Dr. Lee", "Customization strategy for YOUR business model", "Production ops and safety review", "90-day satisfaction guarantee"] }
    }
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map(course => course.slug);
}
