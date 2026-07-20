"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Search,
  Share2,
} from "lucide-react"

type Props = {
  images: string[]
  badge?: string
}

export function ProductGallery({
  images,
  badge,
}: Props) {
  const [selected, setSelected] = useState(0)
  const [liked, setLiked] = useState(false)
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [zoomOpen, setZoomOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const start = useRef({ x: 0, y: 0 })
  const [swipeOffset, setSwipeOffset] = useState(0)
  const [animating, setAnimating] = useState(false)

  const swipeStart = useRef(0)
  const swiping = useRef(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  const next = () => {
  setSwipeOffset(
    -(galleryRef.current?.offsetWidth || 0)
  )

  setAnimating(true)

  setTimeout(() => {
    setSelected((current) => (current + 1) % images.length)
    setSwipeOffset(0)
    setAnimating(false)
  }, 300)
}

  const prev = () => {
  setSwipeOffset(
    galleryRef.current?.offsetWidth || 0
  )

  setAnimating(true)

  setTimeout(() => {
    setSelected(
      (current) =>
        (current - 1 + images.length) % images.length
    )

    setSwipeOffset(0)
    setAnimating(false)
  }, 300)
}

    useEffect(() => {
      const thumbnail = thumbnailRefs.current[selected]

      if (!thumbnail) return

      const parent = thumbnail.parentElement

      if (!parent) return

      const thumbnailLeft = thumbnail.offsetLeft
      const thumbnailWidth = thumbnail.offsetWidth
      const parentWidth = parent.offsetWidth

      parent.scrollTo({
        left:
          thumbnailLeft -
          parentWidth / 2 +
          thumbnailWidth / 2,
        behavior: "smooth",
      })
    }, [selected])

  useEffect(() => {
  const preload = [
    images[(selected - 1 + images.length) % images.length],
    images[(selected + 1) % images.length],
  ]

  preload.forEach((src) => {
    const img = new window.Image()
    img.src = src
  })
}, [selected, images])

  return (
    <div className="space-y-4">

      {/* MAIN IMAGE */}

      <div
        className="
          group
          relative
          overflow-hidden

          rounded-[36px]

          border
          border-white/20

          bg-gradient-to-br
          from-white
          via-white
          to-slate-50

          shadow-[0_30px_80px_rgba(0,0,0,.10)]

          aspect-square
        "
      >

        {/* soft glow */}

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        {/* badge */}

        {badge && (
          <span
            className="
              absolute
              left-3
              top-4
              z-20

              rounded-full

              bg-primary

              px-5
              py-2

              text-xs
              font-black
              text-white
            "
          >
            {badge}
          </span>
        )}

        {/* image count */}

        <span
          className="
            absolute
            bottom-4
            left-3
            z-20

            rounded-full

            bg-white/70
            backdrop-blur-xl

            px-4
            py-2

            text-sm
            font-bold
          "
        >
          {selected + 1} / {images.length}
        </span>

        {/* action buttons */}

        <div className="absolute right-3 top-4 z-20 flex flex-col gap-3">

          <button
            onClick={() => setLiked(!liked)}
            className="
              grid
              h-12
              w-12
              place-items-center

              rounded-full

              border
              border-white/30

              bg-white/70
              backdrop-blur-xl

              transition
              hover:scale-110
              cursor-pointer
            "
          >
            <Heart
              className={`size-5 ${
                liked
                  ? "fill-primary text-primary"
                  : ""
              }`}
            />
            <span className="sr-only">Add to wishlist</span>
          </button>

          <button
            onClick={() => {
              if (zoomOpen) {
                setPosition({ x: 0, y: 0 })
              }

              setZoomOpen(!zoomOpen)
            }}
            className="
              grid
              h-12
              w-12
              place-items-center
              rounded-full
              border
              border-white/30
              bg-white/70
              backdrop-blur-xl
              transition
              hover:scale-110
              cursor-pointer
            "
          >
            <Search className="size-5" />
            <span className="sr-only">Zoom</span>
          </button>

          <button
            onClick={async () => {
              const shareData = {
                title: document.title,
                text: "Check out this product",
                url: window.location.href,
              }

              try {
                if (navigator.share) {
                  await navigator.share(shareData)
                } else {
                  await navigator.clipboard.writeText(window.location.href)
                  alert("Product link copied to clipboard!")
                }
              } catch (err) {
                // user cancelled
              }
            }}
            className="
              grid
              h-12
              w-12
              place-items-center
              rounded-full
              border
              border-white/30
              bg-white/70
              backdrop-blur-xl
              transition
              hover:scale-110
              cursor-pointer
            "
          >
            <Share2 className="size-5" />
            <span className="sr-only">Share</span>
          </button>

        </div>

        {/* previous */}

        <button
          onClick={prev}
          className="
            absolute
            left-2
            top-1/2

            z-20

            hidden
            lg:grid

            h-14
            w-14

            -translate-y-1/2

            place-items-center

            rounded-full

            border
            border-white/30

            bg-white/70
            backdrop-blur-xl

            transition
            hover:scale-110
            cursor-pointer
          "
        >
          <ChevronLeft />
          <span className="sr-only">Previous</span>
        </button>

        {/* next */}

        <button
          onClick={next}
          className="
            absolute
            right-2
            top-1/2

            z-20

            hidden
            lg:grid

            h-14
            w-14

            -translate-y-1/2

            place-items-center

            rounded-full

            border
            border-white/30

            bg-white/70
            backdrop-blur-xl

            transition
            hover:scale-110
            cursor-pointer
          "
        >
          <ChevronRight />
          <span className="sr-only">Next</span>
        </button>

        {/* image */}

        <div
        ref={galleryRef}
  className={`relative h-full w-full ${
    zoomOpen ? "cursor-grab active:cursor-grabbing" : ""
  }`}
   style={{
    touchAction: zoomOpen ? "none" : "pan-y",
  }}
  onMouseDown={(e) => {
  if (zoomOpen) {
    setDragging(true)

    start.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }

    return
  }

  swipeStart.current = e.clientX
  swiping.current = true
}}

onMouseMove={(e) => {
  if (zoomOpen) {
    if (!dragging) return

    setPosition({
      x: e.clientX - start.current.x,
      y: e.clientY - start.current.y,
    })

    return
  }

  if (!swiping.current) return

  const delta = e.clientX - swipeStart.current

  setSwipeOffset(delta)
}}

onMouseUp={() => {
  if (zoomOpen) {
    setDragging(false)
    return
  }

  if (!swiping.current) return

  if (swipeOffset < -80) {
    next()
  } else if (swipeOffset > 80) {
    prev()
  } else {
    setAnimating(true)
    setSwipeOffset(0)

    setTimeout(() => {
      setAnimating(false)
    }, 300)
  }

  swiping.current = false
}}

onMouseLeave={() => {
  if (zoomOpen) {
    setDragging(false)
    return
  }

  if (swiping.current) {
    setSwipeOffset(0)
  }

  swiping.current = false
}}
  
onTouchStart={(e) => {
  const touch = e.touches[0]

  if (zoomOpen) {
    start.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    }

    setDragging(true)
    return
  }

  swipeStart.current = touch.clientX
  swiping.current = true
}}

onTouchMove={(e) => {
  const touch = e.touches[0]

  if (zoomOpen) {
    if (!dragging) return

    setPosition({
      x: touch.clientX - start.current.x,
      y: touch.clientY - start.current.y,
    })

    return
  }

  if (!swiping.current) return

  const delta =
    touch.clientX - swipeStart.current

  setSwipeOffset(delta)
}}

onTouchEnd={() => {
  if (zoomOpen) {
    setDragging(false)
    return
  }

  if (!swiping.current) return

  if (swipeOffset < -80) {
    next()
  } else if (swipeOffset > 80) {
    prev()
  } else {
    setAnimating(true)
    setSwipeOffset(0)

    setTimeout(() => {
      setAnimating(false)
    }, 300)
  }

  swiping.current = false
}}
>

         <div
  className={`
    flex
    h-full
    w-[300%]
    will-change-transform

    ${animating ? "transition-transform duration-300 ease-out" : ""}
  `}
  style={{
    transform: `translateX(calc(-33.333% + ${swipeOffset}px))`,
  }}
>
  {[

    images[
      (selected - 1 + images.length) % images.length
    ],

    images[selected],

    images[
      (selected + 1) % images.length
    ],

  ].map((img, index) => (
    <div
      key={img}
      className="relative h-full w-1/3 shrink-0"
    >
      <Image
  src={img}
  alt=""
  fill
  draggable={false}
  priority={index === 1}
  className={`object-contain select-none cursor-grab ${
    zoomOpen && index === 1
      ? "cursor-grab active:cursor-grabbing"
      : ""
  }`}
  style={{
    transform:
      zoomOpen && index === 1
        ? `translate(${position.x}px, ${position.y}px) scale(2)`
        : "translate(0,0) scale(1)",
    transition:
      dragging || swipeOffset !== 0
        ? "none"
        : "transform 300ms ease",
  }}
/>
    </div>
  ))}

</div>

        </div>

      </div>

      {/* THUMBNAILS */}

        <div
          className="
            flex
            gap-4

            overflow-x-auto

            justify-start
            md:justify-center

            px-2
            pb-2
            pt-2

            snap-x
            snap-mandatory

            scrollbar-hide

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          {images.map((img, i) => (

            <button
              key={i}
              ref={(el) => {
                thumbnailRefs.current[i] = el
              }}
              onClick={() => setSelected(i)}
              className={`
                relative

                shrink-0
                snap-center

                h-20
                w-20

                md:h-24
                md:w-24

                overflow-hidden

                rounded-[24px]

                border-2

                bg-white/80

                backdrop-blur-xl

                transition-all
                duration-300
                cursor-pointer

                ${
                  selected === i
                    ? `
                      border-primary
                      ring-4
                      ring-primary/20
                      scale-105
                      shadow-md
                    `
                    : `
                      border-white
                      hover:border-primary/40
                      hover:scale-105
                    `
                }
              `}
            >

              <Image
                src={img}
                alt=""
                fill
                draggable={false}
                className="object-contain select-none"
              />
              <span className="sr-only">Image {i + 1}</span>

            </button>

          ))}

        </div>

    </div>
  )
}