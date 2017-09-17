<template>
  <escape-countdown class="main-countdown"></escape-countdown>
</template>
<style>
  .main-countdown {
    width: 100%;
  }
</style>
<script>
  import EscapeCountdown from '../components/Countdown.vue'

  export default {
    components: {
      EscapeCountdown
    }
  }
</script>

