<template>
  <div>
    下面是作用域插槽
    <slot name="child" :stus="stu" :message="test"></slot> <!-- 这里绑定的属性，将会传到父组件的slot-scope 上 -->
  </div>
</template>
<script>
export default {

  data() {
      return {
        stu: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba'],
        test: "这是slot"
      }
    }
  }

</script>
<style>
</style>
