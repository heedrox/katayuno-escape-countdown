<template>
  <div class="briefings-view">
    <div class="briefings-row">
      <envelope content-src="/static/envelope-content/P/index.html" number="P"></envelope>
      <envelope content-src="/static/envelope-content/1/index.html" number="1"></envelope>
    </div>
    <div class="briefings-row">
      <envelope content-src="/static/envelope-content/2/index.html" number="2"></envelope>
      <envelope content-src="/static/envelope-content/3/index.html" number="3"></envelope>
    </div>
  </div>
</template>
<style>
  @import url(https://fonts.googleapis.com/css?family=VT323:400);

  .briefings-view {
    display:flex;
    flex-direction: column;
    margin: 10vh auto auto;
    align-items: center;
    justify-content: center;

  }

  .briefings-row {
    display:flex;
    flex-direction: row;
  }

  .briefings-row .envelope {
    padding: 20px;
  }

</style>
<script>
  import Envelope from '@/components/envelope/Envelope.vue'

  export default {
    components: {
      Envelope
    }
  }
</script>
