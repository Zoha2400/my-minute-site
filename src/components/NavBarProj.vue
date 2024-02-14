<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import store from '@/store'

import MyStyles from './MyStylesProj.vue'
import MyType from './MyTypeProj.vue'
import MyOptions from './MyOptionsProj.vue'

const selectedAreaM = ref(0)
const selectedAreaA = ref(0)
</script>

<template>
  <nav class="navbar-menu">
    <RouterLink class="btn clickedNav" to="/" @click="$store.commit('closeInfoBack')">
      <Icon icon="material-symbols:arrow-back" width="23" /> НАЗАД
    </RouterLink>
  </nav>
  <!-- 
  <div class="choosen-attr style-lable area" @click="$store.commit('clearAll')">
    <div class="closeAttr">Сброс фильтра</div>
    <p
      :class="{ 'p-attr noneattr': !chsn, 'p-attr': chsn }"
      v-for="chsn in $store.state.type"
      :key="chsn"
    >
      {{ chsn }}
    </p>
  </div> -->

  <div class="style-lable area">
    <p>Номер проекта</p>

    <div class="area-items">
      <input
        type="number"
        id="mt5"
        placeholder="1000"
        v-model="$store.state.type.num"
        @change="$store.commit('setNum', $store.state.type.num)"
      />
      <!-- <button @click="$store.commit('setNum', $store.state.type.num)">OK</button> -->
    </div>
  </div>

  <MyStyles />

  <MyType />

  <div class="style-lable area">
    <p>Участок</p>

    <div class="area-items">
      <input type="number" id="mt1" placeholder="0" v-model="selectedAreaM" />
      x
      <input type="number" id="mt2" placeholder="1000" v-model="selectedAreaA" />
      <button @click="$store.commit('setArea', selectedAreaM + 'x' + selectedAreaA)">OK</button>
    </div>
  </div>

  <MyOptions />
</template>

<style>
@import url('../assets/choosen.scss');
@import url('../assets/navbar.scss');
</style>
