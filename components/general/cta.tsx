import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            Ready to transform your legal practice?
          </h2>
          
          <p className="text-lead mb-12 max-w-2xl mx-auto">
            Join leading law firms and legal professionals who are already leveraging 
            AI to deliver better outcomes for their clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero group">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" className="px-8 py-4 text-base border-border hover:bg-surface">
              Contact Sales
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Free 30-day trial • No credit card required • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;