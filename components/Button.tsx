import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, href, className = '', variant = 'primary' }) => {
  const baseClasses = "inline-flex items-center justify-center px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-brand-gold text-brand-black hover:bg-white hover:text-brand-black border border-brand-gold shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    outline: "bg-transparent text-brand-gold border border-brand-gold hover:bg-brand-gold hover:text-brand-black"
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;