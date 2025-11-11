import { motion } from 'framer-motion';
import { Bot, Brain } from 'lucide-react';

interface TypingIndicatorProps {
  isThinking?: boolean;
}

const TypingIndicator = ({ isThinking = false }: TypingIndicatorProps) => {
  return (
    <div className="flex items-start gap-3">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg"
      >
        {isThinking ? (
          <Brain className="h-5 w-5 text-white animate-pulse" />
        ) : (
          <Bot className="h-5 w-5 text-white" />
        )}
      </motion.div>

      <div className="flex-1">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative max-w-[80%] rounded-2xl rounded-tl-none px-4 py-3 bg-card border border-border shadow-lg"
        >
          <div className="flex items-center gap-2">
            {isThinking ? (
              <>
                <span className="text-sm text-muted-foreground">Thinking</span>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <span className="text-sm text-muted-foreground">Typing</span>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TypingIndicator;
