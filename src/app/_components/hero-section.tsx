import React from 'react';
import Container from "@/app/_components/container";

const Hero: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex-col flex items-center justify-center">
        <section className="hero-section m-auto flex flex-col items-center justify-center ">
          <h1 className="heading-gradient text-5xl font-semibold text-center mb-4 sm:text-7xl lg:text-8xl">Nick Magidson</h1>
          <p className="hero-sub-heading text-2xl text-center text-gray-600 sm:text-4xl lg:text-6xl">
            Frontend Engineer
          </p>
        </section>
      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </div>
    </>
  );
};

export default Hero;
