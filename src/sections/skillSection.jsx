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
  SiPhp,
  SiMysql,
  SiSocketdotio,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiRender,
  SiCloudinary,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header md:mb-8 lg:mb-12 xl:mb-16">
        ODM ARSENAL ────
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 justify-center mx-auto">
        <div>
          <h2 className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4">
            Front-End Development
          </h2>
          <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">
            Building user interfaces and interactive designs for web apps using
            modern frameworks and styling tools.
          </p>
          <div className="flex flex-wrap gap-2">
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiHtml5 />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiCss3 />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiJavascript />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiTailwindcss />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiReact />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiNextdotjs />
            </div>
          </div>
        </div>

        <div>
          <h2 className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4">
            Back-End Development
          </h2>
          <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">
            Handling server-side logic, APIs, and data processing to make
            applications functional and efficient.
          </p>
          <div className="flex flex-wrap gap-2">
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiExpress />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiNodedotjs />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiPhp />
            </div>
          </div>
        </div>

        <div>
          <h2 className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4">
            Database & Authentication
          </h2>
          <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">
            Managing data storage, retrieval, and user authentication to keep
            information secure and accessible.
          </p>
          <div className="flex flex-wrap gap-2">
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiFirebase />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiMysql />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiMongodb />
            </div>
          </div>
        </div>

        <div>
          <h2 className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4">
            Tools & Platforms
          </h2>
          <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">
            Using deployment tools, version control, and cloud platforms to
            build, host, and manage applications.
          </p>
          <div className="flex flex-wrap gap-2">
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <FaGithub />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiVercel />
            </div>

            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiSocketdotio />
            </div>

            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiRender />
            </div>
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiCloudinary />
            </div>
          </div>
        </div>
        <div>
          <h2 className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4">
            Mobile App Development
          </h2>
          <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">
            Creating cross-platform and native mobile applications with
            optimized performance and modern features.
          </p>
          <div className="flex flex-wrap gap-2">
            <div
              tabIndex="0"
              className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)] cursor-pointer w-fit h-fit"
            >
              <SiKotlin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
