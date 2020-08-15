---
title: html&css笔记
date: 2019.04.12 20:26
---

### 在div中让字体居中 
- html
  
      <div class="test">居中</div>
- css
  
      .test {
          height: 100px;
          text-align: center;
          line-height: 100px;
      }
# javascript 30
## 01
### 1、HTML data-* 属性

- data-* 属性用于存储私有页面后应用的自定义数据。
- data-* 属性可以在所有的 HTML 元素中嵌入数据。
- 自定义的数据可以让页面拥有更好的交互体验（不需要使用 Ajax 或去服务端查询数据）。
- data-* 属性由以下两部分组成：
- 属性名不要包含大写字母，在 data- 后必须至少有一个字符。
- 该属性可以是任何字符串


### 2、vh
- 说明：
相对于视口的高度。视口被均分为100单位的vh
示例代码：
```
h1 {
	font-size: 8vh;
}
```
- 如果视口的高度是200mm，那么上述代码中h1元素的字号将为16mm，即(8x200)/100

### 3、rem
- 说明：
相对长度单位，相对于根元素(即html元素)font-size计算值的倍数

### 4、CSS的过度属性:[https://www.cnblogs.com/xiaohuochai/p/5347930.html](https://www.cnblogs.com/xiaohuochai/p/5347930.html)

### 5、CSS text-transform 属性
- none	默认。定义带有小写字母和大写字母的标准的文本。
- capitalize	文本中的每个单词以大写字母开头。
- uppercase	定义仅有大写字母。
- lowercase	定义无大写字母，仅有小写字母。
- inherit	规定应该从父元素继承 text-transform 属性的值。

### 6、CSS letter-spacing 属性
- normal	默认。规定字符间没有额外的空间。
- length	定义字符间的固定空间（允许使用负值）。
- inherit	规定应该从父元素继承 letter-spacing 属性的值。

### 7、ES6之Array.from()方法
- Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
1、将类数组对象转换为真正数组：
```
let arrayLike = {
    0: 'tom', 
    1: '65',
    2: '男',
    3: ['jane','john','Mary'],
    'length': 4
}
let arr = Array.from(arrayLike)
console.log(arr) // ['tom','65','男',['jane','john','Mary']]
```
### 8、transitionend 事件
- transitionend 事件在 CSS 完成过渡后触发。
- 语法
  - `object.addEventListener("webkitTransitionEnd", myScript);`  // Safari 3.1 到 6.0 代码
  - `object.addEventListener("transitionend", myScript); `       // Standard syntax
- 实例：[点击查看](http://www.runoob.com/try/try.php?filename=tryjsref_transitionend)

## 02
### 1、一个元素同时使用多个类选择器
- [https://www.cnblogs.com/guxin/p/css-multi-class-selector.html](https://www.cnblogs.com/guxin/p/css-multi-class-selector.html)

### 2、transform-orgin

# 03
1. CSS中的`:root`和`var`
   
   [https://blog.csdn.net/qq_37595946/article/details/84531311](https://blog.csdn.net/qq_37595946/article/details/84531311)

2. NodeList 和 Array 的区别

   可以打开 __proto__ 查看它的方法，其中有 `forEach()`、`item()`、`keys()` 等。而 Array 的 prototype 中有 `map()`、`pop()` 等数组才有的方法。
3. setProperty
   
   - 定义和使用
      setProperty() 方法用于设置一个新的 CSS 属性，同时也可以修改 CSS 声明块中已存在的属性。
   - 语法
      `object.setProperty(propertyname, value, priority)`  
   - 属性
      
      参数 | 描述
     -|:-:| -: 
      propertyname | 必需。一个字符串，表示创建或修改的属性。
      value | 可选，新的属性值。
      priority|	可选。字符串，规定是否需要设置属性的优先级 important。
4. JavaScript 的 this 原理
   
   [http://www.ruanyifeng.com/blog/2018/06/javascript-this.html](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)

# 04
1. sort()方法
- 说明
  - 如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进-行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

  - array.sort()方法默认是升序排序，如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
      - 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
      - 若 a 等于 b，则返回 0。
      - 若 a 大于 b，则返回一个大于 0 的值。
  - 简单点：比较函数两个参数a和b，返回a-b升序，返回b-a降序
  
 [https://www.cnblogs.com/fnz0/p/7680297.html](https://www.cnblogs.com/fnz0/p/7680297.html)
2. reduce()方法
- 定义和用法
   reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
   reduce() 可以作为一个高阶函数，用于函数的 compose。
   注意: reduce() 对于空数组是不会执行回调函数的。
- 语法
`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`
- 这是一个归并数组的方法，它接受一个函数作为参数（这个函数可以理解成累加器），它会遍历数组的所有项，然后构建一个最终的返回值，这个值就是这个累加器的第一个参数。例子如下：
```
[0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
});
```
- 而此处我们需要统计一个给定数组中各个项的值，恰好可以用到这个方法，在累加器之中，将统计信息存入一个新的对象，最后返回统计值。
```
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  const reduce = data.reduce( (obj, item) => {
	  if( !obj[item]  ) {
		  obj[item] = 0;
	  }
		  obj[item]++;
		  return obj;
  }, {});
  console.log(reduce);
```
# 05 
1. :first-child伪类选择器
   
   只要E元素是它的父级的第一个子元素，就选中。它需要同时满足两个条件，一个是“第一个子元素”，另一个是“这个子元素刚好是E”。[参考链接](https://www.cnblogs.com/wangmeijian/p/4562304.html)
# 06
1. 正则表达式(RegExp)
- 直接量语法
  ```
  /pattern/attributes
  ``` 
- 创建RegExp对象的语法
  ```
  new RegExp(pattern, attributes);
  ```
- 参数
  
  参数 pattern 是一个字符串，指定了正则表达式的模式或其他正则表达式。
  参数 attributes 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。ECMAScript 标准化之前，不支持 m 属性。如果 pattern 是正则表达式，而不是字符串，则必须省略该参数。
2. replace()方法
   replace()方法用于在字符串中用一些字符替换另外一些字符，后替换一个与正则表达式匹配的子串。
   - 语法
    ```
    stringObject.replace(regexp/substr,replacement)
    ```
   参数|描述
    -|:-:| -:
   regexp/substr|必需。规定子字符串或要替换的模式的 RegExp 对象。请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。
   replacement|必需。一个字符串值。规定了替换文本或生成替换文本的函数。
# 07
1. some 和 every
- 两者的相同之处是，都接受一个函数作为参数，对数组元素都执行一次此函数，都不会改变原数组的值。不同之处在于返回条件不同：
- some() 中直到某个数组元素使此函数为 true，就立即返回 true。所以可以用来判断一个数组中，是否存在某个符合条件的值。

```
const isAdult = people.some( person => {
      const currentYear = (new Date()).getFullYear();
      return currentYear - person.year >= 19;
});
console.log({isAdult});
```
- 而 every() 中除非所有值都使此函数为 true，才会返回 true 值，否则为 false。主要用处，即判断是否所有元素都符合条件。
```
const allAdult = people.every( person => new Date().getFullYear() - person.year >= 19);
console.log({allAdult});
```
- 与 some() 相对应的话，some() 像是或运算，而 every() 则是与运算了。

2. find 和 fineIndex
- 这两个 ES6 的新特性类似于 some() ，但对于符合条件的元素，返回值不是布尔类型。不一样的地方在于，find() 返回的是这个元素的值（或 undefined），而 findIndex() 返回的是这个元素的索引（或 -1）。

```
const comment = comments.find(comment => comment.id == 823423);
const index = comments.findIndex(comment => comment.id == 823423);
```
3. slice 和 splice
- 这两者比较相似的地方，大概只有：参数的第一个都是指的起始位置，且都接受负数，若是负数，代表倒数第几位。

- 而其他地方是需要区分清楚的：

- slice()：不修改原数组，按照参数复制一个新数组，参数表述复制的起点和终点索引（省略则代表到末尾），但终点索引位置的元素不包含在内。
- splice()：原数组会被修改。第二个参数代表要删掉的元素个数，之后可选的参数，表示要替补被删除位置的元素。
- 让我们来联想一下，看到一块纹着漂亮花纹的布料，slice 拿出相机拍了一张照，而 splice 拿出剪刀把这个花纹剪下来带走了，再用其他布料给缝回去。

- 所以想要删除一个元素，有两种实现思路，一是把出它之外的元素给复制下来再合在一起，二是直接把它删除。

```
// 删除方法一，splice()
// comments.splice(index, 1);

// 删除方法二，slice 拼接
const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
];
```
- 上面的三个点（...）是 ES6 中的扩展语法，可以展开这个数组并方便的拼接。  

# 13

# 14 JS中的引用与复用
[参考链接](https://github.com/soyaine/JavaScript30/tree/master/14%20-%20JavaScript%20References%20VS%20Copying)
- Json的序列化和反序列化
  [参考链接](https://www.cnblogs.com/fengxuehuanlin/p/5700282.html)

# 15 Localstorage
1.事件委托

- [参考链接](https://www.cnblogs.com/liugang-vip/p/5616484.html)
- [事件冒泡](https://www.cnblogs.com/moqing/p/5590216.html)

# 16 
- text-shadow
text-shadow: h-shadow v-shadow blur `color`; `none`：无阴影 `length`，①：第1个长度值用来设置对象的阴影水平偏移值。可以为负值 `length`，②：第2个长度值用来设置对象的阴影垂直偏移值。可以为负值 `length`，③：如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值 `color`：设置对象的阴影的颜色。

# 17
- trim()方法
  - 定义和用法
     - trim() 方法用于删除字符串的头尾空格。
     - trim() 方法不会改变原始字符串。 
  - 实例
    - 去除字符串的头尾空格:
      ```
      var str = "       Runoob        ";
      alert(str.trim());
      ```
    - 输出结果:
      ```
      Runoob
      ```

# 18
- split
    - 定义和用法
       - split() 方法用于把一个字符串分割成字符串数组。
    - 实例
       - 使用 limit 参数:

          ```
          var str="How are you doing today?";
          var n=str.split(" ",3);
          ```
       - n 将输出3个数组的值:

          ``` 
          How,are,you 
          ``` 
- Math.round()，Math.ceil()，Math.floor()的区别
  - [参考链接](https://www.cnblogs.com/johnsonwei/p/6101171.html)

# 22
1.`Element.getBoundingClientRect()`   
Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。   
返回值是一个`DOMRect`对象，这个对象是由该元素的`getClientRects()`方法返回的一组矩形的集合, 即：是与该元素相关的CSS边框集合。`DOMRect` 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。   
DOMRect相关属性: 

Attribute | Type | Description
 --- | --- | ---
bottom | float | Y 轴，相对于视口原点（viewport origin）矩形盒子的底部。只读。 
height | float | 矩形盒子的高度（等同于 bottom 减 top）。只读。
left | float | X 轴，相对于视口原点（viewport origin）矩形盒子的左侧。只读。 
right | float | X 轴，相对于视口原点（viewport origin）矩形盒子的右侧。只读。 
top | float | Y 轴，相对于视口原点（viewport origin）矩形盒子的顶部。只读。
width | float | 矩形盒子的宽度（等同于 right 减 left）。只读。 
x | float | X轴横坐标，矩形盒子左边相对于视口原点（viewport origin）的距离。只读。 
y | float | Y轴纵坐标，矩形盒子顶部相对于视口原点（viewport origin）的距离。只读。

2.appendChild() 

只能传一个节点，且不直接支持传字符串【需要 appendChild(document.createTextElement('字符串'))代替】，返回追加的 Node 节点；

若 appendChild() 的参数是页面存在的一个元素，则执行后原来的元素会被移除；

例如：document.getElement("a").appendChild(document.getElementByIdx("b"))，执行后，b 元素会先被移除，然后再添加到 a 中。

# 25
在事件回调函数中调用e.stopPropagation()方法后，即可看到在该处监听到事件后不再继续传递事件





