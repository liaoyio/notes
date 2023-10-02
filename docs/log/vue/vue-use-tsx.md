---
title: Vue使用Tsx语法
---


# Vue使用Tsx语法


:::tip 相关资料

- [DevUI 中 VUE 的 TSX 函数式组件实践](https://juejin.cn/post/6999260884631552037)

- [再聊 Vue 的 TSX 函数式组件](https://juejin.cn/post/7000688749017317407)

- [VUE2 进阶至 VUE3 七（TSX & 深入 v-model）](https://juejin.cn/post/7084173919313199117#heading-3)

- [Vite + Vue3 使用 TSX/JSX](https://juejin.cn/post/6967993273973473311)
:::




## 各种配置报错问题

:::warning
每次修改配置后,需要重新启动 vscode
:::

### 导入 `module.css | scss` 报错

项目创建 `typed-css.d.ts` 文件

```ts
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
```

将其配置到`tsconfig.json`

```json{12}
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Node",
    "target": "ESNext",
    "jsx": "preserve", //就是这个参数
    "experimentalDecorators": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  },
  "exclude": ["node_modules", "**/node_modules/*"],
  "include": ["src", "docs", "typed-css.d.ts"]
}
```



### VSCode 报错 ReferenceError: React is not defined

**安装并配置 @vitejs/plugin-vue-jsx 插件**

```ts
// vite.config.ts

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueJsx from '@vitejs/plugin-vue-jsx' // 添加这一句

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // 添加这一句
  ],
})
```
修改`tsconfig.json`文件

```json{6}
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Node",
    "target": "ESNext",
    "jsx": "preserve", //就是这个参数
    "experimentalDecorators": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
```
