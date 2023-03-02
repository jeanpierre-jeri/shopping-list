import { CategoriesData } from '@/interfaces'
import { Product } from '@/components/molecules'

interface CategoriesProps {
  categories: CategoriesData[] | undefined
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <div className='flex flex-col gap-7'>
      {categories?.map(({ id, name, products }) => (
        <div key={id}>
          <h2 className='font-quicksand font-medium text-lg text-black mb-4'>
            {name}
          </h2>
          <div className='grid grid-cols-4 gap-2'>
            {products.map(({ id, name }) => (
              <Product key={id} id={id} name={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
