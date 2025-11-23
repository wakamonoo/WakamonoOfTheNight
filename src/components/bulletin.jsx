import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import Nexus from "@/assets/nexus_logo.png";
import Image from "next/image";
import { MdWarning } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa";

export default function Bulletin() {
  const router = useRouter();

  return (
    <Marquee pauseOnHover={true} speed={50} className="cursor-pointer bg-panel">
      <div className="flex items-center gap-2">
        <h1 className="text-base md:text-lg lg:text-xl text-header bg-brand p-2 font-bold">
          Regiment Bulletin:
        </h1>

        <div className="flex items-center">
          <FaBullhorn className="text-sm md:text-base lg:text-lg mr-2" />
          <p className="text-sm md:text-base lg:text-lg font-normal text-normal">
            <strong>Attention</strong>, everyone! I proudly report that I have
            completed another mission,
          </p>
          <Image
            src={Nexus}
            width={0}
            height={0}
            sizes="100vw"
            className="w-14 md:w-16 lg:w-18 h-auto object-contain ml-2"
          />
          <p className="text-sm md:text-base lg:text-lg font-normal text-normal">
            . This is a <strong>Marvel Cinematic Universe</strong> outpost where
            fans can gather, share intel on the timeline, track their watch
            progress, debate which titles reign supreme, and much more. I urge
            all recruits to venture forth, explore the site, and press the
            button to advance.
          </p>
        </div>
        <button
          className="px-4 rounded-full bg-army mr-4 cursor-pointer transition-all duration-300 hover:scale-x-110 focus:scale-x-110"
          onClick={() => router.push("https://nexus-wakamonoo.vercel.app")}
        >
          <p className="text-sm md:text-base lg:text-lg">Visit</p>
        </button>
      </div>
    </Marquee>
  );
}
