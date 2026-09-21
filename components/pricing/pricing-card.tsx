import Link from "next/link"

import { Button } from "@/components/ui/button"
import type { PricingPlan } from "@/lib/pricing"
import { cn } from "@/lib/utils"

/**
 * 单个报价套餐卡片
 * 职责：呈现套餐价格、时长、交付数量与服务清单；推荐套餐以描边方式轻突出。
 * 结构：名称场景 → 价格 → 时长/交付 → 服务清单 → 预约按钮。
 */
interface PricingCardProps {
  /** 套餐数据 */
  plan: PricingPlan
}

/** 单个套餐报价卡片 */
function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col border bg-background p-8",
        plan.featured ? "border-foreground" : "border-border"
      )}
    >
      {/* 推荐套餐小标记，置于卡片顶部 */}
      {plan.featured ? (
        <p className="absolute -top-3 left-8 bg-background px-2 text-[11px] tracking-[0.25em] text-foreground uppercase">
          常被选择
        </p>
      ) : null}

      {/* 套餐名称与适用场景 */}
      <header className="space-y-2">
        <h3 className="font-heading text-2xl font-medium">{plan.name}</h3>
        <p className="text-xs text-muted-foreground">{plan.scenario}</p>
      </header>

      {/* 价格区：数字用衬线大字，单位弱化 */}
      <div className="mt-7 flex items-baseline gap-2">
        <span className="font-heading text-4xl font-medium">{plan.price}</span>
        <span className="text-xs text-muted-foreground">{plan.unit}</span>
      </div>

      {/* 时长与交付数量：两条发丝行 */}
      <dl className="mt-6 border-y border-border/70 text-sm">
        <div className="flex items-center justify-between py-3">
          <dt className="text-muted-foreground">拍摄时长</dt>
          <dd>{plan.duration}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-border/70 py-3">
          <dt className="text-muted-foreground">精修交付</dt>
          <dd>{plan.delivery}</dd>
        </div>
      </dl>

      {/* 服务清单：短横线作为项目符号 */}
      <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 leading-relaxed">
            <span aria-hidden className="mt-2 inline-block size-px shrink-0 bg-muted-foreground" />
            {feature}
          </li>
        ))}
      </ul>

      {/* 预约入口：推荐套餐实心按钮，其余描边按钮 */}
      <Button
        size="lg"
        variant={plan.featured ? "default" : "outline"}
        render={<Link href="/contact" />}
        className="mt-8 w-full"
      >
        邮件预约
      </Button>
    </article>
  )
}

export { PricingCard }
