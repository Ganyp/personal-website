"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { navItems } from "@/lib/site"
import { cn } from "@/lib/utils"

/**
 * 头部导航链接组
 * 职责：渲染导航项，并依据当前路径标记选中态。
 * 生命周期：随头部常驻，纯展示无数据请求。
 */
function NavLinks() {
  const pathname = usePathname()

  return (
    <nav aria-label="主导航" className="flex items-center gap-5 md:gap-8">
      {navItems.map((item) => {
        // 首页仅在精确匹配时高亮，其余页面按前缀匹配
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-sm tracking-wide transition-colors hover:text-foreground",
              isActive
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

export { NavLinks }
