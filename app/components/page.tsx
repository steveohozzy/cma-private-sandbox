import { SiteHeader } from "./site-header"
import { Hero } from "./hero"
import { CategoryGrid } from "./category-grid"
import { FeaturedProducts } from "./featured-products"
import { PromoBanner } from "./promo-banner"
import { ShopByAge } from "./shop-by-age"
import { Newsletter } from "./newsletter"
import { PodCarousel } from "./pod-carousel"
import { SiteFooter } from "./site-footer"
import { CompetitionBanners } from "./Competitions"

export default function Page() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <ShopByAge />
        <FeaturedProducts />
        <PodCarousel />
        <CategoryGrid />
        <FeaturedProducts />
        <PromoBanner />
        <CompetitionBanners />
        <Newsletter />
      </main>
    </div>
  )
}
