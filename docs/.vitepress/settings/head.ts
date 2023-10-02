import process from 'node:process'
import type { HeadConfig } from 'vitepress'

import { description, keywords, name, site } from './meta'

export const head: HeadConfig[] = [
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
  ['meta', { name: 'keywords', content: keywords }],
  ['meta', { name: 'author', content: 'Choi Yang' }],
  ['meta', { property: 'og:type', content: 'article' }],
  ['meta', { name: 'application-name', content: name }],
  ['meta', { name: 'apple-mobile-web-app-title', content: name }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ['link', { rel: 'mask-icon', href: 'https://github1s.com/favicon-light.svg', color: '#06f' }],
  ['meta', { name: 'theme-color', content: '#06f' }],
  ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/icons/apple-touch-icon.png' }],

  // webfont
  ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
  ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
  // og
  ['meta', { property: 'og:description', content: description }],
  ['meta', { property: 'og:url', content: site }],
  ['meta', { property: 'og:locale', content: 'zh_CN' }],
  // analytics
  ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
  /**  图片预览  */
  // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css' }],
  // ['script', { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js' }],
]
