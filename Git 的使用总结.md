# Git 的使用总结

## Git 常用的命令行
+ 初始化本地仓库： 输入 `git init` 将在本地指定目录创建一个隐藏目录`.git`用来保存每次的提交

+ 配置提交时的个人信息：输入`git config --global user.name 'NAME'`和`git config --golbal user.email 'HUAWEI@HUAWEI.COM'`

+ 提交代码： 输入`git add .[需要提交的代码目录]`和`git commit -m '提交的信息'`

+ 查看文件的提交状态, 若存在需要提交的文件，会列出来，以及当前的分支名称：输入`git status`

+ 查看提交记录日志：输入`git log` 或者 `git reflog`区别在于 `git reflog`可以查看所有的日志，不受回退的记录影像，而`git log`只能够查看当前版本节点之前的（包含当前版本）的记录。

+ 版本回退分两步走：
  - 首先获取需要回退的版本号，通过查看日志 `git log`或者`git reflog`
  - 获取版本号以后，输入`git reset --hard 版本号`或者`git reset --hard Head~0(回退次数)`,进行回退 

+ 创建和切换分支
  - 查看当前有哪些分支 输入 `git branch`

  - 创建分支 输入 `git branch dev(新的分支名)`

  - 放弃本次的修改（没有commit提交） 输入 `git checkout [.放弃所有文件] 或者 [指定的文件名]`

  - 切换分支 输入 `git checkout dev` 

  - 合并分支输入`git merge dev`，将dev分支合并到当前的分支中去  注：通过本地创建分支，然后合并的方式，就可以修改bug 然后再何入主干。

    如果同时在`master`和`dev`分支上都`commit`了代码则在合并时候，会出现冲突，需要手动处理后再`commit`提交
    
## GitHub
+ 只不过是一个网站，允许别人通过`git`上次代码的功能

  ### 提交代码到 `github` 上去
  + 输入命令`git push ssh路径 分支名称`
    如: `git push https://github.com/wangweiIT/-.git master`
    
### 拉取代码和克隆仓库

### 关于切换分支以及同步远程分支
  + 如何查看远程仓库以及本地仓库的所有分支：输入`git branch -a`
  + 查看远程仓库所有分支：输入`git branch -r`
  + 查看本地所有分支：输入`git branch`
#### 如何同步远程仓库的分支，并进行切换到相应的分支
  + 输入 `git fetch`，抓取远程仓库的所有分支
  + 有了 `fetch` 的动作后，才能够将本地代码切换到远程代码库对应的任意分支中
  + 输入`git checkout 分支名`,切换分支，拉取远程分支到本地对应的分支
#### 如何删除本地和远程仓库的分支
  + 输入`git branch -d 分支名` ，删除本地分支
  + 输入`git push origin -d 分支名`，直接删除远程仓库的分支 或者直接在`gitHub`上删除
#### 两种获取代码的方式：
  + 方式一：`git pull [地址] 分支名`
    - 拉取代码，输入命令： `git pull https://github.com/wangweiIT/-.git master `
    - 前提是本地要初始化一个git仓库 `git init`,然后再`pull`

  + 方式二：`git clone [地址]`
    - 不需要本地初始化git仓库
#### ssh方式上传代码
- 公钥 私钥，两者之间是有关联的。
- 生成公钥和私钥 dd 
  + 输入`ssh-keygen -t rsa -C "邮箱"` 本地生成公钥和私钥






















  ```md
  git checkout . ``#本地所有修改的。没有的提交的，都返回到原来的状态
  git stash ``#把所有没有提交的修改暂存到stash里面。可用git stash pop回复。
  git reset --hard HASH ``#返回到某个节点，不保留修改。
  git reset --soft HASH ``#返回到某个节点。保留修改
  ```
