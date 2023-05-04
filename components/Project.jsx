import { VscGithub } from "react-icons/vsc";

export default function Project({
  title,
  stack,
  githubLink,
  summary,
  description,
  demoLink,
}) {
  return (
    <div id="wordJumble" className="text-stone-800 dark:text-stone-200 ">
      <div className="flex flex-row justify-between  ">
        <h4 className=" text-xl">
          {title} | {stack}
        </h4>
        <span>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <VscGithub
              size={"2em"}
              className="fill-cyan-600 dark:fill-cyan-500 dark:hover:fill-green-300 hover:fill-emerald-500/80 transition-colors duration-200 cursor-pointer"
            />
          </a>
        </span>
      </div>

      <div className="ml-5">
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
