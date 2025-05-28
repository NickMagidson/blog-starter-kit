import Image from 'next/image';

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
    <div className="projects-card flex flex-col my-6 shadow-sm borderrounded-lg w-full">
      <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={`${title} thumbnail`}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h4 className="mb-2 text-3xl font-semibold">{title}</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool, index) => (
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
      <div className="px-4 pb-4 pt-0 mt-2 flex justify-center gap-2">
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
  );
}
