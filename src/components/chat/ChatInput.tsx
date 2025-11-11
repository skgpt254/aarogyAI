import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useChatStore } from '@/stores/chatStore';
import { Send, Mic, MicOff } from 'lucide-react';
import VoiceRecorder from './VoiceRecorder';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const [showVoiceRecorder, setShowVoiceRecorder] = useState(false);
  const { addMessage, setTyping, setThinking, isVoiceMode, toggleVoiceMode } = useChatStore();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');

    addMessage({
      role: 'user',
      content: userMessage,
    });

    setThinking(true);
    
    setTimeout(() => {
      setThinking(false);
      setTyping(true);
      
      setTimeout(() => {
        setTyping(false);
        addMessage({
          role: 'assistant',
          content: `I understand you're asking about: "${userMessage}". I'm here to help! This is a demo response. In production, this would connect to the Aarogy CareAgent API for real-time assistance with appointments, diagnostics, health queries, and more.`,
        });
      }, 1500);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-border bg-background/95 backdrop-blur-lg p-4">
      <div className="max-w-4xl mx-auto">
        {showVoiceRecorder ? (
          <VoiceRecorder onClose={() => setShowVoiceRecorder(false)} />
        ) : (
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message... (Press Enter to send)"
                className="min-h-[60px] max-h-[200px] resize-none pr-12"
                rows={2}
              />
            </div>

            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="icon"
                  variant={isVoiceMode ? 'default' : 'outline'}
                  onClick={() => {
                    toggleVoiceMode();
                    setShowVoiceRecorder(true);
                  }}
                  className="h-[60px] w-[60px]"
                >
                  {isVoiceMode ? (
                    <MicOff className="h-5 w-5" />
                  ) : (
                    <Mic className="h-5 w-5" />
                  )}
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="icon"
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="h-[60px] w-[60px] bg-gradient-primary hover:opacity-90"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
