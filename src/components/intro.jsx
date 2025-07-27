import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Bell from "../assets/bell.png";

export default function Intro() {
  return (
    <div className="flex justify-end">
      <div className="relative z-50 p-4 right-4 mt-100 rounded-xl bg-panel w-70">
        <div className="absolute bottom-30 -left-8">
          <Image
            src={Bell}
            alt="bell"
            className="w-16 h-auto overflow-auto -rotate-45"
          />
        </div>

        <h1 className="relative text-5xl text-header">JOVEN BATALLER</h1>
        <p className="text-right text-2xl text-normal">
          <span className="text-2xl text-normal">──── </span>web developer
        </p>
        <div className="flex gap-2 text-4xl justify-center pt-2 text-normal overflow-visible">
          <a href="https://www.facebook.com/joven.serdanbataller">
            <button className="transition-all duration-300 hover:scale-125 hover:text-[var(--color-accent)] active:scale-125 focus:text-[var(--color-accent)]">
              <FaFacebookF />
            </button>
          </a>
          <a href="https://www.instagram.com/wakamonoooo/">
            <button className="transition-all duration-300 hover:scale-125 hover:text-[var(--color-accent)] active:scale-125 focus:text-[var(--color-accent)]">
              <FaInstagram />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/joven-bataller-085761350/">
            <button className="transition-all duration-300 hover:scale-125 hover:text-[var(--color-accent)] active:scale-125 focus:text-[var(--color-accent)]">
              <FaLinkedinIn />
            </button>
          </a>
          <a href="https://github.com/wakamonoo">
            <button className="transition-all duration-300 hover:scale-125 hover:text-[var(--color-accent)] active:scale-125 focus:text-[var(--color-accent)]">
              <FaGithub />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
