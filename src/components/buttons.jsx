import { AiFillHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RiRocket2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";

export default function BottomHalfCircleMenu() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
      <div className=" bg-text rounded-t-full relative">
        <div id="navLinks" className="absolute left-1/2 -translate-x-1/2 text-secondary text-4xl w-72 h-40 relative">
          <button className="absolute left-4 bottom-6">
            <RiRocket2Fill />
          </button>
          <button className="absolute left-16 bottom-18">
            <VscAccount />
          </button>
          <button className="absolute left-1/2 -translate-x-1/2 bottom-24">
            <AiFillHome />
          </button>
          <button className="absolute right-16 bottom-18">
            <CgWebsite />
          </button>
          <button className="absolute right-4 bottom-6">
            <BsTelephoneFill />
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-accent rounded-t-full"></div>
      </div>
    </div>
  );
}
