<template>
  <div>
    <div class="under-door">
      <p>¡Enhorabuena!</p>
      <p>Has demostrado ser un buen agente.<br/>
      Abre ahora el sobre 2.<br/><br/>
      ¡Date prisa, el tiempo se acaba!</p>
    </div>
    <transition name="slide-fade">
      <div v-if="!openDoor" class="keypad">
        <input v-bind:class="{ 'danger': wrongNumber, 'success': rightNumber }" size="8" readonly id="keypadValue" v-model="combination">
        <img id="keypadImage" src="../assets/keypad.png" v-on:click="keypadClick">
      </div>
    </transition>
  </div>
</template>
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=VT323:400);

  .under-door {
    background: #fff;
    position: absolute;
    top:0px;
    z-index:2;
    width:100%;
    height:100%;
  }
  .under-door p {
    padding-top: 10vh;
    font-size: 6vw;
  }
  .keypad {
    z-index:10;
    position:absolute;
    width:100%;
    height:85vh;
    background: #000;
    font-family: 'VT323', serif;
    color: #efefef;
    padding-top: 15vh;
    top:0px;
  }

  .keypad input {

    display: block;
    font-family: 'VT323', serif;
    font-size: 10vh;
    text-align: center;
    margin: auto;
    background-color: #999999;
    text-shadow: 0 0 0 gray;
  }

  .keypad input:focus {
    outline: none;
    text-shadow: 0 0 0 gray;
  }

  .keypad input.danger {
    background-color: #990000;
  }

  .keypad input.success {
    background-color: #009900;
  }

  .keypad img {
    display: block;
    height: 65vh;
    margin: auto;

  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
  }
  .slide-fade-leave-active {
    transition: all 7s;
  }
  .slide-fade-leave-to {
    transform: translateY(-100%);
  }

</style>


<script>
  import bcrypt from 'bcryptjs'

  const getValueBasedOnRowAndCol = (rowcol) => {
    switch (rowcol.join('')) {
      case '11': return '1'
      case '12': return '2'
      case '13': return '3'
      case '21': return '4'
      case '22': return '5'
      case '23': return '6'
      case '31': return '7'
      case '32': return '8'
      case '33': return '9'
      case '41': return 'E'
      case '42': return '0'
      case '43': return 'E'
    }
    return ''
  }

  const getRow = (ypos) => {
    if (ypos < 13) return 0
    if (ypos < 34) return 1
    if (ypos < 50) return 2
    if (ypos < 70) return 3
    if (ypos < 84) return 4
    return 0
  }

  const getCol = (xpos) => {
    if (xpos < 20) return 0
    if (xpos < 40) return 1
    if (xpos < 60) return 2
    if (xpos < 80) return 3
    return 0
  }

  const getKeypadRowAndCol = (posx, posy, coordinates) => {
    const imageXClicked = posx - coordinates.left
    const relativeXClickedPosition = Math.round((imageXClicked / coordinates.width) * 100)
    const imageYClicked = posy - coordinates.top
    const relativeYClickedPosition = Math.round((imageYClicked / coordinates.height) * 100)
    return [getRow(relativeYClickedPosition), getCol(relativeXClickedPosition)]
  }

  export default {
    name: 'escape-keypad',
    data () {
      return {
        combination: '',
        wrongNumber: false,
        rightNumber: false,
        openDoor: false
      }
    },
    methods: {
      keypadClick (x) {
        const coordinates = x.target.getBoundingClientRect()
        const rowcol = getKeypadRowAndCol(x.pageX, x.pageY, coordinates)
        const value = getValueBasedOnRowAndCol(rowcol)
        if (value === 'E') {
          this.combination = ''
        } else if (this.combination.length < 4) {
          this.combination = this.combination + value + ''
        }
        this.checkCombination()
      },
      checkCombination () {
        if (this.isOk(this.combination)) {
          this.rightNumber = true
          this.wrongNumber = false
          const self = this
          window.setTimeout(function () {
            console.log('setting open door')
            self.openDoor = true
            console.log(this)
          }, 1000)
        } else if ((this.combination.length === 4)) {
          this.wrongNumber = true
          this.rightNumber = false
          this.openDoor = false
        } else {
          this.wrongNumber = false
          this.rightNumber = false
          this.openDoor = false
        }
      },
      isOk (value) {
        if (this.combination.length < 4) return false
        return bcrypt.compareSync(value, '$2a$08$GnZouCpA1PtQ6MzfqkjnseGijHbkk7iCBvTiH3lCKXcte6N/xEh7O')
      }
    }
  }
</script>
