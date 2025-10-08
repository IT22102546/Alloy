'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      el.classList.add('active');
    });
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center text-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
        onError={() => {
          if (videoRef.current) {
            videoRef.current.style.display = 'none';
          }
        }}
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,24,24,0.2)] to-[rgba(24,24,24,0.7)] z-0" />

      <div className="relative z-[2] max-w-[900px] px-5">
        <p className="fade-in text-lg text-cream mb-5 tracking-[2px] uppercase">
          Riverside Dining • Scenic Views
        </p>
        <h1 className="fade-in delay-1 font-playfair text-6xl mb-6 leading-[1.1]">
          Culinary Excellence Meets Authentic Tradition
        </h1>
        <p className="fade-in delay-2 text-xl text-cream mb-10 max-w-[700px] mx-auto">
          Nestled between the Mahaweli River and the Hanthana hills, Aloy Restaurant offers a unique dining experience with seasonal ingredients, warm hospitality, and dishes that tell a story.
        </p>
        <div className="fade-in delay-3 flex gap-4 justify-center mb-10 flex-wrap">
          <a href="#menu" className="bg-gold text-[#111] px-6 py-3 rounded-[10px] font-semibold border-none cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(182,147,91,0.3)] hover:bg-hover hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(182,147,91,0.4)]">
            Explore Menu
          </a>
          <a href="#reservations" className="px-5 py-[10px] rounded-[10px] border border-white/10 transition-all duration-300 font-medium hover:bg-white/5 hover:border-white/20 hover:-translate-y-[2px]">
            Book Your Table
          </a>
        </div>
        <div className="fade-in delay-3 flex items-center justify-center gap-[30px] mt-10 flex-wrap">
          <div className="flex items-center gap-[10px] text-muted-foreground">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5 TripAdvisor</span>
          </div>
          <div className="flex items-center gap-[10px] text-muted-foreground">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Travelers&apos; Choice 2023</span>
          </div>
          <div className="flex items-center gap-[10px] text-muted-foreground">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Fine Dining Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
