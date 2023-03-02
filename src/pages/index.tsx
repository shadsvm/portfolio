import Landing from "@/components/sections/Landing"
import AboutMe from "@/components/sections/AboutMe"
import Work from "@/components/sections/Work"

const Home = () => {
  return (
    <main className="flex-1 snap-y snap-mandatory flex-col overflow-auto scroll-smooth">
      <Landing />
      <AboutMe />
      <Work />
    </main>
  )
}

export default Home
