import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | VIP New Construction Specialist | Las Vegas Real Estate Expert',
  description: 'Meet Dr. Jan Duffy, VIP new construction specialist and Las Vegas real estate expert. 500+ families helped, Nevada License S.0197614, elite builder partnerships.',
  keywords: [
    'Dr. Jan Duffy Las Vegas',
    'Las Vegas real estate agent',
    'new construction specialist',
    'VIP builder partnership',
    'Nevada real estate license',
    'Las Vegas new construction expert',
    'Homestead West realtor'
  ],
  openGraph: {
    title: 'About Dr. Jan Duffy | VIP New Construction Specialist',
    description: 'Meet Dr. Jan Duffy, VIP new construction specialist and Las Vegas real estate expert with 500+ families helped.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/about',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    jobTitle: 'VIP New Construction Specialist',
    description: 'Las Vegas real estate expert with elite new construction partnership',
    telephone: '+17022996607',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5592 N Dapple Gray Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89149',
      addressCountry: 'US'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Homestead West | Homes by Dr Jan Duffy'
    },
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
    knowsAbout: [
      'New Construction Homes',
      'New Construction Homes',
      'VIP Builder Partnerships',
      'Las Vegas Real Estate',
      'Homestead West',
      'Cadence Henderson'
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas'
      },
      {
        '@type': 'City',
        name: 'Henderson'
      },
      {
        '@type': 'City',
        name: 'North Las Vegas'
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
        <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                ⭐ VIP NEW CONSTRUCTION SPECIALIST ⭐
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Dr. Jan Duffy - Homestead West Real Estate Expert</h1>
              <p className="text-2xl md:text-3xl mb-4 text-blue-100">VIP New Construction Specialist</p>
              <p className="text-xl text-blue-200">Las Vegas Real Estate Expert | Nevada License S.0197614</p>
            </div>
          </div>
        </header>

        {/* VIP Partnership Highlight */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Elite Homestead West Builder Partnership</h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Dr. Jan Duffy maintains an exclusive VIP partnership with the Homestead West builder, 
                  one of America's top 10 homebuilders, delivering unparalleled Homestead West access and 
                  negotiation power for her clients.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West VIP Status</h3>
                  <p className="text-gray-700">Elite Homestead West new construction partnership with exclusive access</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📞</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Direct Homestead West Access</h3>
                  <p className="text-gray-700">Direct communication with Homestead West builder management</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Negotiation Power</h3>
                  <p className="text-gray-700">Premier Homestead West relationship-backed negotiation advantages</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Bio */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Dr. Jan Duffy's Professional Background</h2>
                  <div className="space-y-6 text-lg text-gray-700">
                    <p>
                      Dr. Jan Duffy is a distinguished real estate professional specializing in 
                      new construction homes and developments throughout 
                      the Las Vegas Valley. With her VIP new construction partnership, 
                      she delivers exclusive access and expert guidance to homebuyers.
                    </p>
                    <p>
                      Her expertise spans multiple premier communities including Homestead West 
                      in Northwest Las Vegas, Cadence in Henderson, and various North Las Vegas 
                      developments. Dr. Jan's deep understanding of the builder's 
                      processes, floor plans, and pricing gives her clients a significant advantage.
                    </p>
                    <p>
                      As an independent real estate agent, Dr. Jan Duffy represents her clients' 
                      interests exclusively, not the builder's. This independence, combined with 
                      her VIP partnership access, creates the perfect balance of insider knowledge 
                      and client advocacy.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Dr. Jan Duffy's Credentials & Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">Nevada Real Estate License</p>
                        <p className="text-gray-600">License #S.0197614</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">VIP New Construction Partnership</p>
                        <p className="text-gray-600">Elite builder relationship status</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">500+ Families Helped</p>
                        <p className="text-gray-600">Successful home purchases and sales</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">Office at Builder</p>
                        <p className="text-gray-600">Professional on-site presence</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">Las Vegas Market Expert</p>
                        <p className="text-gray-600">Deep local market knowledge</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Proven Track Record with Homestead West</h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-700 font-semibold">Homestead West Families Helped</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
                  <p className="text-gray-700 font-semibold">Average Homestead West Home Value</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                  <p className="text-gray-700 font-semibold">Homestead West Client Satisfaction</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">VIP</div>
                  <p className="text-gray-700 font-semibold">Homestead West Builder Partnership</p>
                </div>
              </div>

              <div className="bg-blue-900 text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Why Choose Dr. Jan Duffy for Homestead West?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>VIP new construction partnership</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Independent agent representing YOUR interests</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Office at builder sales office</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Expert negotiation backed by premier relationships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Direct access to builder information and resources</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Las Vegas real estate market specialist</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Client Testimonials</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span className="text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Dr. Jan Duffy's VIP partnership with the builder made all the difference. 
                    We got early access to the best lots and saved thousands through her expert negotiation."
                  </p>
                  <p className="font-semibold text-gray-900">- Sarah & Mike Johnson</p>
                  <p className="text-sm text-gray-600">Homestead West Homeowners</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span className="text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Dr. Jan's knowledge of the builder's process and her direct builder contacts 
                    saved us months of delays. Her VIP status gave us priority treatment throughout."
                  </p>
                  <p className="font-semibold text-gray-900">- David & Lisa Chen</p>
                  <p className="text-sm text-gray-600">Cadence Henderson Homeowners</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span className="text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Working with Dr. Jan Duffy was like having an insider at the builder. 
                    Her VIP partnership meant we got upgrades and incentives others couldn't access."
                  </p>
                  <p className="font-semibold text-gray-900">- Robert & Maria Garcia</p>
                  <p className="text-sm text-gray-600">North Las Vegas Homeowners</p>
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

        {/* Available Homes Section */}
        <section id="available-homes" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-3 text-gray-900">View Available Homes</h2>
                <p className="text-lg text-gray-600">Explore live MLS listings at Homestead West</p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.showingnew.com/skyecanyon/community/nevada/las-vegas/homestead-west/194163"
                  title="Homestead West Listings"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  loading="lazy"
                  className="w-full border-0 block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Work with a Homestead West VIP Specialist?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Experience the difference of working with Dr. Jan Duffy's elite new construction partnership
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
                <p className="mt-4 text-sm">
                  Independent real estate agent providing VIP access to new construction homes. 
                  Not affiliated with or endorsed by the builder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/vip-buyer-program" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-600">Exclusive access to new construction homes</p>
                </a>
                <a href="/services" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Services</h3>
                  <p className="text-gray-600">Buying, selling, and investment consulting</p>
                </a>
                <a href="/contact" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-600">Get in touch with Dr. Jan Duffy</p>
                </a>
                <a href="/homebuying-process" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-600">Step-by-step guide to new construction</p>
                </a>
                <a href="/testimonials" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Testimonials</h3>
                  <p className="text-gray-600">What clients say about working with Dr. Jan</p>
                </a>
                <a href="/floor-plans" className="bg-indigo-50 p-6 rounded-lg hover:bg-indigo-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-600">Available Homestead West home designs</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}