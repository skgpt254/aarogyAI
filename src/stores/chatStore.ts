import { create } from 'zustand';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  language?: 'en' | 'hi' | 'hinglish';
}

interface ChatState {
  messages: Message[];
  isTyping: boolean;
  isThinking: boolean;
  isVoiceMode: boolean;
  currentLanguage: 'en' | 'hi' | 'hinglish';
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setTyping: (isTyping: boolean) => void;
  setThinking: (isThinking: boolean) => void;
  toggleVoiceMode: () => void;
  setLanguage: (language: 'en' | 'hi' | 'hinglish') => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isTyping: false,
  isThinking: false,
  isVoiceMode: false,
  currentLanguage: 'en',
  
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: `msg-${Date.now()}-${Math.random()}`,
          timestamp: new Date(),
        },
      ],
    })),
  
  setTyping: (isTyping) => set({ isTyping }),
  setThinking: (isThinking) => set({ isThinking }),
  toggleVoiceMode: () => set((state) => ({ isVoiceMode: !state.isVoiceMode })),
  setLanguage: (language) => set({ currentLanguage: language }),
  clearMessages: () => set({ messages: [] }),
}));
