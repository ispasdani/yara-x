"use client";

import { useState, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  Connection,
  Edge,
  Node,
  Handle,
  Position,
  NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Play,
  Square,
  Save,
  Search,
  FileText,
  Zap,
  CheckCircle,
  Database,
  Globe,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Upload,
  PenTool,
  Eye,
} from "lucide-react";
import { useLanguageData } from "@/hooks/useLanguageData";

// Define interface for node data
interface NodeData {
  label: string;
  [key: string]: unknown;
}

// Custom Node Components
const ContractUploadNode = ({ data, selected }: NodeProps) => {
  const { langData } = useLanguageData();

  return (
    <Card className={`min-w-[200px] ${selected ? "ring-2 ring-primary" : ""}`}>
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-primary"
      />

      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <Upload className="h-3 w-3 text-primary-foreground" />
          </div>
          {(data as NodeData).label ||
            langData?.public.interactiveWorkflowDemo.nodeCardOneTitle.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">
            {
              langData?.public.interactiveWorkflowDemo.nodeCardOneDescription
                .title
            }
          </div>
          <Badge variant="outline" className="text-xs">
            <FileText className="mr-1 h-3 w-3" />
            PDF, DOC accepted
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const ContractAnalysisNode = ({ data, selected }: NodeProps) => {
  const { langData } = useLanguageData();

  return (
    <Card className={`min-w-[200px] ${selected ? "ring-2 ring-primary" : ""}`}>
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-secondary"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-secondary"
      />

      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center">
            <Search className="h-3 w-3 text-secondary-foreground" />
          </div>
          {(data as NodeData).label ||
            langData?.public.interactiveWorkflowDemo.nodeCardTwoTitle.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">
            {
              langData?.public.interactiveWorkflowDemo.nodeCardTwoDescription
                .title
            }
          </div>
          <Badge variant="outline" className="text-xs">
            <Zap className="mr-1 h-3 w-3" />
            AI-powered
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const TenantRightsNode = ({ data, selected }: NodeProps) => {
  const { langData } = useLanguageData();

  return (
    <Card className={`min-w-[200px] ${selected ? "ring-2 ring-primary" : ""}`}>
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-accent"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-accent"
      />

      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
            <Globe className="h-3 w-3 text-accent-foreground" />
          </div>
          {(data as NodeData).label ||
            langData?.public.interactiveWorkflowDemo.nodeCardThreeTitle.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">
            {
              langData?.public.interactiveWorkflowDemo.nodeCardThreeDescription
                .title
            }
          </div>
          <Badge variant="outline" className="text-xs">
            <Database className="mr-1 h-3 w-3" />
            Legal research
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const DisputeClassificationNode = ({ data, selected }: NodeProps) => {
  const { langData } = useLanguageData();

  return (
    <Card className={`min-w-[200px] ${selected ? "ring-2 ring-primary" : ""}`}>
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-muted"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-muted"
      />

      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
            <CheckCircle className="h-3 w-3 text-muted-foreground" />
          </div>
          {(data as NodeData).label ||
            langData?.public.interactiveWorkflowDemo.nodeCardFourTitle.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">
            {
              langData?.public.interactiveWorkflowDemo.nodeCardFourDescription
                .title
            }
          </div>
          <Badge variant="outline" className="text-xs">
            <Eye className="mr-1 h-3 w-3" />
            Classification
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const StrategyRecommendationNode = ({ data, selected }: NodeProps) => {
  const { langData } = useLanguageData();

  return (
    <Card className={`min-w-[200px] ${selected ? "ring-2 ring-primary" : ""}`}>
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-primary"
      />

      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <PenTool className="h-3 w-3 text-primary-foreground" />
          </div>
          {(data as NodeData).label ||
            langData?.public.interactiveWorkflowDemo.nodeCardFiveTitle.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">
            {
              langData?.public.interactiveWorkflowDemo.nodeCardFiveDescription
                .title
            }
          </div>
          <Badge variant="outline" className="text-xs">
            <FileText className="mr-1 h-3 w-3" />
            Strategy report
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const nodeTypes = {
  contractUpload: ContractUploadNode,
  contractAnalysis: ContractAnalysisNode,
  tenantRights: TenantRightsNode,
  disputeClassification: DisputeClassificationNode,
  strategyRecommendation: StrategyRecommendationNode,
};

// Initial workflow data - Rental Contract Dispute Case
const initialNodes: Node[] = [
  {
    id: "1",
    type: "contractUpload",
    position: { x: 100, y: 100 },
    data: { label: "" },
  },
  {
    id: "2",
    type: "contractAnalysis",
    position: { x: 500, y: 100 },
    data: { label: "" },
  },
  {
    id: "3",
    type: "tenantRights",
    position: { x: 900, y: 300 },
    data: { label: "" },
  },
  {
    id: "4",
    type: "disputeClassification",
    position: { x: 900, y: 100 },
    data: { label: "" },
  },
  {
    id: "5",
    type: "strategyRecommendation",
    position: { x: 900, y: -100 },
    data: { label: "" },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: false },
  { id: "e2-3", source: "2", target: "3", animated: false },
  { id: "e2-4", source: "2", target: "4", animated: false },
  { id: "e2-5", source: "2", target: "5", animated: false },
];

interface ExecutionStep {
  id: string;
  nodeId: string;
  name: string;
  status: "pending" | "running" | "completed";
  startTime?: string;
  endTime?: string;
  result?: string;
  expanded?: boolean;
}

const InteractiveWorkflowDemo = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [executionSteps, setExecutionSteps] = useState<ExecutionStep[]>([]);
  const [leftPanelVisible, setLeftPanelVisible] = useState(true);
  const [rightPanelVisible, setRightPanelVisible] = useState(false);
  const { langData } = useLanguageData();

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  const addNodeToCanvas = useCallback(
    (nodeType: string) => {
      const newNode: Node = {
        id: `${Date.now()}`,
        type: nodeType,
        position: { x: 300, y: 200 },
        data: { label: `New ${nodeType}` },
      };
      setNodes((nds) => [...nds, newNode]);
    },
    [setNodes]
  );

  const runWorkflow = async () => {
    setIsRunning(true);
    const steps: ExecutionStep[] = nodes.map((node) => ({
      id: `step-${node.id}`,
      nodeId: node.id,
      name: (node.data as NodeData).label || "Untitled",
      status: "pending",
      expanded: false,
    }));
    setExecutionSteps(steps);

    // Simulate workflow execution
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];

      // Update to running
      setExecutionSteps((prev) =>
        prev.map((s) =>
          s.nodeId === step.nodeId
            ? {
                ...s,
                status: "running",
                startTime: new Date().toLocaleTimeString(),
              }
            : s
        )
      );

      // Animate edges
      setEdges((prev) =>
        prev.map((edge) =>
          edge.source === step.nodeId ? { ...edge, animated: true } : edge
        )
      );

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Complete step with fake results for rental contract dispute
      const fakeResults: { [key: string]: string } = {
        "1": "Uploaded lease_agreement.pdf - 12 pages, standard residential lease",
        "2": "Identified rent: $2,400/month, security deposit: $3,600, lease term: 12 months, pet policy: no pets allowed",
        "3": "Found applicable rent control laws, tenant has right to withhold rent for habitability issues",
        "4": "Classified as: Habitability dispute - broken heating system, severity: high priority",
        "5": "Recommended: Document all communications, request immediate repairs, consider rent escrow if unresolved",
      };

      setExecutionSteps((prev) =>
        prev.map((s) =>
          s.nodeId === step.nodeId
            ? {
                ...s,
                status: "completed",
                endTime: new Date().toLocaleTimeString(),
                result:
                  fakeResults[step.nodeId] ||
                  "Processing completed successfully",
              }
            : s
        )
      );

      // Stop edge animation
      setEdges((prev) =>
        prev.map((edge) =>
          edge.source === step.nodeId ? { ...edge, animated: false } : edge
        )
      );
    }

    setIsRunning(false);
  };

  const nodeCategories = [
    {
      name: langData?.public.interactiveWorkflowDemo.nodeOneTitle.title,
      items: [
        {
          id: "contractUpload",
          name: langData?.public.interactiveWorkflowDemo.nodeOneOptionOneTitle
            .title,
          icon: Upload,
          description:
            langData?.public.interactiveWorkflowDemo.nodeOneOptionOneDescription
              .title,
        },
        {
          id: "contractAnalysis",
          name: langData?.public.interactiveWorkflowDemo.nodeOneOptionTwoTitle
            .title,
          icon: Search,
          description:
            langData?.public.interactiveWorkflowDemo.nodeOneOptionTwoDescription
              .title,
        },
      ],
    },
    {
      name: langData?.public.interactiveWorkflowDemo.nodeTwoTitle.title,
      items: [
        {
          id: "tenantRights",
          name: langData?.public.interactiveWorkflowDemo.nodeTwoOptionOneTitle
            .title,
          icon: Globe,
          description:
            langData?.public.interactiveWorkflowDemo.nodeTwoOptionOneDescription
              .title,
        },
        {
          id: "disputeClassification",
          name: langData?.public.interactiveWorkflowDemo.nodeTwoOptionTwoTitle
            .title,
          icon: CheckCircle,
          description:
            langData?.public.interactiveWorkflowDemo.nodeTwoOptionTwoDescription
              .title,
        },
      ],
    },
    {
      name: langData?.public.interactiveWorkflowDemo.nodeThreeTitle.title,
      items: [
        {
          id: "strategyRecommendation",
          name: langData?.public.interactiveWorkflowDemo.nodeThreeOptionOneTitle
            .title,
          icon: PenTool,
          description:
            langData?.public.interactiveWorkflowDemo
              .nodeThreeOptionOneDescription.title,
        },
      ],
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-surface to-background rounded-2xl border border-border shadow-lg overflow-hidden h-[700px]">
      {/* Left Panel - Node Palette */}
      {leftPanelVisible && (
        <div className="absolute left-0 top-0 w-64 h-full bg-background/95 border-r border-border p-4 z-10">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-2">Node Palette</h3>

            <div className="h-96 overflow-y-auto">
              <div className="space-y-4">
                {nodeCategories.map((category) => (
                  <div key={category.name} className="space-y-2 flex-1">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {category.name}
                    </h4>
                    {category.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Card
                          key={item.id}
                          className="p-2 cursor-pointer hover:bg-accent/50 transition-colors"
                          onClick={() => addNodeToCanvas(item.id)}
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium truncate">
                                {item.name}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Left Panel Toggle */}
      <Button
        variant="outline"
        size="sm"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 h-8 w-8 p-0 rounded-r-md rounded-l-none border-l-0 bg-gray-200 cursor-pointer"
        style={{ left: leftPanelVisible ? "256px" : "0px" }}
        onClick={() => setLeftPanelVisible(!leftPanelVisible)}
      >
        {leftPanelVisible ? (
          <ChevronLeft className="w-3 h-3" />
        ) : (
          <ChevronRight className="w-3 h-3" />
        )}
      </Button>

      {/* Main Canvas */}
      <div
        className="absolute top-12 bottom-0 overflow-hidden"
        style={{
          left: leftPanelVisible ? "264px" : "0px",
          right: rightPanelVisible ? "320px" : "0px",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          className="bg-background"
        >
          <Controls />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>

      {/* Toolbar */}
      <div
        className="absolute top-0 h-12 bg-background/95 border-b border-border flex items-center gap-2 px-4 z-10"
        style={{
          left: leftPanelVisible ? "264px" : "0px",
          right: rightPanelVisible ? "320px" : "0px",
        }}
      >
        <Button
          size="sm"
          onClick={runWorkflow}
          disabled={isRunning}
          className="h-7 text-xs"
        >
          {isRunning ? (
            <Square className="w-3 h-3 mr-1" />
          ) : (
            <Play className="w-3 h-3 mr-1" />
          )}
          {isRunning
            ? "Running..."
            : langData?.public.interactiveWorkflowDemo.runBtn.title}
        </Button>
        <Button variant="outline" size="sm" className="h-7 text-xs">
          <Save className="w-3 h-3 mr-1" />
          {langData?.public.interactiveWorkflowDemo.saveBtn.title}
        </Button>
      </div>

      {/* Right Panel - Properties & Execution */}
      {rightPanelVisible && (
        <div className="absolute right-0 top-0 w-80 h-full bg-background/95 border-l border-border z-10">
          <div className="flex flex-col h-full">
            {/* Properties Panel */}
            <div className="p-4 border-b border-border">
              <h3 className="text-sm font-semibold mb-3">Properties</h3>
              {selectedNode ? (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">
                      Name
                    </label>
                    <Input
                      value={(selectedNode.data as NodeData).label || ""}
                      className="h-7 text-xs"
                      onChange={(e) => {
                        setNodes((nds) =>
                          nds.map((node) =>
                            node.id === selectedNode.id
                              ? {
                                  ...node,
                                  data: { ...node.data, label: e.target.value },
                                }
                              : node
                          )
                        );
                        setSelectedNode({
                          ...selectedNode,
                          data: { ...selectedNode.data, label: e.target.value },
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">
                      Node Type
                    </label>
                    <Badge variant="outline" className="text-xs">
                      {selectedNode.type}
                    </Badge>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Select a node to edit properties
                </p>
              )}
            </div>

            {/* Execution Viewer */}
            <div className="flex-1 p-4">
              <h3 className="text-sm font-semibold mb-3">Execution Log</h3>
              <ScrollArea className="h-full">
                {executionSteps.length === 0 ? (
                  <p className="text-xs text-muted-foreground">
                    Click &quot;Run Workflow&quot; to see execution steps
                  </p>
                ) : (
                  <div className="space-y-2">
                    {executionSteps.map((step) => (
                      <div
                        key={step.id}
                        className="border border-border rounded-lg p-2"
                      >
                        <div
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => {
                            setExecutionSteps((prev) =>
                              prev.map((s) =>
                                s.id === step.id
                                  ? { ...s, expanded: !s.expanded }
                                  : s
                              )
                            );
                          }}
                        >
                          <div className="flex items-center gap-2">
                            {step.expanded ? (
                              <ChevronDown className="w-3 h-3" />
                            ) : (
                              <ChevronRight className="w-3 h-3" />
                            )}
                            <span className="text-xs font-medium">
                              {step.name}
                            </span>
                          </div>
                          <Badge
                            variant={
                              step.status === "completed"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {step.status}
                          </Badge>
                        </div>
                        {step.expanded && (
                          <div className="mt-2 pl-5 text-xs text-muted-foreground space-y-1">
                            {step.startTime && <p>Started: {step.startTime}</p>}
                            {step.endTime && <p>Completed: {step.endTime}</p>}
                            {step.result && (
                              <p className="text-foreground">{step.result}</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </div>
          </div>
        </div>
      )}

      {/* Right Panel Toggle */}
      <Button
        variant="outline"
        size="sm"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 h-8 w-8 p-0 rounded-l-md rounded-r-none border-r-0 bg-gray-200 cursor-pointer"
        style={{ right: rightPanelVisible ? "320px" : "0px" }}
        onClick={() => setRightPanelVisible(!rightPanelVisible)}
      >
        {rightPanelVisible ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </Button>
    </div>
  );
};

export default InteractiveWorkflowDemo;
