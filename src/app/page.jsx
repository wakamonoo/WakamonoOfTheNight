"use client";
import Hero from "@/sections/heroSection";
import About from "@/sections/aboutSection";
import Skills from "@/sections/skillSection";
import Portfolio from "@/sections/portfolioSection";
import Contact from "@/sections/contactSection";
import Footer from "@/sections/footer";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";
import Aibou from "@/components/aibou";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  {/* ———————————————————————————————————— loader ——— */}
  useEffect(() => {
    const fetchSomething = async () => {
      const result = await new Promise((resolve) =>
        setTimeout(() => resolve("done loading"), 1500)
      );
      setData(result);
      setLoading(false);
    };
    fetchSomething();
  }, []);

  return (
    <main>
      {/* ———————————————————————————————————— loader ——— */}
      {loading && <Loader />}

      {/* ———————————————————————————————————— chatbot ——— */}
      <Aibou />

      {/* ———————————————————————————————————— hero section ——— */}
      <section id="hero" className="bg-brand h-screen relative overflow-hidden">
        <Hero />
      </section>

      {/* ———————————————————————————————————— about section ——— */}
      <section
        id="about"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <About />
      </section>

      {/* ———————————————————————————————————— skills section ——— */}
      <section
        id="skills"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <Skills />
      </section>

      {/* ———————————————————————————————————— portfolio section ——— */}
      <section
        id="portfolio"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <Portfolio />
      </section>

      {/* ———————————————————————————————————— contact section ——— */}
      <section
        id="contact"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <Contact />
      </section>

      {/* ———————————————————————————————————— footer ——— */}
      <section className="flex justify-center h-auto w-full bg-panel py-4">
        <Footer />
      </section>
    </main>
  );
}
