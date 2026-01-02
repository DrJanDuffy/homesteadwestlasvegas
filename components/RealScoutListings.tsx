export default function RealScoutListings() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Available Homes in Las Vegas
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
        </p>
        
        <div className="max-w-7xl mx-auto">
          <realscout-office-listings 
            agent-encoded-id="QWdlbnQtMjI1MDUw" 
            sort-order="PRICE_HIGH" 
            listing-status="For Sale" 
            property-types=",SFR" 
            price-min="400000" 
            price-max="700000"
          />
        </div>
      </div>
    </section>
  );
}

