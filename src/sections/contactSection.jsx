"use client";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_63ovony",
        "template_008hedl",
        form.current,
        "u8-c71FS0yKlrua_p"
      )
      .then(
        () => {
          alert("Message Deployed");
          form.current.reset();
        },
        (error) => {
          alert("Deployment Error, Try Again");
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header md:mb-8 lg:mb-12 xl:mb-16">
        DISPATCH RESOLVE ────
      </h1>
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
          <input
            placeholder="enter cadet name"
            name="name"
            required
            type="text"
            className="w-full border bg-panel p-2 rounded"
          />
          <input
            placeholder="your signal relay code (email)"
            name="email"
            required
            type="email"
            className="w-full border bg-panel p-2 rounded"
          />
          <input
            placeholder="mission intent (subject)"
            name="title"
            required
            type="text"
            className="w-full border bg-panel p-2 rounded"
          />
          <textarea
            placeholder="detail your intel"
            name="message"
            required
            type="text"
            className="w-full h-40 border bg-panel p-2 rounded"
          />
          <div>
            <button
              type="submit"
              className="p-2 sm:p-4 sm:text-xl md:text-2xl mt-4 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
            >
              ALERT HEADQUARTERS
            </button>
          </div>
        </form>

        <p className="font-normal text-sm sm:text-base md:text-xl py-8 text-normal">
          alternate recon points:
        </p>
        <div className="w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="https://www.facebook.com/joven.serdanbataller">
              <div
                className="p-4 sm:p-8 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
              >
                <div className="text-4xl sm:text-5xl mb-4 font-header text-header">
                  <FaFacebookF />
                </div>
                <h4 className="text-xl sm:text-3xl lg:text-xl 2xl:text-3xl font-header text-header">
                  Joven Bataller
                </h4>
              </div>
            </a>

            <a href="https://www.instagram.com/wakamonoooo/">
              <div
                className="p-4 sm:p-8 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
              >
                <div className="text-4xl sm:text-5xl mb-4 font-header text-header">
                  <FaInstagram />
                </div>
                <h4 className="text-xl sm:text-3xl lg:text-xl 2xl:text-3xl  font-header text-header">
                  WAKAMONOOOO
                </h4>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/joven-bataller-085761350/">
              <div
                className="p-4 sm:p-8 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
              >
                <div className="text-4xl sm:text-5xl mb-4 font-header text-header">
                  <FaLinkedinIn />
                </div>
                <h4 className="text-xl sm:text-3xl lg:text-xl 2xl:text-3xl font-header text-header">
                  JOVEN BATALLER
                </h4>
              </div>
            </a>

            <a href="https://github.com/wakamonoo">
              <div
                className="p-4 sm:p-8 w-full h-full bg-brand rounded border transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
              >
                <div className="text-4xl sm:text-5xl mb-4 font-header text-header">
                  <FaGithub />
                </div>
                <h4 className="text-xl sm:text-3xl lg:text-xl 2xl:text-3xl font-header text-header">
                  WAKAMONOO
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
