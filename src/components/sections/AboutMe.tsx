import { FaReact, FaVuejs } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex-center mx-auto h-full snap-center flex-col gap-10  p-5 py-10 md:flex-row"
    >
      <div className="flex max-w-xl flex-col gap-8  text-justify">
        <header className="flex items-center justify-start gap-5 whitespace-nowrap text-xl">
          <span className="font-mono text-primary-400">01.</span> About me
          <div className="w-full border border-gray-800"></div>
        </header>
        <div className="flex items-center gap-5">
          <img
            src="MeWinter.jpeg"
            className="aspect-square w-14 rounded-full object-cover ring ring-primary-500 lg:hidden"
            alt=""
          />
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Samuel Kamiński
          </h1>
        </div>
        <p>
          I am an ambitious, diligent, and hard-working front-end developer from
          Poznan, Poland 🇵🇱 Who is constantly expanding knowledge and improving
          skills.
        </p>
        <p>
          I have commercial experience in creating web applications and a
          well-versed knowledge of Vue, React, TypeScript, and many other
          frameworks and technologies.
        </p>
        <div className="flex gap-4 text-3xl">
          <SiTypescript className="text-sky-500" />
          <FaVuejs className="text-green-500" />
          <FaReact className="text-blue-400" />
          <TbBrandNextjs className="text-white" />
        </div>
      </div>

      <img
        src="MeWinter.jpeg"
        className="hidden   rounded object-cover lg:block lg:h-96"
        alt=""
      />
    </section>
  )
}
export default AboutMe
