<<<<<<< HEAD
<!--
 * @Descripttion: 
 * @version: 
 * @Author: leung
 * @Date: 2020-08-18 15:24:45
 * @LastEditors: Frank
 * @LastEditTime: 2020-11-05 09:02:31
-->
### element-ui中table索取行号的问题 ~~已解决~~
- 在table调用row-class-name属性，将index添加到row里面，之后再用scop.row.index就可以获取行号了

    ```
    //.vue
    <el-table
          :data="msg.Field"
          border
          style="width: 100%"
          size="small"
          :row-class-name="tableRowClassName"
    >

    //medths方法
    tableRowClassName({ row, rowIndex }) {
     //把每一行的索引放进row
    row.index = rowIndex;
    }
    ```


    - https://www.jb51.net/article/159576.htm
### express搭建mock，学习一下

### 总结一下vue中_this替换this的问题
### css垂直水平居中
### 【Linux】Linux中Swap与Memory内存简单介绍
- https://blog.csdn.net/zwan0518/article/details/12059213
### ~~vue中v-model结合input checked不能使用click监听事件，可以使用change~~
- <input type="checkbox" name="vehicle" v-model="checkedValue"  value="Car2"  @change="handleChecked()" />
- https://www.jianshu.com/p/195088987d34

- http://www.lengziyu.cn/blog/
### javascript高阶函数（学习）
### css的grid布局和flex布局学习
### 异步组件按需加载
### js的撤销与重做
- https://blog.csdn.net/tzllxya/article/details/93396074
### 看源码代码规范，注释规范
### elementui弹框表头颜色可自定义研究

### 实用前端标注工具-AILabel.js
- https://www.jianshu.com/p/96f856598dd8

### 用splice在指定位置插入元素时遇到bug，前一个元素会变得和插入的元素一样，最后经过一天的排查和分析推测应该是数组浅拷贝的问题，在使用数组的地方将数组进行`JSON.parse(JSON.stringify(val))`转换解决了bug，但具体原因还不是很清楚
-  ```
   let redoArr=JSON.parse(JSON.stringify(this.msgRecord));
      GlobalData.arrIndexState = false;
      if (this.currentIndex < this.msgRecord.length - 1) {
        this.currentIndex++;
        this.group_item = redoArr[this.currentIndex];
      } else {
        return (this.arrIndex = this.msgRecord.length);
      }
   ```



   ### immediate和handler
这样使用watch时有一个特点，就是当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。

比如当父组件向子组件动态传值时，子组件props首次获取到父组件传来的默认值时，也需要执行函数，此时就需要将immediate设为true。https://www.cnblogs.com/williamjie/p/11155166.html


### [vue.nextTick()方法](https://blog.csdn.net/zhouzuoluo/article/details/84752280)
### [数据初始化放在created还是mounted方法里面？](https://www.cnblogs.com/lvonve/p/11250178.html)
FOR %i IN (D:\项目\大华协议\协议json格式（dahua_protocol）\third_Protocol\设备管理\*.json) DO mongoimport --db protocol_catalog --collection third_protocol --type json --file %i
### https://clearlove.blog.csdn.net/



###  sill fetchPackageMetaData error for koa-parameter@^3.0.1 request to http://registry.npm.taobao.org/koa-parameter failed, reason: connect ETIMEDOUT 10.35.37.100:8082

### https://cnodejs.org/
### https://www.nodejs.red/#/

### https://www.cnblogs.com/fyc001/p/11355439.html


### [docker安装nextcloud](https://www.cnblogs.com/Timesi/archive/2018/09/21/9688463.html)


#### https://www.cnblogs.com/qilj/p/10113087.html
#### https://www.cnblogs.com/ysocean/p/9392908.html   //nginx代理
#### httpd_can_network_connect
#### [Sentry,前端日志监控插件](https://blog.calabash.top/Calabash/articles/5dd4b147d5cac700117dfbe2)
#### 文件下载总结 blob
#### [vue绑定事件加括号和不加括号的区别](https://www.zhuyuntao.cn/vue%E4%B8%AD%E7%BB%91%E5%AE%9A%E4%BA%8B%E4%BB%B6%E7%9A%84%E6%8B%AC%E5%8F%B7%E9%97%AE%E9%A2%98)
#### https://www.jianshu.com/p/3ece295d7213 （el-table 自定义动态表头：异步更新数据之后表头不更新）
#### nodejs和nginx之间的关系
##### Node.js是开发平台，Nginx是HTTP基础设施。原则上说Nodejs的http包可以替代nginx，开发阶段也是这样做的，但实际部署都是nodejs作为逻辑层，位于nginx之后。原因在于Nginx的成熟的反向代理和高性能，高可配置，高稳定性。至于tomcat是java的http容器，和nodejs没有关系，大体可以类比做nodejs的http包或者python的wsgi。后台搭建java是否需要nodejs？通常不需要，但也不一定，nodejs是异步的，所以在某些特定状况下可以互补，比如天猫后台服务都是java，前端渲染就用了nodejs。
##### [参考](https://www.zhihu.com/question/306108934/answer/556064560)
### [vue前端架构图](https://www.cnblogs.com/clwydjgs/p/10796763.html)
### [nginx重启失败解决方案](https://www.itsvse.com/thread-3379-1-1.html)
### [vue父子组件生命周期函数执行顺序的问题](https://juejin.cn/post/6844904113914773518)
