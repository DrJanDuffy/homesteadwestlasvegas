import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule Appointment | Dr. Jan Duffy Real Estate | Las Vegas',
  description: 'Schedule a consultation with Dr. Jan Duffy (License S.0197614) for expert real estate services in Las Vegas. Book your appointment online today.',
  keywords: 'schedule appointment, Dr. Jan Duffy, real estate consultation, Las Vegas real estate, book meeting',
  openGraph: {
    title: 'Schedule Appointment | Dr. Jan Duffy Real Estate',
    description: 'Schedule a consultation with Dr. Jan Duffy for expert real estate services in Las Vegas.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/appointment',
  },
};

export default function AppointmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ScheduleAction',
    name: 'Real Estate Consultation Appointment',
    description: 'Schedule a consultation with Dr. Jan Duffy for real estate services',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022221988',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      licenseNumber: 'S.0197614'
    },
    object: {
      '@type': 'Event',
      name: 'Real Estate Consultation',
      description: 'One-on-one consultation for real estate services'
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
            <h1 className="text-4xl font-bold mb-4">Schedule Your Appointment</h1>
            <p className="text-xl">Book a consultation with Dr. Jan Duffy</p>
          </div>
        </header>

        {/* Appointment Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Book Your Consultation</h2>
                <p className="text-lg mb-8">
                  Schedule a personalized consultation with Dr. Jan Duffy to discuss your real estate needs. 
                  We offer flexible scheduling to accommodate your busy lifestyle.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Free Initial Consultation</h3>
                      <p>No obligation, expert advice on your real estate goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Flexible Scheduling</h3>
                      <p>Available evenings and weekends by appointment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Multiple Options</h3>
                      <p>In-person, phone, or video consultations available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling a Home</option>
                      <option value="investment">Real Estate Investment</option>
                      <option value="property-management">Property Management</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="preferred-date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferred-date"
                      name="preferred-date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferred-time"
                      name="preferred-time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                      <option value="evening">Evening (5:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="consultation-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Consultation Type
                    </label>
                    <select
                      id="consultation-type"
                      name="consultation-type"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="in-person">In-Person (Office)</option>
                      <option value="phone">Phone Call</option>
                      <option value="video">Video Call</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your real estate goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Schedule Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Prefer to Call?</h2>
            <p className="text-lg mb-8">You can also reach us directly for immediate assistance</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+17022221988"
                className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span className="mr-2">📞</span>
                (702) 222-1988
              </a>
              <a
                href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <span className="mr-2">✉️</span>
                DrJanSells@HomesteadWestLasVegas.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
