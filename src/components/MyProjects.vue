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
          <p class="cost" v-if="proj.like_state">
            <span>{{ proj.cost }} UZS</span>
            <Icon
              icon="mdi:heart"
              width="25"
              color="#F9B60A"
              @click.stop="change(proj.pk, proj.like_state)"
            />
          </p>
          <p class="cost" v-else>
            <span>{{ proj.cost }} UZS</span>
            <Icon
              icon="mdi:heart-outline"
              width="25"
              color="#F9B60A"
              @click.stop="change(proj.pk, proj.like_state)"
            />
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

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import CardProjVue from './CardProj.vue'
import MyFooter from './MyFooter.vue'
import store from '@/store'

const change = async (id: number, state: boolean) => {
  const token = await store.state.token // Если token - Promise

  const response = await fetch('http://localhost:3000/api/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      state: !state,
      token: token
    })
  })

  if (response.ok) {
    const responseData = await response.json()

    console.log('Успешно отправлено:', responseData)
  } else {
    console.error('Ошибка при загрузке данных')
  }
  try {
    await store.dispatch('fetchData')
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

console.log(store.state.token)
</script>
<style>
@import url('../assets/choosen.scss');
@import url('../assets/myproj.scss');
</style>
