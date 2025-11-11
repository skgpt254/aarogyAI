import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  isMobileMenuOpen: boolean;
  showChatWidget: boolean;
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    timestamp: Date;
  }>;
  toggleMobileMenu: () => void;
  toggleChatWidget: () => void;
  addNotification: (notification: Omit<AppState['notifications'][0], 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isMobileMenuOpen: false,
      showChatWidget: false,
      notifications: [],
      
      toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
      
      toggleChatWidget: () =>
        set((state) => ({ showChatWidget: !state.showChatWidget })),
      
      addNotification: (notification) =>
        set((state) => ({
          notifications: [
            ...state.notifications,
            {
              ...notification,
              id: `notif-${Date.now()}-${Math.random()}`,
              timestamp: new Date(),
            },
          ],
        })),
      
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),
      
      clearNotifications: () => set({ notifications: [] }),
    }),
    {
      name: 'aarogy-app-storage',
      partialize: (state) => ({
        showChatWidget: state.showChatWidget,
      }),
    }
  )
);
