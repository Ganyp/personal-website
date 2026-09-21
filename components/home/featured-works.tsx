import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/common/section-heading"
import { featuredWorks, getImageUrl } from "@/lib/works"

/**
 * 首页精选作品
 * 职责：跨拍摄方向展示四张代表作品，引导进入完整作品页。
 * 排版：桌面四列等宽，移动端双列；横幅图统一裁为 4:5 保持整齐。
 */
function FeaturedWorks() {
  return (
    <Container className="py-20">
      {/* 区块标题与「查看全部」入口分居两侧 */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading index="01" title="精选作品" />
        <Link
          href="/works"
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          查看全部作品 →
        </Link>
      </div>

      {/* 精选图组：统一 4:5 比例，悬停轻微放大 */}
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {featuredWorks.map((work) => (
          <li key={work.imageId}>
            <Link
              href="/works"
              aria-label={`查看作品：${work.title}`}
              className="group block overflow-hidden bg-muted"
            >
              <div className="relative aspect-4/5">
                <Image
                  src={getImageUrl(work)}
                  alt={`${work.title}（占位图，待替换为本人实拍作品）`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export { FeaturedWorks }
