<template>
  <button class="ori-btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import './style/index.less'

  export default defineComponent({
    name: 'OButton',
    setup () {
      console.log('button')
    }
  })
</script>
