import Landing from "@/components/sections/Landing"
import AboutMe from "@/components/sections/AboutMe"
import Work from "@/components/sections/Work"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import Navbar from "@/components/Navbar"
import Experience from "@/components/sections/Experience"

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Landing />
      <AboutMe />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home
