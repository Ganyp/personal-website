/**
 * 占位图说明条
 * 职责：以虚线边框提示当前区块图片均为占位图、需替换为本人实拍作品。
 * 设计：克制的小号提示，不抢夺照片本身的视觉。
 */
interface PlaceholderNoteProps {
  /** 自定义提示文案，默认提示替换实拍图 */
  children?: React.ReactNode
}

/** 占位图统一说明条 */
function PlaceholderNote({ children }: PlaceholderNoteProps) {
  return (
    <p className="inline-flex items-center gap-2 border border-dashed border-border px-3 py-2 text-xs leading-relaxed text-muted-foreground">
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-primary/70" />
      {children ?? "当前图片均为占位图，上线前需替换为本人实拍作品。"}
    </p>
  )
}

export { PlaceholderNote }
