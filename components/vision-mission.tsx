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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-[#B6935B] uppercase tracking-[3px] text-sm font-medium mb-4 fade-in">
            <div className="w-12 h-px bg-[#B6935B]/50"></div>
            Our Foundation
            <div className="w-12 h-px bg-[#B6935B]/50"></div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F5F2E8] mb-6 fade-in">
            Vision & Mission
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto fade-in delay-1">
            Guiding principles that shape our commitment to exceptional dining experiences and authentic Sri Lankan hospitality
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Vision Card */}
          <div className="fade-in group">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 border border-[#B6935B]/20 hover:border-[#B6935B]/40 transition-all duration-500 h-full relative overflow-hidden">
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B6935B] to-[#E3C785]"></div>
              
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B6935B] to-[#E3C785] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl md:text-3xl text-[#F5F2E8] mb-3">Our Vision</h3>
                  <div className="w-16 h-0.5 bg-[#B6935B]/30 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[#F5F2E8] text-lg leading-relaxed font-light">
                  To establish Aloy Restaurant as the premier culinary destination in Sri Lanka, renowned for seamlessly blending authentic local flavors with international sophistication.
                </p>
                <div className="flex items-center gap-2 text-[#B6935B] text-sm font-medium">
                  <div className="w-2 h-2 bg-[#B6935B] rounded-full"></div>
                  Setting the standard for excellence
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="fade-in delay-1 group">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full relative overflow-hidden">
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 to-white/10"></div>
              
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center shadow-lg border border-white/10">
                    <svg className="w-7 h-7 text-[#B6935B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl md:text-3xl text-[#F5F2E8] mb-3">Our Mission</h3>
                  <div className="w-16 h-0.5 bg-white/20 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-[#F5F2E8]/90 text-lg leading-relaxed font-light">
                  To deliver unforgettable dining experiences through exceptional service, authentic Sri Lankan cuisine, and unwavering commitment to quality.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Celebrate Sri Lankan culinary heritage with modern sophistication",
                    "Provide personalized service that exceeds expectations",
                    "Maintain the highest standards of quality and consistency",
                    "Foster sustainable practices and support local communities"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                      <div className="w-5 h-5 bg-[#B6935B]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-[#B6935B] rounded-full"></div>
                      </div>
                      <span className="text-[#B0B0B0] font-light leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="fade-in delay-2">
          <div className="text-center mb-14">
            <h3 className="font-playfair text-3xl md:text-4xl text-[#F5F2E8] mb-6">
              Core Values
            </h3>
            <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
              The fundamental beliefs that guide our actions and define our restaurant's character
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Excellence', 
                description: 'Uncompromising commitment to quality in every detail',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )
              },
              { 
                title: 'Authenticity', 
                description: 'Genuine Sri Lankan flavors and heartfelt hospitality',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              { 
                title: 'Integrity', 
                description: 'Ethical practices and transparent operations',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: 'Innovation', 
                description: 'Continual evolution while honoring tradition',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-white/[0.02] to-transparent rounded-xl p-6 border border-white/5 hover:border-[#B6935B]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B6935B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B6935B] to-[#E3C785] rounded-lg flex items-center justify-center mb-4 text-[#111] group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </div>
                  <h4 className="font-playfair text-xl mb-3 text-[#F5F2E8] group-hover:text-[#B6935B] transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-[#B0B0B0] text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="fade-in delay-3 mt-16 text-center">
          <div className="bg-gradient-to-r from-[#B6935B]/10 to-transparent rounded-2xl p-8 border border-[#B6935B]/20">
            <h4 className="font-playfair text-2xl text-[#F5F2E8] mb-4">
              Experience Our Commitment
            </h4>
            <p className="text-[#B0B0B0] mb-6 max-w-2xl mx-auto">
              Visit Aloy Restaurant and discover how our vision, mission, and values come together to create exceptional dining moments.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[#B6935B] text-[#111] px-8 py-4 rounded-xl font-semibold hover:bg-[#E3C785] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span>Reserve Your Table</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}