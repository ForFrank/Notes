### element-ui中table索取行号的问题
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