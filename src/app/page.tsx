import { getAllPosts } from "@/lib/api";
import SolarSystem from "./planets/SolarySystem";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="relative">
      <SolarSystem />
    </main>

    // <main>
    //   <div className="background-blur"></div>
    //   <Hero />
    //   <AboutSection />
    //   <ProjectsSection />

    //   <Container>
    //     {/* <Intro /> */}
    //     {/* <HeroPost
    //       title={heroPost.title}
    //       coverImage={heroPost.coverImage}
    //       date={heroPost.date}
    //       author={heroPost.author}
    //       slug={heroPost.slug}
    //       excerpt={heroPost.excerpt}
    //     /> */}
    //     {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    //   </Container>
    // </main>
  );
}
