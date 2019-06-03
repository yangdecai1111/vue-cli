<template>
  <div>
    <input type="text" placeholder="请输入内容...." v-model="inputVal">
    <button @click="fn1">添加</button>
    <ul>
        <todoItem v-for="(item,index) in todos" :key="index" :item="item.name" :index="index" @abc="fn2"/>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import todoItem from './todoItem.vue'
export default {
  data(){
    return{
      inputVal:'',
      todos:[]
    }
  },
  components:{
    todoItem
  },
  methods:{
    fn1(){
      this.todos.push(this.inputVal)
    },
    fn2(index){
      this.todos.splice(index,1)
    }
  },
  mounted () {
    axios.get('http://localhost:8080/api/todo.json').then(response=>{
      var res=response.data
      console.log(res)
      if(res.code===0){
        this.todos=res.data
      }else{
        alert(res.msg)
      }
    })
  }
}
</script>
<style lang="scss" scoped>

</style>




