import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Better font loading performance
  preload: true,
  fallback: ['Arial', 'Helvetica', 'sans-serif'], // Fallback fonts
  adjustFontFallback: true, // Better fallback rendering
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.homesteadwestlasvegas.com'),
  
  title: {
    default: "Homestead West Las Vegas | $910K+ Ranch Homes | Dr. Jan Duffy Real Estate",
    template: "%s | Homestead West Las Vegas"
  },
  
  description: "Homestead West: 3,336-3,704 sq ft luxury ranch homes on pool-sized lots in Northwest Las Vegas. Expert guidance from Dr. Jan Duffy. Starting at $910,990. Call (702) 299-6607.",
  
      keywords: [
        "Homestead West",
        "Homestead West Las Vegas",
        "luxury new construction Las Vegas",
        "Northwest Las Vegas homes",
        "Las Vegas ranch homes",
        "new homes Las Vegas",
        "pool-sized lots Las Vegas",
        "single story homes Las Vegas",
        "luxury homes Las Vegas",
        "5592 N Dapple Gray Rd",
        "Dr. Jan Duffy",
        "Las Vegas real estate",
        "89149 zip code homes",
        "VIP New Construction Homes Specialist",
        "new construction Las Vegas",
        "Las Vegas homebuyer guide",
        "VIP buyer program",
        "Las Vegas real estate expert",
        "Nevada real estate license S.0197614"
      ],

  authors: [{ name: "Dr. Jan Duffy" }],
  creator: "Dr. Jan Duffy",
  publisher: "Homestead West | Homes by Dr Jan Duffy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homesteadwestlasvegas.com',
    siteName: 'Homestead West Las Vegas',
    title: 'Homestead West Las Vegas | $910K+ Ranch Homes',
    description: '$910K+ luxury ranch homes on pool-sized lots in Northwest Las Vegas. 3,336-3,704 sq ft. Expert guidance from Dr. Jan Duffy. Call (702) 299-6607.',
    images: [
      {
        url: 'https://www.homesteadwestlasvegas.com/images/Dr. Duffy Blue_Headshot.jpg',
        width: 750,
        height: 752,
        alt: 'Dr. Jan Duffy - VIP New Construction Homes Specialist | Homestead West Las Vegas',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Homestead West Las Vegas | $910K+ Ranch Homes',
    description: 'Luxury ranch homes on pool-sized lots in Northwest Las Vegas. Expert real estate guidance from Dr. Jan Duffy.',
    images: ['https://www.homesteadwestlasvegas.com/images/Dr. Duffy Blue_Headshot.jpg'],
  },

      verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION || 'your-google-verification-code-here',
      },

  alternates: {
    canonical: 'https://www.homesteadwestlasvegas.com/',
    types: {
      'application/rss+xml': '/blog/rss.xml',
    },
  },

  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.2738;-115.3089',
    'ICBM': '36.2738, -115.3089',
    // AEO: AI-friendly meta tags
    'subject': 'Homestead West new construction homes Las Vegas',
    'topic': 'Real Estate, New Construction, Las Vegas',
    'coverage': 'Las Vegas, Nevada, Northwest Las Vegas, 89149',
    'classification': 'Real Estate Listing Service',
    'category': 'Real Estate > Residential > New Construction',
    'revised': '2026-01-19',
    'date': '2026-01-19',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data for RealEstateListing
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Homestead West | Homes by Dr Jan Duffy',
    description: '$910K+ ranch-style homes on pool-sized lots in Northwest Las Vegas',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5592 N Dapple Gray Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89149',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2738,
      longitude: -115.3089
    },
    telephone: '+17022996607',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    url: 'https://www.homesteadwestlasvegas.com',
    image: 'https://www.homesteadwestlasvegas.com/og-image.jpg',
    priceRange: '$910,990 - $940,990',
    numberOfRooms: '4-5',
    floorSize: {
      '@type': 'QuantitativeValue',
      value: '3336-3704',
      unitText: 'square feet'
    },
        agent: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          telephone: '+17022996607',
          email: 'DrJanSells@HomesteadWestLasVegas.com',
          image: 'https://www.homesteadwestlasvegas.com/images/Dr. Duffy Blue_Headshot.jpg',
          priceRange: '$850,000-$990,000',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '5592 N Dapple Gray Rd',
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            postalCode: '89149',
            addressCountry: 'US'
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Las Vegas',
              '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
            },
            {
              '@type': 'City',
              name: 'Henderson',
              '@id': 'https://en.wikipedia.org/wiki/Henderson,_Nevada'
            },
            {
              '@type': 'City',
              name: 'North Las Vegas',
              '@id': 'https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada'
            }
          ],
          knowsAbout: [
            'Homestead West',
            'Northwest Las Vegas Real Estate',
            'Luxury Ranch Homes',
            'New Construction Homes',
            'VIP New Construction Homes Specialist',
            'Cadence Henderson',
            'Las Vegas Market Analysis'
          ],
          jobTitle: 'VIP New Construction Specialist',
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            name: 'Nevada Real Estate License',
            credentialCategory: 'license',
            credentialId: 'S.0197614',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Nevada Real Estate Division'
            }
          },
          worksFor: {
            '@type': 'Organization',
            name: 'Homestead West | Homes by Dr Jan Duffy'
          },
          memberOf: {
            '@type': 'Organization',
            name: 'Las Vegas Association of Realtors'
          }
        },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '910990',
      highPrice: '940990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      offerCount: '2'
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pool-sized lots',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification', 
        name: 'Single-story ranch homes',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Optional detached casita',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Multi-generational layouts available',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '3-5 car garage',
        value: true
      }
    ],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Community',
        value: 'Homestead West'
      },
      {
        '@type': 'PropertyValue',
        name: 'Zip Code',
        value: '89149'
      }
    ],
        nearbyPlaces: [
          {
            '@type': 'TouristAttraction',
            name: 'Red Rock Canyon National Conservation Area',
            description: '9 miles away'
          },
          {
            '@type': 'Place',
            name: 'Downtown Las Vegas',
            description: '18 miles away'
          },
          {
            '@type': 'Place',
            name: 'Mount Charleston',
            description: '23 miles away'
          },
          {
            '@type': 'School',
            name: 'Dean LaMar Allen Elementary',
            description: '~1 mile away, Grades K-5, GreatSchools 6/10',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '8680 W Hammer Ln',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89149',
              addressCountry: 'US'
            }
          },
          {
            '@type': 'School',
            name: 'Justice Myron E. Leavitt Middle School',
            description: '1.5 miles away, Grades 6-8, ~1,400 students'
          },
          {
            '@type': 'School',
            name: 'Centennial High School',
            description: 'Grades 9-12, GreatSchools 4/10, Niche B, 91% graduation rate, #1 in Nevada for Best High Schools for Athletes'
          },
          {
            '@type': 'Hospital',
            name: 'Centennial Hills Hospital',
            description: '3.8 miles away',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '6900 N Durango Dr',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89149',
              addressCountry: 'US'
            }
          }
        ],
        hasMap: 'https://maps.google.com/?q=5592+N+Dapple+Gray+Rd,+Las+Vegas,+NV+89149',
        sameAs: [
          'https://www.homesteadwestlasvegas.com',
          'https://www.homesteadwestlasvegas.com/vip-buyer-program',
          'https://www.homesteadwestlasvegas.com/about',
          'https://www.homesteadwestlasvegas.com/contact',
          'https://www.homesteadwestlasvegas.com/floor-plans',
          'https://www.homesteadwestlasvegas.com/community',
          'https://www.homesteadwestlasvegas.com/services',
          'https://www.homesteadwestlasvegas.com/buyers-guide',
          'https://www.homesteadwestlasvegas.com/homebuying-process'
        ]
  };

      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.homesteadwestlasvegas.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Homestead West Las Vegas',
            item: 'https://www.homesteadwestlasvegas.com'
          }
        ]
      };

      // Removed duplicate RealEstateAgent - using @graph version instead

      return (
        <html lang="en">
          <head>
            {/* Preconnect to external resources for faster loading */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://em.realscout.com" />
            <link rel="preconnect" href="https://www.realscout.com" />
            <link rel="preconnect" href="https://assets.calendly.com" />
            <link rel="dns-prefetch" href="https://em.realscout.com" />
            <link rel="dns-prefetch" href="https://www.realscout.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://assets.calendly.com" />
            {/* Google Analytics - Deferred and optimized to reduce unused JS */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    // Defer Google Analytics until after page is fully interactive
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    
                    // Only initialize after user interaction or extended idle time
                    function loadGA() {
                      if (window.gtagLoaded) return;
                      window.gtagLoaded = true;
                      
                      gtag('js', new Date());
                      const script = document.createElement('script');
                      script.async = true;
                      script.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}';
                      script.defer = true;
                      document.head.appendChild(script);
                      
                      // Delay config until script loads
                      script.onload = function() {
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}', {
                          send_page_view: false
                        });
                      };
                    }
                    
                    // Load on user interaction (more efficient than on load)
                    // Only load GA after significant user engagement to reduce unused JS
                    var interactionCount = 0;
                    ['mousedown', 'touchstart', 'keydown', 'scroll'].forEach(function(event) {
                      window.addEventListener(event, function() {
                        interactionCount++;
                        // Only load after 3+ interactions or scroll depth > 50%
                        if (!window.gtagLoaded && (interactionCount >= 3 || (event === 'scroll' && (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) > 0.5))) {
                          loadGA();
                        }
                      }, { once: false, passive: true });
                    });
                    
                    // Fallback: load after page is idle for 5 seconds (increased from 2s)
                    if ('requestIdleCallback' in window) {
                      requestIdleCallback(function() {
                        setTimeout(function() {
                          if (!window.gtagLoaded && document.readyState === 'complete') {
                            loadGA();
                          }
                        }, 5000);
                      }, { timeout: 6000 });
                    } else {
                      setTimeout(function() {
                        if (document.readyState === 'complete' && !window.gtagLoaded) {
                          loadGA();
                        }
                      }, 5000);
                    }
                  })();
                `,
              }}
            />

            {/* Structured Data - RealEstateListing */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />

            {/* Structured Data - BreadcrumbList */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbData),
              }}
            />

            {/* Removed duplicate RealEstateAgent schema - consolidated in @graph */}

            {/* Structured Data - @graph (RealEstateAgent, LocalBusiness, Organization, WebSite, SiteNavigationElement) */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@graph': [
                    {
                      '@type': 'RealEstateAgent',
                      '@id': 'https://www.homesteadwestlasvegas.com/#agent',
                      name: 'Dr. Jan Duffy',
                      description: 'Las Vegas Real Estate Expert with 30+ years experience, Ph.D. in Market Research & Consumer Behavior, $127M+ in sales serving 500+ Vegas families',
                      telephone: '+17022996607',
                      email: 'DrJanSells@HomesteadWestLasVegas.com',
                      url: 'https://www.homesteadwestlasvegas.com',
                      image: 'https://www.homesteadwestlasvegas.com/images/Dr. Duffy Blue_Headshot.jpg',
                      priceRange: '$850,000-$990,000',
                      address: {
                        '@type': 'PostalAddress',
                        streetAddress: '5592 N Dapple Gray Rd',
                        addressLocality: 'Las Vegas',
                        addressRegion: 'NV',
                        postalCode: '89149',
                        addressCountry: 'US'
                      },
                      areaServed: {
                        '@type': 'City',
                        name: 'Las Vegas',
                        containedInPlace: {
                          '@type': 'State',
                          name: 'Nevada'
                        }
                      },
                      knowsAbout: ['New Construction Homes', 'VIP New Construction Homes Specialist', 'Northwest Las Vegas', 'Homestead West', 'Luxury Ranch Homes'],
                      hasCredential: [
                        {
                          '@type': 'EducationalOccupationalCredential',
                          credentialCategory: 'degree',
                          educationalLevel: 'Ph.D. in Market Research & Consumer Behavior'
                        },
                        {
                          '@type': 'EducationalOccupationalCredential',
                          credentialCategory: 'license',
                          name: 'Nevada Real Estate License S.0197614'
                        }
                      ],
                      memberOf: {
                        '@type': 'Organization',
                        name: 'Berkshire Hathaway HomeServices Nevada Properties'
                      }
                    },
                    {
                      '@type': 'LocalBusiness',
                      '@id': 'https://www.homesteadwestlasvegas.com/#business',
                      name: 'Dr. Jan Duffy - Las Vegas Real Estate Expert',
                      alternateName: 'Homestead West Las Vegas Real Estate',
                      description: 'Expert guidance for Homestead West luxury ranch homes from VIP New Construction Homes Specialist in Northwest Las Vegas. Home builder serving Henderson and Las Vegas areas.',
                      telephone: '+17022996607',
                      email: 'DrJanSells@HomesteadWestLasVegas.com',
                      url: 'https://www.homesteadwestlasvegas.com',
                      image: 'https://www.homesteadwestlasvegas.com/images/Dr. Duffy Blue_Headshot.jpg',
                      logo: 'https://www.homesteadwestlasvegas.com/images/bhhs-logo.svg',
                      priceRange: '$850,000-$990,000',
                      address: {
                        '@type': 'PostalAddress',
                        streetAddress: '5592 N Dapple Gray Rd',
                        addressLocality: 'Las Vegas',
                        addressRegion: 'NV',
                        postalCode: '89149',
                        addressCountry: 'US'
                      },
                      geo: {
                        '@type': 'GeoCoordinates',
                        latitude: 36.2738,
                        longitude: -115.3089
                      },
                      areaServed: [
                        {
                          '@type': 'City',
                          name: 'Las Vegas',
                          containedInPlace: {
                            '@type': 'State',
                            name: 'Nevada'
                          }
                        },
                        {
                          '@type': 'City',
                          name: 'Henderson',
                          containedInPlace: {
                            '@type': 'State',
                            name: 'Nevada'
                          }
                        }
                      ],
                      openingHoursSpecification: [
                        {
                          '@type': 'OpeningHoursSpecification',
                          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                          opens: '09:00',
                          closes: '18:00'
                        },
                        {
                          '@type': 'OpeningHoursSpecification',
                          dayOfWeek: 'Saturday',
                          opens: '10:00',
                          closes: '16:00'
                        }
                      ],
                      hasCredential: {
                        '@type': 'EducationalOccupationalCredential',
                        credentialCategory: 'license',
                        name: 'Nevada Real Estate License S.0197614'
                      },
                      foundingDate: '2022',
                      numberOfEmployees: {
                        '@type': 'QuantitativeValue',
                        value: '1'
                      },
                      serviceArea: {
                        '@type': 'GeoCircle',
                        geoMidpoint: {
                          '@type': 'GeoCoordinates',
                          latitude: 36.2738,
                          longitude: -115.3089
                        },
                        geoRadius: {
                          '@type': 'Distance',
                          value: '50',
                          unitCode: 'MI'
                        }
                      }
                    },
                    {
                      '@type': 'Organization',
                      '@id': 'https://www.homesteadwestlasvegas.com/#organization',
                      name: 'Dr. Jan Duffy Real Estate',
                      alternateName: 'Homestead West Las Vegas Real Estate',
                      url: 'https://www.homesteadwestlasvegas.com',
                      logo: 'https://www.homesteadwestlasvegas.com/images/bhhs-logo.svg',
                      image: 'https://www.homesteadwestlasvegas.com/images/Dr. Duffy Blue_Headshot.jpg',
                      address: {
                        '@type': 'PostalAddress',
                        streetAddress: '5592 N Dapple Gray Rd',
                        addressLocality: 'Las Vegas',
                        addressRegion: 'NV',
                        postalCode: '89149',
                        addressCountry: 'US'
                      },
                      contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '+17022996607',
                        contactType: 'Customer Service',
                        areaServed: ['US'],
                        availableLanguage: ['English']
                      },
                      sameAs: [
                        'https://www.homesteadwestlasvegas.com',
                        'https://www.homesteadwestlasvegas.com/vip-buyer-program',
                        'https://www.homesteadwestlasvegas.com/about',
                        'https://www.homesteadwestlasvegas.com/contact'
                      ],
                      memberOf: {
                        '@type': 'Organization',
                        name: 'Berkshire Hathaway HomeServices Nevada Properties'
                      }
                    },
                    {
                      '@type': 'WebSite',
                      '@id': 'https://www.homesteadwestlasvegas.com/#website',
                      url: 'https://www.homesteadwestlasvegas.com',
                      name: 'Homestead West Las Vegas - Dr. Jan Duffy',
                      description: 'Expert guidance for Homestead West luxury ranch homes from VIP New Construction Homes Specialist',
                      publisher: {
                        '@id': 'https://www.homesteadwestlasvegas.com/#business'
                      },
                      inLanguage: 'en-US',
                      potentialAction: {
                        '@type': 'SearchAction',
                        target: {
                          '@type': 'EntryPoint',
                          urlTemplate: 'https://www.homesteadwestlasvegas.com/properties?q={search_term_string}'
                        },
                        'query-input': 'required name=search_term_string'
                      }
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      '@id': 'https://www.homesteadwestlasvegas.com/#navigation',
                      name: 'Main Navigation',
                      url: 'https://www.homesteadwestlasvegas.com',
                      hasPart: [
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Home',
                          url: 'https://www.homesteadwestlasvegas.com'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'New Homes, Prime Locations',
                          url: 'https://www.homesteadwestlasvegas.com/properties',
                          description: 'Browse available Homestead West homes and Las Vegas MLS listings'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Single-Story & Two-Story Homes',
                          url: 'https://www.homesteadwestlasvegas.com/floor-plans',
                          description: 'Explore Homestead West floor plans: 3,336-3,704 sq ft luxury ranch homes'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Nevada Is The Perfect Place To Make Memories. Communities With Parks, Recreation & More!',
                          url: 'https://www.homesteadwestlasvegas.com/community',
                          description: 'Discover Homestead West community amenities, parks, schools, and nearby attractions'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Community',
                          hasPart: [
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Community Guide',
                              url: 'https://www.homesteadwestlasvegas.com/community'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Community Map',
                              url: 'https://www.homesteadwestlasvegas.com/community-map'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Virtual Tour',
                              url: 'https://www.homesteadwestlasvegas.com/virtual-tour'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Location & Office',
                              url: 'https://www.homesteadwestlasvegas.com/location/las-vegas-office'
                            }
                          ]
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Services',
                          hasPart: [
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'All Services',
                              url: 'https://www.homesteadwestlasvegas.com/services'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Home Buying',
                              url: 'https://www.homesteadwestlasvegas.com/services/buying'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Home Selling',
                              url: 'https://www.homesteadwestlasvegas.com/services/selling'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Investment Consulting',
                              url: 'https://www.homesteadwestlasvegas.com/services/investment'
                            }
                          ]
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Resources',
                          hasPart: [
                            {
                              '@type': 'SiteNavigationElement',
                              name: "Buyer's Guide",
                              url: 'https://www.homesteadwestlasvegas.com/buyers-guide'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Homebuying Process',
                              url: 'https://www.homesteadwestlasvegas.com/homebuying-process'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'VIP New Construction Homes Specialist',
                              url: 'https://www.homesteadwestlasvegas.com/vip-buyer-program'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'FAQ',
                              url: 'https://www.homesteadwestlasvegas.com/faq'
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Testimonials',
                              url: 'https://www.homesteadwestlasvegas.com/testimonials'
                            }
                          ]
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'About Dr. Jan',
                          url: 'https://www.homesteadwestlasvegas.com/about'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Contact Us',
                          url: 'https://www.homesteadwestlasvegas.com/contact',
                          description: 'Get in touch with Dr. Jan Duffy for expert real estate guidance'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Homeowner Reviews',
                          url: 'https://www.homesteadwestlasvegas.com/testimonials',
                          description: 'Read what clients say about working with Dr. Jan Duffy'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Now\'s The Time To Make Your Move To Nevada. Homes From A Top U.S. Homebuilder.',
                          url: 'https://www.homesteadwestlasvegas.com/vip-buyer-program',
                          description: 'Get VIP access to new construction homes with exclusive buyer representation'
                        }
                      ]
                    }
                  ]
                }),
              }}
            />

            {/* RealScout Widget Script - Loaded asynchronously to prevent render blocking */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  realscout-advanced-search {
                    --rs-as-button-text-color: #ffffff;
                    --rs-as-background-color: #ffffff;
                    --rs-as-button-color: #1a365d;
                    --rs-as-button-hover-color: #0f2439;
                    --rs-as-border-color: #e2e8f0;
                    --rs-as-text-color: #1a365d;
                    --rs-as-widget-width: 100% !important;
                    max-width: 100% !important;
                    width: 100% !important;
                  }
                  @media (min-width: 768px) {
                    realscout-advanced-search {
                      --rs-as-widget-width: 800px !important;
                      max-width: 800px !important;
                    }
                  }
                  realscout-office-listings {
                    --rs-listing-divider-color: #0e64c8;
                    width: 100%;
                  }
                `
              }}
            />

            {/* Calendly badge widget begin - Deferred to avoid blocking render */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'https://assets.calendly.com/assets/external/widget.css';
                    link.media = 'print';
                    link.onload = function() { this.media = 'all'; };
                    document.head.appendChild(link);
                  })();
                `,
              }}
            />
            <noscript>
              <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            </noscript>
            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" defer></script>
            <script
              type="text/javascript"
              defer
              dangerouslySetInnerHTML={{
                __html: `
                  window.addEventListener('load', function() { 
                    if (window.Calendly) {
                      Calendly.initBadgeWidget({ 
                        url: 'https://calendly.com/drjanduffy', 
                        text: 'Schedule time with Dr. Jan Duffy Today', 
                        color: '#0069ff', 
                        textColor: '#ffffff', 
                        branding: true 
                      });
                    }
                  });
                `,
              }}
            />
            {/* Calendly badge widget end */}
          </head>
          <body className={inter.className}>
            <Navigation />
            {children}
            <Footer />
            {/* RealScout script is now loaded by RealScoutListings component when needed */}
          </body>
        </html>
      );
}