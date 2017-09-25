<template>
  <div>
    <div class="under-door" v-html="textDone">
      <p></p>
    </div>
    <transition name="slide-fade">
      <div v-if="!openDoor" class="keypad">
        <input v-bind:class="{ 'danger': wrongNumber, 'success': rightNumber }" size="8" readonly id="keypadValue" v-model="combination">
        <img id="keypadImage" :src="skin" v-on:click="keypadClick">
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

  const xMinMax = (coords) => [ coords[0], coords[2] ]
  const yMinMax = (coords) => [ coords[1], coords[3] ]

  const getRow = (ypos, minMax) => {
    const minimum = minMax[0]
    const maximum = minMax[1]
    const interval = Math.floor((maximum - minimum) / 4)
    if (ypos < minimum) return 0
    if (ypos < minimum + interval) return 1
    if (ypos < minimum + 2 * interval) return 2
    if (ypos < minimum + 3 * interval) return 3
    if (ypos < minimum + 4 * interval) return 4
    return 0
  }

  const getCol = (xpos, minMax) => {
    const minimum = minMax[0]
    const maximum = minMax[1]
    const interval = Math.floor((maximum - minimum) / 3)

    if (xpos < minimum) return 0
    if (xpos < minimum + interval) return 1
    if (xpos < minimum + 2 * interval) return 2
    if (xpos < minimum + 3 * interval) return 3
    return 0
  }

  const getKeypadRowAndCol = (posx, posy, coordinates, relativeKeyboardCoords) => {
    const imageXClicked = posx - coordinates.left
    const relativeXClickedPosition = Math.round((imageXClicked / coordinates.width) * 100)
    const imageYClicked = posy - coordinates.top
    const relativeYClickedPosition = Math.round((imageYClicked / coordinates.height) * 100)
    return [getRow(relativeYClickedPosition, yMinMax(relativeKeyboardCoords)), getCol(relativeXClickedPosition, xMinMax(relativeKeyboardCoords))]
  }

  export default {
    name: 'escape-keypad',
    props: {
      skin: {
        type: String,
        default () {
          return ''
        }
      },
      relativeKeyboardCoords: {
        type: Array,
        default () {
          return [0, 0, 100, 100]
        }
      },
      textDone: {
        type: String,
        default () {
          return ''
        }
      },
      combinationHash: {
        type: String,
        default () {
          return ''
        }
      },
      numberOfDigits: {
        type: Number,
        default () {
          return 4
        }
      }
    },
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
        const clickCoordinates = x.target.getBoundingClientRect()
        const rowcol = getKeypadRowAndCol(x.pageX, x.pageY, clickCoordinates, this.relativeKeyboardCoords)
        const value = getValueBasedOnRowAndCol(rowcol)
        if (value === 'E') {
          this.combination = ''
        } else if (this.combination.length < this.numberOfDigits) {
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
            self.openDoor = true
          }, 1000)
        } else if ((this.combination.length === this.numberOfDigits)) {
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
        if (this.combination.length < this.numberOfDigits) return false
        return bcrypt.compareSync(value, this.combinationHash)
      }
    }
  }
</script>
