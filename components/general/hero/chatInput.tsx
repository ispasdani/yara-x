import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowUp, Paperclip, X, FileText } from "lucide-react";
import { useChatStore } from "@/store/chatStore";
import { useRouter } from "next/navigation";

const ChatInput = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const { inputText, uploadedDocument, setInputText, setUploadedDocument } =
    useChatStore();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedDocument(file);
    }
  };

  const handleSubmit = () => {
    if (inputText.trim() || uploadedDocument) {
      router.push("/legal-chat");
    }
  };

  const removeDocument = () => {
    setUploadedDocument(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full  mx-auto">
      <Card className="p-4 bg-surface/50 backdrop-blur-sm border border-border/50">
        {uploadedDocument && (
          <div className=" flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20">
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
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder={
                "Ask anything about legal documents or upload a file..."
              }
              className="min-h-12 max-h-32 resize-none pr-12 bg-background/50 p-3 placeholder:text-s"
              // disabled={!isSignedIn}
            />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-accent/50 cursor-pointer"
              // disabled={!isSignedIn}
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
            disabled={!inputText.trim() && !uploadedDocument}
            className="h-12 w-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            size="icon"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-xs text-muted-foreground text-center">
          Press Enter to submit • Shift + Enter for new line
        </div>
      </Card>
    </div>
  );
};

export default ChatInput;
