'use client';

import React, { useEffect, useRef } from 'react';

export default function RealScoutListings() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing content
      containerRef.current.innerHTML = '';
      
      // Create the web component element
      const element = document.createElement('realscout-office-listings');
      element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
      element.setAttribute('sort-order', 'PRICE_HIGH');
      element.setAttribute('listing-status', 'For Sale');
      element.setAttribute('property-types', ',SFR');
      element.setAttribute('price-min', '900000');
      element.setAttribute('price-max', '1100000');
      
      containerRef.current.appendChild(element);
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Available Homes in Las Vegas
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
        </p>
        
        <div className="max-w-7xl mx-auto" ref={containerRef} />
      </div>
    </section>
  );
}

