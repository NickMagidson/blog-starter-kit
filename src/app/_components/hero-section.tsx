import React from 'react';
import Container from "@/app/_components/container";

const Hero: React.FC = () => {
  return (
    <>
   
        <div className="min-h-screen flex-col flex items-center justify-center">
        <div className="background-blur"></div>

          <section className="hero-section m-auto flex flex-col items-center justify-center ">
            <h1 className="heading-gradient text-5xl font-semibold text-center mb-4 md:text-6xl">Nick Magidson</h1>
            <p className="hero-sub-heading text-2xl text-center text-gray-600">
              Frontend Engineer
            </p>
          </section>

          

        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </div>
    </>
  );
};

export default Hero;
