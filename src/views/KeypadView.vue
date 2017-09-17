<template>
  <escape-keypad class="main-keypad"></escape-keypad>
</template>
<style>
  .main-keypad {
    width: 100%;
  }
</style>
<script>
  import EscapeKeypad from '../components/Keypad.vue'

  export default {
    components: {
      EscapeKeypad
    }
  }
</script>

