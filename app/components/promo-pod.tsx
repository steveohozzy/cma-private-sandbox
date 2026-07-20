import Image from "next/image"
import { ArrowRight } from "lucide-react"

type Props = {
  title: string
  image: string
  href: string
  cta?: string
  dataPromotionIndex?: string
  dataPromotionName?: string
  background?: string
}

export function PromoPod({
  title,
  image,
  href,
  cta = "Shop now",
  dataPromotionIndex,
  dataPromotionName,
  background,
}: Props) {
  return (
    <a
      href={href}
      data-promotion-index={dataPromotionIndex}
      data-promotion-name={dataPromotionName}
      className="
        relative
        group
        flex
        min-w-[280px]
        max-w-[340px]
        flex-col
        overflow-hidden
        rounded-[28px]
        bg-[#111]
        transition
        snap-start
        min-h-[520px]
        shadow-[0_10px_20px_rgba(0,0,0,.22)]
        mb-4
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_15px_30px_rgba(0,0,0,.38)]
        
      "
    >
      {/* IMAGE */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover scale-[1.03] transition duration-700 group-hover:scale-110"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/5 to-transparent" />
      </div>

      {/* glow orb */}
      <div
        className="
          absolute
          -top-20
          -right-20
          h-48
          w-48
          rounded-full
          bg-gradient-to-br
          from-cyan-400/30
          to-pink-500/20
          blur-3xl
          opacity-70
          transition
          group-hover:scale-125
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 mt-auto p-5">
        <div
          className={`
            backdrop-blur-xl
            ${background ?? "bg-white/10"}
            border
            border-white/15
            rounded-2xl
            p-5
            shadow-lg
            `}
        >
          <h3 className="text-xl font-black leading-tight text-white">
            {title}
          </h3>

          <div className="mt-4 flex items-center justify-between text-white">
            <span className="text-sm font-bold">{cta}</span>

            <span
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                transition
                group-hover:translate-x-1
                group-hover:-rotate-45
              "
            >
              <ArrowRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}