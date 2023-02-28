import { PropsWithChildren } from 'react'
import { User, Navbar } from '@/components/molecules'
import { Cart } from '@/components/molecules/Cart'
import styles from './styles.module.css'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={`${styles.main} bg-[#FAFAFE]`}>
      <aside className='flex flex-col justify-between items-center bg-white py-8'>
        <User />

        <Navbar />

        <Cart />
      </aside>
      <main>{children}</main>
      <aside className={styles.cart}>Hola mundo</aside>
    </div>
  )
}
