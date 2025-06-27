"use client";
import * as motion from "motion/react-client";

// Previous version focused on individual contributions
// type Contribution = {
//   projectName: string;
//   description: string;
//   contributionType:
//     | "Feature"
//     | "Bug Fix"
//     | "Documentation"
//     | "Enhancement"
//     | "Security";
//   technologies: string[];
//   repoUrl: string;
//   prUrl?: string;
//   issueUrl?: string;
//   stars?: number;
//   language: string;
//   impact?: string;
// };

type OpenSourceProject = {
  projectName: string;
  description: string;
  category:
    | "3D/Graphics"
    | "Web Framework"
    | "Developer Tools"
    | "UI/UX"
    | "Animation"
    | "Build Tools";
  technologies: string[];
  repoUrl: string;
  websiteUrl?: string;
  stars: number;
  language: string;
  myInvolvement: string;
  whyImportant: string;
  keyFeatures: string[];
};

// const openSourceProjects: OpenSourceProject[] = [
const openSourceProjects: OpenSourceProject[] = [
  {
    projectName: "React Three Fiber",
    description:
      "A React renderer for Three.js that brings declarative, reusable, and interactive 3D graphics to the web",
    category: "3D/Graphics",
    technologies: ["React", "Three.js", "TypeScript", "WebGL"],
    repoUrl: "https://github.com/pmndrs/react-three-fiber",
    websiteUrl: "https://docs.pmnd.rs/react-three-fiber",
    stars: 26500,
    language: "TypeScript",
    myInvolvement:
      "Active contributor focusing on TypeScript definitions and 3D scene optimization",
    whyImportant:
      "Revolutionizes how developers create 3D web experiences by making Three.js accessible through React",
    keyFeatures: [
      "Declarative 3D",
      "React Ecosystem",
      "Performance Optimized",
      "TypeScript Support",
    ],
  },
  {
    projectName: "Next.js",
    description:
      "The React Framework for Production - provides hybrid static & server rendering, smart bundling, and more",
    category: "Web Framework",
    technologies: ["React", "Node.js", "TypeScript", "Webpack"],
    repoUrl: "https://github.com/vercel/next.js",
    websiteUrl: "https://nextjs.org",
    stars: 124000,
    language: "JavaScript",
    myInvolvement:
      "Contributor to performance optimizations and developer experience improvements",
    whyImportant:
      "The industry standard for React applications, powering millions of websites worldwide",
    keyFeatures: [
      "Zero Config",
      "Hybrid SSG/SSR",
      "API Routes",
      "Built-in CSS",
    ],
  },
  {
    projectName: "Three.js",
    description:
      "JavaScript 3D library that makes WebGL simpler and enables stunning 3D graphics in web browsers",
    category: "3D/Graphics",
    technologies: ["JavaScript", "WebGL", "GLSL", "Canvas"],
    repoUrl: "https://github.com/mrdoob/three.js",
    websiteUrl: "https://threejs.org",
    stars: 101000,
    language: "JavaScript",
    myInvolvement:
      "Documentation contributor and community supporter for WebGL shader examples",
    whyImportant:
      "The foundation of 3D web development, enabling everything from games to data visualization",
    keyFeatures: [
      "WebGL Abstraction",
      "Rich Ecosystem",
      "Cross-Platform",
      "Extensive Documentation",
    ],
  },
  {
    projectName: "Tailwind CSS",
    description:
      "Utility-first CSS framework that enables rapid UI development with low-level utility classes",
    category: "UI/UX",
    technologies: ["CSS", "PostCSS", "JavaScript", "Node.js"],
    repoUrl: "https://github.com/tailwindlabs/tailwindcss",
    websiteUrl: "https://tailwindcss.com",
    stars: 82000,
    language: "JavaScript",
    myInvolvement:
      "Contributor to 3D transform utilities and responsive design improvements",
    whyImportant:
      "Transformed how developers approach CSS by promoting utility-first design principles",
    keyFeatures: [
      "Utility-First",
      "Responsive Design",
      "Component-Friendly",
      "Customizable",
    ],
  },
  {
    projectName: "Framer Motion",
    description:
      "Production-ready motion library for React that makes creating animations simple and performant",
    category: "Animation",
    technologies: ["React", "TypeScript", "Animation API", "CSS"],
    repoUrl: "https://github.com/framer/motion",
    websiteUrl: "https://www.framer.com/motion/",
    stars: 23000,
    language: "TypeScript",
    myInvolvement:
      "Performance optimization contributor and animation pattern advocate",
    whyImportant:
      "Sets the standard for React animations with its intuitive API and smooth performance",
    keyFeatures: [
      "Declarative API",
      "Gesture Support",
      "Layout Animations",
      "Server Rendering",
    ],
  },
  {
    projectName: "Vite",
    description:
      "Next-generation frontend tooling that provides lightning-fast development with instant hot module replacement",
    category: "Build Tools",
    technologies: ["JavaScript", "Rollup", "ESBuild", "Node.js"],
    repoUrl: "https://github.com/vitejs/vite",
    websiteUrl: "https://vitejs.dev",
    stars: 67000,
    language: "TypeScript",
    myInvolvement:
      "Contributor to 3D asset handling and development server optimizations",
    whyImportant:
      "Revolutionized frontend development with native ES modules and instant HMR",
    keyFeatures: [
      "Instant HMR",
      "Native ESM",
      "Optimized Builds",
      "Plugin Ecosystem",
    ],
  },
];

const categoryColors = {
  "3D/Graphics": "bg-purple-100 text-purple-800 border-purple-200",
  "Web Framework": "bg-blue-100 text-blue-800 border-blue-200",
  "Developer Tools": "bg-green-100 text-green-800 border-green-200",
  "UI/UX": "bg-pink-100 text-pink-800 border-pink-200",
  Animation: "bg-orange-100 text-orange-800 border-orange-200",
  "Build Tools": "bg-yellow-100 text-yellow-800 border-yellow-200",
};

const languageColors = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  CSS: "bg-pink-500",
  Python: "bg-green-500",
  Rust: "bg-orange-500",
  Go: "bg-cyan-500",
};

export default function OpenSourceContributions() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          🌟 Open-source projects I actively contribute to and support
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {openSourceProjects.map((project, index) => (
          <motion.div
            key={`${project.projectName}-${index}`}
            className="about-section-content p-2 rounded-xl border border-purple-700/50 backdrop-blur-sm group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.projectName}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      categoryColors[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        languageColors[
                          project.language as keyof typeof languageColors
                        ] || "bg-gray-500"
                      }`}
                    ></div>
                    <span className="text-sm text-gray-400">
                      {project.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm">
                      {(project.stars / 1000).toFixed(1)}k
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Why Important */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 mb-4">
              <p className="text-blue-300 text-sm font-medium">
                🚀 Why it matters: {project.whyImportant}
              </p>
            </div>

            {/* My Involvement */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 mb-4">
              <p className="text-green-300 text-sm font-medium">
                🤝 My involvement: {project.myInvolvement}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">Key Features:</p>
              <div className="flex flex-wrap gap-2">
                {project.keyFeatures.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-md border border-indigo-500/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center text-sm transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Repository
              </a>
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Website
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Statistics */}
      {/* <motion.div
        className="mt-12 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-white mb-4 text-center">
          📊 Project Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">
              {openSourceProjects.length}
            </div>
            <div className="text-sm text-gray-400">
              Projects Contributing To
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">
              {Math.round(
                openSourceProjects.reduce(
                  (sum, project) => sum + project.stars,
                  0
                ) / 1000
              )}
              k+
            </div>
            <div className="text-sm text-gray-400">Combined Stars</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">
              {
                new Set(openSourceProjects.map((project) => project.language))
                  .size
              }
            </div>
            <div className="text-sm text-gray-400">Languages</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">
              {
                new Set(openSourceProjects.map((project) => project.category))
                  .size
              }
            </div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}
