'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#menu", label: "Menu" }, 
    { href: "/experience", label: "Experiences" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-[1000] transition-all duration-400 ${scrolled ? 'py-3' : 'py-2'}`}>
        {/* Background overlay that only covers the content area */}
        <div className={`absolute inset-0 transition-all duration-400 ${scrolled ? 'bg-[#181818]' : 'bg-transparent'}`} 
             style={{
               maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
             }} />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className={`flex items-center justify-between gap-[18px] w-full py-3 px-6 rounded-xl transition-all duration-300 ${scrolled ? 'bg-[#181818] border-white/10' : 'bg-black/40 backdrop-blur-[6px] border-white/8'} border`}>
            <div className="flex items-center gap-3">
              <div className="w-[80px] h-[80px]">
                <Image 
                  src="./assets/Logo.png" 
                  alt="Aloy Restaurant Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <div className="font-semibold text-[#F5F2E8]">Aloy Restaurant</div>
                <div className="text-xs text-[#B0B0B0]">Kandy • Since 2012</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-[#F5F2E8] font-medium transition-all duration-300 relative py-2 hover:text-[#B6935B] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B6935B] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
              <a href="/contact" className="bg-[#B6935B] text-[#111] px-6 py-3 rounded-[10px] font-semibold border-none cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(182,147,91,0.3)] hover:bg-[#E3C785] hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(182,147,91,0.4)]">
                Reservations
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 relative focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-[#F5F2E8] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#F5F2E8] transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#F5F2E8] transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#181818] border-l border-[#B6935B]/20 z-[1000] transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-[#B6935B]/20">
            <div className="flex items-center gap-3">
              <div className="w-[70px] h-[70px]">
                <Image 
                  src="./assets/Logo.png" 
                  alt="Aloy Restaurant Logo"
                  width={70}
                  height={70}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-[#F5F2E8] text-lg">Aloy Restaurant</div>
                <div className="text-xs text-[#B0B0B0]">Kandy • Since 2012</div>
              </div>
            </div>
            
            {/* Close Button */}
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#B6935B]/10 text-[#F5F2E8] hover:bg-[#B6935B]/20 transition-colors duration-200"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="py-6 px-6">
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4 mb-8">
                {navigationItems.map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="text-[#F5F2E8] text-lg font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-[#B6935B]/10 hover:text-[#B6935B] hover:pl-6 border-l-4 border-transparent hover:border-[#B6935B]"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Reservations Button in Mobile Menu */}
              <div className="mb-8">
                <a 
                  href="/contact" 
                  className="w-full bg-[#B6935B] text-[#111] px-6 py-4 rounded-xl font-semibold border-none cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(182,147,91,0.3)] hover:bg-[#E3C785] hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(182,147,91,0.4)] flex items-center justify-center gap-2 text-center"
                  onClick={closeMobileMenu}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Make Reservation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevent body scroll when mobile menu is open */}
      <style jsx global>{`
        body {
          overflow: ${isMobileMenuOpen ? 'hidden' : 'auto'};
        }
      `}</style>
    </>
  );
}