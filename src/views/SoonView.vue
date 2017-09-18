<template>
  <div>
    <h1>Katayuno Escape Edition</h1>
    <p>Starting soon...</p>
    <countdown date="September 30, 2017 09:30:00"></countdown>
    <p><img class="facilitadores" alt="Biko 2 - Init - 540 - The Mêlée" title="Biko 2 - Init - 540 - The Mêlée" src="../assets/facilitadores.png"></p>
  </div>
</template>

<script>
  import Countdown from '@nylira/vue-countdown'
  export default {
    components: {
      Countdown
    }
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=VT323:400);

  .ny-countdown {
    width: 100%;
    height:100%;
    font-family: 'VT323', serif;
  }

  .ni-kvs {
    display:flex;
  }

  .ni-kv {
    display: flex;
    flex-direction: column;
    margin: 1vw;
    width: 33vw;
  }
  .ni-kv-key {
    color: #006600;
    font-size: 4vw;
    font-family: 'VT323', serif;
    font-weight: 400;
    margin-top: 1vh;
    margin-bottom: 1vh;
    text-align: center;
  }

  .ni-kv-value {
    color: #efefef;
    font-size: 20vw;
    font-weight: 100;
    font-family: 'VT323', serif;
    margin: 1vw;
    text-align: center;
  }

  h1 {
    margin-top: 6vh;
    color: #999;
    font-size: 3vw;
  }
  p {
    color: #999;
    font-size: 2vw;
  }
  a {
    color: #006600;
  }
  h1, p, a {
    font-family: 'VT323', serif;
  }
  .facilitadores {
    width: 20vw;
    min-width: 100px;
    margin-top:4vh;
  }
</style>
