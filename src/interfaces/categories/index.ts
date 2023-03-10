import { Products } from '../products'

export interface CategoriesData {
  id: number
  name: string
  products: Products[]
}

export type CategoryId = Pick<CategoriesData, 'id'>['id']

export type Category = Pick<CategoriesData, 'id' | 'name'>
