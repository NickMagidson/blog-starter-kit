import * as motion from "motion/react-client";
import { useState } from "react";

export default function AboutSection2() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Sass",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "SQL", "Supabase", "PostgreSQL", "Express"],
      color: "from-green-400 to-emerald-400",
    },
    {
      category: "DevOps",
      skills: ["Docker", "AWS", "Azure", "CI/CD"],
      color: "from-orange-400 to-red-400",
    },
    {
      category: "AI/ML",
      skills: [
        "OpenAI",
        "LangChain",
        "RAG",
        "Vector DBs",
        "n8n",
        "Ollama",
        "Claude",
        "DeepSeek",
        "Vapi",
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      category: "Geospatial",
      skills: [
        "Mapbox",
        "Cesium",
        "Space Data",
        "Data Visualization",
        "3D",
        "Leaflet",
      ],
      color: "from-indigo-400 to-blue-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="max-w-5xl mx-auto 2xl:max-w-6xl z-50">
      <div className="p-2">
        <motion.div
          className="about-section-content backdrop-blur-sm p-6 lg:p-12 2xl:p-16 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Introduction */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-100 tracking-wide">
              👋 Hey there! I'm Nick.
            </motion.h2>

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl font-light text-neutral-300 leading-relaxed"
              variants={itemVariants}
            >
              A fullstack engineer who's a little obsessed with{" "}
              <span className="text-cyan-300 font-medium">creating things</span>
              .
            </motion.p>
          </motion.div>

          {/* Main Description */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.p className="text-lg sm:text-xl lg:text-2xl font-light text-neutral-200 leading-relaxed tracking-wide">
              I specialize in the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-medium">
                front-end
              </span>{" "}
              with tools like React and Next.js, but I also dive into{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent font-medium">
                backend work
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent font-medium">
                DevOps workflows
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent font-medium">
                AI integrations
              </span>{" "}
              when the project calls for it.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-light text-neutral-300 leading-relaxed"
              variants={itemVariants}
            >
              On the backend, I'm comfortable working with{" "}
              <span className="text-neutral-100 font-medium">Node.js</span>,{" "}
              <span className="text-neutral-100 font-medium">SQL</span>,{" "}
              <span className="text-neutral-100 font-medium">Python</span>, and
              <span className="text-neutral-100 font-medium"> Supabase</span>.
              I've also gotten hands-on with DevOps tools like{" "}
              <span className="text-neutral-100 font-medium">Docker</span>,{" "}
              <span className="text-neutral-100 font-medium">AWS</span>, and{" "}
              <span className="text-neutral-100 font-medium">Azure</span> to
              deploy and maintain fullstack applications.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-light text-neutral-300 leading-relaxed"
              variants={itemVariants}
            >
              When it comes to AI, I build with{" "}
              <span className="text-neutral-100 font-medium">LLMs</span>
              —leveraging tools like{" "}
              <span className="text-neutral-100 font-medium">OpenAI</span>,
              <span className="text-neutral-100 font-medium"> LangChain</span>,
              and{" "}
              <span className="text-neutral-100 font-medium">
                vector databases
              </span>{" "}
              to create intelligent, conversational experiences. I enjoy
              exploring{" "}
              <span className="text-neutral-100 font-medium">
                retrieval-augmented generation (RAG)
              </span>
              ,
              <span className="text-neutral-100 font-medium">
                {" "}
                prompt engineering
              </span>
              ,{" "}
              <span className="text-neutral-100 font-medium">
                n8n workflows
              </span>
              , and context-aware automation.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-light text-neutral-300 leading-relaxed"
              variants={itemVariants}
            >
              Lately, I've been diving deeper into building{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent font-medium">
                geospatial applications
              </span>{" "}
              using tools like{" "}
              <span className="text-neutral-100 font-medium">Mapbox</span> and{" "}
              <span className="text-neutral-100 font-medium">Cesium</span>, with
              a focus on visualizing{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent font-medium">
                space data.
              </span>{" "}
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-light text-neutral-300 leading-relaxed"
              variants={itemVariants}
            >
              When I'm not writing code, you'll probably find me 🎵{" "}
              <span className="text-neutral-100 font-medium">
                writing music
              </span>
              , ☕{" "}
              <span className="text-neutral-100 font-medium">
                exploring new coffee shops
              </span>
              , and 🌱{" "}
              <span className="text-neutral-100 font-medium">
                collecting way too many plants
              </span>
              .
            </motion.p>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h3 className="text-2xl lg:text-3xl font-light text-neutral-100 mb-6 tracking-wide">
              🛠️{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-medium">
                Skills & Technologies
              </span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  className="bg-neutral-900/40 backdrop-blur-sm rounded-xl p-5 border border-neutral-700/40"
                  variants={itemVariants}
                >
                  <h4
                    className={`text-lg font-medium mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent tracking-wide`}
                  >
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className={`px-3 py-1.5 text-sm font-light rounded-full border transition-all duration-300 cursor-pointer tracking-wide ${
                          hoveredSkill === skill
                            ? `bg-gradient-to-r ${category.color} text-black font-medium border-transparent`
                            : "bg-neutral-800/50 text-neutral-300 border-neutral-600/50 hover:border-neutral-500/70 hover:text-neutral-200"
                        }`}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: {
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.3,
                          },
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Quote */}
          {/* <motion.div variants={itemVariants} className="mt-8">
            <motion.div
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20"
              whileHover={{
                scale: 1.01,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p
                className="text-lg lg:text-xl font-light text-neutral-300 italic text-center leading-relaxed tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                💡 "I believe the best code is not just functional, but{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  elegant
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  maintainable
                </span>
                ."
              </motion.p>
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
