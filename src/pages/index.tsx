import Head from 'next/head'
import useSWR from 'swr'
import { PlusIcon } from '@/components/atoms'
import { CategoriesData } from '@/interfaces'

export default function Home() {
  const { data, isLoading } = useSWR<CategoriesData[]>(
    '/api/categories/products'
  )

  return (
    <>
      <Head>
        <title>Shopping List</title>
      </Head>
      <main className='px-3 py-9 min-h-screen'>
        {isLoading ? (
          <div>Data is Loading...</div>
        ) : (
          <div className='flex flex-col gap-7'>
            {data?.map(({ id, name, products }) => (
              <div key={id}>
                <h2 className='font-quicksand font-medium text-lg text-black mb-4'>
                  {name}
                </h2>
                <div className='grid grid-cols-2 gap-2'>
                  {products.map(({ id, name }) => (
                    <div
                      key={id}
                      className='px-4 py-3 flex justify-between  bg-white rounded-xl shadow-lg'
                    >
                      <span className='text-sm font-semibold max-w-[10ch]'>
                        {name}
                      </span>
                      <PlusIcon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
