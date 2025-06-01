import Image from 'next/image';
import * as motion from "motion/react-client"

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
      className="projects-card flex flex-col my-6 shadow-sm border rounded-lg w-full lg:flex-row lg:justify-around lg:items-center lg:p-7"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src={imageUrl}
        alt={`${title} thumbnail`}
        width={300}
        height={300}
        style={{ objectFit: "cover" }}
        className="rounded-2xl mx-auto lg:w-[34%] 2xl:mx-0"
      />

      <div className="flex flex-col lg:flex-col lg:p-11 lg:gap-4 max-w-md">
        <div className="flex flex-col p-4 gap-2 lg:p-0">
          <h4 className="mb-2 text-3xl font-semibold lg:text-4xl">{title}</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool: string, index: number) => (
              <span
                key={index}
                className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="leading-normal font-light">{description}</p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2 flex justify-center gap-2 lg:justify-start lg:p-0">
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            View Site
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
