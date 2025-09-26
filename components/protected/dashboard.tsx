import { useState } from "react";
import {
  FileText,
  MessageSquare,
  Settings,
  BarChart3,
  Upload,
  History,
  Menu,
  X,
  CreditCard,
  Star,
  Workflow,
  Clock,
  Brain,
  Edit,
  Layout,
  Mic,
  Plus,
  Check,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WorkspaceModal } from "@/components/WorkspaceModal";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState(false);
  const [currentWorkspace, setCurrentWorkspace] = useState("Main Workspace");
  const [workspaces, setWorkspaces] = useState([
    "Main Workspace",
    "Personal Workspace",
    "Business Workspace",
  ]);

  const sidebarItems = [
    { icon: MessageSquare, label: "AI Assistant", href: "/legal-chat" },
    { icon: Workflow, label: "Agentic Workflows", href: "#workflows" },
    { icon: Clock, label: "Scheduled Tasks", href: "#scheduled" },
    { icon: Edit, label: "Text Editor", href: "/text-editor" },
    { icon: Layout, label: "Templates", href: "/template-customize" },
    { icon: BarChart3, label: "Analytics", href: "#analytics" },
    { icon: Settings, label: "Settings", href: "#settings" },
  ];

  const handleCreateWorkspace = (name: string) => {
    setWorkspaces((prev) => [...prev, name]);
    setCurrentWorkspace(name);
  };

  const recentActivities = [
    {
      id: 1,
      action: "Document analyzed",
      file: "contract-v2.pdf",
      time: "2 minutes ago",
    },
    {
      id: 2,
      action: "Chat session",
      query: "Terms and conditions review",
      time: "15 minutes ago",
    },
    {
      id: 3,
      action: "Document uploaded",
      file: "legal-brief.docx",
      time: "1 hour ago",
    },
    {
      id: 4,
      action: "Analysis completed",
      file: "partnership-agreement.pdf",
      time: "3 hours ago",
    },
  ];

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r border-sidebar-border">
          <SidebarHeader className="p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  L
                </span>
              </div>
              <span className="font-serif text-xl font-semibold text-sidebar-foreground">
                LegalAI
              </span>
            </div>

            {/* Workspace Selector */}
            <SidebarGroup>
              <div className="flex items-center justify-between mb-2">
                <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/70">
                  Workspaces
                </SidebarGroupLabel>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-sidebar-accent"
                  onClick={() => setIsWorkspaceModalOpen(true)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-auto p-2 hover:bg-sidebar-accent text-left font-normal"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary/10 rounded border border-primary/20 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">
                          {currentWorkspace.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-sidebar-foreground truncate">
                        {currentWorkspace}
                      </span>
                    </div>
                    <ChevronDown className="h-3 w-3 text-sidebar-foreground/50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {workspaces.map((workspace) => (
                    <DropdownMenuItem
                      key={workspace}
                      onClick={() => setCurrentWorkspace(workspace)}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-primary/10 rounded border border-primary/20 flex items-center justify-center">
                          <span className="text-xs font-medium text-primary">
                            {workspace.charAt(0)}
                          </span>
                        </div>
                        <span>{workspace}</span>
                      </div>
                      {currentWorkspace === workspace && (
                        <Check className="h-3 w-3" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarGroup>
          </SidebarHeader>

          <SidebarContent className="px-4">
            <SidebarMenu>
              {sidebarItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 p-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-sidebar-foreground mb-3">
                Recent Activity
              </h3>
              <div className="space-y-2">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="p-3 rounded-lg bg-sidebar-accent/50 hover:bg-sidebar-accent transition-colors"
                  >
                    <p className="text-sm font-medium text-sidebar-foreground">
                      {activity.action}
                    </p>
                    <p className="text-xs text-sidebar-foreground/70">
                      {activity.file || activity.query}
                    </p>
                    <p className="text-xs text-sidebar-foreground/50 mt-1">
                      {activity.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SidebarContent>

          <SidebarFooter className="p-4">
            <Card className="bg-sidebar-accent border-sidebar-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-sidebar-foreground flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Credits
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-sidebar-primary">
                    850
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-sidebar-primary text-sidebar-primary-foreground"
                  >
                    <Star className="h-3 w-3 mr-1" />
                    Pro
                  </Badge>
                </div>
                <p className="text-xs text-sidebar-foreground/70 mb-3">
                  Credits remaining this month
                </p>
                <Button
                  size="sm"
                  className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                >
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          {/* Dashboard Header */}
          <header className="bg-background border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    Dashboard
                  </h1>
                  <p className="text-muted-foreground">
                    Manage your legal documents and analyses
                  </p>
                </div>
              </div>
              <Button className="btn-hero">New Analysis</Button>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 p-6 bg-surface/50">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Documents
                    </CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">124</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Analyses Completed
                    </CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89</div>
                    <p className="text-xs text-muted-foreground">
                      +7% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Chat Sessions
                    </CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45</div>
                    <p className="text-xs text-muted-foreground">
                      +23% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Credits Used
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">150</div>
                    <p className="text-xs text-muted-foreground">
                      850 remaining
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Partnership Agreement",
                        type: "PDF",
                        size: "2.3 MB",
                        status: "Analyzed",
                      },
                      {
                        name: "Terms of Service",
                        type: "DOCX",
                        size: "1.8 MB",
                        status: "Processing",
                      },
                      {
                        name: "Privacy Policy",
                        type: "PDF",
                        size: "956 KB",
                        status: "Completed",
                      },
                      {
                        name: "License Agreement",
                        type: "PDF",
                        size: "3.2 MB",
                        status: "Pending",
                      },
                    ].map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-foreground">
                              {doc.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {doc.type} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            doc.status === "Completed"
                              ? "default"
                              : doc.status === "Processing"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {doc.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>

      <WorkspaceModal
        open={isWorkspaceModalOpen}
        onOpenChange={setIsWorkspaceModalOpen}
        onCreateWorkspace={handleCreateWorkspace}
      />
    </SidebarProvider>
  );
};

export default Dashboard;
