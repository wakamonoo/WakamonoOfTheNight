import { MdMessage } from "react-icons/md";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

export default function Aibou() {
  const [isOpen, setIsOpen] = useState(false);
  const [draftText, setDraftText] = useState("");
  const [sentText, setSentText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  function handleSent() {
    if (draftText.trim() !== "") {
      setSentText(draftText);
      setDraftText("");
      setShowMessage(true);
    }
  }

  return (
    <>
      <div
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-4 p-4 right-4 flex rounded-4xl bg-army shadow-2xl z-60 cursor-pointer"
      >
        <MdMessage className="text-4xl text-normal" />
      </div>

      {isOpen && (
        <div className="fixed flex flex-col bottom-22 right-4 z-100 bg-army shadow-2xl w-80 h-110 rounded-2xl overflow-hidden">
          <div className="p-2 text-xl text-header flex justify-center items-center gap-4 w-full h-8 bg-panel">
            <MdMessage className="font-heading" />
            <p className=" font-heading">AIbou</p>
          </div>

          <div className="flex-1 p-2 overflow-y-auto">
            {showMessage && (
              <div className="flex items-center gap-2 justify-end pl-4">
                <p className="bg-brand p-2 text-normal rounded-2xl">
                  {sentText}
                </p>
                <FiUser className="text-4xl bg-brand rounded-2xl p-2" />
              </div>
            )}
          </div>

          <div className="flex justify-between gap-2 items-center p-2">
            <textarea
              className="w-full h-12 bg-brand p-2 rounded-md"
              placeholder="what do you want to ask?"
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSent();
                }
              }}
            />
            <FiSend
              onClick={handleSent}
              className="text-5xl text-normal bg-brand p-2 rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
}
