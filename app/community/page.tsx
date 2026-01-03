import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';

export const metadata: Metadata = {
  title: 'Community & Neighborhood | Homestead West Las Vegas | Schools, Shopping, Healthcare',
  description: 'Explore Homestead West Las Vegas community with local schools, shopping, dining, healthcare facilities, and recreation. Northwest Las Vegas neighborhood guide.',
  keywords: [
    'Homestead West community',
    'Northwest Las Vegas schools',
    'Las Vegas shopping centers',
    'Las Vegas healthcare facilities',
    'Las Vegas parks and recreation',
    '89149 zip code',
    'luxury new construction Las Vegas'
  ],
  openGraph: {
    title: 'Community & Neighborhood | Homestead West Las Vegas',
    description: 'Explore Homestead West Las Vegas community with local schools, shopping, dining, and recreation.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/community',
  },
};

export default function CommunityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Homestead West Community',
    description: 'Luxury ranch home community in Northwest Las Vegas',
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
    containedInPlace: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
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
      }
    ]
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Community', url: 'https://www.homesteadwestlasvegas.com/community' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                ⭐ VIP NEW CONSTRUCTION COMMUNITY ⭐
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Homestead West Community & Neighborhood</h1>
              <p className="text-2xl md:text-3xl mb-4 text-blue-100">Homestead West Las Vegas</p>
            </div>
          </div>
        </header>

        {/* VIP Partnership */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Elite Homestead West Community Access</h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Dr. Jan Duffy's VIP new construction partnership provides insider knowledge 
                  of Homestead West community amenities, local services, and neighborhood advantages.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Community Features</h3>
                  <p className="text-gray-700">Homestead West pool-sized lots, ranch homes, optional casitas</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📍</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Prime Location</h3>
                  <p className="text-gray-700">Homestead West in Northwest Las Vegas with easy access to amenities</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West VIP Insights</h3>
                  <p className="text-gray-700">Insider knowledge of Homestead West local services and amenities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Schools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Homestead West Local Schools</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🎒</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Dean Lamar Allen Elementary Near Homestead West</h3>
                      <p className="text-gray-600">Grades K-5</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Rating:</span> 8/10 (GreatSchools)</p>
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 2.1 miles</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> 7151 W. Alexander Rd</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🏫</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Justice Myron E. Leavitt Middle Near Homestead West</h3>
                      <p className="text-gray-600">Grades 6-8</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Rating:</span> 7/10 (GreatSchools)</p>
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 3.2 miles from Homestead West</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> 4701 Quadrel Dr</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Centennial High School Near Homestead West</h3>
                      <p className="text-gray-600">Grades 9-12</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Rating:</span> 8/10 (GreatSchools)</p>
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 4.1 miles</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> 10200 Centennial Pkwy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shopping & Dining */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Homestead West Shopping & Dining</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Homestead West Shopping Centers</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🛒</span>
                      <div>
                        <p className="font-semibold text-gray-900">Target</p>
                        <p className="text-gray-600">1.8 miles • 24/7 SuperTarget</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🛒</span>
                      <div>
                        <p className="font-semibold text-gray-900">Walmart Supercenter</p>
                        <p className="text-gray-600">2.3 miles • Full grocery & pharmacy</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🛒</span>
                      <div>
                        <p className="font-semibold text-gray-900">Trader Joe's</p>
                        <p className="text-gray-600">3.1 miles • Organic & specialty foods</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🛒</span>
                      <div>
                        <p className="font-semibold text-gray-900">Albertsons</p>
                        <p className="text-gray-600">2.7 miles • Local grocery chain</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Homestead West Restaurants</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🍽️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Rachel's Kitchen</p>
                        <p className="text-gray-600">1.9 miles • Healthy American cuisine</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🍽️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Egg Works</p>
                        <p className="text-gray-600">2.1 miles • Breakfast & brunch</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🍽️</span>
                      <div>
                        <p className="font-semibold text-gray-900">My Garage Restaurant</p>
                        <p className="text-gray-600">2.8 miles • Casual dining</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🍽️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Wahoo's Tacos</p>
                        <p className="text-gray-600">3.2 miles • Mexican & Baja-style</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Facilities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Healthcare Facilities</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Centennial Hills Hospital</h3>
                      <p className="text-gray-600">Full-service hospital</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 3.8 miles</p>
                    <p className="text-gray-700"><span className="font-semibold">Services:</span> Emergency, Surgery, Maternity</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> 6900 N Durango Dr</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">👨‍⚕️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Northwest Medical Center Near Homestead West</h3>
                      <p className="text-gray-600">Urgent care & primary care</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 2.9 miles from Homestead West</p>
                    <p className="text-gray-700"><span className="font-semibold">Services:</span> Urgent Care, Primary Care</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> 8402 W Centennial Pkwy</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">💊</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">CVS Pharmacy Near Homestead West</h3>
                      <p className="text-gray-600">Pharmacy & health services</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 1.2 miles</p>
                    <p className="text-gray-700"><span className="font-semibold">Services:</span> Prescriptions, Vaccines</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> 7151 W Alexander Rd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recreation & Parks */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Homestead West Recreation & Parks</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Homestead West Local Parks</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🌳</span>
                      <div>
                        <p className="font-semibold text-gray-900">Lone Mountain Park</p>
                        <p className="text-gray-600">2.1 miles • Hiking trails & picnic areas</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🌳</span>
                      <div>
                        <p className="font-semibold text-gray-900">Gilcrease Orchard</p>
                        <p className="text-gray-600">3.4 miles • Farm & seasonal activities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🌳</span>
                      <div>
                        <p className="font-semibold text-gray-900">Centennial Hills Park</p>
                        <p className="text-gray-600">4.2 miles • Sports fields & playgrounds</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Homestead West Nearby Attractions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">🏔️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Red Rock Canyon</p>
                        <p className="text-gray-600">9 miles • Hiking, climbing, scenic drives</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">🌆</span>
                      <div>
                        <p className="font-semibold text-gray-900">Downtown Las Vegas</p>
                        <p className="text-gray-600">18 miles • Entertainment & dining</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">⛰️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Mount Charleston</p>
                        <p className="text-gray-600">23 miles • Skiing & alpine recreation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Available Homestead West Homes and Las Vegas MLS Listings
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
            </p>
            
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More About Homestead West</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/community-map" className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community Map</h3>
                  <p className="text-gray-600">Interactive map showing Homestead West location and nearby amenities</p>
                </a>
                <a href="/virtual-tour" className="bg-white p-6 rounded-lg hover:bg-green-50 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Virtual Tour</h3>
                  <p className="text-gray-600">Take a 3D virtual tour of Homestead West homes</p>
                </a>
                <a href="/floor-plans" className="bg-white p-6 rounded-lg hover:bg-purple-50 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-600">Explore available Homestead West home designs</p>
                </a>
                <a href="/vip-buyer-program" className="bg-white p-6 rounded-lg hover:bg-yellow-50 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-600">Get exclusive access to Homestead West homes</p>
                </a>
                <a href="/services" className="bg-white p-6 rounded-lg hover:bg-indigo-50 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Our Services</h3>
                  <p className="text-gray-600">Expert real estate services for Homestead West buyers</p>
                </a>
                <a href="/contact" className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact Us</h3>
                  <p className="text-gray-600">Schedule a consultation about Homestead West</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Call Homestead West Home?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let Dr. Jan Duffy's VIP new construction partnership guide you to the perfect community
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022996607"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  📞 Call Dr. Jan: (702) 299-6607
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
              
              <div className="mt-8 text-blue-200">
                <p className="text-lg font-semibold">Dr. Jan Duffy - VIP New Construction Specialist</p>
                <p>Las Vegas Real Estate Expert | Nevada License S.0197614</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
