import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import env from "./src/config/env";
import eslintPlugin from "vite-plugin-eslint";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import ViteImages from "vite-plugin-vue-images";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import AutoImportTypes from "auto-import-types";
import PiniaAutoRefs from "pinia-auto-refs";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  plugins: [
    uni(),
    AutoImportTypes(),
    PiniaAutoRefs(),
    eslintPlugin(),
    VueSetupExtend(),
    AutoImport({
      dts: "src/auto-imports.d.ts",
      imports: [
        "vue",
        "uni-app",
        "pinia",
        {
          "@/helper/pinia-auto-refs": ["useStore"]
        }
      ],
      exclude: ["createApp"],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      extensions: ["vue"],
      dts: "src/components.d.ts"
    }),
    ViteImages({
      dirs: ["src/static/images"], // 指明图片存放目录
      extensions: ["jpg", "jpeg", "png", "svg", "webp"], // 有效的图像扩展
      customResolvers: [], // 覆盖名称->图像路径解析的默认行为
      customSearchRegex: "([a-zA-Z0-9]+)" // 重写搜索要替换的变量的Regex。
    }),
    // 使用 svg 图标
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/static/icons")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  server: {
    open: false,
    cors: true,
    proxy: {
      "^/api": {
        target: env.apiBaseUrl, // 后端服务实际地址
        changeOrigin: true, // 开启代理
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
});
