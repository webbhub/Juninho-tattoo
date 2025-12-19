import React from 'react';
import Button from './Button';
import { COMPANY_INFO } from '../constants';

const ContactCTA: React.FC = () => {
  return (
    <section id="agendamento" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center z-10 relative">
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 uppercase tracking-tighter">
          FAÇA SEU ORÇAMENTO
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg font-light leading-relaxed">
          Especialista em todos os estilos de tatuagem. 
          Ambiente exclusivo com <strong className="text-white">extrema responsabilidade e qualidade</strong>.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button href={`https://wa.me/${COMPANY_INFO.whatsapp}`}>
            Solicitar Agora
          </Button>
          <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Atendimento personalizado via WhatsApp</span>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;