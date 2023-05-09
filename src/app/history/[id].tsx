'use client'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { resetDate } from '@/lib'
import { shoppingListInterface } from '@/interfaces'
import { BackArrowIcon, DateIcon } from '@/components/atoms/Icons'

const HistoryItemDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const urlRequest = `/api/shopping-lists/${id as string}`
  const { data, isLoading } = useSWR<shoppingListInterface>(urlRequest)
  const handleBack = () => {
    router.back()
  }

  return (
    <>
      {isLoading ? (
        <h1>Item is loading</h1>
      ) : (
        <div className='px-5 lg:px-20 py-10'>
          <div
            className='flex gap-2 text-primary cursor-pointer'
            onClick={handleBack}
          >
            <span className='rotate-180 flex justify-end'>
              <BackArrowIcon />
            </span>
            back
          </div>
          <h1 className='font-quicksand font-bold text-2xl text-[#34333A] mt-9'>
            {data?.name}
          </h1>
          <div className='text-gray flex gap-3 font-quicksand text-xs font-medium items-center mt-5'>
            <DateIcon />
            <p>{resetDate(data?.createdAt as string)}</p>
          </div>
          <div className='flex flex-wrap gap-5 mt-14'>
            {data?.products?.length === 0 ? (
              <p>The shopping list is empty</p>
            ) : (
              data?.products?.map(({ product, quantity, productId }) => (
                <div
                  key={productId}
                  className='bg-white shadow-lg py-4 px-4 rounded-xl flex justify-between w-[182px] items-center'
                >
                  <span className='font-semibold font-quicksand text-base text-black'>
                    {product.name}
                  </span>
                  <span className='text-primary text-xs font-bold font-quicksand flex whitespace-nowrap'>
                    {quantity} pcs
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  )
}
export default HistoryItemDetails
