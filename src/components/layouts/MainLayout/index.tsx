import { User } from '@/components/molecules/User'
import styles from './styles.module.css'
import { Navbar } from '@/components/molecules/Navbar'
import { Cart } from '@/components/molecules/Cart'
import { ShoppingList } from '@/components/organisms/ShoppingList'
import { AddNewItem } from '@/components/organisms/AddNewItem'
import { Overlay } from '@/components/atoms/Overlay'
import { ProductDetails } from '@/components/home/components/organisms/ProductDetails'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
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
  )
}
