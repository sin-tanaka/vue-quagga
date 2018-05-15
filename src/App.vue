<template>
  <div id="app">
    <scanner :onDetected="onDetected"></scanner>
  </div>
</template>

<script>
  import Scanner from './Scanner'

  export default {
    name: 'app',
    components: {
      'scanner': Scanner
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        onDetected: function (result) {
          console.log('onDetected: ', result);
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  a {
    color: #42b983;
  }
</style>
