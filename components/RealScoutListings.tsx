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
      element.setAttribute('price-min', '850000');
      element.setAttribute('price-max', '990000');
      
      containerRef.current.appendChild(element);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto" ref={containerRef} />
  );
}

