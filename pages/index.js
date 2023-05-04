import Head from "next/head";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaPython,
  FaLinkedin,
} from "react-icons/fa";
import { SiDjango, SiJavascript } from "react-icons/si";
import Project from "../components/Project";
import profilePic from "../public/profile2.png";

export default function Home() {
  return (
    <div className="bg-stone-200 dark:bg-sky-900 font-roboto min-w-fit">
      <Head>
        <title>Jordan Frerichs - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center sticky top-0 z-50 bg-stone-300/90 dark:bg-sky-800/60">
        <header className=" flex-grow h-16 mt-2 max-w-3xl ">
          <div className="p-2 flex justify-end space-x-4">
            <a href="#about" className="">
              <button className="h-8 px-5 text-white bg-cyan-600 hover:bg-sky-900 rounded-full transition-all duration-200">
                About
              </button>
            </a>
            <a href="#skills" className="">
              <button className="h-8 px-5 text-white bg-cyan-600 hover:bg-sky-900 rounded-full transition-colors duration-200">
                Skills
              </button>
            </a>

            <a href="#projects" className="">
              <button className="h-8 px-5 text-white bg-cyan-600 hover:bg-sky-900 rounded-full transition-colors duration-200">
                Projects
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/jordan-frerichs/"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <button className="h-8 px-5 text-white bg-cyan-600 hover:bg-sky-900 rounded-full transition-colors duration-200">
                Contact
              </button>
            </a>
          </div>
        </header>
      </div>
      <div className="flex justify-center">
        <main
          className="max-w-3xl space-y-20 my-20 bg-stone-200 dark:bg-sky-900"
          id="home"
        >
          {/* <h3
            className="m-10 text-2xl font-bold text-center text-cyan-600 dark:text-green-300"
            id="about"
          >
            Hello! I&apos;m Jordan, a Seattle based software engineer
          </h3> */}

          <div className="m-10">
            <h3 className="text-2xl text-cyan-600 mb-5 dark:text-green-300">
              About
            </h3>
            <div className="items-center space-x-6 sm:flex md:flex md:flex-row">
              <div className="flex-shrink-0">
                <Image
                  src={profilePic}
                  alt="picture of the author"
                  height={300}
                  width={300}
                />
              </div>
              <div className="text-stone-800 dark:text-stone-200">
                <p>
                  Hello! I&apos;m Jordan, a Seattle based software engineer. I
                  am especially interested in front-end development and enjoy
                  combining aesthetics with functionality to craft an engaging
                  and memorable user experience. Web development is always an
                  exciting adventure for me, and I&apos;m eager to take on new
                  challenges and push my skills to the next level. Lately,
                  I&apos;ve been working with Astro and focusing on making
                  reusable components within my projects.
                </p>
                <p className="mt-5">
                  I like to spend my free time reading, baking, building
                  mechanical keyboards, and exploring the PNW. If you want to
                  get in touch, please message me on LinkedIn!
                </p>
              </div>
            </div>
          </div>

          <div className="m-10">
            <h3
              className="text-2xl text-cyan-600 dark:text-green-300"
              id="skills"
            >
              Skills and Tools
            </h3>
            <div
              className="flex justify-center space-x-8 mt-5 pr-10 sm:pr-0"
              id="skillIcons"
            >
              <SkillItem name="javascript" />
              <SkillItem name="python" />
              <SkillItem name="html" />
              <SkillItem name="css" />
            </div>
            <div className="flex justify-center space-x-8 mt-5" id="toolIcons">
              <SkillItem name="react" />
              <SkillItem name="django" />
              <SkillItem name="docker" />
            </div>
          </div>

          <div className="m-10">
            <h3
              id="projects"
              className="text-2xl text-cyan-600 dark:text-green-300"
            >
              Projects
            </h3>

            <div className="space-y-10 mt-5 ml-5 text-stone-800 dark:text-stone-200">
              <Project
                title="Word Jumble"
                stack="Next.js, TailwindCSS, Vercel"
                githubLink="https://github.com/frerij/word-jumble"
                summary="Minimalist UI for The Seattle Times Daily Jumble word game."
                description={[]}
                demoLink="https://jumble.jordanf.dev"
              />
              <Project
                title="Personal Website"
                stack="Next.js, TailwindCSS, Vercel"
                githubLink="https://github.com/frerij/portfolio"
                summary="My first exploration into Next.js and Tailwind and a place to show my current and past work."
                description={[]}
                demoLink=""
              />
              <Project
                title="ScentFinder"
                stack="React, Django"
                githubLink="https://github.com/frerij/Scent-Finder"
                summary="Team developed, Heroku deployed, ecommerce website offering
                a personalized shopping experience."
                description={[
                  "- Implemented frontend and backend for API based product sorting and filtering.",
                  "- Tested frontend, hook based React components, using React Testing Library and Jest.",
                  "- CRUD wishlist API functionality; frontend implemented using SWR caching strategy.",
                  "- Developed and deployed on Heroku with a shared Docker compose file for all services.",
                  "- Used git with GitLab for change management across the whole team.",
                ]}
                demoLink=""
              />

              <Project
                title="CarCar"
                stack="React, Django"
                githubLink="https://github.com/frerij/carcar"
                summary="Co-Creater of a program to handle inventory, sales, and
                service needs of a car dealership."
                description={[
                  "- Single page React frontend app with bootstrap components.",
                  "- Developed Django microservices with pollers using Docker.",
                  "- CRUD APIs allowed frontend to interact with the car dealership's inventory, staff, service schedule, and manage sales.",
                ]}
                demoLink=""
              />
            </div>
          </div>
        </main>
      </div>
      <div>
        <footer className="sm:flex md:flex md:flex-row justify-center bg-stone-300/90 dark:bg-sky-800/60">
          <div className="flex flex-row my-10 ">
            <span className="flex">
              <a
                href="https://www.linkedin.com/in/jordan-frerichs/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={"2.75em"}
                  className="fill-cyan-600 dark:fill-stone-200 hover:fill-sky-900 dark:hover:fill-green-300 transition-colors duration-200  cursor-pointer"
                />
              </a>
            </span>
            <span className="flex ml-10">
              <a
                href="https://github.com/frerij"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub
                  size={"2.75em"}
                  className="fill-cyan-600 dark:fill-stone-200 hover:fill-sky-900 dark:hover:fill-green-300 transition-colors duration-200  cursor-pointer"
                />
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function SkillItem({ name }) {
  let icon = null;
  let text = "";
  let classNames = "fill-cyan-600 dark:fill-cyan-500";
  let size = "3em";

  switch (name) {
    case "docker":
      icon = <FaDocker className={classNames} size={size} />;
      text = "Docker";
      break;
    case "django":
      icon = <SiDjango className={classNames} size={size} />;
      text = "Django";
      break;
    case "react":
      icon = <FaReact className={classNames} size={size} />;
      text = "React";
      break;
    case "css":
      icon = <FaCss3 className={classNames} size={size} />;
      text = "CSS";
      break;
    case "html":
      icon = <FaHtml5 className={classNames} size={size} />;
      text = "HTML";
      break;
    case "python":
      icon = <FaPython className={classNames} size={size} />;
      text = "Python";
      break;
    case "javascript":
      icon = <SiJavascript className={classNames} size={size} />;
      text = "Javascript";
      break;
  }
  return (
    <div className="flex flex-col items-center text-stone-800 dark:text-stone-200">
      {icon}
      <p>{text}</p>
    </div>
  );
}
