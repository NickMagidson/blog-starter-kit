import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function BlogPostCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <article className="projects-card group hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="p-4 h-full flex flex-col">
        {/* Cover Image */}
        <div className="mb-4 overflow-hidden rounded-lg">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        
        {/* Post Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
            <Link 
              href={`/posts/${slug}`} 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {title}
            </Link>
          </h3>
          
          <div className="text-sm mb-3 text-gray-500 dark:text-gray-400">
            <DateFormatter dateString={date} />
          </div>
          
          <p className="text-sm md:text-base leading-relaxed mb-4 text-gray-600 dark:text-gray-300 flex-1 line-clamp-3">
            {excerpt}
          </p>
          
          {/* Author */}
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </article>
  );
}
