# React-blog

最近在学习react，打算写一个博客练手。
- 整体思路：React+Gitpages+Github issues API。
### React技术栈
- axios
- react-router-dom
- marked
- hightlight.js
### 进度：
- 2019.04.14   整体布局，详情页渲染
- 2019.04.15   主页及列表页渲染
- 2019.04.19   部署到`github pages`并绑定域名
- 2019.05.12   添加tags
### 接下来需要做的
- ~~添加tags~~
- 添加分页
- 完善about页面
- 完善posts页面
- 添加评论功能
- 用styled-components重构CSS
- 用redux重构状态管理
### 绑定阿里云域名
1.打开命令行工具,ping github pages的地址，XXX.github.io
```
C:\Users>ping XXX.github.io
正在 Ping XXX.github.io [XXX.XXX.XXX.XXX] 具有 32 字节的数据:
来自 XXX.XXX.XXX.XXX 的回复: 字节=32 时间=198ms TTL=48
```
得到github pages的ip地址：XXX.XXX.XXX.XXX

2.配置阿里云域名解析

3.配置github pages的custom domain

 进入你的github pages的仓库，然后在设置里面将你的域名的地址，添加到custom domain中，然后保存即可。

 4.[参考链接](https://www.cnblogs.com/olddoublemoon/p/6629398.html)