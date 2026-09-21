/**
 * 合作流程步骤
 * 职责：说明从沟通到交付的四个阶段，让委托方对时间安排有预期。
 * 排版：桌面四列横向步骤，移动端纵向堆叠。
 */

/** 单个流程步骤 */
interface ProcessStep {
  /** 步骤序号（展示用） */
  step: string
  /** 阶段名称 */
  title: string
  /** 该阶段做什么 */
  description: string
}

/** 拍摄合作的四个阶段 */
const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "沟通",
    description: "邮件确认日期、地点、拍摄内容与预期风格。",
  },
  {
    step: "02",
    title: "拍摄",
    description: "按约定时间开始，现场节奏以自然放松为准。",
  },
  {
    step: "03",
    title: "选片",
    description: "初选底片同步给你，在此基础上确定精修。",
  },
  {
    step: "04",
    title: "交付",
    description: "精修成片在线交付，原始底片一并保留三个月。",
  },
]

/** 合作流程步骤组 */
function ProcessSteps() {
  return (
    <ol className="grid gap-8 md:grid-cols-4">
      {PROCESS_STEPS.map((item) => (
        <li key={item.step} className="space-y-3">
          {/* 步骤编号：赤陶色小点 + 宽字距数字 */}
          <p className="flex items-center gap-2 text-xs tracking-[0.3em] text-muted-foreground uppercase">
            <span aria-hidden className="inline-block size-1.5 rounded-full bg-primary/70" />
            {item.step}
          </p>
          <p className="font-heading text-xl">{item.title}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  )
}

export { ProcessSteps }
