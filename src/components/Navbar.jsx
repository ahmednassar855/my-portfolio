import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { CONTACT } from "../constants";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-slate-50 mb-10 flex items-center justify-between py-8 px-8">
      <div>
        <p className="text-slate-700 font-bold tracking-widest">AN</p>
      </div>
      <div className=" flex items-center justify-center gap-4 text-center text-slate-600">
        <a
          href={`https://www.linkedin.com/in/${CONTACT.linkdinemail}`}
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>

        <a href={`mailto${CONTACT.email}`} target="_blank">
          <SiGmail size={24} />
        </a>

        <a
          href={`https://github.com/${CONTACT.githublink}`}
          className="border-b"
          target="_blank"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
