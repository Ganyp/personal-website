import { PricingCard } from "@/components/pricing/pricing-card"
import { pricingPlans } from "@/lib/pricing"

/**
 * 报价套餐卡片组
 * 职责：并排展示全部套餐，保证三栏等高、移动端纵向堆叠。
 */
function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3 md:gap-5">
      {pricingPlans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}

export { PricingCards }
