"use client"

import { useState, useRef } from "react"
import { MessageCircle, X } from "lucide-react"
import Link from "next/link"

type Message = {
  role: "user" | "assistant"
  text: string
}

export default function Theo() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [status, setStatus] = useState<"idle" | "thinking">("idle")

  const esRef = useRef<EventSource | null>(null)

  function clearChat() {
    esRef.current?.close();
    setMessages([]);
    setInput("");
    setStatus("idle");
  }


  async function sendMessage() {
    if (!input.trim()) return

    const userMessage = input

    setMessages(prev => [
      ...prev,
      {
        role: "user",
        text: userMessage
      }
    ])

    setInput("")
    setStatus("thinking")


    const res = await fetch("/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: userMessage
      })
    })


    const { sessionId } = await res.json()


    esRef.current?.close()

    const es = new EventSource(
      `/api/session/${sessionId}`
    )

    esRef.current = es


    es.addEventListener("message", e => {
      const data = JSON.parse(e.data)

      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          text: data.text
        }
      ])
    })


    es.addEventListener("done", () => {
      setStatus("idle")
      es.close()
    })
  }


  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 h-[560px] w-[380px] rounded-3xl bg-white shadow-xl">

          <div className="flex items-center justify-between bg-primary p-4 text-white">
            <div className="font-semibold">
              🧸 Theo
            </div>

            <div className="flex items-center gap-2">

              <button
                onClick={clearChat}
                className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold hover:bg-white/30 transition cursor-pointer"
              >
                Clear chat
              </button>

              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                <X />
              </button>

            </div>
          </div>


          <div className="h-[430px] overflow-y-auto p-4">

            {messages.length === 0 && (
              <div className="rounded-2xl bg-gray-50 p-4 shadow-sm">

                <div className="mb-2 text-3xl">
                  🧸
                </div>

                <h3 className="font-bold text-primary text-lg">
                  Hi, I'm Theo!
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  I'm your personal toy shop assistant. I can help you find toys,
                  recommend gifts, discover the latest releases and answer questions
                  about products in our store.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  <button
                    onClick={() => setInput("Find me Hot Wheels")}
                    className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/20 cursor-pointer"
                  >
                    🏎️ Hot Wheels
                  </button>

                  <button
                    onClick={() => setInput("Show me LEGO sets")}
                    className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/20 cursor-pointer"
                  >
                    🧱 LEGO
                  </button>

                  <button
                    onClick={() => setInput("Gift ideas for a 5 year old")}
                    className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/20 cursor-pointer"
                  >
                    🎁 Gift ideas
                  </button>

                  <button
                    onClick={() => setInput("Show me teddy bears")}
                    className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/20 cursor-pointer"
                  >
                    🧸 Teddy bears
                  </button>

                </div>

              </div>
            )}

            {messages.map((m, i) => (
    <div
      key={i}
      className={
        m.role === "user"
          ? "text-right"
          : "text-left"
      }
    >
      <span
        className={
          m.role === "user"
            ? "inline-block rounded-xl bg-primary text-white p-3 m-1"
            : "inline-block rounded-xl bg-gray-100 p-3 m-1"
        }
      >
        {m.text
          .split(/(\[[^\]]+\]\(\/product\/[^\)]+\))/g)
          .map((part, index) => {
            const match = part.match(
              /\[([^\]]+)\]\((\/product\/[^\)]+)\)/
            );

            if (match) {
              return (
                <Link
                  key={index}
                  href={match[2]}
                  className="font-semibold underline text-primary"
                >
                  {match[1]}
                </Link>
              );
            }

            return <span key={index}>{part}</span>;
          })}
      </span>
    </div>
  ))}


            {status === "thinking" &&
              <p>Theo is thinking 🧸...</p>
            }

          </div>


          <div className="flex gap-2 border-t p-3">

            <input
              value={input}
              onChange={e=>setInput(e.target.value)}
              className="flex-1 rounded-full border px-4"
              placeholder="Ask Theo..."
              onKeyDown={e=>{
                if(e.key==="Enter") sendMessage()
              }}
            />

            <button
              onClick={sendMessage}
              className="rounded-full bg-primary px-4 text-white cursor-pointer"
            >
              Send
            </button>

          </div>

        </div>
      )}


      {!open &&
        <button
          onClick={()=>setOpen(true)}
          className="fixed bottom-6 right-6 size-16 rounded-full bg-primary text-white shadow-xl flex items-center justify-center cursor-pointer"
        >
          <MessageCircle />
        </button>
      }

    </>
  )
}