"use client";
import * as motion from "motion/react-client";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Fullstack Engineer",
    company: "Various Clients",
    period: "2025 - Present",
    description: [
      "Build and maintain full-stack web applications using Next.js, React, Node.js, and PostgreSQL.",
      "Integrate AI capabilities into web products, including natural language processing, chatbots, and content generation using OpenAI and LangChain",
      "Architect and deploy applications using platforms like Vercel, Render, and Docker-based environments",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Docker",
      "Component Libraries",
    ],
    logo: "/assets/blog/moon.png",
  },
  {
    title: "LLM QA Engineer (UI Focus)",
    company: "Mercor Intelligence",
    period: "March 2025 – April 2025",
    description: [
      "Evaluated AI models for top AI labs by leveraging front-end development and UI design expertise",
      "Tested and optimized LLM-generated web apps via human feedback-based learning",
      "Conducted exploratory research into AI-assisted UI defect detection using industry-standard benchmarks",
    ],
    technologies: [
      "React",
      "TypeScript",
      "UI Testing",
      "AI Evaluation",
      "Prompt Engineering",
    ],
    logo: "/assets/blog/mercor-logo.png",
  },
  {
    title: "Frontend Engineer",
    company: "Urality",
    period: "Sep 2024 – May 2025",
    description: [
      "Contributed to a SaaS platform designed for downtowns and place-based events",
      "Resolved bugs and defects across a React.js codebase",
      "Implemented UI for new product features and visualized API data using reusable components",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Bootstrap",
      "API Integration",
      "Component Design",
    ],
    logo: "/assets/blog/urality_logo.jpg",
  },
  {
    title: "Lead Frontend Engineer",
    company: "Auditocity",
    period: "Sep 2023 – Aug 2024",
    description: [
      "Led front-end development for an HR auditing SaaS platform",
      "Refactored CSS architecture and implemented multi-page user flows",
      "Built reusable React components and integrated .NET backend APIs",
      "Redesigned UI/UX using Figma prototypes and collaborated with executives in Agile cycles",
      "Proactively enhanced LLM expertise by participating in workshops. Gaining hands-on experience with vector databases, RAG pipelines, and production-grade AI apps.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "C#",
      ".NET",
      "Azure DevOps",
      "Figma",
      "Jira",
      "AI Tooling",
    ],
    logo: "/assets/blog/small-logo.png",
  },
  {
    title: "Web Designer & Developer",
    company: "EDIFi Digital",
    period: "July 2020 – Sep 2023",
    description: [
      "Designed and developed custom marketing websites for small businesses and clients",
      "Utilized tools like Webflow, WordPress, and React to deliver responsive digital experiences",
      "Built and deployed AI voice agents for business automation, such as lead vetting and appointment setting",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Webflow",
      "WordPress",
      "AI Voice Tools",
    ],
    logo: "/assets/blog/edifi-logo.png",
  },
  {
    title: "Frontend Developer",
    company: "Storyplay, LLC",
    period: "May 2020 – June 2021", // ← Replace with actual dates
    description: [
      "Storyplay is an augmented reality game using Unity for a children’s storytelling startup",
      "Deployed and configured a WordPress website using Bitnami on an AWS EC2 instance",
      "Customized the theme and CMS to support dynamic storytelling content for children and families",
      "Handled server setup, DNS configuration, and performance tuning for production readiness",
    ],
    technologies: ["WordPress", "JavaScript", "HTML", "CSS", "Figma"],
    logo: "/assets/logos/storyplay-logo.png", // ← Replace with the actual logo path if available
  },
];

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-8"
      >
        <p className="text-lg text-gray-300 mb-6">
          I specialize in performant UI, component systems, and building for
          both humans and machines.
        </p>
      </motion.div> */}

      <div className="space-y-6 max-w-4xl lg:max-w-3xl mx-auto">
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="about-section-content border border-gray-700 rounded-lg p-6 bg-gray-900/50 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex items-center gap-4">
                {experience.logo && (
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-gray-600 flex items-center justify-center">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Fallback to company initials if logo fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-white font-semibold text-sm">${experience.company.charAt(
                            0
                          )}</span>`;
                        }
                      }}
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-blue-400 font-medium">
                    {experience.company}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
                {experience.period}
              </span>
            </div>

            <ul className="space-y-2 mb-4">
              {experience.description.map((desc, descIndex) => (
                <li key={descIndex} className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-3 mt-1.5 text-xs">▶</span>
                  {desc}
                </li>
              ))}
            </ul>

            {experience.technologies && (
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mt-8"
      >
        <p className="text-gray-400 text-sm">
          Looking for new opportunities to create innovative solutions
        </p>
      </motion.div> */}
    </div>
  );
}
