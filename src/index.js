import 'webrtc-adapter'
import QuaggaScanner from "./Scanner.vue"

export const VERSION = '1.0.0';

export const Scanner = QuaggaScanner;
// Install the components
export function install (Vue) {
  Vue.component('quagga-scanner', QuaggaScanner);
}

// Expose the components
export { QuaggaScanner }

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
