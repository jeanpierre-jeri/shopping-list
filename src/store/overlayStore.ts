import { create } from 'zustand'

interface CartState {
  isOverlayActive: boolean

  setIsOverlayActive: (isOverlayActive: boolean) => void
}

export const useOverlayStore = create<CartState>((set) => ({
  isOverlayActive: false,
  setIsOverlayActive: (isOverlayActive) => set(() => ({ isOverlayActive }))
}))
