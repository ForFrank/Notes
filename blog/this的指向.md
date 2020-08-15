**1.this指的是直接调用当前方法（函数）的那个对象，也就是说函数在谁那被调用，this就指的是谁。**

eg:
```
oBtn.onclick = function(){ 
        alert(this);   //oBtn
  }

 

 oBtn.onclick = fn1;

   function fn1(){ 
     alert(this); //oBtn
   }
 ```
很容易看出，函数是在按钮对象被点击的时候调用，所以this指的是obtn，这两种情况是等同的是，只是调用函数的写法不同。

**2.当函数里面嵌套函数的时候，嵌套的那个函数里面的this指的是widows，这是JS的一个特性。**

eg:
```
oBtn.onclick = function(){

     alert(this); //oBtn(记得这里还是oBtn)

     fn1(); 
   }

  function fn1(){ 
   alert(this);  // window
   }
```
##### 对于上述情况，当我们需要fn1里面的this指向按钮的时候怎么办呢，这个时候有两种方法。
- 1、将this作为参数传到函数里去

eg:
```
oBtn.onclick = function(){

     alert(this); //oBtn

     fn1(this); 1 将上面的this作为参数传函数去
   }

function fn1(obj){ 
  alert(obj);  // oBtn
}
```
- 2、将this保存起来赋值给另一个变量

eg:
```
var that = null;
oBtn[i].onclick = function(){

   alert(this); //oBtn
   that = this ;// 将上面的this保存起来赋给另一个变量
   fn1();
}

function fn1(){ 
   alert(that);  // 指向oBtn
}
```
**3.如果有new关键字，this指向new出来的那个对象**
- 当用new去调用一个函数：这个时候this指的就是创建出来的对象 而且函数的默认返回值就是this 即这个对象（隐式返回 不用自己再写返回值）

eg:
```
function CreatePerson(name){   //函数名首字母大写
      //var this=new Object(); 系统会偷偷在这里声明一个对象赋给this替咱们做，不用写
     this.name = name; 
     this.showName = function(){ 
        alert(this.name); 
     } 
     //return this;  函数的默认返回值就是this即这个对象（隐式返回 不用自己再写返回值）

} 
var p1 =new CreatePerson('haha'); 
//当用new去调用一个函数：这个时候this指的就是创建出来的对象 而且函数的默认返回值就是this即这个对象（隐式返回 不用自己再写返回值）
 p1.showName();
 ```
 new操作符具体干了什么呢?

- （1）创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
- （2）属性和方法被加入到 this 引用的对象中。
- （3）新创建的对象由 this 所引用，并且最后隐式的返回 this 。

**4.在IE下，事件的绑定的第二种形式中，obj.attachEvent(事件名称,事件函数)，里面的this指的是window。**

- 当然这不是我们想要的，所以让this指向触发事件的对象呢？这就需要提到一个方法call()；它可以改变this的指向;

- call(this的指向，原来函数的参数列表)：它有两个参数，第一个指的是改变的this的指向，也就是你想要this指向谁就写谁，如果写的是null,this的指向就不会改变，还是指向原来的。从第二个参数开始，就代表的是函数里面的具体传入的参数了。具体用法我们来看个栗子：
  
eg:
```
 //有一个函数，两个参数。

function fn1(a,b){ 
    alert(this); //   本来默认是window,改变后为1
    alert(a+b);// 30
}

//三种调用方法
fn1(); //正常调用。弹出 this指向window, a+b为 undefined
fn1.call(); // 等同于上面 ,这两种调用是一样的
fn1.call(1,10,20);  //  弹出this指向 1，同时传入两个数，弹出30
```
