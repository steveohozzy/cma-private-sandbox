import { ProductCard, type Product } from "./product-card"
import { ArrowUpRight } from "lucide-react"

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
    brand: "BARBIE",
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

export function FeaturedProducts() {
  return (
    <section id="featured" className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Flying off the shelves
          </p>
          <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            This week&apos;s favourites
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

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  )
}
