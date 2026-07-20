import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      <Link href="#">

        <div className="
          relative
          flex
          flex-col
          overflow-hidden
          shadow-2xl
          bg-[#1E042D]
          lg:flex-row
          group
        ">

          {/* =========================
              GLASS PANEL (1/3)
          ========================== */}
          <div className="
            relative
            z-20
            flex
            flex-col
            justify-center
            p-8
            lg:w-1/3
            lg:p-14
          ">

            {/* glass card */}
            <div className="

              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/20
              bg-white/10
              backdrop-blur-3xl
              p-8
              shadow-xl
              transition-all
              duration-500
              group-hover:-translate-y-1
            ">

              {/* glass shine */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[2rem]
                  bg-gradient-to-br
                  from-white/25
                  via-transparent
                  to-transparent
                "
              />


              {/* animated reflection sweep */}
              <div
                className="
                  pointer-events-none
                  absolute

                  -left-[45%]
                  top-0

                  h-full
                  w-[45%]

                  rotate-12

                  bg-white/20

                  blur-3xl

                  transition-all
                  duration-[1400ms]
                  ease-out

                  group-hover:left-[130%]
                "
              />

              <h2 className="text-4xl font-black leading-[1] text-white">
                Pre-Order <br />
                <span className="text-primary">GTA VI</span>
              </h2>

              <p className="mt-5 text-white/80">
                Secure your copy early and be first to experience the next chapter.
              </p>

              {/* CTA */}
              <button className="
                cursor-pointer
                group
                mt-7
                flex
                items-center
                gap-4
                rounded-full
                bg-white/20
                px-3
                py-3
                pl-6
                font-bold
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/30
              ">
                Pre-Order

                <span className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  transition
                  group-hover:-rotate-45
                ">
                  <ArrowRight className="size-5" />
                </span>

              </button>

            </div>
          </div>


          <div className="relative lg:w-2/3">

            <div className="relative h-[420px] lg:h-[700px]">

              <Image
                src="/2026-p7-gta-preorder-pod-530x530.webp"
                alt="GTA VI"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) calc((100vw - 48px) / 2), (max-width: 1024px) 50vw, 25vw"
              />

              {/* overlays */}

              {/* glow blobs */}
              <div className="absolute -left-20 top-10 h-[400px] w-[400px] rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-pink-500/20 blur-3xl" />

            </div>

            {/* floating badge */}
            <div className="absolute right-10 top-10 block">

            <div className="rounded-full bg-primary px-6 py-6 text-center text-primary-foreground shadow-2xl aspect-square flex flex-col items-center justify-center">
              <div className="text-2xl lg:text-5xl font-black">50%</div>
              <div className="text-xs font-bold tracking-[0.3em]">OFF</div>
            </div>

          </div>

          <div className="absolute bottom-5 lg:bottom-10 right-5 lg:right-20 rotate-[-8deg] block">

            <div className="rounded-2xl bg-yellow-400 px-5 py-4 font-black text-black shadow-xl lg:text-lg">
              LIMITED TIME
              <div className="text-xs lg:text-sm font-medium opacity-70">Ends soon</div>
            </div>

          </div>

          </div>

        </div>
      </Link>

    </section>
  )
}