import { useShoppingListStore } from '@/store'
import { PlusIcon } from '../atoms'

interface ProductProps {
  id: number
  name: string
}

export function Product({ id, name }: ProductProps) {
  const addProduct = useShoppingListStore((state) => state.addProduct)
  return (
    <div
      key={id}
      className='px-4 py-3 flex justify-between  bg-white rounded-xl shadow-lg'
    >
      <span className='text-sm font-semibold max-w-[10ch]'>{name}</span>
      <button onClick={() => addProduct({ productId: id, name })}>
        <PlusIcon />
      </button>
    </div>
  )
}
