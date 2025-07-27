import { AiFillHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RiRocket2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa";

export default function NavMenu() {
  return (
    <div className="flex left-1/2 transform -translate-x-1/2 p-4 fixed z-100">
      <div className="flex text-4xl gap-2 bg-panel p-4 rounded-2xl">
        <a
          href="#hero"
          className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
        >
          <AiFillHome />
        </a>
        <a
          href="#about"
          className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
        >
          <VscAccount />
        </a>
        <a href="#skills"
          className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110">
          <RiRocket2Fill />
        </a>
        <a href="#projects"
          className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110">
          <CgWebsite />
        </a>
        <a href="#contact"
          className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
