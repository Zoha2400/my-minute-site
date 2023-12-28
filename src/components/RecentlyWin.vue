<template>
  <div class="buttons-recenltly container-wrap cont-top-smth">
    <div class="btns-res-wrap container-proj">
      <div class="btn-rec" @click="() => redirect('/projects')">Новые</div>
      <div class="btn-rec rec-choosen" @click="() => redirect('/projects')">ПОПУЛЯРНЫE</div>
      <div class="btn-rec" @click="() => redirect('/account')">Избранные</div>
    </div>
  </div>

  <div class="container-wrap my-projects-wrp" id="up" @click="redirect">
    <div class="container-proj my-projects recently-app">
      <!-- Проверка, что dataAll.value существует, перед обращением к нему -->
      <div
        v-for="proj in $store.getters.getTopEight"
        :key="proj.pk"
        class="proj"
        @click="cardRedicert(proj)"
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
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import store from '@/store'
import { useRouter } from 'vue-router'

const router = useRouter()

function redirect(attr: string) {
  router.push(attr)
}

function cardRedicert(proj: Object) {
  router.push('/projects')
  store.commit('showInfo', proj)
}

const change = async (id: number, state: boolean) => {
  const token = await store.state.token // Если token - Promise

  if (token != '') {
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
  } else {
    router.push('/reg')
  }
}
</script>

<style scoped>
@import url('../assets/account.scss');
</style>
