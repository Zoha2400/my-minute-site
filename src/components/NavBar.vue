<script setup lang="ts">
import icon from '../img/icon.svg'
</script>

<template>
  <nav class="navbar-wrap">
    <div class="navbar">
      <RouterLink to="/">
        <img :src="icon" />
      </RouterLink>

      <router-view name="navbar"></router-view>
    </div>
  </nav>
</template>

<style>
@import url('../assets/navbar.scss');
</style>
