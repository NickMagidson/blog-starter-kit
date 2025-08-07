import { getAllPosts } from "@/lib/api";
import AboutSection from "./_components/about-section";
import ContactForm from "./_components/contact-form";
import Container from "./_components/container";
import Hero from "./_components/hero-section";
import { MoreStories } from "./_components/more-stories";
import ProjectsSection from "./_components/projects-section";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    // <main className="relative">
    //   <SolarSystem />
    // </main>

    <main>
      <div className="background-blur"></div>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      {/* <OpenSourceContributions /> */}
      
      {/* Minimal CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto 2xl:max-w-5xl mb-16 px-6">
        <div className="text-center mb-12">
          <h2 className="heading-gradient text-4xl font-semibold sm:text-6xl lg:text-7xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and help bring your ideas to life.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <Container>
        {/* <Intro /> */}
        {/* <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        /> */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}

