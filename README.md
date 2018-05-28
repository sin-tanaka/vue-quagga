# vue-quaggajs

[quaggajs](https://serratus.github.io/quaggaJS/) 's wrapper for Vue.js

## Installtion

### npm

``` bash
npm i vue-quagga
```

```vue
<template>
  <scanner></scanner>
</template>

<script>
import Scanner from 'vue-quagga';

export default {
  //...
  components: {
    'scanner': Scanner,
  },
  // ...
}
</script>

