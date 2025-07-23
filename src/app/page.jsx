import Image from "next/image";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { RiRocket2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import wall from "../assets/aotWall.png";
import me from "../assets/wakamono.png";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import scroll from '../components/scroll.jsx'

export default function Home() {
  return (
    <main>
      <section className="bg-brand h-screen relative">
        <div id="navBar" className="flex justify-between px-4 py-8">
          <Link href="/">
            <Image src={logo} alt="wakamonophoto" className="w-18 h-auto p-2" />
          </Link>
          <div
            id="navLinks"
            className="flex gap-3 text-text text-3xl bg-brand rounded-xl p-2 shadow-lg"
          >
            <button title="about">
              <VscAccount />
            </button>
            <button title="skills">
              <RiRocket2Fill />
            </button>
            <button title="works">
              <CgWebsite />
            </button>
            <button title="contact">
              <BsTelephoneFill />
            </button>
          </div>
          <button className="p-4 text-text text-2xl">
            <FaMoon />
          </button>
        </div>
        <div id="bg" className="absolute bottom-0 left-0 w-full h-1/2 md:h-3/4">
          <Image src={wall} alt="wall" className="w-full h-full object-cover" />
        </div>
        <div id="meInfo">
          <div
            id="mePhoto"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full h-[70vh] max-w-[450px] max-h-[700px] flex justify-center items-end"
          >
            <Image src={me} alt="me" fill className="object-contain" />
          </div>

          <div className="absolute bottom-10 left-10 z-30 flex flex-col items-start gap-6">
            {/* Name Section */}
            <div className="text-left">
              <p className="text-bone text-xl italic font-light tracking-widest">
                JOVEN
              </p>
              <h1 className="text-accent text-6xl font-black tracking-tight drop-shadow-[0_2px_2px_rgba(244,235,208,1)]">
                BATALLER
              </h1>

              <p>WEB DEVELOPER</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 px-6 py-3 bg-white/10 backdrop-blur rounded-2xl text-2xl text-bone">
              <a href="" aria-label="Facebook" className="hover:text-accent">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-accent">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
