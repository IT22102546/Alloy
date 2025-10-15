// components/sections/menu-experience.tsx
'use client';

import { useEffect, useRef } from 'react';

const menuCards = [
  {
    topic: 'Buffet & À la Carte',
    description: 'Western and Sri Lankan dishes crafted to suit every taste.',
    bulletPoints: [
      'Offers vegan and vegetarian-friendly meal options.',
      'Choose from buffet spreads or à la carte selections.'
    ],
    image: './assets/BuffetandAlaCarte.jpg'
  },
  {
    topic: 'Signature Dishes',
    description: 'Chef\'s specialties blending local flavors with global inspiration.',
    bulletPoints: [
      'Includes juicy burgers, crispy chips, and Sri Lankan specialties.',
      'Crafted with fresh, seasonal ingredients for rich, balanced flavor.'
    ],
    image: './assets/SignatureDishes.jpg'
  },
  {
    topic: 'Dessert',
    description: 'Sweet finales inspired by Sri Lankan and Western dessert traditions.',
    bulletPoints: [
      'Enjoy traditional Sri Lankan sweets and tropical fruit platters.',
      'A light and refreshing finish to your meal.'
    ],
    image: './assets/Sig1.jpg'
  }
];

export default function MenuExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fadeElements = entry.target.querySelectorAll('.fade-in');
            fadeElements.forEach((el) => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="menu" className="py-20 bg-gradient-to-b from-[#181818] to-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
          <p className="fade-in text-base text-gold uppercase tracking-[2px] mb-[10px]">
            Our Menu Selection
          </p>
          <h2 className="fade-in font-playfair text-[42px] mb-5 text-cream">
            Buffet • Signature • Dessert
          </h2>
          <p className="fade-in text-cream/80 max-w-[600px] mx-auto">
            Discover our diverse culinary offerings that celebrate both local and international flavors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {menuCards.map((card, index) => (
            <div
              key={index}
              className={`fade-in ${index === 1 ? 'delay-1' : index === 2 ? 'delay-2' : ''} bg-gradient-to-b from-white/[0.02] to-white/[0.01] rounded-2xl overflow-hidden transition-all duration-400 border border-white/5 relative h-[450px] hover:-translate-y-[15px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-gold/30 group`}
            >
              <div className="h-[200px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.topic}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 relative z-[2]">
                <span className="inline-block bg-gold text-[#111] px-3 py-[6px] rounded-[20px] text-xs font-semibold mb-[15px]">
                  {card.topic}
                </span>
                <p className="text-cream/80 mb-5 leading-relaxed">{card.description}</p>
                <ul className="list-none mb-5">
                  {card.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 mb-3 text-cream/80 text-sm">
                      <svg className="w-3 h-3 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}