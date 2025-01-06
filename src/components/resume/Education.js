import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Information Technology"
            subTitle="GGSIP University (2020 - 2024)"
            result="8.44/10"
            des="Graduated with a B.Tech in Information Technology from GGSIP University (2020-2024), gaining a strong foundation in software development, data structures, algorithms, and emerging technologies"
          />
          <ResumeCard
            title="Science"
            subTitle="Senior Secondary School, C.R. Park, Delhi, India. (2017 - 2019)"
            result="8.12/10"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Senior Secondary School, C.R. Park, Delhi, India. (2016 - 2017)"
            result="8.00/10"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Tata Consultancy Service (2024 - Present)"
            result="Delhi"
            des="Currently working at TCS, a global leader in IT services and consulting, known for its innovative solutions and cutting-edge technology."
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
    </motion.div>
  );
}

export default Education