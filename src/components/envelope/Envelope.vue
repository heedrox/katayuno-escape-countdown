<template>
    <div class="envelope" v-on:click="triggerState" >
      <img v-if="state === 'closed'" src="./envelope-closed.png">
      <img v-if="state === 'open'" src="./envelope-open.png">
      <div class="envelope-number-holder">{{number}}</div>
    </div>
</template>
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=VT323:400);

  .envelope img {
    max-width:30vw;
  }

  .envelope .envelope-number-holder {
    font-family: 'VT323', serif;
    position: relative;
    color:#000;
    font-size: 5vw;
    top:-80px;
  }

  @media screen and (min-width:700px) {
    .envelope .envelope-number-holder {
      font-size: 60px;
    }
  }

  @media screen and (max-width:700px) {
    .envelope .envelope-number-holder {
      font-size: 8vw;
      top: -11.5vw;
    }
  }
</style>
<script>
  export default {
    name: 'envelope',
    props: [ 'number' ],
    data () {
      return {
        state: 'closed'
      }
    },
    methods: {
      triggerState () {
        this.state = this.state === 'open' ? 'closed' : 'open'
      }
    }
  }
</script>
