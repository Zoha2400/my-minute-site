<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import CardProjVue from './CardProj.vue'
import MyFooter from './MyFooter.vue'
import { useRouter } from 'vue-router'
import store from '@/store'

const router = useRouter()

if (!store.state.logged) {
  router.push('/reg')
}
</script>

<template>
  <h1 class="cart-account">Корзина</h1>

  <CardProjVue />

  <div class="container-wrap my-projects-wrp" id="up">
    <div class="container-proj my-projects">
      <!-- Проверка, что dataAll.value существует, перед обращением к нему -->
      <div
        v-for="proj in $store.getters.filteredData"
        :key="proj.pk"
        class="proj"
        @click="$store.commit('showInfo', proj)"
      >
        <div class="img-proj">
          <img :src="proj.main_photo" alt="" />
        </div>
        <div class="text-proj">
          <p class="name">ПРОЕКТ № {{ proj.pk }}</p>
          <p class="area">{{ proj.acres }} соток</p>
          <p class="cost">
            <span>{{ proj.cost }} UZS</span>
            <Icon icon="mdi:heart-outline" width="25" color="#F9B60A" />
            <Icon icon="mdi:heart" width="25" classname="Heart" color="#F9B60A" />
          </p>
        </div>
      </div>
    </div>
  </div>

  <MyFooter />
</template>

<style>
@import url('../assets/choosen.scss');
@import url('../assets/myproj.scss');

@import url('../assets/account.scss');
</style>
