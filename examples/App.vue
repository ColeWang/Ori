<template>
  <div class="hello">Hello World</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    setup () {
      console.log(123)
    }
  })
</script>

<style lang="less">
  .hello {
    background: pink;
  }
</style>
