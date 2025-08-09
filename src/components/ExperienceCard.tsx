import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  technologies
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">{title}</h3>
          <p className="text-primary-600 dark:text-primary-300">{company}</p>
        </div>
        <span className="text-sm text-primary-500 dark:text-primary-400 mt-2 md:mt-0">{period}</span>
      </div>
      <p className="text-primary-700 dark:text-primary-200 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-sm bg-primary-500/10 text-primary-600 dark:text-primary-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;