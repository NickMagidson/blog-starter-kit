import * as motion from "motion/react-client";
import Image from "next/image";

type FeaturedProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  codeUrl: string;
  siteUrl: string;
  tools: string[];
  reverse?: boolean;
};

export default function FeaturedProjectCard({
  title,
  description,
  imageUrl,
  codeUrl,
  siteUrl,
  tools,
  reverse = false,
}: FeaturedProjectCardProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center lg:gap-12 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12`}>
        
        {/* Image Section */}
        <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={imageUrl}
              alt={`${title} screenshot`}
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
              className="w-full h-[300px] lg:h-[400px] transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6 lg:w-1/2">
          <div className="space-y-4">
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              {title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool: string, index: number) => (
                <span
                  key={index}
                  className="text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30 px-3 py-1.5 rounded-full font-medium backdrop-blur-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed text-lg lg:text-xl font-light">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button text-center group transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                View Live Site
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button text-center group transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                View Code
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
