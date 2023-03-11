import { useRef, useState } from 'react'
import useSWR from 'swr'
import { useCartStore } from '@/store'
import { readFileAsDataUrl } from '@/lib'
import { Category } from '@/interfaces'
import styles from './styles.module.css'
import { useOverlayStore } from '@/store/overlayStore'
import { CloseIcon } from '@/components/atoms'

type Image = string | ArrayBuffer | null

export function AddNewItem() {
  const { data: categories } = useSWR<Category[]>('/api/categories')

  const [loading, setIsLoading] = useState<boolean>(false)
  const [isAlertConfirmActive, setIsAlertConfirmActive] = useState<boolean>(false)
  const submitInput = useRef<HTMLButtonElement>(null)
  const form = useRef<HTMLFormElement>(null)

  const isNewItemActive = useCartStore((state) => state.isNewItemActive)
  const setisNewItemActive = useCartStore((state) => state.setisNewItemActive)
  const { setIsOverlayActive } = useOverlayStore()

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)

    const {
      name = '',
      image,
      category,
      note = ''
    } = Object.fromEntries(formData)

    let img: Image = null

    if (image instanceof File) {
      img = await readFileAsDataUrl(image)
    }

    const categoryId = categories?.find(({ name }) => name === category)?.id

    try {
      await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          image: img ?? '',
          note,
          categoryId: categoryId ?? 0,
          categoryName: category
        })
      })

      form.current?.reset()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setIsOverlayActive(true)
    // // const ans = window.confirm('Do you want to cancel?')

    // // if (!ans) return
    setIsAlertConfirmActive(true)
    // setisNewItemActive(false)
  }
  const handleCloseModal = () => {
    setIsAlertConfirmActive(false)
    setIsOverlayActive(false)
  }
  const handleCloseAddItem = () => {
    setisNewItemActive(false)
    handleCloseModal()
  }
  return (
    <>
      <aside className={`${styles.item}`} data-active={isNewItemActive}>
        <div className='flex flex-col p-10'>
          <h3 className='text-xl text-black'>Add a new item</h3>

          <form
            ref={form}
            className={`${styles.form} ${
            loading ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Enter a name'
                name='name'
              />
            </div>
            {/* Note */}
            <div>
              <label htmlFor='note'>Note (optional)</label>
              <textarea
                name='note'
                id='note'
                cols={30}
                rows={3}
                placeholder='Enter a note'
              />
            </div>
            {/* Image */}
            <div>
              <label htmlFor='image'>Image (optional)</label>
              <input type='file' name='image' id='image' accept='image/*' />
            </div>

            {/* Category */}
            <div>
              <label htmlFor='category'>Category</label>
              <input
                type='text'
                list='categories'
                placeholder='Enter a category'
                name='category'
              />
              <datalist id='categories'>
                {categories?.map((category) => {
                  return <option key={category.id} value={category.name} />
                })}
              </datalist>
            </div>
            <button ref={submitInput} type='submit' className='hidden' />
          </form>
        </div>

        <div className='flex justify-center items-center gap-10 text-base font-bold'>
          <button onClick={handleCancel}>Cancel</button>

          <button
            onClick={() => submitInput.current?.click()}
            className='bg-primary text-white rounded-xl py-4 px-6'
          >
            {loading ? 'Creating...' : 'Save'}
          </button>
        </div>
      </aside>
      <div className={`${isAlertConfirmActive ? styles.confirm : 'hidden'} `}>
        <div className='relative w-full h-full'>
          <span className='font-quicksand font-semibold max-w-[25ch] block text-2xl text-[#34333A]'>
            Are you sure that you want to cancel this new item ?
          </span>
          <div className='absolute top-[-1.8rem] right-[-1.8rem] cursor-pointer' onClick={handleCloseModal}>
            <CloseIcon />
          </div>
          <div className='flex items-center justify-end gap-8 font-quicksand mt-8'>
            <button className='text-[#34333A] text-sm font-semibold' onClick={handleCloseModal}>cancel</button>
            <button className='bg-[#EB5757] text-white py-3 px-7 rounded-xl' onClick={handleCloseAddItem}>Yes</button>
          </div>
        </div>
      </div>
    </>
  )
}
