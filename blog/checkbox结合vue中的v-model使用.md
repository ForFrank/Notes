### 总结一下最近在vue中使用checkbox的心得
#### 1、vue中可以直接使用v-model监听checkbox中的value值,实现效果如下：
- 
    ``` 
    //template
    <p> 1:<input name="demo" v-model="checkValue" :value="1" type="checkbox" /></p>
    <p>2:<input name="demo" v-model="checkValue" :value="2" type="checkbox" /></p>
    <p> 3:<input name="demo" v-model="checkValue" :value="3" type="checkbox" /></p>
    <p>数组：{{checkValue}}</p>

    //data
    data(){
      return{
        checkValue:[]
      }
    },
  ```
  ![](https://raw.githubusercontent.com/ForFrank/Notes/master/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200815180344.png)
    - checkValue是一个数组，当前checkbox被选中时，v-model会将value值push进checkValue数组，当前checkbox被取消时，会将当前的value值从checkValue数组中pop出去。
    - 在checkbox中使用了v-model之后，checkbox自带的checkd属性会失效。
#### 2、如果给checkbox绑定事件需要使用@change，而不是@click，具体细节可参考这篇文章:
  - [vue2.0中ckeckbox(复选框)的使用心得，及对click事件和change的理解](https://www.cnblogs.com/hanqingtao/p/9269383.html)