---
titel: react  
---

## react-router-dom和react-router的关系
- react-router-dom中的Route.js和Router.js，都是直接导入的react-router中的Route.js和Router.js。react-router提供的是路由的基本功能，react-router-dom根据在浏览器运行时路由的特征，在react-router之上做了一层封装，提供了HashRouter、BrowserRouter等在web端常用的路由。如果是在web端使用的话，package.json中直接引入react-router-dom就可以。
## react使用实体字符
- React 会将所有要显示到 DOM 的字符串转义，防止 XSS。所以，如果 JSX 中含有转义后的
实体字符，比如 &copy;（©），则最后 DOM 中不会正确显示，因为 React 自动把 &copy; 中的特
殊字符转义了。
- 解决方案
  
    <span dangerouslySetInnerHTML={{__html: '&copy;'}}></span>

## React 中的元素、组件、实例和节点
- [参考链接](https://blog.csdn.net/xuchaobei123/article/details/79488099)
## 无状态组件
- 当组件只有一个render的时候，可以指返回一个函数，不需要再定义class类了，无状态组件可以提升代码的性能，因为没有生成任何的生命周期函数
## 有状态组件和无状态组件
- 什么情况下使用有状态组件？什么情况下使用有状态组件？
- 如果一个组件需要有自己的私有数据，则推荐使用：class创建的有状态组件；
如果一个组件不需要有自己的私有数据，则推荐使用：无状态组件；
React官方说：无状态组件，由于没有自己的state和生命周期函数，所以运行效率高
有状态组件和无状态组件之间的本质区别就是：有无state属性和生命周期函数！
组件中的props和state/data之间的区别
props中的数据都是外界传递过来的；
state/data中的数据，都是组件私有的；（通过ajax获取回来的数据，一般都是私有数据）；
props中的数据都是只读的；不能重新赋值；
state/data中的数据，都是可读可写的；
## react脚手架应用
- creat-react-app
## React的特点
- 1、高效：通过对DOM的模拟，最大限度的减少与DOM的交互。
- 2、组件：构建组件，使代码更容易得到复用，能够很好地应用在大项目的开发中。
- 单向数据流：React实现了单向数据流，从而减少了重复代码，这也解释了它为什么比传统数据绑定更简单。
