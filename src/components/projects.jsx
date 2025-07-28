import Image from "next/image";
import Work1 from "../assets/work-1.png";
import Work2 from "../assets/work-2.png";
import Work3 from "../assets/work-3.png";
import Work4 from "../assets/work-4.png";
import Work5 from "../assets/work-5.png";
import Work6 from "../assets/work-6.png";
import Work7 from "../assets/work-7.png";
import Work8 from "../assets/work-8.png";
import Work9 from "../assets/work-9.png";
import Work10 from "../assets/work-10.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiKotlin,
  SiMysql,
  SiPhp,
} from "react-icons/si";

export default function Projects() {
  return (
    <>
      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work1} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">FIRSTRESPONSE</h4>
            <p className="text-sm leading-4 text-normal">
              First aid and emergency response application for the 3rd District
              of Albay, Bicol Region.
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiKotlin />
              <SiFirebase />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Commence Operation
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>

      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work2} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">REVVED</h4>
            <p className="text-sm leading-4 text-normal">
              Web-based E-commerce platform for motorcycle parts and
              accessories.
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiPhp />
              <SiCss3 />
              <SiMysql />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Commence Operation
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>

      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work3} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">ANCESTORY</h4>
            <p className="text-sm leading-4 text-normal">
              Interactive website for local-folk stories.
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiFirebase />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Advance Beyond Wall
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>

      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work4} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">SORA</h4>
            <p className="text-sm leading-4 text-normal">
              Web-application for tracking weather, time, temperature, sunset
              and sunrise time in various locations.
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiHtml5 />
              <SiJavascript />
              <SiTailwindcss />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Advance Beyond Wall
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>

      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work5} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">DEBTFLIX</h4>
            <p className="text-sm leading-4 text-normal">
              A useful but naughty way of Debt-Tracking.
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiHtml5 />
              <SiJavascript />
              <SiTailwindcss />
              <SiFirebase />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Advance Beyond Wall
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>

      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work6} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">KANDILI</h4>
            <p className="text-sm leading-4 text-normal">
              Your cute and aesthetic digital diary, be private or connect with
              friends.
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiHtml5 />
              <SiJavascript />
              <SiTailwindcss />
              <SiFirebase />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Advance Beyond Wall
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>

      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work7} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">TODOCHAN</h4>
            <p className="text-sm leading-4 text-normal">
              A minimalist to-do list web app focused on simplicity and ease of
              use
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiHtml5 />
              <SiJavascript />
              <SiTailwindcss />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Advance Beyond Wall
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>

      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work8} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">POINTCITY</h4>
            <p className="text-sm leading-4 text-normal">
              Online and offline basketball stats-tracker.
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiHtml5 />
              <SiJavascript />
              <SiTailwindcss />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Advance Beyond Wall
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>

      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work9} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">RINA</h4>
            <p className="text-sm leading-4 text-normal">
              A browser extension for youtube assistance. Primary use of voice
              commands for tab control
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiHtml5 />
              <SiJavascript />
              <SiTailwindcss />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Advance Beyond Wall
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>

      <div className="p-4 bg-brand w-full h-full rounded">
        <div className="flex justify-between">
          <Image src={Work10} alt="project" className="w-36 h-auto rounded" />
          <div className="w-full ml-2">
            <h4 className="text-xl text-header">616-INITIATIVE</h4>
            <p className="text-sm leading-4 text-normal">
              A simple website for watch tracking the chronological order of the
              Marvel Cinematic Universe.
            </p>
            <div className="flex gap-2 mt-2 text-2xl text-normal">
              <SiHtml5 />
              <SiJavascript />
              <SiTailwindcss />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Advance Beyond Wall
            </button>
          </a>
          <a href="">
            <button className="font-normal text-sm p-2 bg-panel w-50 rounded text-normal">
              Open War Archives
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
