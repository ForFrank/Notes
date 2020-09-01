<!--
 * @Descripttion: 
 * @version: 
 * @Author: leung
 * @Date: 2020-08-18 15:24:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-01 19:25:29
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
    
