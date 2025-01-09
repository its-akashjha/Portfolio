import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaHtml5, FaCss3, FaJs, FaNodeJs, FaBootstrap, FaGithub, FaEnvelope, FaFacebook } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiExpress, SiMysql, SiMongodb, SiMaterialdesign, SiWebrtc, SiSocketdotio, SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbBrandSocketIo } from "react-icons/tb";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
              <a href="https://www.instagram.com/its_akashjha/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaInstagram />
              </a>
              <a href="https://x.com/its_akashjha" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaTwitter />
              </a>
              <a href="https://www.facebook.com/AkashJha00/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaFacebook />
              </a>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/akashjha12/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn />
              </a>
            <a href="mailto:akashjha412@gmail.com" className="bannerIcon">
              <FaEnvelope />
            </a>
          </div>
          <div className="mt-5">
            <h2 className="text-base uppercase font-titleFont mb-4">
              Coding Profile
            </h2>
          </div>
          <div className="flex gap-4">
              <a href="https://leetcode.com/u/Akash-Jha/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <SiLeetcode />
              </a>
              <a href="https://www.geeksforgeeks.org/user/akash_jha/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <SiGeeksforgeeks />
              </a>
              <a href="https://www.codechef.com/users/royal_00/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <SiCodechef />
              </a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/its-akashjha" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaGithub />
              </a>
            {/* <a href="mailto:akashjha412@gmail.com" className="bannerIcon">
              <FaEnvelope />
            </a> */}
          </div>
          
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <FaCss3 />
            </span>
            <span className="bannerIcon">
              <FaJs />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
          </div>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
          </div>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <SiMaterialdesign />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <VscCode />
            </span>
            <span className="bannerIcon">
              <SiWebrtc />
            </span>
            <span className="bannerIcon">
              <SiSocketdotio />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media