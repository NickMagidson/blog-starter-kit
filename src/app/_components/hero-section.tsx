import * as motion from "motion/react-client";
import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex-col flex items-center justify-center">
        <section className="hero-section m-auto flex flex-col items-center justify-center ">
        <motion.h1
          className="heading-gradient text-5xl font-semibold text-center mb-4 sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Nick Magidson
        </motion.h1>

        <motion.p
          className="hero-sub-heading text-2xl text-center text-gray-600 sm:text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Fullstack Engineer
        </motion.p>
        </section>
      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </div>
    </>
  );
};

export default Hero;
