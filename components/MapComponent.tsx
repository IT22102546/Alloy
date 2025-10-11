'use client';

import { useEffect, useRef } from 'react';

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple iframe solution that always works
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.openstreetmap.org/export/embed.html?bbox=80.6250%2C7.2850%2C80.6420%2C7.2950&amp;layer=mapnik&amp;marker=7.2906%2C80.6337';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';
    iframe.loading = 'lazy';
    
    if (mapRef.current) {
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-2xl bg-gray-800"
      style={{ height: '450px' }}
    >
      <div className="w-full h-full flex items-center justify-center text-white">
        Loading map...
      </div>
    </div>
  );
}