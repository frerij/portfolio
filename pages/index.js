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
import profilePic from "../public/profile2.png";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="bg-stone-200 font-mono">
      <Head>
        <title>Jordan Frerichs - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center sticky top-0 z-50 bg-emerald-500/60">
        <header className=" flex-grow h-16 mt-2 max-w-7xl ">
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

            <a href="#contact" className="">
              <button className="h-8 px-5 text-white bg-cyan-600 hover:bg-sky-900 rounded-full transition-colors duration-200">
                Contact
              </button>
            </a>
          </div>
        </header>
      </div>
      <div className="flex justify-center">
        <main className="max-w-6xl space-y-20 mt-10 bg-stone-200" id="home">
          <h3
            className="m-10 text-xl font-bold text-center text-cyan-600"
            id="about"
          >
            Hello! I&apos;m Jordan, a Seattle based software engineer
          </h3>

          <div className="m-10">
            <h3 className="text-2xl text-cyan-600">About Me</h3>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src={profilePic}
                  alt="picture of the author"
                  height={300}
                  width={300}
                />
              </div>
              <div className="">
                <p>
                  After graduating from the University of Washington in 2020
                  with a B.S. in Earth and Space Sciences, I added to my
                  technical skillset by teaching myself programming. Through
                  this, I found a great interest in the many applications for
                  software engineering. This lead me to apply for an immersive
                  bootcamp with Hack Reactor which I completed in July 2022. I
                  am now open for work and looking for a position which will let
                  me master my current knowledge and continue learning all I
                  can.
                </p>
              </div>
            </div>
          </div>

          <div className="m-10">
            <h3 className="text-2xl text-cyan-600" id="skills">
              Skills and Tools
            </h3>
            <div
              className="flex justify-center space-x-8 mt-5 pr-10"
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
            <h3 id="projects" className="text-xl text-cyan-600">
              Projects
            </h3>
            <div className="space-y-10 mt-5 ml-5">
              <div id="personalWebsite">
                <h4>Personal Website | NextJS, TailwindCSS</h4>
                <div className="ml-5">
                  <p>
                    This site: designed, built, and hooked up to my personal
                    domain as a way to show my current and prior projects and to
                    practice with new-to-me technologies.
                  </p>
                  <div className="ml-5"></div>
                  <VscGithub
                    href="https://github.com/frerij/portfolio"
                    size={"1.75em"}
                    className="fill-cyan-600 hover:fill-green-300 transition-colors duration-200 cursor-pointer"
                  />
                </div>
              </div>

              <div id="scentFinder">
                <h4>ScentFinder | React, Django</h4>
                <div className="ml-5">
                  <p>
                    Team developed, Heroku deployed, ecommerce website offering
                    a personalized shopping experience.
                  </p>
                  <div className="ml-5">
                    <p>
                      - Implemented frontend and backend for API based product
                      sorting and filtering.
                      <br></br>- Tested frontend, hook based React components,
                      using React Testing Library and Jest.
                      <br></br>- CRUD wishlist API functionality; frontend
                      implemented using SWR caching strategy.
                      <br></br>- Developed and deployed on Heroku with a shared
                      Docker compose file for all services.
                      <br></br>- Used git with GitLab for change management
                      across the whole team.
                    </p>
                  </div>
                  <button>
                    <VscGithub
                      size={"1.75em"}
                      href="https://github.com/frerij/Scent-Finder"
                      className="fill-cyan-600 hover:fill-green-300 transition-colors duration-200 cursor-pointer"
                    />
                  </button>
                </div>
              </div>
              <div id="carcar">
                <h4>CarCar | React, Django</h4>
                <div className="ml-5">
                  <p>
                    Co-Creater of a program to handle inventory, sales, and
                    service needs of a car dealership.
                  </p>
                  <div className="ml-5">
                    <p>
                      - Single page React frontend app with bootstrap
                      components.
                      <br></br>- Developed Django microservices with pollers
                      using Docker.
                      <br></br>- CRUD APIs allowed frontend to interact with the
                      car dealership&apos;s inventory, staff, service schedule,
                      and manage sales.
                    </p>
                  </div>
                  <VscGithub
                    href="https://github.com/frerij/carcar"
                    size={"1.75em"}
                    className="fill-cyan-600 hover:fill-green-300 transition-colors duration-200 cursor-pointer mb-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <footer className="flex flex-row bg-emerald-500/60">
          <div className="text-left m-10">
            <p id="contact">Thanks for stopping by!</p>
            <p>
              If you&apos;d like to get in touch, please message me on LinkedIn
            </p>
          </div>
          <div className="flex flex-row mt-10 ml-60">
            <div>
              <FaLinkedin
                href="https://www.linkedin.com/in/jordan-frerichs/"
                size={"2.75em"}
                className="fill-cyan-600 hover:fill-stone-200 transition-colors duration-200 ml-10 cursor-pointer"
              />
            </div>
            <div>
              <VscGithub
                href="https://github.com/frerij"
                size={"2.75em"}
                className="fill-cyan-600 hover:fill-stone-200 transition-colors duration-200 ml-10 cursor-pointer"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function SkillItem({ name }) {
  let icon = null;
  let text = "";
  let classNames = "fill-cyan-600";
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
    <div className="flex flex-col items-center">
      {icon}
      <p>{text}</p>
    </div>
  );
}
