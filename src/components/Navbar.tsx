const Navbar = () => {
  return (
    <div className=" border-red-500 p-5 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between">
        <div>Samuel Kaminski</div>
        <div className="flex gap-8">
          <a href="#about">
            <span className="font-mono text-primary-400">01.</span> About me
          </a>
          <a href="#work">
            <span className="font-mono text-primary-400">02.</span> Experience
          </a>
          <a href="#projects">
            <span className="font-mono text-primary-400">03.</span> Projects
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
