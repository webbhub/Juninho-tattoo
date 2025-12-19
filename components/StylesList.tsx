import React from 'react';
import SectionTitle from './SectionTitle';
import { TATTOO_STYLES } from '../constants';

const StylesList: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-brand-dark scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Especialidades" title="NOSSOS ESTILOS" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TATTOO_STYLES.map((style) => (
            <div 
              key={style.id} 
              className="group relative h-[500px] overflow-hidden border border-gray-800"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                style={{ backgroundImage: `url(${style.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <h3 className="text-3xl font-serif text-white uppercase tracking-[0.2em]">{style.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesList;