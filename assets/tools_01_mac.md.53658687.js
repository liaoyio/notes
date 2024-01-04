import{_ as a,i as s,h as n,O as l}from"./chunks/framework.9399b50c.js";const u=JSON.parse('{"title":"Mac常用软件","description":"收录 Mac 平台下的实用软件，提升使用体验","frontmatter":{"description":"收录 Mac 平台下的实用软件，提升使用体验"},"headers":[],"relativePath":"tools/01_mac.md","lastUpdated":1700918791000}'),e={name:"tools/01_mac.md"},o=l(`<h1 id="mac常用软件" tabindex="-1">Mac常用软件 <a class="header-anchor" href="#mac常用软件" aria-label="Permalink to &quot;Mac常用软件&quot;">​</a></h1><h2 id="系统设置" tabindex="-1">系统设置 <a class="header-anchor" href="#系统设置" aria-label="Permalink to &quot;系统设置&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 禁止 “Are you sure you want to open this application?” 提示 </span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.LaunchServices</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">LSQuarantine</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 禁止磁盘映像验证</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.frameworks.diskimages</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">skip-verify</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.frameworks.diskimages</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">skip-verify-locked</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.frameworks.diskimages</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">skip-verify-remote</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 桌面隐藏外部磁盘和可移动介质</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.finder</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ShowExternalHardDrivesOnDesktop</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.finder</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ShowRemovableMediaOnDesktop</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示所有扩展名和隐藏文件</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">AppleShowAllExtensions</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.finder</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">AppleShowAllFiles</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 禁用修改扩展名时的警告</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.finder</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">FXEnableExtensionChangeWarning</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示底部地址栏</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.finder</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ShowPathbar</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 禁止创建 .DS_Store 文件</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">write</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.desktopservices</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">DSDontWriteNetworkStores</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-bool</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="允许打开任何来源的应用" tabindex="-1">允许打开任何来源的应用 <a class="header-anchor" href="#允许打开任何来源的应用" aria-label="Permalink to &quot;允许打开任何来源的应用&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">spctl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--master-disable</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="效率神器-alfred" tabindex="-1">效率神器 Alfred <a class="header-anchor" href="#效率神器-alfred" aria-label="Permalink to &quot;效率神器 Alfred&quot;">​</a></h2><ol><li>定位文件、打开文件</li><li>打开网址、书签、App</li><li>自定义搜索</li><li>查看剪贴板历史</li><li>计算器、查词典、运行 <code>shell</code> 命令</li></ol><p><a href="https://www.alfredapp.com" target="_blank" rel="noreferrer">软件官网</a></p><h2 id="mac-微信功能拓展" tabindex="-1">Mac 微信功能拓展 <a class="header-anchor" href="#mac-微信功能拓展" aria-label="Permalink to &quot;Mac 微信功能拓展&quot;">​</a></h2><ol><li>消息防撤回</li><li>免认证登录与多开</li><li>消息处理增强(表情导出、二维码识别等)</li></ol><p>安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装 WeChatTweak-CLI</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">sunnyyoung/repo/wechattweak-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装 Tweak</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">wechattweak-cli</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 卸载</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">wechattweak-cli</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--uninstall</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><a href="https://github.com/Sunnyyoung/WeChatTweak-macOS" target="_blank" rel="noreferrer">Github</a></p><h2 id="iina" tabindex="-1">IINA <a class="header-anchor" href="#iina" aria-label="Permalink to &quot;IINA&quot;">​</a></h2><p>视频播放器</p><ol><li>界面简洁、美观，契合 macOS 设计风格</li><li>功能强大，设置以播放体验为中心</li><li>支持鼠标和触控板手势</li><li>在线字幕、缩略图预览、画中画等</li></ol><p><a href="https://github.com/iina/iina" target="_blank" rel="noreferrer">Github</a><a href="https://iina.io/" target="_blank" rel="noreferrer">软件官网</a></p><h2 id="maczip" tabindex="-1">MacZip <a class="header-anchor" href="#maczip" aria-label="Permalink to &quot;MacZip&quot;">​</a></h2><p>专为 macOS 而设计的压缩软件</p><ol><li>界面简洁、美观，完美兼容 Mojave</li><li>支持超过 20 种压缩格式</li><li>批量文件加密</li></ol><p><a href="https://ezip.awehunt.com" target="_blank" rel="noreferrer">软件官网</a></p><h2 id="腾讯柠檬清理" tabindex="-1">腾讯柠檬清理 <a class="header-anchor" href="#腾讯柠檬清理" aria-label="Permalink to &quot;腾讯柠檬清理&quot;">​</a></h2><ol><li>界面简洁清新</li><li>支持垃圾清理、文件查重、软件卸载</li><li>支持微信、QQ、XCode、Sketch 深度扫描清理</li></ol><p><a href="https://lemon.qq.com" target="_blank" rel="noreferrer">软件官网</a></p><h2 id="截图神器-ishot" tabindex="-1">截图神器 IShot <a class="header-anchor" href="#截图神器-ishot" aria-label="Permalink to &quot;截图神器 IShot&quot;">​</a></h2><ol><li>区域截图、窗口截图、多窗口截图、延时截图、长截图、滚动截图</li><li>快速标注(矩形、圆形、横线、箭头、画笔、马赛克、文字标记、序号标签、局部高亮)</li><li>支持截图导圆角、阴影调节</li><li>贴图、取色</li></ol><p><a href="https://www.better365.cn/ishot.html" target="_blank" rel="noreferrer">软件官网</a><a href="https://apps.apple.com/cn/app/ishot-%E6%88%AA%E5%9B%BE-%E5%BD%95%E5%B1%8F-2020%E5%85%A8%E6%96%B0%E9%AB%98%E5%BA%A6/id1485844094" target="_blank" rel="noreferrer">App Store</a></p><h2 id="超级右键-irightmouse" tabindex="-1">超级右键 iRightMouse <a class="header-anchor" href="#超级右键-irightmouse" aria-label="Permalink to &quot;超级右键 iRightMouse&quot;">​</a></h2><ol><li>多种格式的右键新建文件</li><li>快速移动文件</li><li>常用目录设置</li><li>快速打开终端、vscode 等</li></ol><p><a href="https://www.better365.cn/irightmouse.html" target="_blank" rel="noreferrer">软件官网</a><a href="https://apps.apple.com/cn/app/irightmouse-%E8%B6%85%E7%BA%A7%E5%8F%B3%E9%94%AE/id1497428978" target="_blank" rel="noreferrer">App Store</a></p><h2 id="翻译软件-bob" tabindex="-1">翻译软件 Bob <a class="header-anchor" href="#翻译软件-bob" aria-label="Permalink to &quot;翻译软件 Bob&quot;">​</a></h2><ol><li>支持划词、截图、输入翻译</li><li>支持翻译多开</li><li>自动识别语种</li><li>可自定义插件</li></ol><p><a href="https://github.com/ripperhe/Bob" target="_blank" rel="noreferrer">Github</a><a href="https://ripperhe.gitee.io/bob" target="_blank" rel="noreferrer">软件官网</a></p><h2 id="菜单栏图标管理-hidden-bar" tabindex="-1">菜单栏图标管理 Hidden Bar <a class="header-anchor" href="#菜单栏图标管理-hidden-bar" aria-label="Permalink to &quot;菜单栏图标管理 Hidden Bar&quot;">​</a></h2><ol><li>简单易用、支持全局快捷键</li><li>免费开源、支持中文</li></ol><p><a href="https://github.com/dwarvesf/hidden" target="_blank" rel="noreferrer">Github</a><a href="https://apps.apple.com/cn/app/hidden-bar/id1452453066" target="_blank" rel="noreferrer">App Store</a></p><h2 id="音量管理-backgroundmusic" tabindex="-1">音量管理 BackgroundMusic <a class="header-anchor" href="#音量管理-backgroundmusic" aria-label="Permalink to &quot;音量管理 BackgroundMusic&quot;">​</a></h2><ol><li>背景音乐管理</li><li>设置各个应用程序的音量</li><li>录制系统音频</li></ol><p><a href="https://github.com/kyleneideck/BackgroundMusic" target="_blank" rel="noreferrer">Github</a></p><h2 id="窗口管理神器-rectangle" tabindex="-1">窗口管理神器 Rectangle <a class="header-anchor" href="#窗口管理神器-rectangle" aria-label="Permalink to &quot;窗口管理神器 Rectangle&quot;">​</a></h2><p>比系统分屏更强大，支持快捷键分屏、支持三个及以上分屏</p><p><a href="https://github.com/rxhanson/Rectangle" target="_blank" rel="noreferrer">Github</a><a href="https://rectangleapp.com/" target="_blank" rel="noreferrer">软件官网</a></p><h2 id="应用快捷启动神器-thor-launcher" tabindex="-1">应用快捷启动神器 Thor Launcher <a class="header-anchor" href="#应用快捷启动神器-thor-launcher" aria-label="Permalink to &quot;应用快捷启动神器 Thor Launcher&quot;">​</a></h2><p>通过设定快捷键，快速在应用之间切换</p><p><a href="https://apps.apple.com/cn/app/thor-launcher/id1120999687" target="_blank" rel="noreferrer">App Store</a></p><h2 id="快捷键提示-cheatsheet" tabindex="-1">快捷键提示 CheatSheet <a class="header-anchor" href="#快捷键提示-cheatsheet" aria-label="Permalink to &quot;快捷键提示 CheatSheet&quot;">​</a></h2><p>长按 <code>Command</code> 即可查看当前应用的快捷键提示</p><p><a href="https://www.ergonis.com/products/keycue/" target="_blank" rel="noreferrer">软件官网</a><a href="https://github.com/maomao1996/software-backup/tree/main/mac/CheatSheet" target="_blank" rel="noreferrer">安装包</a></p><h2 id="显示器控制-monitorcontrol" tabindex="-1">显示器控制 MonitorControl <a class="header-anchor" href="#显示器控制-monitorcontrol" aria-label="Permalink to &quot;显示器控制 MonitorControl&quot;">​</a></h2><ol><li>控制外接显示器的亮度和音量</li><li>支持键盘控制亮度和音量</li></ol><p><a href="https://github.com/MonitorControl/MonitorControl" target="_blank" rel="noreferrer">Github</a></p>`,51),p=[o];function r(t,c,i,h,b,y){return n(),s("div",null,p)}const d=a(e,[["render",r]]);export{u as __pageData,d as default};