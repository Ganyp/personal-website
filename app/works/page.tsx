import type { Metadata } from "next"

import { PlaceholderNote } from "@/components/common/placeholder-note"
import { Container } from "@/components/layout/container"
import { WorksSection } from "@/components/works/works-section"
import { workCategories } from "@/lib/works"

/** 作品页 SEO 元数据 */
export const metadata: Metadata = {
  title: "作品",
  description:
    "摄影师陆野的精选作品集，按人像、婚礼、风光与街头四个方向分类展示。",
}

/**
 * 作品页
 * 主干编排：标题与占位说明 → 按拍摄方向逐组展示，排版细节下沉至分组组件。
 */
export default function WorksPage() {
  return (
    <Container className="py-16 md:py-24">
      {/* 页首：标题 + 占位图替换提示 */}
      <header className="mb-16 max-w-2xl space-y-6">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          作品集
        </p>
        <h1 className="font-heading text-4xl leading-tight font-medium md:text-5xl">
          精选作品
        </h1>
        <p className="text-sm leading-loose text-muted-foreground md:text-base">
          按拍摄方向分组，每组呈现近年的代表照片。后续会持续更新，
          也可以通过邮件索取完整作品集。
        </p>
        <PlaceholderNote />
      </header>

      {/* 四个方向分组，组间留出大间距 */}
      <div className="space-y-24">
        {workCategories.map((category) => (
          <WorksSection key={category.id} category={category} />
        ))}
      </div>
    </Container>
  )
}
