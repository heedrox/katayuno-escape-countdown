<template>
  <escape-keypad :text-done="textDone" :relative-keyboard-coords="[32,52,67,92]" skin="/static/keypad-skins/keypad2.png" class="main-keypad"></escape-keypad>
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
    },
    data () {
      return {
        textDone: '<p>¡Enhorabuena!</p><p>Te queda poco tiempo.<br/>Abre ya el <b>SOBRE 3</b>.<br/><br/>¡El destino de Europa está en tus manos!</p>'
      }
    }
  }
</script>

