import * as motion from "motion/react-client";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  codeUrl: string;
  siteUrl: string;
  tools: string[];
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  codeUrl,
  siteUrl,
  tools,
}: ProjectCardProps) {
  return (
    <motion.div
      className="projects-card w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 p-6 lg:p-8">
        <div className="flex-shrink-0 mb-6 lg:mb-0">
          <Image
            src={imageUrl}
            alt={`${title} thumbnail`}
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
            className="rounded-2xl w-full lg:w-[400px] lg:h-[300px]"
          />
        </div>

        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h4 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
              {title}
            </h4>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool: string, index: number) => (
                <span
                  key={index}
                  className="text-sm bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-medium border border-blue-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="text-white/90 leading-relaxed text-lg font-light">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button text-center"
            >
              View Site
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button text-center"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
