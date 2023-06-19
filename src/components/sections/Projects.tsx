import Link from "next/link"
import { GoRepo } from "react-icons/go"
import { projects } from "../../constants"
import SectionWrapper from "../SectionWrapper"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../../utils/motion"

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <motion.div variants={textVariant()} className="space-y-2">
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">My projects</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-start gap-10">
        {projects.map((project, index) => (
          <Link key={index} href={project.url}>
            <motion.main
              variants={fadeIn({ delay: index + 1 / 10, duration: 1 })}
              className="flex max-w-sm flex-col  rounded border border-gray-800 bg-black/70 backdrop-blur-md  hover:border-gray-300 "
            >
              <img src={project.img} className="" alt="" />
              <div className="p-3 xs:p-4 sm:gap-3 sm:p-5">
                <header className="flex items-center justify-between ">
                  <h1 className="flex items-center gap-2 text-lg font-semibold md:text-xl lg:text-lg ">
                    <GoRepo />
                    {project.name}
                  </h1>
                  <div className="flex gap-3 text-xl">
                    {project.tech.map(({ Icon, colors }, index) => (
                      <Icon className={colors} key={index} />
                    ))}
                  </div>
                </header>
                <p className="text-xs text-gray-400 md:text-base">
                  {project.desc}
                </p>
              </div>
            </motion.main>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Projects
