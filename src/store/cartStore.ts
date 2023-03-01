import { create } from 'zustand'

interface CartState {
  isCartActive: boolean
  setIsCartActive: (isCartActive: boolean) => void
}

export const useCartStore = create<CartState>((set) => ({
  isCartActive: false,
  setIsCartActive: (isCartActive) => set(() => ({ isCartActive }))
}))
