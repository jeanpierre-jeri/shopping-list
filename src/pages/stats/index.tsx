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

const STATS = [
  { name: 'Jan 2023', banana: 35, rice: 65 },
  { name: 'Feb 2023', banana: 125, rice: 20 },
  { name: 'Mar 2023', banana: 30, rice: 40 },
  { name: 'Apr 2023', banana: 10, rice: 100 },
  { name: 'May 2023', banana: 30, rice: 80 },
  { name: 'Jun 2023', banana: 15, rice: 5 },
  { name: 'Jul 2023', banana: 40, rice: 115 }
]

export default function StatsPage() {
  return (
    <div className='py-7 px-3'>
      <h2>Top items</h2>

      <ul>
        <li>
          <div>
            <h3>Banana</h3>
            <span>12%</span>
          </div>
          <div>------------------</div>
        </li>

        <li>
          <div>
            <h3>Rice</h3>
            <span>10%</span>
          </div>
          <div>------------------</div>
        </li>

        <li>
          <div>
            <h3>Chicken</h3>
            <span>8%</span>
          </div>
          <div>------------------</div>
        </li>
      </ul>

      <div className='max-w-3xl -ml-8'>
        <ResponsiveContainer width='100%' height={302}>
          <LineChart data={STATS}>
            <Line type='monotone' dataKey='banana' stroke='#8884d8' />
            <Line type='monotone' dataKey='rice' stroke='#82ca9d' />
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
