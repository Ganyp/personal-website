/**
 * 报价数据模块
 * 生命周期：构建期静态读取，报价页卡片与加购表格的唯一数据源。
 * 核心数据结构：
 * - PricingPlan：一个服务套餐（时长、交付、服务清单与价格）
 * - AddonItem：一项可加购服务
 * 注意：价格与套餐内容均为示例，待本人按实际报价确认替换。
 */

/** 服务套餐定义 */
export interface PricingPlan {
  /** 套餐标识 */
  id: string
  /** 套餐名称 */
  name: string
  /** 适用场景一句话说明 */
  scenario: string
  /** 价格展示文案（"起"字与套餐语义保持一致） */
  price: string
  /** 计价单位说明 */
  unit: string
  /** 拍摄时长 */
  duration: string
  /** 精修交付数量 */
  delivery: string
  /** 服务清单 */
  features: string[]
  /** 是否为推荐套餐（中间卡片轻突出） */
  featured: boolean
}

/** 可加购项目定义 */
export interface AddonItem {
  /** 加购项目名称 */
  name: string
  /** 项目说明 */
  description: string
  /** 费用文案 */
  price: string
}

/** 全部服务套餐（顺序即展示顺序） */
export const pricingPlans: PricingPlan[] = [
  {
    id: "portrait",
    name: "个人写真",
    scenario: "个人写真、情侣与家庭纪念",
    price: "¥1,280",
    unit: "起 / 次",
    duration: "约 2 小时",
    delivery: "12 张精修",
    features: [
      "拍摄前沟通造型与场景",
      "单场景拍摄，可换一套服装",
      "全部底片初选后赠送",
      "交付周期 7 个工作日",
    ],
    featured: false,
  },
  {
    id: "wedding",
    name: "婚礼跟拍",
    scenario: "婚礼全天记录",
    price: "¥3,980",
    unit: "起 / 场",
    duration: "全天跟拍",
    delivery: "60 张精修",
    features: [
      "新娘准备至宴席全程记录",
      "仪式与家人环节双机位备份",
      "当日预告短片 9 张",
      "全部底片初选后赠送",
      "交付周期 20 个工作日",
    ],
    featured: true,
  },
  {
    id: "commercial",
    name: "商业合作",
    scenario: "品牌形象、产品与空间拍摄",
    price: "面议",
    unit: "按项目报价",
    duration: "按拍摄方案",
    delivery: "按使用需求",
    features: [
      "先沟通用途与投放渠道",
      "提供分镜或拍摄方案",
      "可配合美术与造型团队",
      "图片授权范围在合同中约定",
    ],
    featured: false,
  },
]

/** 加购项目列表（展示为行式表格） */
export const addonItems: AddonItem[] = [
  {
    name: "额外精修",
    description: "在套餐精修数量之外加选",
    price: "¥80 / 张",
  },
  {
    name: "延时拍摄",
    description: "超出套餐时长后继续拍摄",
    price: "¥600 / 小时",
  },
  {
    name: "外景交通",
    description: "跨城或远郊外景的差旅成本",
    price: "按实际产生",
  },
  {
    name: "加急交付",
    description: "48 小时内完成精修交付",
    price: "套餐费用的 30%",
  },
]
