import Link from "next/link"

import { Container } from "@/components/layout/container"
import { emailHref, siteConfig } from "@/lib/site"

/**
 * 联系面板
 * 职责：把邮箱做成页面中最显眼的入口，并列出其他联系渠道与回复预期。
 * 排版：邮箱为衬线大字链接，悬停下划线；下方渠道以发丝行排列。
 */
function ContactPanel() {
  return (
    <Container className="py-16 md:py-24">
      {/* 引导小标签与说明 */}
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
        取得联系
      </p>
      <h1 className="mt-4 max-w-2xl font-heading text-4xl leading-snug font-medium md:text-5xl">
        说说你的拍摄想法，
        <br />
        一般两天内回复
      </h1>

      {/* 显眼邮箱链接：衬线大字，点击直接唤起邮件客户端 */}
      <a
        href={emailHref}
        className="group mt-12 inline-flex flex-wrap items-baseline gap-x-3 border-b border-foreground pb-2"
      >
        <span className="font-heading text-3xl transition-colors md:text-5xl">
          {siteConfig.email}
        </span>
        <span
          aria-hidden
          className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </a>

      {/* 其他渠道与补充信息：两栏 */}
      <div className="mt-16 grid gap-10 border-t border-border/70 pt-10 md:grid-cols-12">
        {/* 其他社交渠道 */}
        <div className="space-y-4 md:col-span-6">
          <h2 className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
            其他渠道
          </h2>
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {siteConfig.socials.map((social) => (
              <li key={social.name}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.name}
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

        {/* 补充信息：城市与合作范围 */}
        <div className="space-y-4 md:col-span-6">
          <h2 className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
            补充信息
          </h2>
          <dl className="space-y-4 text-sm">
            <div className="flex justify-between gap-6">
              <dt className="text-muted-foreground">所在城市</dt>
              <dd>{siteConfig.location}</dd>
            </div>
            <div className="flex justify-between gap-6">
              <dt className="text-muted-foreground">异地委托</dt>
              <dd>可以安排，差旅按实际沟通</dd>
            </div>
            <div className="flex justify-between gap-6">
              <dt className="text-muted-foreground">咨询时间</dt>
              <dd>工作日 10:00 – 19:00</dd>
            </div>
          </dl>
        </div>
      </div>
    </Container>
  )
}

export { ContactPanel }
