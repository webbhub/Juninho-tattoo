import React from 'react';
import SectionTitle from './SectionTitle';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-brand-dark scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Depoimentos" title="O Que Dizem Nossos Clientes" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-brand-black p-8 border border-gray-800 flex flex-col h-full group">
              <div className="flex text-brand-gold mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="#E5E5E5" strokeWidth={0} />
                ))}
              </div>
              <p className="text-gray-400 italic mb-8 flex-grow text-sm">"{review.text}"</p>
              
              {review.image && (
                <div className="mb-6 overflow-hidden border border-white/10 rounded-sm max-w-[220px] mx-auto">
                  <img 
                    src={review.image} 
                    alt={`Avaliação de ${review.name}`} 
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              )}
              
              <h4 className="text-white font-serif text-lg">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;