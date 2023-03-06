import { EmptyList, AddItemCard, PencilIcon, DeleteIcon, MinusIcon, PlusIcon } from '@/components/atoms'
import { useCartStore, useShoppingListStore } from '@/store'
import { useState } from 'react'
import styles from './styles.module.css'

export function ShoppingList() {
  const [isAvailableUpdateQuantity, seTisAvailableUpdateQuantity] = useState<boolean>(true)
  const isCartActive = useCartStore((state) => state.isCartActive)
  const { products, removeProduct, addProduct, decrementProduct } = useShoppingListStore()

  const setIsCartActive = useCartStore((state) => state.setIsCartActive)

  const handleUpdateQuantity = () => {
    seTisAvailableUpdateQuantity(!isAvailableUpdateQuantity)
  }
  const handleDelete = (id: number, category: string) => {
    removeProduct(id, category)
  }
  const handleIncrement = (productId: number, name: string, categoryName: string, categoryId: number) => {
    addProduct({
      productId, name, categoryName, categoryId
    })
  }
  const handleDecrement = (id: number, category: string) => {
    console.log(id)
    decrementProduct(id, category)
  }
  return (
    <>
      <div
        onClick={() => setIsCartActive(false)}
        className={`bg-black/70 z-[1] absolute inset-0 transition-opacity duration-300 ${
          isCartActive
            ? 'opacity-100 pointer-events-auto'
            : 'pointer-events-none opacity-0'
        }`}
      />
      <aside className={styles.cart} data-active={isCartActive}>
        <div className='pl-4 pr-[0.875rem] pt-6 w-fit mx-auto bg-orange-100 relative flex flex-col'>
          <AddItemCard />
          <div className='overflow-y-auto flex-grow-1 flex flex-col gap-9 justify-center mt-8'>
            {products.length === 0 ? (
              <h3 className='mt-16 font-bold text-xl text-center'>No items</h3>
            ) : (
              <>
                <div className='flex justify-between items-center'>
                  <h3 className='font-bold font-quicksand text-2xl text-[#34333A]'>Shopping List</h3>
                  <div onClick={handleUpdateQuantity} className='cursor-pointer'>
                    <PencilIcon status={isAvailableUpdateQuantity} />
                  </div>
                </div>
                {products.map((product) => {
                  const { categoryName, products, categoryId } = product
                  return (
                    <div key={categoryName}>
                      <h3 className='font-medium font-quicksand text-sm text-[#828282] mb-4'>{categoryName}</h3>
                      <div className='flex flex-col gap-7'>
                        {products.map((p) => {
                          return (
                            <div key={p.productId} className='flex justify-between gap-3'>
                              <p className='text-lg font-semibold text-black'>
                                {p.name}
                              </p>
                              {
                                isAvailableUpdateQuantity
                                  ? <span className={`${styles.quantity}`}>{p.quantity} pcs</span>
                                  : <div className='flex items-center gap-2 bg-white rounded-xl'>
                                    <div onClick={() => handleDelete(p.productId, categoryName)} className='h-full bg-primary rounded-xl flex items-center py-3 px-2 cursor-pointer'>
                                      <DeleteIcon />
                                    </div>
                                    <div onClick={() => handleDecrement(p.productId, categoryName)} className='cursor-pointer'>
                                      <MinusIcon />
                                    </div>
                                    <span className={`${styles.quantity}`}>{p.quantity} pcs</span>
                                    <div className='cursor-pointer' onClick={() => handleIncrement(p.productId, p.name, categoryName, categoryId)}>
                                      <PlusIcon isShoppinglist />
                                    </div>
                                  </div>
                              }
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </>
            )}
          </div>
          {products.length === 0 && (
            <div className='absolute left-0 right-0 -bottom-1 flex justify-center'>
              <EmptyList />
            </div>
          )}
        </div>

        <div className='bg-white pt-[1.125rem] pb-[0.875rem] pl-5 pr-[0.875rem]'>
          <form>
            <div className='flex bg-primary border-2 border-primary rounded-xl overflow-hidden'>
              <input
                className='w-full p-5 outline-none bg-white'
                type='text'
                name='name'
                placeholder='Enter a name'
              />
              <input
                type='submit'
                value='Save'
                className='text-white text-base font-bold px-6'
              />
            </div>
          </form>
        </div>
      </aside>
    </>
  )
}
