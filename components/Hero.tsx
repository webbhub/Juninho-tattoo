import React from 'react';
import Button from './Button';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-black overflow-hidden scroll-mt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-60 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
        style={{ backgroundImage: "url('https://i.postimg.cc/sgDccXJX/foto-de-fund-opriemira-seessao-junin.png')" }}
      ></div>
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 text-center relative">
        <div className="inline-block border-y border-brand-gold/30 py-2 mb-8 animate-fade-in-up">
            <span className="text-brand-gold text-xs md:text-sm font-bold uppercase tracking-[0.5em] px-6">
              Especialista em todos os estilos
            </span>
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[11rem] text-white mb-6 leading-[0.8] tracking-tighter uppercase font-bold">
          {COMPANY_INFO.slogan}
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-4">
            FAÇA SEU ORÇAMENTO
          </p>
          <p className="text-gray-400 text-xs md:text-base uppercase tracking-widest leading-relaxed">
            Os melhores materiais e o melhor artista da região.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button href={`https://wa.me/${COMPANY_INFO.whatsapp}`}>
            Faça seu Orçamento
          </Button>
          <a 
            href="#portfolio" 
            className="text-white text-xs uppercase tracking-[0.2em] hover:text-brand-gold transition-all duration-300 border-b border-white/20 hover:border-brand-gold pb-2"
          >
            Ver Galeria
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;