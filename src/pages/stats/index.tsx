import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { TopList } from '@/components/molecules'

import useSWR from 'swr'
import { randomHexColor } from '@/lib/colors'

// const STATS = [
//   { name: 'Jan 2023', banana: 35, rice: 65 },
//   { name: 'Feb 2023', banana: 125, rice: 20 },
//   { name: 'Mar 2023', banana: 30, rice: 40 },
//   { name: 'Apr 2023', banana: 10, rice: 100 },
//   { name: 'May 2023', banana: 30, rice: 80 },
//   { name: 'Jun 2023', banana: 15, rice: 5 },
//   { name: 'Jul 2023', banana: 40, rice: 115 }
// ]

const TOP_ITEMS = [
  { name: 'Banana', percentage: 12 },
  { name: 'Rice', percentage: 10 },
  { name: 'Chicken', percentage: 8 }
]

const TOP_CATEGORIES = [
  { name: 'Fruit and vegetables', percentage: 23 },
  { name: 'Meat and Fish', percentage: 14 },
  { name: 'Pets', percentage: 11 }
]

export default function StatsPage() {
  const { data } = useSWR('/api/chart')

  return (
    <div className='py-7 px-3'>
      <h2 className='text-xl text-black'>Top items</h2>

      <TopList list={TOP_ITEMS} color='#F9A109' />

      <h2 className='text-xl text-black mt-8'>Top Categories</h2>

      <TopList list={TOP_CATEGORIES} color='#56CCF2' />

      <h2 className='text-xl text-black mt-8 mb-7'>Monthly Summary</h2>

      <div className='max-w-3xl -ml-8'>
        <ResponsiveContainer width='100%' height={302}>
          <LineChart data={data?.stats}>
            {data?.names.map((name: string, i: number) => {
              return (
                <Line
                  key={i}
                  type='monotone'
                  dataKey={name}
                  stroke={randomHexColor()}
                />
              )
            })}
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
