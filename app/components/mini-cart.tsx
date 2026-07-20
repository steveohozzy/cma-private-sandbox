"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "./cart-provider"

export function MiniCart() {

  const {
    items,
    total,
    openMiniCart,
    setOpenMiniCart,
  } = useCart()


  if (!openMiniCart || items.length === 0) return null


  return (
    <div
      onMouseLeave={() => setOpenMiniCart(false)}
      className="
        absolute
        right-0
        top-14
        z-50

        w-96

        overflow-hidden

        rounded-[28px]

        border
        border-white/15

        bg-[rgba(8,16,32,.9)]

        backdrop-blur-3xl

        shadow-[0_40px_120px_rgba(0,0,0,.5)]

        p-6

        text-white
      "
    >

      {/* glass shine */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          rounded-[28px]

          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
        "
      />


      <div className="relative z-10">


        <h3
          className="
            mb-5
            text-xl
            font-black
            text-white
          "
        >
          Your basket
        </h3>


        <div className="space-y-4">

          {items.map((item) => (

            <div
              key={item.id}
              className="
                flex
                gap-4

                rounded-2xl
                bg-white/10
                p-3

                backdrop-blur-xl
              "
            >

              <div
                className="
                  relative
                  h-20
                  w-20

                  shrink-0
                "
              >

                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain"
                />

              </div>


              <div>

                <p className="font-bold text-white">
                  {item.name}
                </p>


                <p className="mt-1 text-sm text-white/80">
                  £{item.price.toFixed(2)}
                </p>


                <p className="text-xs text-white/60">
                  Qty: {item.quantity}
                </p>

              </div>


            </div>

          ))}

        </div>


        <div
          className="
            mt-6
            border-t
            border-white/20
            pt-5
          "
        >

          <div
            className="
              mb-5
              flex
              justify-between
              font-black
              text-white
            "
          >

            <span>
              Subtotal
            </span>


            <span>
              £{total.toFixed(2)}
            </span>

          </div>


          <Link
            href="/cart"
            className="
              block

              rounded-full

              bg-primary

              py-3

              text-center

              font-bold

              text-white

              transition

              hover:scale-[1.02]
            "
          >
            Go to checkout
          </Link>


        </div>


      </div>


    </div>
  )
}