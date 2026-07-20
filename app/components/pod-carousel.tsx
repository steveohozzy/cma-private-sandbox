"use client"

import { useRef } from "react"
import { PromoPod } from "./promo-pod"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  {
    title: "Pre-Order Grand Theft Auto VI",
    image:
      "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "/category",
    background: "bg-primary/40",
  },
  {
    title: "Hot Wheels Mega Track Set",
    image:
      "https://www.thetoyshop.com/medias/2026-p8-nook-nooks-pod-500x500.jpg?context=bWFzdGVyfHJvb3R8MzAxMDg2fGltYWdlL2pwZWd8YURnMkwyZzBZUzh4TWpjNE1qQXhOekkwT1RNeE1DOHlNREkyTFhBNExXNXZiMnN0Ym05dmEzTXRjRzlrTFRVd01IZzFNREF1YW5Cbnw4ZjBiOGY0ZDljOGNmOTQxMTJjOWM4NDNhZDkxYjJmOGY0YmQ1N2NkYWFmMWNmZWY3Nzk5YzNlYTMzMzU0YTVj",
    href: "/category",
    background: "bg-pink-500/40",
  },
  {
    title: "LEGO City Adventures",
    image:
      "https://www.thetoyshop.com/medias/xootz-scooters-all.jpg?context=bWFzdGVyfHJvb3R8OTYzOTl8aW1hZ2UvanBlZ3xhR1EzTDJoaVpTOHhNalkwTXpnek9UWXdOamd4TkM5NGIyOTBlaUJ6WTI5dmRHVnljeUJoYkd3dWFuQm58MmZhNmE4NDdkNzMyNjhiOGJlYTJhM2Y1MjAzZDE1NDhkODAzNTNiNTNjOTllYmM2NjVlYjhjMjUxMDRmMjk4MQ",
    href: "/category",
    background: "bg-purple-500/40",
  },
  {
    title: "Limited Time Offers",
    image:
      "https://www.thetoyshop.com/medias/2026-p3-f1-pod-410x410.jpg?context=bWFzdGVyfHJvb3R8MTA5NDY4fGltYWdlL2pwZWd8YURBNEwyaGhaQzh4TWpjd056azJOamd4TWpFNU1DOHlNREkyTFhBekxXWXhMWEJ2WkMwME1UQjROREV3TG1wd1p3fGU1M2E4ODgxYjMzODQxYTFlYWFkNGU2YjZlM2JmZjJkZmYyMjU0ZGQ4ODkxNzllNjYzNjNjMGVjNGVhZjcwNzI",
    href: "/category",
    background: "bg-yellow-500/40",
  },
  {
    title: "LEGO City Adventures",
    image:
      "https://www.thetoyshop.com/medias/2026-fuggler-baddies-pod-500x500.jpg?context=bWFzdGVyfHJvb3R8MTU1MDE1fGltYWdlL2pwZWd8YUdVM0wyZzJOUzh4TWpjNU1qazROelU0TWpRNU5DOHlNREkyTFdaMVoyZHNaWEl0WW1Ga1pHbGxjeTF3YjJRdE5UQXdlRFV3TUM1cWNHY3xhZWVlNDJiMWFhOTU0MDkyYTY3Mjk4ZTI1MWQ3MjFhNjY0MDc1YmEyY2U3Nzk1MGQzYzhmOGIzMjQwM2Y2Yzk0",
    href: "/category",
    background: "bg-red-500/40",
  },
  {
    title: "LEGO City Adventures",
    image:
      "https://www.thetoyshop.com/medias/ENT-MoanaLA-Digital-BannersWeb-Pod-w500x500h.jpg?context=bWFzdGVyfHJvb3R8MTMwODMwfGltYWdlL2pwZWd8YURCbEwyaGlPUzh4TWpjME56Y3dORFV6TXpBeU1pOUZUbFJmVFc5aGJtRk1RVjlFYVdkcGRHRnNYMEpoYm01bGNuTlhaV0lnVUc5a0xYYzFNREI0TlRBd2FDNXFjR2N8N2ZlODI2MzExZjNlNTdmNmJhZDQxN2JhY2MyZDVlZmE4OGE2MDI0ZTc4YzEzOTUxMzAzOGUzMThjMTIyMTJmNg",
    href: "/category",
    background: "bg-blue-500/40",
  },
]

export function PodCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "next" | "prev") => {
    if (!scrollRef.current) return

    const container = scrollRef.current

    const cards =
      container.querySelectorAll<HTMLElement>("[data-pod]")

    if (!cards.length) return

    const cardWidth = cards[0].offsetWidth + 20

    const current = container.scrollLeft
    const max =
      container.scrollWidth - container.clientWidth

    const threshold = 50

    if (direction === "next") {
      // if at end → jump back to start
      if (current >= max - threshold) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        })
        return
      }

      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      })
    }

    if (direction === "prev") {
      // if at start → jump to last card
      if (current <= threshold) {
        container.scrollTo({
          left: max,
          behavior: "smooth",
        })
        return
      }

      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 pb-6">

      {/* header */}
      <div className="mb-4 flex items-end justify-between">

        <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Deals
          </h2>

        <a
          href="/category"
          className="hidden shrink-0 items-center gap-1 rounded-full border-2 border-border bg-card px-5 py-2.5 text-sm font-bold text-foreground transition hover:border-primary sm:inline-flex"
        >
          View all
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

      </div>

      <div className="relative">

        {/* left glass arrow */}
        <button
          onClick={() => scroll("prev")}
          className="
            absolute
            left-2
            top-1/2
            z-20
            hidden
            -translate-y-1/2
            lg:flex

            h-14
            w-14
            items-center
            justify-center

            rounded-full
            border
            border-white/50
            bg-white/30
            backdrop-blur-2xl

            shadow-lg

            transition
            hover:scale-110
            hover:bg-white/40
            cursor-pointer
          "
        >
          <ChevronLeft className="size-6" />
          <span className="sr-only">Previous</span>
        </button>

        {/* right glass arrow */}
        <button
          onClick={() => scroll("next")}
          className="
            absolute
            right-2
            top-1/2
            z-20
            hidden
            -translate-y-1/2
            lg:flex

            h-14
            w-14
            items-center
            justify-center

            rounded-full
            border
            border-white/50
            bg-white/30
            backdrop-blur-2xl

            shadow-lg

            transition
            hover:scale-110
            hover:bg-white/40
            cursor-pointer
          "
        >
          <ChevronRight className="size-6" />
          <span className="sr-only">Next</span>
        </button>

        {/* carousel */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-5
            overflow-x-auto
            pb-4
            scroll-smooth
            snap-x
            snap-mandatory
            pt-2

            cursor-grab
            active:cursor-grabbing

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {items.map((item, i) => (
            <div
              key={i}
              data-pod
              className="
                snap-start
                shrink-0
                w-[320px]
              "
            >
              <PromoPod
                title={item.title}
                image={item.image}
                href={item.href}
                cta="Shop now"
                dataPromotionIndex={String(i + 1)}
                dataPromotionName={item.title}
                background={item.background}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}