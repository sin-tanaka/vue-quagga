import Vue from 'vue';

import App from './App.vue';
import VueQuagga from '../../src';

Vue.use(VueQuagga);

new Vue({
  render: h => h(App),
}).$mount('#app');
