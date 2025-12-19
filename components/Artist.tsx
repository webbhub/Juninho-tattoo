import React from 'react';
import SectionTitle from './SectionTitle';
import { COMPANY_INFO } from '../constants';
import { Award, ShieldCheck, Coffee, Star, Instagram } from 'lucide-react';

const Artist: React.FC = () => {
  return (
    <section id="artista" className="py-24 bg-brand-black relative scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            {/* Foto Principal do Artista */}
            <div className="relative z-10 group overflow-hidden border border-gray-800">
              <img 
                src="https://i.postimg.cc/3x13sLmh/unnamed-(4).jpg" 
                alt="Juninho Bergamo" 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-gold/50"></div>
            </div>

            {/* Foto do Instagram (Prova Social) - RECOLOCADA AQUI */}
            <div className="absolute -bottom-8 -right-2 lg:-right-8 z-20 w-2/3 md:w-[60%] shadow-2xl border-4 border-black group transform hover:scale-[1.03] transition-transform duration-500">
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/jqhKwggp/a750f215-5f74-42a0-ac87-2787da2acfa9.jpg" 
                  alt="Juninho Tattoo Instagram Proof" 
                  className="w-full h-auto object-cover block"
                />
                <div className="absolute -top-4 -left-4 bg-brand-gold text-brand-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">
                  SOCIAL PROOF
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <SectionTitle 
              subtitle="O Melhor Artista da Região" 
              title="JUNINHO BERGAMO" 
              centered={false}
            />
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-base font-light mb-8">
              <p className="text-white font-medium text-lg leading-tight uppercase tracking-tight">
                Os melhores preços da região com o melhor artista e ótimo material.
              </p>
              <p>
                Gostaria de deixar ciente que somos um dos apenas 5% de todos os estúdios de tattoo que possuem Alvará do Estado. Ótima localização, ponto privilegiado e excelência em atendimento.
              </p>
              <p>
                O Juninho oferece a melhor maneira de pesquisar, criar e executar a sua melhor tatuagem. Vem conhecer o nosso espaço sem compromisso e tomar aquele cafezinho conosco.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                 <ShieldCheck className="text-brand-gold shrink-0" size={24} />
                 <div>
                   <h4 className="text-white font-bold uppercase text-[10px] tracking-wider mb-1">Responsabilidade</h4>
                   <p className="text-gray-500 text-xs">Biossegurança rigorosa e alvará em dia.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <Coffee className="text-brand-gold shrink-0" size={24} />
                 <div>
                   <h4 className="text-white font-bold uppercase text-[10px] tracking-wider mb-1">Atendimento</h4>
                   <p className="text-gray-500 text-xs">Espaço acolhedor.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <Star className="text-brand-gold shrink-0" size={24} />
                 <div>
                   <h4 className="text-white font-bold uppercase text-[10px] tracking-wider mb-1">Garantia de Preço</h4>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <Award className="text-brand-gold shrink-0" size={24} />
                 <div>
                   <h4 className="text-white font-bold uppercase text-[10px] tracking-wider mb-1">Procedimentos</h4>
                   <p className="text-gray-500 text-xs">Especialista em fechamentos e todos os estilos.</p>
                 </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-900 flex items-center gap-4">
              <Instagram className="text-brand-gold" size={20} />
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500">Acompanhe nosso dia a dia no Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;