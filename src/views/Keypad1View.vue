<template>
  <escape-keypad :text-done="textDone" :relative-keyboard-coords="[20,12,80,85]" skin="/static/keypad-skins/keypad1.png"
                 class="main-keypad" combination-hash="$2a$08$GnZouCpA1PtQ6MzfqkjnseGijHbkk7iCBvTiH3lCKXcte6N/xEh7O"></escape-keypad>
</template>
<style>
  .main-keypad {
    width: 100%;
  }
  .main-keypad .under-door p {
    padding-top: 10vh;
    font-size: 6vw;
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
        textDone: '<p>¡Enhorabuena!</p><p>Has demostrado ser un buen agente.<br/>Abre ahora el sobre 2.<br/><br/>¡Date prisa, el tiempo se acaba!</p>'
      }
    }
  }
</script>

