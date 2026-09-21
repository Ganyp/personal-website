import type { Metadata } from "next"

import { ContactPanel } from "@/components/contact/contact-panel"

/** 联系页 SEO 元数据 */
export const metadata: Metadata = {
  title: "联系",
  description: "通过邮件联系摄影师陆野，咨询拍摄档期、套餐与合作细节。",
}

/**
 * 联系页
 * 主干单一：邮箱为页面最显眼入口，其余渠道与补充信息由 ContactPanel 内部组织。
 */
export default function ContactPage() {
  return <ContactPanel />
}
