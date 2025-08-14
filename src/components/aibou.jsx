import { MdClose } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { presetInfo } from "./presetInfo";
import AibouLoader from "./aibouLoader";
import ReactMarkdown from "react-markdown";
import Bot from "../assets/aibou.png";
import Image from "next/image";

export default function Aibou() {
  const [isOpen, setIsOpen] = useState(false);
  const [draftText, setDraftText] = useState("");
  const [sentText, setSentText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Preset, setPreset] = useState(true);
  const scrollEnd = useRef(null);
  const scrollStart = useRef(null);
  const divRef = useRef(null);
  const botRef = useRef(null);

  {/* ———————————————————————————————————— aibou, start. user, end ——— */}
  useEffect(() => {
    const lastText = sentText[sentText.length - 1];
    if (scrollEnd.current && lastText?.sender === "user") {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollStart.current && lastText?.sender === "aibou") {
      scrollStart.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [sentText]);

  {/* ———————————————————————————————————— message modal closer ——— */}
  useEffect(() => {
    function handleOutClick(e) {
      if (
        divRef.current &&
        !divRef.current.contains(e.target) &&
        botRef.current &&
        !botRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleOutClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutClick);
    };
  }, []);

  {/* ———————————————————————————————————— sent handler ——— */}
  async function handleSent(textToSend) {
    const text = textToSend ?? draftText.trim();
    if (text !== "") {
      setSentText((prev) => [...prev, { sender: "user", text }]);
      setDraftText("");
      setLoading(true);
      setError(null);
      setPreset(false);
    }
    try {
      const response = await fetch("api/chatbot", {
        method: "POST",
        headers: {
          "HTTP-Referer": "https://wakamonoo.vercel.app",
          "X-Title": "wakamonoofthenight",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            ...presetInfo,
            ...sentText.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            {
              role: "user",
              content: text,
            },
          ],
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        const aiText = data.choices[0].message.content.trim();
        setSentText((prev) => [...prev, { sender: "aibou", text: aiText }]);
      } else {
        setSentText((prev) => [
          ...prev,
          { sender: "aibou", text: "sumemasen! server down!" },
        ]);
      }
    } catch (err) {
      setError("Error contacting aibou!");
      setSentText((prev) => [
        ...prev,
        { sender: "aibou", text: "Error contacting aibou!" },
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-2xl pointer-events-none z-60" />
      )}

      <div
        ref={botRef}
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-4 p-2 right-4 flex rounded-full bg-army shadow-2xl z-60 cursor-pointer transform translate duration-200 hover:scale-110 active:scale-110"
      >
        <Image src={Bot} alt="bot" className="w-12 lg:w-16 h-auto" />
      </div>

      {isOpen && (
        <div
          ref={divRef}
          className="fixed flex flex-col bottom-22 lg:bottom-25 right-4 z-100 bg-army shadow-2xl w-[90vw] sm:w-[80vw] md:w-[65vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw] h-[70vh] rounded-2xl overflow-hidden"
        >
          <div className="py-2 px-4 text-2xl sm:text-3xl md:text-4xl text-header flex justify-between items-center gap-4 w-full h-fill bg-panel">
            <div className="flex items-center gap-4">
              <Image
                src={Bot}
                alt="bot"
                className="w-12 lg:w-16 bg-army p-2 rounded-full"
              />
              <p className="font-heading">AIbou</p>
            </div>
            <div>
              <MdClose
                onClick={() => setIsOpen(false)}
                className="hover:scale-110 active:scale-110 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex-1 p-2 overflow-y-auto">
            {sentText.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 p-2 ${
                  msg.sender === "user"
                    ? "justify-end p-4"
                    : "justify-start p-4"
                }`}
              >
                {msg.sender === "user" ? (
                  <>
                    <p className="bg-brand w-[40vw] md:w-[32vw] lg:w-[24vw] xl:w-[18vw] 2xl:w-[14vw] p-2 text-normal text-base sm:text-xl md:text-2xl rounded-2xl">
                      {msg.text}
                    </p>
                    <FiUser className="text-4xl md:text-5xl bg-brand rounded-full p-2" />
                  </>
                ) : (
                  <>
                    <div ref={scrollStart} />
                    <Image
                      src={Bot}
                      alt="bot"
                      className="w-10 md:w-14 bg-panel p-2 rounded-full"
                    />
                    <div className="bg-panel w-[40vw] md:w-[32vw] lg:w-[24vw] xl:w-[18vw] 2xl:w-[14vw] p-2 text-normal text-base sm:text-xl md:text-2xl rounded-2xl">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </>
                )}
              </div>
            ))}
            {loading && <AibouLoader />}
            {error && (
              <p className="text-center text-red-500 italic">{error}</p>
            )}
            <div ref={scrollEnd} />
          </div>

          {Preset && (
            <div className="flex flex-col gap-2 p-4">
              <p
                onClick={() => handleSent("Tell me more about Joven!")}
                className="bg-panel p-2 w-full rounded-md text-normal font-normal text-center cursor-pointer"
              >
                Tell me more about Joven!
              </p>
              <p
                onClick={() => handleSent("What is Joven's tech-stack?")}
                className="bg-panel p-2 w-full rounded-md text-normal font-normal text-center cursor-pointer"
              >
                What is Joven's tech-stack?
              </p>
              <p
                onClick={() => handleSent("Why are you called AIbou?")}
                className="bg-panel p-2 w-full rounded-md text-normal font-normal text-center cursor-pointer"
              >
                Why are you called AIbou?
              </p>
            </div>
          )}

          <div className="flex bg-panel justify-between gap-2 items-center p-2">
            <textarea
              className="w-full h-12 bg-brand p-2 rounded-md"
              placeholder="hi, im aibou! how can i assist?"
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (!loading) handleSent();
                }
              }}
              disabled={loading}
            />
            <FiSend
              onClick={() => {
                if (!loading) handleSent();
              }}
              className="text-5xl text-normal bg-brand p-2 rounded-md hover:scale-110 active:scale-110"
            />
          </div>
        </div>
      )}
    </>
  );
}
