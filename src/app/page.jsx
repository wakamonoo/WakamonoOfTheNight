"use client";
import Hero from "@/sections/heroSection";
import About from "@/sections/aboutSection";
import Skills from "@/sections/skillSection";
import Portfolio from "@/sections/portfolioSection";
import Contact from "@/sections/contactSection";
import Footer from "@/sections/footer";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

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

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <section id="hero" className="bg-brand h-screen relative overflow-hidden">
        <Hero />
      </section>

      <section
        id="about"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <About />
      </section>

      <section
        id="skills"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <Skills />
      </section>

      <section
        id="portfolio"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <Portfolio />
      </section>

      <section
        id="contact"
        className="bg-second p-8 sm:p-15 md:p-24 lg:p-32 xl:px-72"
      >
        <Contact />
      </section>

      <section className="flex justify-center h-auto w-full bg-panel py-4">
        <Footer />
      </section>
    </main>
  );
}
