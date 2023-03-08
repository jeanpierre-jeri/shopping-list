import { Products } from '../products'

export interface ShoppingListProducts {
  productId: number
  quantity: number
  product: Products
}

export interface shoppingListInterface {
  name: string
  status: string
  createdAt: string
  products: ShoppingListProducts[]
}

interface ShoppingListUpdatedProducts extends Pick<ShoppingListProducts, 'productId'> {
  completed?: boolean
}

export interface ShoppingListUpdate {
  status: string
  products: ShoppingListUpdatedProducts[]
}

export interface ShoppingListItem {
  id: number
  name: string
  status: string
  createdAt: string
}
