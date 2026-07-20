"use client"

import { useState } from "react"
import { ShoppingBag, Plus, Minus } from "lucide-react"
import { useCart } from "./cart-provider"

type Product = {
  name: string
  price: number
  stock: string
}

type Props = {
  product: Product
}

export function StickyBuyBar({
  product,
}: Props) {

  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const { addToCart } = useCart()


  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0

        z-50

        border-t
        border-white/20

        bg-white/70

        backdrop-blur-2xl

        shadow-[0_-10px_40px_rgba(0,0,0,.12)]
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl

          items-center
          justify-between

          gap-4

          px-4
          py-4
        "
      >

        {/* PRODUCT INFO */}

        <div
          className="
            hidden
            sm:block
          "
        >

          <p
            className="
              font-black
              text-foreground
              line-clamp-1
            "
          >
            {product.name}
          </p>


          <p
            className="
              text-sm
              font-bold
              text-primary
            "
          >
            {product.stock}
          </p>

        </div>


        {/* QUANTITY */}

        <div
          className="
            flex
            items-center

            rounded-full

            border
            border-white/20

            bg-white/50

            backdrop-blur-xl

            p-1
          "
        >

          <button
            type="button"
            onClick={() =>
              setQuantity(
                Math.max(1, quantity - 1)
              )
            }
            className="
              grid
              size-9
              place-items-center

              rounded-full

              transition

              hover:bg-white
              cursor-pointer
            "
          >
            <Minus className="size-4" />
            <span className="sr-only">Remove</span>
          </button>


          <span
            className="
              w-10
              text-center

              font-black
            "
          >
            {quantity}
          </span>


          <button
            type="button"
            onClick={() =>
              setQuantity(quantity + 1)
            }
            className="
              grid
              size-9
              place-items-center

              rounded-full

              transition

              hover:bg-white
              cursor-pointer
            "
          >
            <Plus className="size-4" />
            <span className="sr-only">Add</span>
          </button>

        </div>


        {/* PRICE */}

        <div
          className="
            hidden
            md:block
          "
        >

          <p
            className="
              text-2xl
              font-black
            "
          >
            £{product.price.toFixed(2)}
          </p>

        </div>


        {/* BUTTON */}

        <button
          type="button"
          onClick={() => {
            addToCart({
              id: product.name,
              name: product.name,
              img: "https://www.thetoyshop.com/medias/515Wx515H-582561-Primary?context=bWFzdGVyfGltYWdlc3wxMDkwODd8aW1hZ2UvanBlZ3xhR0poTDJnMk5pOHhNamM0TkRRM056RTNOVGd6T0M4MU1UVlhlRFV4TlVoZk5UZ3lOVFl4WDFCeWFXMWhjbmt8Nzg3Y2U2NmE3MTE4MTllYzRjNjY2NWE4ODQyODU3YjFmOWFhMjFkMjFiNDA2OTU0MTZhNGZmMDYwZWUzYTMyZQ",
              price: product.price,
              quantity,
            })

            setAdded(true)

            setTimeout(() => {
              setAdded(false)
            }, 1500)
          }}
          className={`
            flex
            items-center
            gap-2

            rounded-full

            px-6
            py-3

            font-black

            transition-all

            hover:scale-105
            cursor-pointer

            ${
              added
                ? "bg-green-500 text-white"
                : "bg-primary text-primary-foreground"
            }
          `}
        >

          <ShoppingBag className="size-5" />

          {
            added
              ? "Added"
              : "Add to Basket"
          }

        </button>


      </div>

    </div>
  )
}