<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import CardProjVue from './CardProj.vue'
import MyFooter from './MyFooter.vue'
import { ref } from 'vue'

let iconatr = ref(false)
let icon = ref('mdi:heart-outline')

const change = () => {
  iconatr.value = !iconatr.value
  iconatr.value ? (icon.value = 'mdi:heart') : (icon.value = 'mdi:heart-outline')
}
</script>

<template>
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
            <Icon :icon="icon" width="25" color="#F9B60A" @click.stop="change" />
          </p>
        </div>
      </div>
    </div>

    <div class="choosen-attr" @click="$store.commit('clearAll')">
      <div class="closeAttr">Сброс фильтра</div>

      <p
        :class="{ 'p-attr noneattr': !chsn, 'p-attr': chsn }"
        v-for="chsn in $store.state.type"
        :key="chsn"
      >
        {{ chsn }}
      </p>
    </div>
  </div>

  <MyFooter />
</template>

<style>
@import url('../assets/choosen.scss');
@import url('../assets/myproj.scss');
</style>
