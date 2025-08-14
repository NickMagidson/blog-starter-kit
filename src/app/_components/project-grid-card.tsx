import * as motion from "motion/react-client";

type ProjectGridCardProps = {
  title: string;
  description: string;
  tools: string[];
  codeUrl: string;
  siteUrl: string;
};

export default function ProjectGridCard({
  title,
  description,
  tools,
  codeUrl,
  siteUrl,
}: ProjectGridCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
    >
      <div className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10">
        
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool: string, index: number) => (
              <span
                key={index}
                className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30 px-2 py-1 rounded-full font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-center py-2 px-3 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Live Site
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-white/20 hover:border-white/40 text-white text-center py-2 px-3 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/5"
          >
            Code
          </a>
        </div>

        {/* Hover overlay effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}
