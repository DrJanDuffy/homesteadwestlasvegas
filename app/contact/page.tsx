import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Las Vegas Real Estate Agent | Homestead West',
  description: 'Contact Dr. Jan Duffy (License S.0197614) for expert real estate services in Las Vegas. Call (702) 299-6607 or visit our office at 5592 N Dapple Gray Rd.',
  keywords: 'contact Dr. Jan Duffy, Las Vegas real estate agent, Homestead West contact, real estate consultation Las Vegas',
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Las Vegas Real Estate Agent',
    description: 'Contact Dr. Jan Duffy for expert real estate services in Las Vegas. Professional consultation available.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/contact',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Dr. Jan Duffy - Las Vegas Real Estate Agent',
    description: 'Contact information for Dr. Jan Duffy, licensed real estate agent in Las Vegas',
    mainEntity: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
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
      licenseNumber: 'S.0197614',
      openingHours: [
        'Mo-Fr 09:00-18:00',
        'Sa 10:00-16:00'
      ]
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Contact', url: 'https://www.homesteadwestlasvegas.com/contact' }
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
        <header className="bg-blue-900 text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Dr. Jan Duffy for Homestead West</h1>
            <p className="text-xl">Las Vegas Real Estate Expert | License S.0197614</p>
          </div>
        </header>

        {/* Current Listings Preview */}
        <section id="homes-preview" className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-5">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">Current Homestead West Listings</h2>
                <p className="text-gray-600 text-sm">Review available homes, then contact Dr. Jan for a private tour</p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.showingnew.com/skyecanyon/community/nevada/las-vegas/homestead-west/194163"
                  title="Homestead West Available Homes"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  loading="lazy"
                  className="w-full border-0 block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch About Homestead West</h2>
                <p className="text-lg mb-8">
                  Ready to buy, sell, or invest in Homestead West Las Vegas real estate? Contact Dr. Jan Duffy for 
                  expert Homestead West guidance and personalized service. We're here to help you achieve your 
                  Homestead West real estate goals.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Homestead West Phone</h3>
                      <p className="text-lg">(702) 299-6607</p>
                      <p className="text-gray-600">Available Monday-Friday 9AM-6PM, Saturday 10AM-4PM for Homestead West</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Homestead West Email</h3>
                      <p className="text-lg">DrJanSells@HomesteadWestLasVegas.com</p>
                      <p className="text-gray-600">We respond within 24 hours about Homestead West</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Homestead West Office Address</h3>
                      <p className="text-gray-600">By appointment only for Homestead West</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message About Homestead West</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">I want to buy a home</option>
                      <option value="selling">I want to sell my home</option>
                      <option value="investment">Real estate investment advice</option>
                      <option value="property-management">Property management services</option>
                      <option value="market-analysis">Market analysis request</option>
                      <option value="general">General inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your real estate needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours & Map */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Homestead West Office Hours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">
                  <strong>Note:</strong> Appointments are available outside regular hours by special arrangement. 
                  Emergency real estate matters are handled on a case-by-case basis.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Find Our Office</h2>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.5!2d-115.1398!3d36.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEwJzExLjYiTiAxMTXCsDA4JzIzLjMiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Las Vegas Office Location"
                  ></iframe>
                </div>
                <a
                  href="https://maps.google.com/?q=5592+N+Dapple+Gray+Rd,+Las+Vegas,+NV+89149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* License Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Licensed Real Estate Professional</h2>
            <div className="bg-blue-50 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg mb-4">
                <strong>Dr. Jan Duffy</strong> is a licensed real estate agent in Nevada
              </p>
              <p className="text-xl font-semibold text-blue-600 mb-4">
                License Number: S.0197614
              </p>
              <p className="text-gray-600">
                Licensed by the Nevada Real Estate Division • Member of the National Association of Realtors
              </p>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-white">
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
      </div>
    </>
  );
}
