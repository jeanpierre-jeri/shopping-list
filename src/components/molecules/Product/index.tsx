import { PlusIcon } from '@/components/atoms'
import { useShoppingListStore } from '@/store'
interface ProductProps {
  id: number
  name: string
}

export function Product({ id, name }: ProductProps) {
  const addProduct = useShoppingListStore((state) => state.addProduct)
  return (
    <>
      <div
        key={id}
        className='px-4 py-3 flex justify-between  bg-white rounded-xl shadow-lg'
      >
        <span className='text-sm font-semibold max-w-[10ch]'>{name}</span>
        <button onClick={() => addProduct({ productId: id, name })}>
          <PlusIcon />
        </button>
      </div>
      {/* <aside className={`${styles.aside} font-quicksand py-7`}>
        <span className='flex gap-2 text-primary'>
          <span className='rotate-180 flex justify-end'>
            <BackArrowIcon />
          </span>
          back
        </span>
        <span className='block mt-14'>
          name
        </span>
        <h3 className='font-medium mt-3 mb-8 text-2xl'>
          Avocado
        </h3>
        <span className='text-xs font-medium text-[#C1C1C4]'>category</span>
        <h4 className='font-medium text-lg mt-3 mb-9'>
          Fruit and vegetables
        </h4>
        <span className='text-xs font-medium text-[#C1C1C4]'>
          note
        </span>
        <p className='font-medium text-lg mt-3'>
          Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.
        </p>
        <div className='flex gap-10 items-center justify-center text-base font-bold mt-8'>
          <button>
            delete
          </button>
          <button className='bg-primary text-white rounded-xl py-5 px-6'>
            Add to list
          </button>
        </div>

      </aside> */}
    </>
  )
}
