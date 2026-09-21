import { AboutTeaser } from "@/components/home/about-teaser"
import { FeaturedWorks } from "@/components/home/featured-works"
import { HomeHero } from "@/components/home/home-hero"
import { PricingTeaser } from "@/components/home/pricing-teaser"

/**
 * 首页
 * 主干编排：首屏印象 → 精选作品 → 简介引导 → 合作入口，细节均下沉至各区块组件。
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedWorks />
      <AboutTeaser />
      <PricingTeaser />
    </>
  )
}
