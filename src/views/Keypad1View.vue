<template>
  <escape-keypad :relative-keyboard-coords="[20,12,80,85]" skin="/static/keypad-skins/keypad1.png" class="main-keypad"></escape-keypad>
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

