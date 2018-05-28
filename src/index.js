import QuaggaScanner from "@src/Scanner"

export const VERSION = '1.0.0';

export function install (Vue) {
  Vue.component('scanner', QuaggaScanner)
}
export const Scanner = QuaggaScanner;
