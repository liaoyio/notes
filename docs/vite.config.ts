import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(async () => {
  return <UserConfig>{
    server: {
      hmr: { overlay: false },
      fs: { allow: [resolve(__dirname, '..')] },
      proxy: {
        '/test-api': {
          target: 'http://124.222.108.118:8075',
          changeOrigin: true,
          rewrite: path => path.substring('/test-api'.length),
        },
      },
    },
    plugins: [
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
        resolvers: [
          // 自动导入图标组件
          IconsResolver({ prefix: 'Icon' }),
        ],
        dts: './.vitepress/auto-imports.d.ts',
      }),
      Components({
        dirs: resolve(__dirname, '.vitepress/theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        // 自动注册图标组件
        resolvers: [
          // 自动注册图标组件
          IconsResolver({ enabledCollections: ['ep'] }),
        ],
        dts: './.vitepress/components.d.ts',
        transformer: 'vue3',
      }),
      Icons({ compiler: 'vue3', autoInstall: true, defaultStyle: 'display: inline-block' }),
      UnoCSS(),
      vueJsx(),
    ],
  }
})
