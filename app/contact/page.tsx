'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import emailjs from 'emailjs-com';

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
      <div className="text-white">Loading map...</div>
    </div>
  )
});

// EmailJS configuration - Replace with your actual credentials
const EMAILJS_SERVICE_ID = 'service_g93hebn';
const EMAILJS_TEMPLATE_ID = 'template_ezbd3us';
const EMAILJS_USER_ID = '0dC8U10tkq7mtNRcK';

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

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

    // Initialize EmailJS
    emailjs.init(EMAILJS_USER_ID);

    checkOpenStatus();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      fadeInObserver.disconnect();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Format date for better readability
    const dateValue = formData.get('date') as string;
    const formattedDate = dateValue ? new Date(dateValue).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Not specified';

    // Create template parameters for beautiful email
    const templateParams = {
      to_email: 'aloyrestaurant@gmail.com',
      to_name: 'Aloy Restaurant Team',
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      phone: formData.get('phone') || 'Not provided',
      reservation_type: formData.get('reservation-type'),
      guests: formData.get('guests') || 'Not specified',
      date: formattedDate,
      message: formData.get('message'),
      subject: `New ${formData.get('reservation-type')} Inquiry - Aloy Restaurant`,
      timestamp: new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.');
      form.reset();
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please call us directly at +94 71 605 4729.');
    } finally {
      setIsSubmitting(false);
    }
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
          
          {/* Status Message */}
          {submitStatus !== 'idle' && (
            <div className={`max-w-2xl mx-auto mb-8 p-6 rounded-2xl border ${
              submitStatus === 'success' 
                ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border-red-500/20 text-red-400'
            } shadow-lg`}>
              <div className="flex items-center gap-4">
                <i className={`fas text-2xl ${
                  submitStatus === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'
                }`}></i>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {submitStatus === 'success' ? 'Message Sent Successfully!' : 'Sending Failed'}
                  </h4>
                  <p>{submitMessage}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <div className="fade-in bg-white/5 rounded-2xl p-8 lg:p-10 border border-white/10 shadow-2xl">
              <div className="mb-8">
                <h2 className="font-playfair text-2xl lg:text-3xl text-[#F5F2E8] mb-3">Send Us a Message</h2>
                <p className="text-[#B0B0B0]">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#F5F2E8] font-medium mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                    placeholder="Your full name" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#F5F2E8] font-medium mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                    placeholder="your.email@example.com" 
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
                    name="phone"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                    placeholder="+94 71 234 5678" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="reservation-type" className="block text-[#F5F2E8] font-medium mb-2">
                    Inquiry Type *
                  </label>
                  <div className="relative">
                    <select 
                      id="reservation-type" 
                      name="reservation-type"
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300 pr-12"
                      required
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23B0B0B0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '16px 12px'
                      }}
                    >
                      <option value="" disabled selected className="bg-[#2a2a2a] text-white">Select inquiry type</option>
                      <option value="Dinner Reservation" className="bg-[#2a2a2a] text-white py-2">Dinner Reservation</option>
                      <option value="Lunch Reservation" className="bg-[#2a2a2a] text-white py-2">Lunch Reservation</option>
                      <option value="Private Dining" className="bg-[#2a2a2a] text-white py-2">Private Dining</option>
                      <option value="Special Event" className="bg-[#2a2a2a] text-white py-2">Special Event</option>
                      <option value="Catering" className="bg-[#2a2a2a] text-white py-2">Catering Service</option>
                      <option value="General Inquiry" className="bg-[#2a2a2a] text-white py-2">General Inquiry</option>
                      <option value="Feedback" className="bg-[#2a2a2a] text-white py-2">Feedback</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="guests" className="block text-[#F5F2E8] font-medium mb-2">
                      Number of Guests
                    </label>
                    <input 
                      type="number" 
                      id="guests" 
                      name="guests"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                      placeholder="e.g., 2" 
                      min="1" 
                      max="50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-[#F5F2E8] font-medium mb-2">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-[#F5F2E8] font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6935B] focus:ring-2 focus:ring-[#B6935B]/20 transition-all duration-300 min-h-[120px] resize-vertical"
                    placeholder="Please share any special requests, dietary requirements, or details about your inquiry..." 
                    required 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-xl font-semibold border-none cursor-pointer transition-all duration-300 shadow-lg flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-[#B6935B] text-[#111] hover:bg-[#E3C785] hover:-translate-y-1 hover:shadow-xl transform'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin text-lg"></i>
                      <span className="text-lg">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane text-lg"></i>
                      <span className="text-lg">Send Message</span>
                    </>
                  )}
                </button>
                
                <p className="text-[#B0B0B0] text-sm text-center mt-4">
                  * Required fields. We typically respond within 2-4 hours during business hours.
                </p>
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
                    <div>
                      <p className="text-[#B0B0B0] font-medium">Phone</p>
                      <a href="tel:+94716054729" className="hover:text-[#B6935B] transition-colors duration-300 text-lg">
                        +94 71 605 4729
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <i className="fas fa-envelope text-[#B6935B] mt-1 text-lg"></i>
                    <div>
                      <p className="text-[#B0B0B0] font-medium">Email</p>
                      <a href="mailto:aloyrestaurant@gmail.com" className="hover:text-[#B6935B] transition-colors duration-300">
                        aloyrestaurant@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <i className="fas fa-globe text-[#B6935B] mt-1 text-lg"></i>
                    <div>
                      <p className="text-[#B0B0B0] font-medium">Website</p>
                      <a href="#" className="hover:text-[#B6935B] transition-colors duration-300">
                        www.aloyrestaurant.com
                      </a>
                    </div>
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
                    { day: 'Monday - Thursday', time: '11:30 AM - 10:00 PM' },
                    { day: 'Friday - Saturday', time: '11:30 AM - 11:00 PM' },
                    { day: 'Sunday', time: '11:30 AM - 10:00 PM' },
                    { day: 'Lunch Service', time: '11:30 AM - 3:00 PM' },
                    { day: 'Dinner Service', time: '6:00 PM - 10:30 PM' }
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

              <div className="fade-in delay-3 bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6935B] hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#B6935B] to-[#E3C785] scale-y-0 transition-transform duration-400 hover:scale-y-100"></div>
                <h3 className="font-playfair text-2xl text-[#F5F2E8] mb-6 flex items-center gap-3">
                  <i className="fas fa-info-circle text-[#B6935B] text-xl"></i>
                  Response Time
                </h3>
                <div className="space-y-3 text-[#B0B0B0]">
                  <p>We strive to respond to all inquiries within:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-clock text-[#B6935B] text-sm"></i>
                      <span><strong>2-4 hours</strong> during business hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-clock text-[#B6935B] text-sm"></i>
                      <span><strong>12 hours</strong> for after-hours inquiries</span>
                    </li>
                  </ul>
                  <p className="text-sm mt-4">For urgent reservations, please call us directly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your existing Map Section and Footer */}
      {/* ... (Keep the existing Map Section code) ... */}

      <Footer />

      {/* Custom styles */}
      <style jsx global>{`
        /* Style the dropdown options */
        select option {
          background-color: #2a2a2a;
          color: white;
          padding: 12px;
        }

        select:focus option:checked {
          background-color: #B6935B;
          color: #111;
        }

        select option:hover {
          background-color: #B6935B !important;
          color: #111 !important;
        }

        /* Fade-in animation */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .fade-in.active {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in.delay-1 {
          transition-delay: 0.1s;
        }

        .fade-in.delay-2 {
          transition-delay: 0.2s;
        }

        .fade-in.delay-3 {
          transition-delay: 0.3s;
        }
      `}</style>
    </main>
  );
}