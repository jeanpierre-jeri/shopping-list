'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import styles from './styles.module.css'
import { BackArrowIcon, CloseIcon } from '@/components/atoms/Icons'
import { useProductDetailsStore } from '@/store/productDetailsStore'
import { useOverlayStore } from '@/store/overlayStore'
import { useProductStore } from '@/store/productStore'
import { useShoppingListStore } from '@/store/shoppingListStore'

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
  const [isAlertConfirmActive, setIsAlertConfirmActive] =
    useState<boolean>(false)
  const { setIsOverlayActive } = useOverlayStore()
  const { deleteProduct } = useProductStore()

  // const addProduct = useShoppingListStore((state) => state.addProduct)
  const { addProduct } = useShoppingListStore()

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

    toast.success('Product was added to shoppinglist!')
    setProductDetailsActive(false)
  }

  const urlImage = productDetailsSelected.image ?? '/no-img-product.jpg'
  const handleDeleteProduct = () => {
    setIsAlertConfirmActive(true)
    setIsOverlayActive(true)
  }
  const handleCloseModal = () => {
    setIsAlertConfirmActive(false)
    setIsOverlayActive(false)
  }
  const handleConfirmDeleteProduct = () => {
    handleCloseModal()
    deleteProduct(productDetailsSelected.productId)
  }
  return (
    <>
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
            <picture>
              <img
                src={urlImage}
                width='300'
                height='219'
                alt={productDetailsSelected.name}
              />
            </picture>
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
          <button onClick={handleDeleteProduct}>delete</button>
          <button
            className='bg-primary text-white rounded-xl px-6 py-4'
            onClick={handleAddProducToShoppinglist}
          >
            Add to list
          </button>
        </div>
        <ToastContainer
          position='top-center'
          autoClose={4000}
          pauseOnHover={false}
        />
      </aside>
      <div className={`${isAlertConfirmActive ? styles.confirm : 'hidden'} `}>
        <div className='relative w-full h-full'>
          <span className='font-quicksand font-semibold max-w-[25ch] block text-2xl text-[#34333A]'>
            Are you sure that you want to delete this product ?
          </span>
          <div
            className='absolute top-[-1.8rem] right-[-1.8rem] cursor-pointer'
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </div>
          <div className='flex items-center justify-end gap-8 font-quicksand mt-8'>
            <button
              className='text-[#34333A] text-sm font-semibold'
              onClick={handleCloseModal}
            >
              cancel
            </button>
            <button
              className='bg-[#EB5757] text-white py-3 px-7 rounded-xl'
              onClick={handleConfirmDeleteProduct}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
