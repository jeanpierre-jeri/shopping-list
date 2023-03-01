import HistoryItem from '@/components/molecules/History/HistoryItem'
import { ShoppingListItem } from '@/interfaces'
import useSWR from 'swr'

export default function History () {
  const { data, isLoading } = useSWR<ShoppingListItem[]>('api/shopping-lists')
  return (
    <div className='px-3 py-9 min-h-screen lg:px-20 lg:py-10'>
      <h1 className='font-quicksand font-bold text-lg text-[#34333A]'>
        Shopping history
      </h1>
      {
            isLoading ? (
              <div>Data is Loading</div>
            )
              : (<div className='flex flex-col gap-7 mt-16'>
                {
                data?.map(({ id, createdAt, name, status }) => (
                  <HistoryItem key={id} createdAt={createdAt} name={name} status={status} />
                ))
              }
                {/* eslint-disable-next-line react/jsx-indent */}
                 </div>
                )
}
    </div>
  )
}
