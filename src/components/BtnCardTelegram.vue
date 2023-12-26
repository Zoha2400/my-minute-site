<template>
  <form class="btn-card" @submit.prevent="sendTelegram">
    <input type="text" required v-model="messageForm.name" class="rgt" placeholder="Имя" />
    <input
      type="text"
      required
      v-model="messageForm.number"
      class="lft"
      placeholder="Номер Телефона"
    />
    <p>{{ $store.state.choosen.cost }} СУМ</p>
    <button class="inpButton">Оставить Заявку</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import store from '@/store/index'

const props = defineProps({
  pk: String
})

const messageForm = ref({
  name: '',
  number: ''
})

async function sendTelegram() {
  const projectCode: string = store.state.choosen.pk
  const formData = new FormData()

  formData.append('name', messageForm.value.name)
  formData.append('number', messageForm.value.number)
  formData.append('pk', projectCode)

  messageForm.value = {
    name: '',
    number: ''
  }

  const requestOptions = {
    method: 'POST',
    body: formData
  }

  await fetch('http://localhost:3000/api/telegram/offer', requestOptions)
    .then((res) => res.json())
    .then((resData) => {
      console.log('Успешно отправлено', resData)
    })
    .catch((error) => {
      console.error('Ошибка', error)
    })
}
</script>

<style scoped></style>
