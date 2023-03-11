import { useOverlayStore } from '@/store/overlayStore'
import React from 'react'

const Overlay = () => {
  const isOverlayActive = useOverlayStore(state => state.isOverlayActive)
  return (
    <div className={`bg-black/10 z-[1] absolute inset-0 transition-opacity duration-300 ${isOverlayActive ? 'opacity-100 pointer-events-auto'
    : 'pointer-events-none opacity-0'}`}
    />
  )
}

export default Overlay
