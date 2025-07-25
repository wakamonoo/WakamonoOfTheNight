export default function Signage() {
  return(
    <div className="flex justify-center align-center w-full ">
      <div className="relative">
        <p className="absolute text-center font-tall text-[4.5rem] text-panel opacity-40 leading-[4.3rem] whitespace-nowrap">WAKAMONO <br />OF THE NIGHT</p>
        <p className="relative text-center font-tall text-[4.5rem] text-transparent stroke-text pointer-events-none z-40 leading-[4.3rem] whitespace-nowrap">WAKAMONO<br />OF THE NIGHT</p>
      </div>
    </div>
  );
}