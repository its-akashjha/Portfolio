import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Akash Jha</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="cyan" // #ff014f
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a dedicated Full Stack Developer with over a year of experience in building responsive, high-performance web applications using React.js, JavaScript, HTML, and CSS. With expertise in Git and a strong focus on user experience. I am eager to contribute to innovative projects that prioritize quality and engagement.
        </p>
      </div>
     <Media />
    </div>
  );
}

export default LeftBanner