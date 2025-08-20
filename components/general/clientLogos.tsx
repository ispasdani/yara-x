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
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground tracking-wider uppercase">
            Trusted by leading law firms worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <div key={index} className="text-center">
              <div className="h-12 flex items-center justify-center">
                <span className="text-muted-foreground font-medium text-sm tracking-wide">
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