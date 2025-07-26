// app/about/page.jsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BottomHalfCircleMenu from "@/components/buttons";
import AboutImage from "../../assets/about.png";

export default function AboutPage() {
  return (
    <section className="bg-accent h-screen p-8">
      <div className="flex">
        <Image src={AboutImage} className="w-35 h-auto" alt="aboutImage" />
        <div className="px-4">
          <h1 className="text-4xl">WHO AM I</h1>
          <p>
            I am Joven Serdan Bataller, an Information Technology graduate and
            website developer.
          </p>
        </div>
      </div>

      <div>
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
      <BottomHalfCircleMenu />
    </section>
  );
}
