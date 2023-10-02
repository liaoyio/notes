# 版本管理，Git 基础

在学习版本管理之前，我们先认识一下什么是版本管理。那么我们首先需要了解什么是版本吧。

顺着这个思路，我们首先要知道，怎么去定一个版本，以及版本的格式是什么样的，它是不是遵循某种规范等等。这些问题在下面都会有详细的说明。

首先我们要了解语义化版本：

## 语义化版本

语义化版本是一个版本号的规范，他由 npm 的创始人提出，目的是为了解决版本号的混乱问题。其规范我们在下面详细说明。

相信在不少开源项目中，你都会看到这样的版本号：

- 2.6.0
- 2.6.0-beta.1
- 2.0.0-rc.8
- 2.0.0-alpha.8

他们都是符合语义化版本格式规范的版本号。那么不同的版本号又代表了什么呢？我们在下面详细说明。

### 理解版本格式

版本格式：主版本号.次版本号.修订号，版本号递增规则如下：

- 主版本号：当你做了不兼容的 API 修改
- 次版本号：当你做了向下兼容的功能性新增
- 修订号：当你做了向下兼容的问题修正先行版本号及版本编译信息可以加到“主版本号.次版本号.修订号”的后面，作为延伸。

对于加在后面的延伸信息，我介绍几个常见的，并且他们之间是有顺序的：

- 1.alpha：内部测试版本，可能会存在很多 bug，除非内部测试人员，否则不要使用。
- 2.beta：公测版本，消除了严重的错误，但还是存在一些缺陷，需要测试人员进一步测试，如果反馈的问题比较多，就需要再次进行 beta 版本的发布，直到基本上不存在问题。
- 3.rc：发行候选版本，基本上不存在问题，除非是重大问题，否则不会对代码进行修改，这个版本就是最终发布的版本。
- 4.release

### 发布版本可能遇到的问题

以下问题及解答来自[语义化官方](https://semver.org/lang/zh-CN/)：

**在 0.y.z 初始开发阶段，我该如何进行版本控制？**

最简单的做法是以 0.1.0 作为你的初始化开发版本，并在后续的每次发行时递增次版本号。

**对于公共 API，若即使是最小但不向下兼容的改变都需要产生新的主版本号，岂不是很快就达到 42.0.0 版？**

这是开发的责任感和前瞻性的问题。不兼容的改变不应该轻易被加入到有许多依赖代码的软件中。升级所付出的代价可能是巨大的。要递增主版本号来发行不兼容的改版，意味着你必须为这些改变所带来的影响深思熟虑，并且评估所涉及的成本及效益比。

**如果我变更了公共 API 但无意中未遵循版本号的改动怎么办呢？（意即在修订等级的发布中，误将重大且不兼容的改变加到代码之中）**

自行做最佳的判断。如果你有庞大的使用者群在依照公共 API 的意图而变更行为后会大受影响，那么最好做一次主版本的发布，即使严格来说这个修复仅是修订等级的发布。记住， 语义化的版本控制就是透过版本号的改变来传达意义。若这些改变对你的使用者是重要的，那就透过版本号来向他们说明。

**我该如何处理即将弃用的功能？**

弃用现存的功能是软件开发中的家常便饭，也通常是向前发展所必须的。当你弃用部份公共 API 时，你应该做两件事：

（1）更新你的文档让使用者知道这个改变，

（2）在适当的时机将弃用的功能透过新的次版本号发布。

在新的主版本完全移除弃用功能前，至少要有一个次版本包含这个弃用信息，这样使用者才能平顺地转移到新版 API。

**“v1.2.3” 是一个语义化版本号吗？**

“v1.2.3” 并不是的一个语义化的版本号。但是，在语义化版本号之前增加前缀 “v” 是用来表示版本号的常用做法。在版本控制系统中，将 “version” 缩写为 “v” 是很常见的。比如：git tag v1.2.3 -m "Release version 1.2.3" 中，“v1.2.3” 表示标签名称，而 “1.2.3” 是语义化版本号。

## 版本控制工具 Git

版本控制工具涉及到很多内容，我们分为三个部分来讲解：

1、首先要知道一些常用的 Git 平台：

giihub、gitlab、gitee、coding、bitbucket、gitea、gogs、gitcafe、git.oschina、git.

2.然后要了解一些 git 的基础命令等，这个是重点。

3.最后是 gitflow 工作流，管理分支的一种方式。

## git 基础

理解 Git 平台的工作使用流程，以 GitHub 为例:

我们使用 GitHub 创建一个仓库，https://github.com/new , 填写仓库名称，并编辑仓库的描述，选择公开或私有，然后点击创建仓库。我们会进到一个仓库的页面，默认是在 Code tab 下。

### Code tab

初始时是没有任何 code 的，我们需要把本地的代码上传到这个仓库中。默认会提示你有两种方式：

- …or create a new repository on the command line：在命令行中创建一个新的仓库。

- …or push an existing repository from the command line：从命令行中推送一个已经存在的仓库。注意：这个仓库是已经存在的，也就是说你本地已经有了这个仓库，只是还没有上传到远程仓库中。

- …or import code from another repository：从其它仓库导入代码。这种方式是从其它仓库导入代码，例如从 gitlab 中导入代码。相对来说比较少用。

创建提交之后，我们就可以在本地的命令行中使用 git 命令来操作这个仓库了。

### Issues tab

Issues 是用来记录项目的问题的，可以用来记录 bug，或者是一些新的需求等。我们或者仓库中的其它成员都可以点击 New issue 来创建一个新的 issue，填写 issue 的标题和内容，然后点击 Submit new issue 来提交 issue。

### Pull requests tab

当设置了仓库权限，将分支保护设置为需要 review 时，我们在提交代码时，就需要先创建一个 pull request，然后再由仓库的管理员来 review 代码，如果代码没有问题，就可以合并到主分支中。

> 在工作中我们经常将其称为 pr，即 pull request 的缩写。

### Projects tab

Projects 是用来管理项目的，可以创建多个项目，每个项目可以创建多个任务，每个任务可以设置任务的状态，例如 To do、In progress、Done 等。

### Security tab

Security 是用来管理项目的安全的，可以查看项目的安全警告，例如项目中使用的依赖有安全漏洞等。

### Insights tab

Insights 是用来查看项目的统计信息的，例如项目的活跃程度、贡献者、流量等。

### Settings tab

Settings 是用来管理项目的设置的，例如项目的名称、描述、权限、分支保护、Webhooks 等。

这这个面板中，我们比较常关注的是 Setting 中的安全设置，可以设置仓库的访问权限，例如公开或私有，以及分支保护，例如是否需要 review，是否需要签名，是否需要强制检查等。如果不进行这些设置的话，仓库中的任何人都可以直接提交代码到主分支中，这样就会导致代码的质量无法保证。

1、设置仓库的访问权限：

如果仓库是公开的，任何人都可以访问，如果仓库是私有的，只有仓库的成员才能访问。那么怎么成为仓库的成员呢？我们可以在 Collaborations 里的 Manage access 中添加仓库的成员，添加成员时，可以设置成员的权限，例如只读或者是写入等。

2、设置分支保护：

可以在 General 里的 Pull requests 中的 Branch protection rules 中设置分支保护，例如设置主分支的保护，可以设置是否需要 review，是否需要签名，是否需要强制检查等。

## git 基础

这里我们要知道的是 git 的工作区、暂存区和版本库的概念，以及我们在使用一些命令时，要知道这些命令是对哪个区域进行操作的。

![](https://www.runoob.com/wp-content/uploads/2015/02/git-command.jpg)

> 图片来自，菜鸟教程网站

**工作区**

我们在电脑上能看到的目录就是工作区，工作区里有一个隐藏目录 .git，这个不算工作区，而是 git 的版本库。

**版本库**

工作区有一个隐藏目录 .git，这个不算工作区，而是 git 的版本库。在版本库中主要包括 stage（或者叫 index）暂存区，还有 git 自动创建的第一个分支 master 目录树。

暂存区中的内容是通过 git add 命令添加的。并且会在我们使用 git commit 命令后提交到当前分支。

> 注意我们提交后，记录的是快照（文件的变化），而不是整个文件，否则 git 仓库将会非常大

## git 命令（常用）

注意，这里我们只是概况的讲解一下 git 的常用命令，具体的使用我们会结合使用场景在后面一章讲到。

### git clone

克隆一个远程仓库到本地。需要注意的是 windows 下如果使用 git clone 命令，需要先安装 git 客户端，否则会报错。如果是使用的 ssh 方式，需要先配置好 ssh key。

> 安装 git 客户端：https://git-scm.com/downloads

> 配置 ssh key：https://help.github.com/en/articles/connecting-to-github-with-ssh

### git init

初始化一个本地仓库，会在当前目录下生成一个 .git 的隐藏文件夹，这个文件夹是 git 用来跟踪管理版本的。一般只有在创建新仓库的时候才会使用这个命令。

### git add

将文件添加到暂存区，可以使用 git add . 来添加当前目录下的所有文件，也可以使用 git add [file] 来添加指定的文件。如果你使用 VSCode 的话，可以在左侧的源代码管理中看到添加的文件。

```bash
git add .
# 或者
git add README.md
```

> 使用 vscode 可以可视化的看到文件的状态，例如修改的文件、添加的文件、删除的文件等。并且我们也可以在这里提交代码，不需要使用命令行。这个我们会在下一章讲，前提是我们需要了解 git 的命令。

### git remote

查看当前仓库的远程仓库信息，如果没有配置远程仓库，会显示为空。也可以使用 git remote add origin [url] 来添加远程仓库、git remote rm origin 删除远程仓库。详细可通过 git remote --help 查看。

```bash
git remote add origin git@github.com:chovue/vue3-management-system.git
# 或者删除
git remote rm origin
```

### git status

查看当前仓库的状态，例如修改的文件、添加的文件、删除的文件等。

### git commit

提交代码，需要先 git add 添加文件到暂存区，然后再使用 git commit -m [message] 来提交代码。如果你使用 VSCode 的话，可以在左侧的源代码管理中看到提交的记录。

```bash
git commit -m "first commit"
```

### git push

将本地仓库的代码推送到远程仓库，需要先 git add 添加文件到暂存区，然后再使用 git commit -m [message] 来提交代码，最后使用 git push origin [branch] 来推送代码到远程仓库。

> 需要注意的是，如果是第一次推送代码，需要先 git push -u origin [branch]，这样才能将本地仓库的代码推送到远程仓库。

```bash
# 第一次推送master分支,并关联本地和远程分支
git push -u origin master

# 之后可以直接推送master分支
git push

# 强制推送,会覆盖远程分支
git push -f origin master

# 推送所有本地分支
git push --all

# 同时推送标签
git push --tags

# 删除远程dev分支
git push -d origin dev
```

上述列举的是相对常见的一些参数，这里一一解释一下：

- `-u` 或 `--set-upstream` 参数， 是指将本地分支与远程分支关联起来，这样在下次推送代码时，就不需要指定分支了。

- `-f` 或 `--force` 参数，表示强制推送，一般不建议使用，因为这样会覆盖远程仓库的代码。

- `--all`: 推送所有本地分支到远程。

- `--tags` 参数，一并推送本地创建的标签。

- `-d` 或 `--delete`: 删除远程分支。

### git pull

将远程仓库的代码拉取到本地,其实就是 git fetch 和 git merge 的组合。

pull 常用的参数有:

- -r 或 --rebase: rebase 当前分支到服务器上最新的 commit,与其他开发者的 commit 并发展开。这将会修改历史,并在 pull 之后要做 rebase 之前的 commit。
- --autostash: 会在 rebase 期间自动暂存本地改动(stash),完成 rebase 后还原(stash pop),避免冲突。
- --allow-unrelated-histories: 允许在没有任何共同提交的情况下,合并两个不同的提交历史。

```bash
# 拉取远程master并rebase到本地
git pull -r origin master

# 拉取远程master,且在rebase过程中自动stash和pop
git pull --rebase --autostash origin master

# 两个独立仓库,允许合并不同的提交历史
git pull --allow-unrelated-histories origin master
```

### git checkout

切换分支，可以使用 git checkout [branch] 来切换分支，也可以使用 git checkout -b [branch] 来创建并切换分支。

```bash
# 切换到dev分支
git checkout dev

# 创建并切换到dev分支
git checkout -b dev
```

### git brach

查看当前仓库的分支信息，可以使用 git branch -a 来查看所有分支，也可以使用 git branch -r 来查看远程分支，使用 git branch -d [branch] 来删除分支。

```bash
# 查看所有分支
git branch -a

# 查看远程分支
git branch -r

# 删除dev分支
git branch -d dev
```

### git fetch

拉取远程仓库的代码，可以使用 git fetch [remote] [branch] 来拉取远程仓库的代码，例如 git fetch origin master 来拉取远程仓库的 master 分支。

```bash
# 拉取远程master分支
git fetch origin master
```

### git merge

合并分支，可以使用 git merge [branch] 来合并分支，例如合并 dev 分支到 master 分支，需要先切换到 master 分支，然后再使用 git merge dev 来合并分支。

```bash
# 切换到master分支
git checkout master

# 合并dev分支
git merge dev
```

### git rebase

将本地的提交移到另一个分支上，可以使用 git rebase [branch] 来将当前分支的提交移到指定的分支上，例如将当前分支的提交移到 master 分支上，需要先切换到当前分支，然后再使用 git rebase master 来将当前分支的提交移到 master 分支上。

> 注意：如果当前分支和 master 分支都有提交，那么当前分支的提交会移到 master 分支的最后面。并且使用 git rebase 之后，当前分支的提交记录会被修改。

```bash
# 切换到dev分支
git checkout dev

# 将dev分支的提交移到master分支上
git rebase master
```

### git cherry-pick

将指定的提交合并到当前分支，可以使用 git cherry-pick [commit] 来将指定的提交合并到当前分支，例如将 123456 这次提交合并到当前分支，需要先切换到当前分支，然后再使用 git cherry-pick 123456 来将 123456 这次提交合并到当前分支。

```bash
# 切换到dev分支
git checkout dev

# 将123456这次提交合并到当前分支
git cherry-pick 123456
```

### git log

查看提交记录，可以使用 git log 来查看所有的提交记录，也可以使用 git log --oneline 来查看简洁的提交记录。

```bash
# 查看所有提交记录
git log

# 查看简洁的提交记录
git log --oneline
```

### git diff

查看文件的差异，可以使用 git diff [file] 来查看指定文件的差异，也可以使用 git diff [branch1] [branch2] 来查看两个分支的差异。

```bash
# 查看指定文件的差异
git diff README.md

# 查看两个分支的差异
git diff master dev
```

### git reset

回退版本，可以使用 git reset --hard [commit] 来回退到指定的版本。

```bash
# 回退到指定的版本
git reset --hard 3628164

# 回退到上一个版本
git reset --hard HEAD^

# 回退到上上一个版本
git reset --hard HEAD^^

# 回退到前100个版本
git reset --hard HEAD~100
```

### git reflog

查看命令历史，可以使用 git reflog 来查看所有的命令历史，例如回退到指定的版本，但是又不知道版本号，可以通过 git reflog 来查看所有的命令历史，然后再使用 git reset --hard [commit] 来回退到指定的版本。

```bash
# 查看所有的命令历史
git reflog
```

### git tag

打标签，可以使用 git tag [tag] 来打标签，例如 git tag v1.0.0 来打 v1.0.0 的标签，也可以使用 git tag -a [tag] -m [message] 来打带有说明的标签。

```bash
# 打v1.0.0标签
git tag v1.0.0

# 打带有说明的标签
git tag -a v1.0.0 -m "说明"
```

### git show

查看标签信息，可以使用 git show [tag] 来查看标签的信息。

```bash
# 查看v1.0.0标签的信息
git show v1.0.0
```

## 场景应用

### 1. 修复 bug 时的分支管理

```bash
# 创建bug分支
git checkout -b bug-xxx

# 在bug分支上修复bug,并提交
git add . && git commit -m "fix bug xxx"

# 提交修复bug后的代码到远程bug分支
git push origin bug-xxx

# 切换到主分支（主分支受保护则提pr，不进行以下步骤）
git checkout master

# 合并bug分支到主分支
git merge bug-xxx

# 删除bug分支
git branch -d bug-xxx
```

### 2. 合并其他开发者的代码

```bash
# 获取最新代码
git pull

# 解决合并冲突,然后提交
git add . && git commit

# 推送到远程仓库
git push
```

### 3. 暂存未完成的工作

```bash
# 暂存当前文件
git stash 或 git stash save

# 此时工作区清空,可以进行其他工作

# 恢复暂存的工作
git stash pop

# 查看暂存列表
git stash list

# 详细查看某个暂存
git stash show <stash@{n}>

# 删除某个暂存
git stash drop <stash@{n}>
```

### 4. 添加已有仓库作为远程仓库

```bash
# 进入已有本地仓库
cd myproj

# 添加远程仓库
git remote add origin <URL>

# 推送主分支
git push -u origin master
```

### 5. 回退操作

```bash
# 查看提交日志
git log

# 切换版本
git checkout <commit-id>

# 比较修改
git diff <commit-id>

# 回退到某个版本
git reset --hard <commit-id>

# 恢复被回退的版本
git reflog
git checkout <commit-id>
```

### 6.其它意外情况

```bash
# 需要其它分支上的部分代码
git cherry-pick <commit-id>

# 误删分支
git reflog
git checkout <commit-id>
git branch <branch-name>

# 误删文件
git reflog
git checkout <commit-id> <file-name>

# 合并多次提交（git rebase - 变基一个分支上的提交到另一个分支。这会取出提交,然后将其重新放置在另一个分支顶部,从而创造一个直线的项目历史。）
git rebase -i <commit-id>
```

## git flow

git flow 是一种 Git 分支管理工作流,它定义了一个围绕项目发布的严格分支模型,旨在帮助管理大型项目的开发和维护。git flow 的核心是围绕项目发布定义的一个严格的分支模型。它提供了一些高级命令,帮助我们完成分支的创建、合并等操作。

其意义在于：

- 多人协作开发，权限控制

- 避免冲突

- 项目版本管理，方便溯源和回退

### 持续集成 flow

团队开发成员经常集成他们的工作,通常每个成员每天至少集成一次,也就是说每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译、发布、自动化测试）来验证,从而尽早地发现集成错误。许多团队发现这种方法可以显著减少集成问题并加快开发速度。

![image](https://user-images.githubusercontent.com/51811652/236365791-edd0e3d5-9ade-4856-a909-749d0cb72de2.png)

优点：

- 适用于持续集成多环境场景，版本相对比较稳定，而且需要小版本的更新迭代的场景。

- 上游分支向下游发展

- Bug=>New Feature=>master=>pre branch=>target branch

自动化流程工具 CI/CD，检测到代码变更，自动触发构建，自动化测试，自动化部署。

### 版本控制 flow

Vue 和 React 都是采用的这种模型，这种模型适用于版本控制的场景，在 master 分支检出，bug 修复在分支：

master -> Stable -> new branch -> bug fix -> version

![image](https://user-images.githubusercontent.com/51811652/236366380-33fe619b-07c6-4370-ab2d-00380a30e70d.png)


### gitflow 约定的分支

- `master 分支`，始终最后稳定版本内容的分支，由 release 分支合并养成。 固定，一直保持当前最新稳定的发布版本代码，在 CI/CD 建设时，你可以只在该分支做签名、公证等一系列自动化流程
- `develop 分支`，所有新功能开发的基础、开发阶段冒烟修复问题等。 固定，这是我们日常的开发分支，所有新功能分支都将合并到该分支
- `feature/* 分支`，一切功能开发的子分支，基于 develop，完成后合并到 develop
- `bugfix/* 分支`，用于修复缺陷的分支名前缀。可删，这种分支一般情况下基于 `develop` 或者 `release/*` 分支开出，作为简单的缺陷修复分支，最终合并到 `develop` 或 `release/*` 分支中
- `release/* 分支`，保存每一个版本的迭代信息，由 develop 分支生成。可删，进入预发布阶段时基于 develop 创建的分支，再此基础集成，它名字可能是 release/2.8.0，release/2.9.0 等。
- `hotfix/* 分支`，用于线上版本紧急修复的分支. 可删，是对线上最新版本或长期服务版本做紧急修复时使用的分支，他不是常驻的
- `support/* 分支`，一般用于特殊功能支持的分支（不合并到主分支）

通过 `git flow` 工具链创建的分支，如 `git flow hotfix start 1.0.1` 会以固定格式进行命名，这样可以清晰的告诉我们哪些分支起源于哪里、用于做什么、终结于哪里。`gitlab` 中查看到的分支结构也会变得非常清爽。下图是 gitflow 的工作流的示例图：

![](./images/git-flow.svg)

### gitflow 使用命令

```shell
# 开始和完成一个功能
git flow feature start "功能名"
git flow feature finish

# 开始和完成一个版本的发布
git flow release start "release版本"
git flow release finish

# 开始和完成一个 hotfix
git flow hotfix start "hotfix版本"
git flow hotfix finish
```

###  gitflow 命令解读


1. 在 `flow`流中新建分支

新建一个`user-mgr`的`feature`分支, 分支名`feature/user-mgr`

```shell
git flow feature start user-mgr
```

切换到对应分支

```shell
# 当前在 develop 分支
git branch -b feature/user-mgr
```

2. **git flow feature finish**

`feature/user-mgr` 分支会自动合并到 `develop` 分支，并且将自动删除临时的 `feature` 分支。

```shell
# 完成功能
git checkout develop
git merge --no-ff feature/user-mgr
git branch -d feature/user-mgr
```

如果您对主仓库的 `develop` 有推送权限，那么可以直接推送代码到仓库中，但某些场景下，团队是需要 `code review` 的，您可以将 `feature/*` 分支推送到你 `fork` 的子仓库中，并以 `Pull Request` 或 `Merge Request` 的方式提交到主仓库的 `develop` 分支进行 `code review`。当然 `code review` 的方式有很多种，我们可以根据自己团队的需求来做一些改变。

3. **让版本发布自动化**

当进入一个发布窗口期，我们需要考量一下哪些功能可以在准备发布的版本进行发布了，这些功能首先会被合并到 `develop` 分支，这里避免不了会有一些代码的冲突，需要指定功能的负责人进行合并，在确认无误后我们开启一个准备发布的分支, 使用 `git flow release `命令：

```shell
git flow release start 8.0.0
```

执行以上命令后，我们就基于 `develop` 分支开启了一个 `release/8.0.0` 的分支，你可以使用该分支做整体预发布功能的回归、做一些版本号修改、文档更正等简单的工作。这个分支不在进行大规模的代码调整，仅做一些回归时发现的小缺陷修复，这个周期通常要 1~2 天的时间。当确认该分支代码稳定可以发布时，执行如下命令进行发布：

```shell
# 当前在 release/8.0.0 分支
git flow release finish
```
:::tip 该命令执行了如下几个操作：

- 合并 `release/8.0.0` 到 `master` 分支
- 创建 `8.0.0 tag`
- 合并 `8.0.0 tag` 到 `develop` 分支
:::

整个 `release` 版本发布的阶段，转化为 `git` 的原生指令他是这样一个步骤：

```shell
# 当前工作与 develop 分支
git checkout -b release/8.0.0

# 做一些简单修复或者版本更改，提交代码
git commit -a -s -m "Update version..."

# 完成版本发布
git checkout master
git merge --no-ff release/8.0.0
git tag -a 8.0.0
git checkout develop
git merge --no-ff 8.0.0
git branch -d release/8.0.0
```

整个发布过程的指令就是这些，看似简单，但是当我们自己操作时很难不出错误，特别是版本发布和线上缺陷（hotfix）修复同时进行的时候，如果有这些辅助指令可以大大加快我们的工作效率且不容易出错。在 `release` 阶段你可以让你的自动构建系统配合 `git-flow` 的固有规则进行构建，比如我们可以根据分支名称或者当前最新 `tag` 自动给产出物做版本号的修改，而不需要我们在代码中新建一个提交去修改这些内容。

另外我更建议在 `release/*` 分支做版本发布，而不是 `master` 分支，`master` 分支仅作为一个备份分支，他在一些开源项目中显得比较重要，因为他代表着最新稳定分支。但公司内部的一些开发团队中来看 `master` 分支可有、可无。但是你不能在 `master` 分支随便产生一个提交，这样会打乱 `git flow` 的工作流程，你要来来回回合并好几次才能保证各个协作分支正常工作。之所以建议在 `release/*` 分支做发布操作，是因为有些时候在你执行完 `git flow release finish` 后还会发现有一些非常简单的错误需要修复，比如对外文档中的一个符号错误、一个错别字、甚至版本号错误等，这些都是避免不了的。如果你已经合并到 `master` 分支，你需要基于 `develop` 重来一遍发布流程，这会产生非常多的麻烦。何不在 `release` 分支就都完成了呢？当产品上线、部署到官网后，下一个迭代开始前，在执行 `git flow release finish` 更好。


4. 线上缺陷紧急修复

谁都不愿意看到线上出现紧急问题，出问题不要怕，解决它并告诉自己不要再犯同样的错误，这也是我为什么使用 `git flow` 一个很重要的原因。以往的线上紧急问题修复中，我们通常是基于 `master` 或者最新 `tag` 拉取一个分支，在这个分支中做缺陷的紧急修复，分支名称比较随意，有时带版本、有时不带版本，不同人的做法不一导致这个流程出现很多问题。在紧急问题修复后我们要把这些修复的问题合并回 `master`，但同时我们需要将这个修复合并到我们正在开发或者准备发布的分支中，这一步是经常容易忘记的，无论你是新来的同事还是老同学都可能在这里犯错。

而使用 `git-flow` 则可以非常简单的避免这些问题，它有非常完善的 `hotfix` 流程，确保你在修复问题时不影响常规迭代，当线上发生紧急问题时，你需要基于 `master` 分支执行如下命令：

```shell
git flow hotfix start 8.0.1
```

:::tip
该命令会基于 `master` 创建一个 `hotfix/8.0.1` 的分支，在进行一系列缺陷修复并通过测试后，使用如下命令完成这个紧急修复：
:::

```shell
git flow hotfix finish
```


:::tip `git-flow` 命令行工具会自动根据当前分支获取要使用的版本号，它将执行如下功能：

- 将修复合并到 `master` 分支确保主干为最新得到修复的内容
- 新建 `8.0.1` 的 `tag`
- 将修复同时合并到 `develop` 分支，确保当前开发分支也同样得到修复而不是被遗忘
- 删除临时的 `hotfix` 分支
:::

两条命令帮助我们做了非常多我们容易忘记的事情，同时版本号的管理也更加严禁不会轻易让我们出错，自动根据版本号创建 `tag` 也让我们的紧急修复可以被追溯。上面简单的两条命令还原为 `git` 的原生命令是如下代码：

```shell
# 基于 master 开启分支
git checkout -b hotfix/8.0.1

# 修复内容
git commit -a -s -m "Fixed something"

# 合并修复到主干和开发分支
git checkout master
git merge --no-ff hotfix/8.0.1
git tag -a 8.0.1
git checkout develop
git merge --no-ff 8.0.1 # merge tag
git branch -d hotfix/8.0.1
```

机器代码最容易解决的就是流程上的问题，但最难解决的是变更。当你在准备下一个 `release` 版本比如 `release/8.1.0` 时，此时线上又出现了紧急的缺陷待修复必须马上发版本解决。团队决定又不准备做版本回滚，那么就要有一些变更了。我们需要在完成修复代码后将修复内容合并到 `release/8.1.0` 分支，而不是 `develop` 分支，因为在 `release/8.1.0` 完成后会自动合并到 `develop`，确保我们的代码不会被丢失。这些场景我们的确有碰到。但我更建议在流程上避免这些事情，`release` 分支的新建代表下一个迭代版本即将发布，如不是非常紧急的问题可以等待新版本发布，否则可能对现有发布流程产生影响。

5. 长期服务分支维护

私有化版本在我们的团队中是“家常便饭”，这些私有化版本常常无法与主版本代码保持一致，包括 `hotfix` 也无法覆盖到这些版本中。通常的情况是我们最新的版本已经发布到 `8.0.0` 版本，但外部还有使用 `7.4.0` 或 `7.9.0` 版本的客户，他们因为业务稳定性的要求，很难升级 `SDK` 至最新版本，你不得不把一些主版本已经修复的问题单独合并到这些长期维护分支中，它很像 `Linux` 的 `LTS` 版本。

在 `git-flow` 模型中，使用 `support/` 前缀来管理这些长期维护版本分支，当我们确定某个版本的代码是需要长期维护的，并且客户在这个版本中提到了一些已知问题，我们需要对这些问题进行修复时，首先基于该版本开启一个 `support` 分支。如下：

```shell
git flow support start 7.4.x 7.4.0
```

以上命令是基于 `7.4.0` 的 `tag` 开启了一个新的分支 `support/7.4.x` 分支，这个分支就长期存在了，你不能删除它，它的级别与 `master、develop` 是一样重要的，比 `release、hotfix` 等更重要。因为他保存了这个长期支持分支的所有修复内容。接下来我们基于这个长期服务分支进行问题修复：

```shell
git flow hotfix start 7.4.1 support/7.4.x
```

此命令代表我们要基于 `support/7.4.x` 分支开启一个 `hotfix` 修复，修复后的版本号我们定在 `7.4.1`。在新的 `hotfix` 分支上我们进行问题代码修复，修复完成后执行

```shell
git flow hotfix finsih '7.4.1'
```

:::tip 执行此命令后会有如下几个操作：
- 合并 `hotfix/7.4.1` 到 `support/7.4.x` 分支
- 新建 `tag 7.4.1`
- 删除 `hotifx/7.4.1` 的分支
:::

这样基于 `support/7.4.x` 分支开启的所有修复都会合并回该分支中，它一直保持最新。在团队协作过程中，`hotfix/*` 分支开启后，需要在该分支中提测和测试，在确保无误后再合并到 `support/*` 分支确保。

我们来总结一下 `git flow support` 拆分成单独的 git 原生指令是如何工作的：

```shell
# 新建分支
git checkout 7.4.0
git branch -b support/7.4.x

# 基于 support/7.4.x 新建 hotfix
git checkout -b hotfix/7.4.1

# 解决问题并合并修复
git commit -a -s -m "fix: somthing"
git checkout support/7.4.x
git merge --no-ff hotfix/7.4.1
git tag 7.4.1
git branch -D hotfix/7.4.1
```

:::tip 参考文章
- [基于 git flow + gitlab 协作开发：01](https://cloud.tencent.com/developer/article/1689274)
- [基于 git flow + gitlab 协作开发：02 解决问题](https://cloud.tencent.com/developer/article/1800951)
:::


##  git-url 带账号和密码

### url 格式

``` shell
https://<user>:<password>@<gitserver>/<path>/<repo>.git
```

:::details 密码中的特殊字符转义

如果密码是纯文本，则可以正常工作，但如果密码具有感叹号等特殊字符，则需要使用 URL 编码。

``` shell
!: %21
#: %23
$: %24
&: %26
’: %27
(: %28
): %29
*: %2A
+: %2B
,: %2C
/: %2F
:: %3A
;: %3B
=: %3D
?: %3F
@: %40
[: %5B
]: %5D
```
:::

### git remote add 带账号和密码

``` shell
git remote add origin https://myuser:password%21@github.com/myuser/repo.git
```

### git remote set-url 带账号和密码

``` shell
git remote set-url origin https://myuser:password%21@github.com/myuser/repo.git
```

### git clone url 带账号和密码

如果使用用户名+密码的方式来 clone 远程仓库，如下形式：

```shell
git clone https://<user>:<password>@<gitserver>/<path>/<repo>.git
```

使用凭据 myuser/password! 到 github 存储库将如下所示：

```shell
git clone https://myuser:password%21@github.com/myuser/repo.git
```

### 查看远程仓库的 url

```shell
git remote -v
```

:::tip 参考文章
- [GIT：使用带有特殊字符的密码调用 git clone](https://blog.csdn.net/daihaoxin/article/details/119573422)

- [Git 远程推送时设置用户名和密码](https://blog.csdn.net/luomao2012/article/details/77804023)
:::
