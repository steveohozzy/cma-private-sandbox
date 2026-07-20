"use client"

import { useState } from "react"
import { Mail, Check } from "lucide-react"

export function Newsletter() {
  const [sent, setSent] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:py-20">

      <div
        className="
          relative
          overflow-hidden

          rounded-[2.5rem]
          border border-white/15

          bg-gradient-to-br
          from-[#b1002b]
          via-secondary
          to-[#b1002b]

          px-6 py-12 text-center sm:px-12

          shadow-[0_30px_90px_rgba(0,0,0,0.45)]
        "
      >

        {/* subtle top highlight ONLY */}
        <div className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-40
          bg-gradient-to-b
          from-white/10
          to-transparent
        " />

        {/* edge glow (kept small & directional) */}
        <div className="
          pointer-events-none
          absolute -top-24 -right-24
          h-72 w-72
          rounded-full
          bg-red-300/10
          blur-3xl
        " />

        <div className="
          pointer-events-none
          absolute -bottom-24 -left-24
          h-72 w-72
          rounded-full
          bg-black/30
          blur-3xl
        " />

        {/* =========================
            CONTENT
        ========================== */}

        <div className="relative z-10">

          <span className="
            mx-auto grid size-14 place-items-center
            rounded-2xl
            bg-white/10
            border border-white/20
            backdrop-blur-xl
            text-white
          ">
            <Mail className="size-7" />
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get £5 off your first order
          </h2>

          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-white/80">
            Join the Playtime Club for exclusive offers, new arrivals and expert
            play tips — straight to your inbox.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
          >

            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="
                w-full

                rounded-full
                border border-white/20

                bg-black/20
                backdrop-blur-xl

                px-5 py-3

                text-sm text-white
                placeholder:text-white/60

                outline-none
                focus:border-white/40
                focus:bg-black/30
              "
            />

            <button
              type="submit"
              className="
                inline-flex items-center justify-center gap-2

                rounded-full

                bg-white/15
                border border-white/20
                backdrop-blur-xl

                px-7 py-2

                text-base font-bold text-white

                transition
                hover:bg-white/25
                hover:scale-[1.02]

                whitespace-nowrap

                cursor-pointer
              "
            >
              {sent ? (
                <>
                  <Check className="size-5" />
                  Subscribed
                </>
              ) : (
                "Sign me up"
              )}
            </button>

          </form>

          <p className="mt-4 text-xs text-white/70">
            No spam, just play. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  )
}