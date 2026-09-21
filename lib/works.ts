/**
 * 摄影作品数据模块
 * 生命周期：构建期静态读取，作品页与首页精选区块的唯一数据源。
 * 核心数据结构：
 * - Work：单张作品（Unsplash 图片标识 + 裁切比例 + 标题/地点占位文案）
 * - WorkCategory：按拍摄方向分组的作品集合
 * 注意：所有图片均为 Unsplash 占位图，上线前需按代码位置逐一替换。
 */

/** 单张摄影作品定义 */
export interface Work {
  /** Unsplash 图片标识（替换实拍图时改为本地图片地址） */
  imageId: string
  /** 作品标题，占位文案，待替换 */
  title: string
  /** 拍摄地点，占位文案，待替换 */
  location: string
  /** 展示宽度（像素），同时用于比例计算与图片裁切参数 */
  width: number
  /** 展示高度（像素），决定竖幅/横幅比例 */
  height: number
}

/** 作品分组（按拍摄方向） */
export interface WorkCategory {
  /** 分组标识，用于锚点与 key */
  id: string
  /** 分组名称（拍摄方向） */
  name: string
  /** 分组一句话说明 */
  summary: string
  /** 该分组下的作品列表 */
  works: Work[]
}

/** 全部作品分组（顺序即展示顺序） */
export const workCategories: WorkCategory[] = [
  {
    id: "portrait",
    name: "人像",
    summary: "日常写真、家庭纪念与个人形象照，保留人物自然的状态。",
    works: [
      // TODO: 替换为本人实拍作品（人像·女性肖像），建议竖幅 4:5
      {
        imageId: "photo-1494790108377-be9c29b29330",
        title: "午后的光",
        location: "上海",
        width: 1200,
        height: 1500,
      },
      // TODO: 替换为本人实拍作品（人像·时尚肖像），建议竖幅 2:3
      {
        imageId: "photo-1524504388940-b1c1722653e1",
        title: "窗边",
        location: "杭州",
        width: 1200,
        height: 1800,
      },
      // TODO: 替换为本人实拍作品（人像），建议方幅 1:1
      {
        imageId: "photo-1529626455594-4ff0802cfb7e",
        title: "安静时刻",
        location: "苏州",
        width: 1400,
        height: 1400,
      },
      // TODO: 替换为本人实拍作品（人像），建议竖幅 3:4
      {
        imageId: "photo-1534528741775-53994a69daeb",
        title: "晚风之前",
        location: "厦门",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    id: "wedding",
    name: "婚礼",
    summary: "全天跟拍，记录仪式、亲人和那些不会重演的瞬间。",
    works: [
      // TODO: 替换为本人实拍作品（婚礼·仪式现场），建议横幅 3:2
      {
        imageId: "photo-1519741497674-611481863552",
        title: "誓言",
        location: "上海",
        width: 1800,
        height: 1200,
      },
      // TODO: 替换为本人实拍作品（婚礼·双人合影），建议竖幅 4:5
      {
        imageId: "photo-1511285560929-80b456fea0bc",
        title: "两个人",
        location: "宁波",
        width: 1200,
        height: 1500,
      },
      // TODO: 替换为本人实拍作品（婚礼·外景），建议竖幅 2:3
      {
        imageId: "photo-1465495976277-4387d4b0b4c6",
        title: "林间小径",
        location: "莫干山",
        width: 1200,
        height: 1800,
      },
      // TODO: 替换为本人实拍作品（婚礼·布置细节），建议横幅 3:2
      {
        imageId: "photo-1606800052052-a08af7148866",
        title: "当日细节",
        location: "上海",
        width: 1800,
        height: 1200,
      },
    ],
  },
  {
    id: "landscape",
    name: "风光与旅行",
    summary: "旅途之中的山川、湖泊与晨昏光线。",
    works: [
      // TODO: 替换为本人实拍作品（风光·雪山），建议竖幅 2:3
      {
        imageId: "photo-1506905925346-21bda4d32df4",
        title: "山脊之上",
        location: "川西",
        width: 1200,
        height: 1800,
      },
      // TODO: 替换为本人实拍作品（风光·日落山谷），建议横幅 3:2
      {
        imageId: "photo-1469474968028-56623f02e42e",
        title: "落日之前",
        location: "青海",
        width: 1800,
        height: 1200,
      },
      // TODO: 替换为本人实拍作品（风光·湖泊），建议横幅 16:10
      {
        imageId: "photo-1506744038136-46273834b3fb",
        title: "湖边清晨",
        location: "新疆",
        width: 1600,
        height: 1000,
      },
      // TODO: 替换为本人实拍作品（风光·森林），建议竖幅 3:4
      {
        imageId: "photo-1441974231531-c6227db76b6e",
        title: "林中光",
        location: "长白山",
        width: 1200,
        height: 1600,
      },
      // TODO: 替换为本人实拍作品（风光·雾山），建议竖幅 4:5
      {
        imageId: "photo-1470071459604-3b5ec3a7fe05",
        title: "雾起时",
        location: "黄山",
        width: 1200,
        height: 1500,
      },
      // TODO: 替换为本人实拍作品（风光·田野），建议横幅 3:2
      {
        imageId: "photo-1418065460487-3e41a6c84dc5",
        title: "初夏田野",
        location: "大理",
        width: 1800,
        height: 1200,
      },
    ],
  },
  {
    id: "street",
    name: "街头",
    summary: "城市日常的片段，路过的人和正在发生的事。",
    works: [
      // TODO: 替换为本人实拍作品（街拍·夜色街道），建议竖幅 2:3
      {
        imageId: "photo-1519501025264-65ba15a82390",
        title: "夜行",
        location: "香港",
        width: 1200,
        height: 1800,
      },
      // TODO: 替换为本人实拍作品（街拍·城市高视角），建议横幅 3:2
      {
        imageId: "photo-1477959858617-67f85cf4f1df",
        title: "俯瞰",
        location: "重庆",
        width: 1800,
        height: 1200,
      },
      // TODO: 替换为本人实拍作品（街拍·天际线），建议横幅 16:10
      {
        imageId: "photo-1480714378408-67cf0d13bc1b",
        title: "楼宇之间",
        location: "上海",
        width: 1600,
        height: 1000,
      },
      // TODO: 替换为本人实拍作品（街拍·路口），建议竖幅 4:5
      {
        imageId: "photo-1444080748397-f442aa95c3e5",
        title: "路口",
        location: "东京",
        width: 1200,
        height: 1500,
      },
    ],
  },
]

/** 首页精选作品（跨方向各取一张） */
export const featuredWorks: Work[] = [
  workCategories[1].works[0],
  workCategories[2].works[0],
  workCategories[0].works[0],
  workCategories[3].works[0],
]

/**
 * 拼接 Unsplash 占位图地址
 * - 按作品比例在服务端裁切，保证版式稳定
 * @param work 作品数据
 */
export function getImageUrl(work: Work): string {
  return `https://images.unsplash.com/${work.imageId}?auto=format&fit=crop&w=${work.width}&h=${work.height}&q=80`
}
