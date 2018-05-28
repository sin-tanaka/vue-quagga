# vue-quaggajs

[quaggajs](https://serratus.github.io/quaggaJS/) 's wrapper for Vue.js

## Installtion

### npm

``` bash
npm i vue-quaggajs
```

```vue
<template>
  <scanner></scanner>
</template>

<script>
import Scanner from 'vue-quaggajs';

export default {
  //...
  components: {
    Scanner,
  },
  // ...
}
</script>
```


### cdn

```html
<body>
<div id="app">
  <scanner></scanner>
</div>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/sin-tanaka/vue-quagga/dist/vue-quagga.js"></script>
<script>
  new Vue({
    el: '#app',
    data: function() {
      return {}
    }
  })
  Vue.use(Scanner);
</script>
</body>
```
