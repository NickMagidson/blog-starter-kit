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
              A Front-End engineer who’s a little obsessed with creating things.
            </p>
            <br />
            <p>
              My work experience involves React and Next.js, DevOps tools such
              as Microsoft Azure, and UI/UX design using Figma.
            </p>
            <br />
            <p>
              When I’m not writing code, you’ll probably find me writing music
              and exploring new coffee shops.
            </p>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
