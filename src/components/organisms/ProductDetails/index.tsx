import React from 'react'
import { BackArrowIcon } from '@/components/atoms'
import { useProductDetailsStore } from '@/store/productDetailsStore'
import styles from './styles.module.css'
import Image from 'next/image'
import imageDefault from '../../../../public/no-img-product.jpg'
import { useShoppingListStore } from '@/store'

export const ProductDetails = () => {
  const {
    isProductDetailsActive,
    setProductDetailsActive,
    productDetailsSelected
  } = useProductDetailsStore((state) => ({
    isProductDetailsActive: state.isProductDetailsActive,
    setProductDetailsActive: state.setProductDetailsActive,
    productDetailsSelected: state.productDetailsSelected
  }))

  const addProduct = useShoppingListStore((state) => state.addProduct)

  const handleCloseAside = () => {
    setProductDetailsActive(false)
  }
  const handleAddProducToShoppinglist = () => {
    addProduct({
      name: productDetailsSelected.name,
      categoryId: productDetailsSelected.categoryId,
      categoryName: productDetailsSelected.category,
      productId: productDetailsSelected.productId
    })

    alert('product was added to shopping list')
    setProductDetailsActive(false)
  }

  const urlImage = productDetailsSelected.image ?? imageDefault

  return (
    <aside
      className={`${styles.aside} ${
        isProductDetailsActive ? styles.isActive : ''
      } font-quicksand py-5 lg:py-7`}
    >
      <div
        className='flex gap-2 text-primary cursor-pointer'
        onClick={handleCloseAside}
      >
        <span className='rotate-180 flex justify-end'>
          <BackArrowIcon />
        </span>
        back
      </div>
      <div className='overflow-y-auto'>
        <figure className={`${styles.figure}`}>
          <Image
            src={urlImage}
            width='300'
            height='219'
            alt={productDetailsSelected.name}
          />
        </figure>
        <span className='block'>name</span>
        <h3 className='font-medium mt-3 mb-8 text-2xl'>
          {productDetailsSelected.name}
        </h3>
        <span className='text-xs font-medium text-[#C1C1C4]'>category</span>
        <h4 className='font-medium text-lg mt-3 mb-9'>
          {productDetailsSelected.category}
        </h4>
        {productDetailsSelected.note === null ? null : (
          <>
            <span className='text-xs font-medium text-[#C1C1C4]'>note</span>
            <p className='font-medium text-lg mt-3'>
              {productDetailsSelected.note}
            </p>
          </>
        )}
      </div>
      <div className='flex gap-5 xs:gap-10 items-center justify-center text-base font-bold mt-auto'>
        <button>delete</button>
        <button
          className='bg-primary text-white rounded-xl px-6 py-4'
          onClick={handleAddProducToShoppinglist}
        >
          Add to list
        </button>
      </div>
    </aside>
  )
}
