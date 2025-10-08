export default function Footer() {
  return (
    <footer className="bg-[#111] py-20 pb-[30px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-[50px]">
          <div>
            <h3 className="font-playfair text-xl mb-[25px] relative pb-[10px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gold">
              Aloy Restaurant
            </h3>
            <p className="text-muted-foreground mb-5">
              We serve warm hospitality and memorable dishes — join us for a meal by the river in the heart of Kandy.
            </p>
            <div className="flex gap-[15px]">
              {[
                { icon: 'facebook', href: '#' },
                { icon: 'instagram', href: '#' },
                { icon: 'tripadvisor', href: '#' },
                { icon: 'twitter', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-[#111] hover:-translate-y-[3px]"
                >
                  {social.icon === 'facebook' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  )}
                  {social.icon === 'tripadvisor' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 002.309 10.024 5.997 5.997 0 008.738-5.218 5.997 5.997 0 008.738 5.218 5.997 5.997 0 002.309-10.024L24 6.648h-4.361c-2.307-1.569-4.975-2.353-7.645-2.353h.012zm0 2.208c1.869 0 3.717.523 5.334 1.51a8.823 8.823 0 00-5.334 2.92 8.823 8.823 0 00-5.334-2.92c1.617-.987 3.465-1.51 5.334-1.51zm-6 4.5c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm12 0c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm-12 2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm12 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
                    </svg>
                  )}
                  {social.icon === 'twitter' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl mb-[25px] relative pb-[10px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gold">
              Contact Info
            </h3>
            <ul className="list-none">
              {[
                { icon: 'location', text: 'Peradeniya Road, Kandy, Sri Lanka', href: '#' },
                { icon: 'phone', text: '+94 77 123 4567', href: 'tel:+94771234567' },
                { icon: 'email', text: 'info@aloyrestaurant.com', href: 'mailto:info@aloyrestaurant.com' },
                { icon: 'globe', text: 'www.aloyrestaurant.com', href: '#' }
              ].map((item, index) => (
                <li key={index} className="mb-3">
                  <a href={item.href} className="text-muted-foreground transition-all duration-300 flex items-center gap-[10px] hover:text-gold hover:pl-[5px]">
                    {item.icon === 'location' && (
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.icon === 'phone' && (
                      <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                    {item.icon === 'email' && (
                      <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {item.icon === 'globe' && (
                      <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl mb-[25px] relative pb-[10px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gold">
              Opening Hours
            </h3>
            <ul className="list-none">
              {[
                { day: 'Monday - Thursday', time: '11:30 - 22:00' },
                { day: 'Friday - Saturday', time: '11:30 - 23:00' },
                { day: 'Sunday', time: '11:30 - 22:00' },
                { day: 'Lunch Service', time: '11:30 - 15:00' },
                { day: 'Dinner Service', time: '18:00 - 22:30' }
              ].map((schedule, index) => (
                <li key={index} className="flex justify-between py-2 border-b border-white/5 text-muted-foreground last:border-b-0">
                  <span className="font-medium">{schedule.day}</span>
                  <span>{schedule.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl mb-[25px] relative pb-[10px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gold">
              Quick Links
            </h3>
            <ul className="list-none">
              {[
                { text: 'Our Menu', href: '#menu' },
                { text: 'About Us', href: '#about' },
                { text: 'Experiences', href: '#experiences' },
                { text: 'Gallery', href: '#gallery' },
                { text: 'Contact', href: '#contact' },
                { text: 'Reservations', href: '#reservations' }
              ].map((link, index) => (
                <li key={index} className="mb-3">
                  <a href={link.href} className="text-muted-foreground transition-all duration-300 flex items-center gap-[10px] hover:text-gold hover:pl-[5px]">
                    <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center pt-[30px] border-t border-white/5 text-muted-foreground text-sm">
          <p>
            &copy; 2023 Aloy Restaurant. All Rights Reserved. | Designed with{' '}
            <svg className="inline w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>{' '}
            for exceptional dining experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
