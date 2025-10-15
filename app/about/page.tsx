'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VisionMission from '@/components/vision-mission';
import CredibilityBanner from '@/components/CredibilityBanner';

export default function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 100) {
        header?.classList.add('scrolled');
        setScrolled(true);
      } else {
        header?.classList.remove('scrolled');
        setScrolled(false);
      }
    };

    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const valueCards = document.querySelectorAll('.value-card');
    const teamMembers = document.querySelectorAll('.team-member');
    const legacyCards = document.querySelectorAll('.legacy-card');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      fadeInObserver.observe(element);
    });

    // Scroll-triggered animations for values, team, and legacy cards
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);
        }
      });
    }, { threshold: 0.3 });
    
    valueCards.forEach(card => {
      scrollObserver.observe(card);
    });
    
    teamMembers.forEach(member => {
      scrollObserver.observe(member);
    });
    
    legacyCards.forEach(card => {
      scrollObserver.observe(card);
    });

    // Animate timeline progress
    const timelineProgress = () => {
      const progressFill = document.querySelector('.progress-fill');
      const timelineLine = document.querySelector('.timeline-line');
      const legacySection = document.querySelector('.legacy-section');
      
      if (!legacySection || !progressFill || !timelineLine) return;

      const sectionTop = legacySection.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = legacySection.clientHeight;
      const windowHeight = window.innerHeight;
      
      const updateProgress = () => {
        const scrollPosition = window.scrollY;
        const sectionScrollPosition = scrollPosition - sectionTop;
        
        if (scrollPosition > sectionTop - windowHeight / 2 && 
            scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
          
          const progress = (sectionScrollPosition + windowHeight / 2) / (sectionHeight);
          const progressPercentage = Math.min(Math.max(progress, 0), 1) * 100;
          
          (progressFill as HTMLElement).style.width = `${progressPercentage}%`;
          (timelineLine as HTMLElement).style.transform = `scaleY(${progressPercentage / 100})`;
        }
      };

      window.addEventListener('scroll', updateProgress);
      return () => window.removeEventListener('scroll', updateProgress);
    };

    // Animate numbers in legacy stats
    const animateNumbers = () => {
      const statNumbers = document.querySelectorAll('.stat-number');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const target = parseFloat(element.getAttribute('data-target') || '0');
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                if (target === 4.9) {
                  element.textContent = '4.9';
                } else {
                  element.textContent = Math.round(target).toString();
                }
                clearInterval(timer);
              } else {
                if (target === 4.9) {
                  element.textContent = current.toFixed(1);
                } else {
                  element.textContent = Math.floor(current).toString();
                }
              }
            }, 16);
            
            observer.unobserve(element);
          }
        });
      }, { threshold: 0.5 });
      
      statNumbers.forEach(number => {
        observer.observe(number);
      });
    };

    window.addEventListener('scroll', handleScroll);
    const progressCleanup = timelineProgress();
    animateNumbers();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      progressCleanup?.();
      fadeInObserver.disconnect();
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* About Hero Banner */}
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

            <section className="py-20 bg-gradient-to-b from-[#181818] to-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-in rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Aloy Restaurant Interior"
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="fade-in delay-1">
              <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F2E8] mb-6">Our Story</h2>
              <p className="text-[#B0B0B0] mb-6 leading-relaxed">
                Placed between the whispering waters of the Mahaweli River and the emerald folds of the
Hanthana range, Aloy Restaurant is more than a place to dine—it’s a sanctuary of taste,
tradition, and tranquility.
              </p>
              <p className="text-[#B0B0B0] mb-8 leading-relaxed">
                Founded in 2012, Aloy was born from a dream to share the vibrant heart of Sri Lankan cuisine
with the world. Each dish is a tribute to heritage, crafted with spices that tell stories and
ingredients that echo the island’s bounty. From the fiery warmth of a traditional curry to the
delicate sweetness of tropical fruit, every bite invites guests on a journey through culture and
memory.
              </p>
               <p className="text-[#B0B0B0] mb-8 leading-relaxed">
                The restaurant itself is a canvas—Peradeniya Road its frame, Kandy its muse. As the sun dips
behind the hills, casting golden light across the valley, guests sip on handcrafted mocktails and
fresh juices, their senses awakened by the symphony of flavors and the serenity of the view.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B6935B]/10 flex items-center justify-center text-[#B6935B] text-lg">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <div>
                    <h4 className="font-playfair text-[#F5F2E8] mb-1">Authentic Cuisine</h4>
                    <p className="text-[#B0B0B0] text-sm">Traditional Sri Lankan recipes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B6935B]/10 flex items-center justify-center text-[#B6935B] text-lg">
                    <i className="fas fa-mountain"></i>
                  </div>
                  <div>
                    <h4 className="font-playfair text-[#F5F2E8] mb-1">Scenic Views</h4>
                    <p className="text-[#B0B0B0] text-sm">Breathtaking river and mountain views</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B6935B]/10 flex items-center justify-center text-[#B6935B] text-lg">
                    <i className="fas fa-award"></i>
                  </div>
                  <div>
                    <h4 className="font-playfair text-[#F5F2E8] mb-1">Award Winning</h4>
                    <p className="text-[#B0B0B0] text-sm">Recognized for excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="chairman-section py-20 bg-gradient-to-b from-background to-[#1a1a1a]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="chairman-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="chairman-image fade-in rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Chairman"
                className="w-full h-auto"
              />
            </div>
            <div className="chairman-text fade-in delay-1 p-8 lg:p-10">
              <div className="section-header text-left mb-8">
                <p className="section-subtitle text-[#B6935B] text-xs uppercase tracking-[2px] mb-2">From the Chairman</p>
                <h2 className="section-title font-playfair text-3xl md:text-4xl text-[#F5F2E8] mb-4">A Message of Welcome</h2>
              </div>
              <p className="text-muted-foreground mb-5 leading-relaxed">
               Welcome to Aloy Restaurant — where tradition meets innovation, and every dish tells a story.
              </p>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Our philosophy is simple: to create unforgettable experiences through exceptional cuisine, warm hospitality, 
                and the breathtaking beauty of our riverside location. Every ingredient tells a story, every dish carries 
                tradition, and every guest becomes part of our family.As Chairman, I take immense pride in the journey we’ve embarked upon. Aloy was born from a simple idea: to celebrate the rich culinary heritage of our region while embracing the creativity and bold flavors of modern cuisine. Our team is passionate about crafting unforgettable dining experiences, whether you're joining us for a casual meal or a special occasion.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe food is more than sustenance — it’s a bridge between cultures, a spark for conversation, and a source of joy. At Aloy, we source the finest ingredients, honor time-tested recipes, and constantly explore new ways to delight our guests.
              </p>
               <p className="text-muted-foreground mb-8 leading-relaxed">
               Thank you for being part of our story. Your continued support inspires us to raise the bar every day. We look forward to welcoming you with warmth, flavor, and the unmistakable spirit of Aloy.
              </p>
               <p className="text-muted-foreground mb-8 leading-relaxed">
                Warm regards, 
              </p>
              <div className="chairman-signature pt-6 border-t-2 border-[#B6935B]">
                <div className="signature-name font-playfair text-xl text-[#B6935B] mb-1">Mr. M. P. A. Pillai</div>
                <div className="signature-title text-muted-foreground text-sm">Founder & Chairman, Aloy Restaurant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Aloy Legacy Section */}
      <section className="legacy-section py-20 bg-gradient-to-b from-[#1a1a1a] to-background relative overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="section-header text-center mb-16">
            <p className="section-subtitle text-[#B6935B] text-xs uppercase tracking-[2px] mb-2">Our Journey Through Time</p>
            <h2 className="section-title font-playfair text-3xl md:text-4xl text-[#F5F2E8] mb-4">The Aloy Legacy</h2>
            <p className="section-description text-muted-foreground max-w-[600px] mx-auto">
              A decade of culinary excellence, innovation, and unforgettable memories
            </p>
          </div>
          
          {/* Timeline */}
          <div className="legacy-timeline relative max-w-[1000px] mx-auto py-12">
            <div className="timeline-connector absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#B6935B]/30 transform -translate-x-1/2">
              <div className="timeline-line absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#B6935B] to-[#E3C785] scale-y-0 origin-top transition-transform duration-2000"></div>
            </div>
            
            {/* Legacy Cards */}
            {[
              {
                year: "2012",
                title: "The Humble Beginning",
                description: "Aloy Restaurant opened with 10 tables and a big dream - to blend Sri Lankan warmth with world-class dining. Our riverside location quickly became the talk of Kandy.",
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
                stats: [
                  { icon: "utensils", number: 10, label: "Tables" },
                  { icon: "user-chef", number: 3, label: "Chefs" },
                  { icon: "star", number: 1, label: "Dream" }
                ]
              },
              {
                year: "2015",
                title: "Recognition & Growth",
                description: "Earning the TripAdvisor Certificate of Excellence marked our commitment to quality. We expanded while preserving the intimate dining experience our guests loved.",
                image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                stats: [
                  { icon: "chair", number: 50, label: "Tables" },
                  { icon: "smile", number: 95, label: "Satisfaction" },
                  { icon: "trophy", number: 5, label: "Awards" }
                ]
              },
              {
                year: "2018",
                title: "Culinary Revolution",
                description: "We introduced signature tasting menus and the chef's table experience, blending tradition with innovation. Local sourcing became our culinary philosophy.",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                stats: [
                  { icon: "book-open", number: 12, label: "New Menus" },
                  { icon: "leaf", number: 100, label: "Local Produce" },
                  { icon: "lightbulb", number: 8, label: "Innovations" }
                ]
              },
              {
                year: "2025",
                title: "Modern Excellence",
                description: "Today, we stand as Kandy's premier dining destination, celebrated for sustainability and community engagement while creating unforgettable guest experiences.",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                stats: [
                  { icon: "users", number: 10000, label: "Guests" },
                  { icon: "star", number: 4.9, label: "Rating" },
                  { icon: "award", number: 25, label: "Awards" }
                ]
              }
            ].map((card, index) => (
              <div key={index} className={`legacy-card flex items-center mb-20 opacity-0 translate-y-8 transition-all duration-800 ease-out ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-year={card.year}>
                <div className="card-content flex w-full bg-white/5 rounded-2xl overflow-hidden border border-white/10 transition-all duration-400 hover:border-[#B6935B] hover:-translate-y-1 hover:shadow-2xl min-h-[400px]">
                  <div className="card-image flex-1 relative overflow-hidden min-h-[400px]">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="card-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                    <div className="year-badge absolute top-5 left-5 bg-gradient-to-br from-[#B6935B] to-[#E3C785] text-[#111] px-5 py-2 rounded-full font-bold text-sm shadow-lg z-10">
                      {card.year}
                    </div>
                  </div>
                  <div className="card-text flex-1 p-10 flex flex-col justify-center">
                    <h3 className="font-playfair text-2xl text-[#F5F2E8] mb-4">{card.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{card.description}</p>
                    <div className="legacy-stats flex gap-5 pt-5 border-t border-white/10">
                      {card.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="stat text-center flex-1">
                          <div className="stat-icon text-[#B6935B] text-xl mb-2">
                            {/* Icons would be implemented here */}
                          </div>
                          <span className="stat-number block text-2xl font-bold text-[#B6935B] mb-1" data-target={stat.number}>
                            0
                          </span>
                          <span className="stat-label text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="timeline-dot absolute left-1/2 w-5 h-5 bg-gradient-to-br from-[#B6935B] to-[#E3C785] rounded-full transform -translate-x-1/2 shadow-[0_0_0_8px_rgba(182,147,91,0.2)] z-10"></div>
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="timeline-progress max-w-[800px] mx-auto mt-10">
            <div className="progress-bar h-1 bg-white/10 rounded mb-5 overflow-hidden">
              <div className="progress-fill h-full bg-gradient-to-r from-[#B6935B] to-[#E3C785] w-0 transition-all duration-1500 ease-out"></div>
            </div>
            <div className="progress-years flex justify-between text-muted-foreground font-semibold">
              <span>2012</span>
              <span>2015</span>
              <span>2018</span>
              <span>2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <VisionMission/>
      <CredibilityBanner/>
      <Footer />
    </main>
  );
}