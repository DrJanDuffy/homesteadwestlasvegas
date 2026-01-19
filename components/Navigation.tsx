'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dropdown } from '@/components/ui/Dropdown';
import { MobileMenu } from '@/components/MobileMenu';
import CalendlyLink from '@/components/CalendlyLink';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const communityItems = [
    { href: '/community', label: 'Community Guide' },
    { href: '/community-map', label: 'Community Map' },
    { href: '/virtual-tour', label: 'Virtual Tour' },
    { href: '/location/las-vegas-office', label: 'Location & Office' },
  ];

  const servicesItems = [
    { href: '/services', label: 'All Services' },
    { href: '/services/buying', label: 'Home Buying' },
    { href: '/services/selling', label: 'Home Selling' },
    { href: '/services/investment', label: 'Investment Consulting' },
  ];

  const resourcesItems = [
    { href: '/#search-homes', label: 'Search Listings' },
    { href: '/buyers-guide', label: "Buyer's Guide" },
    { href: '/homebuying-process', label: 'Homebuying Process' },
    { href: '/vip-buyer-program', label: 'VIP Partnership' },
    { href: '/blog', label: 'Blog & News' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/faq', label: 'FAQ' },
    { href: '/properties', label: 'Property Search' },
  ];

  const mobileMenuSections = [
    { label: 'Community', items: communityItems },
    { label: 'Services', items: servicesItems },
    { label: 'Resources', items: resourcesItems },
  ];

  const mobileStandaloneLinks = [
    { href: '/', label: 'Home' },
    { href: '/#available-homes', label: 'Available Homes' },
    { href: '/about', label: 'About Dr. Jan' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <Link
              href="/"
              className={cn(
                'flex items-center space-x-2',
                'hover:opacity-80 transition-opacity duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                'min-h-[44px]'
              )}
            >
              <div className="text-2xl font-bold">
                <span className="text-[#1a365d]">Homestead</span>
                <span className="text-[#b8941f]"> West</span>
              </div>
            </Link>

            {/* Phone Number */}
            <a
              href="tel:7022996607"
              className={cn(
                'flex items-center space-x-2',
                'hover:opacity-80 transition-opacity duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                'min-h-[44px]'
              )}
            >
              <div className="w-10 h-10 bg-[#1a365d] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📞</span>
              </div>
              <div className="text-xl font-bold text-[#1a365d]">
                (702) 299-6607
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  'text-gray-700 hover:text-[#1a365d] font-medium',
                  'transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                  'min-h-[44px] flex items-center px-2'
                )}
              >
                Home
              </Link>

              {/* Available Homes */}
              <Link
                href="/#available-homes"
                className={cn(
                  'text-gray-700 hover:text-[#1a365d] font-medium',
                  'transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                  'min-h-[44px] flex items-center px-2'
                )}
              >
                Available Homes
              </Link>

              {/* Community Dropdown */}
              <Dropdown label="Community" items={communityItems} id="community" />

              {/* Services Dropdown */}
              <Dropdown label="Services" items={servicesItems} id="services" />

              {/* Resources Dropdown */}
              <Dropdown label="Resources" items={resourcesItems} id="resources" />

              {/* About */}
              <Link
                href="/about"
                className={cn(
                  'text-gray-700 hover:text-[#1a365d] font-medium',
                  'transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                  'min-h-[44px] flex items-center px-2'
                )}
              >
                About Dr. Jan
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={cn(
                  'text-gray-700 hover:text-[#1a365d] font-medium',
                  'transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                  'min-h-[44px] flex items-center px-2'
                )}
              >
                Contact
              </Link>

              {/* VIP New Construction Homes Specialist Badge */}
              <Link
                href="/vip-buyer-program"
                className={cn(
                  'bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a365d]',
                  'px-4 py-2 rounded-full font-bold text-sm',
                  'hover:from-[#f4d03f] hover:to-[#d4af37]',
                  'hover:scale-[1.02] active:scale-[0.98]',
                  'transition-all duration-150 shadow-lg',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2',
                  'min-h-[44px] flex items-center'
                )}
              >
                ⭐ VIP ACCESS
              </Link>

              {/* Calendly link widget */}
              <CalendlyLink />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  'text-gray-700 hover:text-[#1a365d]',
                  'transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                  'min-h-[44px] min-w-[44px] flex items-center justify-center',
                  mobileMenuOpen && 'text-[#1a365d]'
                )}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sections={mobileMenuSections}
        standaloneLinks={mobileStandaloneLinks}
      />
    </>
  );
}
