import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowUp, Paperclip, X, FileText } from "lucide-react";
import { useChatStore } from "@/store/chatStore";
import { useRouter } from "next/navigation";


const ChatInput = () => {
  // Fake auth state for now - you can replace with Clerk later
  const [isSignedIn, setIsSignedIn] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  
  const { 
    inputText, 
    uploadedDocument, 
    setInputText, 
    setUploadedDocument 
  } = useChatStore();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedDocument(file);
    }
  };

  const handleSubmit = () => {
    if (!isSignedIn) {
      return;
    }
    
   if (inputText.trim() || uploadedDocument) {
      router.push("/legal-chat");
    }
  };

  const removeDocument = () => {
    setUploadedDocument(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="p-4 bg-surface/50 backdrop-blur-sm border border-border/50">
        {!isSignedIn && (
          <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border/30">
            <p className="text-sm text-muted-foreground text-center">
              Please sign in to start using our AI legal assistant
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsSignedIn(true)}
              className="mt-2 mx-auto block"
            >
              Fake Sign In (Demo)
            </Button>
          </div>
        )}
        
        {uploadedDocument && (
          <div className="mb-3 flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground flex-1 truncate">
              {uploadedDocument.name}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeDocument}
              className="h-6 w-6 p-0 hover:bg-destructive/10"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}

        <div className="flex gap-2 items-end">
          <div className="flex-1 relative">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isSignedIn ? "Ask anything about legal documents or upload a file..." : "Sign in to get started"}
              className="min-h-[60px] max-h-32 resize-none pr-12 bg-background/50"
              disabled={!isSignedIn}
            />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="absolute right-2 bottom-2 h-8 w-8 p-0 hover:bg-accent/50"
              disabled={!isSignedIn}
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
            />
          </div>
          
          <Button
            onClick={handleSubmit}
            disabled={!isSignedIn || (!inputText.trim() && !uploadedDocument)}
            className="h-12 w-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
            size="icon"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-2 text-xs text-muted-foreground text-center">
          Press Enter to submit • Shift + Enter for new line
        </div>
      </Card>
    </div>
  );
};

export default ChatInput;