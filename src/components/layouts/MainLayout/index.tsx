import { PropsWithChildren } from 'react'

import NoSSRWrapper from '@/components/organisms/NoSSRWrapper'
import { AddNewItem, ProductDetails, ShoppingList } from '@/components/organisms'
import { User, Navbar, Cart } from '@/components/molecules'

import styles from './styles.module.css'
import { Overlay } from '@/components/atoms/Overlay'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <NoSSRWrapper>
      <div className={`${styles.main} bg-[#FAFAFE]`}>
        <aside className='flex flex-col justify-between items-center bg-white py-8'>
          <User />

          <Navbar />

          <Cart />
        </aside>
        <main className='overflow-y-auto'>{children}</main>

        <ShoppingList />
        <ProductDetails />
        <AddNewItem />
        <Overlay />

      </div>
    </NoSSRWrapper>
  )
}
