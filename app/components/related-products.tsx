"use client"

import { ProductCard, Product } from "./product-card"

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


export function RelatedProducts() {

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20">

      {/* heading */}
      <div
        className="
          mb-6
          flex
          items-center
          justify-between
        "
      >

        <h2
          className="
            font-heading
            text-3xl
            font-black
          "
        >
          You may also like
        </h2>


      </div>


      {/* products */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  )
}