import styles from './styles.module.css'

export function AddNewItem() {
  return (
    <aside className={`${styles.item}`}>
      <div className='flex flex-col p-10'>
        <h3 className='text-xl text-black'>Add a new item</h3>

        <form className={`${styles.form}`}>
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
            />
            <datalist id='categories' defaultValue=''>
              <option value='Fruit and Vegetables' />
              <option value='Meat and Fish' />
              <option value='Beverages' />
            </datalist>
          </div>
        </form>
      </div>

      <div className='flex justify-center items-center gap-10 text-base font-bold'>
        <button>cancel</button>

        <button className='bg-primary text-white rounded-xl py-4 px-6'>
          Save
        </button>
      </div>
    </aside>
  )
}
