'use client';

import { useEffect, useState } from 'react';

export default function CalendlyLink() {
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    // Check if Calendly is already loaded
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      setCalendlyReady(true);
      return;
    }

    // Wait for Calendly to load
    const checkCalendly = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        setCalendlyReady(true);
        clearInterval(checkCalendly);
      }
    }, 100);

    // Cleanup after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(checkCalendly);
    }, 10000);

    return () => {
      clearInterval(checkCalendly);
      clearTimeout(timeout);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/drjanduffy' });
    } else {
      // Fallback: open Calendly in new tab if script not loaded
      window.open('https://calendly.com/drjanduffy', '_blank');
    }
    return false;
  };

  return (
    <a 
      href="https://calendly.com/drjanduffy" 
      onClick={handleClick}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-150"
    >
      Schedule time with Dr Jan Duffy
    </a>
  );
}
