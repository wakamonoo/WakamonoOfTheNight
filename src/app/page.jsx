"use client";
import Image from "next/image";
import wall from "../assets/aotWall.png";
import me from "../assets/wakamono.png";
import NavMenu from "@/components/buttons";
import Signage from "@/components/signage";
import AboutImage from "../assets/about.png";
import Intro from "@/components/intro";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiKotlin,
  SiVercel,
  SiVite,
  SiRender,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Projects from "@/components/projects";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Work4 from "../assets/work-4.png";
import Work5 from "../assets/work-5.png";
import Work6 from "../assets/work-6.png";
import Work7 from "../assets/work-7.png";
import Work8 from "../assets/work-8.png";
import Work9 from "../assets/work-9.png";
import Work10 from "../assets/work-10.png";
import Hero from "@/sections/heroSection";
import About from "@/sections/aboutSection";
import Skills from "@/sections/skillSection";
import Portfolio from "@/sections/portfolioSection";
import Contact from "@/sections/contactSection";

export default function Home() {

  return (
    <main>
      <section id="hero" className="bg-brand h-screen relative overflow-hidden">
        <Hero />
      </section>

      <section
        id="about"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <About />
      </section>

      <section
        id="skills"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <Skills />
      </section>

      <section
        id="portfolio"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <Portfolio />
      </section>

      <section
        id="contact"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <Contact />
      </section>
    </main>
  );
}
