'use client';
import { AiFillHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RiRocket2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function BottomHalfCircleMenu() {
  const pathname = usePathname();
  const LinkCase = (href) => `${pathname === href ? "scale-125 text-[var(--color-accent)]" : "hover:scale-125 text-[var(--color-secondary)]"}`;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-text rounded-t-full relative">
        <div
          id="navLinks"
          className="left-1/2 -translate-x-1/2 text-4xl w-64 h-35 relative"
        >
          <div>
            <Link href="/skills">
              <button className={`${LinkCase("/skills")} absolute left-6 bottom-4 transition-all duration-300`}>
              <RiRocket2Fill />
            </button>
            </Link>

            <Link href="/about">
              <button className={`${LinkCase("/about")} absolute left-14 bottom-16 transition-all duration-300`}>
                <VscAccount />
              </button>
            </Link>

            <Link href="/">
              <button className={`${LinkCase("/")} absolute left-1/2 -translate-x-1/2 bottom-22 transition-all duration-300`}>
              <AiFillHome />
            </button>
            </Link>

            <Link href="/portfolio">
              <button className={`${LinkCase("/portfolio")} absolute right-14 bottom-16 transition-all duration-300`}>
              <CgWebsite />
            </button>
            </Link>

            <Link href="/contact">
              <button className={`${LinkCase("/contact")} absolute right-6 bottom-4 transition-all duration-300`}>
              <BsTelephoneFill />
            </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-14 bg-accent rounded-t-full"></div>
      </div>
    </div>
  );
}
