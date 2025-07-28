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
            <p className="text-normal text-base font-normal">
              I am Joven Serdan Bataller, an Information Technology graduate and
              website developer.
            </p>
          </div>
        </div>
        <div>
          <p className="text-normal text-base font-normal">
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
                <div>
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
                <div>
                  IT SUPPORT
                  <br />
                  <span className="text-sm">BytesCrafter I.T Solutions</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <button className="p-2 mt-4 text-xl bg-brand rounded shadow">
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
              className="w-full border bg-panel p-2 rounded"
            />
            <input
              placeholder="your signal relay code (email)"
              className="w-full border bg-panel p-2 rounded"
            />
            <input
              placeholder="mission intent"
              className="w-full border bg-panel p-2 rounded"
            />
            <textarea
              placeholder="detail your intel"
              className="w-full h-40 border bg-panel p-2 rounded"
            />
          </div>
          <button className="p-2 mt-2 bg-brand rounded shadow-2xl border border-panel transition-all hover:bg-[var(--color-panel)] hover:scale-110">
            Dispatch Message
          </button>
        </div>
      </section>
    </main>
  );
}
