import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsEnvelope,
  BsTelephone,
  // BsTiktok,
} from "react-icons/bs"
import { motion } from "framer-motion"
import { textVariant, fadeIn } from "../../utils/motion"
import SectionWrapper from "../SectionWrapper"

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <motion.div variants={textVariant()} className="space-y-2 ">
        <p className="sectionSubText">What&apos;s next?</p>
        <h2 className="sectionHeadText">Contact</h2>
      </motion.div>
      <motion.div
        variants={fadeIn({ delay: 0.3, duration: 1 })}
        className="mb-10 flex w-full max-w-4xl flex-col gap-6 py-6 text-lg sm:py-12 lg:gap-10 lg:pb-24 xl:text-xl 2xl:text-2xl"
      >
        <p className=" text-justify text-gray-200">
          Thank you for visiting my portfolio! If you have any questions or
          inquiries regarding my work or availability, please feel free to reach
          out to me. I&apos;d love to hear from you and discuss how we can work
          together to bring your ideas to life.
        </p>
        <div className="space-y-4 text-xl font-medium">
          <a
            href="mailto:samuel.kaminski.webdev@gmail.com"
            className="flex items-center justify-start gap-3 transition hover:text-primary-500"
          >
            <BsEnvelope />
            <p className="sm:hidden">Send Email</p>
            <p className="hidden sm:block">samuel.kaminski.webdev@gmail.com</p>
          </a>
          <a
            href="tel:+48530643361"
            className="flex items-center justify-start gap-3 transition hover:text-primary-500"
          >
            <BsTelephone />
            <span className="hidden sm:block">+48</span>530 643 361
          </a>
        </div>
      </motion.div>
      <motion.footer
        variants={fadeIn({ delay: 0.5, duration: 1 })}
        className="flex-center w-full flex-col gap-5 "
      >
        <div className="flex gap-7 text-2xl">
          <a href="https://github.com/sam-kmn" className="">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-kami%C5%84ski-203422225/"
            className="transition hover:text-sky-500"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.youtube.com/channel/UCNog3ab8Qcm_b7Mvon4_ooA"
            className="transition hover:text-red-500"
          >
            <BsYoutube />
          </a>
          <BsFacebook />
          <BsTwitter />
        </div>
        <p className="text-sm text-gray-500">
          &#169; Samuel Kamiński, 2023. All rights reserved.
        </p>
      </motion.footer>
    </SectionWrapper>
  )
}

export default Contact
