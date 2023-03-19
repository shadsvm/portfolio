import { FaReact, FaVuejs, FaSass } from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiPrisma,
  SiMongodb,
} from "react-icons/si"
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
          <h1 className=" text-3xl font-semibold xs:text-4xl sm:text-5xl">
            Samuel Kamiński
          </h1>
        </div>
        <p>
          I am an ambitious, diligent, and hard-working front-end developer from
          Poznan, Poland. I&apos;m always eager to learn and explore new
          technologies
        </p>
        <p>
          I have commercial experience in creating web applications and
          well-versed knowledge of Vue, React, and many other technologies. My
          personal favourite tech stack is Next.js + TypeScript, I use it very
          often along with Prisma to easily work with any database.
        </p>
        <div className="flex justify-between text-2xl xs:justify-evenly xs:text-3xl sm:justify-start sm:gap-6">
          <SiTypescript className="text-sky-500" />
          <FaVuejs className="text-green-500" />
          <FaReact className="text-blue-400" />
          <TbBrandNextjs className="text-white" />
          <SiTailwindcss className="text-sky-500" />
          <FaSass className="text-pink-500" />
          <SiRedux className="text-purple-400" />
          <SiPrisma className="text-white" />
          <SiFirebase className="text-amber-500" />
          <SiMongodb className="text-emerald-500" />
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
