export default function Signage() {
  return (
    <div className="flex justify-center align-center w-full">
      <div className="relative">
        <p className="absolute text-center font-tall text-[4.5rem] md:text-[8rem] lg:text-[10rem] text-header opacity-40 leading-[4.3rem] md:leading-[7rem] lg:leading-[9rem] whitespace-nowrap">
          WAKAMONO <br />
          OF THE NIGHT
        </p>
        <p className="relative text-center font-tall  text-[4.5rem] md:text-[8rem] lg:text-[10rem] text-transparent stroke-text pointer-events-none z-40 leading-[4.3rem] md:leading-[7rem] lg:leading-[9rem] whitespace-nowrap">
          WAKAMONO
          <br />
          OF THE NIGHT
        </p>
      </div>
    </div>
  );
}
