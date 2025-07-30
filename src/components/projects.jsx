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
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiKotlin,
  SiMysql,
  SiPhp,
} from "react-icons/si";

export default function Projects() {
  return (
    <>
      <div className="p-4 sm:p-8 bg-brand w-full h-full rounded">
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
              First aid and emergency response application for the 3rd District
              of Albay, Bicol Region.
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

      <div className="p-4 sm:p-8 bg-brand w-full h-full rounded">
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

      <div className="p-4 sm:p-8 bg-brand w-full h-full rounded">
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
    </>
  );
}
