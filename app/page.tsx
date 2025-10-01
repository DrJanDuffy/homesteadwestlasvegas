import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. Jan Duffy - Las Vegas Real Estate Expert | Homestead West',
  description: 'Expert Las Vegas real estate agent Dr. Jan Duffy (License S.0197614) helps you buy, sell, and invest in Las Vegas properties. Professional service with local market expertise.',
  keywords: 'Las Vegas real estate, Dr. Jan Duffy, real estate agent, Las Vegas homes, property sales, real estate investment, Homestead West',
  openGraph: {
    title: 'Dr. Jan Duffy - Las Vegas Real Estate Expert',
    description: 'Expert Las Vegas real estate agent Dr. Jan Duffy helps you buy, sell, and invest in Las Vegas properties.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com',
  },
};

export default function HomePage() {
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
    agent: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022221988',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89149',
        addressCountry: 'US'
      },
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
      }
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '910990',
      highPrice: '940990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section - Above the Fold */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Homestead West Las Vegas
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-semibold text-blue-100">
                $910K+ Luxury Ranch Homes on Pool-Sized Lots
              </p>
              <p className="text-xl mb-8 text-blue-50">
                Expert Guidance from Dr. Jan Duffy | Century Communities Partnership
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:7022221988"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  📞 Call: (702) 222-1988
          </a>
          <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg border-2 border-white"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-200">
                5592 N Dapple Gray Rd, Las Vegas, NV 89149
              </p>
            </div>
          </div>
        </section>

        {/* About Homestead West - SEO Content Heavy */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                About Homestead West by Century Communities
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  From <strong>Century Communities</strong>—one of the nation's top 10 homebuilders—<strong>Homestead West</strong> offers exceptional <strong>new homes for sale in Las Vegas, NV</strong>. This prestigious Northwest Las Vegas community features a luxurious lineup of <strong>single-story ranch-style homes</strong> on <strong>pool-sized lots</strong>, with optional detached casitas and multi-generational layouts.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Located at <strong>5592 N Dapple Gray Rd, Las Vegas, NV 89149</strong>, Homestead West combines luxury and convenience for the ideal home in Clark County. Quick access to <strong>US 95 & CC 215</strong> provides easy connectivity to downtown Las Vegas, Red Rock Canyon, and Mount Charleston.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans Comparison - Rich SEO Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Homestead West Floor Plans
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Choose from two stunning single-story ranch home designs, each featuring expansive living spaces, premium finishes, and room for customization
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Plan 3336 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl mb-2">🏡</p>
                    <p className="text-gray-700 font-semibold">Residence 3336</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Plan 3336</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">From $910,990</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900">3,336</p>
                      <p className="text-sm text-gray-600">Square Feet</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900">4-5</p>
                      <p className="text-sm text-gray-600">Bedrooms</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900">4.5</p>
                      <p className="text-sm text-gray-600">Bathrooms</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900">3-5</p>
                      <p className="text-sm text-gray-600">Car Garage</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Open-concept great room with kitchen island</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Primary suite with free-standing tub & dual vanities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Walk-in pantry & spacious laundry room</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Optional detached pool house or casita</span>
                      </li>
                    </ul>
                  </div>

                  <a 
                    href="tel:7022221988"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Learn More About Plan 3336
          </a>
        </div>
              </div>

              {/* Plan 3704 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border-2 border-blue-500">
                <div className="bg-blue-600 text-white text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
                <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl mb-2">🏰</p>
                    <p className="text-gray-700 font-semibold">Residence 3704</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Plan 3704</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">From $940,990</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900">3,704</p>
                      <p className="text-sm text-gray-600">Square Feet</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900">4</p>
                      <p className="text-sm text-gray-600">Bedrooms</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900">4.5</p>
                      <p className="text-sm text-gray-600">Bathrooms</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900">3-5</p>
                      <p className="text-sm text-gray-600">Car Garage</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Separate formal dining room for entertaining</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>All 4 bedrooms with en-suite bathrooms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Spacious mudroom & breakfast nook</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>12' or 14' extended patio options</span>
                      </li>
                    </ul>
                  </div>

                  <a 
                    href="tel:7022221988"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Learn More About Plan 3704
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Lifestyle - Local SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Northwest Las Vegas Location
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🏔️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">9 Miles to Red Rock Canyon</h3>
                <p className="text-gray-600">
                  World-class hiking, climbing, and scenic drives at your doorstep
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🌆</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">18 Miles to Downtown Las Vegas</h3>
                <p className="text-gray-600">
                  Easy access to world-class entertainment, dining, and culture
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">⛰️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">23 Miles to Mount Charleston</h3>
                <p className="text-gray-600">
                  Alpine escape with skiing, hiking, and 20°F cooler temperatures
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Nearby Amenities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">📍 Parks & Recreation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lone Mountain Park</li>
                    <li>• Gilcrease Orchard</li>
                    <li>• Centennial Hills Park</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">🛒 Shopping & Dining</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Target, Walmart, Trader Joe's</li>
                    <li>• Rachel's Kitchen, Egg Works</li>
                    <li>• My Garage Restaurant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Dr. Jan - Trust Building */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Why Work With Dr. Jan Duffy?
              </h2>
              <p className="text-xl text-center text-gray-700 mb-12">
                Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Century Communities Partnership</h3>
                  <p className="text-gray-700">
                    I work directly with Century Communities to give you insider access while representing YOUR interests, not theirs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Market Expertise</h3>
                  <p className="text-gray-700">
                    I'll show you comparable communities and help you understand true market value—not just what the builder tells you.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Negotiation Power</h3>
                  <p className="text-gray-700">
                    Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Las Vegas Specialist</h3>
                  <p className="text-gray-700">
                    Nevada License S.0197614. Deep knowledge of Northwest Las Vegas and the entire metro area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strong CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore Homestead West?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Call or email Dr. Jan Duffy today for a private tour and expert guidance on your Homestead West home purchase
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <p className="text-sm font-semibold text-blue-200 mb-2">CALL NOW</p>
                <a 
                  href="tel:7022221988"
                  className="text-3xl font-bold hover:text-blue-200 transition-colors"
                >
                  (702) 222-1988
                </a>
              </div>
              <div className="hidden sm:block w-px h-16 bg-blue-400"></div>
              <div className="text-center">
                <p className="text-sm font-semibold text-blue-200 mb-2">EMAIL</p>
                <a 
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="text-xl font-semibold hover:text-blue-200 transition-colors break-all"
                >
                  DrJanSells@HomesteadWestLasVegas.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with Local SEO */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Homestead West Las Vegas</h3>
                <p className="mb-2">5592 N Dapple Gray Rd</p>
                <p className="mb-2">Las Vegas, NV 89149</p>
                <p>(702) 222-1988</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Dr. Jan Duffy</h3>
                <p className="mb-2">Las Vegas Real Estate Expert</p>
                <p className="mb-2">Nevada License: S.0197614</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Century Communities</h3>
                <p className="mb-2">One of America's Top 10 Homebuilders</p>
                <p className="mb-2">Sales Office: (702) 936-3014</p>
                <p>Monday-Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p className="mb-2">
                © 2025 Homestead West | Homes by Dr Jan Duffy. All rights reserved.
              </p>
              <p className="text-gray-400">
                Independent real estate resource. Not affiliated with or endorsed by Century Communities. 
                Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
              </p>
            </div>
          </div>
      </footer>
    </div>
    </>
  );
}