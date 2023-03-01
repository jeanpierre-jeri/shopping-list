import { PropsWithChildren } from 'react'
import { User, Navbar, Cart } from '@/components/molecules'
import { ShoppingList } from '@/components/organisms'
import NoSSRWrapper from '@/components/organisms/NoSSRWrapper'
import styles from './styles.module.css'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <NoSSRWrapper>
      <div className={`${styles.main} bg-[#FAFAFE]`}>
        <aside className='flex flex-col justify-between items-center bg-white py-8'>
          <User />

          <Navbar />

          <Cart />
        </aside>
        <main>{children}</main>

        <ShoppingList />
      </div>
    </NoSSRWrapper>
  )
}
