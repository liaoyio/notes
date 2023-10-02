import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  {
    text: '前端基础',
    items: [
      { text: 'HTML & CSS', link: '/basic/css/写给自己看的flex布局' },
      { text: 'JavaScript', link: '/basic/js/' },
      { text: 'TypeScript', link: '/web/ts/' },
      { text: 'Git', link: '/web/git/01_base' },
      { text: '前端算法', link: '/algorithm/guide/' },
      { text: '设计模式', link: '/patterns/01_singleton_pattern/' },
    ],
  },
  {
    text: '开发日记',
    link: '/log/',
  },
  {
    text: '效率工具',
    items: [
      {
        text: '软件 & 配置',
        items: [
          { text: 'Mac 平台', link: '/tools/01_mac' },
          { text: 'Visual Studio Code 配置', link: '/tools/02_vscode' },
        ],
      },
      { text: '在线工具', link: '/tools/03_tools' },
    ],
    activeMatch: '^/tools',
  },
  {
    text: '折腾日记',
    items: [
      { text: '随笔', link: '/meno/' },
    ],
  },
]
