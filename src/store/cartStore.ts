import { create } from 'zustand'

interface CartState {
  isCartActive: boolean
  isNewItemActive: boolean
  setIsCartActive: (isCartActive: boolean) => void
  setisNewItemActive: (isNewItemActive: boolean) => void
}

export const useCartStore = create<CartState>((set) => ({
  isCartActive: false,
  isNewItemActive: false,

  setIsCartActive: (isCartActive) => set(() => ({ isCartActive })),
  setisNewItemActive: (isNewItemActive) => set(() => ({ isNewItemActive }))
}))
