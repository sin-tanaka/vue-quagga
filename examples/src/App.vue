<template>
  <div>
    <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerType="'ean_reader'"></v-quagga>
  </div>
</template>
<script>
  // import VueQuagga from '../../src/Scanner.vue';

  export default {
    name: 'VueBarcodeTest',
    data () {
      return {
        readerSize: {
          width: 640,
          height: 480
        },
        detecteds: []
      }
    },
    // components: {
    //   VueQuagga
    // },
    methods: {
      logIt (data) {
        console.log('detected', data)
      }

    }
  }
</script>
