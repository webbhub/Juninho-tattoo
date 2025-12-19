import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Menu, X, Star, ShieldCheck, Coffee, Award, Instagram, 
  MapPin, Clock, Navigation, Phone, ChevronRight, 
  HeartHandshake, MessageSquare, UserCheck, Zap, 
  Wifi, Thermometer, Accessibility
} from 'lucide-react';

// --- CONSTANTS ---
const COMPANY_INFO = {
  name: "Juninho Tattoo",
  artist: "Juninho Bergamo",
  slogan: "ARTE NA PELE",
  whatsapp: "5511945388439",
  whatsappDisplay: "(11) 94538-8439",
  address: "R. São Joaquim da Barra, 53 - Jardim Nova Europa, Campinas - SP, 13040-063",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.529853926618!2d-47.0514104!3d-22.9307221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf49842f1f5d%3A0xc3f9828236f04c63!2sR.%20S%C3%A3o%20Joaquim%20da%20Barra%2C%2053%20-%20Jardim%20Nova%20Europa%2C%20Campinas%20-%20SP%2C%2013040-063!5e0!3m2!1spt-BR!2sbr!4v1710000000000", 
  schedule: "Segunda a Sábado: 09:00 às 22:00",
  social: {
    instagram: "https://www.instagram.com/juninho_tattoocps?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  }
};

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "O Artista", href: "#artista" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

const TATTOO_STYLES = [
  { id: 1, title: "Realismo", image: "https://i.postimg.cc/J76VJxH3/realismo.jpg" },
  { id: 2, title: "Oriental", image: "https://i.postimg.cc/66SZPLJb/ORIENTAL-ESTILO.jpg" },
  { id: 3, title: "Delicadas", image: "https://i.postimg.cc/jSRy6qrq/DELICADA-ESTILO.jpg" },
  { id: 4, title: "Coloridas", image: "https://i.postimg.cc/PqRZkmv5/COLORIDA-ESTILO.jpg" },
  { id: 5, title: "Pontilhismo", image: "https://i.postimg.cc/vBSyQtW9/pontilhismoreal.jpg" },
  { id: 6, title: "Cobertura", image: "https://i.postimg.cc/DzKtFYRn/cobertura.jpg" },
  { id: 7, title: "Old School", image: "https://i.postimg.cc/sxNgNR6d/neoold.jpg" },
  { id: 8, title: "Retrato", image: "https://i.postimg.cc/q7RnYmRW/RETRATO-ESTILO.jpg" },
  { id: 9, title: "Black Work", image: "https://i.postimg.cc/wjWgW2nP/9bec1659-51bd-469f-a129-915662b7554f.jpg" },
  { id: 10, title: "Fechamento", image: "https://i.postimg.cc/fR70kGty/FECHAMENTO-ESTILO.jpg" },
  { id: 11, title: "Maori", image: "https://i.postimg.cc/vTSJs8wW/maori.jpg" },
  { id: 12, title: "Mandalas", image: "https://i.postimg.cc/Wbx4mTqg/mandala-na-cara.jpg" },
];

const REVIEWS = [
  { id: 1, name: "Marlon Marlon", text: "Queria agradecer o Juninho pela tatoo que ele fez, cara vc foi monstro nessa tatoo obrigado não vai ficar só nessa voltarei breve, para mais uma kkkkkkkk.", stars: 5, image: "https://i.postimg.cc/nhKnvZ1c/AVALIACAO-MARLON.webp" },
  { id: 2, name: "Leticia Souza", text: "local top e agradável, o melhor de campinas cobertura da tatuagem ele fez q eu nem acreditava. top", stars: 5, image: "https://i.postimg.cc/mZqZ4mrj/AVALIACAO-LETICIA.webp" },
  { id: 3, name: "Adriano Cabral", text: "Tatto ficou excelente, profissional detalhista, além de muito gente fina.", stars: 5 }
];

const PORTFOLIO_IMAGES = [
  "https://i.postimg.cc/ZYMNgkyp/bde7d1df-de88-4036-831a-2ba354eb7b39.jpg",
  "https://i.postimg.cc/hvzXgj7X/039800f1-0d15-46e3-b5d1-828df8a191c5.jpg",
  "https://i.postimg.cc/LXVTfxy0/6a47daeb-f998-4efc-9c4a-2fd72a43c1c0.jpg",
  "https://i.postimg.cc/SKhCrWYc/138ea324-08e4-4788-a640-a9505befec35.jpg",
  "https://i.postimg.cc/7h6gzwJ8/23ad7091-34d5-485c-9b28-f52b15687f04.jpg",
  "https://i.postimg.cc/sgZ4Kj6F/110bd53f-def0-4fcc-8f18-f724b30815f3.jpg",
  "https://i.postimg.cc/W1DXK64C/4512b458-15b8-41f2-a059-122b3fdca5e6.jpg",
  "https://i.postimg.cc/4xbmXjnP/b91c4d08-5989-4967-80a1-01139f1902dc.jpg",
  "https://i.postimg.cc/rwzPT2hL/9231e113-15a6-4249-87cd-8dbeb4d3ed22.jpg",
  "https://i.postimg.cc/J76VJxH3/realismo.jpg",
  "https://i.postimg.cc/DzKtFYRn/cobertura.jpg",
  "https://i.postimg.cc/vTfG36Vj/af15c806-0f15-4072-b448-5bc5c0361c20.jpg",
  "https://i.postimg.cc/sgV34xD1/4daab395-d253-4446-a4a1-f4a07f7e7201.jpg",
  "https://i.postimg.cc/fRwMfyTH/0082aadc-651d-4d59-b077-d4568eb96545.jpg",
  "https://i.postimg.cc/Gptr6fyW/f93b0f39-2011-4eac-bc4e-97807f362e4d.jpg",
  "https://i.postimg.cc/HLNHmt0y/eb966ec8-4ba6-4a4d-9c04-370e810feee7.jpg",
  "https://i.postimg.cc/9Mq2QqJm/361042f6-b2f3-42ae-abb6-21372539f797.jpg",
  "https://i.postimg.cc/hvLq9WkH/4f7648ae-a452-4532-ba17-d639075be5ca.jpg",
  "https://i.postimg.cc/cHYqSGLd/fd320b9c-e517-4895-97ae-861a48dfc7c2.jpg",
  "https://i.postimg.cc/7P3vt4R2/56047aa3-23dc-4de1-8662-4ca2abd64fd9.jpg",
  "https://i.postimg.cc/wBCPF4Q9/7e750bcd-1e93-4561-9ccb-f29c9fe2e980.jpg",
  "https://i.postimg.cc/3Nm3nDv4/59094559-4302-4525-ba9a-e6da48b94fc2.jpg",
  "https://i.postimg.cc/C5mcycDW/0256cca8-44af-49be-9033-5a8f66cbbe81.jpg"
];

// --- HELPER COMPONENTS ---
const Button = ({ children, href, className = '', variant = 'primary' }: { children: React.ReactNode, href: string, className?: string, variant?: 'primary' | 'outline' }) => {
  const baseClasses = "inline-flex items-center justify-center px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 transform hover:-translate-y-1";
  const variants = {
    primary: "bg-brand-gold text-brand-black hover:bg-white hover:text-brand-black border border-brand-gold shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    outline: "bg-transparent text-brand-gold border border-brand-gold hover:bg-brand-gold hover:text-brand-black"
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

const SectionTitle = ({ subtitle, title, centered = true }: { subtitle: string, title: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <span className="block text-brand-gold font-bold uppercase tracking-[0.2em] text-sm mb-3">{subtitle}</span>
    <h2 className="font-serif text-3xl md:text-5xl text-white">{title}</h2>
    <div className={`mt-4 h-1 w-24 bg-brand-gold ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- MAIN COMPONENTS ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-black/95 border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex flex-col group">
          <button onClick={(e) => scrollToSection(e, '#inicio')} className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wider text-left">
            JUNINHO<span className="text-brand-gold">TATTOO</span>
          </button>
          <span className="text-[9px] md:text-[10px] text-brand-gold uppercase tracking-[0.4em] ml-1">{COMPANY_INFO.artist}</span>
        </div>
        <nav className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 py-2 cursor-pointer relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="ml-6 px-8 py-3 border border-brand-gold text-brand-gold text-xs font-bold uppercase tracking-[0.15em] hover:bg-brand-gold hover:text-brand-black transition-all">
            SOLICITE SEU ORÇAMENTO
          </a>
        </nav>
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      <div className={`fixed inset-0 bg-black z-40 lg:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {NAV_LINKS.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            onClick={(e) => scrollToSection(e, link.href)} 
            className="text-3xl font-serif text-gray-400 hover:text-white cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="inicio" className="relative h-screen flex items-center justify-center bg-black overflow-hidden scroll-mt-24">
    <div className="absolute inset-0 z-0 opacity-60 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105" style={{ backgroundImage: "url('https://i.postimg.cc/sgDccXJX/foto-de-fund-opriemira-seessao-junin.png')" }}></div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-10"></div>
    <div className="container mx-auto px-4 z-20 text-center relative">
      <div className="inline-block border-y border-brand-gold/30 py-2 mb-8"><span className="text-brand-gold text-xs md:text-sm font-bold uppercase tracking-[0.5em] px-6">Especialista em todos os estilos</span></div>
      <h1 className="font-serif text-6xl md:text-8xl lg:text-[11rem] text-white mb-6 leading-[0.8] tracking-tighter uppercase font-bold">{COMPANY_INFO.slogan}</h1>
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-4">FAÇA SEU ORÇAMENTO</p>
        <p className="text-gray-400 text-xs md:text-base uppercase tracking-widest leading-relaxed">Os melhores materiais e o melhor artista da região.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button href={`https://wa.me/${COMPANY_INFO.whatsapp}`}>Faça seu Orçamento</Button>
        <a href="#portfolio" className="text-white text-xs uppercase tracking-[0.2em] hover:text-brand-gold transition-all duration-300 border-b border-white/20 hover:border-brand-gold pb-2">Ver Galeria</a>
      </div>
    </div>
  </section>
);

const Artist = () => (
  <section id="artista" className="py-24 bg-brand-black relative scroll-mt-24">
    <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2 relative">
        <div className="relative z-10 group overflow-hidden border border-gray-800">
          <img src="https://i.postimg.cc/3x13sLmh/unnamed-(4).jpg" alt="Juninho Bergamo" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-gold/50"></div>
        </div>
        <div className="absolute -bottom-8 -right-2 lg:-right-8 z-20 w-2/3 md:w-[60%] shadow-2xl border-4 border-black group transform hover:scale-[1.03] transition-transform duration-500">
          <div className="relative">
            <img src="https://i.postimg.cc/jqhKwggp/a750f215-5f74-42a0-ac87-2787da2acfa9.jpg" alt="Instagram Proof" className="w-full h-auto object-cover block" />
            <div className="absolute -top-4 -left-4 bg-brand-gold text-brand-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">SOCIAL PROOF</div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
        <SectionTitle subtitle="O Melhor Artista da Região" title="JUNINHO BERGAMO" centered={false} />
        <div className="space-y-6 text-gray-400 leading-relaxed text-base font-light mb-8">
          <p className="text-white font-medium text-lg uppercase tracking-tight">Os melhores preços da região com o melhor artista e ótimo material.</p>
          <p>Somos um dos apenas 5% de todos os estúdios de tattoo que possuem Alvará do Estado. Excelência em atendimento e segurança.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { icon: <ShieldCheck />, title: "Responsabilidade", desc: "Alvará e biossegurança rigorosa." },
            { icon: <Coffee />, title: "Atendimento", desc: "Espaço acolhedor com café." },
            { icon: <Star />, title: "Garantia de Preço", desc: "Justo e competitivo." },
            { icon: <Award />, title: "Procedimentos", desc: "Especialista em fechamentos." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="text-brand-gold shrink-0">{item.icon}</span>
              <div>
                <h4 className="text-white font-bold uppercase text-[10px] tracking-wider mb-1">{item.title}</h4>
                {item.desc && <p className="text-gray-500 text-xs">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-gray-900 flex items-center gap-4 text-gray-500">
          <Instagram size={20} className="text-brand-gold" />
          <span className="text-[11px] uppercase tracking-[0.2em]">Acompanhe no Instagram</span>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="py-24 bg-brand-black border-y border-gray-900 overflow-hidden">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <div className="flex items-center gap-2 mb-6 text-brand-gold font-bold text-xs uppercase tracking-[0.3em]">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#E5E5E5" strokeWidth={0} />)}</div>
          <span className="ml-2">5.0 Google Rating</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight uppercase">A EXPERIÊNCIA <br/> <span className="text-brand-gold italic font-light">NO STUDIO</span></h2>
        <p className="text-gray-400 font-light leading-relaxed text-lg mb-12">Nossos clientes desfrutam de uma experiência completa e saem sempre satisfeitos.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
          {[
            { icon: <UserCheck />, title: "Atendimento Impecável", desc: "Hospitalidade de elite." },
            { icon: <MessageSquare />, title: "Consultoria de Arte", desc: "Alinhamento técnico." },
            { icon: <Zap />, title: "Projetos Autorais", desc: "Criações exclusivas." },
            { icon: <HeartHandshake />, title: "Suporte Pós-Tattoo", desc: "Guia de cicatrização." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="p-2 border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">{item.icon}</div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                <p className="text-gray-500 text-[10px] leading-relaxed uppercase">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="inline-flex items-center gap-4 py-3 px-6 border border-brand-gold/20 bg-brand-dark/50 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-black font-bold text-lg">G</div>
            <div><p className="text-white text-[10px] font-bold uppercase tracking-widest">Avaliado no Google</p></div>
          </div>
          <a href="#" className="text-[10px] text-gray-500 uppercase tracking-widest font-bold hover:text-white transition-colors flex items-center gap-2">Ver todas <ChevronRight size={14} className="text-brand-gold" /></a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <div className="relative group border border-gray-800 shadow-2xl overflow-hidden bg-brand-dark">
          <img src="https://i.postimg.cc/wjWgW2nP/9bec1659-51bd-469f-a129-915662b7554f.jpg" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Experience" />
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-gold/50"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-gold/50"></div>
        </div>
      </div>
    </div>
  </section>
);

const StylesList = () => (
  <section id="servicos" className="py-24 bg-brand-dark scroll-mt-24">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="Especialidades" title="NOSSOS ESTILOS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TATTOO_STYLES.map((style) => (
          <div key={style.id} className="group relative h-[500px] overflow-hidden border border-gray-800">
            <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: `url(${style.image})` }}></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8"><h3 className="text-3xl font-serif text-white uppercase tracking-[0.2em]">{style.title}</h3></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentImages = isExpanded ? PORTFOLIO_IMAGES : PORTFOLIO_IMAGES.slice(0, 9);
  return (
    <section id="portfolio" className="py-24 bg-brand-black scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Portfólio" title="Galeria de Trabalhos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((img, idx) => (
            <div key={idx} className="relative aspect-[4/5] border border-gray-800 overflow-hidden group">
              <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button onClick={() => setIsExpanded(!isExpanded)} className="px-8 py-4 border border-brand-gold text-brand-gold uppercase tracking-widest font-bold transition-all hover:bg-brand-gold hover:text-black">
            {isExpanded ? "Mostrar Menos" : "Ver Mais Trabalhos"}
          </button>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => (
  <section id="avaliacoes" className="py-24 bg-brand-dark scroll-mt-24">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="Depoimentos" title="O Que Dizem Nossos Clientes" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review) => (
          <div key={review.id} className="bg-brand-black p-8 border border-gray-800 flex flex-col h-full group">
            <div className="flex text-brand-gold mb-4">{[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="#E5E5E5" strokeWidth={0} />)}</div>
            <p className="text-gray-400 italic mb-8 flex-grow text-sm">"{review.text}"</p>
            {review.image && (
              <div className="mb-6 overflow-hidden border border-white/10 max-w-[220px] mx-auto">
                <img src={review.image} alt={`Avaliação de ${review.name}`} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            )}
            <h4 className="text-white font-serif text-lg">{review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactCTA = () => (
  <section id="agendamento" className="py-24 bg-brand-black relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-30"></div>
    <div className="container mx-auto px-4 text-center z-10 relative">
      <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 uppercase tracking-tighter">FAÇA SEU ORÇAMENTO</h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg font-light leading-relaxed">
        Especialista em todos os estilos de tatuagem. Ambiente exclusivo com <strong className="text-white">extrema responsabilidade e qualidade</strong>.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Button href={`https://wa.me/${COMPANY_INFO.whatsapp}`}>Solicitar Agora</Button>
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Atendimento personalizado via WhatsApp</span>
      </div>
    </div>
  </section>
);

const Location = () => (
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
          
          <div className="pt-8 border-t border-gray-900 space-y-5">
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
          <Navigation size={18} className="group-hover:translate-x-1 transition-transform" /> 
          TRAÇAR ROTA MAPS OU WAZE
        </a>
      </div>
      <div className="w-full lg:w-2/3 h-[400px] lg:h-full bg-gray-900 border-l border-gray-900">
        <iframe src={COMPANY_INFO.googleMapsEmbed} width="100%" height="100%" style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} allowFullScreen={true} loading="lazy" title="Mapa Localização"></iframe>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <h3 className="font-serif text-3xl font-bold text-white tracking-wider mb-4">JUNINHO<span className="text-brand-gold">TATTOO</span></h3>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Arte, segurança e tradição transformando histórias desde 2012.</p>
      </div>
      <div>
        <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Links Rápidos</h4>
        <ul className="space-y-3 uppercase tracking-wider text-[10px] text-gray-400">
          {NAV_LINKS.map((link) => <li key={link.label}><a href={link.href} className="hover:text-white transition-colors">{link.label}</a></li>)}
        </ul>
      </div>
      <div>
        <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Contato</h4>
        <div className="flex items-start gap-3 text-sm text-gray-400">
          <Phone size={16} className="text-gray-600 mt-1" />
          <div className="flex flex-col">
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="hover:text-white transition-colors">{COMPANY_INFO.whatsappDisplay}</a>
            <span className="text-[10px] uppercase text-gray-600">WhatsApp & Ligações</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Studio</h4>
        <p className="text-gray-400 text-sm">{COMPANY_INFO.address}</p>
      </div>
    </div>
    <div className="border-t border-gray-900 pt-8 text-center md:text-left text-gray-700 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between container mx-auto px-4">
      <span>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</span>
      <span className="mt-2 md:mt-0">Developed by AI Studio</span>
    </div>
  </footer>
);

// --- APP ENTRY ---
const App = () => (
  <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-gold selection:text-black">
    <Navbar />
    <main>
      <Hero />
      <Artist />
      <Experience />
      <StylesList />
      <Portfolio />
      <Reviews />
      <ContactCTA />
      <Location />
    </main>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><App /></React.StrictMode>);