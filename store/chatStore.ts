import { create } from 'zustand';

interface ChatState {
  inputText: string;
  uploadedDocument: File | null;
  setInputText: (text: string) => void;
  setUploadedDocument: (file: File | null) => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  inputText: '',
  uploadedDocument: null,
  setInputText: (text) => set({ inputText: text }),
  setUploadedDocument: (file) => set({ uploadedDocument: file }),
  clearChat: () => set({ inputText: '', uploadedDocument: null }),
}));