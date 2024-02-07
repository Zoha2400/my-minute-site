<script setup lang="ts">
import NavLinks from './NavLinks.vue'
</script>

<template>
  <nav class="navbar-menu">
    <a href="#main" class="btn">
      <div>ГЛАВНЫЙ</div>
    </a>
    <a href="#aboutUs" class="btn">
      <div>О НАС</div>
    </a>

    <RouterLink class="btn" @click="$store.commit('setProjState', 0)" to="/projects/1">
      <p>ПРОЕКТЫ</p>
    </RouterLink>
    <a href="#contacts" class="btn">
      <div>КОНТАКТЫ</div>
    </a>

    <RouterLink class="btn" to="/account">
      <p>АККАУНТ</p>
    </RouterLink>

    <!-- <p>{{ count }}</p> -->
  </nav>

  <NavLinks />
</template>

<style>
@import url('../assets/navbar.scss');
</style>
