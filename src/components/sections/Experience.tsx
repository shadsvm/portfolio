import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

import { experience } from "../../constants"
import SectionWrapper from "../SectionWrapper"

const textVariant = (delay?: any) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

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
          className="text-secondary text-[16px] font-semibold"
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
        <motion.div variants={textVariant()}>
          <p className="text-secondary text-center text-[14px] uppercase tracking-wider sm:text-[18px]">
            What I have done so far
          </p>
          <h2 className="text-center text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
            Work Experience.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experience.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </SectionWrapper>
    </>
  )
}

export default Experience
