import Link from "next/link"

import { Container } from "@/components/layout/container"

/**
 * 首页简介引导
 * 职责：以简短自述与拍摄方向标签引导访客进入简介页。
 * 排版：两栏，左侧叙述、右侧方向标签列表。
 */

/** 拍摄方向标签（与作品页分组保持一致） */
const DIRECTIONS = ["人像写真", "婚礼跟拍", "旅行风光", "街头影像"]

function AboutTeaser() {
  return (
    <Container className="border-t border-border/70 py-20">
      <div className="grid gap-10 md:grid-cols-12">
        {/* 左侧：简短自述 */}
        <div className="space-y-5 md:col-span-7">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            关于我
          </p>
          <p className="font-heading text-2xl leading-relaxed md:text-3xl">
            拍照十年，仍然相信好照片不靠安排，
            而来自等待光线、等人放松下来的那个瞬间。
          </p>
          <Link
            href="/about"
            className="inline-block text-sm underline-offset-4 hover:underline"
          >
            了解更多 →
          </Link>
        </div>

        {/* 右侧：拍摄方向清单，发丝行分隔 */}
        <ul className="md:col-span-5">
          {DIRECTIONS.map((direction) => (
            <li key={direction} className="border-b border-border/70">
              <Link
                href="/works"
                className="group flex items-center justify-between py-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>{direction}</span>
                <span
                  aria-hidden
                  className="text-xs transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export { AboutTeaser }
