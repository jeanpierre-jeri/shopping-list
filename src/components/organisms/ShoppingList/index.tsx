'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import { AddItemCard } from '@/components/atoms/AddItemCard'
import { PencilIcon } from '@/components/atoms/Icons'
import { CartProducts } from '@/components/molecules/CartProduct'
import { EmptyList } from '@/components/atoms'
import { useCartStore } from '@/store/cartStore'
import { useShoppingListStore } from '@/store/shoppingListStore'

export function ShoppingList() {
  const [loading, setLoading] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const isCartActive = useCartStore((state) => state.isCartActive)

  const products = useShoppingListStore((state) => state.products)

  const setIsCartActive = useCartStore((state) => state.setIsCartActive)

  const createShoppingList = useShoppingListStore(
    (state) => state.createShoppingList
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()

    if (nameInput === '') return

    await createShoppingList(nameInput)

    setNameInput('')
    setLoading(false)
    setIsCartActive(false)
  }

  return (
    <>
      <div
        onClick={() => setIsCartActive(false)}
        className={`bg-black/70 z-[1] absolute xl:static inset-0 transition-opacity duration-300 ${
          isCartActive
            ? 'opacity-100 pointer-events-auto xl:opacity-0 xl:pointer-events-none'
            : 'pointer-events-none opacity-0'
        }`}
      />
      <aside className={styles.cart} data-active={isCartActive}>
        <div className='pl-4 xl:pl-12 pr-[0.875rem] xl:pr-8 pt-6 xl:pt-11 w-fit mx-auto bg-orange-100 relative flex-grow gap-8 flex flex-col'>
          <AddItemCard />
          <div className='flex flex-col gap-9 justify-center overflow-y-auto'>
            {products.length === 0 ? (
              <h3 className='mt-16 xl:mt-60 font-bold text-xl text-center'>
                No items
              </h3>
            ) : (
              <>
                <div className='flex justify-between items-center'>
                  <h3 className='font-bold font-quicksand text-2xl text-[#34333A]'>
                    Shopping List
                  </h3>
                  <div>
                    <PencilIcon />
                  </div>
                </div>
                <CartProducts />
              </>
            )}
          </div>
          {products.length === 0 && (
            <div className='absolute left-0 right-0 -bottom-1 xl:-bottom-3 flex justify-center'>
              <EmptyList />
            </div>
          )}
        </div>

        <div className='bg-white pt-[1.125rem] pb-[0.875rem] pl-5 pr-[0.875rem] flex items-center justify-center'>
          <form
            onSubmit={handleSubmit}
            className={`${
              loading ? 'pointer-events-none' : 'pointer-events-auto'
            }`}
          >
            <div className='flex bg-primary border-2 border-primary rounded-xl overflow-hidden'>
              <input
                className='w-full p-5 outline-none bg-white text-sm'
                type='text'
                name='name'
                placeholder='Enter a name'
                value={nameInput}
                onInput={(e) => setNameInput(e.currentTarget.value)}
              />
              <input
                type='submit'
                value='Save'
                className='text-white text-base font-bold px-6 cursor-pointer'
              />
            </div>
          </form>
        </div>
      </aside>
    </>
  )
}
