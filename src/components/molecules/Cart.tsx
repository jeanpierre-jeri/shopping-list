'use client'
import { useMemo } from 'react'
import { CartIcon } from '../atoms/Icons'
import { useCartStore } from '@/store/cartStore'
import { useShoppingListStore } from '@/store/shoppingListStore'

export function Cart() {
  const { setIsCartActive, isCartActive } = useCartStore((state) => ({
    setIsCartActive: state.setIsCartActive,
    isCartActive: state.isCartActive
  }))
  const setisNewItemActive = useCartStore((state) => state.setisNewItemActive)

  const products = useShoppingListStore((state) => state.products)

  const cartCount = useMemo(() => {
    return products.reduce((acc, current) => {
      return acc + current.products.length
    }, 0)
  }, [products])

  const handleClick = () => {
    setisNewItemActive(false)
    setIsCartActive(!isCartActive)
  }

  return (
    <button
      onClick={handleClick}
      className='text-white bg-primary rounded-full p-2 relative isolate'
    >
      <span
        className={`bg-[#EB5757]  w-5 h-5 flex justify-center items-center rounded-[4px] absolute -top-1 -right-1 z-[-1] text-xs leading-[0] transition-transform ${
          products.length > 0 ? 'scale-100' : 'scale-0'
        }`}
      >
        {cartCount}
      </span>
      <CartIcon />
    </button>
  )
}
