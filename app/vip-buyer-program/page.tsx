import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';

export const metadata: Metadata = {
  title: 'VIP Berkshire Hathaway HomeServices Buyer Program | Dr. Jan Duffy | Las Vegas New Construction Expert',
  description: 'Get VIP access to new construction homes in Las Vegas with Dr. Jan Duffy. Early phase access, priority lot selection, direct builder contact, and expert negotiation. 500+ Vegas families helped.',
  keywords: [
    'luxury new construction Las Vegas',
    'new construction Henderson',
    'Cadence homes realtor',
    'North Las Vegas new builds',
    'VIP builder partnership',
    'Dr. Jan Duffy new construction',
    'Las Vegas new construction expert',
    'VIP buyer program',
    'new construction buyer access'
  ],
  openGraph: {
    title: 'VIP Berkshire Hathaway HomeServices Buyer Program | Dr. Jan Duffy',
    description: 'Get VIP access to new construction homes in Las Vegas with Dr. Jan Duffy. Early phase access, priority lot selection, and expert negotiation.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/vip-buyer-program',
  },
};

export default function VIPBuyerProgramPage() {
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
    ],
    knowsAbout: [
      'New Construction Homes',
      'VIP Builder Partnership',
      'Cadence Henderson',
      'Homestead West Las Vegas',
      'Luxury Ranch Homes',
      'Northwest Las Vegas Real Estate'
    ],
    jobTitle: 'VIP New Construction Specialist',
    worksFor: {
      '@type': 'Organization',
      name: 'Homestead West | Homes by Dr Jan Duffy'
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Nevada Real Estate License',
      credentialCategory: 'license',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division'
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
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-lg mb-6">
                  ⭐ VIP Berkshire Hathaway HomeServices Buyer Program ⭐
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                VIP Berkshire Hathaway HomeServices Buyer Program for Homestead West
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-blue-100 font-semibold">
                Exclusive Access to Homestead West Las Vegas New Construction Homes
              </p>
              <p className="text-xl text-blue-200 mb-12 max-w-4xl mx-auto">
                Dr. Jan Duffy delivers insider access, priority lot selection, and expert negotiation 
                backed by her elite builder relationships—giving YOU the ultimate advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022221988"
                  className="bg-yellow-500 text-black px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-all shadow-2xl hover:shadow-3xl"
                >
                  📞 Call Dr. Jan: (702) 222-1988
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-blue-900 transition-all"
                >
                  📧 Get VIP Access
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Value Proposition */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">What VIP Partnership Means for Homestead West Buyers</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Dr. Jan Duffy's elite builder relationships deliver exclusive advantages 
                  that regular agents simply cannot provide.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-blue-500">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Early Phase Access to Homestead West</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Get first access to new Homestead West phases before public release. Secure the best Homestead West lots, 
                    prime locations, and preferred floor plans while others wait.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-green-500">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Inside Track on Homestead West Spec Homes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Direct access to quick move-in Homestead West homes and spec inventory. Get notified 
                    immediately when new Homestead West homes become available.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-purple-500">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">📞</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Direct Homestead West Builder Contact</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Faster answers, quicker problem-solving, and direct communication with 
                    Homestead West builder management and sales teams.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-yellow-500">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Stack Homestead West Buyer Incentives</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Expert knowledge of all available Homestead West incentives and how to combine them 
                    effectively for maximum savings on your new Homestead West home.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-red-500">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Negotiation for Homestead West</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Premier relationship-backed negotiation power for Homestead West. Get upgrades, 
                    concessions, and terms that others simply cannot achieve at Homestead West.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-indigo-500">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Priority Treatment at Homestead West</h3>
                  <p className="text-gray-700 leading-relaxed">
                    VIP status throughout the entire Homestead West process—from lot selection 
                    to closing. Experience the difference of working with a premier Homestead West partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Points */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Proven Track Record with Homestead West</h2>
                <p className="text-xl text-gray-600">
                  Dr. Jan Duffy's new construction expertise spans multiple Las Vegas communities including Homestead West
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Active Communities Including Homestead West</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Homestead West Las Vegas</p>
                        <p className="text-gray-600">Luxury ranch homes on pool-sized lots</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Cadence Henderson</p>
                        <p className="text-gray-600">Master-planned community with resort amenities</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">North Las Vegas Developments</p>
                        <p className="text-gray-600">New construction opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">VIP Portal Access for Homestead West</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Real-Time Pricing Updates</p>
                        <p className="text-gray-600">Instant access to current pricing and incentives</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Priority Lot Holds</p>
                        <p className="text-gray-600">Secure your preferred lot before public release</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Exclusive Selections</p>
                        <p className="text-gray-600">First choice on premium lots and floor plans</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stats */}
              <div className="bg-blue-900 text-white rounded-xl p-12 text-center">
                <h3 className="text-3xl font-bold mb-8">500+ Vegas Families Helped</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-5xl font-bold text-yellow-400 mb-2">500+</p>
                    <p className="text-xl">Families Helped</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-yellow-400 mb-2">$2M+</p>
                    <p className="text-xl">Average Home Value</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-yellow-400 mb-2">98%</p>
                    <p className="text-xl">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Construction Communities Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">New Construction Communities Las Vegas: Homestead West and More</h2>
                <p className="text-xl text-gray-600">
                  Dr. Jan Duffy's VIP access spans multiple premier communities across the Las Vegas Valley
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🏡</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Homestead West</h3>
                    <p className="text-gray-600 mb-4">Northwest Las Vegas</p>
                    <p className="text-sm text-gray-500">Luxury ranch homes on pool-sized lots</p>
                    <p className="text-sm text-gray-500">Plan 3336 & 3704 available</p>
                  </div>

                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🏖️</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Cadence</h3>
                    <p className="text-gray-600 mb-4">Henderson</p>
                    <p className="text-sm text-gray-500">Master-planned community</p>
                    <p className="text-sm text-gray-500">Resort-style amenities</p>
                  </div>

                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🏗️</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">North Las Vegas</h3>
                    <p className="text-gray-600 mb-4">Multiple Developments</p>
                    <p className="text-sm text-gray-500">New construction opportunities</p>
                    <p className="text-sm text-gray-500">Growing communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Register Your Buyer Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Register Your Buyer for Homestead West - Fast-Track Process</h2>
              <p className="text-xl text-gray-600 mb-12">
                Dr. Jan Duffy's VIP partnership includes a streamlined registration process 
                that gets your buyers priority treatment from day one.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Initial Consultation for Homestead West</h3>
                  <p className="text-gray-600 text-sm">Discuss needs, budget, and preferences for Homestead West</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">VIP Registration for Homestead West</h3>
                  <p className="text-gray-600 text-sm">Register with VIP buyer program portal for Homestead West</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Priority Access to Homestead West</h3>
                  <p className="text-gray-600 text-sm">Get early access to new Homestead West phases and lots</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Expert Guidance for Homestead West</h3>
                  <p className="text-gray-600 text-sm">Navigate the entire Homestead West process with VIP treatment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings Carousel */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Available Homes in Las Vegas
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
            </p>
            
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Buying a New Construction Home?
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-400">
                Get VIP Treatment from Start to Close
              </h3>
              <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
                Don't settle for ordinary. Experience the difference of working with Dr. Jan Duffy's 
                elite builder relationships. Get insider access, priority treatment, 
                and expert negotiation backed by premier partnerships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a
                  href="tel:7022221988"
                  className="bg-yellow-500 text-black px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-all shadow-2xl"
                >
                  📞 Call Dr. Jan: (702) 222-1988
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-blue-900 transition-all"
                >
                  📧 Get VIP Access Now
                </a>
              </div>

              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <h4 className="text-2xl font-bold mb-4">Dr. Jan Duffy - VIP New Construction Specialist</h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <p className="mb-2"><span className="font-semibold">Phone:</span> (702) 222-1988</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> DrJanSells@HomesteadWestLasVegas.com</p>
                    <p className="mb-2"><span className="font-semibold">License:</span> Nevada S.0197614</p>
                  </div>
                  <div>
                    <p className="mb-2"><span className="font-semibold">Office:</span> Builder Sales Office</p>
                    <p className="mb-2"><span className="font-semibold">Specialty:</span> VIP Builder Partnerships</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-blue-200">
                  Independent real estate agent providing VIP access to new construction homes. 
                  Not affiliated with or endorsed by the builder.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
