import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plan 3704 | Homestead West Las Vegas | 3,704 Sq Ft Ranch Home',
  description: 'Plan 3704: 3,704 square foot luxury ranch home by Century Communities. 4 bedrooms, 4.5 bathrooms, formal dining room. Starting at $940,990. Download official floor plan PDF.',
  keywords: [
    'Plan 3704 Homestead West',
    '3704 floor plan Las Vegas',
    'Century Communities Plan 3704',
    '3,704 sq ft ranch home',
    'Las Vegas luxury home plan',
    'single story home 3704'
  ],
  openGraph: {
    title: 'Plan 3704 | Homestead West Las Vegas',
    description: 'Plan 3704: 3,704 square foot luxury ranch home by Century Communities. Starting at $940,990.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/floor-plans/3704',
  },
};

export default function Plan3704Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Plan 3704 - Homestead West',
    description: '3,704 square foot single-story ranch home by Century Communities',
    brand: {
      '@type': 'Brand',
      name: 'Century Communities'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Century Communities'
    },
    offers: {
      '@type': 'Offer',
      price: '940990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Homestead West | Homes by Dr Jan Duffy'
      }
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Square Feet',
        value: '3704'
      },
      {
        '@type': 'PropertyValue',
        name: 'Bedrooms',
        value: '4'
      },
      {
        '@type': 'PropertyValue',
        name: 'Bathrooms',
        value: '4.5'
      },
      {
        '@type': 'PropertyValue',
        name: 'Garage',
        value: '3-5 car'
      },
      {
        '@type': 'PropertyValue',
        name: 'Home Type',
        value: 'Single-story ranch'
      },
      {
        '@type': 'PropertyValue',
        name: 'Lot Size',
        value: 'Pool-sized'
      }
    ],
    image: 'https://homesteadwestlasvegas.com/og-image.jpg',
    url: 'https://homesteadwestlasvegas.com/floor-plans/3704'
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
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-5xl font-bold mb-2">Plan 3704</h1>
                  <p className="text-xl text-blue-100">Most Popular Floor Plan</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold">From $940,990</p>
                  <p className="text-blue-200">Starting Price</p>
                </div>
              </div>
              <p className="text-lg text-blue-200">5592 N Dapple Gray Rd, Las Vegas, NV 89149</p>
            </div>
          </div>
        </header>

        {/* Plan Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Specifications */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Plan Specifications</h2>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <p className="text-4xl font-bold text-blue-600 mb-2">3,704</p>
                      <p className="text-gray-700 font-semibold">Square Feet</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <p className="text-4xl font-bold text-green-600 mb-2">4</p>
                      <p className="text-gray-700 font-semibold">Bedrooms</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg text-center">
                      <p className="text-4xl font-bold text-purple-600 mb-2">4.5</p>
                      <p className="text-gray-700 font-semibold">Bathrooms</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg text-center">
                      <p className="text-4xl font-bold text-orange-600 mb-2">3-5</p>
                      <p className="text-gray-700 font-semibold">Car Garage</p>
                    </div>
                  </div>

                    <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 text-2xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Expansive Primary Suite</p>
                          <p className="text-gray-600">Free-standing bathtub, dual vanities, and expansive walk-in closet</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 text-2xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Separate Dining Room</p>
                          <p className="text-gray-600">Perfect for special occasions and formal entertaining</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 text-2xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Great Room for Entertaining</p>
                          <p className="text-gray-600">Spacious living area with breakfast nook and well-appointed kitchen</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 text-2xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Kitchen with Island & Walk-in Pantry</p>
                          <p className="text-gray-600">Modern kitchen design with island and spacious pantry storage</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 text-2xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Four Bedrooms with En-Suite Bathrooms</p>
                          <p className="text-gray-600">Privacy and convenience for every family member</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 text-2xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Sizeable Mudroom & 3-Bay Garage</p>
                          <p className="text-gray-600">Functional entry space and generous parking</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Floor Plan Image/PDF */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Official Floor Plan</h2>
                  
                  <div className="bg-gray-100 rounded-lg p-6 mb-6">
                    <div className="aspect-[4/3] bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-6xl mb-4">📄</p>
                        <p className="text-xl font-semibold text-gray-700 mb-2">Official Floor Plan PDF</p>
                        <p className="text-gray-500 mb-4">Download the detailed floor plan from Century Communities</p>
                        <a
                          href="https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/homestead-ranch/3704/3704-print-1.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          📥 Download PDF
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">About This Plan</h3>
                    <p className="text-gray-700 mb-4">
                      Experience elegance at its finest with Residence 3704 at Homestead West—a stunning single-story home 
                      featuring 3,700 square feet of precise craftsmanship. The welcoming foyer ushers you into the great room, 
                      perfect for entertaining, with a spacious living area, breakfast nook, and a well-appointed kitchen 
                      featuring an island and walk-in pantry.
                    </p>
                    <p className="text-gray-700">
                      For special occasions, enjoy meals in the separate dining room. Four bedrooms, each with its own 
                      en-suite bathroom, offer plenty of privacy, but the primary suite's bathroom stands out with a 
                      free-standing bathtub, dual vanities, and an expansive walk-in closet. Completing the space, a 
                      sizeable mudroom and 3-bay garage perfectly blend luxury with functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Experience Plan 3704</h2>
              <p className="text-xl text-gray-600 mb-8">
                Take a virtual tour to see Plan 3704 in detail, or schedule an in-person visit 
                with Dr. Jan Duffy for expert guidance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="/virtual-tour"
                  className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <div className="text-4xl mb-3">🎥</div>
                  <h3 className="text-xl font-bold mb-2">Virtual Tour</h3>
                  <p className="text-blue-100">Explore the home in 3D from anywhere</p>
                </a>
                
                <a
                  href="tel:7022221988"
                  className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <div className="text-4xl mb-3">📞</div>
                  <h3 className="text-xl font-bold mb-2">Schedule Tour</h3>
                  <p className="text-green-100">Call (702) 222-1988 for in-person visit</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Jan Duffy - Your Real Estate Expert */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Dr. Jan Duffy - Your Real Estate Expert</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Dr. Jan Duffy</h3>
                  <div className="space-y-3">
                    <p><span className="font-semibold">Phone:</span> (702) 222-1988</p>
                    <p><span className="font-semibold">Email:</span> DrJanSells@HomesteadWestLasVegas.com</p>
                    <p><span className="font-semibold">Office:</span> Century Communities Sales Office</p>
                    <p><span className="font-semibold">Address:</span> 5592 N Dapple Gray Rd, Las Vegas, NV 89149</p>
                    <p><span className="font-semibold">License:</span> Nevada S.0197614</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Why Work With Dr. Jan Duffy?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Independent real estate expert representing YOUR interests</li>
                    <li>• Office located at Century Communities sales office</li>
                    <li>• Direct access to builder information and resources</li>
                    <li>• Market expertise and negotiation power</li>
                    <li>• Las Vegas real estate specialist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Plan 3704?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact Dr. Jan Duffy for expert guidance on your Homestead West home purchase
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
              
              <div className="mt-8 text-blue-200">
                <p className="text-lg font-semibold">Dr. Jan Duffy</p>
                <p>Las Vegas Real Estate Expert | Nevada License S.0197614</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
                <p className="mt-4 text-sm">
                  Independent real estate agent providing expert guidance to home buyers. 
                  Not affiliated with or endorsed by Century Communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
