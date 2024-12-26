import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="border-b border-neutral-200 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap md:gap-5 gap-2 align-middle  items-center justify-center"
        >
          <p className="my-4">{CONTACT.phoneNo1}</p>
          <p className="my-4">{CONTACT.phoneNo2}</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex gap-5  align-middle  items-center justify-center"
        >
          <div className="flex gap-3">
            <SiGmail size={24} />
            <a href={`mailto:${CONTACT.email}`} className="border-b">
              {CONTACT.email}
            </a>
          </div>

          <div className="flex gap-3">
            <FaLinkedin size={24} />
            <a
              href={`https://www.linkedin.com/in/${CONTACT.linkdinemail}`}
              className="border-b"
              target="_blank"
            >
              {CONTACT.linkdinemail}
            </a>
          </div>

          <div className="flex gap-3">
            <FaGithub size={24} />
            <a
              href={`https://github.com/${CONTACT.githublink}`}
              className="border-b"
              target="_blank"
            >
              {CONTACT.githublink}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
