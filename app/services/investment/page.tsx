import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Consulting | Dr. Jan Duffy | Las Vegas Real Estate Investment Expert',
  description: 'Expert real estate investment consulting in Las Vegas with Dr. Jan Duffy. VIP Century Communities partnership, market analysis, and investment strategy guidance.',
  keywords: [
    'real estate investment Las Vegas',
    'Dr. Jan Duffy investment consulting',
    'Las Vegas investment properties',
    'real estate investment strategy',
    'Century Communities investment',
    'Las Vegas rental properties'
  ],
  openGraph: {
    title: 'Investment Consulting | Dr. Jan Duffy',
    description: 'Expert real estate investment consulting in Las Vegas with VIP Century Communities partnership.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/services/investment',
  },
};

export default function InvestmentConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Investment Consulting</h1>
            <p className="text-xl text-blue-100">Strategic Real Estate Investment Guidance</p>
            <p className="text-lg text-blue-200 mt-2">Dr. Jan Duffy | Nevada License S.0197614</p>
          </div>
        </div>
      </header>

      {/* VIP Partnership */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
              ⭐ VIP CENTURY COMMUNITIES PARTNERSHIP ⭐
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Elite Investment Access</h2>
            <p className="text-xl text-gray-700 mb-8">
              Dr. Jan Duffy's VIP Century Communities partnership delivers exclusive investment opportunities, 
              early access to new developments, and expert market analysis for maximum returns.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Investment Consulting Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Market Analysis</h3>
                <p className="text-gray-700">
                  Comprehensive market analysis and investment opportunity identification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">New Construction</h3>
                <p className="text-gray-700">
                  Early access to Century Communities new construction investment opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">ROI Analysis</h3>
                <p className="text-gray-700">
                  Detailed ROI analysis and investment strategy development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Rental Properties</h3>
                <p className="text-gray-700">
                  Investment property selection and rental market analysis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Portfolio Management</h3>
                <p className="text-gray-700">
                  Strategic portfolio management and diversification guidance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Exit Strategies</h3>
                <p className="text-gray-700">
                  Investment exit strategies and timing optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Prime Investment Areas</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West</h3>
                <p className="text-gray-600 mb-4">Luxury ranch homes on pool-sized lots</p>
                <p className="text-sm text-gray-500">Starting at $910,990</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏖️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cadence Henderson</h3>
                <p className="text-gray-600 mb-4">Master-planned community with resort amenities</p>
                <p className="text-sm text-gray-500">Premium location</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">North Las Vegas</h3>
                <p className="text-gray-600 mb-4">Growing communities with new construction</p>
                <p className="text-sm text-gray-500">Emerging markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Invest in Las Vegas?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact Dr. Jan Duffy for expert investment consulting with VIP Century Communities partnership
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
