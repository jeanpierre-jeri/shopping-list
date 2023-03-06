import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ShoppingListProduct {
  productId: number
  quantity: number
  completed: boolean
  name: string
}

type AddProduct = Pick<ShoppingListProduct, 'productId' | 'name'> & {
  categoryName: string
  categoryId: number
}

export interface CategoryProducts {
  categoryId: number
  categoryName: string
  products: ShoppingListProduct[]
}

interface ShoppingListState {
  shoppingListId: number | null
  shoppingListName: string
  products: CategoryProducts[]

  addProduct: (product: AddProduct) => void
  setShoppingListId: (shoppingListId: number) => void
  setShoppingListName: (shoppingListName: string) => void
  removeProduct: (id: number, categoryName: string) => void
  decrementProduct: (id: number, categoryName: string) => void
}

export const useShoppingListStore = create(
  persist<ShoppingListState>(
    (set) => ({
      shoppingListId: null,
      shoppingListName: '',
      products: [],
      addProduct: ({ productId, name, categoryName, categoryId }) => {
        set((state) => {
          const newProduct = { productId, name, quantity: 1, completed: false }
          const products = structuredClone(state.products)

          const categoryProductsIndex = products.findIndex(
            (category) => category.categoryId === categoryId
          )

          // category not found in products
          if (categoryProductsIndex === -1) {
            products.push({
              categoryId,
              categoryName,
              products: [newProduct]
            })

            return {
              products
            }
          }

          const categoryProducts = products[categoryProductsIndex].products

          const productIndex = categoryProducts.findIndex(
            (product) => product.productId === productId
          )

          // product not found in category
          if (productIndex === -1) {
            categoryProducts.push(newProduct)

            return {
              products
            }
          }

          // product found in category
          categoryProducts[productIndex].quantity += 1

          return {
            products
          }
        })
      },
      setShoppingListId: (shoppingListId) => set(() => ({ shoppingListId })),
      setShoppingListName: (shoppingListName) =>
        set(() => ({ shoppingListName })),
      removeProduct: (id, categoryName) => {
        set((state) => {
          const copyProducts = structuredClone(state.products)
          const newProducts = copyProducts.filter((item) => {
            if (item.categoryName === categoryName) {
              item.products = item.products.filter(
                (product) => product.productId !== id
              )
            }

            return item.products.length !== 0
          })
          return {
            products: newProducts
          }
        })
      },
      decrementProduct: (id, categoryName) => {
        set((state) => {
          const copyProducts = structuredClone(state.products)
          const categoriesWithProductDecremented = copyProducts.map((cat) => {
            if (cat.categoryName === categoryName) {
              const productsDecremented = cat.products.map((product) => {
                if (product.productId === id) {
                  return {
                    ...product,
                    quantity:
                      product.quantity - 1 === 0 ? 1 : product.quantity - 1
                  }
                }
                return product
              })
              return {
                ...cat,
                products: productsDecremented
              }
            }
            return cat
          })
          return {
            products: categoriesWithProductDecremented
          }
        })
      }
    }),
    {
      name: 'shopping-list-storage'
    }
  )
)
