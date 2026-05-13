"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Brain,
  Database,
  Terminal,
  ChevronDown,
  Sparkles,
  Send,
} from "lucide-react";

const techStack = [
  { name: "Python", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Databricks", category: "Data & Cloud" },
  { name: "Apache Spark", category: "Data & Cloud" },
  { name: "Microsoft Fabric", category: "Data & Cloud" },
  { name: "AWS", category: "Data & Cloud" },
  { name: "Azure", category: "Data & Cloud" },
  { name: "Scikit-Learn", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "MLflow", category: "AI/ML" },
  { name: "Docker", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "FastAPI", category: "Tools" },
  { name: "Django", category: "Tools" },
];

const experiences: {
  role: string;
  company: string;
  client?: string;
  period: string;
  location: string;
  highlights: string[];
}[] = [
  {
    role: "Senior Software Engineer",
    company: "EPAM Systems",
    client: "Whitecap — AI, backend & data engineering (Databricks)",
    period: "Jul 2024 – Present",
    location: "Remote",
    highlights: [
      "Built a multi-agent chatbot so managers can explore and analyze data in natural language (Text-to-SQL), without knowing the database layout.",
      "Shipped Python/FastAPI services that orchestrate the agent stack and surface results visually.",
      "Owned CI/CD with Git and Azure DevOps: pipelines, service connections, onboarding docs (merge conflicts, Databricks Asset Bundles / IaC, and more).",
      "Implemented AI guardrails for safer model behavior in production.",
      "Designed and delivered a customer churn prediction system.",
      "Owned medallion gold-layer tables and transformation pipelines processing terabytes per day.",
      "Defined monitoring with dashboards and alerts; mentored engineers on coding and data best practices; contributed to architecture and collected user feedback to iterate.",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "SOUTHWORKS",
    period: "Oct 2022 – Jun 2024",
    location: "Remote",
    highlights: [
      "7Eleven Auth: greenfield Django + PostgreSQL authentication platform for admins registering products and promotions across apps; OAuth2 SSO for dependent services; unit tests, InfoSec reviews, and integration ownership; Jenkins plus IaC with CloudFormation and AWS CDK.",
      "7Eleven Backend: localized the Django stack for new markets with automatic language detection and refactored the core to support countries beyond the US and Canada.",
      "Microsoft / Yobi.ai: Fabric reference architecture—PySpark notebooks for large-scale prep, SynapseML & SparkML AutoML templates with tunable hyperparameters, MLflow tracking, model-metric reporting, and Fabric pipelines for automated training.",
      "Microsoft / Electronic Arts: migrated historical telemetry from the ELK stack into Azure Data Explorer.",
      "Internal R&D: end-to-end Databricks MLOps—data prep, training, hyperparameter search, automated model comparison, deployment, and monitoring triggered from Azure DevOps; gated promotions with model tests and minimum-quality checks; canary releases via Databricks model endpoints.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Masiv",
    period: "Jul 2020 – Nov 2021",
    location: "Remote",
    highlights: ["Developed new ML-based prototype."],
  },
];

const projects = [
  {
    title: "MCP Databricks Server",
    description: "Model Context Protocol server for Databricks integration with AI agents",
    tech: ["Python", "MCP", "Databricks"],
    link: "https://github.com/JordiNeil/mcp-databricks-server",
    stars: 46,
  },
  {
    title: "AI4Sec",
    description: "AI-powered cybersecurity analysis and vulnerability detection system",
    tech: ["Python", "AI", "Security"],
    link: "https://github.com/JordiNeil/ai4sec",
  },
  {
    title: "Bad Posture",
    description: "Real-time posture detection and correction using computer vision",
    tech: ["JavaScript", "ML", "Computer Vision"],
    link: "https://github.com/JordiNeil/bad_posture",
    stars: 123,
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold gradient-text">
              JN
            </a>
            <div className="hidden md:flex items-center gap-8">
              {["About", "Experience", "Projects", "Tech", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="https://github.com/JordiNeil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-float mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">JN</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-slate-100">Jordi Neil</span>
            <br />
            <span className="gradient-text">Sánchez</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-4">
            Senior Software Engineer • AI & Data • M.Sc in Artificial Intelligence
          </p>
          
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            25 years old. Building intelligent systems, production data platforms, and the services that connect them.
            Passionate about AI, data engineering, and shipping software that teams actually rely on.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://linkedin.com/in/jordi-neil-sanchez-angarita-469043155"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-blue-600/20 hover:text-blue-400 transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/JordiNeil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:jordineil@jordineil.com"
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-cyan-600/20 hover:text-cyan-400 transition-all"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-mono text-cyan-400 mb-4">// ABOUT ME</h2>
              <h3 className="text-4xl font-bold mb-6">
                Engineering the Future with <span className="gradient-text">AI</span>
              </h3>
              <div className="space-y-4 text-slate-400">
                <p>
                  I&apos;m a <strong className="text-slate-200">Mechatronics Engineer</strong> with a 
                  Master&apos;s degree in <strong className="text-slate-200">Artificial Intelligence</strong>, 
                  currently a <strong className="text-slate-200">Senior Software Engineer</strong> at EPAM Systems
                  (Whitecap), focused on AI, backend, and Databricks data engineering.
                </p>
                <p>
                  My passion lies at the intersection of AI, data engineering, and software development. 
                  I specialize in building scalable data pipelines, ML systems, and leading teams to 
                  deliver innovative solutions.
                </p>
                <p>
                  Based in <strong className="text-slate-200">Medellín, Colombia</strong>, I&apos;m always 
                  exploring new technologies and contributing to open-source projects.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: "AI/ML", desc: "Machine Learning & Deep Learning" },
                { icon: Database, label: "Data", desc: "Engineering & Analytics" },
                { icon: Code2, label: "Software", desc: "Full-Stack Development" },
                { icon: Terminal, label: "DevOps", desc: "CI/CD & Infrastructure" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 card-hover"
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="font-semibold mb-1">{item.label}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-cyan-400 mb-4 text-center">// EXPERIENCE</h2>
          <h3 className="text-4xl font-bold mb-16 text-center">
            Professional <span className="gradient-text">Journey</span>
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 border-l-2 border-slate-800 hover:border-cyan-500/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-slate-800 border-2 border-cyan-500" />
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/50">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                      {exp.company}
                    </span>
                  </div>
                  {exp.client && (
                    <p className="text-slate-400 text-sm mb-2">{exp.client}</p>
                  )}
                  <p className="text-slate-500 text-sm mb-3">
                    {exp.period}
                    <span className="text-slate-600"> · </span>
                    {exp.location}
                  </p>
                  <ul className="list-disc list-outside space-y-2 pl-5 text-slate-400 text-sm md:text-base">
                    {exp.highlights.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-cyan-400 mb-4 text-center">// PROJECTS</h2>
          <h3 className="text-4xl font-bold mb-16 text-center">
            Featured <span className="gradient-text">Work</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.stars && (
                  <p className="mt-4 text-sm text-slate-500">⭐ {project.stars} stars</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-cyan-400 mb-4 text-center">// TECH STACK</h2>
          <h3 className="text-4xl font-bold mb-16 text-center">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-mono text-cyan-400 mb-4">// GET IN TOUCH</h2>
          <h3 className="text-4xl font-bold mb-6">
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h3>
          <p className="text-slate-400 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <a
            href="mailto:jordineil@jordineil.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity pulse-glow"
          >
            <Send className="w-5 h-5" />
            Say Hello
          </a>
          
          <p className="mt-8 text-slate-500">
            or reach me at{" "}
            <a href="mailto:jordineil@jordineil.com" className="text-cyan-400 hover:underline">
              jordineil@jordineil.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Jordi Neil Sánchez. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/jordi-neil-sanchez-angarita-469043155"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/JordiNeil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/jordineil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              𝕏
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
