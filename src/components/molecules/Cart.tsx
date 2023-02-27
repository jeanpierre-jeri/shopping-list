import { CartIcon } from '../atoms'

export function Cart() {
  return (
    <button className='text-white bg-primary rounded-full p-2 relative isolate'>
      <span className='bg-[#EB5757]  w-5 h-5 flex justify-center items-center rounded-[4px] absolute -top-1 -right-1 z-[-1] text-xs leading-[0]'>
        3
      </span>
      <CartIcon />
    </button>
  )
}
