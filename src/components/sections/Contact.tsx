import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsYoutube,
  BsTwitter,
  // BsTiktok,
} from "react-icons/bs"

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto flex h-screen max-w-3xl snap-center flex-col justify-between gap-8 p-5 pt-20 "
    >
      <div className="flex flex-col gap-10 py-10">
        <header className="flex w-full items-center justify-start gap-5 whitespace-nowrap text-xl">
          <span className="font-mono text-primary-400">04.</span> What&apos;s
          next?
          <div className="w-full border border-gray-800"></div>
        </header>
        <div className="flex flex-col items-start gap-10">
          <p className="text-xl text-gray-300">
            Email is the best way to contact me, my inbox is always open. Feel
            free to make use of the button below, I will try my best to answer
            you as soon as possible.
          </p>
          <a
            href="mailto:samuel.kaminski.webdev@gmail.com"
            className="trans rounded border border-gray-300 px-5 py-2 font-mono text-lg text-gray-300 hover:bg-white hover:text-black"
          >
            Say Hello
          </a>
        </div>
      </div>
      <footer className="flex-center w-full flex-col gap-5 p-10 ">
        <div className="flex gap-7 text-2xl">
          <a href="https://github.com/sam-kmn">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/samuel-kami%C5%84ski-203422225/">
            <BsLinkedin />
          </a>
          <BsFacebook />
          <BsTwitter />
          <a href="https://www.youtube.com/channel/UCNog3ab8Qcm_b7Mvon4_ooA">
            <BsYoutube />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &#169; Samuel Kamiński, 2023. All rights reserved.
        </p>
      </footer>
    </section>
  )
}

export default Contact
