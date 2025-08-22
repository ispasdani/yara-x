const clientLogos = [
  "Baker McKenzie",
  "Clifford Chance",
  "Latham & Watkins",
  "Skadden",
  "White & Case",
  "Freshfields"
];

const ClientLogos = () => {
  return (
    <section className="py-16 w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-wider uppercase font-medium">
            Trusted by leading law firms worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <div key={index} className="text-center">
              <div className="h-12 flex items-center justify-center">
                <span className="text-gray-500 font-medium text-sm tracking-wide hover:text-gray-700 transition-colors duration-200">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;