import 'webrtc-adapter';
import Scanner from './Scanner.vue';

export default {
  install: function(Vue, options) {
    Vue.component('v-quagga', Scanner);
  },
};
