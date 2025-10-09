// components/sections/vision-mission.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function VisionMission() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#181818]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
          <p className="fade-in text-base text-gold uppercase tracking-[2px] mb-[10px]">
            Our Foundation
          </p>
          <h2 className="fade-in font-playfair text-[42px] mb-5 text-cream">
            Our Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
          {/* Vision */}
          <div className="fade-in bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-8 border border-gold/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-gold">Vision Statement</h3>
            </div>
            <p className="text-cream text-lg leading-relaxed">
              To be Sri Lanka's most cherished culinary destination for international travelers, offering Western cuisine and authentic local flavors with world-class hospitality.
            </p>
          </div>

          {/* Mission */}
          <div className="fade-in delay-1 bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-cream">Mission Statement</h3>
            </div>
            <p className="text-cream/80 mb-4">
              Aloy Restaurant (Pvt) Ltd is committed to delivering exceptional dining experiences to global guests by:
            </p>
            <ul className="list-none space-y-3">
              {[
                "Showcasing Sri Lanka's rich culinary heritage with passion and authenticity",
                "Providing warm, personalized service in a welcoming atmosphere",
                "Upholding the highest standards of quality, hygiene, and sustainability"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-cream/80">
                  <svg className="w-4 h-4 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="fade-in delay-2 mt-16">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-3xl mb-4 text-cream">Our Core Values</h3>
            <p className="text-cream/80 max-w-2xl mx-auto">
              The principles that guide every aspect of our service and culinary experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                title: 'Hospitality First', 
                description: 'Every guest is treated with warmth, respect, and genuine care',
                icon: '❤️'
              },
              { 
                title: 'Authenticity', 
                description: 'We celebrate Sri Lankan culture through our cuisine and ambiance',
                icon: '🌺'
              },
              { 
                title: 'Excellence', 
                description: 'We strive for perfection in taste, service, and presentation',
                icon: '⭐'
              },
              { 
                title: 'Integrity', 
                description: 'We operate with honesty, transparency, and ethical practices',
                icon: '🤝'
              },
              { 
                title: 'Sustainability', 
                description: 'We support local producers and eco-friendly practices',
                icon: '🌱'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white/[0.02] to-transparent rounded-xl p-6 border border-white/5 text-center hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="font-playfair text-lg mb-3 text-cream">{value.title}</h4>
                <p className="text-cream/80 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}