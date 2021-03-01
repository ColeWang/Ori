<template>
  <div class="hello">Hello World</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { test } from './test'

  export default defineComponent({
    name: 'App',
    setup () {
      test({ name: '123' })
    }
  })
</script>

<style lang="less">
  .hello {
    background: pink;
  }
</style>
