import Landing from "@/components/sections/Landing"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Navbar from "@/components/Navbar"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"

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

export default Home
