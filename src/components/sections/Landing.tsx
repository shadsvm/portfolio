import { BsGithub, BsLinkedin } from "react-icons/bs"
import SectionWrapper from "../SectionWrapper"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "@/utils/motion"

const Landing = () => {
  return (
    <SectionWrapper id="hero">
      <div className="flex h-full items-center py-10 md:justify-between ">
        <div className="flex flex-col gap-4">
          <motion.p variants={textVariant()} className="sectionSubText">
            Web Developer You are looking for!
          </motion.p>
          <motion.h1 variants={textVariant()} className="sectionHeadText">
            Hi, I&apos;m <span className="text-primary-500">Samuel</span>
          </motion.h1>
          <motion.p
            variants={fadeIn({ delay: 0.3, duration: 1 })}
            className="font-medium text-gray-300 md:text-xl lg:text-2xl xl:text-3xl"
          >
            Professional Frontend Developer from Poland,
            <br /> with well-versed knowledge of Vue, React,
            <br /> TypeScript, and many other technologies.
          </motion.p>
          <div className="mt-5 flex gap-10 text-xl sm:text-2xl">
            <motion.a
              variants={fadeIn({ delay: 0.6, duration: 1 })}
              href="https://www.github.com/sam-kmn"
              target="_blank"
              className="flex items-center gap-3 transition hover:scale-105 hover:text-primary-500"
            >
              <BsGithub className="text-3xl sm:text-4xl" />
              GitHub
            </motion.a>

            <motion.a
              variants={fadeIn({ delay: 0.7, duration: 1 })}
              href="https://www.Linkedin.com/in/sam-kmn"
              target="_blank"
              className="flex items-center gap-3 transition hover:scale-105 hover:text-primary-500"
            >
              <BsLinkedin className="text-3xl sm:text-4xl" />
              Linkedin
            </motion.a>
          </div>
        </div>
        <motion.div
          className="relative hidden h-72 w-1/4 rounded-2xl md:flex lg:h-96 lg:w-1/3 "
          variants={fadeIn({ delay: 0.5, duration: 1 })}
        >
          <Image
            src="/unsplash/3.jpg"
            fill={true}
            className="object-cover "
            alt=""
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Landing
