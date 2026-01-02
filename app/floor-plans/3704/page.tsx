import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';

export const metadata: Metadata = {
  title: 'Available Homes | Homestead West Las Vegas | MLS Listings',
  description: 'Browse current available homes in Las Vegas MLS. Updated daily with the latest properties from Homestead West and surrounding areas.',
  keywords: [
    'available homes Las Vegas',
    'Las Vegas MLS listings',
    'Homestead West homes',
    'Las Vegas real estate listings',
    'new construction homes Las Vegas'
  ],
  openGraph: {
    title: 'Available Homes | Homestead West Las Vegas',
    description: 'Browse current available homes in Las Vegas MLS. Updated daily with the latest properties.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/floor-plans/3704',
  },
};

export default function Plan3704Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
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
      name: 'Las Vegas'
    },
    knowsAbout: [
      'Las Vegas Real Estate',
      'MLS Listings',
      'New Construction Homes',
      'Homestead West'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Available Homes</h1>
            <p className="text-xl text-blue-100">Las Vegas MLS Listings - Updated Daily</p>
            <p className="text-lg text-blue-200 mt-2">5592 N Dapple Gray Rd, Las Vegas, NV 89149</p>
          </div>
        </header>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                Available Homes in Las Vegas
              </h2>
              <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
              </p>
              
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-blue-900 text-white py-12 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h3>
              <p className="text-xl mb-8 text-blue-100">
                Contact Dr. Jan Duffy for expert guidance on your Las Vegas home search
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7022221988"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  📞 Call (702) 222-1988
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
