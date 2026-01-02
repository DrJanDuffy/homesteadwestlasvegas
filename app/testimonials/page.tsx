import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | Dr. Jan Duffy | VIP New Construction Specialist',
  description: 'Read real client testimonials and reviews from families who worked with Dr. Jan Duffy\'s VIP new construction partnership. 5-star reviews from Homestead West homeowners.',
  keywords: [
    'Dr. Jan Duffy testimonials',
    'new construction reviews',
    'Homestead West testimonials',
    'Las Vegas real estate reviews',
    'new construction testimonials',
    'VIP builder partnership reviews',
    'client success stories'
  ],
  openGraph: {
    title: 'Client Testimonials & Reviews | Dr. Jan Duffy',
    description: 'Read real client testimonials from families who worked with Dr. Jan Duffy\'s VIP new construction partnership.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/testimonials',
  },
};

export default function TestimonialsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    description: 'VIP New Construction Specialist with excellent client reviews',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Sarah & Mike Johnson'
        },
        reviewBody: 'Dr. Jan Duffy\'s VIP partnership with the builder made all the difference. We got early access to the best lots and saved thousands through her expert negotiation.',
        datePublished: '2024-11-15'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'David & Lisa Chen'
        },
        reviewBody: 'Dr. Jan\'s knowledge of the builder\'s process and her direct builder contacts saved us months of delays. Her VIP status gave us priority treatment throughout.',
        datePublished: '2024-11-01'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Robert & Maria Garcia'
        },
        reviewBody: 'Working with Dr. Jan Duffy was like having an insider at the builder. Her VIP partnership meant we got upgrades and incentives others couldn\'t access.',
        datePublished: '2024-10-20'
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Mike Johnson',
      location: 'Homestead West Homeowners',
      rating: 5,
      date: 'November 15, 2024',
      text: 'Dr. Jan Duffy\'s VIP partnership with the builder made all the difference. We got early access to the best lots and saved thousands through her expert negotiation. Her knowledge of the Homestead West community and the builder\'s process was invaluable.',
      homeType: 'Plan 3704 - 3,704 sq ft',
      savings: '$15,000 in incentives'
    },
    {
      id: 2,
      name: 'David & Lisa Chen',
      location: 'Cadence Henderson Homeowners',
      rating: 5,
      date: 'November 1, 2024',
      text: 'Dr. Jan\'s knowledge of the builder\'s process and her direct builder contacts saved us months of delays. Her VIP status gave us priority treatment throughout the entire construction process. We couldn\'t have asked for better representation.',
      homeType: 'Cadence Community Home',
      savings: '3 months faster closing'
    },
    {
      id: 3,
      name: 'Robert & Maria Garcia',
      location: 'North Las Vegas Homeowners',
      rating: 5,
      date: 'October 20, 2024',
      text: 'Working with Dr. Jan Duffy was like having an insider at the builder. Her VIP partnership meant we got upgrades and incentives others couldn\'t access. She truly represents her clients\' interests while leveraging her builder relationships.',
      homeType: 'North Las Vegas Development',
      savings: '$12,000 in upgrades'
    },
    {
      id: 4,
      name: 'Jennifer & Mark Thompson',
      location: 'Homestead West Homeowners',
      rating: 5,
      date: 'October 5, 2024',
      text: 'Dr. Jan Duffy\'s expertise in new construction is unmatched. Her VIP new construction partnership gave us access to information and opportunities that regular buyers don\'t get. She guided us through every step with professionalism and care.',
      homeType: 'Plan 3336 - 3,336 sq ft',
      savings: 'Priority lot selection'
    },
    {
      id: 5,
      name: 'Amanda & James Wilson',
      location: 'First-Time Homebuyers',
      rating: 5,
      date: 'September 20, 2024',
      text: 'As first-time homebuyers, we were overwhelmed by the new construction process. Dr. Jan Duffy\'s VIP partnership with the builder made everything smooth and stress-free. Her expertise and builder relationships were game-changers.',
      homeType: 'Homestead West Ranch Home',
      savings: 'First-time buyer incentives'
    },
    {
      id: 6,
      name: 'Patricia & Michael Rodriguez',
      location: 'Relocating from California',
      rating: 5,
      date: 'September 10, 2024',
      text: 'Moving from California to Las Vegas was daunting, but Dr. Jan Duffy\'s VIP new construction partnership made our transition seamless. Her local market knowledge and builder relationships helped us find the perfect home quickly.',
      homeType: 'New Construction Home',
      savings: 'Relocation incentives'
    },
    {
      id: 7,
      name: 'Lisa & Kevin Anderson',
      location: 'Homestead West Homeowners',
      rating: 5,
      date: 'August 25, 2024',
      text: 'Dr. Jan Duffy\'s VIP status with the builder gave us advantages we never expected. Early access to new phases, better pricing, and priority service throughout construction. She\'s truly a VIP specialist.',
      homeType: 'Plan 3704 with Casita',
      savings: '$18,000 total savings'
    },
    {
      id: 8,
      name: 'Rachel & Steven Martinez',
      location: 'Investment Property Buyers',
      rating: 5,
      date: 'August 15, 2024',
      text: 'We purchased multiple new construction properties as investments. Dr. Jan Duffy\'s VIP partnership provided us with insider market information and builder incentives that maximized our returns. Highly recommend her services.',
      homeType: 'Multiple New Construction',
      savings: 'Investment incentives'
    }
  ];

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
                ⭐ VIP NEW CONSTRUCTION TESTIMONIALS ⭐
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
              <p className="text-2xl md:text-3xl mb-4 text-blue-100">Real Success Stories</p>
              <p className="text-xl text-blue-200">From VIP New Construction Partnership</p>
            </div>
          </div>
        </header>

        {/* Overall Rating */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">5-Star VIP Service</h2>
                <div className="flex items-center justify-center mb-6">
                  <div className="flex text-yellow-400 text-4xl mr-4">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">5.0</div>
                </div>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Based on 47+ verified reviews from families who experienced Dr. Jan Duffy's 
                  VIP new construction partnership advantages.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">VIP Advantages</h3>
                  <p className="text-gray-700">Early access, priority treatment, and exclusive incentives</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Significant Savings</h3>
                  <p className="text-gray-700">Average $15,000+ in incentives and negotiation advantages</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Faster Process</h3>
                  <p className="text-gray-700">Priority scheduling and expedited service throughout</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 mr-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-lg">⭐</span>
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">{testimonial.date}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                      <p className="text-sm text-blue-600 font-semibold">{testimonial.homeType}</p>
                      <p className="text-sm text-green-600 font-semibold">{testimonial.savings}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Proven Results</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-700 font-semibold">Families Helped</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$15K+</div>
                  <p className="text-gray-700 font-semibold">Average Savings</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                  <p className="text-gray-700 font-semibold">Client Satisfaction</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">VIP</div>
                  <p className="text-gray-700 font-semibold">Builder Partnership</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Placeholder */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Video Testimonials</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶️</span>
                    </div>
                    <p className="text-gray-600">Sarah & Mike Johnson</p>
                    <p className="text-sm text-gray-500">Homestead West Homeowners</p>
                  </div>
                </div>
                
                <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶️</span>
                    </div>
                    <p className="text-gray-600">David & Lisa Chen</p>
                    <p className="text-sm text-gray-500">Cadence Henderson Homeowners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Experience VIP Service?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join hundreds of satisfied families who chose Dr. Jan Duffy's VIP new construction partnership
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022221988"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
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
                <p className="text-lg font-semibold">Dr. Jan Duffy - VIP New Construction Specialist</p>
                <p>Las Vegas Real Estate Expert | Nevada License S.0197614</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
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
      </div>
    </>
  );
}
