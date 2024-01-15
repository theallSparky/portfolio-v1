import ProjectItem from "./ProjectItem";
import sparkysmoviesImg from "../assets/sparkysmovies.png";
import sparkysboxgameImg from "../assets/sparkysboxgame.png";
import StopwatchImg from "../assets/Stopwatch.png";
import SparkyscalculatorImg from "../assets/Sparkyscalculator.png";
import PongImg from "../assets/Pong.png";
import yumyumgoodImg from "../assets/yum-yum-good.png";
import sparkysCounter from "../assets/sparkysCounter.png";
import sparkysTicTicToe from "../assets/sparkysTicTicToe.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-5xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <h2
        id="projectDescription"
        className="text-xl font-bold text-center text-[#001b5e] py-3"
      >
        {" "}
        Click the image to visit the deployed application!
      </h2>
      <div className="grid sm:grid-cols-2 gap-12">
        <a href="https://yumyumgood.vercel.app/">
          <ProjectItem img={yumyumgoodImg} title="YumYumGood App" />
        </a>
        <a href="https://sparkysmovies.vercel.app">
          <ProjectItem img={sparkysmoviesImg} title="Movie App" />
        </a>
        <a href="https://sparkysstopwatch.vercel.app/">
          <ProjectItem img={StopwatchImg} title="Stopwatch App" />
        </a>
        <a href="https://sparkyscalculator.vercel.app/">
          <ProjectItem img={SparkyscalculatorImg} title="Calculator App" />
        </a>
        <a href="https://github.com/theallSparky/python_pong">
          <ProjectItem img={PongImg} title="Pong App" />
        </a>
        <a href="https://theallsparky.github.io/ninjahex/">
          <ProjectItem img={sparkysboxgameImg} title="sparkysboxgame App" />
        </a>
        <a href="https://sparkys-counter.vercel.app/">
          <ProjectItem img={sparkysCounter} title={"Counter App"} />
        </a>
        <a href="https://sparkys-tic-tac-toe.vercel.app/">
          <ProjectItem img={sparkysTicTicToe} title={"Tic-Tac-Toe App"} />
        </a>
      </div>
    </div>
  );
};

export default Projects;
