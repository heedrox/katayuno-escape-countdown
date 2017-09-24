<template>
  <escape-keypad :text-done="textDone" :relative-keyboard-coords="[32,52,67,92]" skin="/static/keypad-skins/keypad2.png"
                 class="main-keypad2" combination-hash="$2a$10$H.1y7AcOS3GaLHpHxW1lr.9F3yXitqqvFfy1WHChGP9cnM.wA..8y"></escape-keypad>
</template>
<style>
  .main-keypad2 {
    width: 100%;
  }
  .main-keypad2 .under-door p {
    padding-top: 10vh;
    font-size: 6vw;
  }
  .main-keypad2 .keypad input {
    position:relative;
    top: 21.5vh;
    background-color:#000;
    color:#fff;
    border: none;
  }
  .main-keypad2 .keypad img {
    max-width:100%;
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

