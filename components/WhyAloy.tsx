// components/sections/why-aloy.tsx
'use client';

import { useEffect, useRef } from 'react';

const whyPoints = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Prime Location',
    description: 'Stunning views of the Mahaweli River and Hanthana mountains'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Authentic Cuisine',
    description: 'Traditional recipes with a modern twist using local ingredients'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Curated Experiences',
    description: 'From intimate dinners to grand celebrations, we create memorable moments'
  }
];

export default function WhyAloy() {
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
    <section
      ref={sectionRef}
      id="about"
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
          <div className="fade-in pr-0 lg:pr-[30px]">
            <p className="text-base text-gold uppercase tracking-[2px] mb-[10px]">Our Story</p>
            <h2 className="font-playfair text-[42px] mb-[30px] text-left">Why Aloy Restaurant</h2>
            <p className="mb-8 text-cream leading-relaxed">
             Aloy Restaurant in Kandy, Sri Lanka, offers more than just a meal—it’s a culinary experience rooted in tradition and scenic beauty Aloy Restaurant introduce Western to authentic Sri Lankan traditional cuisine to international food lovers seeking new taste sensations. Located  to boast a picturesque setting that enhances the dining experience. Guests often enjoy cocktails, mocktails, and fresh fruit juices while soaking in the serene views Nestled along Peradeniya Road, it overlooks the lush Hanthana Mountain range, offering diners a glamorous view of the world heritage city of Kandy.
            </p>
            <ul className="list-none mt-[30px]">
              {whyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-[15px] mb-5">
                  <div className="text-gold text-xl mt-[5px]">{point.icon}</div>
                  <div>
                    <h4 className="mb-[5px] text-cream font-semibold">{point.title}</h4>
                    <p className="text-cream/80">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#story" className="inline-block mt-6 bg-gold text-[#111] px-6 py-3 rounded-[10px] font-semibold transition-all duration-300 shadow-[0_4px_12px_rgba(182,147,91,0.3)] hover:bg-hover hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(182,147,91,0.4)]">
              Our Story
            </a>
          </div>
          <div className="fade-in delay-1 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
              alt="Aloy Restaurant interior"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}