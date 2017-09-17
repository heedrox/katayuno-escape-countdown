<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import EscapeCountdown from './components/Countdown.vue'

export default {
  components: { EscapeCountdown }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
