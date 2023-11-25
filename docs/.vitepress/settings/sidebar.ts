import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/basic/': basic(),
  '/patterns/': partterns(),
  '/algorithm/': algorithm(),
  '/tools/': [
    {
      text: '软件 & 配置',
      items: [
        { text: 'Mac 常用软件', link: '/tools/01_mac' },
        { text: 'Mac 前端开发环境', link: '/tools/mac-dev' },
        { text: 'Visual Studio Code 配置', link: '/tools/02_vscode' },
      ],
    },
    { text: '在线工具', link: '/tools/03_tools' },

  ],
  '/log/': [
    {
      text: 'CSS',
      items: [
        { text: '一些日常开发CSS技巧总结', link: '/log/css/' },
        { text: 'CSS 树形组织架构图', link: '/log/css-tree' },
        { text: '滚动条导致页面偏移', link: '/log/scroll_bug' },
        { text: 'Sticky Header', link: '/log/sticky_header' },
        { text: '索引组件滚动高亮', link: '/log/index_comp' },
        { text: 'SVG 环形统计条', link: '/log/svg_circle' },
        { text: 'white-space-nowrap 撑出了滚动条但撑不开盒子的宽度 ?', link: '/log/white-space-nowrap' },
      ],
    },
    {
      text: '组件封装技巧',
      items: [
        { text: '只在文本溢出时显示 Tooltip', link: '/log/ep/tooltip' },
        { text: '妙用 computed 拦截 v-model', link: '/log/ep/妙用computed拦截v-model' },
        { text: '在Vue中使用容器组件 & 展示组件', link: '/log/ep/容器组件和展示组件' },
        { text: '优雅的封装弹窗组件', link: '/log/ep/dialog' },
      ],
    },
    {
      text: 'TSX & TS',
      items: [
        { text: 'Vue使用Tsx语法', link: '/log/vue/vue-use-tsx' },
        { text: 'Vue + ts开发一些类型定义技巧', link: '/log/vue/vue-ts-type' },
      ],
    },
    {
      text: '网页动画相关',
      items: [
        { text: 'css 动画基础', link: '/log/vue/animation_css' },
        { text: 'Vue Transition 组件', link: '/log/vue/animation_vue' },
      ],
    },
  ],
  '/web/': [
    {
      text: 'Git',
      collapsed: false,
      items: [
        { text: 'Git 基础', link: '/web/git/01_base' },
        { text: '如何正常访问 GitHub ?', link: '/web/git/02_503' },
        { text: '📕 常用命令备忘录', link: '/web/git/03_meno' },
      ],
    },
    {
      text: 'TypeScript',
      collapsed: false,
      items: [
        { text: '🧸 基础知识', link: '/web/ts/' },
        { text: '⚙️ 编译配置', link: '/web/ts/tsconfig' },
        { text: '🤸‍♀️ 类型体操', link: '/web/ts/challenges' },
      ],
    },
    {
      text: 'Vue',
      collapsed: false,
      items: [
        { text: '🍍 Pinia', link: '/web/vue/pinia' },
        { text: '💥 Vue3', link: '/web/vue/vue3' },
        { text: '🌰 Dome', link: '/web/vue/dome' },
      ],
    },
  ],
}
function basic() {
  return [
    {
      text: 'HTML5 & CSS',
      collapsed: false,
      items: [
        { text: '写给自己看的flex布局', link: '/basic/css/写给自己看的flex布局' },
        { text: 'transform-origin', link: '/basic/css/01_transform-origin' },
      ],
    },
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: '🧩 原生函数 & 属性', link: '/basic/js/api/fn' },
        { text: '🔍 Observer API', link: '/basic/js/api/observer_api' },
        { text: '🟢 Javascript 基础', link: '/basic/js/' },
        { text: '💫 自测清单（一）', link: '/basic/js/01_test' },
        { text: '💫 自测清单（二）', link: '/basic/js/02_test' },
        { text: '💫 自测清单（三）', link: '/basic/js/03_test' },
        { text: '💥 手写题实现', link: '/basic/js/coding/' },
      ],
    },
    {
      text: 'ES6',
      collapsed: false,
      items: [
        { text: '模块化', link: '/basic/es6/module' },
        { text: 'ES6 基础', link: '/basic/es6/module' },
      ],
    },
    {
      text: 'Node.js',
      collapsed: false,
      items: [
        { text: 'Node 开发', link: '/basic/node/' },
      ],
    },
    {
      text: 'Vue2',
      collapsed: false,
      items: [
        { text: '常见优化技巧', link: '/basic/vue2/常见优化技巧' },
        { text: 'vue监听子组件生命周期', link: '/basic/vue2/vue监听子组件生命周期' },
      ],
    },

    {
      text: '操作系统 & 网络 & 浏览器',
      collapsed: false,
      items: [
        { text: 'OS', link: '/basic/os_net_browser/01_os' },
        { text: 'TCP', link: '/basic/os_net_browser/02_tcp' },
        { text: 'HTTP', link: '/basic/os_net_browser/03_http' },
        { text: 'HTTP 缓存', link: '/basic/os_net_browser/03_http_cache' },
        { text: 'Websocket', link: '/basic/os_net_browser/04_websocket' },
        { text: 'Cors跨域', link: '/basic/os_net_browser/05_cors' },
        {
          text: 'Session & Cookie & Token',
          link: '/basic/os_net_browser/06_cookie',
        },
        {
          text: '事件循环',
          link: '/basic/os_net_browser/07_eventLoop',
        },
        {
          text: '输入URL到页面展示发生了什么 ?',
          link: '/basic/os_net_browser/08_enter_url',
        },
        { text: '浏览器', link: '/basic/os_net_browser/09_browser' },
        { text: 'Chome 调试工具', link: '/basic/os_net_browser/10_performance' },
        { text: '浏览器-安全', link: '/basic/os_net_browser/11_safety' },
        { text: '前端页面渲染方式', link: '/basic/os_net_browser/12_page-rendering' },
      ],
    },
  ]
}

function partterns() {
  return [
    {
      text: '前端设计模式',
      collapsed: false,
      items: [
        { text: '单例模式', link: '/patterns/01_singleton_pattern/' },
        { text: '代理模式', link: '/patterns/02_proxy_pattern/' },
        { text: '提供者模式', link: '/patterns/03_provider_pattern' },
        { text: '原型模式', link: '/patterns/04_prototype_pattern' },
        {
          text: '容器/演示模式',
          link: '/patterns/05_container_presentational_pattern',
        },
        { text: '观察者模式', link: '/patterns/06_observer_pattern' },
        { text: '模块模式', link: '/patterns/07_module_pattern' },
        { text: '混合模式', link: '/patterns/08_mixin_pattern' },
        { text: '中介/中间件模式', link: '/patterns/09_middleware_pattern' },
        { text: '高阶组件模式', link: '/patterns/10_hoc-pattern' },
      ],
    },
  ]
}

function algorithm() {
  return [
    {
      items: [
        { text: '📓 数据结构导读', link: '/algorithm/guide/' },
      ],
    },
    {
      text: 'Hash Table 哈希表',
      collapsed: false,
      items: [
        { text: '介绍', link: '/algorithm/hash-table/' },
        { text: '1. 两数之和', link: '/algorithm/hash-table/1' },
        {
          text: '3. 无重复字符的最长子串',
          link: '/algorithm/hash-table/3',
        },
        {
          text: '136. 只出现一次的数字',
          link: '/algorithm/hash-table/136',
        },
        {
          text: '349. 两个数组的交集',
          link: '/algorithm/hash-table/349',
        },
        {
          text: '560. 和为 K 的子数组',
          link: '/algorithm/hash-table/560',
        },
      ],
    },
    {
      text: 'Stack 栈',
      collapsed: false,
      items: [
        { text: '20. 有效的括号', link: '/algorithm/stack/20' },
        { text: '739. 每日温度', link: '/algorithm/stack/739' },
        {
          text: '901. 股票价格跨度',
          link: '/algorithm/stack/901',
        },
        {
          text: '907. 子数组的最小值之和',
          link: '/algorithm/stack/907',
        },
        {
          text: '921. 使括号有效的最少添加',
          link: '/algorithm/stack/921',
        },
        { text: '946. 验证栈序列', link: '/algorithm/stack/946' },
        {
          text: '1190. 反转每对括号间的子串',
          link: '/algorithm/stack/1190',
        },
        {
          text: '1249. 移除无效的括号',
          link: '/algorithm/stack/1249',
        },
      ],
    },
    {
      text: 'Queue 队列',
      collapsed: false,
      items: [
        {
          text: '933. 最近的请求次数',
          link: '/algorithm/queue/933',
        },
      ],
    },
    {
      text: 'Backtracking 递归与回溯',
      collapsed: false,
      items: [
        {
          text: '08.08. 有重复字符串的排列组合',
          link: '/algorithm/recursion-backtracking/08.08',
        },
        {
          text: '16.11. 跳水板',
          link: '/algorithm/recursion-backtracking/16.11',
        },
        {
          text: '17. 电话号码的字母组合',
          link: '/algorithm/recursion-backtracking/17',
        },
        {
          text: '22. 括号生成',
          link: '/algorithm/recursion-backtracking/22',
        },
        {
          text: '37. 解数独',
          link: '/algorithm/recursion-backtracking/37',
        },
        {
          text: '39. 组合总和',
          link: '/algorithm/recursion-backtracking/39',
        },
        {
          text: '40. 组合总和 II',
          link: '/algorithm/recursion-backtracking/40',
        },
        {
          text: '46. 全排列',
          link: '/algorithm/recursion-backtracking/46',
        },
        {
          text: '47. 全排列 II',
          link: '/algorithm/recursion-backtracking/47',
        },
        {
          text: '51. N 皇后',
          link: '/algorithm/recursion-backtracking/51',
        },
        {
          text: '54. 螺旋矩阵',
          link: '/algorithm/recursion-backtracking/54',
        },
        {
          text: '59. 螺旋矩阵 II',
          link: '/algorithm/recursion-backtracking/59',
        },
        {
          text: '73. 矩阵置零',
          link: '/algorithm/recursion-backtracking/73',
        },
        { text: '77. 组合', link: '/algorithm/recursion-backtracking/77' },
        { text: '78. 子集', link: '/algorithm/recursion-backtracking/78' },
        {
          text: '79. 单词搜索',
          link: '/algorithm/recursion-backtracking/79',
        },
        {
          text: '90. 子集 II',
          link: '/algorithm/recursion-backtracking/90',
        },
        {
          text: '93. 复原IP地址',
          link: '/algorithm/recursion-backtracking/93',
        },
        {
          text: '131. 分割回文串',
          link: '/algorithm/recursion-backtracking/131',
        },
        {
          text: '212. 单词搜索',
          link: '/algorithm/recursion-backtracking/212',
        },
        {
          text: '216. 组合总和 III',
          link: '/algorithm/recursion-backtracking/216',
        },
        {
          text: '401. 二进制手表',
          link: '/algorithm/recursion-backtracking/401',
        },
        {
          text: '784. 字母大小写全排列',
          link: '/algorithm/recursion-backtracking/784',
        },
        {
          text: '980. 不同路径 III',
          link: '/algorithm/recursion-backtracking/980',
        },
        {
          text: '1219. 黄金矿工',
          link: '/algorithm/recursion-backtracking/1219',
        },
        {
          text: '1291. 顺次数',
          link: '/algorithm/recursion-backtracking/1291',
        },
      ],
    },
    {
      text: 'Tree 二叉树',
      collapsed: false,
      items: [
        { text: '100. 相同的树', link: '/algorithm/binary-tree/100.相同的树' },
        {
          text: '101. 对称二叉树',
          link: '/algorithm/binary-tree/101.对称二叉树',
        },
        {
          text: '102. 二叉树的层序遍历',
          link: '/algorithm/binary-tree/102.二叉树的层序遍历',
        },
        {
          text: '104. 二叉树的最大深度',
          link: '/algorithm/binary-tree/104.二叉树的最大深度',
        },
        {
          text: '108. 将有序数组转换为二叉搜索树',
          link: '/algorithm/binary-tree/108.将有序数组转换为二叉搜索树',
        },
        {
          text: '110. 平衡二叉树',
          link: '/algorithm/binary-tree/110.平衡二叉树',
        },
        {
          text: '111. 二叉树的最小深度',
          link: '/algorithm/binary-tree/111.二叉树的最小深度',
        },
        { text: '112. 路径总和', link: '/algorithm/binary-tree/112.路径总和' },
        {
          text: '113. 路径总和 II',
          link: '/algorithm/binary-tree/113.路径总和 II',
        },
        {
          text: '124. 二叉树中的最大路径和',
          link: '/algorithm/binary-tree/124.二叉树中的最大路径和',
        },
        {
          text: '129. 求根到叶子节点数字之和',
          link: '/algorithm/binary-tree/129.求根到叶子节点数字之和',
        },
        {
          text: '144. 二叉树的前序遍历',
          link: '/algorithm/binary-tree/144.二叉树的前序遍历',
        },
        {
          text: '199. 二叉树的右视图',
          link: '/algorithm/binary-tree/199.二叉树的右视图',
        },
        {
          text: '236. 二叉树的最近公共祖先',
          link: '/algorithm/binary-tree/236.二叉树的最近公共祖先',
        },
        {
          text: '257. 二叉树的所有路径',
          link: '/algorithm/binary-tree/257.二叉树的所有路径',
        },
        {
          text: '404. 左叶子之和',
          link: '/algorithm/binary-tree/404.左叶子之和',
        },
        {
          text: '437. 路径总和 III',
          link: '/algorithm/binary-tree/437.路径总和 III',
        },
        {
          text: '450. 删除二叉搜索树中的节点',
          link: '/algorithm/binary-tree/450.删除二叉搜索树中的节点',
        },
        {
          text: '501. 二叉搜索树中的众数',
          link: '/algorithm/binary-tree/501.二叉搜索树中的众数',
        },
        {
          text: '543. 二叉树的直径',
          link: '/algorithm/binary-tree/543.二叉树的直径',
        },
      ],
    },
    {
      text: 'Linked List 链表',
      collapsed: false,
      items: [
        { text: '2. 两数相加', link: '/algorithm/linked-list/2.两数相加' },
        {
          text: '18. 删除链表的节点',
          link: '/algorithm/linked-list/18.删除链表的节点',
        },
        {
          text: '19. 删除链表的倒数第N个节点',
          link: '/algorithm/linked-list/19.删除链表的倒数第N个节点',
        },
        {
          text: '24. 两两交换链表中的节点',
          link: '/algorithm/linked-list/24.两两交换链表中的节点',
        },
        {
          text: '92. 反转链表 II',
          link: '/algorithm/linked-list/92.反转链表 II',
        },
        {
          text: '142. 环形链表 II',
          link: '/algorithm/linked-list/142.环形链表 II',
        },
        {
          text: '203. 移除链表元素',
          link: '/algorithm/linked-list/203.移除链表元素',
        },
        { text: '206. 反转链表', link: '/algorithm/linked-list/206.反转链表' },
      ],
    },
    {
      text: 'Dynamic Programming 动态规划',
      collapsed: false,
      link: '/algorithm/dp/',
      items: [
        { text: '62. 不同路径', link: '/algorithm/dp/62.不同路径' },
        { text: '63. 不同路径 II', link: '/algorithm/dp/63.不同路径 II' },
        { text: '64. 最小路径和', link: '/algorithm/dp/64.最小路径和' },
        { text: '70. 爬楼梯', link: '/algorithm/dp/70.爬楼梯' },
        {
          text: '121. 买卖股票的最佳时机',
          link: '/algorithm/dp/121.买卖股票的最佳时机',
        },
        {
          text: '122. 买卖股票的最佳时机 II',
          link: '/algorithm/dp/122.买卖股票的最佳时机 II',
        },
        { text: '198. 打家劫舍', link: '/algorithm/dp/198.打家劫舍' },
        { text: '213. 打家劫舍 II', link: '/algorithm/dp/213.打家劫舍 II' },
        { text: '221. 最大正方形', link: '/algorithm/dp/221.最大正方形' },
        { text: '322. 零钱兑换', link: '/algorithm/dp/322.零钱兑换' },
      ],
    },
    {
      text: 'Two Pointers 双指针',
      collapsed: false,
      items: [
        {
          text: '11. 盛最多水的容器',
          link: '/algorithm/double-pointer/11.盛最多水的容器',
        },
        { text: '15. 三数之和', link: '/algorithm/double-pointer/15.三数之和' },
        {
          text: '16. 最接近的三数之和',
          link: '/algorithm/double-pointer/16.最接近的三数之和',
        },
        { text: '42. 接雨水', link: '/algorithm/double-pointer/42.接雨水' },
        { text: '75. 颜色分类', link: '/algorithm/double-pointer/75.颜色分类' },
        {
          text: '209. 长度最小的子数组',
          link: '/algorithm/double-pointer/209.长度最小的子数组',
        },
        {
          text: '344. 反转字符串',
          link: '/algorithm/double-pointer/344.反转字符串',
        },
        {
          text: '763. 划分字母区间',
          link: '/algorithm/double-pointer/763.划分字母区间',
        },
        {
          text: '925. 长按键入',
          link: '/algorithm/double-pointer/925.长按键入',
        },
      ],
    },
  ]
}
