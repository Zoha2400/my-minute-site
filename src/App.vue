<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import MyContent from './components/MyContent.vue'

;(function () {
  ;(function c(d, w, m, i) {
    window.supportAPIMethod = m
    var s = d.createElement('script')
    s.id = 'supportScript'
    var id = 'e65c550aabffe5f7f1c3e954b96a07ba'
    s.src =
      (!i
        ? 'https://lcab.talk-me.ru/support/support.js'
        : 'https://static.site-chat.me/support/support.int.js') +
      '?h=' +
      id
    s.onerror = i
      ? undefined
      : function () {
          c(d, w, m, true)
        }
    w[m] = w[m]
      ? w[m]
      : function () {
          ;(w[m].q = w[m].q ? w[m].q : []).push(arguments)
        }
    ;(d.head ? d.head : d.body).appendChild(s)
  })(document, window, 'TalkMe')
})()
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
