import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"
import { experience } from "../../constants"
import { fadeIn, textVariant } from "../../utils/motion"
import SectionWrapper from "../SectionWrapper"

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.icon.bg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon.path}
            alt={experience.company}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-[16px] font-semibold text-gray-400"
          style={{ margin: 0 }}
        >
          {experience.company}
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <SectionWrapper>
        <motion.div variants={textVariant()} className="space-y-2 text-center">
          <p className="sectionSubText">What I have done so far</p>
          <h2 className="sectionHeadText">Work Experience.</h2>
        </motion.div>

        <motion.div
          variants={fadeIn({ delay: 0.8, duration: 1 })}
          className="mt-20 flex flex-col"
        >
          <VerticalTimeline>
            {experience.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </motion.div>
      </SectionWrapper>
    </>
  )
}

export default Experience
