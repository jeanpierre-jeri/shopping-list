import { create } from 'zustand'

interface CartState {
  isOverlayActive: boolean
  textAlert: string
  executeAction: boolean

  setIsOverlayActive: (isOverlayActive: boolean) => void
  setTextAlert: (textAlert: string) => void
  setExecuteAction: (executeAction: boolean) => void
}

export const useOverlayStore = create<CartState>((set) => ({
  isOverlayActive: false,
  textAlert: '',
  executeAction: false,

  setIsOverlayActive: (isOverlayActive) => set(() => ({ isOverlayActive })),
  setTextAlert: (textAlert) => set(() => ({ textAlert })),
  setExecuteAction: (executeAction) => set(() => ({ executeAction }))
}))
