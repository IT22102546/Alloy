// app/experiences/page.tsx
'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useEffect, useRef } from 'react';

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
      main: '/assets/Buf1.jpg',
      secondary1: '/assets/Buf2.jpg',
      secondary2: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      secondary3: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
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
      main: '/assets/Sig1.jpg',
      secondary1: '/assets/Sig2.jpg',
      secondary2: './assets/Sig3.jpg',
      secondary3: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80'
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
      secondary2: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      secondary3: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
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
      main: '/assets/Des1.jpg',
      secondary1: '/assets/Des2.jpg',
      secondary2: '/assets/Des3.jpg',
      secondary3: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80'
    }
  }
];

export default function ExperiencesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
      fadeInObserver.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      fadeElements.forEach(el => {
        fadeInObserver.unobserve(el);
      });
    };
  }, []);

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
    <div className="min-h-screen bg-[#181818] text-white">
      <Header/>

      {/* Hero Section */}
      <section className="experiences-hero min-h-[80vh] relative flex items-center justify-center text-center bg-gradient-to-r from-black/70 to-black/70 bg-cover bg-center" 
               style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/ExBanner.jpg)'}}>
        <div className="experiences-hero-content max-w-4xl px-5 fade-in">
          <div className="experiences-hero-subtitle text-[#B6935B] text-lg uppercase tracking-widest mb-6">Unforgettable Moments</div>
          <h1 className="experiences-hero-title font-playfair text-5xl md:text-6xl text-[#F5F2E8] mb-5 text-shadow-lg leading-tight">Curated Dining Experiences</h1>
          <p className="hero-description text-[#B0B0B0] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From intimate dinners to grand celebrations, discover our exclusive dining experiences designed to create lasting memories in the heart of Kandy.
          </p>
          <a href="#experiences" className="btn-primary bg-[#B6935B] text-black px-8 py-4 rounded-xl font-semibold border-none cursor-pointer transition-all duration-300 ease-in-out shadow-lg shadow-[#B6935B]/30 hover:bg-[#E3C785] hover:translate-y-[-3px] hover:shadow-xl hover:shadow-[#B6935B]/40 inline-block">
            Explore Experiences
          </a>
        </div>
      </section>

      {/* Experiences Grid */}
      <section ref={sectionRef} id="experiences" className="experiences-section py-20 bg-gradient-to-b from-[#1a1a1a] to-[#181818]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-header fade-in text-center mb-16">
            <div className="text-[#B6935B] text-sm uppercase tracking-[2px] mb-2">Our Offerings</div>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F2E8] mb-4">Signature Experiences</h2>
            <p className="text-[#B0B0B0] max-w-[600px] mx-auto text-lg">
              Each experience is carefully crafted to showcase the best of Sri Lankan hospitality, 
              cuisine, and our breathtaking surroundings.
            </p>
          </div>

          <div className="space-y-32">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`experience-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                } ${index > 0 ? 'delay-1' : ''}`}
              >
                {/* Content Side */}
                <div className={`experience-content space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="experience-category text-[#B6935B] text-sm uppercase tracking-wider font-semibold">
                    {experience.category}
                  </div>
                  <h3 className="experience-title font-playfair text-3xl md:text-4xl text-[#F5F2E8]">
                    {experience.title}
                  </h3>
                  <p className="experience-description text-[#B0B0B0] text-lg leading-relaxed">
                    {experience.description}
                  </p>
                  <ul className="experience-features space-y-3">
                    {experience.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-[#B0B0B0]">
                        <i className="fas fa-check text-[#B6935B] mt-1 flex-shrink-0"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Images Side - 2x2 Grid */}
                <div className={`experience-images grid grid-cols-2 grid-rows-2 gap-4 h-[500px] ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  {/* Top Left - Main Image */}
                  <div className="image-main col-span-1 row-span-2 rounded-2xl overflow-hidden">
                    <img 
                      src={experience.images.main} 
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  {/* Top Right - Secondary 1 */}
                  <div className="image-secondary rounded-2xl overflow-hidden">
                    <img 
                      src={experience.images.secondary1} 
                      alt={`${experience.title} - Detail 1`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  {/* Bottom Right - Secondary 2 */}
                  <div className="image-secondary rounded-2xl overflow-hidden">
                    <img 
                      src={experience.images.secondary2} 
                      alt={`${experience.title} - Detail 2`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  {/* Bottom Left - Secondary 3 */}
                  <div className="image-secondary rounded-2xl overflow-hidden">
                    <img 
                      src={experience.images.secondary3} 
                      alt={`${experience.title} - Detail 3`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}