import Logo from "../assets/logo.png";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-100 backdrop-blur-2xl flex justify-center items-center w-screen h-screen ">
      <Image
        src={Logo}
        alt="wakamono-logo"
        className="absolute object-cover w-36 sm:w-50 lg:w-60 xl:70 h-auto animate-[center-left_1s_ease-in-out_forwards] [animation-delay:500ms]"
      />
      <h1 className="absolute font-tall text-6xl sm:text-7xl lg:text-8xl xl:text-9xl opacity-0 text-black ml-32 sm:ml-40 lg:ml-56 xl:ml-60 animate-[wkmn-fade_1s_ease-in-out_forwards] [animation-delay:700ms]">WKMN</h1>
    </div>
  );
}
