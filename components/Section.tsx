
import React from 'react';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  const [ref] = useScrollAnimate();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 section-animate ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-12 relative">
          <span className="relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-green-400" style={{ boxShadow: '0 0 10px #0f0' }}></span>
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
