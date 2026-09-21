import { cn } from "@/lib/utils"

/**
 * 章节标题
 * 职责：统一各页面区块标题的字号、字距与编号样式，保持编辑感排版。
 */
interface SectionHeadingProps {
  /** 章节编号（如 "01"），以小号宽字距展示 */
  index?: string
  /** 章节标题 */
  title: string
  /** 标题下方说明文字 */
  description?: string
  /** 标题对齐方式，默认左对齐 */
  align?: "left" | "center"
  /** 追加的样式类名 */
  className?: string
}

/** 全站通用章节标题 */
function SectionHeading({
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {/* 编号小标签：宽字距、弱化颜色 */}
      {index ? (
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          {index}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight font-medium md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export { SectionHeading }
