<template>
  <escape-keypad keyboard-coords="[132,100,564,666]" skin="/static/keypad-skins/keypad2.png" class="main-keypad"></escape-keypad>
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

