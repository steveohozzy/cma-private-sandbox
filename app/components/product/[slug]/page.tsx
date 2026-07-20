'use client'

import { ProductGallery } from "../../../components/product-gallery" 
import { ProductBuyBox } from "./../../../components/product-buy-box"
import { FeatureChips } from "./../../../components/feature-chips"
import { SpecificationGrid } from "./../../../components/specification-grid"
import { ProductAccordion } from "./../../../components/product-accordion"
import { StickyBuyBar } from "./../../../components/sticky-buy-bar"
import { RelatedProducts } from "./../../../components/related-products"
import { ProductReviews } from "./../../../components/product-reviews"
import { useState } from "react"

const product = {
  name: "LEGO City Police Station",
  brand: "LEGO",
  badge: "Best Seller",

  price: 49.99,
  wasPrice: 59.99,

  rating: 4.8,
  reviews: 124,

  age: "6+",

  images: [
    "https://www.thetoyshop.com/medias/515Wx515H-582561-582561-8.jpg?context=bWFzdGVyfGltYWdlc3w3MjgyMHxpbWFnZS9qcGVnfGFESTRMMmcxT1M4eE1qYzRORFExTXpNMU16VXdNaTgxTVRWWGVEVXhOVWhmTlRneU5UWXhYelU0TWpVMk1TMDRMbXB3Wnd8ZDE1YzViNGVhZGRjYzlhMTVhOWMxODgxNWVmZjZiZWJlZjU2ZTQ3YTZlMGY2NjZlNWNiMTc3YzUxYzMzMDE5Yg",
    "https://www.thetoyshop.com/medias/515Wx515H-582561-Primary?context=bWFzdGVyfGltYWdlc3wxMDkwODd8aW1hZ2UvanBlZ3xhR0poTDJnMk5pOHhNamM0TkRRM056RTNOVGd6T0M4MU1UVlhlRFV4TlVoZk5UZ3lOVFl4WDFCeWFXMWhjbmt8Nzg3Y2U2NmE3MTE4MTllYzRjNjY2NWE4ODQyODU3YjFmOWFhMjFkMjFiNDA2OTU0MTZhNGZmMDYwZWUzYTMyZQ",
    "https://www.thetoyshop.com/medias/515Wx515H-582561-582561-3.jpg?context=bWFzdGVyfGltYWdlc3w3ODk1N3xpbWFnZS9qcGVnfGFETTRMMmcyWkM4eE1qYzRORFExTVRjeE5URXdNaTgxTVRWWGVEVXhOVWhmTlRneU5UWXhYelU0TWpVMk1TMHpMbXB3Wnd8OTU3MGYzZTE4Y2Y3ZDc5MGRiYTI1ODA1YTU4ZjA4YTgzMzA0YzlmYjAwMzVkN2Q5OGE5N2Q3Mjk1OWI3ODM4Yw",
    "https://www.thetoyshop.com/medias/515Wx515H-582561-582561-4.jpg?context=bWFzdGVyfGltYWdlc3w1OTY1OXxpbWFnZS9qcGVnfGFHWmxMMmd4WVM4eE1qYzRORFExTWpBME1qYzRNaTgxTVRWWGVEVXhOVWhmTlRneU5UWXhYelU0TWpVMk1TMDBMbXB3Wnd8YmJjY2UxN2YxMzM2NGM4ZmZkZjk3ZWQ0NGE3YjU4YTlhZWM1MmUyNTY5YTg3ZTZmZDg5Yzc4YWY5ZWU2ZjI3Mw",
  ],

  description:
    "Bring your own LEGO City adventures to life with this detailed Police Station featuring vehicles, officers, prison cells and plenty of accessories.",

  features: [
    "668 Pieces",
    "5 Mini Figures",
    "Police Van Included",
    "Jail Cell",
  ],

  img: "https://www.thetoyshop.com/medias/515Wx515H-582561-582561-8.jpg?context=bWFzdGVyfGltYWdlc3w3MjgyMHxpbWFnZS9qcGVnfGFESTRMMmcxT1M4eE1qYzRORFExTXpNMU16VXdNaTgxTVRWWGVEVXhOVWhmTlRneU5UWXhYelU0TWpVMk1TMDRMbXB3Wnd8ZDE1YzViNGVhZGRjYzlhMTVhOWMxODgxNWVmZjZiZWJlZjU2ZTQ3YTZlMGY2NjZlNWNiMTc3YzUxYzMzMDE5YgW",

  sku: "582561",

stock: "In Stock",

finance: "Pay in 3 interest-free with Klarna",

delivery: "FREE Standard Delivery",
}

export default function ProductPage() {
  const [storeDrawerOpen, setStoreDrawerOpen] = useState(false)

  return (
    <main>

      {/* MOBILE ONLY */}
      <div className="lg:hidden">
        <StickyBuyBar product={product} />
      </div>


      {/* Breadcrumb */}
      <section className="mx-auto max-w-7xl px-4 pt-8">
        Home / LEGO / City / Police Station
      </section>


      {/* PDP MAIN AREA */}
      <section className="mx-auto max-w-7xl px-4 py-8">

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">


          {/* LEFT CONTENT */}
          <div className="space-y-12">

            <ProductGallery
              images={product.images}
              badge={product.badge}
            />


            <FeatureChips
              features={product.features}
              age={product.age}
            />


            <SpecificationGrid />


            <ProductAccordion product={product} />

            <ProductReviews
              rating={product.rating}
              reviews={product.reviews}
            />

          </div>



          {/* RIGHT BUY BOX */}
          <aside>

            <div
              className={`
                lg:sticky
                lg:top-28
                transition-[z-index]
                ${
                  storeDrawerOpen
                    ? "z-[9999999999]"
                    : "z-30"
                }
              `}
            >

                <ProductBuyBox
                    product={product}
                    drawerOpen={storeDrawerOpen}
                    setDrawerOpen={setStoreDrawerOpen}
                    
                />

            </div>

          </aside>


        </div>

      </section>



      {/* RECOMMENDATIONS BREAK THE STICKY AREA */}
      <section className="bg-muted/40 pt-10">

        <RelatedProducts />

      </section>


    </main>
  )
}