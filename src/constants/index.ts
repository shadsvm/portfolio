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
    company: "Apkeo",
    title: "Full-Stack Developer",
    date: "Jul 2023 - present",
    icon: {
      path: "/companies/apkeo.svg",
      bg: "#202035",
    },
    points: [
      "Tech Stack: TypeScript, Node.js, Vue.js, Sass, MongoDB, Redis",
      "Developing comprehensive web application that seamlessly integrates a variety of essential tools such as spreadsheets, maps, audio and video communication, forms, and more into a unified platform. This all-in-one solution also facilitates robust collaboration features tailored for businesses, enabling teams to work together efficiently and effectively within a single, organized environment"
    ],
  },
  {
    company: "WebWizards",
    title: "Front-end Developer",
    date: "Mar 2023 - Jul 2023",
    icon: {
      path: "/companies/webwizards.ico",
      bg: "#202035",
    },
    points: [
      "Tech Stack: TypeScript, React.js, Vue.js, Next.js, Nuxt.js, Astro, TailwindCSS, Sas",
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
    date: "Oct 2022 - Feb 2023",
    icon: {
      path: "/companies/codeclutch.ico",
      bg: "#202035",
    },
    points: [
      "Tech Stack: TypeScript, Node.js, Nuxt.js, Pinia, TailwindCSS, MongoDB",
      "Developing cutting-edge web application that serves as a centralized cryptocurrency trading platform. It unifies multiple digital asset exchanges into a single, user-friendly interface. Alongside essential trading tools, it incorporates advanced features including trading automation, enabling users to optimize their trading strategies",
    ],
  },
  {
    company: "Freelance",
    title: "Full-Stack Developer",
    date: "Apr 2022 - Oct 2022",
    icon: {
      path: "/favicon.ico",
      bg: "#000000",
    },
    points: [
      "Tech Stack: TypeScript, React.js, Next.js, TailwindCSS, Firebase, MongoDB",
      "Designing, developing, maintaining responsive and visually appealing web applications, these solutions are customized to precisely match the unique requirements of clients, ensuring optimal user experiences and long-term functionality"
    ],
  },
  {
    company: "Merito University",
    title: "Tech Support",
    date: "Oct 2021 - present",
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
    date: "Dec 2019 - Apr 2021",
    icon: {
      path: "/companies/atcomp.png",
      bg: "#FFFFFF",
    },
    points: [
      "Tech Stack: Tech Stack: Vue.js, Vuex, Sass, Python, Laravel",
      "Developing customer relationship management (CRM) software. This software is designed to assist businesses in effectively managing and nurturing their relationships with customers, streamlining communication, tracking interactions, and enhancing overall customer satisfaction",
      // "Writing task automation scripts in Python",
      // "Optimization infrastructure of LAN networks",
      // "Assembling server hardware",
    ],
  },
]
