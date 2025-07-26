import { getAllPosts } from "@/lib/api";
import AboutSection from "./_components/about-section";
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
      
      {/* Contact Section */}
      {/* <section id="contact" className="max-w-5xl mx-auto 2xl:max-w-6xl mb-12">
        <Container>
          <h2 className="heading-gradient text-5xl font-semibold sm:text-7xl lg:text-8xl mb-8">
            Contact
          </h2>
          <ContactForm />
        </Container>
      </section> */}

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
