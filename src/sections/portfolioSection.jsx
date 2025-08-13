"use client";
import MinorProjects from "@/components/minorProjects";
import Image from "next/image";
import Work1 from "../assets/work-1.png";
import Work2 from "../assets/work-2.png";
import Work3 from "../assets/work-3.png";
import Work4 from "../assets/work-4.png";
import Work5 from "../assets/work-5.png";
import Work6 from "../assets/work-6.png";
import Work7 from "../assets/work-7.png";
import Work8 from "../assets/work-8.png";
import Work9 from "../assets/work-9.png";
import Work10 from "../assets/work-10.png";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiKotlin,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import { useState } from "react";

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  const [showMinorProjects, setShowMinorProjects] = useState(false);

  return (
    <>
      <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header md:mb-8 lg:mb-12 xl:mb-16">
        RECON MISSIONS ────
      </h1>

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4">
          TACTICAL CAMPAIGNS
        </h2>
        <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">
          Full-scale operations executed by the elite Survey Corps, these are
          high-impact missions demanding precise strategy, relentless execution,
          and adaptability in hostile and ever-shifting environments. Each
          deployment is a testament to survival, innovation, and pushing past
          the walls of convention.
        </p>
        <div className="grid grid-cols-1 xl-plus:grid-cols-2 gap-4">
          <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
            <div className="flex justify-between">
              <Image
                src={Work1}
                alt="project"
                className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
              />
              <div className="w-full ml-2 sm:ml-4">
                <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                  FIRSTRESPONSE
                </h4>
                <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                  First aid and emergency response application for the 3rd
                  District of Albay, Bicol Region.
                </p>
                <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                  <SiKotlin />
                  <SiFirebase />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <a href="">
                  <button
                    className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                  >
                    Commence Operation
                  </button>
                </a>
                <a href="https://github.com/wakamonoo/FirstResponse">
                  <button
                    className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                  >
                    Open War Archives
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
            <div className="flex justify-between">
              <Image
                src={Work2}
                alt="project"
                className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
              />
              <div className="w-full ml-2 sm:ml-4">
                <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                  REVVED
                </h4>
                <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                  Web-based E-commerce platform for motorcycle parts and
                  accessories.
                </p>
                <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                  <SiPhp />
                  <SiCss3 />
                  <SiMysql />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <a href="">
                  <button
                    className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                  >
                    Commence Operation
                  </button>
                </a>
                <a href="https://github.com/wakamonoo/RevvedEcommerce">
                  <button
                    className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                  >
                    Open War Archives
                  </button>
                </a>
              </div>
            </div>
          </div>

          {showProjects && (
            <div className="contents">
              <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
                <div className="flex justify-between">
                  <Image
                    src={Work3}
                    alt="project"
                    className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
                  />
                  <div className="w-full ml-2 sm:ml-4">
                    <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                      ANCESTORY
                    </h4>
                    <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                      Interactive website for local-folk stories.
                    </p>
                    <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                      <SiHtml5 />
                      <SiCss3 />
                      <SiJavascript />
                      <SiFirebase />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <a href="https://ancestory-wakamonoo.vercel.app">
                      <button
                        className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                      >
                        Advance Beyond Walls
                      </button>
                    </a>
                    <a href="https://github.com/wakamonoo/ancestory">
                      <button
                        className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                      >
                        Open War Archives
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex">
          <button
            onClick={() => setShowProjects((prev) => !prev)}
            className="p-2 sm:p-4 sm:text-xl md:text-2xl mt-8 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)] cursor-pointer"
          >
            {showProjects ? "NIGERO逃げろ!" : "SUSUME進め!"}
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-16">
          ODM FIELD TEST
        </h2>
        <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">
          Off-duty developments and training exercises, crafted during moments
          of peace between battles. These small-scale operations serve as field
          drills for mastering new technologies and refining old skills. Not
          every mission makes history, but each one sharpens the blade.
        </p>
        <div className="grid grid-cols-1 xl-plus:grid-cols-2 gap-4">
          <div className="contents">
            <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
              <div className="flex justify-between">
                <Image
                  src={Work4}
                  alt="project"
                  className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
                />
                <div className="w-full ml-2 sm:ml-4">
                  <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                    SORA
                  </h4>
                  <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                    Web-application for tracking weather, time, temperature,
                    sunset and sunrise time in various locations.
                  </p>
                  <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                    <SiHtml5 />
                    <SiJavascript />
                    <SiTailwindcss />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <a href="https://sora-wakamonoo.vercel.app">
                    <button
                      className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                    >
                      Advance Beyond Walls
                    </button>
                  </a>
                  <a href="https://github.com/wakamonoo/Sora">
                    <button
                      className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                    >
                      Open War Archives
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
              <div className="flex justify-between">
                <Image
                  src={Work5}
                  alt="project"
                  className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
                />
                <div className="w-full ml-2 sm:ml-4">
                  <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                    DEBTFLIX
                  </h4>
                  <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                    A useful but naughty way of Debt-Tracking.
                  </p>
                  <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                    <SiHtml5 />
                    <SiJavascript />
                    <SiTailwindcss />
                    <SiFirebase />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <a href="https://debtflix-wakamonoo.vercel.app">
                    <button
                      className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                    >
                      Advance Beyond Walls
                    </button>
                  </a>
                  <a href="https://github.com/wakamonoo/Debtflix">
                    <button
                      className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                    >
                      Open War Archives
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {showMinorProjects && (
              <div className="contents">
                <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
                  <div className="flex justify-between">
                    <Image
                      src={Work6}
                      alt="project"
                      className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
                    />
                    <div className="w-full ml-2 sm:ml-4">
                      <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                        KANDILI
                      </h4>
                      <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                        Your cute and aesthetic digital diary, be private or
                        connect with friends.
                      </p>
                      <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                        <SiHtml5 />
                        <SiJavascript />
                        <SiTailwindcss />
                        <SiFirebase />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <a href="https://kandili-wakamonoo.vercel.app">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Advance Beyond Walls
                        </button>
                      </a>
                      <a href="https://github.com/wakamonoo/Kandili">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Open War Archives
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
                  <div className="flex justify-between">
                    <Image
                      src={Work7}
                      alt="project"
                      className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
                    />
                    <div className="w-full ml-2 sm:ml-4">
                      <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                        TODOCHAN
                      </h4>
                      <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                        A minimalist to-do list web app focused on simplicity
                        and ease of use
                      </p>
                      <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                        <SiHtml5 />
                        <SiJavascript />
                        <SiTailwindcss />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <a href="https://todochan-wakamonoo.vercel.app">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Advance Beyond Walls
                        </button>
                      </a>
                      <a href="https://github.com/wakamonoo/Todochan">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Open War Archives
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
                  <div className="flex justify-between">
                    <Image
                      src={Work8}
                      alt="project"
                      className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
                    />
                    <div className="w-full ml-2 sm:ml-4">
                      <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                        POINTCITY
                      </h4>
                      <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                        Online and offline basketball stats-tracker.
                      </p>
                      <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                        <SiHtml5 />
                        <SiJavascript />
                        <SiTailwindcss />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <a href="https://pointcity-wakamonoo.vercel.app">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Advance Beyond Walls
                        </button>
                      </a>
                      <a href="https://github.com/wakamonoo/PointCity">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Open War Archives
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
                  <div className="flex justify-between">
                    <Image
                      src={Work9}
                      alt="project"
                      className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
                    />
                    <div className="w-full ml-2 sm:ml-4">
                      <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                        RINA
                      </h4>
                      <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                        A browser extension for youtube assistance. Primary use
                        of voice commands for tab control
                      </p>
                      <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                        <SiHtml5 />
                        <SiJavascript />
                        <SiTailwindcss />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <a href="https://rina-wakamonoo.vercel.app">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Advance Beyond Walls
                        </button>
                      </a>
                      <a href="https://github.com/wakamonoo/Rina">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Open War Archives
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
                  <div className="flex justify-between">
                    <Image
                      src={Work10}
                      alt="project"
                      className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
                    />
                    <div className="w-full ml-2 sm:ml-4">
                      <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                        616-INITIATIVE
                      </h4>
                      <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                        A simple website for watch tracking the chronological
                        order of the Marvel Cinematic Universe.
                      </p>
                      <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                        <SiHtml5 />
                        <SiJavascript />
                        <SiTailwindcss />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <a href="https://dcxvi-initiative-wakamonoo.vercel.app">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Advance Beyond Walls
                        </button>
                      </a>
                      <a href="https://github.com/wakamonoo/DCXVI-Initiative">
                        <button
                          className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-panel)] hover:scale-110 
                       active:scale-110 active:bg-[var(--color-panel)]"
                        >
                          Open War Archives
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => setShowMinorProjects((prevs) => !prevs)}
            className="p-2 sm:p-4 sm:text-xl md:text-2xl mt-8 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)] cursor-pointer"
          >
            {showMinorProjects ? "NIGERO逃げろ!" : "SUSUME進め!"}
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-16">
          BATTLE RECORD
        </h2>
        <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">
          Beyond the walls of hesitation lies the battlefield of creation. Every
          commit is a battle, every push a charge into the unknown. Here stands
          the record of every campaign fought in code.
        </p>
        <img
          src="https://ghchart.rshah.org/6f553f/wakamonoo"
          alt="git contributions"
          className="w-full h-auto"
        />
      </div>
    </>
  );
}