<template>
  <div class="hello">
    <p> 1:<input name="demo" v-model="checkValue" :value="1" type="checkbox" /></p>
    <p>2:<input name="demo" v-model="checkValue" :value="2" type="checkbox" /></p>
    <p> 3:<input name="demo" v-model="checkValue" :value="3" type="checkbox" /></p>
    <p>数组：{{checkValue}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
    checkValue:[]
    }
  },
  name: "HelloWorld",
  methods: {
    // handleCheckbox(){
    //   console.log(this.checkValue)
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
