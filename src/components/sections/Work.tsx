import { useState } from "react"

const jobs = [
  {
    name: "codeclutch",
    position: "Frontend Developer",
    timeline: "07.2022 - 01.2023",
  },

  {
    name: "Apple",
    position: "Web Developer",
    timeline: "03.2021 - 05.2022",
  },
]

const Work = () => {
  const [selectedCompany, setSelectedCompany] = useState(0)
  return (
    <section
      id="work"
      className="flex-center mx-auto h-full max-w-xl snap-center flex-col gap-8 p-5 "
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
              className={`border-l-4 ${
                selectedCompany === index
                  ? "border-primary-500"
                  : "border-gray-400"
              } px-4 py-3`}
            >
              {company.name}
            </button>
          ))}
        </div>
        {jobs.map((company, index) => {
          if (index === selectedCompany)
            return (
              <div className="flex flex-1 flex-col border" key={index}>
                <header className="text-lg font-medium">
                  {company.position}
                </header>
                <div className="text-sm">{company.timeline}</div>
              </div>
            )
        })}
      </div>
    </section>
  )
}
export default Work
