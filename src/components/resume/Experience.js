import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Software Engineer"
            subTitle="Tata Consultancy Service (2024 - Present)"
            result="Delhi"
            des="Currently working at TCS, a global leader in IT services and consulting, known for its innovative solutions and cutting-edge technology in driving digital transformation across industries."
          />
          <ResumeCard
            title="Software Developer Intern"
            subTitle="Scrobits Technologies - (Mar 2023 - Jul 2023)"
            result="Pune"
            des="Contributed to enhancing web application performance and user experience during my internship at Scorbit by implementing advanced caching, authentication, and testing techniques."
          />
          <ResumeCard
            title="Research Intern"
            subTitle="DRDO - (Dec 2022 - Mar 2023)"
            result="Delhi"
            des="Completed a 4-month internship at DRDO, Ministry of Defence, where I collaborated with the Web Ops team to develop a Scientific Document Analyzer using React.js and Django."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-4xl font-bold">Extracurricular Activity</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern"
            subTitle="GeeksforGeeks"
            result="Delhi"
            des="Authored and enhanced 30+ technical articles on data structures, algorithms, and programming languages during my internship at GeeksforGeeks."
          />
          <ResumeCard
            title="Mentor and Instructor"
            subTitle="Mentors Without Borders"
            result="South Africa"
            des="Mentor 100+ African students through instruction in Data Structures, Algorithms, and Software Development."
          />
          <ResumeCard
            title="Volunteer"
            subTitle="WE Foundation"
            result="Delhi"
            des="The WE Foundation is a WEll-known ngo in Delhi that has been working since February 2011 to enhance education, livelihood, and health opportunities for underprivileged people."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
