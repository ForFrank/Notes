---
title: "concat()方法"
---

# JavaScript concat() 方法
## 定义和用法
 concat() 方法用于连接两个或多个数组。
 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
### 语法
- `arrayObject.concat(arrayX,arrayX,......,arrayX)`
### 返回值
- 返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

## 实例
- 在本例中，我们将把 concat() 中的参数连接到数组 a 中：

        <script type="text/javascript">
        var a = [1,2,3];
        document.write(a.concat(4,5));
        </script>

        输出：
        1,2,3,4,5