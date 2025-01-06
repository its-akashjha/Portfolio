import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Locate.Dev"
          des=" Locate.Dev interfaces with the GitHub API to fetch the top users for the specified location. The app displays profile details of each ranked user and a direct link to their GitHub profile."
          src={projectOne}
          github = "https://github.com/its-akashjha/Locate.Dev"
          live = "https://locate-dev.vercel.app/"

        />
        <ProjectsCard
          title="MeetUp"
          des="Video call to your friend without registering. Simply send your friend your auto-generated unique ID to make the call. Everytime you open a new tab, the server gives you a totally different unique ID."
          src={projectTwo}
          github = "https://github.com/its-akashjha/MeetUp"
          live = "https://meetup-ejvt.onrender.com/"
        />
        <ProjectsCard
          title="FarmToolRental-Hub"
          des="Farm Rent is a web application for farming tools rental and for land on lease service. It is built using ReactJS, Tailwind CSS and Google Firebase for database."
          src={projectThree}
          github = "https://github.com/its-akashjha/FarmToolRental-Hub"
          live = "https://farmrent.netlify.app/"
        />
        <ProjectsCard
          title="DRDO Website"
          des="Developed a responsive and interactive clone of the DRDO website, focusing on improving user navigation and ensuring seamless access to defense research and development information."
          src={projectFour}
          github = "https://github.com/its-akashjha/DRDO-website"
          live = "https://akashjhadrdo.netlify.app/"
        />
        <ProjectsCard
          title="MoneyMiners"
          des="This platform aims to provide accessible and comprehensive financial education, helping individuals enhance their knowledge and make informed decisions about personal finance, investments, and economic trends."
          src={projectFive}
          github = "https://github.com/its-akashjha/MoneyMiners"
          live = "https://money-miners.vercel.app/"
        />
        <ProjectsCard
          title="GPT-3-Web"
          des="A MERN Web App that Combines AI Chatbot, Text Summarization, Code Conversion, and Image Generation Features."
          src={projectSix}
          github = "https://github.com/its-akashjha/GPT-3-Web"
          live = "https://webgpt3.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Projects