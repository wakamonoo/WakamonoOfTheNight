"use client";
import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RiRocket2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setExpanded(false); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isScrolled) {
    return (
      <div className="flex left-1/2 transform -translate-x-1/2 p-4 fixed z-100">
        <div className="flex text-4xl gap-2 bg-panel p-4 rounded-2xl">
          <NavLinks />
        </div>
      </div>
    );
  } 
  return (
    <div className="flex left-1/2 transform -translate-x-1/2 p-4 fixed z-100">
      {expanded ? (
        <div className="flex text-4xl gap-2 bg-panel p-4 rounded-2xl">
          <NavLinks />
        </div>
      ) : (
        <button onClick={() => setExpanded(true)} className="bg-panel p-4 rounded-full text-2xl text-normal shadow-xl hover:scale-110 transition"> 
          <GiHamburgerMenu />
        </button>
      )}
    </div>
  );
}
function NavLinks() {
  return (
    <>
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
      <a
        href="#skills"
        className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <RiRocket2Fill />
      </a>
      <a
        href="#projects"
        className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <CgWebsite />
      </a>
      <a
        href="#contact"
        className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <FaEnvelope />
      </a>
    </>
  );
}
