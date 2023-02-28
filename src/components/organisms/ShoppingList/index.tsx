import { EmptyList, AddItemCard } from '@/components/atoms'
import styles from './styles.module.css'

export function ShoppingList() {
  return (
    <aside className={styles.cart}>
      <div className='pl-4 pr-[0.875rem] pt-6 w-fit mx-auto bg-orange-100 relative flex flex-col'>
        <AddItemCard />
        <div className='overflow-y-auto flex-grow-1 flex justify-center mt-8'>
          <h3 className='mt-16 font-bold text-xl'>No items</h3>
        </div>
        <div className='absolute left-0 right-0 -bottom-1 flex justify-center'>
          <EmptyList />
        </div>
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
  )
}
