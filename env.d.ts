/// <reference types="vitepress/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module '@mdit-vue/shared';
declare module 'virtual:pwa-register';
declare module 'markdown-it-custom-attrs';
declare module 'spark-md5';
