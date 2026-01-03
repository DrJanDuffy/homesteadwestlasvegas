import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
        "VIP new construction partnership",
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
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Homestead West Las Vegas Ranch Homes',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Homestead West Las Vegas | $910K+ Ranch Homes',
    description: 'Luxury ranch homes on pool-sized lots in Northwest Las Vegas. Expert real estate guidance from Dr. Jan Duffy.',
    images: ['/twitter-image.jpg'],
  },

      verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION || 'your-google-verification-code-here',
      },

  alternates: {
    canonical: 'https://www.homesteadwestlasvegas.com/',
  },

  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.2738;-115.3089',
    'ICBM': '36.2738, -115.3089',
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
          image: 'https://www.homesteadwestlasvegas.com/images/dr-jan-duffy.jpg',
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
            'VIP Builder Partnerships',
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
            name: 'Dean Lamar Allen Elementary',
            description: '2.1 miles away'
          },
          {
            '@type': 'School',
            name: 'Centennial High School',
            description: '4.1 miles away'
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
            {/* Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}');
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

            {/* Structured Data - @graph (RealEstateAgent, LocalBusiness, FAQPage, WebSite) */}
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
                      telephone: '(702) 299-6607',
                      email: 'DrJanSells@HomesteadWestLasVegas.com',
                      url: 'https://www.homesteadwestlasvegas.com',
                      image: 'https://www.homesteadwestlasvegas.com/images/dr-jan-duffy.jpg',
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
                      knowsAbout: ['New Construction Homes', 'New Construction Partnership', 'Northwest Las Vegas', 'Homestead West', 'Luxury Ranch Homes'],
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
                      '@type': 'RealEstateAgent',
                      '@id': 'https://www.homesteadwestlasvegas.com/#business',
                      name: 'Dr. Jan Duffy - Las Vegas Real Estate Expert',
                      description: 'Expert guidance for Homestead West luxury ranch homes by New Construction Partnership in Northwest Las Vegas',
                      telephone: '(702) 299-6607',
                      email: 'DrJanSells@HomesteadWestLasVegas.com',
                      url: 'https://www.homesteadwestlasvegas.com',
                      image: 'https://www.homesteadwestlasvegas.com/images/dr-jan-duffy.jpg',
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
                        latitude: 36.2839,
                        longitude: -115.2936
                      },
                      areaServed: {
                        '@type': 'City',
                        name: 'Las Vegas',
                        containedInPlace: {
                          '@type': 'State',
                          name: 'Nevada'
                        }
                      },
                      hasCredential: {
                        '@type': 'EducationalOccupationalCredential',
                        credentialCategory: 'license',
                        name: 'Nevada Real Estate License S.0197614'
                      }
                    },
                    {
                      '@type': 'FAQPage',
                      '@id': 'https://www.homesteadwestlasvegas.com/#faq',
                      mainEntity: [
                        {
                          '@type': 'Question',
                          name: 'What are Homestead West home prices in 2026?',
                          acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Homestead West by the builder starts at $910,990 for Plan 3336 (3,336 sq ft, 4-5 beds, 4.5 baths) and $940,990 for Plan 3704 (3,704 sq ft, 4 beds, 4.5 baths). Both are single-story luxury ranch homes on pool-sized lots with optional detached casitas.'
                          }
                        },
                        {
                          '@type': 'Question',
                          name: 'Where is Homestead West located in Las Vegas?',
                          acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Homestead West is located at 5592 N Dapple Gray Rd, Las Vegas, NV 89149, in Northwest Las Vegas. The community offers quick access to US 95 and CC 215, is 9 miles to Red Rock Canyon, 18 miles to downtown Las Vegas, and 23 miles to Mount Charleston.'
                          }
                        },
                        {
                          '@type': 'Question',
                          name: 'Do I need a real estate agent to buy at Homestead West?',
                          acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'While not required, working with an independent real estate agent like Dr. Jan Duffy provides buyer representation, expert negotiation, and VIP access through her New Construction Partnership—at no additional cost to buyers. Dr. Jan represents YOUR interests, not the builder\'s.'
                          }
                        },
                        {
                          '@type': 'Question',
                          name: 'What floor plans are available at Homestead West?',
                          acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Homestead West offers two single-story ranch home designs: Plan 3336 (3,336 sq ft, 4-5 beds, 4.5 baths, 3-5 car garage, from $910,990) and Plan 3704 (3,704 sq ft, 4 beds, 4.5 baths, 3-5 car garage, from $940,990). Both feature pool-sized lots with optional detached pool houses or casitas.'
                          }
                        },
                        {
                          '@type': 'Question',
                          name: 'Who is the builder of Homestead West?',
                          acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Homestead West is built by a New Construction Partnership, one of the nation\'s top 10 homebuilders. Known for quality construction, attractive pricing, and a streamlined online homebuying process.'
                          }
                        }
                      ]
                    },
                    {
                      '@type': 'WebSite',
                      '@id': 'https://www.homesteadwestlasvegas.com/#website',
                      url: 'https://www.homesteadwestlasvegas.com',
                      name: 'Homestead West Las Vegas - Dr. Jan Duffy',
                      description: 'Expert guidance for Homestead West luxury ranch homes by New Construction Partnership',
                      publisher: {
                        '@id': 'https://www.homesteadwestlasvegas.com/#agent'
                      }
                    }
                  ]
                }),
              }}
            />

            {/* RealScout Widget Script */}
            <script 
              src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
              type="module"
            />
            
            {/* RealScout Widget Styles */}
            <style dangerouslySetInnerHTML={{
              __html: `
                realscout-office-listings {
                  --rs-listing-divider-color: #0e64c8;
                  width: 100%;
                }
              `
            }} />
          </head>
          <body className={inter.className}>
            <Navigation />
            {children}
            <Footer />
          </body>
        </html>
      );
}