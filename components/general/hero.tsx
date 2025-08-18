import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full border text-sm"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--muted-foreground)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "var(--primary)" }}
              ></span>
              Introducing AI-Powered Legal Workflows
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold leading-tight font-serif"
              style={{ color: "var(--foreground)" }}
            >
              Unleash your legal expertise
            </h1>

            <p
              className="text-xl leading-relaxed max-w-lg"
              style={{ color: "var(--muted-foreground)" }}
            >
              Transform your legal practice with AI-powered document review,
              intelligent research, and automated workflows. Experience
              precision, speed, and collaboration like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="ghost"
                className="hover:text-foreground"
                style={{ color: "var(--muted-foreground)" }}
              >
                Watch Overview
              </Button>
            </div>
          </div>

          {/* Right Content - Product Mockup */}
          <div className="relative">
            <div
              className="p-4 rounded-2xl"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, var(--card), var(--background))",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={""}
                alt="Legal platform interface showing document review and AI analysis"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full"
              style={{ backgroundColor: "color-mix(in oklch, var(--primary) 5%, transparent)" }}
            ></div>
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full"
              style={{ backgroundColor: "color-mix(in oklch, var(--primary) 30%, transparent)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
