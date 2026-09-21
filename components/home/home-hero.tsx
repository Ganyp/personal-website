import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

/**
 * 首页首屏
 * 职责：以一句话主张与竖幅作品图建立第一印象，并给出作品/联系两个入口。
 * 结构：桌面端左文右图，移动端文字在上、图在下。
 */

// TODO: 替换为本人实拍作品（首屏形象图），建议竖幅 3:4
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&h=1600&q=80"

function HomeHero() {
  return (
    <Container className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-12 md:py-24">
      {/* 左侧：主张与入口 */}
      <div className="space-y-8 md:col-span-7">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          摄影作品集
        </p>
        <h1 className="font-heading text-4xl leading-[1.25] font-medium md:text-6xl md:leading-[1.18]">
          用照片，留存
          <br />
          时间本来的样子
        </h1>
        <p className="max-w-md text-sm leading-loose text-muted-foreground md:text-base">
          我是陆野，独立摄影师。拍摄人像、婚礼与旅途风光，
          偏爱自然的光线与没有摆拍痕迹的瞬间。
        </p>
        {/* 行动入口：主按钮看作品，次链接去联系页 */}
        <div className="flex flex-wrap items-center gap-5">
          <Button size="lg" render={<Link href="/works" />}>
            查看作品
          </Button>
          <Link
            href="/contact"
            className="text-sm underline-offset-4 hover:underline"
          >
            联系我 →
          </Link>
        </div>
      </div>

      {/* 右侧：竖幅形象图 */}
      <div className="md:col-span-5">
        <div className="relative aspect-3/4 overflow-hidden bg-muted">
          <Image
            src={HERO_IMAGE}
            alt="摄影师形象照（占位图，待替换为本人实拍作品）"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  )
}

export { HomeHero }
