<!--
 * @Descripttion: 
 * @version: 
 * @Author: leung
 * @Date: 2020-08-18 15:24:45
 * @LastEditors: leung
 * @LastEditTime: 2020-08-18 15:26:03
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
### js的撤销与重做
- https://blog.csdn.net/tzllxya/article/details/93396074