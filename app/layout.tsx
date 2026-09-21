import type { Metadata } from "next"
import {
  Cormorant_Garamond,
  Noto_Sans_SC,
  Noto_Serif_SC,
  Outfit,
} from "next/font/google"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

import "./globals.css"

/* 字体方案（next/font 自托管，无外部请求）：
   - 标题：Cormorant Garamond 处理拉丁，中文回落到 Noto Serif SC（思源宋体）
   - 正文：Outfit 处理拉丁与数字，中文回落到 Noto Sans SC（思源黑体）
   中文子集体积较大，仅预载 latin 子集，其余按 unicode-range 按需加载。 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
})

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
})

/** 全站 SEO 元数据，标题采用模板形式由各页追加 */
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} · 摄影作品集`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

/**
 * 根布局
 * 职责：声明 HTML 骨架、全站字体变量、主题提供者与固定头尾。
 * 生命周期：所有页面共享，路由切换时不重渲染。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        cormorant.variable,
        notoSerifSC.variable,
        outfit.variable,
        notoSansSC.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="flex min-h-svh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
