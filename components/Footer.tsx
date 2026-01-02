export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Homestead West Las Vegas</h3>
            <p className="mb-2">5592 N Dapple Gray Rd, Las Vegas, NV 89149</p>
            <p>(702) 299-6607</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Dr. Jan Duffy</h3>
            <p className="mb-2">Las Vegas Real Estate Expert</p>
            <p className="mb-2">Nevada License: S.0197614</p>
            <p>DrJanSells@HomesteadWestLasVegas.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p className="mb-2">
            © 2025 Homestead West | Homes by Dr Jan Duffy. All rights reserved.
          </p>
          <p className="text-gray-400">
            Independent real estate resource. Not affiliated with or endorsed by the builder. 
            Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
          </p>
        </div>
      </div>
    </footer>
  );
}

