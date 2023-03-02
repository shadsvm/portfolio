import { AiOutlineArrowDown } from "react-icons/ai"

const Landing = () => {
  return (
    <section className="flex-center relative h-full snap-center flex-col gap-2  text-center">
      <p className="text-2xl font-semibold uppercase tracking-widest text-gray-400">
        developer you deserve
      </p>
      <h1 className="text-gif text-5xl font-semibold sm:text-7xl">
        Transforming your <br />
        ideas into reality
      </h1>
      <div className="flex-center absolute bottom-20 animate-bounce gap-2">
        See more
        <AiOutlineArrowDown />
      </div>
    </section>
  )
}

export default Landing
