import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">

      <Link
        href="/category"
        className="
          group
          relative
          flex
          flex-col
          overflow-hidden
          rounded-[2.5rem]
          bg-primary
          shadow-2xl
          transition-all
          duration-700
          hover:-translate-y-2
          lg:flex-row-reverse
        "
      >

        {/* glow orbs */}
        <div className="pointer-events-none absolute inset-0 z-[1]">

          <div
            className="
              absolute
              -top-24
              -right-24
              h-[350px]
              w-[350px]
              rounded-full
              bg-gradient-to-br
              from-cyan-400/20
              to-pink-500/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-24
              left-10
              h-[280px]
              w-[280px]
              rounded-full
              bg-primary/20
              blur-3xl
            "
          />

        </div>

        {/* ======================
            IMAGE SIDE
        ====================== */}

        <div
          className="
            relative
            z-10
            aspect-[16/10]
            w-full
            overflow-hidden
            lg:w-1/2
          "
        >
          <Image
            src="/promo-outdoor.webp"
            alt="Promo"
            fill
            className="
              object-cover
              transition
              duration-1000
              group-hover:scale-110
              group-hover:saturate-125
            "
          />
        </div>

        {/* ======================
            GLASS PANEL
        ====================== */}

        <div
          className="
            relative
            z-20
            flex
            items-center
            p-6
            lg:w-1/2
            lg:p-10
          "
        >
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[2rem]
              border
              border-white/20
              bg-white/10
              p-8
              backdrop-blur-3xl
              shadow-2xl
              transition
              duration-500
              group-hover:-translate-y-1
            "
          >

            {/* glass shine */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[2rem]
                bg-gradient-to-br
                from-white/20
                via-transparent
                to-transparent
              "
            />

            {/* animated light reflection */}
            <div
              className="
                absolute
                -left-[40%]
                top-0
                h-full
                w-[50%]
                rotate-12
                bg-white/10
                blur-3xl
                transition-all
                duration-[1400ms]
                group-hover:left-[120%]
              "
            />

            <div className="relative z-10">

              <span
                className="
                  inline-block
                  rounded-full
                  bg-white/15
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-xl
                "
              >
                LIMITED OFFER
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  leading-none
                  text-white
                "
              >
                Save up to{" "}
                <span className="text-secondary">
                  50%
                </span>{" "}
                on summer toys
              </h2>

              <p className="mt-5 text-white/80">
                Discover exclusive offers across toys,
                games and outdoor adventures.
              </p>

              <button
                className="
                  group/button
                  mt-8
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
                  cursor-pointer
                "
              >
                Shop now

                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    transition
                    group-hover/button:-rotate-45
                  "
                >
                  <ArrowRight className="size-5" />
                </span>

              </button>

            </div>

          </div>
        </div>

      </Link>

    </section>
  )
}