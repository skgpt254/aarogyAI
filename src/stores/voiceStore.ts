import { create } from 'zustand';

interface VoiceState {
  isRecording: boolean;
  audioBlob: Blob | null;
  audioUrl: string | null;
  waveformData: number[];
  startRecording: () => void;
  stopRecording: () => void;
  setAudioBlob: (blob: Blob) => void;
  setWaveformData: (data: number[]) => void;
  clearAudio: () => void;
}

export const useVoiceStore = create<VoiceState>((set) => ({
  isRecording: false,
  audioBlob: null,
  audioUrl: null,
  waveformData: [],
  
  startRecording: () => set({ isRecording: true }),
  stopRecording: () => set({ isRecording: false }),
  
  setAudioBlob: (blob) =>
    set({
      audioBlob: blob,
      audioUrl: URL.createObjectURL(blob),
    }),
  
  setWaveformData: (data) => set({ waveformData: data }),
  
  clearAudio: () =>
    set((state) => {
      if (state.audioUrl) {
        URL.revokeObjectURL(state.audioUrl);
      }
      return {
        audioBlob: null,
        audioUrl: null,
        waveformData: [],
      };
    }),
}));
