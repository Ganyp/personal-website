import type { Metadata } from "next"

import { AddonTable } from "@/components/pricing/addon-table"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { SectionHeading } from "@/components/common/section-heading"
import { Container } from "@/components/layout/container"
import { emailHref } from "@/lib/site"

/** 报价页 SEO 元数据 */
export const metadata: Metadata = {
  title: "报价",
  description:
    "个人写真、婚礼跟拍与商业合作的服务套餐参考报价，以及加购项目说明。",
}

/**
 * 报价页
 * 主干编排：报价说明 → 三档套餐卡片 → 加购项目表 → 邮件确认提示。
 * 卡片摆放：页面视觉中心的三栏（移动端单列），确保访客先看到套餐差异再看细则。
 */
export default function PricingPage() {
  return (
    <Container className="py-16 md:py-24">
      {/* 页首：标题与报价说明 */}
      <SectionHeading
        index="Pricing"
        title="服务与报价"
        description="以下为常见套餐的参考内容与价格，最终以拍摄前邮件确认的方案为准。"
        className="mb-14"
      />

      {/* 阶段一：三档套餐卡片，置于页面中心并排展示 */}
      <PricingCards />

      {/* 套餐下方补充说明，避免对价格产生误解 */}
      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        以上价格为同城拍摄参考；异地拍摄的交通与住宿按实际沟通，
        套餐内费用不因天气等不可控因素重复收取。
      </p>

      {/* 阶段二：加购项目表格 */}
      <div className="mt-20">
        <SectionHeading
          index="Add-on"
          title="加购项目"
          description="如有超出套餐的需求，可按下列项目加购。"
          className="mb-8"
        />
        <AddonTable />
      </div>

      {/* 阶段三：邮件确认入口 */}
      <aside className="mt-20 border border-border p-8 md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-medium">
              确认档期与套餐内容
            </h2>
            <p className="text-sm text-muted-foreground">
              邮件说明日期与场景，两天内回复确认。
            </p>
          </div>
          <a
            href={emailHref}
            className="text-sm underline-offset-4 hover:underline"
          >
            发送邮件确认 →
          </a>
        </div>
      </aside>
    </Container>
  )
}
