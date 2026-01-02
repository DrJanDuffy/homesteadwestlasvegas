import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plan 3336 Floor Plan | Homestead West Las Vegas | Dr. Jan Duffy',
  description: 'Explore Plan 3336 at Homestead West Las Vegas. Luxury ranch home with premium features. Dr. Jan Duffy VIP new construction partnership.',
  keywords: [
    'Plan 3336 Homestead West',
    'luxury new construction floor plan',
    'Las Vegas new construction',
    'Dr. Jan Duffy VIP partnership',
    'Homestead West floor plans',
    'luxury ranch homes Las Vegas'
  ],
  openGraph: {
    title: 'Plan 3336 Floor Plan | Homestead West Las Vegas',
    description: 'Explore Plan 3336 luxury ranch home at Homestead West with Dr. Jan Duffy VIP partnership.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/floor-plans/3336',
  },
};

export default function Plan3336Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Plan 3336 - Homestead West Las Vegas',
    description: 'Luxury ranch home floor plan at Homestead West Las Vegas',
    brand: {
      '@type': 'Brand',
      name: 'the builder'
    },
    category: 'Real Estate',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        telephone: '+17022221988',
        email: 'DrJanSells@HomesteadWestLasVegas.com',
        licenseNumber: 'S.0197614'
      }
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Square Footage',
        value: '3,336 sq ft'
      },
      {
        '@type': 'PropertyValue',
        name: 'Bedrooms',
        value: '4'
      },
      {
        '@type': 'PropertyValue',
        name: 'Bathrooms',
        value: '3'
      }
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
        <header className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4">Plan 3336</h1>
              <p className="text-xl text-blue-100">Luxury Ranch Home Design</p>
              <p className="text-lg text-blue-200 mt-2">Dr. Jan Duffy | Nevada License S.0197614</p>
            </div>
          </div>
        </header>

        {/* VIP Partnership */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                ⭐ VIP NEW CONSTRUCTION PROGRAM ⭐
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Exclusive Access to Plan 3336</h2>
              <p className="text-xl text-gray-700 mb-8">
                Dr. Jan Duffy's VIP new construction partnership provides exclusive access to Plan 3336 
                with insider pricing, priority lot selection, and personalized service.
              </p>
            </div>
          </div>
        </section>

        {/* Floor Plan Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Plan 3336 Features</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-blue-600 font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Spacious Living</h3>
                        <p className="text-gray-600">3,336 square feet of luxury living space</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-green-600 font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">4 Bedrooms</h3>
                        <p className="text-gray-600">Generous bedrooms with walk-in closets</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-purple-600 font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">3 Bathrooms</h3>
                        <p className="text-gray-600">Master suite with luxury bathroom</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-yellow-600 font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Open Concept</h3>
                        <p className="text-gray-600">Modern open floor plan design</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-red-600 font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Premium Features</h3>
                        <p className="text-gray-600">High-end finishes and modern amenities</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-8 rounded-xl text-center">
                  <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-gray-500">
                      <div className="text-6xl mb-4">🏠</div>
                      <p className="text-xl font-semibold">Plan 3336 Floor Plan</p>
                      <p className="text-sm">Floor plan image coming soon</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Contact Dr. Jan Duffy for detailed floor plan and pricing information
                  </p>
                  <a
                    href="tel:7022221988"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    📞 Call Dr. Jan: (702) 222-1988
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIP Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">VIP Partnership Benefits</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Insider Pricing</h3>
                  <p className="text-gray-600">
                    Access to exclusive pricing and incentives through VIP partnership
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Priority Selection</h3>
                  <p className="text-gray-600">
                    First access to premium lots and customization options
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Personal Service</h3>
                  <p className="text-gray-600">
                    Dedicated support throughout the entire homebuying process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Available Homes in Las Vegas
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
            </p>
            
            <div className="max-w-7xl mx-auto">
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_HIGH" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="400000" 
                price-max="700000"
              />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Interested in Plan 3336?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact Dr. Jan Duffy for exclusive access to Plan 3336 with VIP new construction partnership
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022221988"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  📞 Call Dr. Jan: (702) 222-1988
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
