import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, index }) => {
  return (
    <div className="xs:w-[350px] w-full">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5" onClick={() => window.open(source_code_link, "_blank")}>
          <p className="mt-2 text-white text-[14px]">Source: <span className="underline cursor-pointer overflow-hidden text-ellipsis inline-block max-w-[260px] align-bottom whitespace-nowrap">{source_code_link}</span></p>
        </div>
        <div className="mt-3">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const GithubButton = () => {
  const openGithub = () => {
    window.open("https://github.com/KaveeshTennakoon?tab=repositories", "_blank");
  };

  return (
    <div className="w-full flex justify-center mt-12">
      <button 
        onClick={openGithub} 
        className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white py-2 px-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 text-[16px] font-medium flex items-center gap-2 max-w-xs"
      >
        <img src={github} alt="github" className="w-6 h-6 object-contain invert" />
        More projects on GitHub
      </button>
    </div>
  );
};

const AnimatedWorks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center md:justify-start">
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <ProjectCard {...project} index={index} />
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeIn("up", "spring", projects.length * 0.5 + 0.2, 0.5)}>
        <GithubButton />
      </motion.div>
    </>
  );
};

const StaticWorks = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center md:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>

      <GithubButton />
    </>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 875);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <StaticWorks /> : <AnimatedWorks />;
};

export default SectionWrapper(Works, "projects");