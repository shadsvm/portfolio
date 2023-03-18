import { ReactNode } from "react"
import Navbar from "./Navbar"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-[100dvh] w-[100dvw] flex-col">
      <Navbar />
      {children}
    </div>
  )
}
export default Layout
