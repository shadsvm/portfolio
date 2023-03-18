import Link from "next/link"
import { GoRepo } from "react-icons/go"
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiBootstrap,
  SiJavascript,
  SiReact,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const projects = [
  {
    name: "KanBox",
    desc: "KanBox is a web-based kanban board application, It allows users to easily visualize their workflow, prioritize tasks, and collaborate with their team in real-time.",
    url: "https://github.com/sam-kmn/kanbox",
    tech: [
      {
        Icon: SiTypescript,
        colors: "text-sky-400",
      },

      {
        Icon: TbBrandNextjs,
        colors: "text-white",
      },

      {
        Icon: SiTailwindcss,
        colors: "text-sky-500",
      },

      {
        Icon: SiFirebase,
        colors: "text-amber-500",
      },
    ],
  },

  {
    name: "Status",
    desc: "Fully-featured social media application that provides user authentication, and CRUD functionality. All requests to the application are processed through an API that is integrated with MongoDB.",
    url: "https://github.com/sam-kmn/status",
    tech: [
      {
        Icon: SiTypescript,
        colors: "text-sky-400",
      },

      {
        Icon: TbBrandNextjs,
        colors: "text-white",
      },

      {
        Icon: SiTailwindcss,
        colors: "text-sky-500",
      },
      {
        Icon: SiMongodb,
        colors: "text-emerald-500",
      },
    ],
  },

  {
    name: "TalkAbout",
    desc: "Real-time chat web application. Messages are updated instantly across all connected users. Firebase provides the necessary infrastructure for message storage, authentication, and real-time updates.",
    url: "https://github.com/sam-kmn/talkabout",
    tech: [
      {
        Icon: SiJavascript,
        colors: "text-amber-400",
      },

      {
        Icon: SiReact,
        colors: "text-blue-400",
      },

      {
        Icon: SiBootstrap,
        colors: "text-indigo-400",
      },
      {
        Icon: SiFirebase,
        colors: "text-amber-500",
      },
    ],
  },
  {
    name: "Moviehunt",
    desc: "Find the most important informations and ratings about movies from biggest review-aggregation websites.",
    url: "https://github.com/sam-kmn/moviehunt",
    tech: [
      {
        Icon: SiJavascript,
        colors: "text-amber-400",
      },

      {
        Icon: SiReact,
        colors: "text-blue-400",
      },

      {
        Icon: SiBootstrap,
        colors: "text-indigo-400",
      },
    ],
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex-center mx-auto h-full max-w-4xl snap-center flex-col gap-8 px-5 "
    >
      <header className="flex w-full items-center justify-start gap-5 whitespace-nowrap text-xl">
        <span className="font-mono text-primary-400">03.</span> My projects
        <div className="w-full border border-gray-800"></div>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="trans flex flex-col gap-3 rounded border border-gray-800 bg-black p-5 hover:border-gray-300"
          >
            <header className="flex items-center justify-between">
              <h1 className="flex items-center gap-2 text-lg font-semibold sm:text-xl lg:text-lg ">
                <GoRepo />
                {project.name}
              </h1>
              <div className="flex gap-3 text-xl">
                {project.tech.map(({ Icon, colors }, index) => (
                  <Icon className={colors} key={index} />
                ))}
              </div>
            </header>
            <p className="text-xs text-gray-400 md:text-base">{project.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects
