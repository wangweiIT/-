# Git 的使用总结

### Git 常用的命令行
+ 初始化本地仓库： 输入 `git init` 将在本地指定目录创建一个隐藏目录`.git`用来保存每次的提交
+ 配置提交时的个人信息：输入`git config user.name 'NAME'`和`git config user.email 'HUAWEI@HUAWEI.COM'`
+ 提交代码： 输入`git add .[需要提交的代码目录]`和`git commit -m '提交的信息'`
+ 查看文件的提交状态, 若存在需要提交的文件，会列出来，以及当前的分支名称：输入`git status`
+ 查看提交记录日志：输入`git log` 或者 `git reflog`区别在于 `git reflog`可以查看所有的日志，不受回退的记录影像，而`git log`只能够查看当前版本节点之前的（包含当前版本）的记录。
+ 版本回退分两步走：
  - 首先获取需要回退的版本号，通过查看日志 `git log`或者`git reflog`
  - 获取版本号以后，输入`git reset --hard 版本号`或者`git reset --hard Head~0(回退次数)`,进行回退
