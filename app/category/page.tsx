"use client"

import { useState } from "react"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { ProductCard, Product } from "../components/product-card"

const products: Product[] = [
  {
    name: "Rainbow Rocket Adventure Playset",
    img: "/product-rocket.webp",
    price: 24.99,
    wasPrice: 34.99,
    rating: 4.9,
    reviews: 812,
    brand: "LEGO",
    badge: "Bestseller",
  },
  {
    name: "Cuddle Club Super Soft Teddy Bear",
    img: "/product-plush.webp",
    price: 16.99,
    rating: 4.8,
    reviews: 1204,
    brand: "TONIES",
    badge: "New",
  },
  {
    name: "Little Builders Wooden Block Set",
    img: "/product-blocks.webp",
    price: 29.99,
    wasPrice: 39.99,
    rating: 4.9,
    reviews: 540,
    brand: "ADDO",
    badge: "-25%",
  },
  {
    name: "Speedy Racer Chunky Toy Car",
    img: "/product-car.webp",
    price: 12.99,
    rating: 4.7,
    reviews: 366,
    brand: "BARBIE",
  },
  {
    name: "Rainbow Rocket Adventure Playset",
    img: "/product-rocket.webp",
    price: 24.99,
    wasPrice: 34.99,
    rating: 4.9,
    reviews: 812,
    brand: "HOT WHEELS",
    badge: "Bestseller",
  },
  {
    name: "Cuddle Club Super Soft Teddy Bear",
    img: "/product-plush.webp",
    price: 16.99,
    rating: 4.8,
    reviews: 1204,
    brand: "ZURU",
    badge: "New",
  },
  {
    name: "Little Builders Wooden Block Set",
    img: "/product-blocks.webp",
    price: 29.99,
    wasPrice: 39.99,
    rating: 4.9,
    reviews: 540,
    brand: "LEGO",
    badge: "-25%",
  },
  {
    name: "Speedy Racer Chunky Toy Car",
    img: "/product-car.webp",
    price: 12.99,
    rating: 4.7,
    reviews: 366,
    brand: "ADDO",
  },
  {
    name: "Rainbow Rocket Adventure Playset",
    img: "/product-rocket.webp",
    price: 24.99,
    wasPrice: 34.99,
    rating: 4.9,
    reviews: 812,
    brand: "ELC",
    badge: "Bestseller",
  },
  {
    name: "Cuddle Club Super Soft Teddy Bear",
    img: "/product-plush.webp",
    price: 16.99,
    rating: 4.8,
    reviews: 1204,
    brand: "HOT WHEELS",
    badge: "New",
  },
  {
    name: "Little Builders Wooden Block Set",
    img: "/product-blocks.webp",
    price: 29.99,
    wasPrice: 39.99,
    rating: 4.9,
    reviews: 540,
    brand: "ELC",
    badge: "-25%",
  },
  {
    name: "Speedy Racer Chunky Toy Car",
    img: "/product-car.webp",
    price: 12.99,
    rating: 4.7,
    reviews: 366,
    brand: "ADDO",
  },
]

const filterData = [
  {
    title: "Age",
    options: ["0–2", "3–5", "6–8", "9–12", "12+"],
  },
  {
    title: "Brand",
    options: ["LEGO", "Barbie", "Hot Wheels", "Pokemon"],
  },
  {
    title: "Category",
    options: ["Action Figures", "Outdoor", "Games", "Arts & Crafts"],
  },
  {
    title: "Availability",
    options: ["In Stock", "Pre-order", "Exclusive"],
  },
]

export default function PLPPage() {
  const [sort, setSort] = useState("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  return (
    <main className="min-h-screen text-foreground overflow-x-clip">

      {/* =========================
          HERO
      ========================== */}
      <section className="relative px-4 py-10">
        <div className="
          mx-auto max-w-7xl
          rounded-[2.5rem]
          bg-gradient-to-br from-[#0b1220] via-[#08101f] to-[#05070f]
          text-white
          p-10
          overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,.35)]
        ">
          <h1 className="text-4xl font-black">All Toys</h1>
          <p className="mt-3 text-white/70">
            Explore our latest toys, deals and best sellers
          </p>
        </div>
      </section>

      <div className="sticky top-[var(--mobile-site-header-height)] lg:top-[var(--site-header-height)] z-20 px-4">
        <div className="
          mx-auto max-w-7xl
          flex items-center justify-between
          rounded-full

          bg-[rgba(6,18,40,.88)]
          backdrop-blur-3xl

          px-6 py-3
          text-white

          shadow-[0_10px_30px_rgba(0,0,0,.25)]
          border border-white/10
        ">

          <button
            onClick={() => setFiltersOpen(true)}
            className="
              flex items-center gap-2
              rounded-full
              bg-white/10
              px-4 py-2
              font-bold
              transition
              hover:bg-white/15
              cursor-pointer
            "
          >
            <SlidersHorizontal className="size-4" />
            Filters
          </button>

          <div className="relative inline-block">
            <label htmlFor="sort" className="sr-only">Sort by</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                appearance-none
                bg-[rgba(6,18,40,.88)]
                border border-white/10
                rounded-full
                px-4 py-2 pr-10
                text-white
                outline-none
              "
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price low</option>
              <option value="price-high">Price high</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-white/70" />
          </div>

        </div>
      </div>

      {/* 👇 THIS IS THE IMPORTANT SPACING FIX */}
      <div className="h-6" />

      {/* =========================
          FILTER DRAWER
      ========================== */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[100]">

          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />

          <div className="
            absolute right-0 top-0
            h-full w-full md:w-[440px]

            bg-[rgba(8,16,32,.96)]
            backdrop-blur-3xl

            border-l border-white/10

            shadow-[0_40px_120px_rgba(0,0,0,.6)]

            flex flex-col
          ">

            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-white font-black">Filters</h3>

              <button
                onClick={() => setFiltersOpen(false)}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 cursor-pointer"
              >
                <X className="size-5 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">

              {filterData.map((group) => {
                const isOpen = openGroup === group.title

                return (
                  <div
                    key={group.title}
                    className="
                      rounded-2xl
                      bg-white/10
                      border border-white/10
                      overflow-hidden
                    "
                  >

                    <button
                      onClick={() =>
                        setOpenGroup(isOpen ? null : group.title)
                      }
                      className="
                        w-full
                        flex items-center justify-between
                        px-4 py-4
                        text-white
                        font-bold
                        hover:bg-white/10
                        transition
                        cursor-pointer
                      "
                    >
                      {group.title}
                      <ChevronDown
                        className={`size-4 transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`
                        grid gap-2 px-4
                        transition-all duration-300
                        ${
                          isOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }
                      `}
                    >
                      {group.options.map((opt) => (
                        <button
                          key={opt}
                          className="
                            text-left
                            rounded-xl
                            bg-white/5
                            px-3 py-2
                            text-sm
                            text-white/80
                            hover:bg-white/10
                            hover:text-white
                            transition
                            last:mb-4
                            cursor-pointer
                          "
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                  </div>
                )
              })}

            </div>

            <div className="p-4 border-t border-white/10">
              <button className="
                w-full
                rounded-full
                bg-secondary
                py-3
                font-black
                text-white
                cursor-pointer
              ">
                Apply Filters
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =========================
          PRODUCTS
      ========================== */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} priority={i === 0} />
          ))}
        </div>
      </section>

    </main>
  )
}