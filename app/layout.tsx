import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://homesteadwestlasvegas.com'),
  
  title: {
    default: "Homestead West Las Vegas | $910K+ Ranch Homes | Dr. Jan Duffy Real Estate",
    template: "%s | Homestead West Las Vegas"
  },
  
  description: "Homestead West: 3,336-3,704 sq ft luxury ranch homes on pool-sized lots in Northwest Las Vegas. Expert guidance from Dr. Jan Duffy. Starting at $910,990. Call (702) 222-1988.",
  
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
    url: 'https://homesteadwestlasvegas.com',
    siteName: 'Homestead West Las Vegas',
    title: 'Homestead West Las Vegas | $910K+ Ranch Homes',
    description: '$910K+ luxury ranch homes on pool-sized lots in Northwest Las Vegas. 3,336-3,704 sq ft. Expert guidance from Dr. Jan Duffy. Call (702) 222-1988.',
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
    canonical: 'https://homesteadwestlasvegas.com',
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
    telephone: '+17022221988',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    url: 'https://homesteadwestlasvegas.com',
    image: 'https://homesteadwestlasvegas.com/og-image.jpg',
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
          telephone: '+17022221988',
          email: 'DrJanSells@HomesteadWestLasVegas.com',
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
          alumniOf: 'VIP Builder Partner Program',
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
            description: '3.8 miles away'
          }
        ],
        hasMap: 'https://maps.google.com/?q=5592+N+Dapple+Gray+Rd,+Las+Vegas,+NV+89149',
        sameAs: [
          'https://homesteadwestlasvegas.com',
          'https://homesteadwestlasvegas.com/vip-buyer-program',
          'https://homesteadwestlasvegas.com/about'
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
            item: 'https://homesteadwestlasvegas.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Homestead West Las Vegas',
            item: 'https://homesteadwestlasvegas.com'
          }
        ]
      };

      const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        description: 'VIP New Construction Specialist and Las Vegas Real Estate Expert',
        url: 'https://homesteadwestlasvegas.com',
        telephone: '+17022221988',
        email: 'DrJanSells@HomesteadWestLasVegas.com',
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
        serviceType: [
          'Real Estate Sales',
          'New Construction Home Buying',
          'VIP Builder Partnership Services',
          'Real Estate Investment Consulting'
        ],
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
        memberOf: {
          '@type': 'Organization',
          name: 'Las Vegas Association of Realtors'
        },
        knowsAbout: [
          'Homestead West',
          'New Construction Homes',
          'VIP Builder Partnerships',
          'Las Vegas Real Estate Market',
          'Northwest Las Vegas',
          'Cadence Henderson',
          'Luxury Ranch Homes'
        ]
      };

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

            {/* Structured Data - Organization */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationData),
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
          </body>
        </html>
      );
}