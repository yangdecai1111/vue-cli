<template>
  <li>{{ item }} -- <button @click="fn1">删除</button></li>
</template>
<script>
export default {
  props:{
    item:String,
    index:Number
  },
  methods:{
    fn1(){
      this.$emit('abc',this.index)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>



