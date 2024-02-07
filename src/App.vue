<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import MyContent from './components/MyContent.vue'
// ;(function (d, w, c) {
//   w.ChatraID = 'yi4PcJr6CBTMKYiQc'
//   var s = d.createElement('script')
//   w[c] =
//     w[c] ||
//     function () {
//       ;(w[c].q = w[c].q || []).push(arguments)
//     }
//   s.async = true
//   s.src = 'https://call.chatra.io/chatra.js'
//   if (d.head) d.head.appendChild(s)
// })(document, window, 'Chatra')
</script>

<template>
  <div class="all-wrapper">
    <NavBar />
    <MyContent />
  </div>
</template>
<style lang="scss">
@import url('./assets/style.scss');
</style>
