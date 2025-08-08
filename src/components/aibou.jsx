import { MdMessage } from "react-icons/md";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { presetInfo } from "./presetInfo";

export default function Aibou() {
  const [isOpen, setIsOpen] = useState(false);
  const [draftText, setDraftText] = useState("");
  const [sentText, setSentText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSent() {
    const text = draftText.trim();
    if (text !== "") {
      setSentText((prev) => [...prev, { sender: "user", text }]);
      setDraftText("");
      setLoading(true);
      setError(null);
    }
    try {
      const apikey = process.env.NEXT_PUBLIC_OPEN_ROUTER_API_KEY;
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apikey}`,
            "HTTP-Referer": "wakamonoo.vercel.app",
            "X-Title": "wakamonoofthenight",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-oss-20b",
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
            max_tokens: 512,
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        const aiText = data.choices[0].message.content.trim();
        setSentText((prev) => [...prev, { sender: "ai", text: aiText }]);
      } else {
        setSentText((prev) => [
          ...prev,
          { sender: "ai", text: "sumemasen, couldn't quite catch that!" },
        ]);
      }
    } catch (err) {
      setError("Error contacting aibou!");
      setSentText((prev) => [
        ...prev,
        { sender: "ai", text: "Error contacting aibou!" },
      ]);
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
        <div className="fixed flex flex-col bottom-22 right-4 z-100 bg-army shadow-2xl w-80 h-110 rounded-2xl overflow-hidden">
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
                    <MdMessage className="text-4xl bg-brand rounded-2xl p-2" />
                    <p className="bg-panel w-50 p-2 text-normal rounded-2xl">
                      {msg.text}
                    </p>
                  </>
                )}
              </div>
            ))}
            {loading && (
              <p className="text-center text-header italic">AI is typing...</p>
            )}
            {error && (
              <p className="text-center text-red-500 italic">{error}</p>
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
