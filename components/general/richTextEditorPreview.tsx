"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Link,
  Palette,
  Undo,
  Redo,
  MessageSquare,
  Send,
  Sparkles,
  Copy,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TextEditorPreview = () => {
  const router = useRouter();
  const [selectedDemo, setSelectedDemo] = useState("editing");

  const handleTryEditor = () => {
    router.push(
      "/text-editor?template=Sales Contract (Goods)&category=Sales Documents and Forms&mode=edit"
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Text Editor
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Professional Document Editing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Edit your legal templates with our intelligent text editor. Select
            text, get AI suggestions, and format documents with
            professional-grade tools.
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted/50 rounded-lg p-1">
            <Button
              variant={selectedDemo === "editing" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedDemo("editing")}
              className="mx-1"
            >
              Text Editing
            </Button>
            <Button
              variant={selectedDemo === "ai" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedDemo("ai")}
              className="mx-1"
            >
              AI Assistant
            </Button>
            <Button
              variant={selectedDemo === "formatting" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedDemo("formatting")}
              className="mx-1"
            >
              Formatting
            </Button>
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-background/80 backdrop-blur-sm">
            {selectedDemo === "editing" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <h3 className="text-lg font-semibold">
                        Sales Contract (Goods)
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      AI Chat
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-muted/20 min-h-[300px]">
                  <div className="space-y-4 text-sm">
                    <h4 className="font-semibold text-lg">
                      1. Parties & Effective Date
                    </h4>
                    <p>
                      This Sales Contract (the "Agreement") is made as of{" "}
                      <span className="bg-primary/10 border-2 border-primary/30 rounded px-2 py-1">
                        [DD MMM YYYY]
                      </span>{" "}
                      (the "Effective Date") by and between:
                    </p>
                    <p>
                      <strong>Seller:</strong>{" "}
                      <span className="bg-yellow-100 dark:bg-yellow-900/30">
                        {"{{Seller Legal Name}}"}
                      </span>
                      , a company organized under the laws of{" "}
                      {"{{Seller Jurisdiction}}"}, with registered address at{" "}
                      {"{{Seller Address}}"} ("Seller").
                    </p>
                    <p className="text-muted-foreground italic">
                      ← Select any text to get AI suggestions for improvements
                    </p>
                  </div>
                </div>
              </div>
            )}

            {selectedDemo === "ai" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Editor Side */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Document Editor
                  </h3>
                  <div className="border rounded-lg p-4 bg-muted/20 min-h-[200px]">
                    <p className="text-sm">
                      <span className="bg-primary/20 border border-primary/40 rounded px-1">
                        This Sales Contract establishes the terms
                      </span>{" "}
                      for the sale of goods between the parties...
                    </p>
                    <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">
                          Selected: "This Sales Contract establishes..."
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-primary/10"
                        >
                          Make Formal
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-primary/10"
                        >
                          Expand
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-primary/10"
                        >
                          Fix Grammar
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Chat Side */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    AI Assistant
                  </h3>
                  <div className="border rounded-lg p-4 bg-muted/20 h-[200px] flex flex-col">
                    <div className="flex-1 space-y-3 text-sm">
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground p-2 rounded-lg max-w-[80%]">
                          Make this more professional
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-muted p-2 rounded-lg max-w-[80%]">
                          Here's a more professional version: "This Sales
                          Agreement hereby establishes the comprehensive terms
                          and conditions..."
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 pt-3 border-t">
                      <div className="flex-1 bg-muted/50 rounded px-3 py-2 text-sm text-muted-foreground">
                        Ask AI to help with your text...
                      </div>
                      <Button size="sm">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedDemo === "formatting" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Rich Text Formatting</h3>

                {/* Enhanced Toolbar Demo */}
                <div className="flex flex-wrap items-center gap-2 p-3 bg-muted/30 rounded-lg border">
                  {/* Text Formatting */}
                  <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Bold"
                    >
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Italic"
                    >
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Underline"
                    >
                      <Underline className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Strikethrough"
                    >
                      <Strikethrough className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Font Size & Color */}
                  <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
                    <select className="text-sm border border-input bg-background rounded px-2 py-1">
                      <option>Small</option>
                      <option>Normal</option>
                      <option>Large</option>
                      <option>X-Large</option>
                    </select>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Text Color"
                    >
                      <Palette className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Text Alignment */}
                  <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Align Left"
                    >
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Align Center"
                    >
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Align Right"
                    >
                      <AlignRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Justify"
                    >
                      <AlignJustify className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Lists & Links */}
                  <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Bullet List"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Numbered List"
                    >
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Insert Link"
                    >
                      <Link className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Undo/Redo & Copy */}
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Undo"
                    >
                      <Undo className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Redo"
                    >
                      <Redo className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 ml-2"
                      title="Copy"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Enhanced Formatted Text Example */}
                <div className="border rounded-lg p-6 bg-muted/20">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-center">
                      SALES CONTRACT (GOODS)
                    </h4>
                    <p className="text-center italic text-lg">
                      Professional Document Template
                    </p>

                    <div className="space-y-3">
                      <p>
                        <strong>Effective Date:</strong> <u>March 15, 2024</u>
                      </p>
                      <p style={{ color: "#0066cc" }}>
                        <strong>Document Type:</strong> <s>Draft</s>{" "}
                        <span className="text-green-600 font-semibold">
                          Final
                        </span>
                      </p>

                      <div>
                        <p className="font-semibold">
                          Parties involved in this agreement:
                        </p>
                        <ul className="list-disc ml-6 space-y-1 mt-2">
                          <li>
                            <strong>Seller:</strong> ABC Corporation Ltd.
                          </li>
                          <li>
                            <strong>Buyer:</strong> XYZ Limited Partnership
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold">
                          Contract Terms (Numbered List):
                        </p>
                        <ol className="list-decimal ml-6 space-y-1 mt-2">
                          <li>Payment terms and conditions</li>
                          <li>Delivery and shipping arrangements</li>
                          <li>Product specifications and warranties</li>
                        </ol>
                      </div>

                      <p className="text-right italic">
                        For more information, visit:{" "}
                        <span className="text-blue-600 underline cursor-pointer">
                          www.contracthelp.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Text Formatting</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <Bold className="h-3 w-3" /> Bold, italic, underline,
                        strikethrough
                      </li>
                      <li className="flex items-center gap-2">
                        <Palette className="h-3 w-3" /> Custom text colors
                      </li>
                      <li className="flex items-center gap-2">
                        <AlignCenter className="h-3 w-3" /> Text alignment
                        (left, center, right, justify)
                      </li>
                      <li className="flex items-center gap-2">
                        📏 Multiple font sizes
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Advanced Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <List className="h-3 w-3" /> Bullet and numbered lists
                      </li>
                      <li className="flex items-center gap-2">
                        <Link className="h-3 w-3" /> Hyperlink insertion and
                        editing
                      </li>
                      <li className="flex items-center gap-2">
                        <Undo className="h-3 w-3" /> Undo/redo functionality
                      </li>
                      <li className="flex items-center gap-2">
                        ⚡ Real-time formatting preview
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button onClick={handleTryEditor} size="lg" className="px-8">
            Try the Text Editor
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Experience professional document editing with AI assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextEditorPreview;
