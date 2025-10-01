import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Office | Homestead West | Dr. Jan Duffy',
  description: 'Visit our Las Vegas real estate office at 5592 N Dapple Gray Rd. Dr. Jan Duffy (License S.0197614) provides expert real estate services in Northwest Las Vegas.',
  keywords: 'Las Vegas real estate office, Dr. Jan Duffy office, Northwest Las Vegas real estate, real estate agent Las Vegas, Homestead West office',
  openGraph: {
    title: 'Las Vegas Real Estate Office | Homestead West',
    description: 'Visit our Las Vegas real estate office at 5592 N Dapple Gray Rd. Dr. Jan Duffy provides expert real estate services.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/location/las-vegas-office',
  },
};

export default function LasVegasOfficePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    description: 'Expert Las Vegas real estate agent specializing in Northwest Las Vegas properties',
    url: 'https://homesteadwestlasvegas.com/location/las-vegas-office',
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398
    },
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 10:00-16:00'
    ],
    licenseNumber: 'S.0197614',
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
    },
    serviceType: ['Real Estate Sales', 'Property Management', 'Real Estate Investment Consulting'],
    hasMap: 'https://maps.google.com/?q=5592+N+Dapple+Gray+Rd,+Las+Vegas,+NV+89149'
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
            <h1 className="text-4xl font-bold mb-4">Las Vegas Real Estate Office</h1>
            <p className="text-xl">Homestead West | Homes by Dr Jan Duffy</p>
          </div>
        </header>

        {/* Office Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p>5592 N Dapple Gray Rd<br />Las Vegas, NV 89149</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p>(702) 222-1988</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>DrJanSells@HomesteadWestLasVegas.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p>Monday-Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Get Directions</h2>
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
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Services at This Location</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Real Estate Sales</h3>
                <p>Buying and selling residential and commercial properties in Northwest Las Vegas</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Property Management</h3>
                <p>Professional property management services for Las Vegas area properties</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Investment Consulting</h3>
                <p>Real estate investment advice and consultation services</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">Contact Dr. Jan Duffy for expert real estate services in Las Vegas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/appointment"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
