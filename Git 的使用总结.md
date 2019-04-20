# Git 的使用总结

### Git 常用的命令行
+ 初始化本地仓库： 输入 `git init` 将在本地指定目录创建一个隐藏目录`.git`用来保存每次的提交
+ 配置提交时的个人信息：输入`git config user.name 'NAME'`和`git config user.email 'HUAWEI@HUAWEI.COM'`
+ 提交代码： 输入`git add .[需要提交的代码目录]`和`git commit -m '提交的信息'`
+ 查看文件的提交状态, 若存在需要提交的文件，会列出来，以及当前的分支名称：输入`git status`
+ 查看提交记录日志：输入`git log`
