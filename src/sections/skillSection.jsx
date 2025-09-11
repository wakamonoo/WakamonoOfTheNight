"use client";
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
  SiPhp,
  SiMysql,
  SiSocketdotio,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiRender,
  SiCloudinary,
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills({ loading }) {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);
  const containerRef6 = useRef(null);
  const [inView, setInView] = useState(false);
  const [inView2, setInView2] = useState(false);
  const [inView3, setInView3] = useState(false);
  const [inView4, setInView4] = useState(false);
  const [inView5, setInView5] = useState(false);
  const [inView6, setInView6] = useState(false);

  useEffect(() => {
    if (loading) return;

    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.95 }
      );
      if (ref.current) observer.observe(ref.current);
    };

    createObserver(containerRef, setInView);
    createObserver(containerRef2, setInView2);
    createObserver(containerRef3, setInView3);
    createObserver(containerRef4, setInView4);
    createObserver(containerRef5, setInView5);
    createObserver(containerRef6, setInView6);
  }, [loading]);

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 10 },
    },
  };
  return (
    <>
      <motion.div
        ref={containerRef}
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header md:mb-8 lg:mb-12 xl:mb-16"
        >
          ODM ARSENAL ────
        </motion.h1>
      </motion.div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 justify-center mx-auto">
        <motion.div ref={containerRef2}
        variants={containerVariant}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}>
          <motion.h2
            variants={itemVariants}
            className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4"
          >
            Front-End Development
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8"
          >
            Building user interfaces and interactive designs for web apps using
            modern frameworks and styling tools.
          </motion.p>
          <div className="flex flex-wrap gap-2">
            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiHtml5 />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  HTML
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiCss3 />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  CSS
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiJavascript />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  JAVASCRIPT
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiTailwindcss />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  TAILWIND
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiReact />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  REACT.JS
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiNextdotjs />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  NEXT.JS
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
        ref={containerRef3}
        variants={containerVariant}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
      >
          <motion.h2
            variants={itemVariants}
            className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4"
          >
            Back-End Development
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8"
          >
            Handling server-side logic, APIs, and data processing to make
            applications functional and efficient.
          </motion.p>
          <div className="flex flex-wrap gap-2">
            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiExpress />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  EXPRESS.JS
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiNodedotjs />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  NODE.JS
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiPhp />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  PHP
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
        ref={containerRef4}
        variants={containerVariant}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
      >
          <motion.h2
            variants={itemVariants}
            className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4"
          >
            Database & Authentication
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8"
          >
            Managing data storage, retrieval, and user authentication to keep
            information secure and accessible.
          </motion.p>
          <div className="flex flex-wrap gap-2">
            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiFirebase />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  FIREBASE
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiMysql />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  MYSQL
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiMongodb />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  MONGODB
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
        ref={containerRef5}
        variants={containerVariant}
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
      >
          <motion.h2
            variants={itemVariants}
            className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4"
          >
            Tools & Platforms
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8"
          >
            Using deployment tools, version control, and cloud platforms to
            build, host, and manage applications.
          </motion.p>
          <div className="flex flex-wrap gap-2">
            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiGithub />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  GITHUB
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiVercel />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  VERCEL
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiSocketdotio />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  SOCKET.IO
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiRender />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  RENDER
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiCloudinary />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  CLOUDINARY
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
        ref={containerRef6}
        variants={containerVariant}
        initial="hidden"
        animate={inView6 ? "visible" : "hidden"}
      >
          <motion.h2
            variants={itemVariants}
            className="w-full text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-4"
          >
            Mobile App Development
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8"
          >
            Creating cross-platform and native mobile applications with
            optimized performance and modern features.
          </motion.p>
          <div className="flex flex-wrap gap-2">
            <motion.div
              variants={iconVariants}
              className="relative group w-fit"
            >
              <div
                tabIndex="0"
                className="p-2 md:p-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-normal bg-brand rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 sm:hover:-translate-y-6 hover:shadow-2xl hover:bg-[var(--color-panel)] hover:text-[var(--color-accent)] focus:-translate-y-5 sm:focus:-translate-y-6  focus:shadow-2xl focus:bg-[var(--color-panel)] focus:text-[var(--color-accent)] focus:-rotate-3  cursor-pointer w-fit h-fit"
              >
                <SiKotlin />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-5 sm:-mt-6 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
                <p className="text-base sm:text-xl md:text-2xl font-extrabold">
                  KOTLIN
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
