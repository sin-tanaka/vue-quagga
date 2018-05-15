<template>
  <div id="interactive" class="viewport"></div>
</template>

<script>
  import Quagga from 'quagga';

  export default {
    name: "scanner",
    props: {
      onDetected: {
        type: Function,
        required: true
      }
    },
    data: function () {
      return {
        quaggaState: {
          inputStream: {
            type: 'LiveStream',
            constraints: {
              width: {min: 640},
              height: {min: 480},
              facingMode: 'environment',
              aspectRatio: {min: 1, max: 2}
            }
          },
          locator: {
            patchSize: 'medium',
            halfSample: true
          },
          numOfWorkers: 2,
          frequency: 10,
          decoder: {
            readers: [{
              format: 'code_128_reader',
              config: {}
            }]
          },
          locate: true
        },
      }
    },
    mounted: function () {
      Quagga.init(this.quaggaState, function (err) {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      });
      Quagga.onDetected(this.onDetected);
    }
  }
</script>

<style scoped>

</style>
