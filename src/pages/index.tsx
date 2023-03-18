import Landing from "@/components/sections/Landing"
import AboutMe from "@/components/sections/AboutMe"
import Work from "@/components/sections/Work"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <div className="flex h-[100dvh] w-[100dvw] flex-col">
      <Navbar />
      <main className="flex-1 snap-y snap-mandatory flex-col overflow-auto scroll-smooth">
        <Landing />
        <AboutMe />
        <Work />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default Home
