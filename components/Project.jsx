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
  demoLink,
  demoText,
}) {
  return (
    <div className="text-stone-800 dark:text-stone-200 ">
      <div className="flex flex-col mb-1 sm:flex-row ">
        <div className="flex flex-row">
          <div className="text-xl shrink-0 ">{title} </div>
          <div className="text-xl mx-2"> |</div>
        </div>
        <div className="flex flex-row items-center shrink-0 justify-between grow mt-1 sm:mt-0">
          <div className="flex flex-row">
            {stack !== [] &&
              stack.map((tool) => <SkillItem name={tool} key="" />)}
          </div>

          <span>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <VscGithub
                size={"1.75em"}
                className="fill-cyan-600 dark:fill-cyan-500 dark:hover:fill-green-300 hover:fill-emerald-500/80 transition-colors duration-100 cursor-pointer"
              />
            </a>
          </span>
        </div>
      </div>

      <div className="mt-2">
        <p>{summary}</p>

        <div className="mt-1">
          {demoLink !== "" && (
            <button className="my-1 font-robotoMono hover:text-emerald-500/60 rounded border-2 border-stone-800 dark:border-stone-200 hover:border-emerald-500/60 transition-colors duration-100">
              <a href={demoLink} className="mx-2">
                {demoText}
              </a>
            </button>
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
