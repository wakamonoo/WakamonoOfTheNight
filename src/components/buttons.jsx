import { AiFillHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RiRocket2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";

export default function BottomHalfCircleMenu() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-text rounded-t-full relative">
        <div id="navLinks" className="left-1/2 -translate-x-1/2 text-secondary text-4xl w-64 h-35 relative">
          <div>
            <button className="absolute left-6 bottom-4 transition-all duration-300 hover:text-5xl hover:text-[var(--color-accent)]">
            <RiRocket2Fill />
          </button>
          <button className="absolute left-14 bottom-16 transition-all duration-300 hover:text-5xl hover:text-[var(--color-accent)]">
            <VscAccount />
          </button>
          <button className="absolute left-1/2 -translate-x-1/2 bottom-22 transition-all duration-300 hover:text-5xl hover:text-[var(--color-accent)]">
            <AiFillHome />
          </button>
          <button className="absolute right-14 bottom-16 transition-all duration-300 hover:text-5xl hover:text-[var(--color-accent)]">
            <CgWebsite />
          </button>
          <button className="absolute right-6 bottom-4 transition-all duration-300 hover:text-5xl hover:text-[var(--color-accent)]">
            <BsTelephoneFill />
          </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-14 bg-accent rounded-t-full transition-all duration-300 hover:text-5xl hover:text-[var(--color-accent)]"></div>
      </div>
    </div>
  );
}
