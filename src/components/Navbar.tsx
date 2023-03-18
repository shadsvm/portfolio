import Link from "next/link"
import { useState } from "react"
import { BiMenu } from "react-icons/bi"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className="fixed inset-x-0 top-0 z-40 flex flex-col border-red-500 p-5 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href={"/"} className="font-['La_Belle_Aurore'] text-2xl">
          Samuel Kaminski
        </Link>
        <button onClick={() => setMenu(!menu)} className="text-2xl sm:hidden">
          <BiMenu />
        </button>
        <div className="hidden sm:flex sm:gap-8">
          <a href="#about">
            <span className="font-mono text-primary-400">01.</span> About me
          </a>
          <a href="#work">
            <span className="font-mono text-primary-400">02.</span> Experience
          </a>
          <a href="#projects">
            <span className="font-mono text-primary-400">03.</span> Projects
          </a>
          <a href="#contact">
            <span className="font-mono text-primary-400">04.</span> Contact
          </a>
        </div>
      </nav>
      {menu && (
        <nav className="my-4 flex flex-col gap-4">
          <a onClick={() => setMenu(false)} href="#about">
            <span className="font-mono text-primary-400">01.</span> About me
          </a>
          <a href="#work">
            <span className="font-mono text-primary-400">02.</span> Experience
          </a>
          <a href="#projects">
            <span className="font-mono text-primary-400">03.</span> Projects
          </a>
          <a href="#contact">
            <span className="font-mono text-primary-400">04.</span> Contact
          </a>
        </nav>
      )}
    </div>
  )
}

export default Navbar
