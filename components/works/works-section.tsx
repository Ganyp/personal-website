import { WorkFigure } from "@/components/works/work-figure"
import type { WorkCategory } from "@/lib/works"

/**
 * 作品分组区块
 * 职责：渲染一个拍摄方向的标题与该方向全部作品（响应式多列排版）。
 * 排版：移动端单列，平板双列，桌面三列；列内图块自然错落。
 */
interface WorksSectionProps {
  /** 作品分组数据 */
  category: WorkCategory
}

/** 单个拍摄方向的作品区块 */
function WorksSection({ category }: WorksSectionProps) {
  return (
    <section aria-labelledby={`works-${category.id}`} className="scroll-mt-24">
      {/* 分组标题行：名称 + 说明，底部发丝线 */}
      <div className="mb-8 flex flex-col gap-2 border-b border-border/70 pb-5 md:flex-row md:items-baseline md:justify-between">
        <h3
          id={`works-${category.id}`}
          className="font-heading text-2xl font-medium"
        >
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground">{category.summary}</p>
      </div>

      {/* 多列作品流：break-inside-avoid 在 WorkFigure 内保证图块不被拆断 */}
      <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
        {category.works.map((work) => (
          <WorkFigure key={work.imageId} work={work} />
        ))}
      </div>
    </section>
  )
}

export { WorksSection }
