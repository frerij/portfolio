import { VscGithub } from "react-icons/vsc";
import { FaReact, FaHtml5, FaCss3, FaDocker, FaPython } from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Project({
  title,
  stack,
  githubLink,
  summary,
  description,
  demoLink,
}) {
  return (
    <div className="text-stone-800 dark:text-stone-200 ">
      <div className="flex flex-row justify-between mb-1">
        <div className="flex flex-row">
          <div className="text-xl">{title} | </div>
          <div className="flex flex-row items-center">
            {stack !== [] &&
              stack.map((tool) => <SkillItem name={tool} key="" />)}
          </div>
        </div>
        <span>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <VscGithub
              size={"2em"}
              className="fill-cyan-600 dark:fill-cyan-500 dark:hover:fill-green-300 hover:fill-emerald-500/80 transition-colors duration-200 cursor-pointer"
            />
          </a>
        </span>
      </div>

      <div className="">
        <p>{summary}</p>
        {description !== [] &&
          description.map((bullet) => <p key={bullet[1]}>{bullet}</p>)}
        <div className="ml-5">
          {demoLink !== "" && (
            <p>
              <a
                href={demoLink}
                className="hover:text-emerald-500/60 font-bold"
              >
                Try it out here!
              </a>
              <br />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillItem({ name }) {
  let icon = null;
  let text = "";
  let classNames = "fill-cyan-600 dark:fill-cyan-500";
  let size = "1.2em";

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
    case "vercel":
      icon = <SiVercel className={classNames} size={size} />;
      text = "Vercel";
      break;
    // case "astro":
    //   icon = <SiAstro className={classNames} size={size} />;
    //   text = "Astro";
    //   break;
    case "tailwind":
      icon = <SiTailwindcss className={classNames} size={size} />;
      text = "TailwindCSS";
      break;
    case "nextjs":
      icon = (
        <TbBrandNextjs
          className="stroke-cyan-600 dark:stroke-cyan-500"
          size={size}
        />
      );
      text = "Next.js";
      break;
  }
  return (
    <div className=" text-stone-800 dark:text-stone-200">
      <button
        className="flex flex-row items-center border-2 border-stone-800 dark:border-stone-200 rounded py-0.5 px-1 text-sm mx-1"
        disabled
      >
        {icon} &nbsp; {text}
      </button>
    </div>
  );
}
