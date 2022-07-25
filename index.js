import Head from 'next/head'
import Image from 'next/image'
import { VscGithub } from 'react-icons/vsc'
import { FaReact, FaHtml5, FaCss3, FaDocker, FaPython, FaLinkedin } from 'react-icons/fa'
import { SiDjango, SiJavascript } from 'react-icons/si'


export default function Home() {
  return (
    <div className="bg-white ">
      <Head>
        <title>Jordan Frerichs - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-2 z-0 bg-white h-16 ">
        <div className="p-2 flex justify-end space-x-4 bg-white ">
          <a
            href="#about"
            className=""
          >
            <button className="h-8 px-5 text-white bg-indigo-400 hover:bg-indigo-500 rounded-full transition-all duration-200">About &rarr;</button>
          </a>
          <a
            href="#skills"
            className=""
          >
            <button className="h-8 px-5 text-white bg-indigo-400 hover:bg-indigo-500 rounded-full transition-colors duration-200">Skills &rarr;</button>
          </a>
          
          <a href="#projects" className="">
            <button className="h-8 px-5 text-white bg-indigo-400 hover:bg-indigo-500 rounded-full transition-colors duration-200">Projects &rarr;</button>
          </a>

          {/* <a href="#resume" className="">
            <button className=" h-8 px-5 text-white bg-indigo-300 hover:bg-indigo-500 rounded-full transition-colors duration-150 ">Resume &rarr;</button>
          </a> */}
          <a
            href="#contact"
            className=""
          >
            <button className="h-8 px-5 text-white bg-indigo-400 hover:bg-indigo-500 rounded-full transition-colors duration-200">Contact &rarr;</button>
          </a>
        </div>
      </header>

      <main className="" id="home">
        <h2 className="m-10 text-3xl font-bold text-center text-indigo-400">
          Hello! My name is Jordan, a Seattle based software engineer
        </h2>
        
        <div id="about" className="m-10 ">
          <h3 className="text-xl">About Me</h3>
          <p>After graduating from the University of Washington in 2020 with a B.S. in Earth and Space Sciences, I decided to add to my technical skillset by teaching myself programming.
            From this, I realized I had a great interest in the many applications for software engineering. This lead me to apply for an immersive bootcamp with Hack Reactor 
            which I completed in July 2022. I am now open for work and looking for a position which will let me master my current knowledge and continue learning all I can. 
          </p>
        </div>

        <div id="skills" className="m-10 ">
          <h3 className="text-xl">Skills and Tools</h3>
          <div id="skillIcons">
            <div>
              <i><SiJavascript className="fill-indigo-400" size={'3em'} /></i>
              <p>Javascript</p>
            </div>
            <div>
              <i><FaPython className="fill-indigo-400" size={'3em'}/></i>
              <p>Python</p>
            </div>
            <div>
              <i><FaHtml5 className="fill-indigo-400" size={'3em'}/></i>
              <p>HTML</p>
            </div>
            <div>
              <i><FaCss3 className="fill-indigo-400" size={'3em'}/></i>
              <p>CSS</p>
            </div>
          </div>  
          <p>React, Django, RestfulAPIs, Docker</p>
          <div className="flex justify-center space-x-4" id="icons2">
            <FaReact className="fill-indigo-400" size={'3em'}/> <SiDjango className="fill-indigo-400" size={'3em'}/> <FaDocker className="fill-indigo-400" size={'3em'}/>
          </div>
        </div>

        <div id="projects" className="m-10 ">
          <h3 className="text-xl">Projects</h3>
          <div id="personalWebsite">
            <h4>Personal Website | NextJS, TailwindCSS</h4>
            <p>This site: designed, built, and hooked up to my personal domain as a way to show my current and prior projects and to practice with new-to-me technologies.</p>
            <a href=""> <VscGithub size={'1.75em'} className="fill-slate hover:fill-indigo-400 transition-colors duration-200"/>  </a>
          </div>
      
          <div id="scentFinder">
            <h4>ScentFinder | React, Django</h4>
            <p> Team developed, Heroku deployed, ecommerce website offering a personalized shopping experience.</p>
            <p> - Implemented frontend and backend for API based product sorting and filtering. 
              <br></br>
                - Tested frontend, hook based React components, using React Testing Library and Jest.
                <br></br>
                - CRUD wishlist API functionality; frontend implemented using SWR caching strategy.
                <br></br>
                - Developed and deployed on Heroku with a shared Docker compose file for all services.
                <br></br>
                - Used git with GitLab for change management across the whole team.</p>
            <a href="https://github.com/frerij/Scent-Finder"> <VscGithub size={'1.75em'} className="fill-slate hover:fill-indigo-400 transition-colors duration-200"/> </a>
          </div>
          <div id="carcar">
            <h4>CarCar | React, Django</h4>
            <p>Co-Creater of a program to handle inventory, sales, and service needs of a car dealership.</p>
            <p>
              - Single page React frontend app with bootstrap components.
              <br></br>
              - Developed Django microservices with pollers using Docker.
              <br></br>
              - CRUD APIs allowed frontend to interact with the car dealership’s inventory, staff, service
                schedule, and manage sales.
            </p>
            <a href=""> <VscGithub size={'1.75em'} className="fill-slate hover:fill-indigo-400 transition-colors duration-200"/>  </a>
          </div>

        </div>

        <div id="contact" className="m-10 ">
          <h3 className="text-xl">Contact</h3>
          <p> <a href="https://www.linkedin.com/in/jordan-frerichs/">LinkedIn <FaLinkedin size={'1.75em'} className="fill-slate hover:fill-indigo-400 transition-colors duration-200"/></a></p>
          <p>
            Email: frerichs.jordan@gmail.com 
          </p>
          <p>Phone: 303-877-0753</p>
        </div>

      </main>
      <footer className="text-center ">
        Thanks for stopping by
      </footer>
    </div>
  )
}
