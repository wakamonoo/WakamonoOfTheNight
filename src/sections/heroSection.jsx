"use client";
import Image from "next/image";
import wall from "../assets/aotWall.png";
import me from "../assets/wakamono.png";
import NavMenu from "@/components/buttons";
import Signage from "@/components/signage";
import Intro from "@/components/intro";
import Titan from "../assets/bertolo.png";

export default function Hero() {
  return (
    <>
      <NavMenu />
      <div className="">
        <Image
          src={Titan}
          alt="titan"
          className="w-full h-full object-cover object-top"
        />
      </div>
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
    </>
  );
}
