import React from 'react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-3xl font-bold text-white tracking-wider mb-4">
                JUNINHO<span className="text-brand-gold">TATTOO</span>
            </h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-xs">
              Arte, segurança e tradição. Transformando histórias em tatuagens de alto padrão desde 2012.
            </p>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-wider text-[10px]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gray-600 mt-1" />
                <div>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="block text-gray-400 text-sm hover:text-white transition-colors">{COMPANY_INFO.whatsappDisplay}</a>
                    <span className="block text-gray-600 text-xs uppercase tracking-widest mt-1">WhatsApp & Ligações</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Localização</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {COMPANY_INFO.address}
            </p>
            <p className="text-gray-500 text-xs">
              {COMPANY_INFO.schedule}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="text-gray-800 text-[10px] uppercase tracking-widest">
            Developed by AI Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
