import { useCartStore, useShoppingListStore } from '@/store'
import { CartIcon } from '../atoms'

export function Cart() {
  const { setIsCartActive, isCartActive } = useCartStore((state) => ({
    setIsCartActive: state.setIsCartActive,
    isCartActive: state.isCartActive
  }))

  const products = useShoppingListStore((state) => state.products)

  return (
    <button
      onClick={() => setIsCartActive(!isCartActive)}
      className='text-white bg-primary rounded-full p-2 relative isolate'
    >
      <span
        className={`bg-[#EB5757]  w-5 h-5 flex justify-center items-center rounded-[4px] absolute -top-1 -right-1 z-[-1] text-xs leading-[0] transition-transform ${
          products.length > 0 ? 'scale-100' : 'scale-0'
        }`}
      >
        {products.length}
      </span>
      <CartIcon />
    </button>
  )
}
