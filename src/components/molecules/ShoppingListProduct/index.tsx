import {
  type ShoppingListProduct as Product,
  useShoppingListStore
} from '@/store'
import { DeleteIcon, MinusIcon, PlusIcon } from '@/components/atoms'

interface Props {
  product: Product
  categoryName: string
  categoryId: number
}

export function ShoppingListProduct({
  product,
  categoryName,
  categoryId
}: Props) {
  const { name, productId, quantity } = product

  const removeProduct = useShoppingListStore((state) => state.removeProduct)
  const decrementProduct = useShoppingListStore(
    (state) => state.decrementProduct
  )
  const addProduct = useShoppingListStore((state) => state.addProduct)

  const handleDelete = () => {
    removeProduct(productId, categoryName)
  }

  const handleDecrement = () => {
    decrementProduct(productId, categoryName)
  }

  const handleIncrement = () => {
    addProduct({
      productId,
      name,
      categoryName,
      categoryId
    })
  }

  return (
    <div className='flex flex-col items-start justify-between gap-3'>
      <p className='text-sm font-semibold text-black'>{name}</p>

      <div className='flex items-center justify-center gap-2 bg-white rounded-xl text-primary text-xs'>
        <div onClick={handleDecrement} className='cursor-pointer pl-2'>
          <MinusIcon />
        </div>
        <span className='px-4 py-2 text-xs font-bold w-20 text-center border-2 border-primary rounded-3xl'>
          {quantity} pcs
        </span>
        <div className='cursor-pointer' onClick={handleIncrement}>
          <PlusIcon />
        </div>
        <div
          onClick={handleDelete}
          className='h-full bg-primary rounded-xl flex items-center py-3 px-2 cursor-pointer'
        >
          <DeleteIcon />
        </div>
      </div>
    </div>
  )
}
