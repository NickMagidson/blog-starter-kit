import ProjectCard from './project-card';
import Container from './container';

const projects = [
  {
    title: 'Project Lynx',
    description:
      'A real-time satellite tracking application built with Celetrak TLE (two-line element) data, and a 3d globe using Cesium.',
    imageUrl:
      '/assets/blog/lynx-screen.png',
    tools: ['React', 'Next.js', 'Vite'],
    codeUrl: 'https://github.com/NickMagidson/project-lynx',
    siteUrl: 'https://project-lynx.netlify.app/',
  },
  {
    title: 'Aero',
    description:
      "AQI / air pollution tracking wielding OpenWeather API data, Mapbox, and specific location searching.",
    imageUrl:
      '/assets/blog/aero-screen.png',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    codeUrl: 'https://github.com/NickMagidson/aero',
    siteUrl: 'https://aero-dashboard.netlify.app/',
  },
  {
    title: 'Solar System Explorer',
    description:
      "Educational SPA with information on our solar system's planets and a page for the astronomy photo of the day using NASA's APOD API.",
    imageUrl:
      '/assets/blog/space-screen.png',
    tools: ['React', 'Bootstrap'],
    codeUrl: 'https://github.com/NickMagidson/planet-facts',
    siteUrl: 'https://nickmagidson.github.io/planet-facts/',
  }
  // {
  //   title: 'AI Plant Assistant',
  //   description:
  //     'React Native app that gives plant care tips using AI and real-time weather data.',
  //   imageUrl: 'https://source.unsplash.com/800x600/?plants,tech',
  //   codeUrl: 'https://github.com/example/ai-plant',
  //   siteUrl: 'https://plantcare.ai',
  // },
  // Add more as needed
];

export default function ProjectsSection() {
  return (
    <section className="mt-24 max-w-5xl mx-auto 2xl:max-w-6xl mb-12">
      <Container>
        <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
          <h1 className="heading-gradient text-5xl font-semibold sm:text-7xl lg:text-8xl lg:text-left">Projects</h1>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
