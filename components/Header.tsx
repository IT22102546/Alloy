'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-[1000] flex justify-center transition-all duration-400 ${scrolled ? 'bg-black/90 backdrop-blur-[10px] py-3 shadow-[0_5px_20px_rgba(0,0,0,0.2)]' : 'py-5'}`}>
      <div className="max-w-[1200px] w-full px-6">
        <div className="flex items-center justify-between gap-[18px] w-full py-3 px-6 rounded-xl bg-black/40 backdrop-blur-[6px] border border-white/8 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[65px] rounded-[10px] bg-white grid place-items-center overflow-hidden shadow-[0_4px_12px_rgba(182,147,91,0.3)]">
              <Image 
                src="./assets/logo.jpg" 
                alt="Aloy Restaurant Logo"
                width={15}
                height={15}
                className="w-16 h-16 object-cover"
                priority
              />
            </div>
            <div>
              <div className="font-semibold text-cream">Aloy Restaurant</div>
              <div className="text-xs text-muted-foreground">Kandy • Since 2012</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#menu" className="text-cream font-medium transition-all duration-300 relative py-2 hover:text-gold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full">
              Menu
            </a>
            <a href="#about" className="text-cream font-medium transition-all duration-300 relative py-2 hover:text-gold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="#experiences" className="text-cream font-medium transition-all duration-300 relative py-2 hover:text-gold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full">
              Experiences
            </a>
            <a href="#gallery" className="text-cream font-medium transition-all duration-300 relative py-2 hover:text-gold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full">
              Gallery
            </a>
            <a href="#contact" className="text-cream font-medium transition-all duration-300 relative py-2 hover:text-gold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full">
              Contact
            </a>
            <a href="#reservations" className="bg-gold text-[#111] px-6 py-3 rounded-[10px] font-semibold border-none cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(182,147,91,0.3)] hover:bg-hover hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(182,147,91,0.4)]">
              Reservations
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}