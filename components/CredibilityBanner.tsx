// components/CredibilityBanner.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function CredibilityBanner() {
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

  const credibilityItems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      number: "10+",
      label: "Years of Excellence",
      description: "Trusted since 2012"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      number: "4.9/5",
      label: "Google Rating",
      description: "500+ Reviews"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      number: "98%",
      label: "Customer Satisfaction",
      description: "Repeat Guests"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
        </svg>
      ),
      number: "25+",
      label: "Awards & Recognition",
      description: "Industry Excellence"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#181818] to-[#2a1f15] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B6935B' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#B6935B] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#E3C785] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#F5F2E8] rounded-full filter blur-3xl opacity-5 animate-pulse delay-500"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-[#B6935B]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#B6935B]/30 mb-4">
            <svg className="w-4 h-4 text-[#B6935B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[#B6935B] text-sm font-semibold">Trusted & Verified</span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#F5F2E8] mb-6">
            Why Guests{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6935B] to-[#E3C785]">
              Trust Aloy
            </span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Our commitment to excellence has earned us recognition and trust from thousands of satisfied guests worldwide
          </p>
        </div>

        {/* Main Credibility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credibilityItems.map((item, index) => (
            <div
              key={index}
              className={`fade-in delay-${index} group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-[#B6935B]/50 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden`}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B6935B]/0 to-[#B6935B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#B6935B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B6935B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B6935B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B6935B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#B6935B] to-[#E3C785] rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#111] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {item.icon}
                </div>

                {/* Number */}
                <div className="font-playfair text-3xl font-bold text-[#F5F2E8] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B6935B] group-hover:to-[#E3C785] transition-all duration-500">
                  {item.number}
                </div>

                {/* Label */}
                <h3 className="font-semibold text-[#F5F2E8] mb-2 text-lg">{item.label}</h3>

                {/* Description */}
                <p className="text-[#B0B0B0] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="fade-in delay-3 bg-gradient-to-r from-[#B6935B]/10 to-transparent rounded-2xl p-8 border border-[#B6935B]/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-playfair text-2xl text-[#F5F2E8] mb-3">
                Certified Excellence
              </h3>
              <p className="text-[#B0B0B0] max-w-md">
                Recognized by leading travel and hospitality authorities for our commitment to quality and service
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "TripAdvisor", label: "Certificate of Excellence" },
                { name: "Google", label: "Top Rated Business" },
                { name: "Lonely Planet", label: "Recommended" },
                { name: "Sri Lanka Tourism", label: "Approved" }
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10 hover:border-[#B6935B]/30 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#B6935B] to-[#E3C785] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#F5F2E8] text-sm">{badge.name}</div>
                    <div className="text-[#B0B0B0] text-xs">{badge.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="fade-in delay-4 text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-left">
              <h4 className="font-playfair text-xl text-[#F5F2E8] mb-2">
                Experience the Aloy Difference
              </h4>
              <p className="text-[#B0B0B0] text-sm">
                Join thousands of satisfied guests who have made Aloy their preferred dining destination
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/contact#reservations"
                className="bg-[#B6935B] text-[#111] px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:bg-[#E3C785] hover:-translate-y-1 hover:shadow-xl flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reserve Now
              </a>
              <a
                href="https://www.google.com/search?q=aloy+restaurant+kandy&rlz=1C1GCEU_enLK1120LK1121&oq=aloy+res&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYOTIGCAMQRRg7MgkIBBAAGAoYgAQyCQgFEAAYChiABDIJCAYQABgKGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABDIJCAkQABgKGIAE0gEJNTI4M2owajE1qAIIsAIB8QUMTLMqY3hWk_EFDEyzKmN4VpM&sourceid=chrome&ie=UTF-8#lrd="
                className="border border-[#B6935B] text-[#B6935B] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#B6935B] hover:text-[#111] flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Read Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}