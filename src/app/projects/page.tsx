import * as motion from "motion/react-client";
import FeaturedProjectCard from "../_components/featured-project-card";
import ProjectGridCard from "../_components/project-grid-card";

const featuredProjects = [
  {
    title: 'Project Lynx',
    description:
      'A satellite visualizer application built with Celetrak TLE (two-line element) data, and a 3d globe using Cesium. Features real-time satellite tracking, orbital mechanics visualization, and interactive 3D Earth representation.',
    imageUrl: '/assets/blog/lynx-screen2.png',
    tools: ['React', 'Next.js', 'TypeScript', 'Cesium', 'TLE Data'],
    codeUrl: 'https://github.com/NickMagidson/project-lynx2',
    siteUrl: 'https://project-lynx2.vercel.app/',
    featured: true,
  },
  {
    title: 'Aero',
    description:
      "Comprehensive AQI / air pollution tracking application wielding OpenWeather API data, Mapbox integration, and precise location searching. Provides real-time air quality monitoring with beautiful data visualizations and location-based alerts.",
    imageUrl: '/assets/blog/aero-screen.png',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenWeather API', 'Mapbox'],
    codeUrl: 'https://github.com/NickMagidson/aero',
    siteUrl: 'https://aero-dashboard.netlify.app/',
    featured: true,
  },
  {
    title: 'Solar System Explorer',
    description:
      "Educational single-page application with comprehensive information on our solar system's planets and a dedicated page for NASA's Astronomy Picture of the Day. Features interactive planet cards, detailed astronomical data, and daily space photography.",
    imageUrl: '/assets/blog/space-screen.png',
    tools: ['React', 'Bootstrap', 'NASA APOD API', 'Responsive Design'],
    codeUrl: 'https://github.com/NickMagidson/planet-facts',
    siteUrl: 'https://nickmagidson.github.io/planet-facts/',
    featured: true,
  },
];

const otherProjects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Next.js and Tailwind CSS featuring modern animations and responsive design.',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    codeUrl: 'https://github.com/NickMagidson/portfolio',
    siteUrl: 'https://nickmagidson.dev',
  },
  {
    title: 'Weather Dashboard',
    description: 'Clean weather application with location-based forecasts and interactive maps.',
    tools: ['React', 'Weather API', 'Chart.js'],
    codeUrl: 'https://github.com/NickMagidson/weather-app',
    siteUrl: 'https://weather-dashboard-nm.netlify.app',
  },
  {
    title: 'Task Manager',
    description: 'Full-stack productivity application with drag-and-drop functionality and real-time updates.',
    tools: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    codeUrl: 'https://github.com/NickMagidson/task-manager',
    siteUrl: 'https://task-manager-nm.herokuapp.com',
  },
  {
    title: 'Code Snippet Organizer',
    description: 'Developer tool for organizing and sharing code snippets with syntax highlighting.',
    tools: ['React', 'Firebase', 'Prism.js'],
    codeUrl: 'https://github.com/NickMagidson/snippet-organizer',
    siteUrl: 'https://snippet-org.netlify.app',
  },
  {
    title: 'Expense Tracker',
    description: 'Personal finance application with budget tracking and spending analytics.',
    tools: ['Next.js', 'Prisma', 'PostgreSQL', 'Chart.js'],
    codeUrl: 'https://github.com/NickMagidson/expense-tracker',
    siteUrl: 'https://expense-tracker-nm.vercel.app',
  },
  {
    title: 'Recipe Finder',
    description: 'Culinary application that helps users find recipes based on available ingredients.',
    tools: ['React', 'Recipe API', 'Styled Components'],
    codeUrl: 'https://github.com/NickMagidson/recipe-finder',
    siteUrl: 'https://recipe-finder-nm.netlify.app',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="background-blur"></div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="heading-gradient text-5xl font-bold sm:text-7xl lg:text-8xl mb-6">
            My Projects
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of applications and experiments showcasing my journey in web development, 
            from satellite tracking to air quality monitoring and beyond.
          </p>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard 
              key={index} 
              {...project} 
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Other Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectGridCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          className="text-center p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Together
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a project or have an idea you'd like to discuss? 
            I'm always excited to work on new challenges.
          </p>
          <a
            href="/#contact"
            className="primary-button inline-block"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </main>
  );
}
