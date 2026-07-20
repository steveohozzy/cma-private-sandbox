import {Hero} from "./components/hero"
import {ShopByAge} from "./components/shop-by-age"
import {FeaturedProducts} from "./components/featured-products"
import {PodCarousel} from "./components/pod-carousel"
import {CategoryGrid} from "./components/category-grid"
import {PromoBanner} from "./components/promo-banner"
import {CompetitionBanners} from "./components/Competitions"
import {Newsletter} from "./components/newsletter"

export default function Home(){
  return (
    <>
      <Hero />
        <ShopByAge />
        <FeaturedProducts />
        <PodCarousel />
        <CategoryGrid />
        <FeaturedProducts />
        <PromoBanner />
        <CompetitionBanners />
        <Newsletter />
    </>
  )
}