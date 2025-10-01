import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homestead West | Homes by Dr Jan Duffy - $910K+ Ranch Homes Las Vegas",
  description: "$910K+ ranch-style homes on pool-sized lots in Northwest Las Vegas. Dr. Jan Duffy (License S.0197614) - Expert Las Vegas real estate agent.",
  keywords: "Las Vegas real estate, Dr. Jan Duffy, ranch homes, Northwest Las Vegas, $910K homes, pool-sized lots, real estate agent, license S.0197614",
  authors: [{ name: "Dr. Janet Duffy" }],
  creator: "Dr. Janet Duffy",
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
    siteName: 'Homestead West | Homes by Dr Jan Duffy',
    title: 'Homestead West | Homes by Dr Jan Duffy - $910K+ Ranch Homes Las Vegas',
    description: '$910K+ ranch-style homes on pool-sized lots in Northwest Las Vegas. Dr. Jan Duffy - Expert Las Vegas real estate agent.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Janet Duffy - Las Vegas Real Estate Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homestead West | Homes by Dr Jan Duffy - $910K+ Ranch Homes Las Vegas',
    description: '$910K+ ranch-style homes on pool-sized lots in Northwest Las Vegas. Dr. Jan Duffy - Expert Las Vegas real estate agent.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'google-site-verification': 'your-google-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
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
    telephone: '+17022221988',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    url: 'https://homesteadwestlasvegas.com',
    // Google Business Profile compatible data
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 10:00-16:00'
    ],
    priceRange: '$910K-$940K',
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Financing'],
    currenciesAccepted: 'USD',
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
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
      },
      // License information for Google Business Profile
      licenseNumber: 'S.0197614',
      serviceType: ['Real Estate Sales', 'Property Management', 'Real Estate Investment Consulting']
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '910990',
      highPrice: '940990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    // Additional Google Business Profile fields
    sameAs: [
      'https://www.facebook.com/homesteadwestlasvegas',
      'https://www.instagram.com/homesteadwestlasvegas',
      'https://www.linkedin.com/company/homestead-west-las-vegas'
    ],
    hasMap: 'https://maps.google.com/?q=5592+N+Dapple+Gray+Rd,+Las+Vegas,+NV+89149'
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Las Vegas" />
        <meta name="geo.position" content="36.1699;-115.1398" />
        <meta name="ICBM" content="36.1699, -115.1398" />
        
        {/* Business Hours for Google Business Profile */}
        <meta name="business:hours" content="Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 4:00 PM, Sunday: Closed" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
