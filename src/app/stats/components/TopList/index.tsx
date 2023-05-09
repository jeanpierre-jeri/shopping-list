'use client'
import styles from './styles.module.css'

interface Item {
  name: string
  percentage: number
}

interface Props {
  list: Item[]
  color: string
}

function TopList({ list, color }: Props) {
  return (
    <ul className={styles.list}>
      {list.map(({ name, percentage }, i) => {
        return (
          <li key={i}>
            <div className='flex justify-between items-baseline'>
              <h3>{name}</h3>
              <span>{percentage}%</span>
            </div>
            <div className={styles.bar}>
              <div
                style={{ width: `${percentage}%`, backgroundColor: color }}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
export default TopList
