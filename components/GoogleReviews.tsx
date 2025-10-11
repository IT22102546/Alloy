// components/GoogleReviews.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function GoogleReviews() {
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

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      text: "Absolutely incredible dining experience! The food was exceptional, and the riverside view made it even more special. The staff went above and beyond to make our anniversary memorable.",
      avatar: "SJ",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "1 month ago",
      text: "Best restaurant in Kandy! The fusion of local flavors with Western cuisine is masterful. The Hanthana mountain view during sunset is breathtaking. Highly recommend the seafood platter.",
      avatar: "MC",
      verified: true
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 5,
      date: "3 weeks ago",
      text: "From the moment we arrived, we were treated like royalty. The ambiance, service, and food quality are world-class. The garden seating area is magical in the evening.",
      avatar: "ED",
      verified: true
    },
    {
      id: 4,
      name: "Robert Wilson",
      rating: 5,
      date: "2 months ago",
      text: "As a frequent traveler to Sri Lanka, Aloy Restaurant stands out for its authenticity and excellence. The attention to detail in both food and service is remarkable.",
      avatar: "RW",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Thompson",
      rating: 5,
      date: "1 week ago",
      text: "The perfect blend of Sri Lankan hospitality and international standards. We celebrated my birthday here and the team made it so special with a custom dessert!",
      avatar: "LT",
      verified: true
    },
    {
      id: 6,
      name: "David Park",
      rating: 5,
      date: "3 months ago",
      text: "Exceptional culinary journey! Each dish tells a story of Sri Lankan culture with modern twists. The riverside bar offers the best cocktails in town.",
      avatar: "DP",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-[#B6935B]' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#181818] to-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="text-[#B6935B] text-sm uppercase tracking-[2px] mb-2">
            Customer Reviews
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F2E8] mb-4">
            Google Reviews
          </h2>
          <p className="text-[#B0B0B0] max-w-[700px] mx-auto text-lg">
            Discover what our guests are saying about their experience at Aloy Restaurant
          </p>
        </div>

        {/* Overall Rating */}
        <div className="fade-in delay-1 bg-gradient-to-br from-[#B6935B]/10 to-transparent rounded-2xl p-8 border border-[#B6935B]/20 mb-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className="text-center">
                <div className="font-playfair text-5xl text-[#F5F2E8] mb-2">4.9</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-[#B0B0B0] text-sm">Out of 5.0</div>
              </div>
              <div className="h-16 w-px bg-[#B6935B]/30 hidden md:block"></div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="font-playfair text-2xl text-[#F5F2E8] mb-2">
                Aloy Restaurant (Pvt) Ltd
              </div>
              <div className="text-[#B0B0B0] mb-3">
                Rated Excellent by 247+ Customers
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#B0B0B0]">Google Verified Business</span>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <a
                href="https://g.page/r/Cgw9example/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B6935B] text-[#111] px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:bg-[#E3C785] hover:-translate-y-1 hover:shadow-xl flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                Write a Review
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`fade-in delay-${index % 3} bg-white/5 rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:border-[#B6935B]/30 hover:-translate-y-2 hover:shadow-xl group`}
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B6935B] to-[#E3C785] rounded-full flex items-center justify-center font-semibold text-[#111] text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#F5F2E8]">{review.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      {renderStars(review.rating)}
                      <span className="text-[#B0B0B0] text-xs">{review.date}</span>
                    </div>
                  </div>
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 text-green-500 text-xs">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>

              {/* Review Text */}
              <p className="text-[#B0B0B0] leading-relaxed text-sm mb-4 line-clamp-4">
                {review.text}
              </p>

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#B0B0B0] text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Helpful
                </div>
                <div className="flex items-center gap-1 text-[#B0B0B0] text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                  Comment
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="fade-in delay-2 text-center">
          <div className="bg-gradient-to-r from-[#B6935B]/10 to-transparent rounded-2xl p-8 border border-[#B6935B]/20">
            <h3 className="font-playfair text-2xl text-[#F5F2E8] mb-4">
              Share Your Experience
            </h3>
            <p className="text-[#B0B0B0] mb-6 max-w-2xl mx-auto">
              Have you dined with us recently? We'd love to hear about your experience at Aloy Restaurant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.page/r/Cgw9example/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B6935B] text-[#111] px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:bg-[#E3C785] hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Write a Google Review
              </a>
              <a
                href="#contact"
                className="border border-[#B6935B] text-[#B6935B] px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#B6935B] hover:text-[#111] flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Share Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}