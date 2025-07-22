import Image from "next/image";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { RiRocket2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import wall from "../assets/aotWall.png";
import me from '../assets/me.png'

export default function Home() {
  return (
    <main> 
      <section className="bg-brand h-screen relative">
        <div id="navBar" className="flex justify-between px-4 py-2">
          <Link href="/">
            <Image src={logo} alt="wakamonophoto" className="w-18 h-auto p-2" />
          </Link>
          <div
            id="navLinks"
            className="flex gap-2 text-white text-3xl bg-amber-200 rounded-2xl p-2 shadow-2xl"
          >
            <button>
              <VscAccount />
            </button>
            <button>
              <RiRocket2Fill />
            </button>
            <button>
              <CgWebsite />
            </button>
            <button>
              <BsTelephoneFill />
            </button>
          </div>
          <button className="p-4 text-amber-200 text-2xl">
            <FaMoon />
          </button>
        </div>
        <div id="bg" className="absolute bottom-0 left-0 w-full h-1/2">
          <Image src={wall} alt="wall" className="w-full h-full object-cover"/>
        </div>
        <div id="me" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
          <Image src={me} alt="me" width={500} height={500} />
        </div>
      </section>
    </main>
  );
}
