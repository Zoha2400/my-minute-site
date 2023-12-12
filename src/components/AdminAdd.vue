<!-- eslint-disable vue/no-textarea-mustache -->
<template>
  <div class="admin">
    <div class="tables">
      <div class="table-disc">
        <TablePartVue />
      </div>
    </div>

    <div v-if="$store.state.infoAdmin" class="wind">
      <div class="imgages">
        <img :src="example" alt="" class="main" />
      </div>

      <div class="cont-info">
        <div class="header-info">
          <p>ПРОЕКТ № {{ $store.state.choosenAdmin.pk }}</p>
        </div>
        <div class="body-info">
          <p>Размер: <input type="text" v-model="data.size" /></p>
          <p>Площадь: <input type="text" v-model="data.area" /></p>
          <p>Cоток: <input type="text" v-model="data.acres" /></p>
          <p>Стиль: <input type="text" v-model="data.style" /></p>
          <p>Цена: <input type="text" v-model="data.cost" /></p>
        </div>

        <div class="footer-info">
          <textarea
            name="info"
            id=""
            cols="30"
            rows="10"
            placeholder="Информация"
            v-model="data.data"
          ></textarea>
        </div>
        <input
          type="file"
          @change="handleFileChange"
          class="file"
          name="mainphoto"
          id="mainphoto"
        />
        <input
          type="file"
          @change="handleFileChangeOther"
          class="file"
          name="photos"
          id="photos"
          multiple
          accept="image/*"
        />

        <button class="inpButton">Обновить</button>
        <button @click="$store.commit('closeInfoAdmin')">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TablePartVue from './TablePart.vue'
import example from '../img/photo.svg'
import { ref, watch } from 'vue'
import store from '@/store'

const data = ref({
  area: '',
  size: '',
  acres: '',
  style: '',
  cost: '',
  data: '',
  main_photo: null,
  photos: []
})

// Используем watch, чтобы отслеживать изменения в store.state.infoAdmin
watch(
  () => store.state.infoAdmin,
  (newValue) => {
    if (newValue) {
      data.value = {
        area: store.state.choosenAdmin.area,
        size: store.state.choosenAdmin.size,
        acres: store.state.choosenAdmin.acres,
        style: store.state.choosenAdmin.style,
        cost: store.state.choosenAdmin.cost,
        data: store.state.choosenAdmin.data,
        main_photo: store.state.choosenAdmin.main_photo,
        photos: store.state.choosenAdmin.images
      }
    }
  }
)
console.log(data.value)

function handleFileChange(event: { target: any }) {
  const fileInp = event.target
  if (fileInp.files.length > 0) {
    data.value.main_photo = fileInp.files[0]
    console.log(data.value.main_photo)
  }
}

function handleFileChangeOther(event: { target: any }) {
  const fileInp = event.target

  if (fileInp.files.length > 0 && fileInp.files.length < 8) {
    data.value.photos = [...fileInp.files]
    data.value.photos.forEach((el) => {
      console.log(el)
    })
  }
}

function add() {
  const formData = new FormData()

  // Добавляем файлы
  if (data.value.main_photo) {
    formData.append('main_photo', data.value.main_photo)
  }

  if (data.value.photos.length > 0) {
    data.value.photos.forEach((el) => {
      formData.append('photos', el)
    })
  }

  formData.append('area', data.value.area)
  formData.append('size', data.value.size)
  formData.append('acres', data.value.acres)
  formData.append('style', data.value.style)
  formData.append('cost', data.value.cost)
  formData.append('data', data.value.data)

  const requestOptions = {
    method: 'POST',
    body: formData
  }

  fetch('http://localhost:3000/api/change', requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
      console.log('Успешно отправлено:', responseData)

      data.value = {
        area: '',
        size: '',
        acres: '',
        style: '',
        cost: '',
        data: '',
        main_photo: null,
        photos: []
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке:', error)
    })
}
</script>

<style>
@import url('../assets/admin.scss');
</style>
