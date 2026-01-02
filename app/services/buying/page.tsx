import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';

export const metadata: Metadata = {
  title: 'Buying Homes Las Vegas | Dr. Jan Duffy | First-Time Buyer Guide',
  description: 'Expert home buying services in Las Vegas by Dr. Jan Duffy (License S.0197614). First-time buyer guidance, pre-approval help, and property search assistance.',
  keywords: 'buying homes Las Vegas, first-time home buyer Las Vegas, Dr. Jan Duffy buyer services, Las Vegas real estate buying',
  openGraph: {
    title: 'Buying Homes Las Vegas | Dr. Jan Duffy',
    description: 'Expert home buying services in Las Vegas by Dr. Jan Duffy.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/services/buying',
  },
};

export default function BuyingServicePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home Buying Services',
    description: 'Expert home buying services including first-time buyer guidance, pre-approval assistance, and property search',
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
    serviceType: 'Real Estate Sales',
    category: 'Home Buying',
    offers: {
      '@type': 'Offer',
      description: 'Professional home buying services',
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
        <header className="bg-blue-900 text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Buying Homestead West Homes in Las Vegas</h1>
            <p className="text-xl">Expert guidance for your Homestead West home buying journey</p>
          </div>
        </header>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Your Homestead West Home Buying Partner</h2>
                <p className="text-lg mb-6">
                  Buying a home is one of life's most significant investments. Dr. Jan Duffy provides 
                  expert guidance throughout your home buying journey, from initial consultation to 
                  closing day and beyond.
                </p>
                <p className="text-lg mb-8">
                  Whether you're a first-time buyer or experienced investor, we'll help you navigate 
                  the Las Vegas real estate market with confidence and find the perfect property for 
                  your needs and budget.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">First-Time Homestead West Buyer Friendly</h3>
                      <p>Specialized guidance for first-time Homestead West home buyers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Homestead West Market Expertise</h3>
                      <p>Deep knowledge of Homestead West, Las Vegas neighborhoods and market trends</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Homestead West Negotiation Skills</h3>
                      <p>Expert negotiation to get you the best Homestead West deal</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Quick Contact for Homestead West</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">📞</span>
                    </span>
                    <div>
                      <p className="font-semibold">Call Now</p>
                      <p className="text-blue-600">(702) 299-6607</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✉️</span>
                    </span>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-green-600">DrJanSells@HomesteadWestLasVegas.com</p>
                    </div>
                  </div>
                </div>
                
                <a
                  href="/appointment"
                  className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Homestead West Home Buying Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Initial Consultation</h3>
                <p className="text-gray-600">
                  Discuss your needs, budget, and preferences to create your buying strategy
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Pre-Approval</h3>
                <p className="text-gray-600">
                  Connect you with trusted lenders to get pre-approved for Homestead West financing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Property Search</h3>
                <p className="text-gray-600">
                  Show you Homestead West properties that match your criteria and schedule viewings
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Offer & Negotiation</h3>
                <p className="text-gray-600">
                  Help you craft competitive Homestead West offers and negotiate the best terms
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Inspection & Appraisal</h3>
                <p className="text-gray-600">
                  Coordinate Homestead West inspections and appraisals to protect your investment
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  6
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Closing Process</h3>
                <p className="text-gray-600">
                  Guide you through final Homestead West paperwork and closing procedures
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  7
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Move-In Support</h3>
                <p className="text-gray-600">
                  Provide resources and connections for your Homestead West move-in process
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  8
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Ongoing Relationship</h3>
                <p className="text-gray-600">
                  Maintain our relationship for future real estate needs
                </p>
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

        {/* First-Time Buyer Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">First-Time Homestead West Buyer Guide</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Homestead West Financial Preparation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Credit score improvement for Homestead West</li>
                  <li>• Down payment planning for Homestead West</li>
                  <li>• Closing cost budgeting for Homestead West</li>
                  <li>• Emergency fund setup</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Homestead West Loan Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Conventional loans for Homestead West</li>
                  <li>• FHA loans</li>
                  <li>• VA loans</li>
                  <li>• First-time buyer programs for Homestead West</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Homestead West and Las Vegas Market</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Neighborhood insights</li>
                  <li>• Market trends</li>
                  <li>• Property values</li>
                  <li>• Future growth areas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Areas We Serve Including Homestead West</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Homestead West in Northwest Las Vegas</h3>
                <p className="text-gray-600">Family-friendly Homestead West communities with excellent schools</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Summerlin Near Homestead West</h3>
                <p className="text-gray-600">Master-planned community with luxury amenities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Henderson</h3>
                <p className="text-gray-600">Suburban living with easy access to Las Vegas</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Green Valley</h3>
                <p className="text-gray-600">Established neighborhood with mature landscaping</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Spring Valley</h3>
                <p className="text-gray-600">Convenient location with diverse housing options</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                <p className="text-gray-600">Growing area with new construction opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Homestead West Home Search?</h2>
            <p className="text-xl mb-8">
              Contact Dr. Jan Duffy today for expert home buying guidance
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
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
