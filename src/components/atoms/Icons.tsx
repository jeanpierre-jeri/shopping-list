export function HistoryIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='currentColor'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z' />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='currentColor'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z' />
    </svg>
  )
}

export function StatsIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='currentColor'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z' />
    </svg>
  )
}

export function SearchIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      width='100%'
      height='100%'
      viewBox='0 96 960 960'
    >
      <path d='M794 960 525.787 692Q496 714.923 457.541 727.962 419.082 741 373.438 741q-115.311 0-193.875-78.703Q101 583.594 101 470.797T179.703 279.5q78.703-78.5 191.5-78.5T562.5 279.644Q641 358.288 641 471.15q0 45.85-13 83.35-13 37.5-38 71.5l270 268-66 66ZM371.441 650q75.985 0 127.272-51.542Q550 546.917 550 471.412q0-75.505-51.346-127.459Q447.309 292 371.529 292q-76.612 0-128.071 51.953Q192 395.907 192 471.412t51.311 127.046Q294.623 650 371.441 650Z' />
    </svg>
  )
}

export function CartIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='currentColor'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z' />
    </svg>
  )
}

export function PlusIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='currentColor'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
    </svg>
  )
}
export interface PencilIconProps {
  status?: boolean
}
export function PencilIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='currentColor'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
    </svg>
  )
}

export function MinusIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#F9A109'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M19 13H5v-2h14v2z' />
    </svg>
  )
}

export function DeleteIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#fff'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#000000'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
    </svg>
  )
}

export function BackArrowIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#F9A109'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M22 12l-4-4v3H3v2h15v3z' />
    </svg>
  )
}

export function DateIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#C1C1C4'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z' />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='28px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#F9A109'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
    </svg>
  )
}

export function Bottle() {
  return (
    <svg
      width='81'
      height='135'
      viewBox='0 0 81 135'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M31.5096 5.27646L16.643 9.25995C16.1203 9.40002 15.6746 9.74201 15.404 10.2107C15.1334 10.6794 15.0601 11.2364 15.2001 11.7591L16.9486 18.2845C17.0887 18.8072 17.4307 19.2529 17.8993 19.5235C18.368 19.7941 18.925 19.8674 19.4477 19.7274L21.9114 19.0673L24.5312 28.8445L34.4706 26.1813L31.8507 16.404L34.3144 15.7439C34.8371 15.6038 35.2828 15.2618 35.5534 14.7931C35.824 14.3245 35.8973 13.7675 35.7572 13.2447L34.0088 6.71934C33.8687 6.1966 33.5267 5.7509 33.058 5.48031C32.5893 5.20971 32.0324 5.13639 31.5096 5.27646Z'
        fill='#F9A109'
      />
      <path
        d='M62.4022 61.0071C49.7276 50.124 40.8227 35.5085 36.9632 19.2546C36.8717 18.8802 36.6535 18.549 36.3456 18.3172C36.0377 18.0854 35.659 17.9674 35.2739 17.9831L34.5184 15.1635L18.8173 19.3706L19.5623 22.151L19.346 22.209C19.1246 22.2686 18.9179 22.3732 18.7388 22.5163C18.5596 22.6594 18.4119 22.8379 18.3049 23.0406C18.1978 23.2433 18.1337 23.466 18.1165 23.6946C18.0994 23.9232 18.1295 24.1529 18.2051 24.3693C24.0622 41.2808 24.0287 57.863 18.1043 74.1161C17.7631 75.0504 17.7341 76.0701 18.0217 77.0221L33.9685 129.669C34.3271 130.842 35.1251 131.832 36.196 132.431C37.2668 133.03 38.5276 133.193 39.7154 132.885L75.2289 123.369C76.4251 123.038 77.4447 122.253 78.0706 121.181C78.6965 120.11 78.8792 118.836 78.5798 117.631L65.4253 65.8918C64.9378 63.994 63.8832 62.29 62.4022 61.0071V61.0071Z'
        fill='#3F3D56'
      />
      <path
        opacity='0.2'
        d='M28.9801 8.23311C29.2823 9.36092 29.1241 10.5626 28.5403 11.5737C27.9565 12.5849 26.995 13.3227 25.8672 13.6249C24.7394 13.9271 23.5377 13.7689 22.5265 13.1851C21.5154 12.6013 20.7775 11.6398 20.4753 10.512'
        fill='black'
      />
      <path
        d='M61.5071 80.1538L57.2066 81.3061C56.0822 78.752 54.0809 76.6846 51.5646 75.478C49.0482 74.2713 46.1832 74.005 43.4876 74.7273C40.792 75.4496 38.4439 77.1127 36.8681 79.4159C35.2922 81.719 34.5927 84.5101 34.896 87.2843L30.5953 88.4366C30.1377 88.5592 29.712 88.7793 29.3475 89.0818C28.9829 89.3843 28.6881 89.7621 28.4832 90.1892C28.2784 90.6164 28.1683 91.0827 28.1605 91.5564C28.1527 92.03 28.2474 92.4997 28.4382 92.9333L41.2451 122.045L68.0679 114.857L65.6335 83.0765C65.5966 82.5952 65.4541 82.1278 65.2161 81.7078C64.9781 81.2878 64.6505 80.9253 64.2565 80.6463C63.8626 80.3672 63.412 80.1785 62.9367 80.0934C62.4615 80.0082 61.9734 80.0289 61.5071 80.1538Z'
        fill='#F9A109'
      />
    </svg>
  )
}
