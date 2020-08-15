- 1、在子组件中定义data时，data必须是个函数
- 2、父组件可以向子组件传递参数，但子组件不能反向修改父组件的值
- 3、@click.native
- 4、1像素边框解决方案
- 5、scoped局部样式限制
- 6、v-on = @   监听事件
- 7、v-bind：= :   用于绑定dom属性
- 8、双向绑定
  - v-model 双向数据绑定
- 9、watch 侦听器
  - 不应该使用箭头函数
- 10、template模板下只能有一个根标签
- 11、ES6中的函数简化：
    ```
    //繁
    data：function {
        return {
            test: 'test'
        }
    }
    //简
    data () {
        return {
            test: 'test'
        }
    }
    ```
- 12 vue底层会帮我们处理this，在data中找不到就会去computed中去找
- 13、以$开头的是vue的实例属性
- 14、vue中的生命周期函数直接放在实例中即可，并不放在methods中
- 15、computed有缓存机制
- 16、vue中通过ref获取dom节点
    ```
    <div ref='hello'>test</div>
    console.log(this.$refs.hello);
    //<div>test</div>
    ```
- 17、click.native绑定原生事件
- 18、非父子组件间的传值
- 19、vuex中的getters有点像vue中的computed属性