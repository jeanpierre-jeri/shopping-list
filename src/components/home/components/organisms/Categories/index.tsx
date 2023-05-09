'use client'
import { CategoriesData } from '@/interfaces'
import { Product } from '../../molecules'

interface CategoriesProps {
  categories: CategoriesData[] | undefined
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <div className='flex flex-col gap-7'>
      {categories?.map(
        ({ id: categoryId, name: categoryName, products }) =>
          products.length > 0 && (
            <div key={categoryId}>
              <h2 className='font-quicksand font-medium text-lg text-black mb-4'>
                {categoryName}
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {products.map(({ id, name, image, note }) => (
                  <Product
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    note={note}
                    categoryName={categoryName}
                    categoryId={categoryId}
                  />
                ))}
              </div>
            </div>
          )
      )}
    </div>
  )
}
