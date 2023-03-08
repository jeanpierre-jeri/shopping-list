import { create } from 'zustand'

interface ProductDetailsSelected {
  image: string | null
  name: string
  note: string | null
  category: string
  categoryId: number
  productId: number
}

interface ProductDetailsStoreState {
  isProductDetailsActive: boolean
  productDetailsSelected: ProductDetailsSelected

  setProductDetailsActive: (isProductDetailsActive: boolean) => void
  setProductDetailsSelected: (
    productDetailsSelected: ProductDetailsSelected
  ) => void
}
export const useProductDetailsStore = create<ProductDetailsStoreState>(
  (set) => ({
    isProductDetailsActive: false,
    productDetailsSelected: {
      name: '',
      note: '',
      image: '',
      category: '',
      categoryId: 0,
      productId: 0
    },

    setProductDetailsActive: (isProductDetailsActive) =>
      set(() => ({ isProductDetailsActive })),
    setProductDetailsSelected: (productDetailsSelected) =>
      set(() => ({ productDetailsSelected }))
  })
)
