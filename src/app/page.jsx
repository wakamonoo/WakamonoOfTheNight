import Image from "next/image";
import wall from "../assets/aotWall.png";
import me from "../assets/wakamono.png";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import BottomHalfCircleMenu from "@/components/buttons";
import LightMode from "@/components/lightMode";
import Signage from "@/components/signage";

export default function Home() {
  return (
    <main>
      <section className="bg-brand h-screen relative">
        <div id="navBar" className="flex justify-center px-4 py-8">
          <LightMode />
        </div>
        <div id="bg" className="absolute bottom-0 left-0 w-full h-100">
          <Image src={wall} alt="wall" className="w-full h-full object-cover" />
        </div>
        <Signage />
        <div id="meInfo">
          <div
            id="mePhoto"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full h-[85vh] max-w-[450px] max-h-[850px] flex justify-center items-end"
          >
            <Image src={me} alt="me" fill className="object-contain" />
          </div>   
        </div>
        <div className="absolute z-50 p-4 right-4 mt-24 rounded-2xl bg-[var(--color-panel-op)] bg-opacity-70 ">
          <h1 className="relative text-4xl text-bone">JOVEN BATALLER</h1>
          <p className="text-right"><span className="text-2xl text-accent">- </span>web developer</p>
          <div className="flex gap-2 text-4xl justify-center pt-2 text-accent">
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaLinkedinIn />
            </button>
            <button>
              <FaGithub />
            </button>
          </div>
        </div>
        <BottomHalfCircleMenu />
      </section>
    </main>
  );
}
