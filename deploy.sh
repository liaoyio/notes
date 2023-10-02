# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
pnpm build

# 进入待发布的 dist/ 目录
cp README.md ./dist/
cd ./dist

# 提交打包静态网站到 github-pages 分支
git init
git add -A
git commit -m 'deploy'

# 部署到 https://<username>.github.io/<repo>
git push -f git@github.com:liaoyio/notes.git main:gh-pages
