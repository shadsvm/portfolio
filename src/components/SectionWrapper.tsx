import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode
  id?: string
}

const SectionWrapper = ({ children, id = "" }: Props) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16 lg:py-20 xl:py-24`}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper
