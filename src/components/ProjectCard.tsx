import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100 mb-2">{title}</h3>
        <p className="text-primary-600 dark:text-primary-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-primary-500/10 text-primary-600 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;