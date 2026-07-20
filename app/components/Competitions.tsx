"use client"

import Image from "next/image"

const competitions = [
  {
    title: "Toy Story 5 Competition",
    href: "https://www.thetoyshop.com/toy-story-prize-draw",
    image:
      "https://www.thetoyshop.com/medias/2026-p6-toy-story-5-competition-comp-tile-944x200h.jpg?context=bWFzdGVyfHJvb3R8ODMwNjF8aW1hZ2UvanBlZ3xhREk1TDJneVl5OHhNamMxTURrNE1EQTROemd6T0M4eU1ESTJMWEEyTFhSdmVTMXpkRzl5ZVMwMUxXTnZiWEJsZEdsMGFXOXVMV052YlhBdGRHbHNaUzA1TkRSNE1qQXdhQzVxY0djfGYwZjczOWIyNjc5Yzg5MDllMTZkYTM3YzY0OTljMzI5NzY1MGUwMjcxNGQxZDEwYzgyNWQ4OTRmM2Y3NDUwNGI",
  },
  {
    title: "Hot Wheels Competition",
    href: "https://www.thetoyshop.com/store-finder",
    image:
      "https://www.thetoyshop.com/medias/Web-Competition-Tile-w944x200h-WIN-ACTA-UPDATES.jpg?context=bWFzdGVyfHJvb3R8Mzc0MTd8aW1hZ2UvanBlZ3xhRGd5TDJnd1pTOHhNamM0T1RnMk1EQTNNelV3TWk5WFpXSXRRMjl0Y0dWMGFYUnBiMjR0Vkdsc1pTMTNPVFEwZURJd01HZ3RWMGxPTFVGRFZFRXRWVkJFUVZSRlV5NXFjR2N8YjQ1NzRhNGZhNTA0NmFmM2M0ZjZlNjBhZmE0YmRhZmE1Yjk1YmM3ODM5ZDViNGIxOTk4YTMyYjVlOWE1YmIzNA",
  },
]

export function CompetitionBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-4">

      <div className="grid gap-6 lg:grid-cols-2">

        {competitions.map((banner) => (
          <a
            key={banner.title}
            href={banner.href}
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]

              border
              border-white/20

              bg-white/5
              backdrop-blur-xl

              shadow-xl

              transition-all
              duration-500

              hover:-translate-y-2
              hover:shadow-2xl
            "
          >

            {/* glass shine layer */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-20
                opacity-0
                transition
                duration-700
                group-hover:opacity-100
              "
            >
              <div
                className="
                  absolute
                  -left-[150%]
                  top-0
                  h-full
                  w-[60%]

                  rotate-12

                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent

                  transition-all
                  duration-1000
                  group-hover:left-[150%]
                "
              />
            </div>

            {/* top gloss */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                h-[40%]
                z-10

                bg-gradient-to-b
                from-white/20
                to-transparent
              "
            />

            {/* glow orb */}
            <div
              className="
                absolute
                -right-10
                -top-10
                h-40
                w-40
                rounded-full
                bg-primary/20
                blur-3xl
              "
            />

            {/* image */}
            <div className="relative aspect-[944/200]">

              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

          </a>
        ))}

      </div>

    </section>
  )
}