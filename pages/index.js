import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { TbHome } from "react-icons/tb";
import Project from "../components/Project";
import profilePic from "../public/profile2.png";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className="bg-stone-200 dark:bg-sky-900 font-roboto min-w-fit ">
      <Head>
        <title>Jordan Frerichs - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6RKW9X4EX9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6RKW9X4EX9');
        `}
      </Script> */}
      <Analytics />
      <div className="flex justify-center sticky top-0 z-50 bg-stone-300/90 dark:bg-sky-800/60 ">
        <header className=" flex-grow h-16 mt-2 max-w-3xl ">
          <div className="p-2 flex justify-end space-x-4">
            <a href="" className="">
              <button className="h-8 text-xl px-5 text-cyan-600 hover:text-stone-200 hover:bg-cyan-600 dark:text-stone-200 dark:hover:bg-sky-900 rounded transition-all duration-100">
                <TbHome />
              </button>
            </a>
            <a href="#about" className="">
              <button className="h-8 px-5 text-cyan-600 hover:text-stone-200 hover:bg-cyan-600 dark:text-stone-200 dark:hover:bg-sky-900 rounded transition-all duration-100">
                About
              </button>
            </a>

            <a href="#projects" className="">
              <button className="h-8 px-5 text-cyan-600 hover:text-stone-200 hover:bg-cyan-600 dark:text-stone-200 dark:hover:bg-sky-900 rounded transition-all duration-100">
                Projects
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/jordan-frerichs/"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <button className="h-8 px-5 text-cyan-600 hover:text-stone-200 hover:bg-cyan-600 dark:text-stone-200 dark:hover:bg-sky-900 rounded transition-all duration-100">
                Contact
              </button>
            </a>
          </div>
        </header>
      </div>
      <div className="flex justify-center">
        <main
          className="max-w-3xl space-y-16 bg-stone-200 dark:bg-sky-900 overscroll-x-none overscroll-y-contain"
          id="home"
        >
          <div className="flex flex-row mx-10 mt-10">
            <div className="flex-shrink">
              <Image
                src={profilePic}
                alt="picture of the author"
                height={200}
                width={200}
              />
            </div>
            <div className="self-end mb-8 text-left ml-6 text-cyan-600 dark:text-stone-200 shrink-0">
              <h3 className="text-lg sm:text-2xl font-bold " id="about">
                Jordan Frerichs
              </h3>
              <p>Software Engineer</p>
              <p>Seattle, WA</p>
            </div>
          </div>

          <div className="mx-10 ">
            <h3 className="text-2xl text-cyan-600 mb-5 dark:text-green-300">
              About
            </h3>
            <div className="items-center space-x-6 sm:flex md:flex md:flex-row text-lg sm:text-base">
              <div className="text-stone-800 dark:text-stone-200">
                <p>
                  Hello! I&apos;m Jordan, a Seattle based software engineer. I
                  am especially interested in front-end development and enjoy
                  balancing aesthetics with functionality to craft an engaging
                  and memorable user experience. Web development is always an
                  exciting adventure for me, and I&apos;m eager to take on new
                  challenges and push my skills to the next level. Lately,
                  I&apos;ve been working with Astro, focusing on making reusable
                  components, and pushing to improve my UI design skills.
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
              id="projects"
              className="text-2xl text-cyan-600 dark:text-green-300"
            >
              Projects
            </h3>

            <div className="space-y-10 mt-5 text-stone-800 dark:text-stone-200">
              <Project
                title="Word Jumble"
                stack={["nextjs", "tailwind", "vercel"]}
                githubLink="https://github.com/frerij/word-jumble"
                summary="Minimalist UI for The Seattle Times Daily Jumble word game."
                demoLink="https://jumble.jordanf.dev"
                demoText={"Play the Daily Jumble here!"}
              />
              <Project
                title="Personal Website"
                stack={["nextjs", "tailwind", "vercel"]}
                githubLink="https://github.com/frerij/portfolio"
                summary="My first exploration into Next.js and Tailwind and a place to show my current and past work."
                description={[]}
                demoLink=""
                demoText=""
              />
              <Project
                title="ScentFinder"
                stack={["react", "django", "docker"]}
                githubLink="https://github.com/frerij/Scent-Finder"
                summary="Team developed, ecommerce website offering
                a personalized shopping experience deployed with Heroku. Featuring API based product page sorting and 
                filtering and CRUD wishlist API functionality. Tested frontend, hook based React components with React 
                Testing Library and Jest."
                demoLink=""
                demoText=""
              />

              <Project
                title="CarCar"
                stack={["react", "django", "docker"]}
                githubLink="https://github.com/frerij/carcar"
                summary="Partner developed, fullstack application for complete management of a car dealership. Single page 
                React frontend app with bootstrap components. Django microservices and CRUD APIs allowed frontend to interact with
                dealership's inventory, staff, service schedule, and manage sales."
                demoLink=""
                demoText=""
              />
            </div>
          </div>
        </main>
      </div>
      <div>
        <footer className="flex sm:flex sm:flex-row justify-center bg-stone-300/90 dark:bg-sky-800/60 mt-10">
          <div className="flex flex-row my-10 ">
            <span className="flex">
              <a
                href="https://www.linkedin.com/in/jordan-frerichs/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={"2.75em"}
                  className="fill-cyan-600 dark:fill-stone-200 hover:fill-sky-900 dark:hover:fill-green-300 transition-colors duration-100  cursor-pointer"
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
                  className="fill-cyan-600 dark:fill-stone-200 hover:fill-sky-900 dark:hover:fill-green-300 transition-colors duration-100  cursor-pointer"
                />
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
