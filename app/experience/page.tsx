'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const experiences = [
  {
    category: 'Exclusive Dining',
    title: 'Exclusive Buffet Experience',
    description: 'Enjoy a lively buffet with fresh Western and Sri Lankan dishes. Perfect for groups, it blends variety, flavor, and ambiance for a memorable dining experience.',
    features: [
      'Private 30-guest dinner reservations available.',
      'Freshly prepared dishes to satisfy every palate.',
      'Private 30-guest picnic lunch reservations available'
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      secondary1: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      secondary2: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  },
  {
    category: 'Signature Offerings',
    title: 'Signature Dishes & Specialties',
    description: 'Savor our chef\'s curated selection of Western and Sri Lankan buffet specialties. Each dish is crafted with seasonal ingredients, offering rich, balanced flavors that delight every guest.',
    features: [
      'Includes classic Western dishes and authentic Sri Lankan favorites',
      'Seasonal ingredients ensure fresh, vibrant flavors',
      'Perfect for sampling a variety in one visit'
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      secondary1: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      secondary2: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    }
  },
  {
    category: 'Beverage Experience',
    title: 'Mocktails & Beverages',
    description: 'Raise a glass to flavorful mocktails, chilled beers, and fresh fruit juices. Perfect for relaxing or socializing, our beverages enhance every meal and add a refreshing touch to your experience.',
    features: [
      'Creative mocktails, curated beers, and fresh fruit juices',
      'Refreshing drinks to complement every dish',
      'Served chilled for ultimate enjoyment'
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      secondary1: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80',
      secondary2: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  },
  {
    category: 'Sweet Finales',
    title: 'Sweet Endings & Light Bites',
    description: 'Indulge in our desserts and light bites, featuring tropical fruit platters, Western sweets, and traditional Sri Lankan treats. A delightful, refreshing finish perfect for sharing or enjoying solo.',
    features: [
      'A curated mix of Western desserts, Sri Lankan sweets, and fresh fruits.',
      'Light, refreshing, and satisfying meal finale.',
      'Perfect for sharing with friends or family.'
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      secondary1: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      secondary2: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    }
  }
];

export default function Experiences() {
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
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
     <section className="about-hero min-h-[70vh] relative flex items-center justify-center text-center bg-cover bg-center" 
               style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'}}>
        <div className="about-hero-content fade-in max-w-[800px] px-5">
          <div className="about-hero-subtitle text-[#B6935B] text-sm uppercase tracking-[3px] mb-2">Our Story</div>
          <h1 className="about-hero-quote font-playfair text-3xl md:text-5xl text-[#F5F2E8] mb-8 leading-tight text-shadow-lg">&ldquo;We Serve More Than Food
We Serve Memories&rdquo;</h1>
          <p className="section-description text-muted-foreground max-w-[600px] mx-auto">
           Where Flavors Meet the Mountains
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section ref={sectionRef} id="experiences" className="experiences-section py-20 bg-gradient-to-b from-[#1a1a1a] to-[#181818]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="section-header fade-in text-center mb-16">
            <div className="text-[#B6935B] text-sm uppercase tracking-[2px] mb-2">Our Offerings</div>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F2E8] mb-4">Signature Experiences</h2>
            <p className="text-[#B0B0B0] max-w-[600px] mx-auto text-lg">
              Each experience is carefully crafted to showcase the best of Sri Lankan hospitality, 
              cuisine, and our breathtaking surroundings.
            </p>
          </div>

          <div id="experience-grid">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`experience-grid ${index % 2 === 1 ? 'reverse' : ''} fade-in ${index > 0 ? 'delay-1' : ''} mb-20 last:mb-0`}
              >
                {/* Content Side */}
                <div className="experience-content">
                  <div className="experience-category">{experience.category}</div>
                  <h3 className="experience-title">{experience.title}</h3>
                  <p className="experience-description">{experience.description}</p>
                  <ul className="experience-features">
                    {experience.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                </div>

                {/* Images Side */}
                <div className="experience-images">
                  <div className="image-main rounded-2xl overflow-hidden">
                    <img 
                      src={experience.images.main} 
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="image-secondary rounded-2xl overflow-hidden">
                    <img 
                      src={experience.images.secondary1} 
                      alt={`${experience.title} - Detail 1`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="image-secondary rounded-2xl overflow-hidden">
                    <img 
                      src={experience.images.secondary2} 
                      alt={`${experience.title} - Detail 2`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}