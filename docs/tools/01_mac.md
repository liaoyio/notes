---
description: '收录 Mac 平台下的实用软件，提升使用体验'
---

# Mac常用软件

## 系统设置 

```sh
# 禁止 “Are you sure you want to open this application?” 提示 
defaults write com.apple.LaunchServices LSQuarantine -bool false

# 禁止磁盘映像验证
defaults write com.apple.frameworks.diskimages skip-verify -bool true
defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true
defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true

# 桌面隐藏外部磁盘和可移动介质
defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool false
defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool false

# 显示所有扩展名和隐藏文件
defaults write -g AppleShowAllExtensions -bool true
defaults write com.apple.finder AppleShowAllFiles -bool true

# 禁用修改扩展名时的警告
defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false

# 显示底部地址栏
defaults write com.apple.finder ShowPathbar -bool true

# 禁止创建 .DS_Store 文件
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
```

### 允许打开任何来源的应用

```sh
sudo spctl --master-disable
```

## 效率神器 Alfred

1. 定位文件、打开文件
2. 打开网址、书签、App
3. 自定义搜索
4. 查看剪贴板历史
5. 计算器、查词典、运行 `shell` 命令

[软件官网](https://www.alfredapp.com)

## Mac 微信功能拓展

1. 消息防撤回
2. 免认证登录与多开
3. 消息处理增强(表情导出、二维码识别等)

安装

```sh
# 安装 WeChatTweak-CLI
brew install sunnyyoung/repo/wechattweak-cli

# 安装 Tweak
sudo wechattweak-cli --install

# 卸载
sudo wechattweak-cli --uninstall
```

[Github](https://github.com/Sunnyyoung/WeChatTweak-macOS)

## IINA

视频播放器

1. 界面简洁、美观，契合 macOS 设计风格
2. 功能强大，设置以播放体验为中心
3. 支持鼠标和触控板手势
4. 在线字幕、缩略图预览、画中画等

[Github](https://github.com/iina/iina)
[软件官网](https://iina.io/)

## MacZip

专为 macOS 而设计的压缩软件

1. 界面简洁、美观，完美兼容 Mojave
2. 支持超过 20 种压缩格式
3. 批量文件加密

[软件官网](https://ezip.awehunt.com)

## 腾讯柠檬清理

1. 界面简洁清新
2. 支持垃圾清理、文件查重、软件卸载
3. 支持微信、QQ、XCode、Sketch 深度扫描清理

[软件官网](https://lemon.qq.com)

## 截图神器 IShot

1. 区域截图、窗口截图、多窗口截图、延时截图、长截图、滚动截图
2. 快速标注(矩形、圆形、横线、箭头、画笔、马赛克、文字标记、序号标签、局部高亮)
3. 支持截图导圆角、阴影调节
4. 贴图、取色

[软件官网](https://www.better365.cn/ishot.html)
[App Store](https://apps.apple.com/cn/app/ishot-%E6%88%AA%E5%9B%BE-%E5%BD%95%E5%B1%8F-2020%E5%85%A8%E6%96%B0%E9%AB%98%E5%BA%A6/id1485844094)

## 超级右键 iRightMouse

1. 多种格式的右键新建文件
2. 快速移动文件
3. 常用目录设置
4. 快速打开终端、vscode 等

[软件官网](https://www.better365.cn/irightmouse.html)
[App Store](https://apps.apple.com/cn/app/irightmouse-%E8%B6%85%E7%BA%A7%E5%8F%B3%E9%94%AE/id1497428978)

## 翻译软件 Bob

1. 支持划词、截图、输入翻译
2. 支持翻译多开
3. 自动识别语种
4. 可自定义插件

[Github](https://github.com/ripperhe/Bob)
[软件官网](https://ripperhe.gitee.io/bob)

## 菜单栏图标管理 Hidden Bar

1. 简单易用、支持全局快捷键
2. 免费开源、支持中文

[Github](https://github.com/dwarvesf/hidden)
[App Store](https://apps.apple.com/cn/app/hidden-bar/id1452453066)

## 音量管理 BackgroundMusic

1. 背景音乐管理
2. 设置各个应用程序的音量
3. 录制系统音频

[Github](https://github.com/kyleneideck/BackgroundMusic)

## 窗口管理神器 Rectangle

比系统分屏更强大，支持快捷键分屏、支持三个及以上分屏

[Github](https://github.com/rxhanson/Rectangle)
[软件官网](https://rectangleapp.com/)

## 应用快捷启动神器 Thor Launcher

通过设定快捷键，快速在应用之间切换

[App Store](https://apps.apple.com/cn/app/thor-launcher/id1120999687)

## 快捷键提示 CheatSheet

长按 `Command` 即可查看当前应用的快捷键提示

[软件官网](https://www.ergonis.com/products/keycue/)
[安装包](https://github.com/maomao1996/software-backup/tree/main/mac/CheatSheet)

## 显示器控制 MonitorControl

1. 控制外接显示器的亮度和音量
2. 支持键盘控制亮度和音量

[Github](https://github.com/MonitorControl/MonitorControl)
