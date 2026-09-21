# 摄影师个人作品集网站

基于 Next.js（App Router）与 shadcn/ui 搭建的摄影作品集站点，包含首页、简介、作品、报价、联系五个页面。整体采用画廊式编辑排版：宋体大标题、大留白与发丝分割线，质感依靠布局与字距体现。

## 字体方案

通过 `next/font` 自托管，浏览器不向外部字体服务发起请求：

| 用途 | 拉丁字体 | 中文回落 |
| --- | --- | --- |
| 标题 | Cormorant Garamond | Noto Serif SC（思源宋体） |
| 正文 | Outfit | Noto Sans SC（思源黑体） |

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 代码检查 / 类型检查 / 生产构建
pnpm lint
pnpm typecheck
pnpm build
```

## 上线前必须替换的占位内容

当前站点全部使用占位信息与占位图，请按以下清单逐一替换。

### 1. 个人信息（`lib/site.ts`）

- `photographer` / `name`：占位姓名「陆野」与站点名称
- `email`：占位邮箱 `hello@example.com`（页眉、页脚、报价页与联系页均引用此字段，单点修改即可）
- `location`：占位城市
- `socials`：Instagram / 小红书 / 微博的链接地址

### 2. 摄影作品（`lib/works.ts`）

作品按「人像、婚礼、风光与旅行、街头」四组维护，共 18 张图片，每张均为 Unsplash 占位图，数据项旁的 `TODO` 注释标注了建议画幅比例。替换方式：

1. 将本人实拍作品放入 `public/works/` 目录；
2. 把对应数据项的 `imageId` 改为本地路径（同步调整 `getImageUrl` 的处理逻辑），或直接改为静态 import；
3. `title` 与 `location` 为占位文案，需一并替换。

### 3. 其他独立图片

| 位置 | 文件 | 用途 |
| --- | --- | --- |
| 首页首屏右侧 | `components/home/home-hero.tsx` | `HERO_IMAGE`，建议竖幅 3:4 |
| 简介页左侧 | `components/about/photographer-portrait.tsx` | `PORTRAIT_IMAGE`，建议竖幅 3:4 |

### 4. 报价内容（`lib/pricing.ts`）

- `pricingPlans`：三档套餐的价格、时长、交付数量与服务清单均为示例
- `addonItems`：加购项目与费用为示例

### 5. 收窄图片配置

全部改为本地图片后，可删除 `next.config.ts` 中的 `images.remotePatterns`（Unsplash 域名白名单）配置。

## 目录约定

- `app/`：页面路由与根布局
- `components/layout/`：页眉、页脚、导航与容器
- `components/home/`、`about/`、`works/`、`pricing/`、`contact/`：按页面归属的区块组件
- `components/common/`：跨页面通用组件
- `lib/`：站点配置、作品数据、报价数据等纯数据模块
