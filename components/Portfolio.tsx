import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { Plus, Minus } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const allImageUrls = [
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

  const visibleCount = isExpanded ? allImageUrls.length : 9;
  const currentImages = allImageUrls.slice(0, visibleCount);

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
          <button onClick={() => setIsExpanded(!isExpanded)} className="px-8 py-4 border border-brand-gold text-brand-gold uppercase tracking-widest font-bold">
            {isExpanded ? "Mostrar Menos" : "Ver Mais Trabalhos"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;