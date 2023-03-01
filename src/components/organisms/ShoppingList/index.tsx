import { EmptyList, AddItemCard } from '@/components/atoms'
import { useCartStore, useShoppingListStore } from '@/store'
import styles from './styles.module.css'

export function ShoppingList() {
  const isCartActive = useCartStore((state) => state.isCartActive)
  const products = useShoppingListStore((state) => state.products)

  const setIsCartActive = useCartStore((state) => state.setIsCartActive)

  return (
    <>
      <div
        onClick={() => setIsCartActive(false)}
        className={`bg-black/70 absolute inset-0 transition-opacity duration-300 ${
          isCartActive
            ? 'opacity-100 pointer-events-auto'
            : 'pointer-events-none opacity-0'
        }`}
      />
      <aside className={styles.cart} data-active={isCartActive}>
        <div className='pl-4 pr-[0.875rem] pt-6 w-fit mx-auto bg-orange-100 relative flex flex-col'>
          <AddItemCard />
          <div className='overflow-y-auto flex-grow-1 flex flex-col justify-center mt-8'>
            {products.length === 0 ? (
              <h3 className='mt-16 font-bold text-xl'>No items</h3>
            ) : (
              <>
                <h3>Shopping List</h3>
                {products.map((product) => {
                  return (
                    <p key={product.productId}>
                      {product.productId}{' '}
                      <span>Quantity {product.quantity}</span>
                    </p>
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
