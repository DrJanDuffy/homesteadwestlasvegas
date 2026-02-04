import CalendlyLink from '@/components/CalendlyLink';

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Dr. Jan Duffy</h3>
            <p className="mb-2">Berkshire Hathaway HomeServices Nevada</p>
            <p className="mb-2">Nevada License: S.0197614</p>
            <p className="mb-2">(702) 299-6607</p>
            <p>DrJanSells@HomesteadWestLasVegas.com</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Map Location</h3>
            <p className="mb-2">5592 Dapple Gray Rd</p>
            <p className="mb-2">Las Vegas, NV 89149</p>
            <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Homestead West Location - 5592 Dapple Gray Rd, Las Vegas, NV 89149"
                className="w-full"
              />
            </div>
            <a
              href="/location"
              className="inline-block mt-3 text-yellow-400 hover:text-yellow-300 text-sm transition-colors"
            >
              Find Our Office (map & directions) →
            </a>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-4">
              <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Dr. Jan</a></li>
              <li><a href="/location" className="hover:text-yellow-400 transition-colors">Find Our Office</a></li>
              <li><a href="/directions" className="hover:text-yellow-400 transition-colors">Directions</a></li>
              <li><a href="/amenities" className="hover:text-yellow-400 transition-colors">Nearby Amenities</a></li>
              <li><a href="/vip-buyer-program" className="hover:text-yellow-400 transition-colors">VIP Buyer Program</a></li>
              <li><a href="/testimonials" className="hover:text-yellow-400 transition-colors">Testimonials</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
            {/* Calendly link widget */}
            <div className="mt-4">
              <CalendlyLink />
            </div>
          </div>
        </div>
        
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <img 
            src="/images/bhhs-logo.svg" 
            alt="Berkshire Hathaway HomeServices Nevada" 
            width={200}
            height={48}
            className="h-12 w-auto"
            loading="lazy"
          />
          <a
            href="https://www.hud.gov/program_offices/fair_housing_equal_opp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors text-sm font-semibold px-4 py-2 border border-white rounded"
            aria-label="Equal Housing Opportunity"
          >
            Equal Housing Opportunity
          </a>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p className="mb-2">
            © 2025 HomesteadWestLasVegas.com | All rights reserved.
          </p>
          <p className="text-gray-400">
            Independent real estate resource. Not affiliated with or endorsed by the builder. 
            Dr. Jan Duffy is an independent real estate agent with Berkshire Hathaway HomeServices Nevada, providing expert guidance to home buyers.
          </p>
        </div>
      </div>
    </footer>
  );
}

