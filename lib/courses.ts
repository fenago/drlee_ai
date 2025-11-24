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
}

export const courses: Course[] = [
  // HARDCORE DEVELOPERS
  {
    id: "llm",
    slug: "large-language-models",
    name: "Build Your Own LLM",
    subtitle: "From Tokenization to Training: Own the Technology Behind ChatGPT",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Extremely Rare",
    price: 2997,
    hook: "The best way to understand AI is to build it yourself.",
    description: "This masterclass takes you inside the AI black box to build a GPT-style language model that runs on your laptop. You'll go from initial design through pretraining on a general corpus, and on to fine-tuning for specific tasks. Each stage is explained with clear visuals, diagrams, and working code. Without relying on any existing LLM libraries, you'll construct a base model, evolve it into a text classifier, and ultimately create a chatbot that follows your conversational instructions. By the end, you'll have a complete understanding of how LLMs work—because you built one yourself.",
    outcomes: [
      "Plan and code all the components of a GPT-style language model",
      "Implement attention mechanisms including self-attention and multi-head attention",
      "Build the complete transformer architecture: embeddings, normalization, feed-forward networks",
      "Prepare datasets suitable for LLM training with proper tokenization",
      "Pretrain your model on a general text corpus",
      "Fine-tune for text classification and instruction-following tasks",
      "Load pretrained weights (like GPT-2) into your custom architecture",
      "Apply parameter-efficient fine-tuning with LoRA",
      "Use your LLM as a personal assistant that follows your instructions"
    ],
    hours: 45,
    modules: 9,
    technologies: ["PyTorch", "Tiktoken", "GPT-2", "LoRA", "Weights & Biases", "CUDA"],
    curriculum: [
      {
        title: "Module 1: Understanding Large Language Models",
        lessons: [
          "Executive Overview: The Strategic Value of Understanding LLM Internals",
          "What Is an LLM? From Pattern Matching to Language Understanding",
          "Applications of LLMs: Where They Create Business Value",
          "Stages of Building and Using LLMs: The Complete Pipeline",
          "Introducing the Transformer Architecture: A Visual Overview",
          "A Closer Look at the GPT Architecture: What Makes It Work"
        ]
      },
      {
        title: "Module 2: Working with Text Data",
        lessons: [
          "Understanding Word Embeddings: How Meaning Becomes Numbers",
          "Tokenizing Text: Breaking Language into Learnable Units",
          "Converting Tokens into Token IDs: Building the Vocabulary",
          "Adding Special Context Tokens: Start, End, and Padding",
          "Byte Pair Encoding: The Tokenization Strategy Behind GPT",
          "Data Sampling with a Sliding Window: Creating Training Examples",
          "Creating Token Embeddings and Encoding Word Positions"
        ]
      },
      {
        title: "Module 3: Coding Attention Mechanisms",
        lessons: [
          "The Problem with Modeling Long Sequences",
          "Capturing Data Dependencies with Attention Mechanisms",
          "A Simple Self-Attention Mechanism Without Trainable Weights",
          "Computing Attention Weights for All Input Tokens",
          "Implementing Self-Attention with Trainable Weights",
          "Hiding Future Words with Causal Attention",
          "Implementing a Compact Causal Attention Class",
          "Extending Single-Head to Multi-Head Attention"
        ]
      },
      {
        title: "Module 4: Implementing a GPT Model to Generate Text",
        lessons: [
          "Coding the Complete LLM Architecture",
          "Normalizing Activations with Layer Normalization",
          "Implementing Feed Forward Networks with GELU Activations",
          "Adding Shortcut Connections for Stable Training",
          "Connecting Attention and Linear Layers in a Transformer Block",
          "Assembling the Full GPT Model",
          "Generating Text: From Model Outputs to Readable Language"
        ]
      },
      {
        title: "Module 5: Pretraining on Unlabeled Data",
        lessons: [
          "Evaluating Generative Text Models: Metrics That Matter",
          "Calculating the Text Generation Loss",
          "Computing Training and Validation Set Losses",
          "Building the Complete Training Loop",
          "Decoding Strategies: Temperature Scaling and Top-k Sampling",
          "Modifying the Text Generation Function for Better Outputs",
          "Loading and Saving Model Weights in PyTorch",
          "Loading Pretrained Weights: Using GPT-2 as a Starting Point"
        ]
      },
      {
        title: "Module 6: Fine-Tuning for Classification",
        lessons: [
          "Different Categories of Fine-Tuning: When to Use What",
          "Preparing a Classification Dataset",
          "Creating Efficient Data Loaders",
          "Initializing a Model with Pretrained Weights",
          "Adding a Classification Head to Your LLM",
          "Calculating Classification Loss and Accuracy",
          "Fine-Tuning on Supervised Data",
          "Using Your LLM as a Spam Classifier: End-to-End Example"
        ]
      },
      {
        title: "Module 7: Fine-Tuning to Follow Instructions",
        lessons: [
          "Introduction to Instruction Fine-Tuning",
          "Preparing a Dataset for Supervised Instruction Fine-Tuning",
          "Organizing Data into Training Batches",
          "Creating Data Loaders for Instruction Datasets",
          "Loading a Pretrained LLM for Fine-Tuning",
          "Fine-Tuning on Instruction Data",
          "Extracting and Saving Model Responses",
          "Evaluating Your Instruction-Following LLM"
        ]
      },
      {
        title: "Module 8: Parameter-Efficient Fine-Tuning with LoRA",
        lessons: [
          "Introduction to LoRA: Why Full Fine-Tuning Isn't Always Necessary",
          "The LoRA Architecture: Low-Rank Adaptation Explained",
          "Preparing Your Dataset for LoRA Training",
          "Initializing and Modifying the Model for LoRA",
          "Training with LoRA: Memory-Efficient Fine-Tuning",
          "Comparing LoRA vs. Full Fine-Tuning: Trade-offs and Results",
          "Deploying LoRA-Adapted Models"
        ]
      },
      {
        title: "Module 9: Advanced Training Techniques and Deployment",
        lessons: [
          "Learning Rate Warmup: Starting Training Right",
          "Cosine Decay: Scheduling Learning Rates for Better Convergence",
          "Gradient Clipping: Preventing Exploding Gradients",
          "The Complete Modified Training Function",
          "GPU Optimization: Making Training Faster",
          "Single-GPU and Multi-GPU Training Strategies",
          "Capstone: Your Personal AI Assistant Running Locally"
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
        question: "What technical background do I need?",
        answer: "You need intermediate Python skills and some knowledge of machine learning concepts. We focus on applied implementation—building intuition through code rather than theory. No PhD required."
      },
      {
        question: "What hardware do I need?",
        answer: "The LLM you create will run on any modern laptop. GPU acceleration is optional but helpful—cloud GPU options are provided for faster training. No specialized hardware required to get started."
      },
      {
        question: "Will I actually build a working language model?",
        answer: "Yes. You'll build a complete GPT-style model from scratch, pretrain it, fine-tune it for classification, and create an instruction-following chatbot. It runs locally on your machine."
      },
      {
        question: "How is this different from using the OpenAI API?",
        answer: "Instead of treating the model as a black box, you'll understand every component because you built it. This gives you the knowledge to customize, optimize, and create proprietary AI systems."
      },
      {
        question: "Can I use pretrained weights like GPT-2?",
        answer: "Yes. You'll learn to load pretrained weights into your custom architecture, giving you a powerful starting point for fine-tuning without training from scratch."
      },
      {
        question: "What's the business value of building my own LLM?",
        answer: "Understanding LLM internals enables better vendor evaluation, informed build-vs-buy decisions, and the ability to create proprietary AI capabilities that differentiate your organization."
      }
    ]
  },
  {
    id: "reasoning",
    slug: "reasoning-models",
    name: "Build Your Own Reasoning Model",
    subtitle: "Train AI That Thinks Before It Answers—No API Required",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Cutting Edge",
    price: 2497,
    hook: "The models winning today think before they answer. Learn to build that capability.",
    description: "Reasoning models represent a fundamental leap in AI capability—they decompose complex problems into verifiable steps, producing dramatically more reliable answers in mathematics, logic, and code. These capabilities aren't academic curiosities; they're already integrated into frontier systems and increasingly define competitive advantage. This intensive masterclass combines rigorous technical implementation with strategic business context. You'll understand not just how to build reasoning capabilities, but when and why to invest in them. Starting with a compact pre-trained model that runs on standard hardware, you'll systematically upgrade its capabilities—measuring performance at each stage, implementing inference-time scaling techniques, training with reinforcement learning, and applying distillation from larger models. The result: a complete reasoning stack you've constructed yourself, with the deep understanding to extend it for research or production applications.",
    outcomes: [
      "Implement core reasoning improvements for LLMs from first principles",
      "Build complete evaluation pipelines using judgment-based and benchmark-based methods",
      "Improve reasoning at inference time without updating model weights",
      "Apply chain-of-thought prompting, temperature scaling, and self-consistency techniques",
      "Use reinforcement learning to integrate external tools like calculators and code interpreters",
      "Apply distillation techniques to learn reasoning capabilities from larger models",
      "Understand the full reasoning model development pipeline from pre-training to deployment",
      "Design verification systems that grade mathematical and logical correctness",
      "Balance output diversity and coherence with advanced sampling strategies"
    ],
    hours: 45,
    modules: 9,
    technologies: ["PyTorch", "Transformers", "Qwen", "Ollama", "GRPO", "vLLM", "Weights & Biases"],
    curriculum: [
      {
        title: "Module 1: The Strategic Landscape of Reasoning Models",
        lessons: [
          "Executive Overview: Why Reasoning Defines the Next Wave of AI Advantage",
          "The Business Case: When Reasoning Capabilities Create Defensible Value",
          "Defining Reasoning in LLMs: Pattern Matching vs. Multi-Step Inference",
          "The Standard LLM Pipeline: Where Reasoning Enhancement Fits",
          "Training vs. Inference Approaches: Strategic Trade-offs",
          "Build vs. Buy: Making Informed Infrastructure Decisions"
        ]
      },
      {
        title: "Module 2: Generating Text with Pre-trained Models",
        lessons: [
          "Introduction to LLMs for Text Generation: Architecture Refresher",
          "Setting Up the Development Environment: Tools and Dependencies",
          "Hardware Requirements and Recommendations: Running on Consumer GPUs",
          "Preparing Input Texts: Tokenization and Context Windows",
          "Loading Pre-trained Models: Working with Open-Weight Checkpoints",
          "The Sequential Text Generation Process: Step-by-Step Walkthrough",
          "Coding a Minimal Text Generation Function from Scratch"
        ]
      },
      {
        title: "Module 3: Accelerating Inference for Reasoning",
        lessons: [
          "The Inference Bottleneck: Why Speed Matters for Reasoning",
          "Faster Inference via KV Caching: Implementation and Trade-offs",
          "PyTorch Model Compilation: Optimizing the Computation Graph",
          "Batching Strategies for Reasoning Workloads",
          "Measuring and Benchmarking Inference Performance",
          "Cost Analysis: Inference Economics for Production Reasoning Systems"
        ]
      },
      {
        title: "Module 4: Evaluating Reasoning Models",
        lessons: [
          "The Evaluation Challenge: Why Traditional Metrics Fall Short",
          "Building a Math Verifier: Extracting and Normalizing Answers",
          "Verifying Mathematical Equivalence: Handling Edge Cases",
          "Grading Answers: Binary Correctness vs. Partial Credit",
          "Loading and Preparing Evaluation Datasets",
          "Benchmark-Based Evaluation: GSM8K, MATH, and Beyond",
          "LLM-as-a-Judge: Using Models to Evaluate Models",
          "Comparing Models Using Preferences and Leaderboards"
        ]
      },
      {
        title: "Module 5: Inference-Time Scaling",
        lessons: [
          "Introduction to Inference-Time Scaling: Reasoning Without Retraining",
          "Chain-of-Thought Prompting: Generating Better Responses Step-by-Step",
          "Understanding Token Selection: From Logits to Probabilities",
          "Temperature Scaling: Controlling Output Diversity",
          "Top-p (Nucleus) Sampling: Balancing Diversity and Coherence",
          "Adding Temperature and Top-p to Your Generation Function",
          "Self-Consistency: Improving Accuracy Through Multiple Samples",
          "Combining Techniques: A Production-Ready Inference Pipeline"
        ]
      },
      {
        title: "Module 6: Training Reasoning Models with Reinforcement Learning",
        lessons: [
          "Why Reinforcement Learning? Moving Beyond Supervised Fine-Tuning",
          "Reward Modeling: Teaching Models What Good Reasoning Looks Like",
          "Policy Optimization: PPO and Its Variants for Language Models",
          "Group Relative Policy Optimization (GRPO): Simplified RL for Reasoning",
          "Integrating External Tools: Calculators, Code Interpreters, and Search",
          "Designing Reward Functions for Mathematical Reasoning",
          "Training Loops: Implementation and Debugging",
          "Evaluating RL-Trained Models: Before and After Comparison"
        ]
      },
      {
        title: "Module 7: Distilling Reasoning Models",
        lessons: [
          "Knowledge Distillation: Learning from Larger Reasoning Models",
          "Teacher-Student Architectures for Reasoning Transfer",
          "Generating Synthetic Reasoning Traces from Teacher Models",
          "Fine-Tuning on Distilled Data: Best Practices",
          "Evaluating Distilled Models: Measuring Reasoning Fidelity",
          "The Trade-off Triangle: Size, Speed, and Reasoning Quality",
          "Strategic Implications: When to Distill vs. Train from Scratch"
        ]
      },
      {
        title: "Module 8: Advanced Reasoning Architectures",
        lessons: [
          "Tree of Thought: Exploring Multiple Reasoning Paths",
          "ReAct Framework: Combining Reasoning with Action",
          "Reflexion and Self-Correction: Learning from Mistakes",
          "Tool-Augmented Reasoning: Extending Model Capabilities",
          "Multi-Agent Reasoning: Debate and Verification Patterns",
          "Implementing a Complete Reasoning Pipeline"
        ]
      },
      {
        title: "Module 9: Production Deployment and Future Directions",
        lessons: [
          "Deploying Reasoning Models: Latency vs. Quality Trade-offs",
          "Serving Reasoning Workloads at Scale",
          "Monitoring Reasoning Quality in Production",
          "The Frontier: What's Next in Reasoning Research",
          "Capstone Project: Building Your Complete Reasoning Stack",
          "From Research to Production: The Path Forward"
        ]
      }
    ],
    instructor: {
      name: "Dr. Lee",
      title: "AI Architect & Educator",
      bio: "Former ML lead at a Fortune 500 company, Dr. Lee has trained hundreds of engineers to build AI from first principles. His teaching philosophy: the best way to understand something is to build it yourself."
    },
    faqs: [
      {
        question: "Is this just about prompt engineering?",
        answer: "It goes far beyond prompting. While you'll learn chain-of-thought and self-consistency techniques, you'll also implement reinforcement learning training, build verification systems, and apply distillation—the full reasoning model development pipeline."
      },
      {
        question: "What hardware do I need?",
        answer: "The course is designed to run on consumer hardware—a standard laptop with a GPU is sufficient. We use compact base models (7B parameters or smaller) that fit in 8GB VRAM. Cloud GPU options are provided for faster training."
      },
      {
        question: "How does this differ from the Large Language Models course?",
        answer: "The LLM course teaches you to build the base model architecture. This course assumes you have a pre-trained model and focuses on enhancing its reasoning capabilities through inference-time techniques, RL training, and distillation."
      },
      {
        question: "Will I build a working reasoning model?",
        answer: "Yes. By the end, you'll have a small but capable reasoning stack that demonstrates measurable improvements on mathematical and logical benchmarks—built entirely from scratch on your own machine."
      },
      {
        question: "What's the business case for reasoning models?",
        answer: "Reasoning models dramatically improve reliability on complex tasks—reducing errors, enabling automation of knowledge work, and creating defensible AI capabilities. The executive context throughout the course helps you make informed build vs. buy decisions."
      },
      {
        question: "Do I need to take the LLM course first?",
        answer: "Not required, but recommended. This course includes a quick refresher on transformer architecture, but deeper understanding from the LLM course will accelerate your learning."
      }
    ]
  },
  {
    id: "frontier-arch",
    slug: "frontier-model-architecture",
    name: "Build Frontier AI Systems",
    subtitle: "Replicate ChatGPT's Architecture—Own the Innovation Stack",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Extremely Rare",
    price: 2997,
    hook: "Enterprise-grade AI at startup costs. Build what the giants build.",
    description: "The gap between a basic transformer and a frontier model like ChatGPT or Claude isn't just scale—it's architectural innovation. This masterclass reveals the breakthroughs that make modern AI possible: latent attention mechanisms that slash memory costs by 64x, sparse expert networks that activate only what's needed, and training techniques that maximize every dollar of compute. Through intuitive explanations (not equations), clear visualizations, and hands-on implementation, you'll understand why these innovations matter and how to apply them. By the end, you'll have built a laptop-scale model using the same techniques that power trillion-dollar AI systems—and you'll possess the strategic insight to make informed infrastructure decisions for your organization.",
    outcomes: [
      "Understand the key innovations that separate frontier models from basic transformers",
      "Implement advanced attention variants: Grouped-Query (GQA) and Multi-Head Latent Attention",
      "Master the Key-Value cache and its critical role in inference speed and memory",
      "Build Mixture-of-Experts layers with intelligent routing and load balancing",
      "Apply Rotary Position Embeddings (RoPE) and understand their advantages",
      "Design production training pipelines with multi-token prediction and efficient quantization",
      "Execute post-training workflows: supervised fine-tuning and reinforcement learning",
      "Evaluate trade-offs between memory, compute, and quality for strategic architecture decisions",
      "Compress and distill large models into deployable versions"
    ],
    hours: 55,
    modules: 10,
    technologies: ["PyTorch", "Transformers", "FlashAttention", "FSDP", "bitsandbytes", "Weights & Biases", "vLLM"],
    curriculum: [
      {
        title: "Module 1: The Strategic Landscape of Frontier AI",
        lessons: [
          "Executive Overview: What Makes a Model 'Frontier-Class'",
          "The Innovation Gap: From GPT-2 to GPT-4 and Beyond",
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
        answer: "Understanding frontier architecture enables informed make-vs-buy decisions, better vendor evaluation, and the ability to build proprietary AI capabilities. Each module includes strategic context for business leaders."
      }
    ]
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
    name: "Build Autonomous AI Agents",
    subtitle: "Code Agents That Execute Tasks—Not Just Chat",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "Very Rare",
    price: 2497,
    hook: "The difference between a chatbot and an agent is execution. Agents don't just suggest—they do.",
    description: "LLMs can answer questions, but agents can complete tasks. This masterclass teaches you to build the infrastructure that transforms a language model into an autonomous system capable of using tools, maintaining memory, and executing multi-step workflows. You won't rely on frameworks—you'll build the foundations yourself: the processing loop, tool orchestration, memory modules, and human-in-the-loop patterns. By the end, you'll have a complete, working agent system and the deep understanding to extend it for research, business automation, or production deployment.",
    outcomes: [
      "Build a complete LLM agent infrastructure from scratch: interfaces, tools, data structures, and processing loops",
      "Implement the ReAct pattern: reasoning and acting in an iterative loop",
      "Create tool abstractions that work with any LLM provider",
      "Design robust tool calling with proper error handling and validation",
      "Implement human-in-the-loop patterns for high-stakes decisions",
      "Add memory modules to share state across tasks and sessions",
      "Connect agents to external services via MCP compatibility",
      "Evaluate agent performance on real-world tasks"
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
    ]
  },
  {
    id: "multi-agent",
    slug: "multi-agent-systems",
    name: "Build Multi-Agent AI Teams",
    subtitle: "Train Agent Swarms That Collaborate and Execute at Scale",
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
    subtitle: "Foundational Machine Learning for Technical Leaders",
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
    subtitle: "Build Neural Networks from Scratch—No TensorFlow, No PyTorch",
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
    name: "Build Domain-Specific LLMs",
    subtitle: "Train Specialized Models You Own and Control—No API Costs",
    category: "Hardcore Developers",
    categoryId: "hardcore",
    rarity: "High Demand",
    price: 1997,
    hook: "Bigger isn't always better. Sometimes smaller is smarter, faster, and cheaper.",
    description: "When you need a language model to respond accurately and quickly about a specific field of knowledge, the sprawling capacity of an LLM may hurt more than it helps. This masterclass teaches you to build generative AI models optimized for specific domains—models that run on commodity hardware while delivering high-quality results for specialized tasks. You'll learn quantization, fine-tuning, ONNX optimization, and deployment strategies that minimize computational requirements while maximizing performance. Perfect for cost- or hardware-constrained environments where you need AI that just works.",
    outcomes: [
      "Build domain-specific small language models from scratch",
      "Fine-tune transformers for specialized tasks with custom datasets",
      "Implement LoRA for efficient fine-tuning",
      "Quantize models to 8-bit and 4-bit precision",
      "Run inference on commodity hardware (laptops, edge devices)",
      "Deploy SLMs with vLLM, FastAPI, and local runtimes",
      "Build RAG systems and AI agents powered entirely by SLMs",
      "Profile and optimize ONNX models for production"
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
        question: "Why would I use an SLM instead of GPT-4 or Claude?",
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
    ]
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
