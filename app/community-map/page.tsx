import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Map | Homestead West Las Vegas | Available Lots & Homesites',
  description: 'Explore Homestead West community map with available lots and homesites. Interactive map showing pool-sized lots, floor plan locations, and community layout by Century Communities.',
  keywords: [
    'Homestead West community map',
    'Las Vegas homesites map',
    'Century Communities lots',
    'Homestead West available lots',
    'Las Vegas new home lots',
    'pool-sized lots Las Vegas'
  ],
  openGraph: {
    title: 'Community Map | Homestead West Las Vegas',
    description: 'Explore Homestead West community map with available lots and homesites by Century Communities.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/community-map',
  },
};

export default function CommunityMapPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Map',
    name: 'Homestead West Community Map',
    description: 'Interactive map showing available lots and homesites at Homestead West',
    url: 'https://homesteadwestlasvegas.com/community-map',
    provider: {
      '@type': 'Organization',
      name: 'Century Communities'
    },
    about: {
      '@type': 'RealEstateListing',
      name: 'Homestead West | Homes by Dr Jan Duffy',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5592 N Dapple Gray Rd',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89149',
        addressCountry: 'US'
      }
    }
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4">Community Map</h1>
              <p className="text-xl text-blue-100">Explore Available Lots & Homesites</p>
              <p className="text-lg text-blue-200 mt-2">5592 N Dapple Gray Rd, Las Vegas, NV 89149</p>
            </div>
          </div>
        </header>

        {/* Interactive Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Homestead West Community Layout</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Explore the interactive map to see available lots, floor plan locations, and community amenities
                </p>
              </div>

              {/* Century Communities Interactive Map */}
              <div className="bg-gray-100 rounded-lg p-4 mb-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.centurycommunities.com/viewport-map/?brand=CCS&communityId=00011156"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Homestead West Community Map"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

              {/* Map Instructions */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Available Lots</h3>
                  <p className="text-gray-600">
                    Click on available lots to see pricing, floor plan options, and lot specifications.
                  </p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Floor Plan Locations</h3>
                  <p className="text-gray-600">
                    See where Plan 3336 and Plan 3704 homes can be built throughout the community.
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🗺️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Community Layout</h3>
                  <p className="text-gray-600">
                    Understand the overall community design and proximity to amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lot Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Lot Features & Amenities</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Lot Characteristics</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Pool-sized lots for outdoor living</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Optional detached casita locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Multi-generational layout options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Extended patio options (12' or 14')</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Community Amenities</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>9 miles to Red Rock Canyon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>18 miles to Downtown Las Vegas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>23 miles to Mount Charleston</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>Quick access to US 95 & CC 215</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Jan Duffy Contact */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Find Your Perfect Lot?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Contact Dr. Jan Duffy for expert guidance on lot selection and floor plan placement
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Dr. Jan Duffy</h3>
                  <div className="space-y-3">
                    <p><span className="font-semibold">Phone:</span> (702) 222-1988</p>
                    <p><span className="font-semibold">Email:</span> DrJanSells@HomesteadWestLasVegas.com</p>
                    <p><span className="font-semibold">Office:</span> Century Communities Sales Office</p>
                    <p><span className="font-semibold">License:</span> Nevada S.0197614</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Why Work With Dr. Jan?</h3>
                  <ul className="space-y-2 text-gray-700 text-left">
                    <li>• Independent agent representing YOUR interests</li>
                    <li>• Office at Century Communities sales office</li>
                    <li>• Direct access to lot availability and pricing</li>
                    <li>• Market expertise and negotiation power</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022221988"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                >
                  📞 Call Dr. Jan: (702) 222-1988
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors"
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
