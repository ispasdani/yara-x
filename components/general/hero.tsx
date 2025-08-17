import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-border text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Introducing AI-Powered Legal Workflows
            </div>
            
            <h1 className="heading-hero">
              Unleash your legal expertise
            </h1>
            
            <p className="text-lead max-w-lg">
              Transform your legal practice with AI-powered document review, intelligent research, and automated workflows. 
              Experience precision, speed, and collaboration like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Watch Overview
              </Button>
            </div>
          </div>
          
          {/* Right Content - Product Mockup */}
          <div className="relative">
            <div className="floating-card p-4 bg-gradient-to-br from-surface to-background">
              <img 
                src={""} 
                alt="Legal platform interface showing document review and AI analysis"
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/3 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;