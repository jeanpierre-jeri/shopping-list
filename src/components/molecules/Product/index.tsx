import { PlusIcon } from '@/components/atoms'
import { useShoppingListStore } from '@/store'
import { useProductDetailsStore } from '@/store/productDetailsStore'
interface ProductProps {
  id: number
  name: string
  categoryName: string
  categoryId: number
  image: string | null
  note: string | null

}

export function Product({ id, name, categoryName, categoryId, image, note }: ProductProps) {
  const addProduct = useShoppingListStore((state) => state.addProduct)
  const { setProductDetailsActive, setProductDetailsSelected } = useProductDetailsStore()

  const handleAdd = () => {
    addProduct({ productId: id, name, categoryName, categoryId })
  }

  const handleProductActive = () => {
    setProductDetailsActive(true)
    setProductDetailsSelected({
      category: categoryName,
      image,
      note,
      name,
      categoryId,
      productId: id
    })
  }

  return (
    <div
      key={id}
      className='px-4 py-3 flex justify-between  bg-white rounded-xl shadow-lg'
      onClick={handleProductActive}
    >
      <span className='text-sm font-semibold max-w-[10ch]'>{name}</span>
      <button onClick={handleAdd}>
        <PlusIcon />
      </button>
    </div>

  )
}
