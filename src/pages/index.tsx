import Landing from "@/components/sections/Landing"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Navbar from "@/components/Navbar"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
// import Image from "next/image"

const Home = () => {
  return (
    <main className="bg relative">
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

// <Image src="/bg_copy.png" className="z-0" alt="bg" fill={true} />
export default Home
