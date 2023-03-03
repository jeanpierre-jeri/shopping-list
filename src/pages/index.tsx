import Head from 'next/head'
import useSWR from 'swr'
import { CategoriesData } from '@/interfaces'
import { Categories } from '@/components/organisms'

export default function Home() {
  const { data: categories, isLoading } = useSWR<CategoriesData[]>(
    '/api/categories/products'
  )

  return (
    <>
      <Head>
        <title>Shopping List</title>
      </Head>
      <div className='px-3 py-9 min-h-screen'>
        {isLoading ? (
          <div>Data is Loading...</div>
        ) : (
          <Categories categories={categories} />
        )}
      </div>
    </>
  )
}
