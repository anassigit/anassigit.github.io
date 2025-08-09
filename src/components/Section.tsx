import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children, className = '' }) => {
  return (
    <section id={id} className={`mb-20 ${className}`}>
      {title && (
        <div className="flex items-center justify-center gap-2 mb-10">
          {icon}
          <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-100">{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;