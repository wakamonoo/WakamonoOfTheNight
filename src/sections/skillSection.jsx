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
  SiGithub,
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

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiHtml5 />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">HTML</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiCss3 />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">CSS</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiJavascript />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">JAVASCRIPT</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiTailwindcss />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">TAILWIND</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiReact />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">REACT.JS</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiNextdotjs />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">NEXT.JS</p>
              </div>
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
            
            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiExpress />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">EXPRESS.JS</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiNodedotjs />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">NODE.JS</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiPhp />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">PHP</p>
              </div>
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

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiFirebase />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">FIREBASE</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiMysql />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">MYSQL</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiMongodb />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">MONGODB</p>
              </div>
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
            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiGithub />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">GITHUB</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiVercel />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">VERCEL</p>
              </div>
            </div>

            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiSocketdotio />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">SOCKET.IO</p>
              </div>
            </div>

           <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiRender />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">RENDER</p>
              </div>
            </div>
            
            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiCloudinary />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">CLOUDINARY</p>
              </div>
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
            <div className="relative group w-fit">
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiKotlin />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">KOTLIN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
