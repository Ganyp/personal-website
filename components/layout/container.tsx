import { cn } from "@/lib/utils"

/**
 * 页面内容容器
 * 职责：统一全站最大宽度与水平留白，保证各页排版基准一致。
 */
interface ContainerProps {
  /** 容器内部内容 */
  children: React.ReactNode
  /** 追加的样式类名 */
  className?: string
}

/** 全站通用宽度容器 */
function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>
      {children}
    </div>
  )
}

export { Container }
