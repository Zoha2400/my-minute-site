<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import MyContent from './components/MyContent.vue'
</script>

<template>
   
  <div class="all-wrapper">

    <NavBar/>
    <MyContent/>

  </div>
 
</template>

<style lang="scss">

@import url('./assets/style.scss');

</style>
