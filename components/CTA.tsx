// components/sections/cta.tsx
'use client';

import { useEffect, useRef } from 'react';

const bgImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1572715376701-9858184c0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
];

export default function CTA() {
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
    <section ref={sectionRef} id="reservations" className="relative py-[100px] text-white text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-[2]">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0 brightness-[0.6] animate-background-cycle"
            style={{
              backgroundImage: `url(${img})`,
              animationDelay: `${index * 5}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 via-black/70 to-black/80 -z-[1]" />

      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="fade-in inline-flex items-center gap-2 bg-white/15 backdrop-blur-[10px] px-5 py-[10px] rounded-[20px] border border-white/30 mb-[30px] text-sm font-semibold text-gold">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>Prime Location</span>
        </div>

        <h2 className="fade-in font-playfair text-5xl lg:text-[3.5rem] mb-[30px] text-shadow-[2px_2px_8px_rgba(0,0,0,0.8)] leading-[1.2] text-cream">
          Visit Us Between the Mountains and the River
        </h2>

        <div className="fade-in flex justify-center gap-10 mb-10 flex-wrap">
          {[
            { icon: 'mountain', text: 'Hanthana Mountain Views' },
            { icon: 'water', text: 'Mahaweli Riverside' },
            { icon: 'utensils', text: 'Gourmet Dining' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-lg font-medium bg-white/10 backdrop-blur-[10px] px-5 py-3 rounded-[10px] border border-white/20">
              {item.icon === 'mountain' && (
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              )}
              {item.icon === 'water' && (
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              )}
              {item.icon === 'utensils' && (
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )}
              <span className="text-cream">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="fade-in text-xl max-w-[800px] mx-auto mb-[50px] leading-[1.6] text-cream text-shadow-[1px_1px_3px_rgba(0,0,0,0.8)]">
          Experience the perfect blend of nature and culinary artistry at Aloy Restaurant. Nestled between the majestic Hanthana mountains and the serene Mahaweli River, our location offers breathtaking views and an unforgettable dining atmosphere.
        </p>

        <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1000px] mx-auto mb-[50px]">
          {[
            { icon: 'sun', title: 'Sunset Dining', desc: 'Witness spectacular sunsets over the river with our exclusive riverside seating' },
            { icon: 'leaf', title: 'Garden Seating', desc: 'Al fresco dining in our beautifully landscaped gardens surrounded by nature' },
            { icon: 'wine', title: 'Riverside Bar', desc: 'Enjoy handcrafted cocktails and premium spirits by the water\'s edge' }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-[15px] p-[35px_25px] rounded-[20px] border border-white/25 transition-all duration-400 text-center relative overflow-hidden group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-accent-gradient before:scale-x-0 before:transition-transform before:duration-400 hover:-translate-y-2 hover:bg-white/20 hover:border-gold hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:before:scale-x-100"
            >
              <div className="w-20 h-20 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_8px_20px_rgba(182,147,91,0.3)]">
                {feature.icon === 'sun' && (
                  <svg className="w-9 h-9 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                {feature.icon === 'leaf' && (
                  <svg className="w-9 h-9 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                  </svg>
                )}
                {feature.icon === 'wine' && (
                  <svg className="w-9 h-9 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 7-3-7m1-13h6m-6 0V3m6 5V3m-3 15h.01" />
                  </svg>
                )}
              </div>
              <h4 className="font-playfair mb-[15px] text-2xl text-cream">{feature.title}</h4>
              <p className="text-cream leading-[1.6] opacity-90">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="fade-in flex gap-5 justify-center mb-[60px] flex-wrap">
          <a href="#reservations" className="bg-gold text-[#111] px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-[10px] text-lg shadow-[0_8px_20px_rgba(182,147,91,0.4)] hover:bg-hover hover:-translate-y-[3px] hover:shadow-[0_12px_25px_rgba(182,147,91,0.5)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Reserve Your Table
          </a>
          <a href="#contact" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-[10px] text-lg backdrop-blur-[10px] hover:bg-white hover:text-[#111] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(255,255,255,0.3)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Get Directions
          </a>
        </div>

        <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1200px] mx-auto">
          <div className="bg-white/15 backdrop-blur-[20px] rounded-[20px] p-[35px] border border-white/25 transition-all duration-400 text-left relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-accent-gradient before:scale-x-0 before:transition-transform before:duration-400 hover:-translate-y-2 hover:bg-white/20 hover:border-gold hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:before:scale-x-100">
            <div className="w-[70px] h-[70px] bg-accent-gradient rounded-[18px] flex items-center justify-center mb-[25px] shadow-[0_8px_20px_rgba(182,147,91,0.3)]">
              <svg className="w-7 h-7 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-playfair text-[1.6rem] mb-[25px] text-gold text-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]">
              Opening Hours
            </h3>
            <div className="flex flex-col gap-[18px]">
              {[
                { day: 'Monday - Thursday', time: '11:30 AM - 10:00 PM' },
                { day: 'Friday - Saturday', time: '11:30 AM - 11:00 PM' },
                { day: 'Sunday', time: '11:30 AM - 9:30 PM' }
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between items-center pb-[15px] border-b border-white/20">
                  <span className="font-semibold text-cream">{schedule.day}</span>
                  <span className="text-gold font-bold bg-gold/20 px-3 py-[6px] rounded-lg border border-gold/30">
                    {schedule.time}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-3 bg-gold/25 px-[18px] py-3 rounded-[10px] mt-[15px] text-sm border border-gold/40">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-cream">Last orders 30 minutes before closing</span>
              </div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-[20px] rounded-[20px] p-[35px] border border-white/25 transition-all duration-400 text-left relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-accent-gradient before:scale-x-0 before:transition-transform before:duration-400 hover:-translate-y-2 hover:bg-white/20 hover:border-gold hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:before:scale-x-100">
            <div className="w-[70px] h-[70px] bg-accent-gradient rounded-[18px] flex items-center justify-center mb-[25px] shadow-[0_8px_20px_rgba(182,147,91,0.3)]">
              <svg className="w-7 h-7 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-playfair text-[1.6rem] mb-[25px] text-gold text-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]">
              Location
            </h3>
            <div className="flex flex-col gap-[18px]">
              <p className="text-xl font-bold text-cream mb-2">Peradeniya Road, Kandy</p>
              <p className="text-cream leading-[1.5] opacity-90">
                Between Mahaweli River & Hanthana Mountains
              </p>
              <div className="flex gap-[10px] flex-wrap mt-[15px]">
                {['Riverside', 'Scenic Views', 'Easy Parking', 'Garden Seating'].map((tag, index) => (
                  <span key={index} className="bg-gold/25 text-gold px-[14px] py-[6px] rounded-[20px] text-[0.85rem] font-semibold border border-gold/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-[20px] rounded-[20px] p-[35px] border border-white/25 transition-all duration-400 text-left relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-accent-gradient before:scale-x-0 before:transition-transform before:duration-400 hover:-translate-y-2 hover:bg-white/20 hover:border-gold hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:before:scale-x-100">
            <div className="w-[70px] h-[70px] bg-accent-gradient rounded-[18px] flex items-center justify-center mb-[25px] shadow-[0_8px_20px_rgba(182,147,91,0.3)]">
              <svg className="w-7 h-7 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-playfair text-[1.6rem] mb-[25px] text-gold text-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]">
              Contact
            </h3>
            <div className="flex flex-col gap-[22px]">
              {[
                { icon: 'phone', type: 'Reservations', value: '+94 77 123 4567', href: 'tel:+94771234567' },
                { icon: 'email', type: 'Email', value: 'reservations@aloyrestaurant.com', href: 'mailto:reservations@aloyrestaurant.com' },
                { icon: 'chat', type: 'WhatsApp', value: '+94 77 123 4567', href: '#' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-[18px] py-[15px] border-b border-white/20 last:border-b-0">
                  {contact.icon === 'phone' && (
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )}
                  {contact.icon === 'email' && (
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {contact.icon === 'chat' && (
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  <div>
                    <span className="block text-sm text-cream mb-1 opacity-80">{contact.type}</span>
                    <a href={contact.href} className="text-cream font-bold transition-colors duration-300 text-lg hover:text-gold">
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}