'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div className="text-xl font-bold text-gray-900">
              Homestead West
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Home */}
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>

            {/* Available Homes */}
            <Link 
              href="/properties" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Available Homes
            </Link>

            {/* Community Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('community')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                Community
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'community' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  <Link 
                    href="/community" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Community Guide
                  </Link>
                  <Link 
                    href="/community-map" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Community Map
                  </Link>
                  <Link 
                    href="/virtual-tour" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Virtual Tour
                  </Link>
                  <Link 
                    href="/location/las-vegas-office" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Location & Office
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  <Link 
                    href="/services" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    All Services
                  </Link>
                  <Link 
                    href="/services/buying" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Home Buying
                  </Link>
                  <Link 
                    href="/services/selling" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Home Selling
                  </Link>
                  <Link 
                    href="/services/investment" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Investment Consulting
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                Resources
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  <Link 
                    href="/#search-homes" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Search Listings
                  </Link>
                  <Link 
                    href="/buyers-guide" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Buyer's Guide
                  </Link>
                  <Link 
                    href="/homebuying-process" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Homebuying Process
                  </Link>
                  <Link 
                    href="/vip-buyer-program" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    VIP Partnership
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Blog & News
                  </Link>
                  <Link 
                    href="/testimonials" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Testimonials
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link 
                    href="/properties" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Property Search
                  </Link>
                </div>
              )}
            </div>

            {/* About */}
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About Dr. Jan
            </Link>

            {/* Contact */}
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>

            {/* VIP Partnership Badge */}
            <Link 
              href="/vip-buyer-program"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg"
            >
              ⭐ VIP ACCESS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setActiveDropdown(activeDropdown === 'mobile' ? null : 'mobile')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {activeDropdown === 'mobile' && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              
              <Link 
                href="/properties" 
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Available Homes
              </Link>

              <div className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2">Community</div>
                <div className="ml-4 space-y-1">
                  <Link 
                    href="/community" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Community Guide
                  </Link>
                  <Link 
                    href="/community-map" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Community Map
                  </Link>
                  <Link 
                    href="/virtual-tour" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Virtual Tour
                  </Link>
                  <Link 
                    href="/location/las-vegas-office" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Location & Office
                  </Link>
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2">Services</div>
                <div className="ml-4 space-y-1">
                  <Link 
                    href="/services" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    All Services
                  </Link>
                  <Link 
                    href="/services/buying" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Home Buying
                  </Link>
                  <Link 
                    href="/services/selling" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Home Selling
                  </Link>
                  <Link 
                    href="/services/investment" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Investment Consulting
                  </Link>
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2">Resources</div>
                <div className="ml-4 space-y-1">
                  <Link 
                    href="/#search-homes" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Search Listings
                  </Link>
                  <Link 
                    href="/buyers-guide" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Buyer's Guide
                  </Link>
                  <Link 
                    href="/homebuying-process" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Homebuying Process
                  </Link>
                  <Link 
                    href="/vip-buyer-program" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    VIP Partnership
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Blog & News
                  </Link>
                  <Link 
                    href="/testimonials" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Testimonials
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link 
                    href="/properties" 
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Property Search
                  </Link>
                </div>
              </div>

              <Link 
                href="/about" 
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                About Dr. Jan
              </Link>
              
              <Link 
                href="/contact" 
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>

              <Link 
                href="/vip-buyer-program"
                className="block mx-4 mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm text-center"
              >
                ⭐ VIP ACCESS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
