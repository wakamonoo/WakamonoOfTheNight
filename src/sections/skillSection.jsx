"use client";
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
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header md:mb-8 lg:mb-12 xl:mb-16">
        ODM ARSENAL ────
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-4">
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiHtml5 />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiCss3 />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiJavascript />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiTailwindcss />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiReact />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiNextdotjs />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiFirebase />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiKotlin />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <FaGithub />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiVercel />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiVite />
          </div>
          <div
            tabIndex="0"
            className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
          >
            <SiRender />
          </div>
        </div>
      </div>
    </>
  );
}
