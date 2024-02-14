<template>
  <nav class="navbar-menu">
    <RouterLink class="btn clickedNav" to="/" @click="$store.commit('closeInfoBack')">
      <Icon icon="material-symbols:arrow-back" width="23" />
    </RouterLink>

    <div class="btn account-viev">
      <div class="avatar">
        <Icon class="icon-avatar" icon="material-symbols:person" width="60" />
      </div>
      <div class="info">
        <h5>Ваш Аккаунт</h5>
        <p>{{ $store.state.cookie }}</p>
      </div>
    </div>
    <a class="btn quit" href="/" @click="deleteCookie">
      <p>ВЫЙТИ</p>
    </a>

    <RouterLink
      class="btn admpanel"
      v-if="$store.state.token == 'd58d1047-298f-46da-ae82-93c31cc1339a'"
      to="/api/admin"
      >Админ Панель</RouterLink
    >
  </nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import store from '@/store/index'
import { useRouter } from 'vue-router'

store.state.token !== 'd58d1047-298f-46da-ae82-93c31cc1339a'

const router = useRouter()

if (store.state.cookie === '') {
  router.push('/reg')
}

function deleteCookie() {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;'
  document.cookie = 'account=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;'
}
</script>

<style>
@import url('../assets/account.scss');
</style>
