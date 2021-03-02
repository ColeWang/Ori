<template>
  <div class="main">
    <div>
      <o-input v-model:value="test"></o-input>
    </div>
    <div>
      <o-button>按钮</o-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, Ref, watchEffect } from 'vue'
  import { Button, Input } from 'ori'

  export default defineComponent({
    name: 'App',
    components: {
      [Button.name]: Button,
      [Input.name]: Input
    },
    setup () {
      const test: Ref<string> = ref('')

      watchEffect(() => {
        console.log(test.value)
      })

      return {
        test
      }
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
