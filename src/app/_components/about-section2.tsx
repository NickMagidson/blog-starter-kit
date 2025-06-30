import * as motion from "motion/react-client";

export default function AboutSection2() {
  return (
    <section className="max-w-5xl mx-auto 2xl:max-w-6xl z-50">
      <div className="p-2">
        <motion.div
          className="about-section-content backdrop-blur-sm p-9 lg:p-14 2xl:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 20% of it is visible
        >
          <h3 className="about-section-text text-xl sm:text-2xl lg:text-3xl">
            <p>Hey there! I'm Nick.</p>
            <br />
            <p>
              A fullstack engineer who's a little obsessed with creating things.
            </p>
            <br />
            <p>
              I specialize in the front-end with tools like React and Next.js,
              but I also dive into backend work, DevOps workflows, and AI
              integrations when the project calls for it.
            </p>
            <br />
            <p>
              On the backend, I’m comfortable working with Node.js, SQL, Python,
              and Supabase. I’ve also gotten hands-on with DevOps tools like
              Docker, AWS, and Azure to deploy and maintain fullstack
              applications.
            </p>
            <br />
            <p>
              When it comes to AI, I build with LLMs—leveraging tools like
              OpenAI, LangChain, and vector databases to create intelligent,
              conversational experiences. I enjoy exploring retrieval-augmented
              generation (RAG), prompt engineering, n8n workflows, and
              context-aware automation.
            </p>
            <br />
            <p>
              Lately, I’ve been diving deeper into building geospatial
              applications using tools like Mapbox and Cesium, with a focus on
              visualizing space data.
            </p>
            <br />
            <p>
              When I’m not writing code, you’ll probably find me writing music,
              exploring new coffee shops, and collecting way too many plants.
            </p>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
