import Landing from "@/components/sections/Landing"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Navbar from "@/components/Navbar"
import Experience from "@/components/sections/Experience"

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home
