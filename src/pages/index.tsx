import Head from 'next/head'
import useSWR from 'swr'
import { CategoriesData } from '@/interfaces'
import { Categories } from '@/components/organisms'
import { SearchIcon } from '@/components/atoms'

export default function Home() {
  const { data: categories, isLoading } = useSWR<CategoriesData[]>(
    '/api/categories/products'
  )

  return (
    <>
      <Head>
        <title>Shopping List</title>
      </Head>
      <main className='px-3 xl:pl-20 xl:pr-24 py-9 min-h-screen'>
        <div className='hidden xl:flex gap-14 justify-between'>
          <h1 className='text-2xl'>
            <strong className='text-primary font-bold '>Shoppingfy</strong>{' '}
            allows you to take your{' '}
            <span className='block'>shopping list wherever you go</span>
          </h1>

          <form className='flex-grow max-w-[17.25rem]'>
            <div className='relative'>
              <div className='w-6 text-content absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none'>
                <SearchIcon />
              </div>
              <input
                type='search'
                placeholder='search item'
                className='pl-14 py-4 pr-5 rounded-xl bg-white w-full'
                style={{ boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.04)' }}
              />
            </div>
          </form>
        </div>
        <section className='xl:mt-14'>
          {isLoading ? (
            <h2>Products are Loading...</h2>
          ) : (
            <Categories categories={categories} />
          )}
        </section>
      </main>
    </>
  )
}
