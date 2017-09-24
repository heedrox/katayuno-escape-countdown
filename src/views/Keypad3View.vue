<template>
  <escape-keypad :text-done="textDone" :relative-keyboard-coords="[17,18,65,73]" skin="/static/keypad-skins/keypad3.png"
                 class="main-keypad3" combination-hash="$2a$10$5AHlWMVICV7OQlrbz/3OQegonQBWNLddgaX9gtdYLE4XysE1YSNlS"
                 :number-of-digits="3"></escape-keypad>
</template>
<style>
  .main-keypad3 {
    width: 100%;
  }
  .main-keypad3 .under-door p {
    padding-top: 10vh;
    font-size: 6vw;
  }
  .main-keypad3 .keypad input {
    position:relative;

    background-color:#000;
    color:#fff;
    border: solid 1px #fff;
  }
  .main-keypad3 .keypad img {
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
        textDone: '<p>¡Enhorabuena!</p><p>¡Has terminado el Katayuno Escape Edition!</p><p>¡Y has evitado una catástrofe gracias a tus habilidades!</p><p><b>¡Felicidades!</b></p>'
      }
    }
  }
</script>

