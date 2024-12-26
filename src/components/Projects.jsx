import React from "react";
import { PROJECTS } from "../constants";

import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Projects = () => {
  return (
    <div className="border-b border-neutral-200 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="mb-8 grid lg:grid-cols-2  w-[90%] m-auto "
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full "
            >
              <img
                loading="lazy"
                src={`${project.img}`}
                alt={project.project}
                className="rounded object-fit w-[100%] h-[100%]"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=" p-5 border bg-violet-100 py-10"
            >
              <div className=" flex flex-col gap-4">
                <h6 className="mb-2 font-semibold">{project.project}</h6>
                <h6 className="mb-2 font-semibold">
                  Live Link :{" "}
                  <a
                    href={`${project.liveLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 text-violet-800 font-semibold "
                  >
                    {project.liveLink}
                  </a>
                </h6>

                <h6 className="mb-2 font-semibold">
                  You tube Link :
                  <a
                    href={`${project.youTubeLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 text-violet-800 font-semibold "
                  >
                    {project.youTubeLink}
                  </a>
                </h6>
              </div>

              <div className="">
                <span className="mb-4 text-violet-800 font-semibold ">
                  Description :
                </span>
                <p>{project.description}</p>
              </div>
              <div className="">
                <span className="mb-4 text-violet-800 font-semibold ">
                  Tools :
                </span>
                <p>{project.usedTools}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
