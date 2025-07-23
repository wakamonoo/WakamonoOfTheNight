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
import BottomHalfCircleMenu from "@/components/buttons";
import LightMode from "@/components/lightMode";

export default function Home() {
  return (
    <main>
      <section className="bg-brand h-screen relative">
        <div id="navBar" className="flex justify-center px-4 py-8">
          <LightMode />
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
        </div>
        <BottomHalfCircleMenu />
      </section>
    </main>
  );
}
