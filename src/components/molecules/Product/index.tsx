
import { ToastContainer, toast } from 'react-toastify'
import { useShoppingListStore } from '@/store'
import { useProductDetailsStore } from '@/store/productDetailsStore'
import { PlusIcon } from '@/components/atoms/Icons'
interface ProductProps {
  id: number
  name: string
  categoryName: string
  categoryId: number
  image: string | null
  note: string | null
}

export function Product({
  id,
  name,
  categoryName,
  categoryId,
  image,
  note
}: ProductProps) {
  const addProduct = useShoppingListStore((state) => state.addProduct)
  const { setProductDetailsActive, setProductDetailsSelected } =
    useProductDetailsStore()

  const handleAdd = () => {
    addProduct({ productId: id, name, categoryName, categoryId })
    toast.success('Product was added!')
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
      style={{ boxShadow: '0px 2px 12px rgb(0 0 0 / 0.05)' }}
      className='flex bg-white justify-between items-center rounded-xl gap-4 px-4'
    >
      <div className=' py-3 xl:py-4  flex-grow' onClick={handleProductActive}>
        <span className='text-sm xl:text-base font-semibold'>{name}</span>
      </div>
      <button onClick={handleAdd}>
        <PlusIcon />
      </button>
      <ToastContainer
        position='top-center'
        autoClose={4000}
        pauseOnHover={false}
      />
    </div>
  )
}
