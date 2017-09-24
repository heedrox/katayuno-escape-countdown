<template>
  <div class="envelope" v-on:click="triggerState">
    <img v-if="state === 'closed'" src="./envelope-closed.png">
    <img v-if="state === 'open'" src="./envelope-open.png">
    <div class="envelope-number-holder">{{number}}</div>
    <modal class="envelope-modal" :title="modal.title" v-model="modal.visible" :bg-click="true" transition="bounce"
           :only-body="true" :verify="false" :content-style="modal.contentStyle" :body-style="modal.bodyStyle" :modal-id="modal.id">
      <div v-html="modal.text"></div>
    </modal>
  </div>
</template>
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=VT323:400);

  .envelope img {
    max-width: 30vw;
  }

  .envelope .envelope-modal {
    position: absolute;
    top: 25vh;
    left: 0px;
  }

  .envelope .envelope-number-holder {
    font-family: 'VT323', serif;
    position: relative;
    color: #000;
    font-size: 5vw;
    top: -80px;
  }

  @media screen and (min-width: 700px) {
    .envelope .envelope-number-holder {
      font-size: 60px;
    }
  }

  @media screen and (max-width: 700px) {
    .envelope .envelope-number-holder {
      font-size: 8vw;
      top: -11.5vw;
    }
  }
</style>
<script>
  import Modal from 'vue2-flexible-modal'

  export default {
    components: {
      Modal
    },
    name: 'envelope',
    props: {
      number: {
        type: String,
        default () {
          return '1'
        }
      },
      contentSrc: {
        type: String,
        default () {
          return ''
        }
      }
    },
    data () {
      return {
        state: 'closed',
        modal: {
          visible: false,
          text: '... loading briefing ...',
          contentStyle: {
            width: '80%',
            marginLeft: '10%',
            top: '10px',
            height: '90vh'
          },
          bodyStyle: {
            maxHeight: '85vh'
          },
          id: Math.floor(Math.random() * 20000)
        }
      }
    },
    methods: {
      triggerState () {
        this.state = this.state === 'open' ? 'closed' : 'open'
        if (this.state === 'open') {
          this.modal.visible = true
          this.$http.get(this.contentSrc).then((response) => {
            this.modal.text = response.body
          })
        }
      }
    }
  }
</script>
