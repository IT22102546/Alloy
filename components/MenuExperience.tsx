// components/sections/menu-experience.tsx
'use client';

import { useEffect, useRef } from 'react';

const experiences = [
  {
    badge: 'À la carte',
    title: 'Personalized Dining',
    description: 'Personalized dining, every plate a story. Order à la carte dishes prepared fresh to your preference.',
    features: [
      'Customizable menu options',
      'Fresh, seasonal ingredients',
      'Flexible dining experience'
    ],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    badge: 'Set Menu',
    title: 'Curated Courses',
    description: 'Elegant courses, curated for your occasion — perfect for group dining and celebrations.',
    features: [
      'Pre-set multi-course menu',
      'Perfect for special occasions',
      'Wine pairing available'
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    badge: 'Fine Dining',
    title: 'Luxury Redefined',
    description: 'Luxury redefined in the heart of Kandy — tasting menus, wine pairings, and an elevated ambience.',
    features: [
      'Exclusive tasting menu',
      'Premium wine selection',
      'Personalized service'
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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
            Our Dining Experiences
          </p>
          <h2 className="fade-in font-playfair text-[42px] mb-5 text-cream">
            À la carte • Set Menu • Fine Dining
          </h2>
          <p className="fade-in text-cream/80 max-w-[600px] mx-auto">
            Choose an experience. Each menu tells a different story of culinary excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`fade-in ${index === 1 ? 'delay-1' : index === 2 ? 'delay-2' : ''} bg-gradient-to-b from-white/[0.02] to-white/[0.01] rounded-2xl overflow-hidden transition-all duration-400 border border-white/5 relative h-[450px] hover:-translate-y-[15px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-gold/30 group`}
            >
              <div className="h-[200px] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 relative z-[2]">
                <span className="inline-block bg-gold text-[#111] px-3 py-[6px] rounded-[20px] text-xs font-semibold mb-[15px]">
                  {exp.badge}
                </span>
                <h3 className="font-playfair text-2xl mb-3 text-cream">{exp.title}</h3>
                <p className="text-cream/80 mb-5">{exp.description}</p>
                <ul className="list-none mb-5">
                  {exp.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 mb-2 text-cream/80 text-sm">
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
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