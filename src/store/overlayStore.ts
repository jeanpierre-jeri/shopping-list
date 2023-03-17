import { create } from 'zustand'

interface OverlayState {
  isOverlayActive: boolean

  setIsOverlayActive: (isOverlayActive: boolean) => void
}

export const useOverlayStore = create<OverlayState>((set) => ({
  isOverlayActive: false,

  setIsOverlayActive: (isOverlayActive) => set(() => ({ isOverlayActive }))

}))
