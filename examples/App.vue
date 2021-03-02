<template>
  <div class="main">
    <o-button></o-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Button } from 'ori'

  export default defineComponent({
    name: 'App',
    components: {
      [Button.name]: Button
    },
    setup () {
      console.log(123)
    }
  })
</script>

<style lang="less">
  .main {
    width: 100%;
    height: 100%;
  }
</style>
