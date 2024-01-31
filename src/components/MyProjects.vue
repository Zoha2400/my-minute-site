<template>
  <CardProjVue />

  <div class="container-wrap my-projects-wrp cont-top-smth" id="up">
    <div class="buttons-recenltly container-wrap">
      <div class="btns-res-wrap container-proj">
        <div class="btn-rec" @click="() => redirect('/')">Главная</div>
        <div class="btn-rec rec-choosen" @click="() => redirect('/projects/1')">ПРОЕКТЫ</div>
        <div class="btn-rec" @click="() => redirect('/account')">Избранные</div>
      </div>
    </div>
    <div class="container-proj my-projects">
      <!-- Проверка, что dataAll.value существует, перед обращением к нему -->
      <div
        v-for="proj in localData"
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

    <div :class="{ 'pagination ': paginationState, 'pagination nonePagination': !paginationState }">
      <button class="bef pagbs pag-btn" @click="prebef">{{ '<' }}</button>
      <RouterLink
        v-for="index in Math.ceil(data.length / 24)"
        :to="'/projects/' + index"
        :key="index"
        :class="{ 'pag-btn active-pag': id == index, 'pag-btn': id != index }"
        >{{ index }}</RouterLink
      >
      <button class="af pagbs pag-btn" @click="aftbef">{{ '>' }}</button>
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
import store from '@/store/index'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import photo from '../img/photo.svg'

const router = useRouter()

// if(router.currentRoute)

if (router.currentRoute.value.path == '/projects/') {
  router.push('/projects/1')
}

const numPage = 24

const id = ref(null)

const data = ref(store.state.data)
const paginationState = ref(false)
const localData = ref([])

function prebef() {
  if (+id.value > 1) {
    router.push(`/projects/${+id.value - 1}`)
  }
}

function aftbef() {
  if (+id.value < Math.ceil(data.value.length / numPage)) {
    router.push(`/projects/${+id.value + 1}`)
  }
}

const loadData = () => {
  id.value = router.currentRoute.value.params.id
  paginationState.value = true

  if (
    !isNaN(+id.value) &&
    data.value.length < numPage * +id.value &&
    data.value.length > numPage * (+id.value - 1)
  ) {
    localData.value = data.value.slice((+id.value - 1) * numPage, data.value.length)
    store.commit('addPagination', localData.value)
  } else if (
    !isNaN(+id.value) &&
    data.value.length >= numPage * +id.value &&
    data.value.length > numPage * (+id.value - 1)
  ) {
    localData.value = data.value.slice((+id.value - 1) * numPage, 8 * +id.value)
    store.commit('addPagination', localData.value)
  } else if (data.value.length < numPage) {
    paginationState.value = false
  }

  // Ваша логика загрузки данных
}

loadData()

watch(
  () => store.state.data,
  () => {
    data.value = store.state.data
    if (
      store.state.type.style !== '' ||
      store.state.type.plot !== '' ||
      store.state.type.size !== '' ||
      store.state.type.acres !== '' ||
      store.state.type.num !== ''
    ) {
      localData.value = store.getters.filteredData
      paginationState.value = false
    } else {
      loadData()
    }
  }
)

watch(
  () => store.state.type.style,
  () => {
    if (
      store.state.type.style !== '' ||
      store.state.type.plot !== '' ||
      store.state.type.size !== '' ||
      store.state.type.acres !== '' ||
      store.state.type.num !== ''
    ) {
      localData.value = store.getters.filteredData
    }
  },
  { deep: true }
)

watch(
  () => store.state.choosenState,
  () => {
    loadData()
  }
)

watch(
  () => router.currentRoute.value.params.id,
  (newPage, oldPage) => {
    // Вызываем метод для загрузки данных
    loadData()
  }
)

// Метод для загрузки данных

// } else if (!isNaN(+id) && data.length - 8 < +id * 8) {
//   router.resolve(`/projects/${Math.floor(data.length / 8)}`)
// }
function redirect(attr: string) {
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
    router.push('/reg')
  }
}
</script>
<style>
@import url('../assets/choosen.scss');
@import url('../assets/myproj.scss');
</style>
