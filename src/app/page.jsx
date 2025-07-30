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
import { FaGit, FaGithub } from "react-icons/fa";
import Projects from "@/components/projects";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section id="hero" className="bg-brand h-screen relative overflow-hidden">
        <NavMenu />
        <div
          id="bg"
          className="absolute bottom-0 left-0 w-full inset-0 top-45 sm:top-40 lg:top-28"
        >
          <Signage />
          <Image
            src={wall}
            alt="wall"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div id="meInfo">
          <div
            id="mePhoto"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10
             w-full h-[85vh] sm:h-[90vh] max-w-[450px] max-h-[850px] md:max-h-[1000px] lg:max-h-[1024px]
             flex justify-center items-end"
          >
            <Image src={me} alt="me" fill className="object-cover object-top" />
          </div>
          <Intro />
        </div>
      </section>


      <section
        id="about"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header">
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
              I am Joven Serdan Bataller, 22 years old from The Philippines and
              a BS in Information Technology graduate. I am a website developer
              that offers user-friendly, visually appealing and reliable website
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

          <button
            className="p-2 sm:p-4 sm:text-xl md:text-2xl mt-8 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
          >
            DOWNLOAD CV
          </button>
        </div>
      </section>


      <section id="skills" className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72">
        <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header">
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
      </section>

      <section id="portfolio" className="bg-second p-8 sm:p-15">
        <h1 className="text-3xl sm:text-5xl mb-4 text-header">
          RECON MISSIONS ────
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <Projects />
        </div>
      </section>

      <section id="contact" className="bg-second p-8 sm:p-15">
        <h1 className="text-3xl sm:text-5xl mb-4 text-header">
          DISPATCH RESOLVE ────
        </h1>
        <div>
          <div className="flex flex-col gap-2">
            <input
              placeholder="enter cadet name"
              type="text"
              className="w-full border bg-panel p-2 rounded"
            />
            <input
              placeholder="your signal relay code (email)"
              type="email"
              className="w-full border bg-panel p-2 rounded"
            />
            <input
              placeholder="mission intent (subject)"
              type="text"
              className="w-full border bg-panel p-2 rounded"
            />
            <textarea
              placeholder="detail your intel"
              type="text"
              className="w-full h-40 border bg-panel p-2 rounded"
            />
          </div>
          <button
            className="p-2 sm:p-4 sm:text-xl mt-4 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
          >
            ALERT HEADQUARTERS
          </button>
          <p className="font-normal text-sm sm:text-base py-8 text-normal">
            alternate recon points:
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.facebook.com/joven.serdanbataller">
                <div
                  className="p-4 sm:p-8 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  <div className="text-4xl sm:text-5xl mb-4 font-header text-header">
                    <FaFacebookF />
                  </div>
                  <h4 className="text-xl sm:text-3xl font-header text-header">
                    Joven Bataller
                  </h4>
                </div>
              </a>

              <a href="https://www.instagram.com/wakamonoooo/">
                <div
                  className="p-4 sm:p-8 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  <div className="text-4xl sm:text-5xl mb-4 font-header text-header">
                    <FaInstagram />
                  </div>
                  <h4 className="text-xl sm:text-3xl font-header text-header">
                    WAKAMONOOOO
                  </h4>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/joven-bataller-085761350/">
                <div
                  className="p-4 sm:p-8 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  <div className="text-4xl sm:text-5xl mb-4 font-header text-header">
                    <FaLinkedinIn />
                  </div>
                  <h4 className="text-xl sm:text-3xl font-header text-header">
                    JOVEN BATALLER
                  </h4>
                </div>
              </a>

              <a href="https://github.com/wakamonoo">
                <div
                  className="p-4 sm:p-8 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  <div className="text-4xl sm:text-5xl mb-4 font-header text-header">
                    <FaGithub />
                  </div>
                  <h4 className="text-xl sm:text-3xl font-header text-header">
                    WAKAMONOO
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
