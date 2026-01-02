import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Selling Services | Dr. Jan Duffy | Las Vegas Real Estate Expert',
  description: 'Expert home selling services in Las Vegas with Dr. Jan Duffy. VIP new construction partnership, market expertise, and professional guidance for maximum home value.',
  keywords: [
    'home selling Las Vegas',
    'Dr. Jan Duffy selling services',
    'Las Vegas real estate agent',
    'sell home Las Vegas',
    'home valuation Las Vegas',
    'new construction selling'
  ],
  openGraph: {
    title: 'Home Selling Services | Dr. Jan Duffy',
    description: 'Expert home selling services in Las Vegas with VIP new construction partnership.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/services/selling',
  },
};

export default function HomeSellingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Home Selling Services</h1>
            <p className="text-xl text-blue-100">Expert Guidance for Maximum Home Value</p>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Elite Selling Services</h2>
            <p className="text-xl text-gray-700 mb-8">
              Dr. Jan Duffy's VIP new construction partnership delivers exclusive market access, 
              premium buyer connections, and expert negotiation for maximum home value.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive Selling Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Market Analysis</h3>
                <p className="text-gray-700">
                  Comprehensive market analysis and competitive pricing strategy for maximum home value.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Marketing</h3>
                <p className="text-gray-700">
                  Professional photography, virtual tours, and comprehensive marketing strategy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Buyer Network</h3>
                <p className="text-gray-700">
                  Access to VIP new construction buyer network and premium connections.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Negotiation</h3>
                <p className="text-gray-700">
                  Expert negotiation backed by premier builder relationships.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Transaction Management</h3>
                <p className="text-gray-700">
                  Complete transaction management from listing to closing with VIP treatment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Staging & Prep</h3>
                <p className="text-gray-700">
                  Professional staging recommendations and home preparation guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Sell Your Home?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact Dr. Jan Duffy for expert selling services with VIP new construction partnership
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
  );
}
