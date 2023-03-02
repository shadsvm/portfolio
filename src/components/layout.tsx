import { ReactNode } from "react"
import Navbar from "./Navbar"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      {children}
    </div>
  )
}
export default Layout
