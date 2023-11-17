<template>
  <div class="reg-wrap">
    <div class="reg">
      <h2>Регистрация</h2>
      <form @submit.prevent="register">
        <input type="email" v-model="formData.username" placeholder="admin@gmail.com" />
        <input type="password" v-model="formData.password" placeholder="12345678" />
        <button type="submit" @submit="e$store.commit('setLogged', { value: 'done', days: 30 })">
          Зарегистрироваться
        </button>
      </form>
      <p>Уже есть аккаунт? <RouterLink to="/login">Зайти!</RouterLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const formData = ref({
  username: '',
  password: ''
})

const router = useRouter()
const register = () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData.value)
  }

  fetch('https://99d6-188-113-210-13.ngrok-free.app/api/register/', requestOptions)
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
