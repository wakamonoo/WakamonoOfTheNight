import Logo from "../assets/logo.png";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-100 backdrop-blur-2xl flex justify-center items-center w-screen h-screen ">
      <Image
        src={Logo}
        alt="wakamono-logo"
        className="object-cover w-36 sm:w-50 lg:w-60 xl:70 h-auto animate-pulse"
      />
    </div>
  );
}
