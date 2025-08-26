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
    <section id="features" className="py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Comprehensive Legal AI Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our integrated suite of AI tools transforms every aspect of legal work, 
            from document analysis to research and contract management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-8 text-center group transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-300"
            >
              <div className="w-16 h-16 bg-gray-900/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900/10 transition-colors duration-200">
                <feature.icon className="h-8 w-8 text-gray-900" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed">
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