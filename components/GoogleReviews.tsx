// components/GoogleReviews.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function GoogleReviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            const fadeElements = entry.target.querySelectorAll('.fade-in');
            fadeElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 200);
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
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#B6935B]/10 to-[#E3C785]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#B6935B]/5 to-[#E3C785]/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#B6935B]/5 to-transparent rounded-full blur-3xl animate-pulse-slow delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(182,147,91,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(182,147,91,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header with Enhanced Animations */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 text-[#B6935B] text-sm uppercase tracking-[3px] mb-4 px-4 py-2 border border-[#B6935B]/30 rounded-full bg-[#B6935B]/5 backdrop-blur-sm">
            <svg className="w-4 h-4 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Customer Reviews
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#F5F2E8] mb-6 leading-tight">
            Google <span className="text-[#B6935B]">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B6935B] to-[#E3C785] mx-auto mb-6 rounded-full"></div>
          <p className="text-[#B0B0B0] max-w-[700px] mx-auto text-lg md:text-xl leading-relaxed">
            Discover what our guests are saying about their exceptional experiences at Aloy Restaurant
          </p>
        </div>

        {/* Enhanced Iframe Container */}
        <div className="fade-in mb-16">
          <div className="relative group">
            {/* Loading State with Black Background */}
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black rounded-3xl border border-[#B6935B]/20 shadow-2xl z-20">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 border-4 border-[#B6935B]/20 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-[#B6935B] rounded-full animate-spin"></div>
                    <div className="absolute top-2 left-2 w-12 h-12 border-2 border-[#E3C785]/30 rounded-full animate-ping"></div>
                  </div>
                  <p className="text-[#B0B0B0] text-lg font-light">Loading authentic reviews...</p>
                  <p className="text-[#B6935B]/60 text-sm mt-2">Powered by Google Reviews</p>
                </div>
              </div>
            )}

            {/* Iframe with Black Background */}
            <div className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${iframeLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              {/* Iframe Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#B6935B]/20 to-[#E3C785]/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Main Iframe with Black Background */}
              <iframe
                src="https://widgets.sociablekit.com/google-reviews/iframe/25610990"
                width="100%"
                height="600"
                frameBorder="0"
                onLoad={() => {
                  setIframeLoaded(true);
                  // Add a small delay for smooth transition
                  setTimeout(() => setIframeLoaded(true), 100);
                }}
                className="w-full rounded-3xl border border-[#B6935B]/30 bg-black shadow-2xl transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#B6935B]/50 relative z-10"
                title="Aloy Restaurant Google Reviews"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none z-20"></div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#B6935B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-lg"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#B6935B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#B6935B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#B6935B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-lg"></div>
          </div>
        </div>

        {/* Enhanced CTA Section with Black Background */}
        <div className="fade-in delay-2 text-center">
          <div className="relative">
            {/* Black Background for CTA */}
            <div className="bg-black rounded-3xl border border-[#B6935B]/20 shadow-2xl overflow-hidden">
              {/* Gradient Accent Line */}
              <div className="h-1 bg-gradient-to-r from-[#B6935B] to-[#E3C785]"></div>
            
              <div className="relative z-10 p-8 md:p-12">
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B6935B] to-[#E3C785] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-6 h-6 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-3xl md:text-4xl text-[#F5F2E8] mb-4">
                    Share Your <span className="text-[#B6935B]">Experience</span>
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#B6935B] to-[#E3C785] rounded-full mb-6"></div>
                  <p className="text-[#B0B0B0] text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                    Have you dined with us recently? We'd love to hear about your memorable experience at Aloy Restaurant and share it with our community.
                  </p>
                </div>

                {/* Single Google Review Button */}
                <div className="flex justify-center">
                  <a
                    href="https://www.google.com/search?q=aloy+restaurant&sca_esv=504682394de47591&rlz=1C1GCEU_enLK1120LK1121&sxsrf=AE3TifPY4UdcK9HAEnFlVcWeXeuJ3G5SWA%3A1760636097916&ei=wSzxaMbcN-Wt4-EP09O0uAY&ved=0ahUKEwiGwcfJoKmQAxXl1jgGHdMpDWcQ4dUDCBA&uact=5&oq=aloy+restaurant&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2Fsb3kgcmVzdGF1cmFudDIQEC4YrwEYxwEYgAQYigUYJzIKECMYgAQYigUYJzIEECMYJzIKECMYgAQYigUYJzIMEAAYgAQYigUYQxgKMgUQABiABDIFEAAYgAQyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyHRAuGK8BGMcBGIAEGIoFGJcFGNwEGN4EGOAE2AEBSIwbULIUWL0YcAN4AZABAJgBvgKgAfkDqgEHMC4xLjAuMbgBA8gBAPgBAZgCBaAC3ATCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICDhAAGOQCGNYEGLAD2AEBwgIZEC4YgAQYigUYQxjHARivARjIAxiwA9gBAcICBxAjGLACGCfCAgcQABiABBgNmAMAiAYBkAYTugYGCAEQARgJkgcHMy4wLjEuMaAHkxWyBwUyLTEuMbgHnATCBwUzLTQuMcgHUQ&sclient=gws-wiz-serp#lrd=0x3ae368c1a7f465db:0x9303b519c0562657,3,,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-[#B6935B] to-[#E3C785] text-[#111] px-8 py-4 rounded-2xl font-semibold transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-2 flex items-center justify-center gap-3 min-w-[280px] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-5 h-5 relative z-10 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="relative z-10">Write a Google Review</span>
                  </a>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-3 mt-8 pt-8 border-t border-[#B6935B]/20">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#B0B0B0] text-sm">Google Verified Business • 100% Authentic Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}