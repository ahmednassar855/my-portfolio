import { HERO_CONTENT } from "../constants";
import photoProfile from "../assets/ahmed-profile-photo.jpg";

import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-200 pb-4 lg:mb-16">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-neutral-800 pb-16 font-thin tracking-tight lg:mt-16 lg:text-8xl text-5xl"
            >
              Ahmed Aly
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-slate-800 text-3xl bg-gradient-to-r from-pink-800 via-slate-400 to-purple-200 bg-clip-text  tracking-tight"
            >
              Surface production chemicals in Oil and Gas
            </motion.span>
            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-slate-800 text-3xl bg-gradient-to-r from-pink-800 via-slate-400 to-purple-200 bg-clip-text  tracking-tight"
            >
              Certified NEBOSH – IGC
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-slate-800 my-2 max-w-xl py-6 font-light  tracking-widest text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={photoProfile}
              alt="ahmed-nassar-profile"
              className="object-contain h-dvh"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
