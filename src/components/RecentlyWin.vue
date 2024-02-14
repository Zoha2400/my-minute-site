<template>
  <div class="buttons-recenltly container-wrap cont-top-smth">
    <div class="btns-res-wrap container-proj">
      <div class="light-design">
        <div class="lgitem"></div>
      </div>
      <div class="btn-rec" @click="() => redirect('/projects/1', 1)">Новые</div>
      <div class="btn-rec rec-choosen" @click="() => redirect('/projects/1', 0)">ПОПУЛЯРНЫE</div>
      <div class="btn-rec" @click="() => redirect('/account', 0)">Избранные</div>
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
          <p class="area">Лайков: {{ proj.rank }}</p>

          <div class="icons">
            <span class="cst">{{ proj.cost }} UZS</span>
            <div class="icn-wrp">
              <p class="cost" v-if="proj.rank_state">
                <Icon
                  icon="mdi:heart"
                  width="30"
                  color="#F9B60A"
                  @click.stop="rankup(proj.pk, proj.rank_state)"
                />
              </p>
              <p class="cost" v-else>
                <Icon
                  icon="mdi:heart-outline"
                  width="30"
                  color="#F9B60A"
                  @click.stop="rankup(proj.pk, proj.rank_state)"
                />
              </p>

              <p class="cost" v-if="proj.like_state">
                <Icon
                  icon="material-symbols:bookmark"
                  width="30"
                  color="#F9B60A"
                  @click.stop="change(proj.pk, proj.like_state)"
                />
              </p>
              <p class="cost" v-else>
                <Icon
                  icon="material-symbols:bookmark-outline"
                  width="30"
                  color="#F9B60A"
                  @click.stop="change(proj.pk, proj.like_state)"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="buttons-recenltly container-wrap cont-top-smth nonmarg">
    <div class="btns-res-wrap container-proj">
      <div class="btn-rec rec-choosen" @click="() => redirect('/projects/1', 0)">ВСЕ ПРОЕКТЫ</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import store from '@/store/index'
import { useRouter } from 'vue-router'
import photo from '../img/photo.svg'

const router = useRouter()

function redirect(attr: string, index: number) {
  store.commit('setProjState', index)
  router.push(attr)
}

function cardRedicert(proj: Object) {
  router.push('/projects/1')
  store.commit('showInfo', proj)
}

const change = async (id: number, state: boolean) => {
  const token = await store.state.token // Если token - Promise

  if (token != '') {
    const response = await fetch(`${store.state.path}/api/likes`, {
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

const rankup = async (id: number, state: boolean) => {
  const token = await store.state.token // Если token - Promise

  if (token != '') {
    const response = await fetch(`${store.state.path}/api/rank`, {
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
      await store.dispatch('fetchData', store.state.project_state)
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
