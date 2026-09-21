/**
 * 拍摄方向列表
 * 职责：逐一说明四个拍摄方向的内容与风格取向。
 * 数据结构：方向名称 + 说明，页面静态内容随组件维护。
 */

/** 单个拍摄方向的静态说明 */
interface Direction {
  /** 方向名称 */
  name: string
  /** 拍摄内容与风格说明 */
  description: string
}

/** 四个主要拍摄方向（与作品页分组对应） */
const DIRECTIONS: Direction[] = [
  {
    name: "人像",
    description:
      "个人写真、情侣与家庭记录。以自然光为主，拍摄前会先聊聊性格与喜欢的画面，减少摆拍感。",
  },
  {
    name: "婚礼",
    description:
      "全天跟拍，从准备阶段记录到宴席。除了仪式，更在意父母、朋友和那些不会重演的小瞬间。",
  },
  {
    name: "风光与旅行",
    description:
      "山川湖海与晨昏光线。接受路途遥远，也接受为一束光等上几个小时。",
  },
  {
    name: "街头",
    description:
      "城市日常的片段。不打扰、不安排，只记录路过的人和正在发生的事。",
  },
]

/** 拍摄方向说明列表 */
function DirectionList() {
  return (
    <dl className="divide-y divide-border/70 border-y border-border/70">
      {DIRECTIONS.map((direction) => (
        <div
          key={direction.name}
          className="grid gap-2 py-6 md:grid-cols-12 md:gap-8"
        >
          <dt className="font-heading text-xl md:col-span-3">{direction.name}</dt>
          <dd className="text-sm leading-loose text-muted-foreground md:col-span-9">
            {direction.description}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export { DirectionList }
