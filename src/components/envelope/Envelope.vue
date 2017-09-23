<template>
    <div class="envelope">
      <img src="./envelope-closed.png">
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
    top:-90px;
  }

  @media screen and (min-width:700px) {
    .envelope .envelope-number-holder {
      font-size: 60px;
    }
  }

  @media screen and (max-width:700px) {
    .envelope .envelope-number-holder {
      font-size: 10vw;
      top: -14vw;
    }
  }
</style>
<script>
  export default {
    name: 'envelope',
    props: [ 'number' ]
  }
</script>
