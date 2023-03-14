import { useOverlayStore } from '@/store/overlayStore'
import { CloseIcon } from './Icons'
import styles from './alert.module.css'

const Alert = () => {
  const { setIsOverlayActive, textAlert, isOverlayActive, setExecuteAction } = useOverlayStore()
  //   const [isAlertConfirmActive, setIsAlertConfirmActive] = useState<boolean>(false)

  const handleCloseModal = () => {
    setIsOverlayActive(false)
    // setIsAlertConfirmActive(false)
  }
  return (
    <div className={`${isOverlayActive ? styles.confirm : 'hidden'} `}>
      <div className='relative w-full h-full'>
        <span className='font-quicksand font-semibold max-w-[25ch] block text-2xl text-[#34333A]'>
          {/* Are you sure that you want to cancel this new item ? */}
          {textAlert}
        </span>
        <div className='absolute top-[-1.8rem] right-[-1.8rem] cursor-pointer' onClick={handleCloseModal}>
          <CloseIcon />
        </div>
        <div className='flex items-center justify-end gap-8 font-quicksand mt-8'>
          <button className='text-[#34333A] text-sm font-semibold' onClick={handleCloseModal}>Cancel</button>
          <button className='bg-[#EB5757] text-white py-3 px-7 rounded-xl' onClick={() => setExecuteAction(true)}>Yes</button>
        </div>
      </div>
    </div>
  )
}

export default Alert
