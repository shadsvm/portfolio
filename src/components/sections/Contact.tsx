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
      <motion.div variants={textVariant()} className="space-y-2 text-center">
        <p className="sectionSubText">What&apos;s next?</p>
        <h2 className="sectionHeadText">Contact</h2>
      </motion.div>
      <motion.div
        variants={fadeIn({ delay: 0.3, duration: 1 })}
        className="mx-auto flex w-full max-w-4xl flex-col gap-3 py-16 text-center text-xl"
      >
        <p className="mb-10 text-gray-200">
          Thank you for visiting my portfolio! If you have any questions or
          inquiries regarding my work or availability, please feel free to reach
          out to me. I&apos;d love to hear from you and discuss how we can work
          together to bring your ideas to life.
        </p>
        <a
          href="mailto:samuel.kaminski.webdev@gmail.com"
          className="flex items-center justify-center gap-2 text-sm font-medium transition hover:text-primary-500 sm:text-base"
        >
          <BsEnvelope />
          samuel.kaminski.webdev@gmail.com
        </a>
        <a
          href="tel:+48530643361"
          className="flex items-center justify-center gap-2 font-medium transition hover:text-primary-500"
        >
          <BsTelephone />
          (+48) 530 643 361
        </a>
      </motion.div>
      <motion.footer
        variants={fadeIn({ delay: 0.5, duration: 1 })}
        className="flex-center w-full flex-col gap-5 "
      >
        <div className="flex gap-7 text-2xl">
          <a
            href="https://github.com/sam-kmn"
            className="transition hover:text-primary-500"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-kami%C5%84ski-203422225/"
            className="transition hover:text-primary-500"
          >
            <BsLinkedin />
          </a>
          <BsFacebook />
          <BsTwitter />
          <a
            href="https://www.youtube.com/channel/UCNog3ab8Qcm_b7Mvon4_ooA"
            className="transition hover:text-primary-500"
          >
            <BsYoutube />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &#169; Samuel Kamiński, 2023. All rights reserved.
        </p>
      </motion.footer>
    </SectionWrapper>
  )
}

export default Contact
