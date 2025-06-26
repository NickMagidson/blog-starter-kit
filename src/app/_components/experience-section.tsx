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
    title: "LLM QA Engineer",
    company: "Tech Company",
    period: "2023 - Present",
    description: [
      "Developed and implemented quality assurance processes for large language models",
      "Created automated testing frameworks for AI model validation",
      "Collaborated with ML engineers to improve model performance and reliability",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "MLOps",
      "Testing Frameworks",
    ],
    logo: "/assets/logos/tech-company-logo.png", // Add your logo path here
  },
  {
    title: "React Contractor",
    company: "Various Clients",
    period: "2022 - 2023",
    description: [
      "Built performant user interfaces for multiple client projects",
      "Specialized in component systems and reusable UI libraries",
      "Delivered high-quality solutions for both B2B and B2C applications",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Component Libraries",
    ],
    logo: "/assets/logos/freelance-logo.png", // Add your logo path here
  },
];

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      <motion.div
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
      </motion.div>

      <div className="space-y-6">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mt-8"
      >
        <p className="text-gray-400 text-sm">
          Looking for new opportunities to create innovative solutions
        </p>
      </motion.div>
    </div>
  );
}
