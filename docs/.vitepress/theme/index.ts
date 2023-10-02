import process from 'node:process'
import { useData, useRoute } from 'vitepress'
import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h, watch } from 'vue'
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import './styles/index.scss'
import 'uno.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mediumZoom from 'medium-zoom'

import MNavLinks from './components/MNavLinks.vue'

if (typeof window !== 'undefined') {
  /* 注销 PWA 服务 */
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations)
        registration.unregister()
    })
  }

  /* 删除浏览器中的缓存 */
  if ('caches' in window) {
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          return caches.delete(key)
        }),
      )
    })
  }
}

let homePageStyle: HTMLStyleElement | undefined

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass)
      props.class = frontmatter.value.layoutClass
    return h(DefaultTheme.Layout, props, {
      /**
       * 相关插槽
       * https://vitepress.dev/guide/extending-default-theme#layout-slots
       * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
       */
      // 'nav-bar-title-after': () => h(MNavVisitor), // 标题右侧插槽
      // 'doc-after': () => h(MDocFooter), // 文章底部 footer
      // 'aside-bottom': () => h(MAsideSponsors), // 打赏
    })
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.use(ElementPlus)
    app.component('MNavLinks', MNavLinks)
    app.component('DemoPreview', NaiveUIContainer)
    app.provide('DEV', process.env.NODE_ENV === 'development')

    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
      )
    }
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => initZoom())
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome'))
    document.documentElement.classList.add('browser-chrome')

  else if (browser.includes('firefox'))
    document.documentElement.classList.add('browser-firefox')

  else if (browser.includes('safari'))
    document.documentElement.classList.add('browser-safari')
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  }
  else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}

export default theme
