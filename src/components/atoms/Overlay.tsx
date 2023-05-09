'use client'
import { useOverlayStore } from '@/store/overlayStore'

export const Overlay = () => {
  const { isOverlayActive } = useOverlayStore()
  return (
    <div className={`bg-black/20 z-[2] absolute inset-0 transition-opacity duration-300 ${isOverlayActive ? 'opacity-100 pointer-events-auto'
    : 'pointer-events-none opacity-0'}`}
    />

  )
}
