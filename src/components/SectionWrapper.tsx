import { motion } from "framer-motion"

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16`}
    >
      <span className="hash-span" id={"text"}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  )
}

const staggerContainer = (staggerChildren?: any, delayChildren?: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}
export default SectionWrapper
