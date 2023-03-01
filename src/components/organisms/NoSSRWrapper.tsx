import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'
export function NoSSRWrapper({ children }: PropsWithChildren) {
  return <>{children}</>
}
export default dynamic(async () => await Promise.resolve(NoSSRWrapper), {
  ssr: false
})
