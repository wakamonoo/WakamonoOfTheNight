import { MdMessage } from "react-icons/md";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function Aibou() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-4 p-4 right-4 flex rounded-4xl bg-army shadow-2xl z-60 cursor-pointer"
      >
        <MdMessage className="text-4xl text-normal" />
      </div>

      {isOpen && (
        <div className="fixed bottom-22 right-4 z-100 bg-army shadow-2xl w-80 h-110 rounded-2xl overflow-hidden">
          <div className="p-2 text-xl text-header flex justify-center items-center gap-4 w-full h-8 bg-panel">
            <MdMessage className="font-heading" />
            <p className=" font-heading">AIbou</p>
          </div>

          <div className="flex-1 p-2 overflow-y-auto"></div>

          <div className="flex justify-between gap-2 items-center p-2">
            <textarea className="w-full h-12 bg-brand p-2 rounded-md" />
            <FiSend className="text-5xl bg-brand p-2 rounded-md" />
          </div>
        </div>
      )}
    </>
  );
}
