import Link from 'next/link'
import { useRouter } from 'next/router'
import { HistoryIcon, MenuIcon, StatsIcon } from '@/components/atoms/Icons'
import styles from './styles.module.css'

const menuIcons = [
  {
    link: '/',
    icon: <MenuIcon />
  },
  {
    link: '/history',
    icon: <HistoryIcon />
  },
  {
    link: '/stats',
    icon: <StatsIcon />
  }
]

export function Navbar() {
  const router = useRouter()
  const { pathname } = router

  return (
    <nav className='flex flex-col gap-12 w-full text-[#454545]'>
      {menuIcons.map(({ link, icon }) => {
        return (
          <Link
            key={link}
            href={link}
            className={`${styles.link} ${pathname === link ? 'after:opacity-100' : 'after:opacity-0'}`}
          >
            {icon}
          </Link>
        )
      })}
    </nav>
  )
}
