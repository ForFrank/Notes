- 3.1.4、jvaScript严格模式(use strict)
  - 1、eg:
   ```
    <script>
    "use strict";
    x = 3.14;       // 报错 (x 未定义)
    </script>
   ```
   - 2、使用严格模式的好处：
     - 1、消除代码运行的一些不安全之处
     - 2、提高变异效率，增加运行速度
     - 3、为未来新版本的JavaScript做好铺垫
 - 3.1.5 语句
   - 语句建议以`;`结尾
 - 3.3 变量
   - 1、eg:
     ```
     funciton test() {
         message = "hi"; //全局变量
     }
     test();
     alert(message); //hi
     ```
    - 总结：这个例子省略了 var 操作符，因而 message 就成了全局变量。这样，只要调用过一次 test()函数，这个变量就有了定义，就可以在函数外部的任何地方被访问到。
  - 3.4.4 Boolean类型
    - 虽然 Boolean 类型的字面值只有两个，但 ECMAScript 中所有类型的值都有与这两个 Boolean 值等价的值。要将一个值转换为其对应的 Boolean 值，可以调用转型函数 Boolean()，如下例所示：
    ```
    var message = "Hello world!";
    var messageAsBoolean = Boolean(message);
    ```
    - 在这个例子中，字符串 message 被转换成了一个 Boolean 值， 该值被保存在messageAsBoolean变量中。可以对任何数据类型的值调用 Boolean()函数，而且总会返回一个 Boolean 值。至于返回的这个值是 true 还是 false，取决于要转换值的数据类型及其实际值。下表给出了各种数据类型及其对应的转换规则。
  - 3.4.5 Number类型
    - 1.浮点数值
      - 浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数。例如， 0.1 加 0.2的结果不是 0.3，而是 0.30000000000000004。这个小小的舍入误差会导致无法测试特定的浮点数值。
    - 2.NaN
      - NaN与任何值都不相等，包括自己本身
    - 4.数值转换
      - 1.有 3 个函数可以把非数值转换为数值： Number()parseInt()和 parseFloat()。Number()可以用于任何数据类型，而另两个函数则专门用于把字符串转换成数值。如果是 null 值，返回 0。如果是 undefined，返回 NaN。
    - 5.字符串
      - 把一个值转换成字符串有两种方法：
        - toString(),null和undefined没有这个方法
        -  String()，null和undefined有这个方法
   -  3.6.8 with语句
      -  with语句的目的追要是为了简化多次编写同一个对象的工作
      -  由于大量使用with语句会导致性能下降，同时也会给调试代码造成困难，因此在开发大型应用程序时，不建议使用with语句。
   -  3.7 函数
       -  1. eg
        ```
        function sun(num1, num2) {
          return num1 + num2;
          alert("Hello world); //永元不会执行
        }
        ```
      - 在这个例子中，由于调用 alert()函数的语句位于 return 语句之后，因此永远不会显示警告框。
      -  2.可以向 ECMAScript 函数传递任意数量的参数，并且可以通过 arguments 对象来访问这些参数。
      -  3.由于不存在函数签名的特性， ECMAScript 函数不能重载。
   -  4.1.3 传递参数
   -  4.2.1 延长作用域链
       -   try-catch 语句的 catch 块；
       -   with 语句。
- 5.5 Function
  - 函数是对象，函数名是指针
  - 5.5.3 作为值得函数
    - 1、 要访问函数的指针而不是执行函数的话，必须去掉函数名后面的那对圆括号去掉圆括号之后传递的是
值，而不是执行后的结果
  - 5.5.4 函数内部属性
    - arguments是一个类数组对象，包含着传入函数的所有参数。虽然arguments的主要用途是保存函数参数，但这个对象还有一个名叫callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数
    - eg
     ```
     function factorial(num){
        if (num <=1) {
          return 1;
        } else {
          return num * factorial(num-1)
        }
     }

     function factorial(num){
      if (num <=1) {
        return 1;
      } else {
        return num * arguments.callee(num-1)
      }
    }
     ``` 
  - 5.5.5 函数属性和方法
    - 1、每个函数都包含两个属性：length和prototype
    - 2、prototype
  - 5.6.3 String类型
    - 1、字符串操作方法
      - 1、concat
      - 2、slice()、substr()、substring()都会返回被操作字符串的一个子字符串，而且也都接受一或两个参数。第一个参数指定子字符串的开始位置，第二个参数（在指定的情况下）表示子字符串到哪里结束。具体来说， slice()和substring()的第二个参数指定的是子字符串最后一个字符后面的位置。而 substr()的第二个参数指定的则是返回的字符个数。
    - 3、字符串位置方法
      - indexOf、lastIndexOf
    - 4、trim()方法
      - ECMAScript 5 为所有字符串定义了 trim()方法。这个方法会创建一个字符串的副本，删除前置及
后缀的所有空格，然后返回结果。
    - 8、fromCharCode()方法
      -  这个方法的任务是接收一或多个字符编码，然后将它们转换成一个字符串。
