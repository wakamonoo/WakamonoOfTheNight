import { MdMessage } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { presetInfo } from "./presetInfo";
import AibouLoader from "./aibouLoader";
import ReactMarkdown from "react-markdown";

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

  useEffect(() => {
    const lastText = sentText[sentText.length - 1];
    if (scrollEnd.current && lastText?.sender === "user") {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollStart.current && lastText?.sender === "aibou") {
      scrollStart.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [sentText]);

  useEffect(() => {
    function handleOutClick(e) {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleOutClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutClick);
    }
  }, []);

  async function handleSent(textToSend) {
  const text = textToSend ?? draftText.trim();
  if (text === "") return;

  setSentText((prev) => [...prev, { sender: "user", text }]);
  setDraftText("");
  setLoading(true);
  setError(null);
  setPreset(false);

  try {
    // Prepare messages array as before
    const messages = [
      ...presetInfo,
      ...sentText.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      {
        role: "user",
        content: text,
      },
    ];

    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

    const data = await response.json();

    if (response.ok && data.choices && data.choices.length > 0) {
      const aiText = data.choices[0].message.content.trim();
      setSentText((prev) => [...prev, { sender: "aibou", text: aiText }]);
    } else {
      setSentText((prev) => [...prev, { sender: "aibou", text: "Sorry, server error!" }]);
      setError(data.error || "Unexpected API error");
    }
  } catch (err) {
    setError("Error contacting AI service!");
    setSentText((prev) => [...prev, { sender: "aibou", text: "Error contacting AI service!" }]);
    console.error(err);
  } finally {
    setLoading(false);
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
        <div
          ref={divRef}
          className="fixed flex flex-col bottom-22 right-4 z-100 bg-army shadow-2xl w-80 h-110 rounded-2xl overflow-hidden"
        >
          <div className="p-2 text-xl text-header flex justify-center items-center gap-4 w-full h-8 bg-panel">
            <MdMessage className="font-heading" />
            <p className=" font-heading">AIbou</p>
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
                    <p className="bg-brand w-50 p-2 text-normal rounded-2xl">
                      {msg.text}
                    </p>
                    <FiUser className="text-4xl bg-brand rounded-2xl p-2" />
                  </>
                ) : (
                  <>
                    <div ref={scrollStart} />
                    <MdMessage className="text-4xl bg-panel rounded-2xl p-2" />
                    <div className="bg-panel w-50 p-2 text-normal rounded-2xl">
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
                onClick={() => handleSent("What is his tech-stack?")}
                className="bg-panel p-2 w-full rounded-md text-normal font-normal text-center cursor-pointer"
              >
                What is his tech-stack?
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
              placeholder="sorry, still working on backend"
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
              className="text-5xl text-normal bg-brand p-2 rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
}
