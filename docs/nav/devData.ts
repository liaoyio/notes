import type { NavData } from '../.vitepress/theme/types'

export const NAV_DATA: NavData[] = [
  {
    title: '工具库',
    items: [
      {
        title: 'lodash',
        desc: '一个一致性、模块化、高性能的 JavaScript 实用工具库',
        link: 'https://github.com/lodash/lodash',
        icon: 'https://lodash.com/assets/img/lodash.svg',
      },
      {
        title: 'ramda',
        desc: '专为函数式编程而设计的工具库',
        link: 'https://github.com/ramda/ramda',
        icon: 'https://ramdajs.com/ramdaFilled_200x235.png',
      },
      {
        title: 'qs',
        desc: '带有一些附加安全性的请求参数 parse 和 stringify 库',
        link: 'https://github.com/ljharb/qs',
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        badge: 'vue',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org',
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        badge: 'react',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN',
      },
    ],
  },
  {
    title: '时间处理',
    items: [
      {
        title: 'dayjs',
        desc: '一个轻量的处理时间和日期的 JavaScript',
        link: 'https://github.com/iamkun/dayjs',
        icon: 'https://dayjs.fenxianglu.cn/assets/favicon.png',
      },
      {
        title: 'moment',
        desc: 'JavaScript 日期处理类库',
        link: 'https://github.com/moment/moment',
        icon: 'https://api.iconify.design/logos:momentjs.svg?color=%23888888',
      },
      {
        title: 'date-fns',
        desc: '轻量级的 JavaScript 日期库,纯函数实现支持模块化',
        link: 'https://github.com/date-fns/date-fns',
        icon: 'http://momentjs.com/static/img/moment-favicon.png',
      },
      {

        title: 'lunar-javascript',
        badge: 'vue',
        desc: '支持阳历、阴历、佛历和道历的日历工具库',
        link: 'https://github.com/6tail/lunar-javascript',
        icon: 'https://toolb.cn/favicon/6tail.cn',
      },
      {
        title: 'calendar.js',
        badge: 'react',
        desc: '中国农历（阴阳历）和西元阳历即公历互转JavaScript库',
        link: 'https://github.com/jjonline/calendar.js',
      },
    ],
  },
  {
    title: '请求处理',
    items: [
      {
        title: 'axios',
        desc: '基于promise的HTTP库,可以运行在浏览器和node.js中使用',
        link: 'https://github.com/axios/axios',
        icon: 'https://axios-http.com/assets/favicon.ico',
      },
      {
        title: 'got',
        badge: 'node',
        desc: '一个人性化且功能强大的 Node.js HTTP 请求库',
        link: 'https://github.com/sindresorhus/got',
        icon: 'https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/2023/got-icon.png',
      },
      {
        title: 'oh-my-fetch',
        badge: 'node',
        desc: '更好的 fetch 请求,适用于浏览器和 node.js',
        link: 'https://github.com/unjs/ofetch',
        icon: 'https://avatars.githubusercontent.com/u/80154025?s=48&v=4',
      },
      {
        title: 'VueRequest',
        badge: 'vue',
        desc: 'Vue响应式请求库,轻松管理请求状态（支持SWR,轮询,错误重试,缓存,分页等）',
        link: 'https://www.attojs.com/',
        icon: 'https://www.attojs.com/logo@100px.png',
      },
    ],
  },
  {
    title: '字符串文本处理',
    items: [
      {
        title: 'camelcase',
        desc: '将使用破折号/点号/下划线/空格分隔的字符串转换为驼峰形式（camelCase）',
        link: 'https://github.com/sindresorhus/camelcase',
      },
      {
        title: 'change-case',
        desc: '快速转换字符串格式,支持 camelCase, PascalCase, Capital Case, snake_case, param-case, CONSTANT_CASE 等',
        link: 'https://github.com/blakeembrey/change-case',
      },
      {
        title: 'emoji-regex',
        desc: '匹配 emoji 的正则表达式',
        link: 'https://github.com/mathiasbynens/emoji-regex',
      },
    ],
  },
  {
    title: '网页文件预览',
    items: [
      {
        title: 'vue-office',
        desc: '更易用的文件预览, 支持docx、xlsx、pdf文件',
        link: 'https://501351981.github.io/vue-office/examples/docs/',
        badge: 'vue',
      },
    ],
  },
  {
    title: '精度处理',
    items: [
      {
        title: 'big.js',
        desc: '用于任意精度的十进制算术运算',
        link: 'https://github.com/MikeMcl/big.js',
      },
      {
        title: 'number-precision',
        desc: '超小型精确四则运算',
        link: 'https://github.com/nefe/number-precision',
        icon: 'https://avatars.githubusercontent.com/u/33238961?s=48&v=4',
      },
    ],
  },
  {
    title: '动画',

    items: [
      {
        title: 'typed.js',
        desc: '动态打字效果',
        link: 'https://mattboldt.com/demos/typed-js/',
      },
      {
        title: 'AutoAnimat',
        desc: '只需一行代码即可为您的应用添加动作',
        icon: 'https://auto-animate.formkit.com/assets/favicon.6d15a86f.ico',
        link: 'https://github.com/formkit/auto-animate',
      },
      {
        title: 'countup.js',
        desc: '数字滚动效果',
        link: 'https://inorganik.github.io/countUp.js/',
      },
      {
        title: 'tween.js',
        desc: '补间动画引擎',
        link: 'https://tweenjs.github.io/tween.js/',
      },
      {
        title: 'lottie',
        desc: '基于跨平台动画渲染库,用于解析使用 Bodymovin 导出为 json 的 Adobe After Effects 动画',
        link: 'http://airbnb.io/lottie/#/',
      },
      {
        title: 'gsap',
        desc: 'GreenSock 动画平台（GSAP）可以对 JavaScript 可以操作的所有内容进行动画处理',
        link: 'https://github.com/greensock/GSAP',
      },
      {
        title: 'react-countup',
        badge: 'react',
        desc: '基于 countup.js 封装的 React 组件',
        link: 'https://tr8tk.csb.app/',
      },
      {
        title: 'react-transition-group',
        badge: 'react',
        desc: '基于 DOM 的过渡动画',
        link: 'https://github.com/reactjs/react-transition-group',
      },
      {
        title: 'framer-motion ',
        badge: 'react',
        desc: '一个生产级的 React 动画库',
        link: 'https://www.framer.com/motion/',
      },
      {
        title: 'react-spring',
        badge: 'react',
        desc: '一个基于弹性力学的现代动画库',
        link: 'https://www.react-spring.dev/',
      },
    ],
  },
  {
    title: '特效',
    items: [
      {
        title: 'canvas-confetti',
        desc: '五彩纸屑特效',
        link: 'https://www.kirilv.com/canvas-confetti/',
      },
      {
        title: '在线 🌍',
        desc: '浏览器嵌入一个全球地区，可滚动，可标点，可旋转',
        link: 'https://api.iconify.design/vscode-icons:file-type-vercel.svg?color=%23888888',
      },
    ],
  },
  {
    title: '存储',
    items: [
      {
        title: 'localForage',
        desc: '一个快速、简单的浏览器存储库,快速使用indexedDB',
        link: 'https://github.com/localForage/localForage',
        icon: 'https://avatars.githubusercontent.com/u/18673496?s=48&v=4',
      },
    ],
  },
  {
    title: '滚动处理',
    items: [
      {
        title: 'body-scroll-lock',
        desc: '一种通用的 body 滚动锁定解决方案',
        link: 'https://github.com/willmcpo/body-scroll-lock',
        icon: 'https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/2023/body-scroll-lock-icon.png',
      },
      {
        title: 'better-scroll',
        desc: '重点解决移动端（已支持 PC）各种滚动场景需求的插件',
        link: 'https://better-scroll.github.io/docs/zh-CN/',
        icon: 'https://dpubstatic.udache.com/static/dpubimg/t_L6vAgQ-E/logo.svg',
      },
      {
        title: 'react-scroll',
        desc: 'React 滚动组件',
        badge: 'react',
        link: 'https://github.com/fisshy/react-scroll',
      },
      {
        title: 'smooth-scrollbar',
        desc: '可定制、可扩展和高性能的自定义滚动条解决方案',
        badge: 'react',
        link: 'https://idiotwu.github.io/smooth-scrollbar/',
      },
    ],
  },
  {
    title: '事件处理',
    items: [
      {
        title: 'hotkeys-js',
        desc: '用于捕获键盘输入和组合键',
        link: 'https://wangchujiang.com/hotkeys-js/',
        icon: 'https://api.iconify.design/twemoji:keyboard.svg?color=%23888888',
      },
    ],
  },
  {
    title: '图片处理',
    items: [
      {
        title: 'html2canvas',
        desc: '页面截图（将 DOM 节点绘制为 canvas 再生成图片',
        link: 'https://html2canvas.hertzen.com/',
        icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTZweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTYgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iUHJvcG9zYWwtLS1TdWtodW12aXQtU2V0IiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LDEyIEw0LDQ2IEwzNy4wMjMyNTU4LDQ2IEwzNy4wMjMyNTU4LDEyIEw0LDEyIFogTTIsOCBMMzkuMDIzMjU1OCw4IEM0MC4xMjc4MjUzLDggNDEuMDIzMjU1OCw4Ljg5NTQzMDUgNDEuMDIzMjU1OCwxMCBMNDEuMDIzMjU1OCw0OCBDNDEuMDIzMjU1OCw0OS4xMDQ1Njk1IDQwLjEyNzgyNTMsNTAgMzkuMDIzMjU1OCw1MCBMMiw1MCBDMC44OTU0MzA1LDUwIDEuMzUyNzA3NWUtMTYsNDkuMTA0NTY5NSAtMS4yMzI1OTUxNmUtMzEsNDggTC0yLjIyMDQ0NjA1ZS0xNiwxMCBDLTMuNTczMTUzNTVlLTE2LDguODk1NDMwNSAwLjg5NTQzMDUsOCAyLDggWiIgaWQ9IlJlY3RhbmdsZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiw0IEwxMiwzOCBMNDYsMzggTDQ2LDQgTDEyLDQgWiBNMTAsMCBMNDgsMCBDNDkuMTA0NTY5NSwtMi4wMjkwNjEyNWUtMTYgNTAsMC44OTU0MzA1IDUwLDIgTDUwLDQwIEM1MCw0MS4xMDQ1Njk1IDQ5LjEwNDU2OTUsNDIgNDgsNDIgTDEwLDQyIEM4Ljg5NTQzMDUsNDIgOCw0MS4xMDQ1Njk1IDgsNDAgTDgsMiBDOCwwLjg5NTQzMDUgOC44OTU0MzA1LDIuMDI5MDYxMjVlLTE2IDEwLDAgWiIgaWQ9IlJlY3RhbmdsZS1Db3B5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=',
      },
      {
        title: 'html-to-image',
        desc: '页面截图（将 DOM 节点绘制为 canvas 或 SVG 再生成图片）',
        link: 'https://github.com/bubkoo/html-to-image',
      },
      {
        title: 'satori',
        desc: '页面截图(将 HTML 和 CSS 转换为 SVG)',
        link: 'https://github.com/vercel/satori',
      },
      {
        title: 'medium-zoom',
        desc: '为图片提供可缩放的功能(网页图片预览)',
        link: 'https://github.com/francoischalifour/medium-zoom',
        icon: 'https://medium-zoom.francoischalifour.com/favicon.e36d4567.ico',
      },
      {
        title: 'qrcode',
        desc: 'QR 码和 2d 条码生成器(支持浏览器和 Node)',
        link: 'https://github.com/soldair/node-qrcode',
        icon: 'https://api.iconify.design/mdi:qrcode-scan.svg?color=%23888888',
      },
      {
        title: 'qrcode.react',
        badge: 'react',
        desc: 'React 的二维码组件',
        link: 'https://github.com/zpao/qrcode.react',
      },
      {
        title: 'qrcode-terminal',
        desc: '在终端中生成二维码',
        badge: 'node',
        link: 'https://github.com/gtanner/qrcode-terminal',
        icon: 'https://api.iconify.design/fa6-solid:qrcode.svg?color=%23888888',
      },
    ],
  },
  {
    title: '文件处理',
    items: [
      {
        title: 'FileSaver.js',
        desc: '保存/下载文件（受 blob 的大小和内存限制）',
        link: 'https://github.com/eligrey/FileSaver.js',
      },
      {
        title: 'StreamSaver.js',
        desc: '保存/下载文件（不受 blob 的大小和内存限制）',
        link: 'https://github.com/jimmywarting/StreamSaver.js',
      },
      {
        title: 'sheetjs',
        desc: '用于 Excel 的读取和导出',
        link: 'https://github.com/SheetJS/sheetjs',
        icon: 'https://git.sheetjs.com/assets/img/logo.svg',
      },
      {
        title: 'node-fs-extra',
        badge: 'node',
        desc: 'Node fs 模块的增强（如 promise 的支持）',
        link: 'https://github.com/jprichardson/node-fs-extra',
      },
      {
        title: 'rimraf',
        badge: 'node',
        desc: '用于删除文件和文件夹,类似 rm -rf',
        link: 'https://github.com/isaacs/rimraf',
      },
      {
        title: 'node-glob',
        badge: 'node',
        desc: '文件查找',
        link: 'https://github.com/isaacs/node-glob',
        icon: 'https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/2023/glob-solo-icon.png',
      },
      {
        title: 'globby',
        badge: 'node',
        desc: '使用更友好的文件查找（支持 promise、否定模式、ignore 文件配置等）',
        link: 'https://github.com/sindresorhus/globby',
      },
      {
        title: 'cpy',
        badge: 'node',
        desc: '使用更友好的文件复制（支持 glob 模式）',
        link: 'https://github.com/sindresorhus/cpy',
      },
    ],
  },
  {
    title: '版本号处理',
    items: [
      {
        title: 'semver',
        desc: '语义化版本解析器',
        link: 'https://github.com/npm/node-semver',
        icon: 'https://avatars.githubusercontent.com/u/6078720?s=48&v=4',
      },
    ],
  },
  {
    title: '富文本',
    items: [
      {
        title: 'braft-editor',
        desc: '美观易用的React富文本编辑器,基于draft-js开发',
        link: 'https://github.com/margox/braft-editor',
      },
    ],
  },
  {
    title: '代码编辑器',
    items: [
      {
        title: 'monaco-editor',
        desc: '微软开源的基于 VSCode 的代码编辑器。支持智能提示、代码高亮',
        link: 'https://github.com/microsoft/monaco-editor',
        icon: 'https://microsoft.github.io/monaco-editor/9a60a3b3c5fcf6a9d2de2c28e5eaa986.svg',
      },
    ],
  },
  {
    title: '代码高亮',
    items: [
      {
        title: 'prismjs',
        desc: '轻量级、可扩展的语法高亮库',
        link: 'https://github.com/PrismJS/prism',
        icon: 'https://prismjs.com/assets/favicon.png',
      },
      {
        title: 'highlight.js',
        desc: '具有自动语言检测功能的语法高亮库',
        link: 'https://github.com/highlightjs/highlight.js',
        // https://highlightjs.org/icon.png
        icon: 'https://avatars.githubusercontent.com/u/9039821?s=48&v=4',
      },
    ],
  },
  {
    title: '轮播',
    items: [
      {
        title: 'swiper',
        desc: '高性能的触摸滑动插件,支持 HTML、 Vue 、React、AngularJS、 Svelte',
        link: 'https://github.com/nolimits4web/swiper',
        icon: 'https://swiperjs.com/images/swiper-logo.svg',
      },
      {
        title: 'vue-awesome-swiper',
        desc: '基于swiper封装的Vue组件,支持 Vue 2 和 Vue 3',
        badge: 'vue',
        link: 'https://github.com/surmon-china/vue-awesome-swiper',
      },
    ],
  },
  {
    title: '网页嵌入编辑器',
    items: [
      {
        title: 'codemirror-editor-vue3',
        desc: '基于 Codemirror 5开发的Vue3在线IDE插件，仅支持 vue3.',
        link: 'https://github.com/rennzhang/codemirror-editor-vue3',
        icon: 'https://codemirror.net/style/logo.svg',
      },
    ],
  },
  {
    title: '网页活动',
    items: [
      {
        title: 'lucky-canvas抽奖插件',
        desc: ' 基于 TS + Canvas 开发的【大转盘 / 九宫格 / 老虎机】抽奖插件',
        link: 'https://100px.net/demo/more.html',
        icon: 'https://100px.net/logo.png',
      },
    ],
  },
  {
    title: '数据校验',
    items: [
      {
        title: 'validator.js',
        desc: '字符串验证',
        link: 'https://github.com/validatorjs/validator.js',
        icon: 'https://avatars.githubusercontent.com/u/52114810?s=48&v=4',
      },
      {
        title: 'async-validator',
        desc: '异步表单验证',
        link: 'https://github.com/yiminghe/async-validator',
      },
    ],
  },
  {
    title: '表单处理',
    items: [
      {
        title: 'formik',
        badge: 'react',
        desc: '提供组件和 Hooks 来管理表单状态和验证',
        link: 'https://github.com/jaredpalmer/formik',
        icon: 'https://formik.org/images/favicon.png',
      },
      {
        title: 'react-hook-form',
        badge: 'react',
        desc: '用于表单状态管理和验证的 React Hook',
        link: 'https://github.com/react-hook-form/react-hook-form',
        icon: 'https://toolb.cn/favicon/react-hook-form.com',
      },
      {
        title: 'formily',
        desc: '阿里统一前端表单解决方案,支持 React, Vue 2/3',
        link: 'https://github.com/alibaba/formily',
        icon: 'https://img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
      },
    ],
  },
  {
    title: '表格',
    items: [
      {
        title: 'ag-gri',
        desc: '功能齐全的高性能表格,支持HTML、Vue、React、AngularJS、 Web Components',
        link: 'https://github.com/ag-grid/ag-grid',
        icon: 'https://www.ag-grid.com/static/favicon-152-37f184aa3ca1907fc2692a2453daf0b8.png',
      },
    ],
  },
  {
    title: '拖放',
    items: [
      {
        title: 'Sortable.js',
        desc: '适用于现代浏览器和触摸设备的可重新排序的拖放列表',
        link: 'https://github.com/ag-grid/ag-grid',
      },
      {
        title: 'dnd-kit',
        badge: 'react',
        desc: 'React的现代、轻量级、高性能、可访问和可扩展的拖放工具包',
        link: 'https://github.com/ag-grid/ag-grid',
      },
    ],
  },
  {
    title: '用户体验',
    items: [
      {
        title: 'vue-tour',
        badge: 'vue',
        desc: '用户引导动画（使用 box-shadow 实现高亮选中）',
        link: 'https://pulsardev.github.io/vue-tour/',
        icon: 'https://api.iconify.design/vscode-icons:file-type-vue.svg?color=%23888888',
      },
      {
        title: 'react-joyride',
        badge: 'react',
        desc: '用户引导动画（使用 mix-blend-mode 实现高亮）',
        link: 'https://react-joyride.com/',
        icon: 'https://react-joyride.com/favicon.ico',
      },
      {
        title: 'shepherd',
        badge: 'react',
        desc: '用户引导动画（基于 SVG 和 floating-ui）',
        link: 'https://github.com/shipshapecode/shepherd',
        icon: 'https://shepherdjs.dev/landing/assets/favicons/apple-touch-icon.png',
      },
      {
        title: 'intro.js',
        desc: '用户引导动画（使用 box-shadow 实现遮罩）',
        link: 'https://github.com/usablica/intro.js',
        icon: 'https://introjs.com/img/logo.svg',
      },
      {
        title: 'driver.js',
        desc: '用户引导动画（使用 outline 实现遮罩）',
        link: 'https://github.com/kamranahmedse/driver.js',
        icon: 'https://driverjs.com/favicon.svg',
      },

      {
        title: 'screenfull.js',
        badge: 'react',
        desc: '将页面或任何元素全屏显示',
        link: 'https://github.com/sindresorhus/screenfull',
      },
      {
        title: 'nprogress',
        badge: 'react',
        desc: '轻量级的加载进度条',
        link: 'https://github.com/rstacruz/nprogress',
        icon: 'https://api.iconify.design/streamline:interface-page-controller-loading-1-progress-loading-load-wait-waiting.svg?color=%23888888',
      },
      {
        title: 'floating-ui',
        desc: '创建浮动元素的轻量库（气泡提示、用户引导、下拉框等）',
        link: 'https://github.com/floating-ui/floating-ui',
      },
    ],
  },
  {
    title: '复制到剪贴板',
    items: [
      {
        title: 'clipboard.js',
        desc: '复制到剪贴板',
        link: 'https://github.com/zenorocha/clipboard.js',
        icon: 'https://clipboardjs.com/favicon.ico',
      },
      {
        title: 'copy-to-clipboard',
        desc: '复制到剪贴板',
        link: 'https://github.com/sudodoki/copy-to-clipboard',
        icon: 'https://api.iconify.design/emojione:clipboard.svg?color=%23888888',
      },
      {
        title: 'clipboardy',
        badge: 'node',
        desc: '在 Node.js 中访问系统剪贴板',
        icon: 'https://api.iconify.design/fluent-emoji-flat:clipboard.svg?color=%23888888',
        link: 'https://github.com/sindresorhus/clipboardy',
      },
    ],
  },
  {
    title: '开发调试',
    items: [
      {
        title: 'http-server',
        badge: 'node',
        desc: '在本地快速启动一个静态文件服务器（轻量）',
        link: 'https://github.com/http-party/http-server',
        icon: 'https://raw.githubusercontent.com/http-party/http-server/master/screenshots/public.png',
      },
      {
        title: 'serve',
        badge: 'node',
        desc: '在本地快速启动一个静态文件服务器（支持各种配置功能强大）',
        link: 'https://github.com/vercel/serve',
        icon: 'https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/2023/serve-node-icon.png',
      },

      {
        title: 'vconsole',
        badge: 'node',
        desc: '一个轻量、可拓展、针对手机网页的前端开发者调试面板',
        link: 'https://github.com/Tencent/vConsole',
        icon: 'https://avatars.githubusercontent.com/u/18461506?s=48&v=4',
      },
      {
        title: 'eruda',
        badge: 'node',
        desc: '在移动浏览器上展示开发者调试面板',
        link: 'https://github.com/liriliri/eruda',
        icon: 'https://eruda.liriliri.io/img/apple-icon-180x180.png',
      },
    ],
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        title: 'Vite',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev/',
        icon: 'https://api.iconify.design/vscode-icons:file-type-vite.svg?color=%23888888',
      },
      {
        title: 'Rollup',
        desc: '一个 JavaScript 模块打包器',
        link: 'https://github.com/rollup/rollup',
        icon: 'https://api.iconify.design/logos:rollupjs.svg?color=%23888888',
      },
      {
        title: 'Turbo',
        desc: '基于 Rust 的增量打包和构建系统',
        link: 'https://turbo.build/',
        icon: 'https://api.iconify.design/vscode-icons:file-type-turbo.svg?color=%23888888',
      },
      {
        title: 'Webpack',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com/',
        icon: 'https://api.iconify.design/logos:webpack.svg?color=%23888888',

      },
      {
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn/',
        icon: 'https://api.iconify.design/vscode-icons:file-type-babel2.svg?color=%23888888',

      },
      {
        title: 'esbuild',
        desc: '基于 Go 的前端编译工具',
        link: 'https://esbuild.github.io/',
        icon: 'https://api.iconify.design/logos:esbuild.svg?color=%23888888',

      },
      {
        title: 'SWC',
        desc: '基于 Rust 的 Web 编译平台',
        link: 'https://swc.rs/',
        icon: 'https://api.iconify.design/vscode-icons:file-type-swc.svg?color=%23888888',

      },
      {
        title: 'tsup',
        desc: '零配置的 TypeScript 打包工具',
        link: 'https://github.com/egoist/tsup',
      },
      {
        title: 'unbuild',
        desc: '一个统一的 javascript 构建系统',
        link: 'https://github.com/unjs/unbuild',
      },
      {
        title: 'unplugin',
        desc: '用于构建工具的统一插件系统',
        link: 'https://github.com/unjs/unplugin',
        icon: 'https://avatars.githubusercontent.com/u/80154025?s=48&v=4',
      },
    ],
  },
  {
    title: 'Webpack 相关',
    items: [
      {
        title: 'webpack-chain',
        desc: '使用链式 API 来生成和简化 webpack 的配置的修改',
        link: 'https://github.com/neutrinojs/webpack-chain',
        icon: 'https://api.iconify.design/vscode-icons:folder-type-webpack.svg?color=%23888888',
      },
      {
        title: 'speed-measure-webpack-plugin',
        desc: '统计 webpack 在各阶段的构建速度',
        link: 'https://github.com/stephencookdev/speed-measure-webpack-plugin',
        icon: 'https://api.iconify.design/vscode-icons:folder-type-webpack.svg?color=%23888888',
      },
      {
        title: 'webpack-bundle-analyzer',
        desc: '通过可视化分析 webpack 打包文件的大小',
        link: 'https://github.com/webpack-contrib/webpack-bundle-analyzer',
        icon: 'https://api.iconify.design/vscode-icons:folder-type-webpack.svg?color=%23888888',
      },
    ],
  },
  {
    title: '解析相关',
    items: [
      {
        title: 'cheerio',
        badge: 'node',
        desc: '为服务器特别定制的,快速、灵活、实施的 jQuery 核心实现,可以解析任何 HTML 或 XML 文档',
        link: 'https://github.com/cheeriojs/cheerio',
        icon: 'https://cheerio.js.org/img/orange-c.svg',
      },
    ],
  },
  {
    title: '自动化工具',
    items: [
      {
        title: 'playwright',
        desc: '支持 Firefox / Chrome / WebKit(Safari) 三大浏览器的自动化工具',
        link: 'https://github.com/microsoft/playwright',
        icon: 'https://api.iconify.design/logos:playwright.svg?color=%23888888',
      },
      {
        title: 'puppeteer',
        desc: '控制 Chromium 的自动化工具',
        link: 'https://github.com/puppeteer/puppeteer',
        icon: 'https://api.iconify.design/logos:puppeteer.svg?color=%23888888',
      },
      {
        title: 'puppeteer-extra',
        desc: 'puppeteer 的插件扩展',
        icon: 'https://pptr.dev/img/favicon.ico',
        link: 'https://github.com/berstend/puppeteer-extra',
      },
    ],
  },
  {
    title: 'lint / 格式化相关',
    items: [
      {
        title: 'prettier',
        desc: '代码格式化工具',
        link: 'https://github.com/prettier/prettier',
        icon: 'https://api.iconify.design/vscode-icons:file-type-light-prettier.svg?color=%23888888',
      },
      {
        title: 'eslint',
        desc: 'ECMAScript/JavaScript 代码检查工具',
        link: 'https://github.com/eslint/eslint',
        icon: 'https://api.iconify.design/logos:eslint-old.svg?color=%23888888',
      },
      {
        title: 'stylelint',
        desc: 'CSS 代码检查工具',
        link: 'https://github.com/stylelint/stylelint',
        icon: 'https://api.iconify.design/logos:stylelint.svg?color=%23888888',
      },
      {
        title: 'markdownlint',
        desc: 'Markdown 格式检查工具',
        link: 'https://github.com/DavidAnson/markdownlint',
        icon: 'https://api.iconify.design/skill-icons:markdown-light.svg?color=%23888888',
      },
      {
        title: 'commitlint',
        desc: 'Git Commit Messages 格式检查工具',
        link: 'https://github.com/conventional-changelog/commitlint',
        icon: 'https://api.iconify.design/vscode-icons:file-type-commitlint.svg?color=%23888888',
      },
    ],
  },
  {
    title: 'Git Commit 辅助工具',
    items: [
      {
        title: 'husky',
        desc: 'Git Hooks工具,让你操作 Git Hooks 变得更容易',
        link: 'https://github.com/typicode/husky',
        icon: 'https://api.iconify.design/fluent-emoji:dog-face.svg?color=%23888888',
      },
      {
        title: 'lint-staged',
        desc: '只对 Git 暂存文件运行 lint 从而提高速度',
        link: 'https://github.com/okonet/lint-staged',
        icon: 'https://api.iconify.design/vscode-icons:file-type-lintstagedrc.svg?color=%23888888',
      },
      {
        title: 'commitizen',
        desc: 'commit 辅助工具,获得有关提交消息格式的即时反馈',
        link: 'https://github.com/commitizen/cz-cli',
        icon: 'https://api.iconify.design/logos:commitizen.svg?color=%23888888',
      },
    ],
  },
  {
    title: 'CLI 相关',
    items: [
      {
        title: 'zx',
        desc: '用 JavaScript 或 TypeScript 编写简单的命令行脚本',
        link: 'https://github.com/google/zx',
        icon: 'https://google.github.io/zx/img/logo.svg',
      },
      {
        title: 'inquirer',
        desc: '交互式命令行工具',
        link: 'https://github.com/SBoudrias/Inquirer.js',
      },
      {
        title: 'enquirer',
        desc: '交互式命令行工具（更好看）',
        link: 'https://github.com/enquirer/enquirer',
      },
      {
        title: 'prompts',
        desc: '轻量级交互式命令行工具',
        link: 'https://github.com/terkelg/prompts',
      },
      {
        title: 'execa',
        desc: 'Node child_process 模块的增强（如 promise 的支持、移除输出中最后的换行符等）',
        link: 'https://github.com/sindresorhus/execa',
      },
      {
        title: 'npm-run-all',
        desc: '用于并行或串行执行多个 npm 脚本',
        link: 'https://github.com/mysticatea/npm-run-all',
      },
      {
        title: 'commander.js',
        desc: '编写指令和处理命令行',
        link: 'https://github.com/tj/commander.js',
      },
      {
        title: 'yargs',
        desc: '命令行参数解析',
        link: 'https://github.com/yargs/yargs',
        icon: 'https://yargs.js.org/images/yargs-logo.png',
      },
      {
        title: 'plop',
        desc: '轻量级的项目搭建生成工具',
        link: 'https://github.com/plopjs/plop',
        icon: 'https://plopjs.com/apple-touch-icon.png',
      },
      {
        title: 'dotenv',
        desc: '从.env文件加载环境变量到 process.env',
        link: 'https://github.com/motdotla/dotenv',
        icon: 'https://api.iconify.design/vscode-icons:file-type-dotenv.svg?color=%23888888',
      },
      {
        title: 'dotenv-expand',
        desc: 'dotenv 的变量扩展,使 .env 文件支持变量语法',
        link: 'https://github.com/motdotla/dotenv-expand',
        icon: 'https://raw.githubusercontent.com/motdotla/dotenv-expand/master/dotenv-expand.png',
      },
      {
        title: 'simple-git',
        desc: '在 node 中执行 git 命令',
        link: 'https://github.com/steveukx/git-js',
      },
      {
        title: 'cosmiconfig',
        desc: '搜索并加载配置文件',
        link: 'https://github.com/cosmiconfig/cosmiconfig',
      },
    ],
  },
  {
    title: '命令行输出美化',
    items: [
      {
        title: 'chalk',
        desc: '美化终端输出的文本样式',
        link: 'https://github.com/chalk/chalk',
        icon: 'https://avatars.githubusercontent.com/u/13122722?s=48&v=4',
      },
      {
        title: 'picocolors',
        desc: '美化终端输出的文本样式（更轻量）',
        link: 'https://github.com/alexeyraspopov/picocolors',
        icon: 'https://avatars.githubusercontent.com/u/858295?s=48&v=4',
      },
      {
        title: 'ora',
        desc: '命令行 loading 效果',
        link: 'https://github.com/sindresorhus/ora',

      },
    ],
  },
  {
    title: '站点生成器',
    items: [
      {
        title: 'Astro',
        badge: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build',
        icon: 'https://api.iconify.design/logos:astro-icon.svg?color=%23888888',
      },
      {
        icon: 'https://api.iconify.design/logos:vitejs.svg?color=%23888888',
        title: 'VitePress',
        badge: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev',
      },
      {
        icon: 'https://api.iconify.design/logos:vue.svg?color=%23888888',
        title: 'VuePress',
        badge: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh',
      },
      {
        icon: 'https://nextra.site/favicon.svg',
        title: 'nextra',
        badge: 'nextra',
        desc: '使用 Next.js 和 MDX制作精美的网站',
        link: 'https://rspress.dev/zh/',
      },
      {
        icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/rspress/rspress-logo.png',
        title: 'Rspress',
        badge: 'Rspress',
        desc: '基于Rspack的静态站点生成器，基于React框架进行渲染',
        link: 'https://nextra.site/',
      },

      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        badge: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org',
      },
      {
        icon: 'https://api.iconify.design/logos:docusaurus.svg?color=%23888888',
        title: 'Docusaurus',
        badge: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN',
      },
    ],
  },
]
