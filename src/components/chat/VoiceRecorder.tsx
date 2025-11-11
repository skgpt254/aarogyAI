import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useVoiceStore } from '@/stores/voiceStore';
import { useChatStore } from '@/stores/chatStore';
import { Mic, Square, Send, X } from 'lucide-react';

interface VoiceRecorderProps {
  onClose: () => void;
}

const VoiceRecorder = ({ onClose }: VoiceRecorderProps) => {
  const { isRecording, startRecording, stopRecording, waveformData, setWaveformData } =
    useVoiceStore();
  const { addMessage, setTyping, currentLanguage } = useChatStore();
  const [duration, setDuration] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const animationFrameRef = useRef<number>();
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const startRecordingAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      audioContextRef.current = new AudioContext();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
      source.connect(analyserRef.current);

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.start();
      startRecording();
      visualizeAudio();
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const visualizeAudio = () => {
    if (!analyserRef.current) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!analyserRef.current) return;
      
      analyserRef.current.getByteFrequencyData(dataArray);
      const normalizedData = Array.from(dataArray.slice(0, 32)).map((value) => value / 255);
      setWaveformData(normalizedData);

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  const stopRecordingAudio = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      stopRecording();

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (audioContextRef.current) {
        audioContextRef.current.close();
      }

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        console.log('Audio recorded:', audioBlob);
      };
    }
  };

  const handleSendVoice = () => {
    stopRecordingAudio();
    
    addMessage({
      role: 'user',
      content: `[Voice message in ${currentLanguage}] - Duration: ${duration}s`,
    });

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      addMessage({
        role: 'assistant',
        content: `I received your voice message. In production, this would be processed by our voice recognition system supporting English, Hindi, and Hinglish. How can I help you today?`,
      });
    }, 2000);

    setDuration(0);
    onClose();
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="relative"
    >
      <div className="bg-card border border-border rounded-2xl p-6 shadow-elevated">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Voice Recording</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Waveform Visualization */}
        <div className="flex items-center justify-center gap-1 h-24 mb-4">
          {isRecording ? (
            waveformData.map((value, index) => (
              <motion.div
                key={index}
                className="w-2 bg-gradient-primary rounded-full"
                animate={{
                  height: `${Math.max(value * 100, 10)}%`,
                }}
                transition={{
                  duration: 0.1,
                }}
              />
            ))
          ) : (
            <div className="text-muted-foreground text-sm">
              Click the microphone to start recording
            </div>
          )}
        </div>

        {/* Duration */}
        <AnimatePresence>
          {isRecording && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center mb-4"
            >
              <span className="text-2xl font-mono font-bold text-primary">
                {formatDuration(duration)}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          {!isRecording ? (
            <Button
              size="lg"
              onClick={startRecordingAudio}
              className="rounded-full w-16 h-16 bg-gradient-primary hover:opacity-90"
            >
              <Mic className="h-6 w-6" />
            </Button>
          ) : (
            <>
              <Button
                size="lg"
                variant="destructive"
                onClick={stopRecordingAudio}
                className="rounded-full w-16 h-16"
              >
                <Square className="h-6 w-6" />
              </Button>
              <Button
                size="lg"
                onClick={handleSendVoice}
                className="rounded-full w-16 h-16 bg-gradient-primary hover:opacity-90"
              >
                <Send className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Supports English, Hindi, and Hinglish
        </p>
      </div>
    </motion.div>
  );
};

export default VoiceRecorder;
