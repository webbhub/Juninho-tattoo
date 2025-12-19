import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <span className="block text-brand-gold font-bold uppercase tracking-[0.2em] text-sm mb-3">
        {subtitle}
      </span>
      <h2 className="font-serif text-3xl md:text-5xl text-white">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-24 bg-brand-gold ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;