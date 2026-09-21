import Link from "next/link"

import { Container } from "@/components/layout/container"
import { NavLinks } from "@/components/layout/nav-links"
import { siteConfig } from "@/lib/site"

/**
 * 站点头部
 * 职责：提供署名入口与主导航；底部发丝线与正文分隔。
 * 生命周期：全站常驻，路由切换时不重渲染（由根布局承载）。
 */
function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        {/* 摄影师署名，点击回首页 */}
        <Link
          href="/"
          className="font-heading text-xl tracking-wide hover:text-foreground"
        >
          {siteConfig.photographer}
          <span className="ml-1 align-middle text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
            摄影
          </span>
        </Link>
        <NavLinks />
      </Container>
    </header>
  )
}

export { SiteHeader }
