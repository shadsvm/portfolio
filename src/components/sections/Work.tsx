import { useState } from "react"
import { MdOutlineArrowRight } from "react-icons/md"

const jobs = [
  {
    name: "WebWizards",
    position: "Frontend Developer",
    timeline: "03.2023 - present",
    actions: [
      "Preparation and/or modernization of websites",
      "Creation of necessary software",
      "Design of graphic elements, including animations, sliders, and applications",
      "Ensuring their proper functioning",
      "Solving any technical problems related to the projects being developed",
    ],
  },
  {
    name: "codeclutch",
    position: "Frontend Developer",
    timeline: "10.2022 - 01.2023",
    actions: [
      "Built a frontend for cryptocurrency trading web platform",
      "Frontend: Vue 3, Pinia, TailwindCSS",
      "Backend: Laravel",
    ],
  },
  {
    name: "Freelance",
    position: "Full-Stack Developer",
    timeline: "05.2022 - 10.2022",
    actions: ["Built Immergas,"],
  },
  {
    name: "WSB University",
    position: "Microsoft 365 Helpdesk",
    timeline: "10.2021 - present",
    actions: [
      "Solving problems that professors, students and deans office may encounter on Microsoft 365 platform",
    ],
  },
  {
    name: "AT Computers S.C.",
    position: "IT Specialist",
    timeline: "12.2019 - 03.2021",
    actions: [
      "Developing Web application to store and manage informations about clients, devices and repair process",
      "Writing task automation scripts in Python",
      "Assembling server hardware",
      "Optimization infrastructure of LAN networks",
    ],
  },
]

const Work = () => {
  const [selectedCompany, setSelectedCompany] = useState(0)
  return (
    <section
      id="work"
      className="flex-center mx-auto h-full max-w-3xl snap-center flex-col gap-6 overflow-hidden p-5 xs:gap-12 lg:max-w-4xl "
    >
      <header className="flex w-full items-center justify-start gap-5 whitespace-nowrap text-xl">
        <span className="font-mono text-primary-400">02.</span> Where I’ve
        Worked
        <div className="w-full border border-gray-800"></div>
      </header>
      <div className="flex w-full gap-1 xs:gap-4 md:gap-6 lg:gap-8">
        <div
          id="companies"
          className="flex  flex-col items-start justify-start text-sm sm:text-base lg:text-lg"
        >
          {jobs.map((company, index) => (
            <button
              key={index}
              onClick={() => setSelectedCompany(index)}
              className={`trans border-l-4 ${
                selectedCompany === index
                  ? "border-primary-500 font-semibold"
                  : "border-gray-700 text-gray-400"
              } px-4 py-3`}
            >
              {company.name}
            </button>
          ))}
        </div>
        {jobs.map((company, index) => {
          if (index === selectedCompany)
            return (
              <div className="flex flex-1 flex-col gap-1 " key={index}>
                <header className="text-xl font-semibold lg:text-2xl">
                  {company.position}
                </header>
                <div className="mb-2 text-sm text-gray-500">
                  {company.timeline}
                </div>
                {company.actions.length &&
                  company.actions.map((action, index) => (
                    <div
                      className="mb-1 flex items-center gap-2 text-xs xs:text-sm sm:text-base md:mb-2 lg:mb-3"
                      key={index}
                    >
                      <MdOutlineArrowRight className="text-xl" />
                      <p className="flex-1">{action}</p>
                    </div>
                  ))}
              </div>
            )
        })}
      </div>
    </section>
  )
}
export default Work
