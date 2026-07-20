"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type Product = {
  description: string
  features: string[]
  age: string
  sku: string
  brand: string
  stock: string
  delivery: string
}

type Props = {
  product: Product
}

export function ProductAccordion({
  product,
}: Props) {
  const [open, setOpen] = useState<string | null>("description")

  const sections = [
    {
      id: "description",
      title: "Description",
      content: (
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      ),
    },

    {
      id: "features",
      title: "Features",
      content: (
        <ul className="space-y-3">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="
                flex
                items-center
                gap-3
                text-muted-foreground
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-primary
                "
              />

              {feature}
            </li>
          ))}
        </ul>
      ),
    },

    {
      id: "specifications",
      title: "Specifications",
      content: (
        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
          "
        >
          <Specification
            label="Brand"
            value={product.brand}
          />

          <Specification
            label="Age"
            value={product.age}
          />

          <Specification
            label="SKU"
            value={product.sku}
          />

          <Specification
            label="Availability"
            value={product.stock}
          />
        </div>
      ),
    },

    {
      id: "delivery",
      title: "Delivery & Returns",
      content: (
        <p className="text-muted-foreground leading-relaxed">
          {product.delivery}
          <br />
          <br />
          Easy returns available. See our delivery and returns
          information for full details.
        </p>
      ),
    },
  ]


  return (
    <section
      className="
        rounded-[2rem]

        border border-white/20

        bg-white/60

        backdrop-blur-2xl

        shadow-[0_20px_60px_rgba(0,0,0,.08)]

        overflow-hidden

        dark:bg-background/75
        
      "
    >

      {sections.map((section) => {
        const isOpen = open === section.id

        return (
          <div
            key={section.id}
            className="
              border-b
              border-black/5
              last:border-none
              dark:border-white/10
            "
          >

            <button
              type="button"
              onClick={() =>
                setOpen(
                  isOpen
                    ? null
                    : section.id
                )
              }
              className="
                flex
                w-full
                items-center
                justify-between

                px-6
                py-5

                text-left

                font-black
                text-lg

                transition

                hover:bg-white/40
                cursor-pointer
              "
            >

              {section.title}

              <ChevronDown
                className={`
                  size-5
                  transition-transform
                  duration-300

                  ${
                    isOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />

            </button>


            <div
              className={`
                grid
                transition-all
                duration-300

                ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }
              `}
            >

              <div className="overflow-hidden">

                <div
                  className="
                    px-6
                    pb-6
                  "
                >
                  {section.content}
                </div>

              </div>

            </div>

          </div>
        )
      })}

    </section>
  )
}


function Specification({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div
      className="
        rounded-2xl

        border border-white/20

        bg-white/40

        p-4

        backdrop-blur-xl
      "
    >
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 font-bold">
        {value}
      </p>
    </div>
  )
}