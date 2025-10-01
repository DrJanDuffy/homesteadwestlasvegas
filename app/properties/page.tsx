import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas Properties for Sale | Dr. Jan Duffy | Ranch Homes $910K+',
  description: 'Browse Las Vegas properties for sale with Dr. Jan Duffy (License S.0197614). Ranch-style homes on pool-sized lots in Northwest Las Vegas starting at $910K.',
  keywords: 'Las Vegas properties for sale, ranch homes Las Vegas, Northwest Las Vegas homes, $910K homes Las Vegas, Dr. Jan Duffy listings',
  openGraph: {
    title: 'Las Vegas Properties for Sale | Dr. Jan Duffy',
    description: 'Browse Las Vegas properties for sale with Dr. Jan Duffy. Ranch-style homes starting at $910K.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/properties',
  },
};

export default function PropertiesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Las Vegas Properties for Sale',
    description: 'Ranch-style homes on pool-sized lots in Northwest Las Vegas',
    numberOfItems: 3,
    itemListElement: [
      {
        '@type': 'RealEstateListing',
        position: 1,
        name: 'Ranch Home - Northwest Las Vegas',
        description: 'Beautiful ranch-style home on pool-sized lot',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          addressCountry: 'US'
        },
        offers: {
          '@type': 'Offer',
          price: '910990',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        realEstateAgent: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          telephone: '+17022221988',
          licenseNumber: 'S.0197614'
        }
      },
      {
        '@type': 'RealEstateListing',
        position: 2,
        name: 'Ranch Home - Premium Lot',
        description: 'Spacious ranch home with premium pool-sized lot',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          addressCountry: 'US'
        },
        offers: {
          '@type': 'Offer',
          price: '925990',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        realEstateAgent: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          telephone: '+17022221988',
          licenseNumber: 'S.0197614'
        }
      },
      {
        '@type': 'RealEstateListing',
        position: 3,
        name: 'Ranch Home - Executive Lot',
        description: 'Executive ranch home with oversized pool lot',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          addressCountry: 'US'
        },
        offers: {
          '@type': 'Offer',
          price: '940990',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        realEstateAgent: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          telephone: '+17022221988',
          licenseNumber: 'S.0197614'
        }
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
        <header className="bg-blue-900 text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Las Vegas Properties for Sale</h1>
            <p className="text-xl">Ranch-style homes on pool-sized lots in Northwest Las Vegas</p>
          </div>
        </header>

        {/* Property Search Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Find Your Perfect Home</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg" title="Select price range">
                    <option>$900K - $950K</option>
                    <option>$950K - $1M</option>
                    <option>$1M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg" title="Select number of bedrooms">
                    <option>Any</option>
                    <option>3+</option>
                    <option>4+</option>
                    <option>5+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg" title="Select number of bathrooms">
                    <option>Any</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property 1 */}
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Property Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ranch Home - Northwest Las Vegas</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$910,990</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-4">3 bed</span>
                    <span className="mr-4">2 bath</span>
                    <span>2,400 sq ft</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Beautiful ranch-style home on pool-sized lot in Northwest Las Vegas. 
                    Perfect for families looking for space and privacy.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              </div>

              {/* Property 2 */}
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Property Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ranch Home - Premium Lot</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$925,990</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-4">4 bed</span>
                    <span className="mr-4">3 bath</span>
                    <span>2,800 sq ft</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Spacious ranch home with premium pool-sized lot. Features updated 
                    kitchen and master suite with walk-in closet.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              </div>

              {/* Property 3 */}
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Property Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ranch Home - Executive Lot</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$940,990</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-4">4 bed</span>
                    <span className="mr-4">3 bath</span>
                    <span>3,200 sq ft</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Executive ranch home with oversized pool lot. Luxury finishes throughout 
                    and open-concept living areas.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Properties?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ranch-Style Design</h3>
                <p className="text-gray-600">
                  Single-story living with open floor plans perfect for modern families 
                  and easy maintenance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🏊</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Pool-Sized Lots</h3>
                <p className="text-gray-600">
                  Generous lot sizes perfect for pools, outdoor living, and future expansions 
                  in desirable Northwest Las Vegas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Prime Location</h3>
                <p className="text-gray-600">
                  Located in Northwest Las Vegas with easy access to shopping, dining, 
                  entertainment, and excellent schools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Las Vegas Market Insights</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Current Market Trends</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Average Home Price</span>
                    <span className="text-blue-600 font-semibold">$425,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Days on Market</span>
                    <span className="text-green-600 font-semibold">28 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Inventory Level</span>
                    <span className="text-orange-600 font-semibold">2.1 months</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Price Appreciation</span>
                    <span className="text-green-600 font-semibold">+8.5% YoY</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Why Northwest Las Vegas?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    <span>Growing community with new amenities and infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    <span>Excellent school districts and family-friendly environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    <span>Easy access to Red Rock Canyon and outdoor recreation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    <span>Strong appreciation potential and investment opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    <span>Lower density than central Las Vegas with more space</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in These Properties?</h2>
            <p className="text-xl mb-8">
              Contact Dr. Jan Duffy for private showings and detailed information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Dr. Duffy
              </a>
              <a
                href="/appointment"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Schedule Property Tour
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
