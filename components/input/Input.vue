<template>
  <input type="text" :value="value" @input="$emit('update:value', $event.target.value)">
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import './style/index.less'

  export default defineComponent({
    name: 'OInput',
    props: {
      value: {
        type: String
      }
    },
    emits: ['update:value'],
    setup (props) {
      console.log(props)
    }
  })
</script>
