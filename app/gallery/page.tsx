'use client';

import { useState, useEffect, useRef } from 'react';
import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
const [filteredItems, setFilteredItems] = useState<any[]>([]);
const [activeFilter, setActiveFilter] = useState('all');;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lightboxRef = useRef(null);

  // Fetch gallery items from Sanity
// Fetch gallery items from Sanity
useEffect(() => {
  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const query = `*[_type == "gallery"] | order(_createdAt desc) {
        _id,
        title,
        category,
        description,
        image {
          asset-> {
            _id,
            url,
            metadata {
              dimensions
            }
          }
        },
        _createdAt
      }`;
      
      const items = await client.fetch(query);
      setGalleryItems(items || []);
      setFilteredItems(items || []);
      
    } catch (error) {
      console.error('❌ Error fetching gallery items:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  fetchGalleryItems();
}, []);
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle fade-in animations
  useEffect(() => {
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

    return () => {
      fadeElements.forEach(el => {
        fadeInObserver.unobserve(el);
      });
    };
  }, [filteredItems]);

  // Handle keyboard navigation for lightbox
// Handle keyboard navigation for lightbox
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!lightboxOpen) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [lightboxOpen, currentImageIndex, filteredItems]);

const handleFilter = (filter: string) => {
  setActiveFilter(filter);
  if (filter === 'all') {
    setFilteredItems(galleryItems);
  } else {
    const filtered = galleryItems.filter(item => item.category === filter);
    setFilteredItems(filtered);
  }
};

const handleLightboxClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (e.target === lightboxRef.current) {
    closeLightbox();
  }
};

  const getCategoryDisplayName = (category) => {
    const categoryMap = {
      'food': 'Food & Beverage',
      'customer': 'Customer Snapshots'
    };
    return categoryMap[category] || category;
  };

  // Function to generate image URL
  const getImageUrl = (image, width = 800) => {
    if (!image?.asset) return null;
    try {
      return urlFor(image).width(width).url();
    } catch (error) {
      console.error('Error generating image URL:', error);
      return null;
    }
  };

  // Lightbox functions
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction) => {
    const newIndex = (currentImageIndex + direction + filteredItems.length) % filteredItems.length;
    setCurrentImageIndex(newIndex);
  };



  const currentLightboxItem = filteredItems[currentImageIndex];

  if (loading) {
    return (
      <>
        <Header />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh',
          color: '#B6935B',
          fontSize: '1.2rem'
        }}>
          🔄 Loading gallery...
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh',
          color: '#ff6b6b',
          fontSize: '1.2rem',
          textAlign: 'center',
          padding: '20px'
        }}>
          ❌ Error: {error}
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Gallery Hero Banner */}
      <section className="gallery-hero">
        <div className="gallery-hero-content fade-in">
          <div className="gallery-hero-subtitle">Visual Journey</div>
          <h1 className="gallery-hero-title">A Visual Feast</h1>
          <p className="hero-description">
            Immerse yourself in the beauty of Aloy Restaurant through our curated collection 
            of moments that capture the essence of our culinary artistry and ambiance.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <section className="gallery-filter">
        <div className="container">
          <div className="filter-container">
            <div className="filter-header">
              {['all', 'food', 'customer'].map(filter => (
                <button 
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => handleFilter(filter)}
                >
                  {filter === 'all' ? 'All' : getCategoryDisplayName(filter)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="masonry-grid">
            {filteredItems.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                color: '#B0B0B0', 
                padding: '60px 20px',
                gridColumn: '1 / -1'
              }}>
                <p>No images found matching the current filter.</p>
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const imageUrl = getImageUrl(item.image);
                
                return (
                  <div 
                    key={item._id}
                    className={`gallery-item fade-in ${index % 3 === 1 ? 'delay-1' : index % 3 === 2 ? 'delay-2' : ''}`}
                    data-category={item.category}
                    onClick={() => openLightbox(index)}
                  >
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={item.title || 'Gallery image'}
                        width={400}
                        height={300}
                        style={{ 
                          width: '100%', 
                          height: 'auto',
                          display: 'block'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '300px',
                        background: 'linear-gradient(45deg, #2a2a2a, #1a1a1a)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#B6935B',
                        flexDirection: 'column'
                      }}>
                        <i className="fas fa-image" style={{ fontSize: '2rem' }}></i>
                        <span>No Image Available</span>
                      </div>
                    )}
                    <div className="gallery-overlay">
                      <div className="gallery-category">
                        {getCategoryDisplayName(item.category)}
                      </div>
                      <h3 className="gallery-title">{item.title}</h3>
                      <p className="gallery-description">{item.description}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <div 
        className={`lightbox ${lightboxOpen ? 'active' : ''}`}
        id="lightbox"
        ref={lightboxRef}
        onClick={handleLightboxClick}
      >
        <button className="lightbox-close" onClick={closeLightbox}>
          <i className="fas fa-times"></i>
        </button>
        <button className="lightbox-nav lightbox-prev" onClick={() => navigateLightbox(-1)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="lightbox-nav lightbox-next" onClick={() => navigateLightbox(1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="lightbox-content">
          {currentLightboxItem && (
            <>
              <img 
                className="lightbox-img" 
                src={getImageUrl(currentLightboxItem.image, 1200) || ''} 
                alt={currentLightboxItem.title} 
              />
              <div className="lightbox-caption">
                <div className="lightbox-category">
                  {getCategoryDisplayName(currentLightboxItem.category)}
                </div>
                <h3 className="lightbox-title">{currentLightboxItem.title}</h3>
                <p className="lightbox-description">{currentLightboxItem.description}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />

      {/* Add Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* CSS Styles */}
      <style jsx global>{`
        /* ---------- Colors & Typography ---------- */
        :root {
          --bg: #181818;
          --gold: #B6935B;
          --cream: #F5F2E8;
          --text: #FFFFFF;
          --muted: #B0B0B0;
          --hover: #E3C785;
          --accent-gradient: linear-gradient(135deg, var(--gold), var(--hover));
          --radius: 14px;
          --maxwidth: 1400px;
          --section-padding: 80px 0;
        }

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          height: 100%;
          scroll-behavior: smooth;
        }

        body {
          font-family: "Poppins", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial;
          background: var(--bg);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.45;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          max-width: var(--maxwidth);
          margin: 0 auto;
          padding: 0 24px;
        }

        section {
          padding: var(--section-padding);
        }

        h1, h2, h3, h4 {
          font-family: "Playfair Display", serif;
        }

        /* ---------- Gallery Hero Banner ---------- */
        .gallery-hero {
          min-height: 70vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                      url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover;
          margin-top: 80px;
        }

        .gallery-hero-content {
          max-width: 800px;
          padding: 0 20px;
        }

        .gallery-hero-title {
          font-family: "Playfair Display", serif;
          font-size: 4.5rem;
          color: var(--cream);
          margin-bottom: 20px;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
          line-height: 1.2;
        }

        .gallery-hero-subtitle {
          font-size: 1.2rem;
          color: var(--gold);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 30px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ---------- Gallery Filter Tabs ---------- */
        .gallery-filter {
          background: linear-gradient(180deg, var(--bg) 0%, #1a1a1a 100%);
          padding: 60px 0 40px;
        }

        .filter-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .filter-header {
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .filter-btn {
          background: transparent;
          border: none;
          color: var(--muted);
          font-family: "Playfair Display", serif;
          font-size: 1.2rem;
          padding: 15px 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          border-radius: 10px;
        }

        .filter-btn:hover {
          color: var(--cream);
          background: rgba(255, 255, 255, 0.05);
        }

        .filter-btn.active {
          color: var(--gold);
          background: rgba(182, 147, 91, 0.1);
        }

        .filter-btn.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 2px;
          background: var(--gold);
        }

        /* ---------- Masonry Gallery Grid ---------- */
        .gallery-section {
          background: linear-gradient(180deg, #1a1a1a 0%, var(--bg) 100%);
        }

        .masonry-grid {
          column-count: 3;
          column-gap: 20px;
          margin: 0 auto;
        }

        .gallery-item {
          break-inside: avoid;
          margin-bottom: 20px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.4s ease;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: var(--gold);
        }

        .gallery-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 30px 20px 20px;
          color: var(--cream);
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
          opacity: 1;
        }

        .gallery-category {
          font-size: 0.8rem;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .gallery-title {
          font-family: "Playfair Display", serif;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .gallery-description {
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.4;
        }

        /* ---------- Lightbox Modal ---------- */
        .lightbox {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .lightbox.active {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
        }

        .lightbox-content {
          max-width: 90%;
          max-height: 90%;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          transform: scale(0.9);
          transition: transform 0.3s ease;
        }

        .lightbox.active .lightbox-content {
          transform: scale(1);
        }

        .lightbox-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .lightbox-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
          padding: 30px 20px 20px;
          color: var(--cream);
        }

        .lightbox-category {
          font-size: 0.9rem;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .lightbox-title {
          font-family: "Playfair Display", serif;
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .lightbox-description {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.4;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.7);
          color: var(--cream);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-size: 1.2rem;
          z-index: 10;
        }

        .lightbox-close:hover {
          background: var(--gold);
          color: #111;
          transform: rotate(90deg);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: var(--cream);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-size: 1.5rem;
        }

        .lightbox-nav:hover {
          background: var(--gold);
          color: #111;
        }

        .lightbox-prev {
          left: 20px;
        }

        .lightbox-next {
          right: 20px;
        }

        /* ---------- Animations ---------- */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .fade-in.active {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 {
          transition-delay: 0.2s;
        }

        .delay-2 {
          transition-delay: 0.4s;
        }

        .delay-3 {
          transition-delay: 0.6s;
        }
        
        /* Image fallback styling */
        .gallery-item img {
          min-height: 200px;
          background: linear-gradient(45deg, #2a2a2a, #1a1a1a);
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 1100px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (max-width: 768px) {
          .gallery-hero-title {
            font-size: 3.5rem;
          }
          
          .masonry-grid {
            column-count: 1;
          }
          
          .filter-header {
            flex-direction: column;
            align-items: center;
          }
          
          .filter-btn {
            width: 100%;
            text-align: center;
          }
          
          .lightbox-nav {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
          
          .lightbox-prev {
            left: 10px;
          }
          
          .lightbox-next {
            right: 10px;
          }
        }
      `}</style>
    </>
  );
}