import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

/**
 * 首页报价引导
 * 职责：在访客看完作品与简介后，承接进入报价页或直接发邮件。
 * 排版：通栏浅灰底区块，文字居中。
 */
function PricingTeaser() {
  return (
    <section className="bg-muted/60">
      <Container className="py-24 text-center">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          拍摄合作
        </p>
        <h2 className="mx-auto mt-4 max-w-xl font-heading text-3xl leading-snug font-medium md:text-4xl">
          每次拍摄只接一组委托，留出时间认真准备
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          可以先看看套餐内容，也欢迎直接写封邮件说说你的想法。
        </p>
        {/* 双入口：报价页主按钮，联系页次链接 */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <Button size="lg" render={<Link href="/pricing" />}>
            查看报价
          </Button>
          <Link
            href="/contact"
            className="text-sm underline-offset-4 hover:underline"
          >
            邮件联系 →
          </Link>
        </div>
      </Container>
    </section>
  )
}

export { PricingTeaser }
