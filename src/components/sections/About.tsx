import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../../utils/motion"
import SectionWrapper from "../SectionWrapper"
import TechSwiper from "../TechSwiper"

const About = () => {
  return (
    <SectionWrapper>
      <motion.div variants={textVariant()} className="space-y-2">
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn({ delay: 0.1, duration: 1 })}
        className="text-secondary mt-7 max-w-3xl leading-8 md:text-lg"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next and Nuxt. I'm
        always eager to learn, explore new technologies and collaborate closely
        with clients to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let's work together to bring your ideas
        to life!
      </motion.p>

      <motion.div
        variants={fadeIn({ delay: 0.3, duration: 1 })}
        className="mt-10"
      >
        <TechSwiper />
      </motion.div>
    </SectionWrapper>
  )
}

export default About
