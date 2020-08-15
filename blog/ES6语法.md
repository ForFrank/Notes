---
ES6语法总结
---

### 1、const和let
##### 被 const 声明的变量不能被重新赋值或重新声明；当一个变量需要被重新赋值的话，应该使用 let 去声明它：
 - 错误写法
  
        const helloWorld = 'Welcome to the Road to learn React';
        helloWorld = 'Bye Bye React';

 - 正确写法
  
        let helloWorld = 'Welcome to the Road to learn React';
        helloWorld = 'Bye Bye React';
##### 使用 const 声明的变量不能被改变，但是如果这个变量是数组或者对象的话，它里面持有的内容可以被更新。它里面持有的内容不是不可改变的。
- 允许的写法
  
        const helloWorld = {
        text: 'Welcome to the Road to learn React'
        };
        helloWorld.text = 'Bye Bye React';

### 2、箭头函数
  
       // function expression
       function () { ... }
       // arrow function expression
       () => { ... }

- 关于 this 对象的不同行为。一个普通的函数表达式总会定义它自己的 this 对象。但是箭头函数表达式仍然会使用包含它的语境关于箭头函数的括号还有一个值得关注的点。
- 如果函数只有一个参数，你就可以移除掉参数的括号，但是如果有多个参数，你就必须保留这个括号。
  
       Code Playground
       // allowed
       item => { ... }
       // allowed
       (item) => { ... }
       // not allowed
       item, key => { ... }
       // allowed
       (item, key) => { ... }

- 在 ES6 的箭头函数中，你可以用简洁函数体来替换块状函数体（用花括号包含的内
容），简洁函数体的返回不用显示声明。这样你就可以移除掉函数的 return 表达式。
   - 繁体
  
              {list.map(item => {
              return (
              <div key={item.objectID}>
              <span>
              <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              </div>
              );
              })}

  - 简体
       
              {list.map(item =>
              <div key={item.objectID}>
              <span>
              <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              </div>
              )}
### 3、类   

### 4、对象初始化
- 在E6中可以通过间歇属性更加简介地初始化对象
    - 繁写

          const name= 'frank';
          const user = {
                 name: name,
          };
- 当对心中的属性名与变量名相同时，可以简写如下：
    - 简写
       
           const name = 'frank';
           const user = {
                  name,
           };
- 另一个简洁的辅助办法是简写方法名。在 ES6 中，你能更简洁地初始化一个对象的方法。React 基础 33
   -  ES5
  
              var userService = {
                getUserName: function (user) {
                  return user.firstname + ' ' +user.lastname;
                },
              };
   -  ES6
  
              const userService = {
                getUserName(user) {
                  return user.firstname + ' ' + user.lastname;
                },
              };
### 5、function和class的联系和区别
### includes()
- 实例：检测数组site是否包含runoob
        let site = ['runoob', 'google', 'taobao'];
        
        site.includes('runoob'); 
        // true 
        
        site.includes('baidu'); 
        // false
- 语法
- 
        arr.includes(searchElement)
        arr.includes(searchElement, fromIndex)
- 参数说明
   - searchElement	必须。需要查找的元素值。
   - fromIndex	可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。
### ES6解构

       const user = {
       firstname: 'Robin',
       lastname: 'Wieruch',
       };
       // ES5
       var firstname = user.firstname;
       var lastname = user.lastname;
       console.log(firstname + ' ' + lastname);
       // output: Robin Wieruch
       // ES6
       const { firstname, lastname } = user;
       console.log(firstname + ' ' + lastname);
       // output: Robin Wieruch
### 扩展运算符
- 它只由三个点组成： ...。当使用它时，数组
或对象中的每一个值都会被拷贝到一个新的数组或对象。

       const userList = ['Robin', 'Andrew', 'Dan'];
       const additionalUser = 'Jordan';
       const allUsers = [ ...userList, additionalUser ];
       console.log(allUsers);
       // output: ['Robin', 'Andrew', 'Dan', 'Jordan']
- 这里 allUsers 是一个全新的数组变量，而变量 userList 和 additionalUser 还是和原来一
样。用这个运算符，你甚至可以合并两个数组到一个新的数组中。

       const oldUsers = ['Robin', 'Andrew'];
       const newUsers = ['Dan', 'Jordan'];
       const allUsers = [ ...oldUsers, ...newUsers ];
       console.log(allUsers);
       // output: ['Robin', 'Andrew', 'Dan', 'Jordan']