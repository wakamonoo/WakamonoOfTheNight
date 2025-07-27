import Image from "next/image";
import wall from "../assets/aotWall.png";
import me from "../assets/wakamono.png";
import NavMenu from "@/components/buttons";
import Signage from "@/components/signage";
import AboutImage from "../assets/about.png";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main>
      <section id="hero" className="bg-brand h-screen relative overflow-hidden">
        <NavMenu />
        <div id="bg" className="absolute bottom-0 left-0 w-full inset-0 top-45">
          <Signage />
          <Image src={wall} alt="wall" className="w-full h-full object-cover object-top" />
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

      <section id="about" className="bg-accent h-screen p-8">
            <div className="flex">
              <Image src={AboutImage} className="w-35 h-auto rounded-xl" alt="aboutImage" />
              <div className="px-4">
                <h1 className="text-4xl">WHO AM I</h1>
                <p>
                  I am Joven Serdan Bataller, an Information Technology graduate and
                  website developer.
                </p>
              </div>
            </div>
      
            <div className="mt-4">
              <h2 className="text-2xl">EDUCATION</h2>
              <ul>
                <li>
                  BS in Information Technology at Bicol University Polangui{" "}
                  <span>2021-2025</span>
                </li>
              </ul>
              <h2 className="text-2xl">EXPERIENCE</h2>
              <ul>
                <li>
                  IT Support at BytesCrafter IT Solutions <span>FEB - MAY, 2025</span>
                </li>
              </ul>
            </div>
      
            <button className="p-2 mt-4 bg-brand rounded shadow">DOWNLOAD CV</button>
          </section>
    </main>
  );
}
