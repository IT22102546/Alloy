'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
      <div className="text-white">Loading map...</div>
    </div>
  )
});

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    // Check if restaurant is currently open
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour + (currentMinute / 60);
      
      // Restaurant is open from 11:30 to 22:00
      const openTime = 11.5; // 11:30
      const closeTime = 22; // 22:00
      
      setIsOpen(currentTime >= openTime && currentTime < closeTime);
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

    // Set minimum date for reservation to today
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date') as HTMLInputElement;
    if (dateInput) {
      dateInput.min = today;
    }

    checkOpenStatus();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      fadeInObserver.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const restaurantLat = 7.2906;
          const restaurantLng = 80.6337;
          
          window.open(`https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${userLat},${userLng};${restaurantLat},${restaurantLng}`, '_blank');
        },
        () => {
          window.open('https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=7.2906,80.6337', '_blank');
        }
      );
    } else {
      window.open('https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=7.2906,80.6337', '_blank');
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="min-h-[70vh] relative flex items-center justify-center text-center bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/assets/ContBanner.jpg)'
        }}
      >
        <div className="fade-in max-w-[800px] px-5">
          <div className="text-[#B6935B] text-sm uppercase tracking-[3px] mb-2">Get In Touch</div>
          <h1 className="font-playfair text-3xl md:text-5xl text-[#F5F2E8] mb-8 leading-tight text-shadow-lg">Contact Us</h1>
          <p className="text-[#B0B0B0] max-w-[600px] mx-auto text-lg">
            We'd love to hear from you. Reach out to make a reservation or inquire about our services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#181818]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <div className="fade-in bg-white/5 rounded-2xl p-8 lg:p-10 border border-white/10 shadow-2xl">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#F5F2E8] font-medium mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                    placeholder="Your full name" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#F5F2E8] font-medium mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                    placeholder="Your email address" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-[#F5F2E8] font-medium mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                    placeholder="Your phone number" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="reservation-type" className="block text-[#F5F2E8] font-medium mb-2">
                    Reservation Type
                  </label>
                  <div className="relative">
                    <select 
                      id="reservation-type" 
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300 pr-12"
                      required
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23B0B0B0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '16px 12px'
                      }}
                    >
                      <option value="" disabled selected className="bg-[#2a2a2a] text-white">Select reservation type</option>
                      <option value="dinner" className="bg-[#2a2a2a] text-white py-2 hover:bg-[#B6935B] hover:text-[#111]">Dinner Reservation</option>
                      <option value="lunch" className="bg-[#2a2a2a] text-white py-2 hover:bg-[#B6935B] hover:text-[#111]">Lunch Reservation</option>
                      <option value="private" className="bg-[#2a2a2a] text-white py-2 hover:bg-[#B6935B] hover:text-[#111]">Private Dining</option>
                      <option value="event" className="bg-[#2a2a2a] text-white py-2 hover:bg-[#B6935B] hover:text-[#111]">Special Event</option>
                      <option value="other" className="bg-[#2a2a2a] text-white py-2 hover:bg-[#B6935B] hover:text-[#111]">Other Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="guests" className="block text-[#F5F2E8] font-medium mb-2">
                    Number of Guests
                  </label>
                  <input 
                    type="number" 
                    id="guests" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                    placeholder="Number of guests" 
                    min="1" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="date" className="block text-[#F5F2E8] font-medium mb-2">
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-[#F5F2E8] font-medium mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300 min-h-[120px] resize-vertical"
                    placeholder="Tell us about your inquiry or special requests..." 
                    required 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#B6935B] text-[#111] px-8 py-4 rounded-xl font-semibold border-none cursor-pointer transition-all duration-300 shadow-lg hover:bg-[#E3C785] hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div className="fade-in delay-1 bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6935B] hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#B6935B] to-[#E3C785] scale-y-0 transition-transform duration-400 hover:scale-y-100"></div>
                <h3 className="font-playfair text-2xl text-[#F5F2E8] mb-6 flex items-center gap-3">
                  <i className="fas fa-phone text-[#B6935B] text-xl"></i>
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <i className="fas fa-phone text-[#B6935B] mt-1 text-lg"></i>
                    <p className="text-[#B0B0B0]">
                      <a href="tel:+94771234567" className="hover:text-[#B6935B] transition-colors duration-300">
                        +94 71 605 4729
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <i className="fas fa-envelope text-[#B6935B] mt-1 text-lg"></i>
                    <p className="text-[#B0B0B0]">
                      <a href="mailto:aloyrestaurant@gmail.com" className="hover:text-[#B6935B] transition-colors duration-300">
                        aloyrestaurant@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <i className="fas fa-globe text-[#B6935B] mt-1 text-lg"></i>
                    <p className="text-[#B0B0B0]">
                      <a href="#" className="hover:text-[#B6935B] transition-colors duration-300">
                        www.aloyrestaurant.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="fade-in delay-2 bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6935B] hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#B6935B] to-[#E3C785] scale-y-0 transition-transform duration-400 hover:scale-y-100"></div>
                <h3 className="font-playfair text-2xl text-[#F5F2E8] mb-6 flex items-center gap-3">
                  <i className="fas fa-clock text-[#B6935B] text-xl"></i>
                  Opening Hours
                </h3>
                <ul className="space-y-3">
                  {[
                    { day: 'Monday - Thursday', time: '11:30 - 22:00' },
                    { day: 'Friday - Saturday', time: '11:30 - 23:00' },
                    { day: 'Sunday', time: '11:30 - 22:00' },
                    { day: 'Lunch Service', time: '11:30 - 15:00' },
                    { day: 'Dinner Service', time: '18:00 - 22:30' }
                  ].map((schedule, index) => (
                    <li 
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0 transition-all duration-300 hover:text-[#F5F2E8] hover:pl-2"
                    >
                      <span className="font-medium text-[#B0B0B0]">{schedule.day}</span>
                      <span className="text-[#B0B0B0] font-medium">{schedule.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-[#181818] to-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <div className="text-[#B6935B] text-sm uppercase tracking-[2px] mb-2">Find Us</div>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F2E8] mb-4">Our Location</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch fade-in delay-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[450px]">
              <MapComponent />
            </div>
            <div className="bg-white/5 rounded-2xl p-8 lg:p-10 border border-white/10 shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-playfair text-2xl lg:text-3xl text-[#F5F2E8] mb-6">Visit Our Restaurant</h3>
                <p className="text-[#B0B0B0] mb-8 leading-relaxed text-lg">
                  Located in the heart of Kandy with stunning views of the Mahaweli River and surrounding mountains. 
                  We offer free valet parking and an unforgettable dining experience.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <i className="fas fa-map-marker-alt text-[#B6935B] mt-1 text-lg"></i>
                    <p className="text-[#B0B0B0]">No.806, Peradeniya Road, Kandy, Sri Lanka</p>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <i className="fas fa-phone text-[#B6935B] mt-1 text-lg"></i>
                    <p className="text-[#B0B0B0]">
                      <a href="tel:+94771234567" className="hover:text-[#B6935B] transition-colors duration-300">
                       +94 71 605 4729
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <i className="fas fa-clock text-[#B6935B] mt-1 text-lg"></i>
                    <p className="text-[#B0B0B0]">
                      Open today: {' '}
                      <span className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full ${
                        isOpen 
                          ? 'bg-green-500/10 text-green-400' 
                          : 'bg-red-500/10 text-red-400'
                      }`}>
                        {isOpen ? '11:30 AM - 10:00 PM' : 'Closed'}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <i className="fas fa-parking text-[#B6935B] mt-1 text-lg"></i>
                    <p className="text-[#B0B0B0]">Free valet parking available</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 flex-wrap">
                <button 
                  onClick={handleGetDirections}
                  className="flex-1 min-w-[150px] bg-[#B6935B] text-[#111] px-6 py-3 rounded-xl font-semibold border-none cursor-pointer transition-all duration-300 shadow-lg hover:bg-[#E3C785] hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <i className="fas fa-directions"></i>
                  Get Directions
                </button>
                <a 
                  href="https://www.google.com/maps/dir//7.2906,80.6337" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[150px] px-6 py-3 rounded-xl border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <i className="fab fa-google"></i>
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom styles for dropdown */}
      <style jsx global>{`
        /* Style the dropdown options */
        select option {
          background-color: #2a2a2a;
          color: white;
          padding: 12px;
        }

        /* Style the dropdown when open */
        select:focus option:checked {
          background-color: #B6935B;
          color: #111;
        }

        /* Style hover state for options */
        select option:hover {
          background-color: #B6935B !important;
          color: #111 !important;
        }

        /* For Webkit browsers */
        select::-webkit-listbox {
          background-color: #2a2a2a;
          border: 1px solid #B6935B;
          border-radius: 8px;
        }

        select::-webkit-option {
          background-color: #2a2a2a;
          color: white;
          padding: 12px;
        }

        select::-webkit-option:hover {
          background-color: #B6935B !important;
          color: #111 !important;
        }

        select::-webkit-option:checked {
          background-color: #B6935B;
          color: #111;
        }
      `}</style>
    </main>
  );
}