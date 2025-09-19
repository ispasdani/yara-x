import { Play, Workflow, Zap, Users, Clock } from "lucide-react";

const workflowFeatures = [
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Drag-and-drop interface to create complex legal workflows without coding",
  },
  {
    icon: Zap,
    title: "Automated Tasks",
    description:
      "Automate document review, client communications, and case management",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Assign tasks, track progress, and collaborate seamlessly across your firm",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description:
      "Built-in time tracking and billing integration for accurate client invoicing",
  },
];

const WorkflowVideo = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Video Section */}
          <div className="relative">
            <div className="aspect-video bg-card rounded-2xl border border-card-border overflow-hidden floating-card">
              {/* Video Placeholder - Replace with actual video */}
              <div className="relative w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="relative z-10 bg-primary/10 backdrop-blur-sm rounded-full p-6 group-hover:bg-primary/20 transition-colors">
                  <Play className="h-12 w-12 text-primary fill-current" />
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-card-border">
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                      Legal Workflow Automation in Action
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Watch how our AI agent creates custom workflows for your
                      practice
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -right-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                New Feature
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
                Create Custom Legal Workflows with AI
              </h2>
              <p className="text-lead mb-8">
                Our intelligent workflow agent understands your legal processes
                and automatically creates custom workflows tailored to your
                practice areas and client needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-hero">Watch Demo</button>
                <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-surface text-foreground rounded-lg border border-card-border hover:bg-surface-hover transition-colors">
                  Try Workflow Builder
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {workflowFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-body text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowVideo;
