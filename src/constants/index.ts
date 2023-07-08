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

export const projects = [
  {
    name: "KanBox",
    desc: "KanBox is a web-based kanban board application, It allows users to easily visualize their workflow, prioritize tasks, and collaborate with their team in real-time.",
    url: "https://github.com/sam-kmn/kanbox",
    img: "/projects/kanbox.png",
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
    name: "TalkAbout",
    desc: "Real-time chat web application. Messages are updated instantly across all connected users. Firebase provides the necessary infrastructure for message storage, authentication, and real-time updates.",
    url: "https://github.com/sam-kmn/talkabout",
    img: "/projects/talkabout.png",
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
    img: "/projects/moviehunt.png",
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
  {
    name: "Status",
    desc: "Fully-featured social media application that provides user authentication, and CRUD functionality. All requests to the application are processed through an API that is integrated with MongoDB.",
    url: "https://github.com/sam-kmn/status",
    img: "/projects/status.png",
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
]
export const experience = [
  {
    company: "WebWizards",
    title: "Front-end Developer",
    date: "03.2023 - present",
    icon: {
      path: "/companies/webwizards.ico",
      bg: "#202035",
    },
    points: [
      "Tech Stack: React, Vue, Next, Nuxt, Astro, PHP",
      "Preparation and/or modernization of websites",
      "Creation of necessary software",
      "Design of graphic elements, including animations, sliders, and applications",
      "Ensuring their proper functioning",
      "Solving any technical problems related to the projects being developed",
    ],
  },
  {
    company: "codeclutch",
    title: "Front-end Developer",
    date: "10.2022 - 01.2023",
    icon: {
      path: "/companies/codeclutch.ico",
      bg: "#202035",
    },
    points: [
      "Building cryptocurrency trading web platform",
      "Tech Stack: Vue, Nuxt, Pinia, Tailwind CSS, Laravel",
    ],
  },
  {
    company: "Freelance",
    title: "Full-Stack Developer",
    date: "04.2022 - 10.2022",
    icon: {
      path: "/favicon.ico",
      bg: "#000000",
    },
    points: [
      "Designing, developing, and maintaining responsive and visually appealing websites and web applications that meet client specifications and user requirements. This involves both front-end and back-end development.",
      "Tech Stack: Vue, React, Next, TailwindCSS, Prisma, Firebase, MongoDB, MySQL",
    ],
  },
  {
    company: "Merito University",
    title: "University Tech Support",
    date: "10.2021 - present",
    icon: {
      path: "/companies/merito.png",
      bg: "#FFFFFF",
    },
    points: [
      "Solving problems that professors, students and deans office may encounter",
    ],
  },
  {
    company: "AT Computers S.C.",
    title: "Front-end Developer",
    date: "12.2019 - 03.2021",
    icon: {
      path: "/companies/atcomp.png",
      bg: "#FFFFFF",
    },
    points: [
      "Developing customer relationship management software and writing task automation scripts.",
      "Tech Stack: Python, Vue, Nuxt, Vuex, Sass, Laravel",
      // "Writing task automation scripts in Python",
      // "Optimization infrastructure of LAN networks",
      // "Assembling server hardware",
    ],
  },
]
