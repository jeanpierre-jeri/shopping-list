import { ShoppingListItem } from '@/interfaces'
import Link from 'next/link'
import styles from './styles.module.css'
import { ArrowIcon, DateIcon } from '@/components/atoms/Icons'

// type HistoryItemType = Omit<ShoppingListItem, 'id'>

const HistoryItem = ({ name, status, createdAt, id }: ShoppingListItem) => {
  const date = new Date(createdAt).toLocaleDateString('en', { weekday: 'short', day: 'numeric', month: 'numeric', year: 'numeric' }).replace(/\//g, '.')

  return (
    <Link href={`/history/${id}`}>
      <div className='bg-white shadow-md rounded-xl py-6 px-5 flex gap-3 lg:gap-0 flex-col lg:flex-row justify-between'>
        <h2 className='font-quicksand font-medium text-base text-black'>
          {name}
        </h2>
        <div className='flex gap-8 items-center'>
          <span className='text-gray flex gap-3 font-quicksand text-xs font-medium items-center'>
            <DateIcon />
            {date}
          </span>
          <span className={`font-quicksand text-xs font-medium rounded-md py-1 px-2 ${status === 'completed' ? styles.completed : styles.incompleted}`}>
            {status}
          </span>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  )
}

export default HistoryItem
