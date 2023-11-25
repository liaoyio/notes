import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import type { PageData } from 'vitepress'
import { defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { head, nav, sidebar } from './settings'
import { description, name } from './settings/meta'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []

export default defineConfig({
  base: '/notes/',
  outDir: '../dist',
  title: name,
  description,
  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,
  useWebFonts: false,
  ignoreDeadLinks: true,
  markdown: {
    config(md) {
      /** 代码示例插件 */
      md.use(containerPreview)
      md.use(componentPreview)
    },
    lineNumbers: true,
  },
  lang: 'zh-CN',
  locales: { root: { label: '简体中文', lang: 'zh-CN' } },

  /* 主题配置 */
  themeConfig: {
    logo: '/yi.svg',
    /* 右侧大纲配置 */
    outline: { level: 'deep', label: '本页目录' },
    /* 底部按钮文字 */
    docFooter: { prev: '上一篇', next: '下一篇' },
    outlineTitle: '导航栏',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '归档',
    darkModeSwitchLabel: '外观',
    lastUpdatedText: '上次更新',
    editLink: {
      pattern: 'https://github.com/liaoyio/notes/tree/main/docs/:path',
      text: '在 GitHub 上查看此页',
    },
    // footer: { copyright: `版权所有 © 2022-${new Date().getFullYear()} Yi` },
    nav,
    sidebar,
    /* Algolia DocSearch 配置 */
    // algolia,
    socialLinks: [{ icon: 'github', link: 'https://github.com/liaoyio' }],
  },
  head,
  /* 生成站点地图 */
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id)) {
      links.push({
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated,
      })
    }
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://github.com/liaoyio/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach(link => sitemap.write(link))
    sitemap.end()
    // eslint-disable-next-line promise/param-names
    await new Promise(r => writeStream.on('finish', r))
  },
})
