import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Building & Blocks",
    count: "420+ toys",
    img: "/product-blocks.webp",
    tone: "from-chart-3/20 to-chart-3/5",
    span: "col-span-2 lg:row-span-2",
    large: true,
  },
  {
    name: "Soft & Plush",
    count: "260+ toys",
    img: "/product-plush.webp",
    tone: "from-chart-5/20 to-chart-5/5",
  },
  {
    name: "Cars & Vehicles",
    count: "310+ toys",
    img: "/product-car.webp",
    tone: "from-chart-1/20 to-chart-1/5",
  },
  {
    name: "Arts & Crafts",
    count: "190+ toys",
    img: "/product-art.webp",
    tone: "from-chart-4/20 to-chart-4/5",
  },
  {
    name: "Games & Puzzles",
    count: "230+ toys",
    img: "/product-games.webp",
    tone: "from-chart-2/20 to-chart-2/5",
  },
]

export function CategoryGrid() {
  return (
    <section
      id="categories"
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 lg:py-20"
    >

      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10">

        <div className="mb-8 flex items-end justify-between gap-4">

          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
              Browse the shelves
            </p>

            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Shop by category
            </h2>
          </div>

          <a
          href="/category"
          className="hidden shrink-0 items-center gap-1 rounded-full border-2 border-border bg-card px-5 py-2.5 text-sm font-bold text-foreground transition hover:border-primary sm:inline-flex"
        >
          View all
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 lg:grid-cols-4">

          {categories.map((cat) => (

            <a
              key={cat.name}
              href="/category"
              className={`
              group
              relative
              overflow-hidden
              rounded-[2rem]

              border border-white/15

              backdrop-blur-2xl

              shadow-[0_10px_20px_rgba(0,0,0,.12)]

              transition-all
              duration-500

              hover:-translate-y-2
              hover:shadow-[0_15px_30px_rgba(0,0,0,.18)]

              ${cat.span ?? ""}
            `}
            >

              {/* colour glass tint */}
              <div className={`
                absolute inset-0
                bg-gradient-to-br
                ${cat.tone}
              `} />

              {/* glass layer */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-br
                from-white/35
                via-white/10
                to-transparent
              "
              />

              {/* glossy reflection */}
              <div
                className="
                absolute inset-0

                opacity-0
                group-hover:opacity-100

                transition
                duration-700

                bg-gradient-to-tr
                from-white/20
                via-transparent
                to-transparent
              "
              />

              {/* orb glow */}
              <div
                className="
                absolute
                -top-12
                -right-12
                h-32
                w-32

                rounded-full
                bg-white/20

                blur-3xl

                transition
                duration-700

                group-hover:scale-125
              "
              />

              {/* inner highlight */}
              <div
                className="
                absolute
                inset-0
                rounded-[2rem]

                ring-1
                ring-white/10

                shadow-inner
              "
              />

              <div className="relative z-10 flex h-full flex-col justify-between p-5">

                <div className="flex items-start justify-between">

                  <div>
                    <h3
                      className="
                      text-lg
                      font-black
                      text-foreground
                    "
                    >
                      {cat.name}
                    </h3>
                  </div>

                  <span
                    className="
                    grid
                    size-10
                    place-items-center

                    rounded-full

                    border border-white/20
                    bg-white/30

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    group-hover:bg-primary
                    group-hover:text-primary-foreground
                    group-hover:rotate-45
                  "
                  >
                    <ArrowUpRight className="size-4" />
                  </span>

                </div>

                <Image
                  src={cat.img || "/placeholder.svg"}
                  alt={cat.name + " image"}
                  width={cat.large ? 420 : 220}
                  height={cat.large ? 420 : 220}
                  className={`
                    relative
                    mx-auto
                    object-contain
                    drop-shadow-xl
                    rounded-lg

                    transition-all
                    duration-700

                    group-hover:scale-110
                    group-hover:rotate-2

                    ${
                      cat.large
                        ? "size-52 lg:size-64"
                        : "size-28"
                    }
                  `}
                />

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  )
}