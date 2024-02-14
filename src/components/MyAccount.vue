<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import CardProjVue from './CardProj.vue'
import MyFooter from './MyFooter.vue'
import { useRouter } from 'vue-router'
import store from '@/store'
import { ref } from 'vue'
import photo from '../img/photo.svg'

const router = useRouter()

if (store.state.logged) {
  router.push('/reg')
}

function redirect(attr: string, index: number) {
  store.commit('setProjState', index)
  router.push(attr)
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
    router.push('/register')
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

<template>
  <CardProjVue />

  <div class="container-wrap my-projects-wrp cont-top-smth" id="up">
    <div class="buttons-recenltly container-wrap">
      <div class="btns-res-wrap container-proj">
        <div class="btn-rec" @click="() => redirect('/', 0)">Главная</div>
        <div class="btn-rec rec-choosen" @click="() => redirect('/account', 0)">ИЗБРАННЫЕ</div>
        <div class="btn-rec" @click="() => redirect('/projects/1', 0)">Проекты</div>
      </div>
    </div>
    <div class="container-proj my-projects">
      <!-- Проверка, что dataAll.value существует, перед обращением к нему -->
      <div
        v-for="proj in $store.state.cartData"
        :key="proj.pk"
        class="proj"
        @click="$store.commit('showInfo', proj)"
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

  <MyFooter />
</template>

<style>
@import url('../assets/choosen.scss');
@import url('../assets/myproj.scss');

@import url('../assets/account.scss');
</style>
