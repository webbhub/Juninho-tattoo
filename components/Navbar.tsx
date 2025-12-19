import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-black/95 border-white/10 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col group">
            <a href="#inicio" className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wider">
              JUNINHO<span className="text-brand-gold">TATTOO</span>
            </a>
            <span className="text-[9px] md:text-[10px] text-brand-gold uppercase tracking-[0.4em] ml-1">
              {COMPANY_INFO.artist}
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-6 px-8 py-3 border border-brand-gold text-brand-gold text-xs font-bold uppercase tracking-[0.15em] hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
            >
              SOLICITE SEU ORÇAMENTO
            </a>
          </nav>

          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black z-40 lg:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif text-gray-400 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;