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
        <div id="bg" className="absolute bottom-0 left-0 w-full inset-0 top-45">
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
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full h-[85vh] max-w-[450px] max-h-[850px] flex justify-center items-end"
          >
            <Image src={me} alt="me" fill className="object-contain" />
          </div>
        </div>
        <Intro />
      </section>

      <section id="about" className="bg-second p-8">
        <h1 className="text-3xl mb-4 text-header">THE DIGITAL SCOUT ────</h1>
        <div className="flex">
          <Image
            src={AboutImage}
            className="w-35 h-auto rounded-xl"
            alt="aboutImage"
          />
          <div className="px-4">
            <p className="text-normal text-base font-normal leading-4.5">
              I am Joven Serdan Bataller, 22 years old from Region-V Philippines and a BS in Information Technology graduate and
              website developer.
            </p>
          </div>
        </div>
        <div>
          <p className="text-normal text-base font-normal leading-4.5 mt-2">
            I specialize in building user-friendly, visually appealing and
            reliable website applications.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl p-2 bg-brand rounded text-header">
            EDUCATION
          </h2>
          <ul className="mt-4">
            <li className="flex flex-col text-base">
              <div className="flex items-start">
                <span className="p-2 border border-accent rounded-2xl mr-2 w-28 text-center inline-block">
                  2021-2025
                </span>
                <div className="text-normal font-normal leading-4">
                  INFORMATION TECHNOLOGY
                  <br />
                  <span className="text-sm">Bicol University Polangui</span>
                </div>
              </div>
            </li>
          </ul>
          <h2 className="text-2xl p-2 bg-brand rounded mt-4 text-header">
            EXPERIENCE
          </h2>
          <ul className="mt-4">
            <li className="flex flex-col text-base">
              <div className="flex items-start">
                <span className="p-2 border border-accent rounded-2xl mr-2 w-28 text-center inline-block">
                  2025
                </span>
                <div className="text-normal font-normal leading-4">
                  IT SUPPORT
                  <br />
                  <span className="text-sm">BytesCrafter I.T Solutions</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <button
            className="p-2 mt-2 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
          >
          DOWNLOAD CV
        </button>
      </section>

      <section id="skills" className="bg-second p-8">
        <h1 className="text-3xl mb-4 text-header">ODM ARSENAL ────</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-2">
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiHtml5 />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiCss3 />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiJavascript />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiTailwindcss />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiReact />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiNextdotjs />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiFirebase />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiKotlin />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <FaGithub />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiVercel />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiVite />
            </div>
            <div
              tabIndex="0"
              className="p-2 text-5xl text-normal bg-brand rounded transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] active:scale-110 focus:text-[var(--color-accent)]"
            >
              <SiRender />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-second p-8">
        <h1 className="text-3xl mb-4 text-header">RECON MISSIONS ────</h1>
        <div className="flex flex-col gap-4">
          <Projects />
        </div>
      </section>

      <section id="contact" className="bg-second p-8">
        <h1 className="text-3xl mb-4 text-header">DISPATCH A RAVEN ────</h1>
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
            className="p-2 mt-2 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
          >
            ALERT HEADQUARTERS
          </button>
          <p className="font-normal text-sm py-8 text-normal">
            alternate recon points:
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.facebook.com/joven.serdanbataller">
                <div
                  className="p-4 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  <div className="text-4xl mb-4 font-header text-header">
                    <FaFacebookF />
                  </div>
                  <h4 className="text-xl font-header text-header">
                    Joven Bataller
                  </h4>
                </div>
              </a>

              <a href="https://www.instagram.com/wakamonoooo/">
                <div
                  className="p-4 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  <div className="text-4xl mb-4 font-header text-header">
                    <FaInstagram />
                  </div>
                  <h4 className="text-xl font-header text-header">
                    WAKAMONOOOO
                  </h4>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/joven-bataller-085761350/">
                <div
                  className="p-4 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  <div className="text-4xl mb-4 font-header text-header">
                    <FaLinkedinIn />
                  </div>
                  <h4 className="text-xl font-header text-header">
                    JOVEN BATALLER
                  </h4>
                </div>
              </a>

              <a href="https://github.com/wakamonoo">
                <div
                  className="p-4 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  <div className="text-4xl mb-4 font-header text-header">
                    <FaGithub />
                  </div>
                  <h4 className="text-xl font-header text-header">
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
