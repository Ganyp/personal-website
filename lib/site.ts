/**
 * 站点全局配置
 * 生命周期：构建期静态读取，全站文案与链接的唯一数据源。
 * 注意：标注「待替换」的字段为占位内容，上线前必须改为本人真实信息。
 */

/** 社交渠道链接定义 */
export interface SocialLink {
  /** 渠道名称，用于展示 */
  name: string
  /** 跳转地址，待替换为本人主页地址 */
  href: string
}

/** 摄影师个人信息（均为占位内容，待替换） */
export const siteConfig = {
  /** 摄影师姓名，待替换为本人姓名 */
  photographer: "陆野",
  /** 站点名称（页眉署名） */
  name: "陆野摄影",
  /** 所在城市，待替换 */
  location: "中国 · 上海",
  /** 联系邮箱，待替换为本人邮箱 */
  email: "hello@example.com",
  /** 站点简介（用于 SEO 与首页描述） */
  description:
    "陆野的摄影作品集，涵盖人像、婚礼跟拍、旅行风光与街头影像，用照片留存时间本来的样子。",
  /** 社交渠道，地址待替换 */
  socials: [
    { name: "Instagram", href: "https://instagram.com/" },
    { name: "小红书", href: "https://xiaohongshu.com/" },
    { name: "微博", href: "https://weibo.com/" },
  ] satisfies SocialLink[],
} as const

/** 联系邮箱的 mailto 地址 */
export const emailHref = `mailto:${siteConfig.email}`

/** 站点头部导航项（顺序即展示顺序） */
export const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "简介" },
  { href: "/works", label: "作品" },
  { href: "/pricing", label: "报价" },
  { href: "/contact", label: "联系" },
] as const
