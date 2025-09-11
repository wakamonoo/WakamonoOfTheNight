"use client";
import Image from "next/image";
import AboutImage from "../assets/about.png";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About({ loading }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (loading) return;
    const current = containerRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.60 }
    );

    observer.observe(current);
    return () => {
      observer.disconnect();
    };
  }, [loading]);

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <div ref={containerRef}>
      <motion.div variants={containerVariant} initial="hidden" animate={inView ? "visible" : "hidden"}>

        <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header md:mb-8 lg:mb-12 xl:mb-16">
          THE DIGITAL SCOUT ────
        </motion.h1>

        <div className="w-full clearfix">
          <motion.div variants={imageVariants} className="float-left w-1/2 max-w-[30rem] mr-2 mb-2 md:mr-4 md:mb-4 lg:mr-8 lg:mb-8 relative z-40">
            <Image
              src={AboutImage}
              className="w-full h-auto rounded-xl"
              alt="aboutImage"
            />
          </motion.div>
          <motion.p variants={itemVariants} className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5">
            I am Joven Serdan Bataller, 22 years old from The Philippines and a
            BS in Information Technology graduate. I am a website developer that
            offers user-friendly, visually appealing and reliable website
            applications.
          </motion.p>

          <div className="mt-4 sm:mt-8">
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header">
              EDUCATION
            </motion.h2>
            <motion.ul variants={itemVariants} className="mt-4">
              <li className="flex flex-col text-base">
                <div className="flex items-start w-full">
                  <span className="flex justify-center items-center sm:text-xl md:text-2xl p-2 border border-accent rounded-2xl mr-2  md:mr-4 lg:mr-8 w-1/2">
                    2021-2025
                  </span>
                  <div className="text-base sm:text-xl md:text-2xl font-normal text-header leading-4 md:leading-5 w-1/2">
                    INFORMATION TECHNOLOGY
                    <br />
                    <span className="text-sm sm:text-md md:text-base text-normal leading-2">
                      Bicol University Polangui
                    </span>
                  </div>
                </div>
              </li>
            </motion.ul>
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl mt-4 p-2 bg-brand rounded text-header">
              EXPERIENCE
            </motion.h2>
            <motion.ul variants={itemVariants} className="mt-4">
              <li className="flex flex-col text-base">
                <div className="flex items-start w-full">
                  <span className="flex justify-center items-center sm:text-xl md:text-2xl p-2 px-12 border border-accent rounded-2xl mr-2  md:mr-4 lg:mr-8 w-1/2">
                    2025
                  </span>
                  <div className="text-base sm:text-xl md:text-2xl text-header font-normal leading-4 md:leading-5 w-1/2">
                    IT SUPPORT
                    <br />
                    <span className="text-sm sm:text-md text-normal md:text-base leading-2">
                      BytesCrafter I.T Solutions
                    </span>
                  </div>
                </div>
              </li>
            </motion.ul >
          </div>

          {/* ———————————————————————————————————— resume ——— */}
          <motion.a variants={itemVariants} href="Bataller_Resume.pdf" download>
            <button
              className="p-2 sm:p-4 sm:text-xl md:text-2xl mt-8 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)] cursor-pointer"
            >
              DOWNLOAD CV
            </button>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
