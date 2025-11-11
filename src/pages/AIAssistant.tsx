import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useChatStore } from '@/stores/chatStore';
import ChatWindow from '@/components/chat/ChatWindow';
import ChatInput from '@/components/chat/ChatInput';
import Navbar from '@/components/layout/Navbar';
import { Trash2, Languages } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const AIAssistant = () => {
  const { clearMessages, currentLanguage, setLanguage } = useChatStore();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col pt-16 md:pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-border bg-card/50 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Aarogy CareAgent
                </h1>
                <p className="text-sm text-muted-foreground">
                  Your AI-powered healthcare assistant
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Select value={currentLanguage} onValueChange={(value: any) => setLanguage(value)}>
                  <SelectTrigger className="w-[140px]">
                    <Languages className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">हिंदी</SelectItem>
                    <SelectItem value="hinglish">Hinglish</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon" onClick={clearMessages}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <ChatWindow />
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
