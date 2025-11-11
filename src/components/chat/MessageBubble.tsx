import { motion } from 'framer-motion';
import { Message } from '@/stores/chatStore';
import { Bot, User } from 'lucide-react';
import { format } from 'date-fns';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          isUser
            ? 'bg-gradient-to-br from-primary to-secondary'
            : 'bg-gradient-to-br from-accent to-primary'
        } shadow-lg`}
      >
        {isUser ? (
          <User className="h-5 w-5 text-white" />
        ) : (
          <Bot className="h-5 w-5 text-white" />
        )}
      </motion.div>

      <div className={`flex-1 ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`relative max-w-[80%] rounded-2xl px-4 py-3 ${
            isUser
              ? 'bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-tr-none'
              : 'bg-card border border-border rounded-tl-none'
          } shadow-lg`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          
          {!isUser && (
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-card border-l border-b border-border transform rotate-45" />
          )}
          {isUser && (
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-br from-primary to-secondary transform rotate-45" />
          )}
        </motion.div>

        <span className="text-xs text-muted-foreground mt-1 px-1">
          {format(message.timestamp, 'HH:mm')}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
