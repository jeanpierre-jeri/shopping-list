import { create } from 'zustand'

interface ProductStore {
  deleteProduct: (id: number) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  deleteProduct: async (id) => {
    try {
      console.log(id)
      const response = await fetch('/api/products', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: id
        })
      })

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
}))
