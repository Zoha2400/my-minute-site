<template>
  <div class="reg-wrap">
    <div class="reg">
      <h2>Войти</h2>
      <form @submit.prevent="loginTest">
        <input type="email" v-model="formData.username" placeholder="admin@gmail.com" />
        <input type="password" v-model="formData.password" placeholder="password" />
        <button type="submit">Войти</button>
      </form>
      <p>Еще нет аккаунта? <RouterLink to="/reg">Создайте его!</RouterLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store'

const router = useRouter()

const formData = ref({
  username: '',
  password: ''
})

let isValid: boolean
const isFormValid = () => {
  if (formData.value.username.includes('@') && formData.value.password.length >= 8) {
    isValid = true
    console.log(isValid)
  } else {
    isValid = false
    console.log(isValid)
  }
}


const loginTest = () => {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    window.location.href = '/';
    console.log('ok')

    const expires = new Date()
    const encodedValue = encodeURIComponent(formData.value.username)
    expires.setTime(expires.getTime() + 150 * 24 * 60 * 60 * 1000)
    document.cookie = `account=${encodedValue};expires=${expires.toUTCString()};path=/`
    return 'ok'
  }
  console.log('not ok')
  return 'no'
}

const login = () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData.value)
  }

  fetch('https://1111-188-113-196-253.ngrok-free.app/api/login/', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log('Успешно отправлено:', data)
    })
    .catch((error) => {
      console.error('Ошибка при отправке:', error)
    })
}
</script>

<style scoped>
@import url('../assets/reg.scss');
</style>
