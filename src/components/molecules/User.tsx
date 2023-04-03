export function User() {
  const loggedIn = false // Change for actual auth later
  return (
    <picture className='px-3 w-full flex justify-center xl:px-6'>
      <img
        src={loggedIn ? 'userProfileImage' : '/no-user.webp'}
        alt={loggedIn ? 'username' : 'Placeholder no user image'}
        className='object-cover object-center w-full overflow-hidden rounded-full aspect-square bg-gray-300 max-w-[2.625rem]'
      />
    </picture>
  )
}
