import Link from "next/link"

import { Container } from "@/components/layout/container"
import { emailHref, siteConfig } from "@/lib/site"

/**
 * 站点页脚
 * 职责：呈现联系邮箱、社交渠道与版权信息。
 * 生命周期：全站常驻；邮箱与社交地址取自站点配置，单点替换即可。
 */
function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-32 border-t border-border/70">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        {/* 署名与城市 */}
        <div className="space-y-2">
          <p className="font-heading text-lg">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.location}
          </p>
        </div>

        {/* 邮箱与社交渠道 */}
        <div className="space-y-3 text-sm">
          <a
            href={emailHref}
            className="inline-block underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground">
            {siteConfig.socials.map((social) => (
              <li key={social.name}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* 版权行 */}
      <Container className="pb-10">
        <p className="text-xs text-muted-foreground">
          © {year} {siteConfig.photographer} · 保留所有照片权利
        </p>
      </Container>
    </footer>
  )
}

export { SiteFooter }
