"use client";
import Image from "next/image";
import AboutImage from "../assets/about.png";

export default function About() {
  return (
    <>
      <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header md:mb-8 lg:mb-12 xl:mb-16">
        THE DIGITAL SCOUT ────
      </h1>
      <div className="w-full clearfix">
        <div className="float-left w-1/2 max-w-[30rem] mr-2 mb-2 md:mr-4 md:mb-4 lg:mr-8 lg:mb-8">
          <Image
            src={AboutImage}
            className="w-full h-auto rounded-xl"
            alt="aboutImage"
          />
        </div>
        <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5">
          I am Joven Serdan Bataller, 22 years old from The Philippines and a BS
          in Information Technology graduate. I am a website developer that
          offers user-friendly, visually appealing and reliable website
          applications.
        </p>

        <div className="mt-4 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header">
            EDUCATION
          </h2>
          <ul className="mt-4">
            <li className="flex flex-col text-base">
              <div className="flex items-start w-full">
                <span className="flex justify-center items-center sm:text-xl md:text-2xl p-2 border border-accent rounded-2xl mr-2  md:mr-4 lg:mr-8 w-1/2">
                  2021-2025
                </span>
                <div className="text-base sm:text-xl md:text-2xl font-normal text-header leading-4 md:leading-5 w-1/2">
                  INFORMATION TECHNOLOGY
                  <br />
                  <span className="text-sm sm:text-md md:text-base text-normal leading-2">
                    Bicol University Polangui
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-4 p-2 bg-brand rounded text-header">
            EXPERIENCE
          </h2>
          <ul className="mt-4">
            <li className="flex flex-col text-base">
              <div className="flex items-start w-full">
                <span className="flex justify-center items-center sm:text-xl md:text-2xl p-2 px-12 border border-accent rounded-2xl mr-2  md:mr-4 lg:mr-8 w-1/2">
                  2025
                </span>
                <div className="text-base sm:text-xl md:text-2xl text-header font-normal leading-4 md:leading-5 w-1/2">
                  IT SUPPORT
                  <br />
                  <span className="text-sm sm:text-md text-normal md:text-base leading-2">
                    BytesCrafter I.T Solutions
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* ———————————————————————————————————— resume ——— */}
        <a href="Bataller_Resume.pdf" download>
          <button
            className="p-2 sm:p-4 sm:text-xl md:text-2xl mt-8 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)] cursor-pointer"
          >
            DOWNLOAD CV
          </button>
        </a>
      </div>
    </>
  );
}
