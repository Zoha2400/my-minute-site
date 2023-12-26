<script setup lang="ts">
import MyDragonation from './MyDragonation.vue'
import WhoCanUseVue from './WhoCanUse.vue'
import AdpNav from './AdpNav.vue'
import RegPageVue from './RegPage.vue'
</script>

<template>
  <div
    :class="{ 'content-wrap': $store.state.info, 'content-wrap noScroll': !$store.state.info }"
    id="scrollCont"
  >
    <div class="content">
      <AdpNav />

      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@import url('../assets/content.scss');
</style>
