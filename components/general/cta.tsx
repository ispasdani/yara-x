import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif tracking-tight">
            Ready to transform your legal practice?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join leading law firms and legal professionals who are already leveraging 
            AI to deliver better outcomes for their clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-gray-900 text-white rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 group">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-gray-300 bg-white text-gray-900 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
              Contact Sales
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-8">
            Free 30-day trial • No credit card required • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;