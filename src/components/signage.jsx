export default function Signage() {
  return(
    <div className="flex justify-center align-center w-full ">
      <div className="relative">
        <p className="absolute text-center font-tall text-[4.5rem] sm:text-[8rem] md:text-[10rem]  lg:text-[12rem] text-header opacity-40 leading-[4.3rem] sm:leading-[7rem] md:leading-[9rem] lg:leading-[10.5rem] whitespace-nowrap">WAKAMONO <br />OF THE NIGHT</p>
        <p className="relative text-center font-tall text-[4.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] text-transparent stroke-text pointer-events-none z-40 leading-[4.3rem] sm:leading-[7rem] md:leading-[9rem] lg:leading-[10.5rem] whitespace-nowrap">WAKAMONO<br />OF THE NIGHT</p>
      </div>
    </div>
  );
}