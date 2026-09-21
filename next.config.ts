import type { NextConfig } from "next"

/**
 * Next.js 运行配置
 * - 当前仅允许拉取 Unsplash 占位图，替换为本人实拍作品后可收窄或删除该配置
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
