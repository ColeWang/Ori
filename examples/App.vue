<template>
  <div class="main">
    <div>
      <o-input></o-input>
    </div>
    <div>
      <o-button>按钮</o-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Button, Input } from 'ori'

  export default defineComponent({
    name: 'App',
    components: {
      [Button.name]: Button,
      [Input.name]: Input
    },
    setup () {
      console.log('123')
    }
  })
</script>

<style lang="less">
  .main {
    width: 100%;
    height: 100%;
    padding: 50px;
  }
</style>
