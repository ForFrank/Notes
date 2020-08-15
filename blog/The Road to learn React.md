---
The Road to learn React笔记
---

##### 模块热替换（HMR）
  
- 用 create-react-app 创建的项目有一个优点，那就是可以让你在更改源代码的时候浏览器自
动刷新页面。试试改变 src/App.js 文件中的变量 helloWorld ，修改过后浏览器应该就会刷
新页面。但有一个更好的方式来实现这个功能。
模块热替换（HMR）是一个帮助你在浏览器中重新加载应用的工具，并且无需再让浏览
  
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './App';
        import './index.css';
        ReactDOM.render(
        <App />,
        document.getElementById('root')
        );

        //开启热替换代码
        if (module.hot) {
        module.hot.accept();
        }
### 组件内部状态
   - 组件内部状态也被称为局部状态，允许你保存、修改和删除存储在组件内部的属性。使
用 ES6 类组件可以在构造函数中初始化组件的状态。
   - 构造函数只会在组件初始化时调用一次。