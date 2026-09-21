import Image from "next/image"

/**
 * 摄影师肖像
 * 职责：展示本人照片与一句注解。
 * 生命周期：纯展示；图片为 Unsplash 占位图，待替换。
 */

// TODO: 替换为本人实拍作品（简介页人物肖像），建议竖幅 3:4
const PORTRAIT_IMAGE =
  "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=1200&h=1600&q=80"

function PhotographerPortrait() {
  return (
    <figure className="space-y-3">
      <div className="relative aspect-3/4 overflow-hidden bg-muted">
        <Image
          src={PORTRAIT_IMAGE}
          alt="摄影师本人照片（占位图，待替换为本人实拍作品）"
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
        />
      </div>
      {/* 图注：拍摄中的状态描述 */}
      <figcaption className="text-xs text-muted-foreground">
        拍摄中的我 · 图片为占位图，待替换
      </figcaption>
    </figure>
  )
}

export { PhotographerPortrait }
