<template>
  <div>
    <input type="text" placeholder="请输入内容...." v-model="inputVal">
    <button @click="fn1">添加</button>
    <ul>
      <todoItem
        v-for="(item,index) in todos"
        :key="index"
        :item="item.name"
        :id="item.id"
        :index="index"
        @abc="fn2"
      />
    </ul>
  </div>
</template>
<script>
import todoItem from './todoItem.vue'
export default {
  data () {
    return {
      inputVal: '',
      todos: []
    }
  },
  components: {
    todoItem
  },
  methods: {
    fn1 () {
      // this.todos.push({
      //   name: this.inputVal,
      //   id: 1
      // })
      let obj = {
        name: this.inputVal
      }
      this.$http.post('/todos', obj).then(res => {
        this.todos.push(res)
      }).catch(error => {
        console.log(error.message)
      })
    },
    fn2 (index, id) {
      this.$http.delete(`/todos/${id}`).then(res => {
        this.todos.splice(index, 1)
      }).catch(error => {
        alert('删除失败', error.message)
      })
    }
  },
  mounted () {
    this.$http.get('/todos').then(res => {
      this.todos = res
    }).catch(error => {
      alert('网络异常，请稍后重试', error.message)
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
