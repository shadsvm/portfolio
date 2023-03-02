import { useState } from "react"
import { MdOutlineArrowRight } from "react-icons/md"

const jobs = [
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
    name: "IT Specialist",
    position: "AT Computers S.C.",
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
      className="flex-center mx-auto h-full max-w-2xl snap-center flex-col gap-8 p-5 "
    >
      <header className="flex w-full items-center justify-start gap-5 whitespace-nowrap text-xl">
        <span className="font-mono text-primary-400">02.</span> Where I’ve
        Worked
        <div className="w-full border border-gray-800"></div>
      </header>
      <div className="flex w-full gap-4">
        <div
          id="companies"
          className="flex  flex-col items-start justify-start"
        >
          {jobs.map((company, index) => (
            <button
              key={index}
              onClick={() => setSelectedCompany(index)}
              className={`trans border-l-4 ${
                selectedCompany === index
                  ? "border-primary-500"
                  : "border-gray-600"
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
                <header className="text-xl font-semibold">
                  {company.position}
                </header>
                <div className="mb-2 text-sm text-gray-500">
                  {company.timeline}
                </div>
                {company.actions.length &&
                  company.actions.map((action, index) => (
                    <div className="flex items-center gap-2" key={index}>
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
