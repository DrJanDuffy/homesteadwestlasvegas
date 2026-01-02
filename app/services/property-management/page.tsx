import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Management Services | Dr. Jan Duffy | Las Vegas Real Estate',
  description: 'Professional property management services in Las Vegas with Dr. Jan Duffy. VIP new construction partnership, rental management, and investment property services.',
  keywords: [
    'property management Las Vegas',
    'Dr. Jan Duffy property management',
    'rental property management',
    'investment property management',
    'new construction management',
    'Las Vegas property management'
  ],
  openGraph: {
    title: 'Property Management Services | Dr. Jan Duffy',
    description: 'Professional property management services in Las Vegas with VIP new construction partnership.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/services/property-management',
  },
};

export default function PropertyManagementPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Property Management Services',
    description: 'Professional property management services for rental and investment properties',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022221988',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      licenseNumber: 'S.0197614'
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
    },
    serviceType: 'Property Management',
    offers: {
      '@type': 'Offer',
      description: 'Comprehensive property management services',
      priceCurrency: 'USD'
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
        <header className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4">Property Management Services</h1>
              <p className="text-xl text-blue-100">Professional Property Management Solutions</p>
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Elite Property Management</h2>
              <p className="text-xl text-gray-700 mb-8">
                Dr. Jan Duffy's VIP new construction partnership delivers exclusive property management 
                services with premium tenant screening, maintenance coordination, and investment optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive Management Services</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Tenant Screening</h3>
                  <p className="text-gray-700">
                    Comprehensive background checks, credit verification, and rental history analysis.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Rent Collection</h3>
                  <p className="text-gray-700">
                    Automated rent collection, late fee management, and financial reporting.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Maintenance</h3>
                  <p className="text-gray-700">
                    24/7 maintenance coordination with trusted contractors and vendors.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Financial Reporting</h3>
                  <p className="text-gray-700">
                    Detailed monthly reports, expense tracking, and tax documentation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Lease Management</h3>
                  <p className="text-gray-700">
                    Lease preparation, renewal negotiations, and legal compliance.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Property Marketing</h3>
                  <p className="text-gray-700">
                    Professional marketing, photography, and tenant acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Property Types We Manage</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Single Family Homes</h3>
                  <p className="text-gray-600 mb-4">Complete management for rental homes</p>
                  <ul className="text-sm text-gray-500 text-left">
                    <li>• Tenant screening & placement</li>
                    <li>• Rent collection & accounting</li>
                    <li>• Maintenance coordination</li>
                    <li>• Property inspections</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Investment Properties</h3>
                  <p className="text-gray-600 mb-4">Specialized investment property management</p>
                  <ul className="text-sm text-gray-500 text-left">
                    <li>• ROI optimization</li>
                    <li>• Market analysis</li>
                    <li>• Investment reporting</li>
                    <li>• Portfolio management</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">New Construction</h3>
                  <p className="text-gray-600 mb-4">VIP new construction properties</p>
                  <ul className="text-sm text-gray-500 text-left">
                    <li>• Pre-construction management</li>
                    <li>• Builder coordination</li>
                    <li>• Warranty management</li>
                    <li>• Premium tenant placement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Management Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Property Assessment</h3>
                  <p className="text-gray-600">
                    Comprehensive property evaluation and market analysis
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Tenant Placement</h3>
                  <p className="text-gray-600">
                    Professional marketing and qualified tenant screening
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ongoing Management</h3>
                  <p className="text-gray-600">
                    Day-to-day operations and tenant relationship management
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
                  <p className="text-gray-600">
                    Continuous improvement and ROI maximization
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
              <h2 className="text-4xl font-bold mb-6">Ready for Professional Property Management?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact Dr. Jan Duffy for expert property management services with VIP new construction partnership
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
    </>
  );
}
