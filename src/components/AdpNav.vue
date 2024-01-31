<script setup lang="ts">
import iconMini from '../img/iconMini.svg'
import { Icon } from '@iconify/vue'

import AdpMenu from './AdpMenu.vue'
</script>

<template>
  <div class="adp-menu-wrap noneAdp">
    <div class="adp-menu">
      <div class="imageAdp">
        <RouterLink to="/">
          <img :src="iconMini" />
        </RouterLink>
      </div>
      <div class="buttonApdMenu" @click="$store.commit('showAdpMenu')">
        <Icon class="adpIcon" icon="entypo:menu" color="black" width="50" />
      </div>
    </div>

    <AdpMenu />
  </div>
</template>

<style>
@import url('../assets/navbar.scss');
</style>
