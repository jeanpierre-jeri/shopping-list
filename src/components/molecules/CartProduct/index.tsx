import { useShoppingListStore } from '@/store'
import { ShoppingListProduct } from '../ShoppingListProduct'

export function CartProducts() {
  const products = useShoppingListStore((state) => state.products)

  return (
    <div className='flex flex-col flex-grow overflow-y-auto pb-5 gap-8'>
      {products.map((product) => {
        const { categoryName, products, categoryId } = product
        return (
          <div key={categoryName}>
            <h3 className='font-medium font-quicksand text-sm text-[#828282] mb-4'>
              {categoryName}
            </h3>
            <div className='flex flex-col gap-6'>
              {products.map((product) => {
                return (
                  <ShoppingListProduct
                    key={product.productId}
                    product={product}
                    categoryName={categoryName}
                    categoryId={categoryId}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
