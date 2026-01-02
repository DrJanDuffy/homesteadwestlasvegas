import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';

export const metadata: Metadata = {
  title: 'Floor Plans | Homestead West Las Vegas | Luxury Ranch Homes',
  description: 'Explore Homestead West floor plans: Plan 3336 (3,336 sq ft) and Plan 3704 (3,704 sq ft) luxury ranch homes. Download official floor plans and specifications.',
  keywords: [
    'Homestead West floor plans',
    'luxury new construction floor plans',
    'Las Vegas ranch home plans',
    'Plan 3336 Homestead West',
    'Plan 3704 Homestead West',
    'single story home plans Las Vegas',
    'luxury ranch home designs'
  ],
  openGraph: {
    title: 'Floor Plans | Homestead West Las Vegas',
    description: 'Explore Homestead West floor plans: Plan 3336 and Plan 3704 luxury ranch homes.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/floor-plans',
  },
};

export default function FloorPlansPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Homestead West Floor Plans',
    description: 'Available floor plans for Homestead West luxury ranch homes',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: 'Plan 3336',
          description: '3,336 square foot single-story ranch home',
          brand: {
            '@type': 'Brand',
            name: 'the builder'
          },
          offers: {
            '@type': 'Offer',
            price: '910990',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Square Feet',
              value: '3336'
            },
            {
              '@type': 'PropertyValue',
              name: 'Bedrooms',
              value: '4-5'
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
            }
          ]
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: 'Plan 3704',
          description: '3,704 square foot single-story ranch home',
          brand: {
            '@type': 'Brand',
            name: 'the builder'
          },
          offers: {
            '@type': 'Offer',
            price: '940990',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
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
            }
          ]
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
        <header className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Floor Plans</h1>
            <p className="text-xl text-blue-100">Luxury Ranch Homes</p>
            <p className="text-lg text-blue-200 mt-2">5592 N Dapple Gray Rd, Las Vegas, NV 89149</p>
          </div>
        </header>

        {/* Floor Plans Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Choose Your Perfect Home</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Homestead West offers two stunning single-story ranch home designs, each featuring 
                  expansive living spaces, premium finishes, and room for customization.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Plan 3336 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-6xl mb-2">🏡</p>
                      <p className="text-gray-700 font-semibold text-lg">Residence 3336</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900">Plan 3336</h3>
                    <p className="text-4xl font-bold text-blue-600 mb-6">From $910,990</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-3xl font-bold text-gray-900">3,336</p>
                        <p className="text-sm text-gray-600">Square Feet</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-3xl font-bold text-gray-900">4-5</p>
                        <p className="text-sm text-gray-600">Bedrooms</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-3xl font-bold text-gray-900">4.5</p>
                        <p className="text-sm text-gray-600">Bathrooms</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-3xl font-bold text-gray-900">3-5</p>
                        <p className="text-sm text-gray-600">Car Garage</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="font-bold text-xl text-gray-900">Key Features:</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 text-xl">✓</span>
                          <span>Open-concept great room with kitchen island</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 text-xl">✓</span>
                          <span>Primary suite with free-standing tub & dual vanities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 text-xl">✓</span>
                          <span>Walk-in pantry & spacious laundry room</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 text-xl">✓</span>
                          <span>Optional detached pool house or casita</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <a
                        href="/floor-plans/3336"
                        className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                      >
                        View Detailed Floor Plan
                      </a>
                      <a
                        href="tel:7022221988"
                        className="block w-full bg-gray-100 text-gray-900 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        📞 Call for More Info: (702) 222-1988
                      </a>
                    </div>
                  </div>
                </div>

                {/* Plan 3704 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-500">
                  <div className="bg-blue-600 text-white text-center py-3 font-bold text-lg">
                    MOST POPULAR
                  </div>
                  <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-6xl mb-2">🏰</p>
                      <p className="text-gray-700 font-semibold text-lg">Residence 3704</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900">Plan 3704</h3>
                    <p className="text-4xl font-bold text-blue-600 mb-6">From $940,990</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-3xl font-bold text-gray-900">3,704</p>
                        <p className="text-sm text-gray-600">Square Feet</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-3xl font-bold text-gray-900">4</p>
                        <p className="text-sm text-gray-600">Bedrooms</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-3xl font-bold text-gray-900">4.5</p>
                        <p className="text-sm text-gray-600">Bathrooms</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-3xl font-bold text-gray-900">3-5</p>
                        <p className="text-sm text-gray-600">Car Garage</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="font-bold text-xl text-gray-900">Key Features:</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 text-xl">✓</span>
                          <span>Separate formal dining room for entertaining</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 text-xl">✓</span>
                          <span>All 4 bedrooms with en-suite bathrooms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 text-xl">✓</span>
                          <span>Spacious mudroom & breakfast nook</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 text-xl">✓</span>
                          <span>12' or 14' extended patio options</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <a
                        href="/floor-plans/3704"
                        className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                      >
                        View Detailed Floor Plan
                      </a>
                      <a
                        href="https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/homestead-ranch/3704/3704-print-1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        📄 Download Official PDF
                      </a>
                      <a
                        href="tel:7022221988"
                        className="block w-full bg-gray-100 text-gray-900 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        📞 Call for More Info: (702) 222-1988
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Why Choose Homestead West?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Builder Quality</h3>
                  <p className="text-gray-600">
                    One of America's top 10 homebuilders with a reputation for quality construction and innovative design.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🏊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Pool-Sized Lots</h3>
                  <p className="text-gray-600">
                    Generous lot sizes perfect for pools, outdoor living spaces, and detached casitas.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Customization Options</h3>
                  <p className="text-gray-600">
                    Personalize your home with various finishes, layouts, and optional features.
                  </p>
                </div>
              </div>

              {/* Dr. Jan Duffy - VIP New Construction Specialist */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12 border-2 border-yellow-400">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👩‍💼</span>
                  </div>
                  <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-4">
                    ⭐ VIP NEW CONSTRUCTION PROGRAM ⭐
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Dr. Jan Duffy - VIP New Construction Specialist</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Elite builder relationship delivers exclusive access, priority lot selection, 
                    and expert negotiation backed by premier relationships.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 mb-2">Contact Dr. Jan Duffy:</h4>
                      <p className="text-gray-700 font-semibold">Phone: (702) 222-1988</p>
                      <p className="text-gray-700 font-semibold">Email: DrJanSells@HomesteadWestLasVegas.com</p>
                      <p className="text-gray-700">Nevada License: S.0197614</p>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 mb-2">Office Location:</h4>
                      <p className="text-gray-700">5592 N Dapple Gray Rd, Las Vegas, NV 89149</p>
                      <p className="text-gray-700">Builder Sales Office</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RealScout Office Listings Carousel */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-center mb-6 text-gray-900">
                  Available Homes in Las Vegas
                </h3>
                <p className="text-lg text-center text-gray-600 mb-8">
                  Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
                </p>
                <div className="max-w-7xl mx-auto">
                  <RealScoutListings />
                </div>
              </div>

              {/* Contact CTA */}
              <div className="text-center bg-blue-900 text-white py-12 rounded-lg">
                <h3 className="text-3xl font-bold mb-4">Ready to Build Your Dream Home?</h3>
                <p className="text-xl mb-8 text-blue-100">
                  Contact Dr. Jan Duffy for expert guidance on your Homestead West home purchase
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
          </div>
        </section>
      </div>
    </>
  );
}
