import { 
  FileText, 
  MessageSquare, 
  Search, 
  BookOpen 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Automated Document Review",
    description: "AI-powered analysis of contracts, legal documents, and case files with intelligent highlighting and risk assessment."
  },
  {
    icon: MessageSquare,
    title: "Legal AI Chat",
    description: "Interactive AI assistant trained on legal databases to provide instant answers and legal research support."
  },
  {
    icon: Search,
    title: "Web Research Agent",
    description: "Comprehensive legal research across multiple databases, case law, and regulatory sources with citations."
  },
  {
    icon: BookOpen,
    title: "Contract Template Library",
    description: "Extensive collection of legal templates with AI-powered customization and clause recommendations."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="heading-section mb-6">
            Comprehensive Legal AI Platform
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Our integrated suite of AI tools transforms every aspect of legal work, 
            from document analysis to research and contract management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card text-center group">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;