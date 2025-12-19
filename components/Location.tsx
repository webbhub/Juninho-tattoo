import React from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Clock, Navigation, Thermometer, Accessibility, Wifi } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="bg-brand-dark border-t border-gray-900 scroll-mt-24">
      <div className="flex flex-col lg:flex-row h-full lg:h-[600px]">
        <div className="w-full lg:w-1/3 bg-brand-black p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="font-serif text-4xl text-white mb-6 uppercase tracking-tight">VISITE O STUDIO</h2>
          <div className="space-y-6 mb-10 text-gray-400 text-sm">
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-gold shrink-0" size={20} />
              <p className="leading-relaxed">{COMPANY_INFO.address}</p>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-brand-gold shrink-0" size={20} />
              <p className="leading-relaxed">{COMPANY_INFO.schedule}</p>
            </div>
            
            {/* Adição de comodidades visuais para preencher a seção */}
            <div className="pt-8 border-t border-gray-800 space-y-5">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-4">Comodidades</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                  <div className="p-1.5 border border-brand-gold/30 rounded-sm">
                    <Thermometer size={14} className="text-brand-gold" />
                  </div>
                  Ambiente 100% Climatizado
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                  <div className="p-1.5 border border-brand-gold/30 rounded-sm">
                    <Accessibility size={14} className="text-brand-gold" />
                  </div>
                  Local com Acessibilidade
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                  <div className="p-1.5 border border-brand-gold/30 rounded-sm">
                    <Wifi size={14} className="text-brand-gold" />
                  </div>
                  Wi-Fi & Café Gourmet
                </div>
              </div>
            </div>
          </div>
          <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" className="text-brand-gold uppercase tracking-widest text-xs font-bold flex items-center gap-2 hover:text-white transition-all group">
            <Navigation size={18} className="group-hover:translate-x-1 transition-transform" /> TRAÇAR ROTA MAPS OU WAZE
          </a>
        </div>
        <div className="w-full lg:w-2/3 h-[400px] lg:h-full bg-gray-900">
           <iframe src={COMPANY_INFO.googleMapsEmbed} width="100%" height="100%" style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} allowFullScreen={true} loading="lazy" title="Mapa"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
