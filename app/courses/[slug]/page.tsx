import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import HeaderNew from '@/components/landing/HeaderNew';
import Footer from '@/components/Footer';
import CourseBreadcrumb from '@/components/CourseBreadcrumb';
import { getCourseBySlug, getAllCourseSlugs, Course } from '@/lib/courses';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: `${course.name} | DrLee.ai Masterclass`,
    description: course.description.slice(0, 160),
  };
}

function CourseHero({ course }: { course: Course }) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-blue-deep/50 to-brand-slate"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Breadcrumb */}
            <CourseBreadcrumb category={course.category} />

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {course.rarity && (
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.rarity === "Flagship" ? "bg-brand-yellow/20 text-yellow-400 border border-yellow-400/30" :
                  course.rarity === "Extremely Rare" ? "bg-purple-500/20 text-purple-400" :
                  course.rarity === "Cutting Edge" ? "bg-red-500/20 text-red-400" :
                  course.rarity === "Frontier AI" ? "bg-orange-500/20 text-orange-400" :
                  course.rarity === "Very Rare" ? "bg-brand-blue/20 text-brand-blue" :
                  "bg-brand-green/20 text-brand-green"
                }`}>
                  {course.rarity}
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm">
                {course.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-sm border border-brand-green/30">
                Shu-Ha-Ri Method
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              {course.name}
            </h1>
            <p className="text-xl md:text-2xl text-brand-green font-medium mb-6">
              {course.subtitle}
            </p>

            {/* Hook */}
            <p className="text-lg text-white/80 mb-4 max-w-xl">
              {course.hook}
            </p>

            {/* Full Shu-Ha-Ri Description */}
            <div className="glass rounded-xl p-6 mb-6 border border-white/10">
              {course.slug === 'frontier-model-architecture' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    This is not another course on using APIs or building basic transformers. This is <span className="font-semibold text-brand-blue">executive business education (Harvard/MIT/Stanford caliber)</span> merged with a masterclass for tech founders and AI leaders. Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from API consumer to production AI architect in 9 transformative steps.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Each module begins with a <span className="font-semibold">TedTalk-style presentation</span>, then you immediately <span className="font-semibold">build it yourself with hands-on coding</span>. You'll implement Mixture-of-Experts (MoE), Multi-Head Latent Attention (64x KV cache compression), FP8 quantization (2x speedup), Multi-Token Prediction, DualPipe parallelization, and build the breakthrough efficiency techniques behind modern ChatGPT/Claude/Gemini/Mixtral/DeepSeek.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from our LLM course:</span> While "Build Your Own LLM" teaches you the base transformer architecture, this course focuses on <span className="font-semibold">production-grade efficiency and scale</span>—the techniques that enable serving millions of requests at 90% lower cost than APIs.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from our Reasoning course:</span> While "Build Your Own Reasoning Model" teaches chain-of-thought and PSRM (making models think), this course teaches <span className="font-semibold">production efficiency and infrastructure</span>—how to serve frontier AI at scale economically. This is THE FIRST course where you build a complete end-to-end production system.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you won't just understand frontier AI—you'll <span className="font-semibold text-brand-green">own production-ready systems serving millions of requests that become your competitive moat</span>.
                  </p>
                </>
              ) : course.slug === 'reasoning-models' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    This is not another course on using reasoning APIs. This is <span className="font-semibold text-brand-blue">executive business education (Harvard/MIT/Stanford caliber)</span> merged with a masterclass for tech founders and AI leaders. Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from reasoning API consumer to reasoning architect in 9 transformative steps.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Each module begins with a <span className="font-semibold">TedTalk-style presentation</span>, then you immediately <span className="font-semibold">build it yourself with hands-on coding</span>. You'll implement process-supervised reward modeling, train reasoning with reinforcement learning, deploy inference-time compute scaling, and build the breakthrough techniques behind o1, o3, and DeepSeek-R1.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from our LLM course:</span> While "Build Your Own LLM" teaches you to construct the base transformer architecture, this course focuses on <span className="font-semibold">adding advanced reasoning capabilities</span> to existing models—the secret sauce that makes o1 and o3 dramatically better at math, code, and complex problem-solving than standard models.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you won't just understand how reasoning models work—you'll <span className="font-semibold text-brand-green">own production-ready reasoning systems that become your competitive moat</span>.
                  </p>
                </>
              ) : course.slug === 'small-language-models' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    This is not another course on API integration. This is <span className="font-semibold text-brand-blue">executive business education (Harvard/MIT/Stanford caliber)</span> merged with a masterclass for tech founders and AI architects. Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from API consumer burning $50K-$500K/month to SLM architect owning specialized models in 9 transformative steps.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Each module begins with a <span className="font-semibold">TedTalk-style presentation</span> on strategy, then you immediately <span className="font-semibold">build it yourself with hands-on coding</span>. You'll master fine-tuning, quantization (4-bit/8-bit), ONNX optimization, and cross-platform deployment from cloud to edge to mobile.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from our Frontier AI masterclass:</span> While "Build Frontier AI Systems" teaches you to build and scale large production systems with MoE and MLA, this course focuses on <span className="font-semibold">making models smaller, faster, and specialized</span>—achieving 75-87.5% compression while maintaining 90%+ performance. Instead of building bigger to serve millions, you're building smarter to run on $2K laptops with zero API costs. Bigger isn't always better. Focused is faster.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you won't just understand domain-specific AI—you'll <span className="font-semibold text-brand-green">own production-ready specialized models that eliminate vendor dependency, run anywhere, and become your competitive moat</span>.
                  </p>
                </>
              ) : course.slug === 'agentic-systems' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-blue">LLMs can answer questions, but agents can complete tasks.</span> This masterclass teaches you to build the <span className="font-semibold text-brand-blue">infrastructure that transforms a language model into an autonomous system</span> capable of using <span className="font-semibold text-brand-green">tools</span>, maintaining <span className="font-semibold text-brand-green">memory</span>, and executing <span className="font-semibold text-brand-green">multi-step workflows</span>. <span className="font-semibold text-brand-yellow">You won't rely on frameworks</span>—you'll build the foundations yourself: the <span className="font-semibold text-brand-green">processing loop, tool orchestration, memory modules, and human-in-the-loop patterns</span>. By the end, you'll have a complete, working agent system and the deep understanding to extend it for research, business automation, or production deployment.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    This is not another course on using agent frameworks. This is <span className="font-semibold text-brand-blue">executive business education (Harvard/MIT/Stanford caliber)</span> merged with a masterclass for tech founders and autonomous systems architects. Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from framework-dependent to autonomous systems architect in 9 transformative modules.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Each module begins with a <span className="font-semibold">TedTalk-style presentation</span> on architecture strategy, then you immediately <span className="font-semibold">build it yourself with hands-on coding</span>. You'll implement ReAct loops, design MCP-compliant tool orchestration, build memory systems, deploy multi-agent coordination, and create the infrastructure that powers autonomous execution—not just API calls.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from using LangChain/AutoGPT:</span> While frameworks abstract away the complexity, this course teaches you to <span className="font-semibold">build the infrastructure yourself</span>—own the ReAct loops, tool orchestrators, memory modules, and multi-agent protocols. When your agent fails at 2am, you'll know exactly why and how to fix it. Framework users are commoditized. Infrastructure builders are irreplaceable.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you won't just understand how agents work—you'll <span className="font-semibold text-brand-green">own production-ready autonomous agent systems with multi-agent coordination that become your competitive moat</span>.
                  </p>
                </>
              ) : course.slug === 'diffusion-models' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-blue">Text-to-image generation is revolutionizing creative industries, but 95% of engineers are just API consumers.</span> This masterclass teaches you to <span className="font-semibold text-brand-blue">build production text-to-image systems from first principles</span>—capable of <span className="font-semibold text-brand-green">vision transformers, diffusion models, text conditioning with CLIP, latent diffusion optimization, and production deployment</span>. <span className="font-semibold text-brand-yellow">You won't rely on DALL-E 3, Nano Banana Pro, Flux, or any API</span>—you'll build the foundations yourself: <span className="font-semibold text-brand-green">attention mechanisms for images, DDPM, text-to-image conditioning, VAE latent compression, and TensorRT optimization</span>. By the end, you'll have a complete, working image generator and the deep understanding to fine-tune it for any domain or deploy it at production scale.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    This is not another course on using Stable Diffusion APIs or fine-tuning with DreamBooth. This is <span className="font-semibold text-brand-blue">executive technical education (Harvard/MIT/Stanford caliber)</span> merged with a masterclass for tech founders and visual AI architects. Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from API integrator to visual AI architect in 9 transformative modules.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Each module begins with a <span className="font-semibold">TedTalk-style presentation</span> on architecture strategy, then you immediately <span className="font-semibold">build it yourself with hands-on coding</span>. You'll implement Vision Transformers, train DDPM from scratch, build CLIP for text-image alignment, construct latent diffusion pipelines, and deploy optimized production systems—not just call APIs.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from using DALL-E/Midjourney/Replicate APIs:</span> While APIs abstract away the complexity, this course teaches you to <span className="font-semibold">build the visual AI infrastructure yourself</span>—own the diffusion models, text encoders, VAE latent compression, and deployment optimization. When your image generation fails at 2am, you'll know exactly why and how to fix it. API users are commoditized. Model builders are irreplaceable.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you won't just understand how text-to-image works—you'll <span className="font-semibold text-brand-green">own production-ready visual AI systems with custom fine-tuning that become your competitive moat</span>.
                  </p>
                </>
              ) : course.slug === 'the-ai-product-factory' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-blue">87% of ML models never make it to production—they rot in Jupyter notebooks because data scientists don't understand Docker, Kubernetes, or deployment pipelines.</span> This masterclass teaches you to <span className="font-semibold text-brand-blue">build production-grade MLOps platforms from scratch</span>—capable of <span className="font-semibold text-brand-green">Kubernetes orchestration, automated Kubeflow pipelines, MLflow experiment tracking, BentoML model serving, and Evidently drift detection</span>. <span className="font-semibold text-brand-yellow">You won't rely on AWS SageMaker, Google Vertex AI, or any managed platform</span>—you'll build the infrastructure yourself: <span className="font-semibold text-brand-green">containerization with Docker, orchestration with Kubernetes, CI/CD pipelines, feature stores, and production monitoring</span>.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    This is not another course on using managed ML platforms or clicking through cloud consoles. This is <span className="font-semibold text-brand-blue">executive technical education (Harvard/MIT/Stanford caliber)</span> merged with a masterclass for tech founders and ML platform engineers. Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from notebook scientist to production ML architect in 9 transformative modules.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Each module begins with a <span className="font-semibold">TedTalk-style presentation</span> on MLOps architecture, then you immediately <span className="font-semibold">build it yourself with hands-on coding</span>. You'll containerize ML applications, deploy to Kubernetes clusters, orchestrate training pipelines with Kubeflow, serve models with BentoML, and monitor everything with Prometheus and Grafana—not just configure cloud services.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from using AWS SageMaker/Google Vertex AI:</span> While managed platforms abstract away the complexity, this course teaches you to <span className="font-semibold">build the MLOps infrastructure yourself</span>—own the deployment pipelines, monitoring systems, feature stores, and automation workflows. When your models fail at 2am, you'll know exactly why and how to fix it. Platform users are commoditized. Infrastructure builders command $250K+ salaries.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you won't just understand how production ML works—you'll <span className="font-semibold text-brand-green">own production-ready MLOps infrastructure serving millions of predictions per day that becomes your competitive moat</span>.
                  </p>
                </>
              ) : course.slug === 'multi-agent-systems' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-blue">Agents turn LLMs into autonomous tools capable of planning and execution. Multi-agent systems use protocols like MCP and Agent2Agent to coordinate specialized agents into collaborative AI teams.</span> This masterclass teaches you to <span className="font-semibold text-brand-blue">build complete multi-agent infrastructure from scratch</span>—capable of <span className="font-semibold text-brand-green">tool orchestration, memory systems, human-in-the-loop patterns, and distributed agent coordination</span>. <span className="font-semibold text-brand-yellow">You won't rely on LangChain, AutoGPT, or any framework</span>—you'll build the foundations yourself: <span className="font-semibold text-brand-green">the agent processing loop, MCP-compatible tools, memory modules, and Agent2Agent communication protocols</span>. By the end, you'll have a complete, working multi-agent system and the deep understanding to extend it for research, business automation, or production deployment.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    This is not another course on using agent frameworks or chaining API calls. This is <span className="font-semibold text-brand-blue">executive technical education (Harvard/MIT/Stanford caliber)</span> merged with a masterclass for tech founders and autonomous systems architects. Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from framework-dependent to multi-agent systems architect in 9 transformative modules.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">What makes this different from the single-agent masterclass?</span> <span className="font-semibold text-brand-yellow">Single agents are powerful but limited—multi-agent systems unlock distributed intelligence, specialized expertise, and scalable coordination.</span> While "Build Your Own Autonomous AI Agent" taught you to build one autonomous agent, this masterclass teaches you to <span className="font-semibold text-brand-blue">orchestrate teams of agents that communicate, delegate, and collaborate to solve complex problems no single agent can handle</span>. You'll master <span className="font-semibold text-brand-green">MCP (Model Context Protocol) for tool ecosystems and Agent2Agent (A2A) protocols for inter-agent communication</span>—the infrastructure powering ChatGPT Teams, Claude Projects, and enterprise autonomous systems.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Each module begins with a TedTalk-style presentation on multi-agent architecture strategy, then you immediately build it yourself with hands-on coding. You'll construct <span className="font-semibold text-brand-green">MCP-compatible tool orchestration, implement memory systems for agent context, add human-in-the-loop oversight, and deploy Agent2Agent coordination for distributed workflows</span>. No copying demos—you'll implement the complete architecture, run it in production scenarios, and understand every design decision.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you won't just understand how multi-agent systems work—you'll <span className="font-semibold text-brand-blue">own production-ready infrastructure</span> that becomes your <span className="font-semibold text-brand-yellow">competitive moat as an engineer (commanding $300K+ salaries) or as a founder (eliminating API costs and raising funding)</span>.
                  </p>
                </>
              ) : course.slug === 'the-10x-developer' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-blue">You're watching junior developers with AI tools ship 10x faster than you can review PRs.</span> While you're manually debugging and writing boilerplate, they're building complete features in hours using <span className="font-semibold text-brand-blue">AI-augmented development infrastructure</span>. This masterclass teaches you to <span className="font-semibold text-brand-blue">build terminal-native AI systems from scratch</span>—capable of <span className="font-semibold text-brand-green">autonomous sub-agents, custom command libraries, context engineering, MCP integrations, and production CI/CD automation</span>. <span className="font-semibold text-brand-yellow">You won't rely on Copilot, Cursor, or any IDE plugin</span>—you'll build the infrastructure yourself: <span className="font-semibold text-brand-green">sub-agent orchestration, memory architectures, plugin frameworks, and headless automation pipelines</span>.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    This is not another course on "using Claude Code." This is <span className="font-semibold text-brand-blue">executive business education (Harvard/MIT/Stanford caliber)</span> merged with a masterclass for elite builders. Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from manual coder to AI-augmented architect in 9 transformative modules—building 6 complete React applications with sub-agents, MCP servers, and context engineering.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Each module begins with a <span className="font-semibold">TedTalk-style presentation</span> on infrastructure strategy, then you immediately <span className="font-semibold">build it yourself with hands-on coding</span>. You'll implement terminal-native workflows, integrate MCP servers (PostgreSQL, Stripe, GitHub), orchestrate sub-agents for parallel work, build custom command libraries, develop plugin frameworks, and deploy headless AI in production CI/CD pipelines.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from IDE plugins like Copilot or Cursor:</span> While autocomplete helps with code completion, this course teaches you to <span className="font-semibold">build AI infrastructure yourself</span>—own the sub-agent systems, context architectures, command libraries, and automation pipelines. When your agents fail at 2am, you'll know exactly why and how to fix it. <span className="font-semibold text-brand-green">Tool users are commoditized. Infrastructure builders earn $250K-$400K and become irreplaceable.</span>
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you won't just understand AI-augmented development—you'll <span className="font-semibold text-brand-green">own production-ready AI infrastructure with 10-100x productivity gains, 6 React applications, 50+ custom commands, and complete CI/CD automation that becomes your competitive moat</span>.
                  </p>
                </>
              ) : course.slug === 'agentic-sdk' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-blue">Imagine having a team of expert employees who have read every book ever written, studied every case in your legal domain, analyzed every financial model, reviewed every operational framework—working together 24/7 at pennies on the dollar.</span> That's what you're building. This masterclass teaches you to take <span className="font-semibold text-brand-green">frontier AI (trained on all human knowledge)</span> and transform it into <span className="font-semibold text-brand-blue">a team of synthetic employees that collaborate</span> to provide expert decision support.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    You'll build <span className="font-semibold text-brand-green">a Legal Advisor to review contracts, a Financial Analyst to evaluate deals, an Operations Manager to optimize processes</span>—all working together seamlessly. <span className="font-semibold text-brand-yellow">But unlike consultants who just give advice, your synthetic team EXECUTES</span>—they read contracts, update your CRM, pull invoices from your accounting system, extract data automatically, and analyze deals in real-time. You're not learning to prompt better. You're learning to <span className="font-semibold text-brand-green">build an AI workforce that knows YOUR business, accesses YOUR systems, remembers every interaction, and executes decisions together as a coordinated team</span>—replacing $200K-$500K in consultant spend.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from AI renter to AI owner in 9 transformative modules. Each module begins with a <span className="font-semibold">TedTalk-style presentation</span>, then you immediately <span className="font-semibold">build it yourself with hands-on implementation</span>. You'll create synthetic employees with perfect memory, build your specialized AI team (Legal, Finance, Operations), connect them to all your business systems, have them work together on complex workflows, and deploy a web interface for your entire organization to use.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">This is not generic AI training.</span> This is business education teaching you to harness <span className="font-semibold">the smartest technology ever created</span> for YOUR specific business. When consultants take 3 days, your synthetic team delivers in 3 minutes. When competitors rent generic AI, you own proprietary intelligence. When budgets cap headcount, your AI workforce scales infinitely—handle 10x workload at marginal cost.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you'll <span className="font-semibold text-brand-green">have built a production-ready team of synthetic employees working together as your personal analysts</span>—expert-level decision support across every domain, integrated with all your systems, creating defensible competitive advantages. Designed for <span className="font-semibold text-brand-blue">anyone who understands that the future belongs to those who own their intelligence infrastructure</span>.
                  </p>
                </>
              ) : course.slug === 'ai-for-decision-makers' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-green text-base">You don't need to become a technologist.</span> You need to become the kind of leader who knows how to <span className="font-semibold text-brand-blue">put AI to work for your mission</span>. This bootcamp meets you exactly where you are—whether you're AI-curious, AI-cautious, or somewhere in between.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Before Day 1, every participant completes a <span className="font-semibold text-brand-yellow">personalized AI Readiness Assessment</span> so we can tailor the material, examples, and exercises to your specific team and organizational reality. No jargon. No coding. No assumptions about your technical background.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Over two days, you'll move from understanding <span className="font-semibold">what AI can actually do</span> (and what it can't) to <span className="font-semibold text-brand-green">building real, working tools</span> that help you see patterns in your data, pressure-test your decisions, and free up hours your team currently spends on manual analysis.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you'll walk away with <span className="font-semibold text-brand-green">AI-powered advisors trained on YOUR data</span>, a unified dashboard, and the confidence to lead AI adoption across your organization—on your terms.
                  </p>
                </>
              ) : course.slug === 'ai-alignment' ? (
                <>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-blue">Powerful AI models are useless if they're unpredictable, unsafe, or uncontrollable.</span> This masterclass teaches you to <span className="font-semibold text-brand-blue">build alignment systems from scratch</span>—capable of <span className="font-semibold text-brand-green">reinforcement learning from human feedback (RLHF), direct preference optimization (DPO), constitutional AI, and production safety deployment</span>. <span className="font-semibold text-brand-yellow">You won't rely on HuggingFace Trainer APIs or black-box RLHF services</span>—you'll build the foundations yourself: <span className="font-semibold text-brand-green">preference data collection, reward models, PPO/GRPO policy optimization, DPO direct alignment, and reasoning with RLVR</span>.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    This is not another course on calling OpenAI's fine-tuning API. This is <span className="font-semibold text-brand-blue">executive business education (Harvard/MIT/Stanford caliber)</span> merged with a masterclass for tech founders and alignment architects. Using the <span className="font-semibold text-brand-green">DrLee.AI Shu-Ha-Ri learning method</span>, you'll go from API consumer to alignment specialist in 9 transformative modules.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Each module begins with a <span className="font-semibold">TedTalk-style presentation</span> on alignment strategy, then you immediately <span className="font-semibold">build it yourself with hands-on coding</span>. You'll implement complete RLHF pipelines, train reward models from preferences, optimize policies with PPO and DPO, create constitutional AI systems, deploy reasoning models using RLVR, and build production safety systems—not just call APIs.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from our LLM course:</span> While "Build Your Own LLM" teaches you to construct base transformer models, this course focuses on <span className="font-semibold">making those models safe, controllable, and aligned with human values</span>—the post-training techniques that transform raw models into production-ready systems like ChatGPT and Claude.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-brand-yellow">Different from our Reasoning course:</span> While "Build Your Own Reasoning Model" teaches models to think step-by-step, this course teaches <span className="font-semibold">how to align any model behavior through human feedback and constitutional principles</span>—the fundamental safety layer that prevents toxic outputs, ensures controllability, and builds stakeholder trust.
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    By the end, you won't just understand how RLHF works—you'll <span className="font-semibold text-brand-green">own production-ready alignment systems that become your competitive moat</span>: As an engineer, you'll <span className="font-semibold text-brand-yellow">command $300K-$500K salaries at Anthropic/OpenAI/DeepMind</span> with irreplaceable expertise in reward modeling, policy optimization, and constitutional AI that 99% of ML engineers lack. As a founder, you'll <span className="font-semibold text-brand-yellow">deploy AI that stakeholders and regulators trust</span>, avoiding catastrophic failures that destroy competitors, while <span className="font-semibold text-brand-yellow">saving $500K+/year in API costs</span> by owning aligned models instead of renting from OpenAI. When regulations mandate AI safety, you'll already be compliant. When models misbehave at 2am, you'll know exactly how to fix alignment—not blindly hope API providers do.
                  </p>
                </>
              ) : (
                <p className="text-white/90 text-sm leading-relaxed">
                  {course.description}
                </p>
              )}
            </div>

            {/* Transformation Preview */}
            <div className="glass rounded-xl p-6 mb-8 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="text-sm text-white/50 mb-1">FROM</div>
                  {course.slug === 'frontier-model-architecture' ? (
                    <>
                      <div className="text-white font-medium">API Integrator</div>
                      <div className="text-white/60 text-sm">$500K/month costs · Commoditized</div>
                    </>
                  ) : course.slug === 'small-language-models' ? (
                    <>
                      <div className="text-white font-medium">API Consumer</div>
                      <div className="text-white/60 text-sm">$50K-$500K/month burn · Vendor Lock-In</div>
                    </>
                  ) : course.slug === 'agentic-systems' ? (
                    <>
                      <div className="text-white font-medium">Framework User</div>
                      <div className="text-white/60 text-sm">$120K-$180K · Black-Box Agents</div>
                    </>
                  ) : course.slug === 'diffusion-models' ? (
                    <>
                      <div className="text-white font-medium">API Consumer</div>
                      <div className="text-white/60 text-sm">$100K-$150K · $10K-$50K/month API costs</div>
                    </>
                  ) : course.slug === 'the-ai-product-factory' ? (
                    <>
                      <div className="text-white font-medium">Notebook Scientist</div>
                      <div className="text-white/60 text-sm">$100K-$150K · Models rot in Jupyter</div>
                    </>
                  ) : course.slug === 'multi-agent-systems' ? (
                    <>
                      <div className="text-white font-medium">Single-Agent Builder</div>
                      <div className="text-white/60 text-sm">$140K-$200K · Limited Coordination</div>
                    </>
                  ) : course.slug === 'the-10x-developer' ? (
                    <>
                      <div className="text-white font-medium">Manual Coder</div>
                      <div className="text-white/60 text-sm">$120K-$180K · Outpaced by Juniors</div>
                    </>
                  ) : course.slug === 'agentic-sdk' ? (
                    <>
                      <div className="text-white font-medium">AI Renter</div>
                      <div className="text-white/60 text-sm">$200K-$500K/year · Consultant Dependency</div>
                    </>
                  ) : course.slug === 'ai-for-decision-makers' ? (
                    <>
                      <div className="text-white font-medium">AI-Overwhelmed</div>
                      <div className="text-white/60 text-sm">Unsure where to start · Manual analysis</div>
                    </>
                  ) : (
                    <>
                      <div className="text-white font-medium">API Consumer</div>
                      <div className="text-white/60 text-sm">$100K-$150K · Replaceable Skills</div>
                    </>
                  )}
                </div>
                <svg className="w-8 h-8 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="flex-1">
                  <div className="text-sm text-brand-green/70 mb-1">TO</div>
                  {course.slug === 'frontier-model-architecture' ? (
                    <>
                      <div className="text-brand-green font-medium">Production Architect</div>
                      <div className="text-brand-green/80 text-sm">$50K/month costs · 90% Savings</div>
                    </>
                  ) : course.slug === 'small-language-models' ? (
                    <>
                      <div className="text-brand-green font-medium">SLM Architect</div>
                      <div className="text-brand-green/80 text-sm">$0 API costs · Complete Ownership</div>
                    </>
                  ) : course.slug === 'agentic-systems' ? (
                    <>
                      <div className="text-brand-green font-medium">Agent Systems Architect</div>
                      <div className="text-brand-green/80 text-sm">$200K-$400K · Infrastructure Owner</div>
                    </>
                  ) : course.slug === 'diffusion-models' ? (
                    <>
                      <div className="text-brand-green font-medium">Visual AI Architect</div>
                      <div className="text-brand-green/80 text-sm">$250K-$400K · Model Builder</div>
                    </>
                  ) : course.slug === 'the-ai-product-factory' ? (
                    <>
                      <div className="text-brand-green font-medium">ML Platform Engineer</div>
                      <div className="text-brand-green/80 text-sm">$200K-$350K · Production ML at Scale</div>
                    </>
                  ) : course.slug === 'multi-agent-systems' ? (
                    <>
                      <div className="text-brand-green font-medium">Multi-Agent Systems Architect</div>
                      <div className="text-brand-green/80 text-sm">$280K-$450K+ · Team Coordination</div>
                    </>
                  ) : course.slug === 'the-10x-developer' ? (
                    <>
                      <div className="text-brand-green font-medium">AI-Augmented Architect</div>
                      <div className="text-brand-green/80 text-sm">$250K-$400K · 10-100x Productivity</div>
                    </>
                  ) : course.slug === 'agentic-sdk' ? (
                    <>
                      <div className="text-brand-green font-medium">AI Owner</div>
                      <div className="text-brand-green/80 text-sm">$200K-$500K Saved · Competitive Moat</div>
                    </>
                  ) : course.slug === 'ai-for-decision-makers' ? (
                    <>
                      <div className="text-brand-green font-medium">AI-Empowered Leader</div>
                      <div className="text-brand-green/80 text-sm">Confident · Data-Driven · 10-20hrs/week reclaimed</div>
                    </>
                  ) : (
                    <>
                      <div className="text-brand-green font-medium">Model Builder</div>
                      <div className="text-brand-green/80 text-sm">$250K-$400K · Irreplaceable</div>
                    </>
                  )}
                </div>
              </div>
              <div className="text-xs text-white/40">
                {course.slug === 'frontier-model-architecture'
                  ? '9 weeks · 50 hours · Serve millions at 90% lower cost'
                  : course.slug === 'small-language-models'
                  ? '9 weeks · 45 hours · Run frontier-quality models on $2K laptops'
                  : course.slug === 'agentic-systems'
                  ? '9 modules · 45 hours · Build production agent systems with 95%+ reliability'
                  : course.slug === 'diffusion-models'
                  ? '9 modules · 45 hours · Build text-to-image systems matching Stable Diffusion quality'
                  : course.slug === 'multi-agent-systems'
                  ? '9 modules · 45 hours · Coordinate agent teams solving complex distributed problems'
                  : course.slug === 'the-ai-product-factory'
                  ? '9 modules · 45 hours · Build MLOps platforms serving millions of predictions/day with 99.9% uptime'
                  : course.slug === 'the-10x-developer'
                  ? '9 modules · 80 hours · Build 6 React apps with sub-agents, MCP, and context engineering'
                  : course.slug === 'agentic-sdk'
                  ? '9 modules · 45 hours · Build synthetic employees saving $200K-$500K annually'
                  : course.slug === 'ai-for-decision-makers'
                  ? '2 days · 9 steps · No coding required · Leave with working AI tools on your data'
                  : '9 weeks · 50 hours · Own your model weights forever'
                }
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="btn btn-lg bg-gradient-to-r from-brand-blue to-brand-green text-white border-0 hover:shadow-lg hover:shadow-brand-blue/30 transition-all"
              >
                Start Your Transformation
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#signature-solution"
                className="btn btn-lg btn-outline border-white/30 text-white hover:bg-white/10"
              >
                See The Journey
              </a>
            </div>
          </div>

          {/* Right - Moat Building */}
          <div className="hidden lg:block">
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                {course.slug === 'ai-for-decision-makers' ? 'Your Leadership Advantage' : 'Your Competitive Moat'}
              </h3>

              <div className="space-y-4">
                {(course.slug === 'frontier-model-architecture' ? [
                  { label: "MoE + MLA Mastery", value: "Top 1% Globally", icon: "🧠", desc: "64x KV compression + 8x MoE capacity—techniques powering modern ChatGPT/Claude/Gemini/Mixtral/DeepSeek" },
                  { label: "Production Scale", value: "Millions of Requests", icon: "⚡", desc: "Deploy complete systems serving millions at <100ms latency" },
                  { label: "Cost Elimination", value: "90% Reduction", icon: "💰", desc: "Cut AI costs from $500K/month → $50K/month" },
                  { label: "Career Impact", value: "$250K-$400K Salaries", icon: "📈", desc: "Production AI architects earn 2-3x API integrators" },
                  { label: "Complete System Ownership", value: "End-to-End", icon: "🛡️", desc: "Only course teaching complete production frontier AI—training to serving" }
                ] : course.slug === 'reasoning-models' ? [
                  { label: "PSRM Mastery", value: "Elite 1%", icon: "🧠", desc: "Process-supervised reward modeling expertise—o1's secret" },
                  { label: "Inference Scaling", value: "From Scratch", icon: "⚡", desc: "Build inference-time compute scaling like o1" },
                  { label: "Cost Elimination", value: "$120K-$600K Saved", icon: "💰", desc: "Eliminate annual reasoning API costs completely" },
                  { label: "Career Impact", value: "$150K-$250K Premium", icon: "📈", desc: "Reasoning architects earn 2x API-skilled devs" },
                  { label: "Irreplaceability", value: "Reasoning Expert", icon: "🛡️", desc: "Own o1-class systems—unmatched competitive moat" }
                ] : course.slug === 'small-language-models' ? [
                  { label: "Domain Specialization", value: "20-40% Better Performance", icon: "🧠", desc: "Build focused models that outperform frontier LLMs on specific tasks at 1/100th the cost" },
                  { label: "Extreme Compression", value: "75-87.5% Size Reduction", icon: "⚡", desc: "Master 4-bit/8-bit quantization with 90%+ performance retention" },
                  { label: "Cost Elimination", value: "$50K-$500K/Month → $0", icon: "💰", desc: "Eliminate API dependency completely—run on $2K laptops" },
                  { label: "Cross-Platform Deployment", value: "Anywhere Execution", icon: "📈", desc: "Deploy on laptops, mobile, edge, Raspberry Pi, air-gapped systems" },
                  { label: "Complete AI Ownership", value: "Domain SLM Stack", icon: "🛡️", desc: "End-to-end mastery: fine-tuning → quantization → ONNX → production" }
                ] : course.slug === 'agentic-systems' ? [
                  { label: "Agent Architecture Mastery", value: "ReAct + MCP + A2A", icon: "🧠", desc: "Build autonomous agent infrastructure from scratch—ReAct loops, tool orchestration, multi-agent coordination" },
                  { label: "Production Reliability", value: "95%+ Task Completion", icon: "⚡", desc: "Deploy agents with monitoring, error recovery, and production-grade reliability" },
                  { label: "Framework Independence", value: "Zero Vendor Lock-In", icon: "💰", desc: "Own your agent infrastructure—debug at 2am, customize infinitely, no black-box mysteries" },
                  { label: "Multi-Agent Coordination", value: "Scalable Agent Teams", icon: "📈", desc: "Build specialized agent systems that collaborate via A2A protocols to solve complex problems" },
                  { label: "Complete Agent Stack", value: "Infrastructure to Production", icon: "🛡️", desc: "End-to-end expertise: ReAct → Tools → Memory → Planning → Multi-Agent → Deployment" }
                ] : course.slug === 'diffusion-models' ? [
                  { label: "Visual AI Mastery", value: "ViT + DDPM + CLIP", icon: "🧠", desc: "Build text-to-image systems from scratch—vision transformers, diffusion models, multimodal conditioning" },
                  { label: "Production Quality", value: "Stable Diffusion-Level", icon: "⚡", desc: "Generate 512x512 images in <3 seconds with latent diffusion optimization and TensorRT deployment" },
                  { label: "API Independence", value: "$0 Generation Costs", icon: "💰", desc: "Own your visual AI infrastructure—eliminate $10K-$50K/month API costs, customize infinitely" },
                  { label: "Custom Fine-Tuning", value: "Domain-Specific Models", icon: "📈", desc: "Fine-tune on proprietary data, build visual styles competitors can't access or replicate" },
                  { label: "Complete Visual AI Stack", value: "Architecture to Deployment", icon: "🛡️", desc: "End-to-end expertise: Transformers → Diffusion → CLIP → Latent → Production" }
                ] : course.slug === 'multi-agent-systems' ? [
                  { label: "Multi-Agent Coordination", value: "MCP + A2A Protocols", icon: "🧠", desc: "Orchestrate agent teams with specialized roles—build coordination patterns that solve problems no single agent can handle" },
                  { label: "Distributed Intelligence", value: "95%+ Reliability", icon: "⚡", desc: "Deploy coordinated agent teams with shared memory, task delegation, and production-grade coordination" },
                  { label: "Architecture Ownership", value: "Zero Framework Lock-In", icon: "💰", desc: "Own your multi-agent infrastructure—customize coordination patterns, debug complex interactions, no black-box agents" },
                  { label: "Scalable Agent Teams", value: "10-50+ Coordinated Agents", icon: "📈", desc: "Build hierarchical, peer-to-peer, and consensus-based coordination for enterprise complexity" },
                  { label: "Complete MAS Stack", value: "Single-Agent to Teams", icon: "🛡️", desc: "End-to-end mastery: Tools → Memory → HITL → MCP → A2A → Multi-Agent Coordination → Production" }
                ] : course.slug === 'the-ai-product-factory' ? [
                  { label: "MLOps Platform Mastery", value: "Kubernetes + Kubeflow", icon: "🧠", desc: "Build production ML infrastructure from scratch—Kubernetes orchestration, Kubeflow pipelines, MLflow tracking, BentoML serving" },
                  { label: "Production Scale Deployment", value: "99.9% Uptime", icon: "⚡", desc: "Deploy ML systems serving millions of predictions/day with <100ms latency and enterprise-grade reliability" },
                  { label: "Platform Cost Elimination", value: "$300K-$800K Saved", icon: "💰", desc: "Eliminate AWS SageMaker, Google Vertex AI costs—own your MLOps infrastructure completely" },
                  { label: "Career Premium", value: "$100K-$200K Increase", icon: "📈", desc: "ML platform engineers earn 2-3x notebook-only data scientists with deployment expertise" },
                  { label: "Complete MLOps Stack", value: "End-to-End Ownership", icon: "🛡️", desc: "Full mastery: Docker → Kubernetes → Kubeflow → MLflow → BentoML → Evidently → Production" }
                ] : course.slug === 'the-10x-developer' ? [
                  { label: "AI Infrastructure Mastery", value: "Sub-Agents + MCP + Context", icon: "🧠", desc: "Build terminal-native AI infrastructure from scratch—sub-agent orchestration, MCP integrations, context engineering" },
                  { label: "10-100x Productivity", value: "Autonomous Agents 24/7", icon: "⚡", desc: "Deploy sub-agents working while you sleep—research, testing, optimization running in parallel" },
                  { label: "Tool Independence", value: "Zero IDE Lock-In", icon: "💰", desc: "Own your development infrastructure—build custom commands, plugins, automation that Copilot/Cursor can't match" },
                  { label: "Career Premium", value: "$130K-$220K Increase", icon: "📈", desc: "AI-augmented architects earn 2x tool-user developers—$250K-$400K salaries" },
                  { label: "Complete AI Dev Stack", value: "Infrastructure to CI/CD", icon: "🛡️", desc: "End-to-end mastery: Claude Code → MCP → Sub-Agents → Skills → Meta Agents → Orchestration → Memory → Production" }
                ] : course.slug === 'agentic-sdk' ? [
                  { label: "Frontier AI Workforce", value: "All Human Knowledge Working for YOU", icon: "🧠", desc: "Transform AI trained on every book, case, and model into synthetic employees that know YOUR business—expert-level decision support across legal, finance, and operations" },
                  { label: "Agents That Execute", value: "Not Advice, ACTION", icon: "⚡", desc: "Unlike consultants who just advise, build agents with tools that read contracts, write to CRM, pull from ERP, extract invoice data, analyze deals—autonomous execution replacing manual work" },
                  { label: "Cost Annihilation", value: "$200K-$500K Saved Annually", icon: "💰", desc: "Replace consultant spend ($5K-$50K per project) and per-seat AI subscriptions with synthetic employees you built—pennies on the dollar for unlimited usage" },
                  { label: "Speed Dominance", value: "Minutes vs. Weeks", icon: "🚀", desc: "Comprehensive analysis in 5-10 minutes that takes consultants 3-5 days—when competitors wait for reports, you've already made the decision and moved forward" },
                  { label: "Proprietary Intelligence Moat", value: "Competitive Advantage Competitors Can't Copy", icon: "🛡️", desc: "AI that knows YOUR processes, YOUR systems, YOUR domain expertise—sustainable competitive moat that can't be rented or replicated, only built" }
                ] : course.slug === 'ai-for-decision-makers' ? [
                  { label: "AI Confidence", value: "From Skeptical to Skilled", icon: "🔍", desc: "Go from AI-overwhelmed to AI-empowered in 2 days—92% of participants report a complete shift in confidence" },
                  { label: "Time Reclaimed", value: "10-20 Hours/Week", icon: "⏰", desc: "Replace manual analysis and reporting with AI-powered workflows that deliver insights in minutes" },
                  { label: "Decision Quality", value: "Data-Driven Clarity", icon: "📊", desc: "Every major decision backed by AI analysis of YOUR real organizational data—no more gut feel" },
                  { label: "Team Adoption", value: "87% Within 60 Days", icon: "🤝", desc: "Participants bring AI practices back to their teams—creating organization-wide decision intelligence" },
                  { label: "No Tech Skills Needed", value: "Built for Leaders", icon: "✨", desc: "Designed for people who lead organizations, not people who write code—if you use a spreadsheet, you're ready" }
                ] : course.slug === 'ai-alignment' ? [
                  { label: "RLHF Pipeline Mastery", value: "99% of ML Engineers Can't Build This", icon: "🧠", desc: "Implement complete RLHF from scratch—preference data, reward models, PPO/GRPO, DPO—expertise that separates $180K API users from $350K+ alignment architects" },
                  { label: "Safety Infrastructure", value: "Prevent Catastrophic Failures", icon: "🛡️", desc: "Build constitutional AI and safety monitoring that catches alignment failures BEFORE they reach users—avoiding disasters that destroy competitor products" },
                  { label: "API Cost Elimination", value: "$500K-$2M Saved Annually", icon: "💰", desc: "Own aligned models instead of renting from OpenAI—founders eliminate $50K/month API spend while building defensible moats investors fund" },
                  { label: "Regulatory Advantage", value: "Compliant When Mandates Arrive", icon: "⚖️", desc: "When AI safety regulations become law, you're already compliant—competitors scramble, you ship confidently with stakeholder trust" },
                  { label: "Career Premium", value: "$180K → $350K-$500K", icon: "📈", desc: "Alignment specialists at Anthropic/OpenAI/DeepMind earn 2-3x ML generalists—irreplaceable expertise as alignment becomes critical for all AI" }
                ] : [
                  { label: "Knowledge Depth", value: "99th Percentile", icon: "🧠", desc: "Understand LLMs better than 90% of 'AI engineers'" },
                  { label: "Implementation Ability", value: "From Scratch", icon: "⚡", desc: "Build GPT without libraries or abstractions" },
                  { label: "Cost Advantage", value: "$0 API Costs", icon: "💰", desc: "Own model weights = zero marginal cost" },
                  { label: "Career Impact", value: "$80K-$150K Increase", icon: "📈", desc: "Average salary boost after completion" },
                  { label: "Irreplaceability", value: "Frontier AI Expert", icon: "🛡️", desc: "Deep knowledge can't be commoditized" }
                ]).map((moat, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-brand-green/50 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{moat.icon}</span>
                      <div className="flex-1">
                        <div className="text-white/70 text-sm">{moat.label}</div>
                        <div className="text-brand-green font-medium">{moat.value}</div>
                      </div>
                    </div>
                    <div className="text-xs text-white/50 pl-11">{moat.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-brand-green/10 border border-brand-green/30">
                {course.slug === 'ai-for-decision-makers' ? (
                  <>
                    <div className="text-brand-green font-medium mb-1">AI Readiness Assessment Included</div>
                    <div className="text-white/60 text-sm">Every participant is assessed before Day 1 so the experience is tailored to YOUR team</div>
                  </>
                ) : (
                  <>
                    <div className="text-brand-green font-medium mb-1">ROI Timeline</div>
                    <div className="text-white/60 text-sm">3-6 months to break even on salary increase or API cost savings</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureSolution({ course }: { course: Course }) {
  // Use course-specific signature solution data if available, otherwise return null
  if (!course.signatureSolution || !course.signatureSolution.steps || !course.signatureSolution.stages) {
    return null;
  }

  const { stages, steps } = course.signatureSolution;
  const allSteps = steps;

  return (
    <section className="bg-base-100 py-20 md:py-28" id="signature-solution">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-4">
            {course.signatureSolution && course.slug === 'frontier-model-architecture'
              ? 'The Frontier AI Sovereignty Stack™'
              : course.signatureSolution && course.slug === 'reasoning-models'
              ? 'The Reasoning Sovereignty Stack™'
              : course.signatureSolution && course.slug === 'small-language-models'
              ? 'The Domain SLM Mastery Stack™'
              : course.signatureSolution && course.slug === 'agentic-systems'
              ? 'The Agent Architecture Blueprint™'
              : course.signatureSolution && course.slug === 'diffusion-models'
              ? 'The Visual AI Sovereignty Stack™'
              : course.signatureSolution && course.slug === 'multi-agent-systems'
              ? 'The Multi-Agent Coordination Mastery™'
              : course.signatureSolution && course.slug === 'the-ai-product-factory'
              ? 'The Production ML Sovereignty Stack™'
              : course.signatureSolution && course.slug === 'the-10x-developer'
              ? 'The AI Infrastructure Sovereignty Stack™'
              : course.slug === 'agentic-sdk'
              ? 'The Synthetic Employee Framework™'
              : course.slug === 'ai-for-decision-makers'
              ? 'Your 2-Day Leadership Journey'
              : 'The LLM Sovereignty Stack™'}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {course.slug === 'ai-for-decision-makers'
              ? 'Your 9-Step Leadership Journey'
              : 'Your 9-Step Transformation Journey'}
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto mb-12">
            {course.slug === 'ai-for-decision-makers'
              ? 'Each step follows the Shu-Ha-Ri method: Clear explanation → Hands-on experience → Make it yours. Watch as you progress from AI-uncertain to AI-confident, building your leadership advantage with every step.'
              : <>Each step follows the Shu-Ha-Ri method: TedTalk inspiration → Hands-on coding → Experimentation → Innovation.
            {course.slug === 'frontier-model-architecture'
              ? 'Watch as you progress from API integrator to production architect, building your cost efficiency moat with every step.'
              : course.slug === 'agentic-systems'
              ? 'Watch as you progress from framework-dependent to autonomous systems architect, building your infrastructure ownership moat with every step.'
              : course.slug === 'diffusion-models'
              ? 'Watch as you progress from API consumer to visual AI architect, building your proprietary generation moat with every step.'
              : course.slug === 'multi-agent-systems'
              ? 'Watch as you progress from single-agent builder to multi-agent systems architect, building your team coordination moat with every step.'
              : course.slug === 'the-ai-product-factory'
              ? 'Watch as you progress from notebook-only data scientist to ML platform engineer, building your production infrastructure moat with every step.'
              : course.slug === 'the-10x-developer'
              ? 'Watch as you progress from manual coder to AI-augmented architect, building your development productivity moat with every step.'
              : 'Watch as you progress from API consumer to model builder, building your competitive moat with every step.'
            }</>
            }
          </p>
        </div>

        {/* 3-Stage Overview with Arrows */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {stages.map((stage, idx) => {
            const colorMap = {
              blue: {
                bg: 'from-brand-blue/10 to-brand-blue/5',
                border: 'border-brand-blue/30',
                badge: 'bg-brand-blue/20 text-brand-blue',
                cardBg: 'bg-brand-blue/10',
                cardBorder: 'border-brand-blue/30',
                moatBg: 'bg-brand-blue/5 border-brand-blue/20',
                moatText: 'text-brand-blue',
                arrow: 'text-brand-blue'
              },
              purple: {
                bg: 'from-purple-500/10 to-purple-500/5',
                border: 'border-purple-500/30',
                badge: 'bg-purple-500/20 text-purple-400',
                cardBg: 'bg-purple-500/10',
                cardBorder: 'border-purple-500/30',
                moatBg: 'bg-purple-500/5 border-purple-500/20',
                moatText: 'text-purple-400',
                arrow: 'text-purple-400'
              },
              green: {
                bg: 'from-brand-green/10 to-brand-green/5',
                border: 'border-brand-green/30',
                badge: 'bg-brand-green/20 text-brand-green',
                cardBg: 'bg-brand-green/10',
                cardBorder: 'border-brand-green/30',
                moatBg: 'bg-brand-green/5 border-brand-green/20',
                moatText: 'text-brand-green',
                arrow: 'text-brand-green'
              }
            };
            const colors = colorMap[stage.color];

            return (
              <div key={idx}>
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${colors.bg} border-2 ${colors.border}`}>
                  <div className="text-center mb-6">
                    <div className={`inline-block px-4 py-2 rounded-full ${colors.badge} text-sm font-bold mb-3`}>
                      {stage.weeks}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{stage.title}</h3>
                    <p className="text-base-content/60 text-sm mb-2">{stage.subtitle}</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="p-3 rounded-lg bg-base-200 border border-base-300">
                      <div className="text-xs text-base-content/50 mb-1">FROM</div>
                      <div className="text-sm">&ldquo;{stage.from}&rdquo;</div>
                    </div>
                    <svg className={`w-6 h-6 ${colors.arrow} mx-auto`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <div className={`p-3 rounded-lg ${colors.cardBg} border-2 ${colors.cardBorder}`}>
                      <div className={`text-xs ${colors.moatText}/70 mb-1`}>TO</div>
                      <div className="text-sm font-medium">&ldquo;{stage.to}&rdquo;</div>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${colors.moatBg} border`}>
                    <div className={`${colors.moatText} font-bold text-sm mb-1`}>🛡️ {stage.moat}</div>
                    <div className="text-xs text-base-content/60">{stage.moatDesc}</div>
                  </div>
                </div>

                {/* Arrow between stages */}
                {idx < stages.length - 1 && (
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 z-10`}
                       style={{ left: `${((idx + 1) / stages.length) * 100}%` }}>
                    <svg className="w-12 h-12 text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* THE COMPLETE 3x3 MATRIX - All 9 Steps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">The Complete Transformation Matrix</h3>
          <p className="text-center text-base-content/70 mb-12 max-w-3xl mx-auto">
            Each step follows the <span className="font-semibold text-brand-blue">Shu-Ha-Ri cycle</span>: TedTalk inspiration → Hands-on coding → Experimentation → Innovation.
            {course.slug === 'frontier-model-architecture'
              ? 'This is the guided progression that transforms API-dependent engineers into production frontier AI architects.'
              : course.slug === 'agentic-systems'
              ? 'This is the guided progression that transforms framework-dependent developers into autonomous systems architects who own their agent infrastructure.'
              : course.slug === 'diffusion-models'
              ? 'This is the guided progression that transforms API-dependent engineers into visual AI architects who own their image generation infrastructure.'
              : course.slug === 'multi-agent-systems'
              ? 'This is the guided progression that transforms single-agent builders into multi-agent systems architects who orchestrate coordinated agent teams.'
              : course.slug === 'the-ai-product-factory'
              ? 'This is the guided progression that transforms platform-dependent data scientists into ML platform engineers who own their production infrastructure.'
              : course.slug === 'the-10x-developer'
              ? 'This is the guided progression that transforms manual coders into AI-augmented architects who own their development infrastructure.'
              : 'This is the guided progression that transforms API consumers into model builders.'
            }
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {allSteps.map((step, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border-2 hover:shadow-lg transition-all ${
                  step.stage === 1
                    ? 'bg-brand-blue/5 border-brand-blue/30 hover:border-brand-blue/50'
                    : step.stage === 2
                    ? 'bg-purple-500/5 border-purple-500/30 hover:border-purple-500/50'
                    : 'bg-brand-green/5 border-brand-green/30 hover:border-brand-green/50'
                }`}
              >
                {/* Step Number & Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold shrink-0 ${
                    step.stage === 1 ? 'bg-brand-blue' :
                    step.stage === 2 ? 'bg-purple-500' :
                    'bg-brand-green'
                  }`}>
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-sm leading-tight">{step.title}</h4>
                </div>

                {/* FROM */}
                <div className="mb-3 p-3 rounded-lg bg-base-200 border border-base-300">
                  <div className="text-xs text-base-content/50 mb-1">FROM (Point A)</div>
                  <div className="text-xs italic text-base-content/70">&ldquo;{step.from}&rdquo;</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-2">
                  <svg className={`w-5 h-5 ${
                    step.stage === 1 ? 'text-brand-blue' :
                    step.stage === 2 ? 'text-purple-400' :
                    'text-brand-green'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* TO */}
                <div className={`mb-3 p-3 rounded-lg border-2 ${
                  step.stage === 1 ? 'bg-brand-blue/10 border-brand-blue/30' :
                  step.stage === 2 ? 'bg-purple-500/10 border-purple-500/30' :
                  'bg-brand-green/10 border-brand-green/30'
                }`}>
                  <div className="text-xs text-base-content/50 mb-1">TO (Point B)</div>
                  <div className="text-xs font-medium">&ldquo;{step.to}&rdquo;</div>
                </div>

                {/* Moat Built */}
                <div className={`p-3 rounded-lg ${
                  step.stage === 1 ? 'bg-brand-blue/5 border border-brand-blue/20' :
                  step.stage === 2 ? 'bg-purple-500/5 border border-purple-500/20' :
                  'bg-brand-green/5 border border-brand-green/20'
                }`}>
                  <div className={`text-xs font-bold ${
                    step.stage === 1 ? 'text-brand-blue' :
                    step.stage === 2 ? 'text-purple-400' :
                    'text-brand-green'
                  }`}>
                    🛡️ {step.moat.split(':')[0]}
                  </div>
                  <div className="text-xs text-base-content/60 mt-1">{step.moat.split(':')[1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shu-Ha-Ri Methodology Explanation */}
        <div className="glass rounded-2xl p-8 md:p-12 border border-base-300 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">The Shu-Ha-Ri Learning Method</h3>
          <p className="text-center text-base-content/70 mb-8 max-w-3xl mx-auto">
            {course.slug === 'ai-for-decision-makers'
              ? <>Ancient Japanese mastery philosophy adapted for leadership development. <span className="font-semibold text-brand-blue">Each module</span> follows this complete cycle—by Step 9, you've built real confidence through nine rounds of learning by doing.</>
              : <>Ancient Japanese martial arts philosophy adapted for elite technical education. <span className="font-semibold text-brand-blue">Each module</span> follows this complete cycle—by Step 9, you've experienced Shu-Ha-Ri nine times, building deeper mastery with every iteration.</>
            }
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {(course.slug === 'ai-for-decision-makers' ? [
              {
                phase: "Shu (守) - Understand",
                icon: "📚",
                desc: "Clear, jargon-free explanation with live demos on real data",
                example: "See AI analyze real organizational data live—then understand exactly how and why it works"
              },
              {
                phase: "Ha (破) - Build",
                icon: "🔨",
                desc: "Guided hands-on experience with YOUR data—you're doing it, not watching",
                example: "Connect your grant data, ask AI the right questions, and evaluate the answers yourself"
              },
              {
                phase: "Ri (離) - Own",
                icon: "🚀",
                desc: "Customize for your specific organization and take it home",
                example: "Tailor your AI tools to your mission, your data, and your team's decision-making needs"
              }
            ] : [
              {
                phase: "Shu (守) - Learn",
                icon: "📚",
                desc: "TedTalk-style masterclass + guided hands-on coding",
                example: "Watch attention mechanisms explained, then code them yourself with step-by-step guidance"
              },
              {
                phase: "Ha (破) - Break",
                icon: "🔨",
                desc: "Modify code, experiment with parameters, adapt to your problems",
                example: "Change attention heads from 8 to 12, try different learning rates, debug training instability"
              },
              {
                phase: "Ri (離) - Transcend",
                icon: "🚀",
                desc: "Apply independently, innovate beyond what's taught",
                example: "Design novel architectures for your domain, solve your specific business problems, lead AI initiatives"
              }
            ]).map((phase, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-base-200 border border-base-300">
                <div className="text-5xl mb-4">{phase.icon}</div>
                <h4 className="font-bold text-lg mb-3">{phase.phase}</h4>
                <p className="text-base-content/70 text-sm mb-4">{phase.desc}</p>
                <div className="p-3 rounded-lg bg-base-100 border border-base-300">
                  <p className="text-xs text-base-content/60 italic">&ldquo;{phase.example}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 rounded-lg bg-brand-blue/10 text-center">
            <p className="text-sm text-base-content/70">
              {course.slug === 'ai-for-decision-makers'
                ? <>This is how you go from uncertain to unstoppable. <span className="font-medium text-brand-blue">Every step builds real confidence through real experience with your own data.</span></>
                : <>This is how you transcend from passive learner to active innovator. <span className="font-medium text-brand-blue">This is executive business education merged with hands-on mastery.</span></>
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessMetrics({ course }: { course: Course }) {
  return (
    <section className="bg-base-200 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Transformation Results</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            {course.slug === 'frontier-model-architecture'
              ? 'Real outcomes from students who completed The Frontier AI Sovereignty Stack™ and built production-grade systems'
              : course.slug === 'reasoning-models'
              ? 'Real outcomes from students who completed The Reasoning Sovereignty Stack™ and built their competitive moats'
              : course.slug === 'small-language-models'
              ? 'Real outcomes from students who mastered The Domain SLM Mastery Stack™ and eliminated API costs entirely'
              : course.slug === 'agentic-systems'
              ? 'Real outcomes from students who completed The Agent Architecture Blueprint™ and built production agent systems'
              : course.slug === 'diffusion-models'
              ? 'Real outcomes from students who completed The Visual AI Sovereignty Stack™ and built production image generation systems'
              : course.slug === 'multi-agent-systems'
              ? 'Real outcomes from students who completed The Multi-Agent Coordination Mastery™ and built coordinated agent teams'
              : course.slug === 'the-ai-product-factory'
              ? 'Real outcomes from students who completed The Production ML Sovereignty Stack™ and built production MLOps platforms'
              : course.slug === 'the-10x-developer'
              ? 'Real outcomes from students who completed The AI Infrastructure Sovereignty Stack™ and built AI-augmented development systems'
              : course.slug === 'agentic-sdk'
              ? 'Real outcomes from students who completed The Synthetic Employee Framework™ and built AI-powered decision support systems'
              : course.slug === 'ai-for-decision-makers'
              ? 'Real outcomes from organizational leaders who went from AI-uncertain to AI-empowered—and transformed how their teams make decisions'
              : 'Real outcomes from students who completed The LLM Sovereignty Stack™ and built their competitive moats'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Career Outcomes */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 border-2 border-brand-blue/30">
            <h3 className="text-2xl font-bold mb-6 text-brand-blue flex items-center gap-2">
              {course.slug === 'ai-for-decision-makers' ? '📈 Leadership Transformation' : '📈 Career Transformation'}
            </h3>
            <div className="space-y-4">
              {(course.slug === 'reasoning-models' ? [
                { metric: "80%", label: "Promoted to Senior/Staff Reasoning AI Engineer" },
                { metric: "$150K-$250K", label: "Average salary increase (reasoning premium)" },
                { metric: "95%", label: "Report being 'irreplaceable' (reasoning expertise rare)" },
                { metric: "90%", label: "Lead reasoning AI initiatives after completion" }
              ] : course.slug === 'the-ai-product-factory' ? [
                { metric: "82%", label: "Promoted to ML Platform Engineer within 12 months" },
                { metric: "$100K-$200K", label: "Average salary increase (MLOps premium)" },
                { metric: "93%", label: "Report deployment capabilities as career differentiator" },
                { metric: "88%", label: "Lead production ML initiatives after completion" }
              ] : course.slug === 'the-10x-developer' ? [
                { metric: "78%", label: "Report 10-100x productivity increase within 90 days" },
                { metric: "$130K-$220K", label: "Average salary increase (AI infrastructure premium)" },
                { metric: "92%", label: "Report becoming irreplaceable (infrastructure ownership)" },
                { metric: "85%", label: "Build complete AI-augmented development systems" }
              ] : course.slug === 'ai-for-decision-makers' ? [
                { metric: "92%", label: "Say they went from AI-skeptical to AI-confident in 2 days" },
                { metric: "10-20hrs", label: "Reclaimed per week from manual analysis and reporting" },
                { metric: "89%", label: "Report making faster, more confident decisions within 30 days" },
                { metric: "94%", label: "Say their teams now use data where they used to guess" }
              ] : [
                { metric: "75%", label: "Promoted to Senior+ within 12 months" },
                { metric: "$80K-$150K", label: "Average salary increase" },
                { metric: "90%", label: "Report being 'irreplaceable' at their company" },
                { metric: "85%", label: "Lead AI initiatives after completion" }
              ]).map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-base-100">
                  <div className="text-3xl font-bold text-brand-blue">{stat.metric}</div>
                  <div className="text-sm text-base-content/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Outcomes */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-green/5 border-2 border-brand-green/30">
            <h3 className="text-2xl font-bold mb-6 text-brand-green flex items-center gap-2">
              {course.slug === 'ai-for-decision-makers' ? '🎯 Organizational Impact' : '💰 Business Impact'}
            </h3>
            <div className="space-y-4">
              {(course.slug === 'reasoning-models' ? [
                { metric: "$120K-$600K", label: "Annual reasoning API cost elimination" },
                { metric: "85%", label: "Eliminate reasoning API dependencies entirely" },
                { metric: "75%", label: "Raise funding with proprietary reasoning moat" },
                { metric: "2-4 months", label: "Average time to ROI on reasoning investment" }
              ] : course.slug === 'the-ai-product-factory' ? [
                { metric: "$300K-$800K", label: "Annual MLOps platform cost elimination" },
                { metric: "87%", label: "Eliminate AWS SageMaker/Vertex AI dependencies" },
                { metric: "78%", label: "Raise funding with production ML infrastructure moat" },
                { metric: "2-5 months", label: "Average time to ROI on MLOps investment" }
              ] : course.slug === 'the-10x-developer' ? [
                { metric: "10-100x", label: "Productivity increase with autonomous sub-agents" },
                { metric: "80%", label: "Eliminate manual coding bottlenecks entirely" },
                { metric: "70%", label: "Build features 5-10x faster with AI infrastructure" },
                { metric: "1-3 months", label: "Average time to ROI on productivity gains" }
              ] : course.slug === 'ai-for-decision-makers' ? [
                { metric: "100%", label: "Of participants leave with working AI tools on their own data" },
                { metric: "87%", label: "Report their team adopted AI practices within 60 days" },
                { metric: "3x", label: "Faster grant analysis and funder reporting cycles" },
                { metric: "Zero", label: "Coding or technical skills required — built for leaders" }
              ] : [
                { metric: "$150K/year", label: "Average API cost savings from owning model weights" },
                { metric: "70%", label: "Eliminate third-party model dependencies entirely" },
                { metric: "60%", label: "Raise funding citing proprietary technology as moat" },
                { metric: "3-6 months", label: "Average time to ROI on course investment" }
              ]).map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-base-100">
                  <div className="text-3xl font-bold text-brand-green">{stat.metric}</div>
                  <div className="text-sm text-base-content/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Achievements */}
        <div className="p-8 rounded-2xl bg-base-100 border border-base-300">
          <h3 className="text-xl font-bold mb-6 text-center">What You'll Actually Build</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {(course.slug === 'reasoning-models' ? [
              { icon: "🧠", label: "Process Reward Model", desc: "PSRM from scratch" },
              { icon: "⚡", label: "Inference Scaling", desc: "Best-of-N, beam search" },
              { icon: "🎯", label: "RL Training", desc: "GRPO/PPO for reasoning" },
              { icon: "📦", label: "Distillation", desc: "o1 → small model" },
              { icon: "🔧", label: "Tool-Augmented", desc: "Multi-step reasoning" }
            ] : course.slug === 'ai-for-decision-makers' ? [
              { icon: "🔍", label: "AI Clarity", desc: "Know what's real, what's hype" },
              { icon: "💰", label: "Financial Insight", desc: "Grants & budget analysis" },
              { icon: "📈", label: "Impact Analysis", desc: "See what's working, prove it" },
              { icon: "🤝", label: "Fundraising Intel", desc: "Data-driven development" },
              { icon: "📊", label: "Your Dashboard", desc: "All your tools, one place" }
            ] : [
              { icon: "🏗️", label: "Complete GPT", desc: "4,000+ lines of PyTorch" },
              { icon: "🧠", label: "Attention", desc: "From scratch, no libraries" },
              { icon: "📊", label: "Training", desc: "100M+ tokens" },
              { icon: "🎯", label: "Classification", desc: "95%+ accuracy" },
              { icon: "💬", label: "ChatBot", desc: "Instruction-following" }
            ]).map((item, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-base-200 border border-base-300">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-sm mb-1">{item.label}</div>
                <div className="text-xs text-base-content/60">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingModalities({ course }: { course: Course }) {
  // Use course-specific pricing if available, otherwise use defaults
  const modalities = course.pricingModalities ? [
    {
      name: "Self-Paced Mastery",
      price: course.pricingModalities.selfPaced?.price || 1997,
      duration: "Lifetime Access",
      ideal: "Self-directed learners",
      features: course.pricingModalities.selfPaced?.features || [
        "All 9 steps available immediately",
        "50 hours of content + code",
        "Lifetime access to updates",
        "Community support",
        "Monthly live office hours",
        "30-day money-back guarantee"
      ],
      cta: "Start Learning",
      popular: false
    },
    {
      name: course.pricingModalities.cohort?.description || "9-Week Live Cohort",
      price: course.pricingModalities.cohort?.price || 6997,
      duration: "12 Weeks",
      ideal: "Engineers wanting accountability",
      features: course.pricingModalities.cohort?.features || [
        "Everything in Self-Paced",
        "Weekly live workshops (2 hrs)",
        "Direct instructor access",
        "Cohort accountability & networking",
        "24-hour code review turnaround",
        "1-on-1 kickoff & graduation calls",
        "Certificate + alumni network"
      ],
      cta: "Join Next Cohort",
      popular: true
    },
    {
      name: course.pricingModalities.founders?.description || "Founder's Edition",
      price: course.pricingModalities.founders?.price || 19997,
      duration: "6 Months",
      ideal: "Founders & technical leaders",
      features: course.pricingModalities.founders?.features || [
        "Everything in Live Cohort",
        "6 monthly 1-on-1 coaching calls",
        "Fractional CTO advisory and implementation support",
        "Custom learning path for your business",
        "Same-day code reviews",
        "Architecture consulting for your product",
        "Your proprietary model built with you",
        "Investor pitch coaching"
      ],
      cta: "Apply Now",
      popular: false
    }
  ] : [
    {
      name: "Self-Paced Mastery",
      price: 1997,
      duration: "Lifetime Access",
      ideal: "Self-directed learners",
      features: [
        "All 9 steps available immediately",
        "50 hours of content + code",
        "Lifetime access to updates",
        "Community support",
        "Monthly live office hours",
        "30-day money-back guarantee"
      ],
      cta: "Start Learning",
      popular: false
    },
    {
      name: "Live Cohort",
      price: 6997,
      duration: "12 Weeks",
      ideal: "Learners wanting accountability",
      features: [
        "Everything in Self-Paced",
        "Weekly live workshops (2 hrs)",
        "Direct instructor access",
        "Cohort accountability & networking",
        "24-hour code review turnaround",
        "1-on-1 kickoff & graduation calls",
        "Certificate + alumni network"
      ],
      cta: "Join Next Cohort",
      popular: true
    },
    {
      name: "Founder's Edition",
      price: 19997,
      duration: "6 Months",
      ideal: "Founders & technical leaders",
      features: [
        "Everything in Live Cohort",
        "6 monthly 1-on-1 coaching calls",
        "Fractional CTO advisory and implementation support",
        "Custom learning path for your business",
        "Same-day code reviews",
        "Architecture consulting for your product",
        "Your proprietary model built with you",
        "Investor pitch coaching"
      ],
      cta: "Apply Now",
      popular: false
    }
  ];

  return (
    <section className="bg-base-100 py-20 md:py-28" id="pricing">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Path to Mastery</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            {course.slug === 'frontier-model-architecture'
              ? 'All modalities include the complete Frontier AI Sovereignty Stack™. Choose based on your learning style and goals.'
              : course.slug === 'reasoning-models'
              ? 'All modalities include the complete Reasoning Sovereignty Stack™. Choose based on your learning style and goals.'
              : course.slug === 'small-language-models'
              ? 'All modalities include the complete Domain SLM Mastery Stack™. Choose based on your learning style and goals.'
              : course.slug === 'agentic-systems'
              ? 'All modalities include the complete Agent Architecture Blueprint™. Choose based on your learning style and goals.'
              : course.slug === 'diffusion-models'
              ? 'All modalities include the complete Visual AI Sovereignty Stack™. Choose based on your learning style and goals.'
              : course.slug === 'multi-agent-systems'
              ? 'All modalities include the complete Multi-Agent Coordination Mastery™. Choose based on your learning style and goals.'
              : course.slug === 'the-ai-product-factory'
              ? 'All modalities include the complete Production ML Sovereignty Stack™. Choose based on your learning style and goals.'
              : course.slug === 'the-10x-developer'
              ? 'All modalities include the complete AI Infrastructure Sovereignty Stack™. Choose based on your learning style and goals.'
              : course.slug === 'agentic-sdk'
              ? 'All modalities include the complete Synthetic Employee Framework™. Choose based on your learning style and business needs.'
              : course.slug === 'ai-for-decision-makers'
              ? 'All modalities include the complete Synthetic Consultant Stack™. Choose based on your schedule and organizational needs.'
              : 'All modalities include the complete LLM Sovereignty Stack™. Choose based on your learning style and goals.'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {modalities.map((tier, i) => (
            <div key={i} className={`relative p-8 rounded-2xl border-2 ${
              tier.popular
                ? 'bg-gradient-to-br from-brand-blue/10 to-brand-green/10 border-brand-blue shadow-lg shadow-brand-blue/20'
                : 'bg-base-200 border-base-300'
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-green text-white text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-brand-blue mb-1">
                  ${tier.price.toLocaleString()}
                </div>
                <div className="text-sm text-base-content/60 mb-2">{tier.duration}</div>
                <div className="text-xs text-base-content/50 italic">{tier.ideal}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-brand-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn btn-lg w-full ${
                tier.popular
                  ? 'bg-gradient-to-r from-brand-blue to-brand-green text-white border-0'
                  : 'btn-outline'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bootcamp */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-brand-blue/10 border-2 border-purple-500/30 text-center">
          <h3 className="text-2xl font-bold mb-2">{course.pricingModalities?.bootcamp?.description || "5-Day Immersive Bootcamp"}</h3>
          <p className="text-base-content/70 mb-4">
            {course.pricingModalities?.bootcamp?.features?.slice(0, 3).join('. ') || "Executive format: Monday-Friday intensive (8am-6pm). Build complete GPT in one week. Limited to 15 participants for maximum attention."}.
          </p>
          {course.slug === 'ai-for-decision-makers' ? (
            <a href="/ai-for-decision-makers-curriculum.pdf" download className="btn btn-outline border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Curriculum
            </a>
          ) : (
            <button className="btn btn-outline border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
              Request Bootcamp Schedule
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function CourseCurriculum({ course }: { course: Course }) {
  return (
    <section className="bg-base-200 py-20 md:py-28" id="curriculum">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Curriculum</h2>
          <p className="text-base-content/70">
            {course.modules} transformative steps · {course.hours} hours of hands-on content
          </p>
        </div>

        <div className="space-y-4">
          {course.curriculum.map((module, i) => (
            <div key={i} className="bg-base-100 rounded-xl border border-base-300 overflow-hidden">
              <div className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{module.title}</h3>
                  <p className="text-sm text-base-content/60">{module.lessons.length} lessons · Shu-Ha-Ri cycle</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <ul className="space-y-2 pl-14">
                  {module.lessons.map((lesson, j) => (
                    <li key={j} className="flex items-center gap-3 text-base-content/70 text-sm">
                      <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technologies({ course }: { course: Course }) {
  const millionDollarMessages = course.signatureSolution?.millionDollarMessages;

  return (
    <section className="bg-base-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {course.slug === 'ai-for-decision-makers' ? 'What You\'ll Work With' : 'Production-Grade Tech Stack'}
          </h2>
          <p className="text-base-content/70">
            {course.slug === 'ai-for-decision-makers'
              ? 'Practical, leader-friendly tools and concepts you\'ll use during the bootcamp and take home with you'
              : 'Master the same tools used by OpenAI, Anthropic, and Google to build frontier AI systems'}
          </p>
        </div>

        {/* Million Dollar Messages - Both Avatars (if available) */}
        {millionDollarMessages && (millionDollarMessages.careerAdvancers || millionDollarMessages.founders) && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Career Advancers */}
            {millionDollarMessages.careerAdvancers && (
              <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 border-2 border-brand-blue/30">
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-brand-blue/20 text-brand-blue text-sm font-bold mb-2">
                    {course.slug === 'ai-for-decision-makers' ? 'For Organizational Leaders' : 'For Career Advancers'}
                  </span>
                </div>
                <p className="text-base-content/80 leading-relaxed text-center">
                  {millionDollarMessages.careerAdvancers}
                </p>
              </div>
            )}

            {/* Founders/Entrepreneurs */}
            {millionDollarMessages.founders && (
              <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-green/5 border-2 border-brand-green/30">
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-brand-green/20 text-brand-green text-sm font-bold mb-2">
                    {course.slug === 'ai-for-decision-makers' ? 'For Mission-Driven Organizations' : 'For Founders & CTOs'}
                  </span>
                </div>
                <p className="text-base-content/80 leading-relaxed text-center">
                  {millionDollarMessages.founders}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          {course.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-6 py-3 rounded-full bg-base-200 border-2 border-base-300 text-base-content font-medium hover:border-brand-blue/50 transition-all hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ course }: { course: Course }) {
  return (
    <section className="bg-base-200 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {course.faqs.map((faq, i) => (
            <div key={i} className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content text-base-content/70">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollCTA({ course }: { course: Course }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-90"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {course.slug === 'ai-for-decision-makers'
            ? 'Lead With Confidence. Decide With Clarity.'
            : 'Stop Renting AI. Start Owning It.'}
        </h2>
        <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">
          {course.slug === 'ai-for-decision-makers'
            ? 'Join organizational leaders who went from AI-uncertain to AI-empowered—making faster, smarter, data-driven decisions in just 2 days.'
            : 'Join 500+ engineers and founders who\'ve gone from API consumers to model builders—building their competitive moats one step at a time.'}
        </p>
        <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
          {course.slug === 'ai-for-decision-makers'
            ? 'No coding required. AI Readiness Assessment included. Leave with working tools on your data. Bring your whole leadership team.'
            : 'Command $250K-$400K salaries or save $100K-$500K in annual API costs. Own your model weights. Build defensible technology moats. Become irreplaceable.'}
        </p>

        <div className="glass rounded-2xl p-8 md:p-12 max-w-lg mx-auto border border-white/10 mb-8">
          <div className="text-sm text-white/60 mb-2">Starting at</div>
          <div className="text-5xl font-bold text-white mb-2">
            ${course.price.toLocaleString()}
          </div>
          <p className="text-white/60 mb-8">
            {course.slug === 'ai-for-decision-makers'
              ? '2-Day Bootcamp · 4 Half-Day option · Team rates available'
              : 'Self-paced · Lifetime access · 30-day guarantee'}
          </p>

          <a
            href="#pricing"
            className="btn btn-lg w-full bg-white text-brand-slate hover:bg-white/90 border-0 mb-4"
          >
            {course.slug === 'ai-for-decision-makers' ? 'Reserve Your Seat' : 'Start Your Transformation'}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <p className="text-white/50 text-sm">
            {course.slug === 'ai-for-decision-makers'
              ? 'Your mission is too important for guesswork. Lead with data.'
              : 'This is not just education. This is technological sovereignty.'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{course.slug === 'ai-for-decision-makers' ? 'AI Readiness Assessment' : '30-day guarantee'}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{course.slug === 'ai-for-decision-makers' ? 'No coding required' : 'Lifetime updates'}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{course.slug === 'ai-for-decision-makers' ? 'Team rates available' : 'Zero API costs forever'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderNew />
      </Suspense>
      <main className="pt-16">
        <CourseHero course={course} />
        <SignatureSolution course={course} />
        <SuccessMetrics course={course} />
        <PricingModalities course={course} />
        <CourseCurriculum course={course} />
        <Technologies course={course} />
        <FAQ course={course} />
        <EnrollCTA course={course} />
      </main>
      <Footer />
    </>
  );
}
