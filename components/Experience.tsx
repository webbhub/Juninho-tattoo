import { ChevronRight, HeartHandshake, MessageSquare, Star, UserCheck, Zap } from 'lucide-react';
import React from 'react';
import { COMPANY_INFO } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black border-y border-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Content Left */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#E5E5E5" strokeWidth={0} />
                ))}
              </div>
              <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] ml-2">
                5.0 Google Rating
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight uppercase">
              A EXPERIÊNCIA <br/> <span className="text-brand-gold italic font-light">NO STUDIO</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg mb-12">
              <p>
                Com uma média de 5 estrelas no Google, nossos clientes não apenas recebem uma arte impecável, mas desfrutam de uma experiência completa e saem sempre satisfeitos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              <div className="flex items-start gap-4 group">
                <div className="p-2 border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Atendimento Impecável</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed uppercase">Hospitalidade de elite e suporte dedicado em cada interação.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-2 border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Consultoria de Arte</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed uppercase">Alinhamento técnico para transformar sua ideia em um projeto perfeito.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2 border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Projetos Autorais</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed uppercase">Criações exclusivas que respeitam sua identidade e anatomia.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2 border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Suporte Pós-Tattoo</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed uppercase">Orientação especializada garantida até a cicatrização total.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="inline-flex items-center gap-4 py-3 px-6 border border-brand-gold/20 bg-brand-dark/50 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-black font-bold shrink-0 text-lg">
                  G
                </div>
                <div>
                  <p className="text-white text-[10px] font-bold uppercase tracking-widest">Avaliado no Google</p>
                  <p className="text-gray-500 text-[9px] uppercase">Padrão de excelência</p>
                </div>
              </div>
              
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-gray-500 uppercase tracking-widest font-bold hover:text-white transition-colors flex items-center gap-2 group/link"
              >
                Ver todas as avaliações <ChevronRight size={14} className="text-brand-gold group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-full h-full border border-brand-gold/10 z-0"></div>
              <div className="relative z-10 overflow-hidden border border-gray-800 shadow-2xl bg-brand-dark">
                <img 
                  src="https://i.postimg.cc/wjWgW2nP/9bec1659-51bd-469f-a129-915662b7554f.jpg" 
                  alt="Experiência no Studio Juninho Tattoo" 
                  className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-gold/50 z-20"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-gold/50 z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;