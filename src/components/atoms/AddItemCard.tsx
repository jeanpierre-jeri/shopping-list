import { Bottle } from '@/components/atoms/Icons'
import { useCartStore } from '@/store/cartStore'

export function AddItemCard() {
  const setisNewItemActive = useCartStore((state) => state.setisNewItemActive)
  const setIsCartActive = useCartStore((state) => state.setIsCartActive)

  const handleAddItem = () => {
    setisNewItemActive(true)
    setIsCartActive(false)
  }

  return (
    <div className='bg-[#80485B] rounded-3xl items-center h-[8.125rem] py-[1.125rem] pr-6 pl-28 relative max-w-[19.25rem]'>
      <div className='absolute left-3 -top-4'>
        <Bottle />
      </div>
      <div className='flex flex-col items-start gap-3 font-bold'>
        <h3 className='text-base text-white leading-tight'>
          Didn’t find what you need?
        </h3>
        <button
          onClick={handleAddItem}
          className='text-sm bg-white rounded-xl py-[.625rem] px-5 leading-[1.28]'
        >
          Add Item
        </button>
      </div>
    </div>
  )
}
