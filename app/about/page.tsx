import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Las Vegas Real Estate Expert | License S.0197614',
  description: 'Learn about Dr. Jan Duffy, licensed real estate agent (S.0197614) specializing in Las Vegas properties. Expert in buying, selling, and real estate investment.',
  keywords: 'about Dr. Jan Duffy, Las Vegas real estate agent, real estate expert, license S.0197614, Homestead West agent',
  openGraph: {
    title: 'About Dr. Jan Duffy | Las Vegas Real Estate Expert',
    description: 'Learn about Dr. Jan Duffy, licensed real estate agent specializing in Las Vegas properties.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/about',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Dr. Jan Duffy - Las Vegas Real Estate Agent',
    description: 'Professional background and credentials of Dr. Jan Duffy, licensed real estate agent',
    mainEntity: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      description: 'Expert Las Vegas real estate agent specializing in residential and commercial properties',
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
      licenseNumber: 'S.0197614',
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
      },
      serviceType: ['Real Estate Sales', 'Property Management', 'Real Estate Investment Consulting'],
      knowsAbout: ['Las Vegas Real Estate Market', 'Property Valuation', 'Real Estate Investment', 'First Time Home Buyers'],
      memberOf: {
        '@type': 'Organization',
        name: 'Homestead West | Homes by Dr Jan Duffy'
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
        {/* Header */}
        <header className="bg-blue-900 text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About Dr. Jan Duffy</h1>
            <p className="text-xl">Las Vegas Real Estate Expert | License S.0197614</p>
          </div>
        </header>

        {/* Agent Profile */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl">👩‍💼</span>
                    </div>
                    <p className="text-gray-600">Professional Headshot</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Your Las Vegas Real Estate Expert</h2>
                <p className="text-lg mb-6">
                  Dr. Jan Duffy brings extensive expertise and dedication to every real estate transaction. 
                  With a deep understanding of the Las Vegas market and a commitment to exceptional service, 
                  Dr. Duffy helps clients achieve their real estate goals with confidence and professionalism.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Licensed Real Estate Agent</h3>
                      <p>Nevada License S.0197614</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Las Vegas Market Specialist</h3>
                      <p>Deep knowledge of Northwest Las Vegas and surrounding areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Investment Expertise</h3>
                      <p>Specialized knowledge in real estate investment strategies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Expertise */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Services & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Residential Sales</h3>
                <p className="text-gray-600 text-center">
                  Expert guidance for buying and selling homes in Las Vegas, from first-time buyers 
                  to luxury properties.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Commercial Real Estate</h3>
                <p className="text-gray-600 text-center">
                  Professional commercial real estate services for businesses looking to buy, 
                  sell, or lease commercial properties.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Investment Consulting</h3>
                <p className="text-gray-600 text-center">
                  Strategic real estate investment advice to help you build wealth through 
                  smart property investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Certifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Credentials & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Professional Licenses</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-semibold">Nevada Real Estate License</h4>
                    <p className="text-gray-600">License Number: S.0197614</p>
                    <p className="text-sm text-gray-500">Issued by Nevada Real Estate Division</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-6 mt-8">Professional Memberships</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-6">
                    <h4 className="font-semibold">National Association of Realtors</h4>
                    <p className="text-gray-600">Active member in good standing</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6">
                    <h4 className="font-semibold">Las Vegas Association of Realtors</h4>
                    <p className="text-gray-600">Local professional association</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Areas of Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Northwest Las Vegas Real Estate</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>First-Time Home Buyer Guidance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Luxury Property Sales</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Investment Property Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Market Trend Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Property Valuation</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-6 mt-8">Client Commitment</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Jan Duffy is committed to providing exceptional service with integrity, 
                  professionalism, and personalized attention to every client's unique needs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Responsive communication</li>
                  <li>• Transparent processes</li>
                  <li>• Market expertise</li>
                  <li>• Negotiation skills</li>
                  <li>• Client advocacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Dr. Jan Duffy?</h2>
            <p className="text-xl mb-8">
              Contact Dr. Jan Duffy today for expert real estate guidance in Las Vegas
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
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
