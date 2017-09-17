<template>
  <div class="counter">
    <div class="timer">
      <div class="block">
        <p class="digit">{{ hours }}</p>
        <p class="text">Hours</p>
      </div>
      <div class="block">
        <p class="digit">{{ minutes }}</p>
        <p class="text">Minutes</p>
      </div>
      <div class="block">
        <p class="digit">{{ seconds }}</p>
        <p class="text">Seconds</p>
      </div>
    </div>
    <div class="timer-controls">
      <button class="playButton" id="playButton" v-on:click="play" v-if="!endTime">START</button>
      <button class="pauseButton" id="pauseButton" v-on:click="pause" v-if="!paused && endTime">PAUSE</button>
      <button class="resumeButton" id="resumeButton" v-on:click="resume" v-if="paused && endTime">RESUME</button>
      <button class="stopButton" id="stopButton" v-on:click="stop" v-if="paused && endTime">STOP</button>
    </div>
  </div>
</template>
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=VT323:400);

  .counter {
    background: #000;
    width: 100%;
    height: 100%;
    font-family: 'VT323', serif;
  }

  .timer {
    display: flex;
  }

  .block {
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 33%;
  }

  .text {
    color: #006600;
    font-size: 64px;
    font-family: 'VT323', serif;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .digit {
    color: #efefef;
    font-size: 320px;
    font-weight: 100;
    font-family: 'VT323', serif;
    margin: 10px;
    text-align: center;
  }

  .timer-controls {
    padding-top: 100px;
  }
  .timer-controls button {
    font-family: 'VT323', serif;
    padding: 10px;
    font-size: 20px;
  }
</style>


<script>
  import { addHours, addSecs, diffHours, diffMinutes, diffSeconds } from '@/lib/dates'

  const asCounterWithPadding = (number, padding) => number < 10 ? (padding + number) : (number + '')

  export default {
    name: 'escape-countdown',
    computed: {
      hours: function () {
        return this.endTime ? asCounterWithPadding(diffHours(this.endTime, this.now), '') : '-'
      },
      minutes: function () {
        return this.endTime ? asCounterWithPadding(diffMinutes(this.endTime, this.now), '0') : '-'
      },
      seconds: function () {
        return this.endTime ? asCounterWithPadding(diffSeconds(this.endTime, this.now), '0') : '-'
      }
    },
    data () {
      return {
        endTime: null,
        now: new Date(),
        paused: true
      }
    },
    methods: {
      play () {
        this.endTime = addHours(3, new Date())
        this.now = new Date()
        this.paused = false
        this.startTimer()
      },
      pause () {
        this.clearTimer()
        this.paused = true
      },
      resume () {
        const remainingSecs = parseInt(this.hours) * 60 * 60 + parseInt(this.minutes) * 60 + parseInt(this.seconds)
        this.endTime = addSecs(remainingSecs, new Date())
        this.now = new Date()
        this.paused = false
        this.startTimer()
      },
      stop () {
        this.endTime = null
        this.paused = true
      },
      clearTimer () {
        if (this.intervalTimer) {
          window.clearInterval(this.intervalTimer)
        }
      },
      startTimer () {
        this.clearTimer()
        this.intervalTimer = window.setInterval(() => {
          this.now = new Date()
        }, 500)
      }
    }
  }
</script>
