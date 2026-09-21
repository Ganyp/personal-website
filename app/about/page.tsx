import type { Metadata } from "next"

import { PhotographerPortrait } from "@/components/about/photographer-portrait"
import { DirectionList } from "@/components/about/direction-list"
import { ProcessSteps } from "@/components/about/process-steps"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/common/section-heading"

/** 简介页 SEO 元数据 */
export const metadata: Metadata = {
  title: "简介",
  description:
    "摄影师陆野的自我介绍、四个拍摄方向，以及从沟通到交付的合作流程。",
}

/**
 * 简介页
 * 主干编排：本人介绍 → 拍摄方向 → 合作流程，具体内容由各子组件承载。
 */
export default function AboutPage() {
  return (
    <>
      {/* 阶段一：左侧肖像、右侧自述 */}
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <PhotographerPortrait />
        </div>
        <div className="md:col-span-7">
          <SectionHeading index="About" title="你好，我是陆野" />
          <div className="mt-6 space-y-5 text-sm leading-loose text-muted-foreground md:text-base">
            <p>
              独立摄影师，现居上海。2016 年开始拍照，最初记录旅行，
              后来镜头里慢慢有了更多的人：朋友、陌生人，还有婚礼上的家人。
            </p>
            <p>
              我喜欢安静的画面，也喜欢自然光线落在皮肤上的质感。
              比起安排好的姿势，更愿意等人放松下来，等待那个恰好的瞬间。
            </p>
            <p>
              目前主要拍摄人像与婚礼，也接旅行纪实和品牌的商业合作。
              每次拍摄只接一组委托，前期沟通和后期选片都会留足时间。
            </p>
          </div>
        </div>
      </Container>

      {/* 阶段二：四个拍摄方向详述 */}
      <Container className="py-10">
        <SectionHeading
          index="01"
          title="拍摄方向"
          description="四个长期拍摄的方向，各自对应不同的工作方式。"
          className="mb-10"
        />
        <DirectionList />
      </Container>

      {/* 阶段三：合作流程四步骤 */}
      <Container className="py-20">
        <SectionHeading
          index="02"
          title="合作流程"
          description="从第一封邮件到成片交付，通常经历这四个阶段。"
          className="mb-10"
        />
        <ProcessSteps />
      </Container>
    </>
  )
}
