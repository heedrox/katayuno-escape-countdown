<template>
  <div class="keypad">
    <input type="text" size="4" id="keypadValue" v-model="combination">
    <img src="../assets/keypad.png">
  </div>
</template>
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=VT323:400);

  .keypad {
    background: #000;
    font-family: 'VT323', serif;
    color: #efefef;
    padding-top:20%;
  }
  .keypad input {
    font-family: 'VT323', serif;
    font-size: 80px;
    text-align:center;

  }
  .keypad img {
    max-width:80%;
    margin:auto;
  }

</style>


<script>
  export default {
    name: 'escape-keypad',
    data () {
      return {
        combination: ''
      }
    }
  }
</script>
