import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ShoppingListProduct {
  productId: number
  quantity: number
  completed: boolean
}

interface ShoppingListState {
  shoppingListId: number | null
  shoppingListName: string
  products: ShoppingListProduct[]
  addProduct: (product: number) => void
  setShoppingListId: (shoppingListId: number) => void
  setShoppingListName: (shoppingListName: string) => void
}

export const useShoppingListStore = create(
  persist<ShoppingListState>(
    (set) => ({
      shoppingListId: null,
      shoppingListName: '',
      products: [],
      addProduct: (productId) => {
        set((state) => {
          const products = [...state.products]
          const productIndex = products.findIndex(
            (product) => product.productId === productId
          )

          if (productIndex !== -1) {
            products[productIndex].quantity += 1

            return { products }
          }

          return {
            products: [
              ...products,
              { productId, quantity: 1, completed: false }
            ]
          }
        })
      },
      setShoppingListId: (shoppingListId) => set(() => ({ shoppingListId })),
      setShoppingListName: (shoppingListName) =>
        set(() => ({ shoppingListName }))
    }),
    {
      name: 'shopping-list-storage'
    }
  )
)
