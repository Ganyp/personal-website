import Image from "next/image"

import { getImageUrl, type Work } from "@/lib/works"

/**
 * 单张作品展示
 * 职责：按作品比例渲染图片、标题与地点；悬停时提示该图为占位图。
 * 生命周期：纯展示组件，数据由上层传入。
 */
interface WorkFigureProps {
  /** 作品数据 */
  work: Work
}

/** 单张作品图（含图注与占位提示） */
function WorkFigure({ work }: WorkFigureProps) {
  return (
    <figure className="group mb-5 break-inside-avoid">
      <div className="relative overflow-hidden bg-muted">
        <Image
          src={getImageUrl(work)}
          alt={`${work.title}（占位图，待替换为本人实拍作品）`}
          width={work.width}
          height={work.height}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {/* 占位图角标：默认隐藏，悬停/聚焦时出现 */}
        <span className="absolute top-3 left-3 border border-dashed border-white/70 bg-black/55 px-2 py-1 text-[10px] tracking-[0.2em] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 uppercase">
          占位图
        </span>
      </div>
      {/* 图注：标题与地点均为占位文案 */}
      <figcaption className="mt-2 flex items-baseline justify-between gap-3 text-sm">
        <span className="font-heading text-base">{work.title}</span>
        <span className="text-xs text-muted-foreground">{work.location}</span>
      </figcaption>
    </figure>
  )
}

export { WorkFigure }
