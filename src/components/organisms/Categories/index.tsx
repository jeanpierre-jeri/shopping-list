import { CategoriesData } from '@/interfaces'
import { Product } from '@/components/molecules'
import { BackArrowIcon } from '../../atoms'
import styles from './styles.module.css'

interface CategoriesProps {
  categories: CategoriesData[] | undefined
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <>
      <div className='flex flex-col gap-7'>
        {categories?.map(({ id, name, products }) => (
          <div key={id}>
            <h2 className='font-quicksand font-medium text-lg text-black mb-4'>
              {name}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
              {products.map(({ id, name }) => (
                <Product key={id} id={id} name={name} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <aside className={`${styles.aside} font-quicksand py-7`}>
        <div className='flex gap-2 text-primary'>
          <span className='rotate-180 flex justify-end'>
            <BackArrowIcon />
          </span>
          back
        </div>
        <div className='overflow-y-auto'>
          <span className='block'>name</span>
          <h3 className='font-medium mt-3 mb-8 text-2xl'>Avocado</h3>
          <span className='text-xs font-medium text-[#C1C1C4]'>category</span>
          <h4 className='font-medium text-lg mt-3 mb-9'>
            Fruit and vegetables
          </h4>
          <span className='text-xs font-medium text-[#C1C1C4]'>note</span>
          <p className='font-medium text-lg mt-3'>
            Nutrient-dense foods are those that provide substantial amounts of
            vitamins, minerals and other nutrients with relatively few calories.
            One-third of a medium avocado (50 g) has 80 calories and contributes
            nearly 20 vitamins and minerals, making it a great nutrient-dense
            food choice.
          </p>
        </div>
        <div className='flex gap-5 xs:gap-10 items-center justify-center text-base font-bold mt-auto'>
          <button>delete</button>
          <button className='bg-primary text-white rounded-xl px-6 py-4'>
            Add to list
          </button>
        </div>
      </aside>
    </>
  )
}
