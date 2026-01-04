'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function RealScoutListings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Lazy load the widget when it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Start loading 200px before it's visible for better perceived performance
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      // Ensure RealScout script is loaded (only when actually needed)
      const scriptExists = document.querySelector('script[src*="realscout-web-components"]');
      if (!scriptExists) {
        // Wait for page to be idle before loading
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            const script = document.createElement('script');
            script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
            script.type = 'module';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
          }, { timeout: 2000 });
        } else {
          // Fallback for browsers without requestIdleCallback
          setTimeout(() => {
            const script = document.createElement('script');
            script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
            script.type = 'module';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
          }, 500);
        }
      }

      // Wait for script to load before creating element
      const loadWidget = () => {
        if (containerRef.current && customElements.get('realscout-office-listings')) {
          containerRef.current.innerHTML = '';
          
          const element = document.createElement('realscout-office-listings');
          element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
          element.setAttribute('sort-order', 'PRICE_HIGH');
          element.setAttribute('listing-status', 'For Sale');
          element.setAttribute('property-types', ',SFR');
          element.setAttribute('price-min', '850000');
          element.setAttribute('price-max', '990000');
          
          containerRef.current.appendChild(element);
        } else {
          // Retry after a short delay if custom element not ready
          setTimeout(loadWidget, 100);
        }
      };

      loadWidget();
    }
  }, [isVisible]);

  return (
    <div className="max-w-7xl mx-auto min-h-[400px]" ref={containerRef}>
      {!isVisible && (
        <div className="flex items-center justify-center h-[400px] bg-gray-50 rounded-lg">
          <p className="text-gray-500">Loading listings...</p>
        </div>
      )}
    </div>
  );
}

