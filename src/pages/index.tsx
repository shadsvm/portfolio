import Landing from "@/components/sections/Landing"
import AboutMe from "@/components/sections/AboutMe"
import Work from "@/components/sections/Work"
import Projects from "@/components/sections/Projects"

const Home = () => {
  return (
    <main className="flex-1 snap-y snap-mandatory flex-col overflow-auto scroll-smooth">
      <Landing />
      <AboutMe />
      <Work />
      <Projects />
    </main>
  )
}

export default Home
