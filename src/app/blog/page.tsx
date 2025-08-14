import { getAllPosts } from "@/lib/api";
import Container from "../_components/container";
import { HeroPost } from "../_components/hero-post";
import { Intro } from "../_components/intro";
import { MoreStories } from "../_components/more-stories";

export default function BlogPage() {
  // const allPosts = getAllPosts();

  // const featuredPost = allPosts[0];
  // const otherPosts = allPosts.slice(1);


  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="min-h-screen">
      <div className="background-blur"></div>
      
      <Container>
        {/* Page Header */}
        <Intro />
        {/* <section className="pt-24 pb-16">
          <h1 className="heading-gradient text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </section> */}

        {/* Featured Post */}
        {heroPost && (
          <section className="mb-16">
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </section>
        )}

        {/* All Posts Grid */}
        {/* {otherPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="heading-gradient text-4xl md:text-5xl font-bold mb-8">
              All Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {otherPosts.map((post) => (
                <BlogPostCard
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          </section>
        )} */}

        {/* Empty State */}
        {/* {allPosts.length === 0 && (
          <section className="pt-24 pb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-600 dark:text-gray-300">
              No posts yet
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Check back soon for new content!
            </p>
          </section>
        )} */}
      </Container>

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