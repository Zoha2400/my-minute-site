<template>
  <div class="reg-wrap">
    <div class="reg">
      <h2>Регистрация</h2>
      <form @submit.prevent="register">
        <input
          type="email"
          @change="isFormValid"
          v-model="formData.email"
          placeholder="admin@gmail.com"
        />
        <input
          type="password"
          @change="isFormValid"
          v-model="formData.password"
          placeholder="password"
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p>Уже есть аккаунт? <RouterLink to="/login">Войти!</RouterLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store/index'

const formData = ref({
  email: '',
  password: ''
})

let isValid: boolean
const isFormValid = () => {
  if (formData.value.email.includes('@') && formData.value.password.length >= 8) {
    isValid = true
    console.log(isValid)
  } else {
    isValid = false
    console.log(isValid)
  }
}

const router = useRouter()

const registerTest = () => {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    router.push('/login')
    console.log('ok')
    return 'ok'
  }
  console.log('not ok')
  return 'no'
}

const register = () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData.value)
  }

  fetch(`${store.state.path}/api/registrate`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      router.push('/login')
      console.log('Успешно отправлено:', data)
      return data
    })
    .catch((error) => {
      console.error('Ошибка при отправке:', error)
    })
}
</script>

<style scoped>
@import url('../assets/reg.scss');
</style>
