<!-- eslint-disable vue/no-textarea-mustache -->
<template>
  <div class="admin">
    <div class="tables">
      <div class="table-disc">
        <TablePartVue />
      </div>
    </div>

    <div v-if="$store.state.infoAdmin" class="wind">
      <div class="imges">
        <div class="imgages">
          <img :src="data.main_photo" alt="" class="main" />
        </div>
        <!-- <div class="photossss" v-for="photo in data.photos.photos" :key="photo">
          <div class="dd" :key="photo"></div>
          <img :src="photo" alt="" class="imagePhotos" />
        </div> -->
      </div>

      <div class="cont-info">
        <div class="header-info">
          <p>ПРОЕКТ № {{ data.pk }}</p>
        </div>
        <div class="body-info">
          <p>Размер: <input type="text" v-model="data.size" /></p>
          <button class="inpButton" @click="changeSize">Обновить</button>

          <p>Площадь: <input type="text" v-model="data.area" /></p>
          <button class="inpButton" @click="changeArea">Обновить</button>
          <p>Cоток: <input type="text" v-model="data.acres" /></p>
          <button class="inpButton" @click="changeAcres">Обновить</button>

          <p>Стиль: <input type="text" @focus="showSuggestionsHandler" v-model="data.style" /></p>
          <ul v-if="showSuggestions">
            <li
              v-for="suggestion in suggestions"
              :key="suggestion"
              @click="selectSuggestionHandler(suggestion)"
            >
              {{ suggestion }}
            </li>
          </ul>
          <button class="inpButton" @click="changeStyle">Обновить</button>

          <p>Цена: <input type="text" v-model="data.cost" /></p>
          <button class="inpButton" @click="changeCost">Обновить</button>
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
          <button class="inpButton" @click="changeData">Обновить</button>
        </div>
        <input
          type="file"
          @change="handleFileChange"
          class="file"
          name="mainphoto"
          id="mainphoto"
        />
        <button class="inpButton" @click="changeMainPhoto">Обновить</button>

        <input
          type="file"
          @change="handleFileChangeOther"
          class="file"
          name="photos"
          id="photos"
          multiple
          accept="image/*"
        />
        <button class="inpButton" @click="changePhotos">Обновить</button>

        <button @click="$store.commit('closeInfoAdmin')">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TablePartVue from './TablePart.vue'
import example from '../img/photo.svg'
import { ref, watch } from 'vue'
import store from '@/store/index'

const data = ref({
  pk: null,
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
        pk: store.state.choosenAdmin.pk,
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

const suggestions = ['Классика', 'Неоклассика', 'Модерн', 'Хай-тек', 'Райт']
const showSuggestions = ref(false)

const showSuggestionsHandler = () => {
  showSuggestions.value = true
}

const selectSuggestionHandler = (suggestion) => {
  data.value.style = suggestion
  showSuggestions.value = false
}

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
function changeArea() {
  const formData = new FormData()

  formData.append('area', data.value.area)
  formData.append('pk', store.state.choosenAdmin.pk)

  const requestOptions = {
    method: 'POST',
    body: formData
  }

  fetch('http://localhost:3000/api/change/area', requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
      store.dispatch('fetchData')
      console.log('Успешно отправлено:', responseData)
    })
    .catch((error) => {
      console.error('Ошибка при отправке:', error)
    })
}

function changeSize() {
  const formData = new FormData()

  formData.append('size', data.value.size)
  formData.append('pk', store.state.choosenAdmin.pk)

  const requestOptions = {
    method: 'POST',
    body: formData
  }

  fetch('http://localhost:3000/api/change/size', requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
      store.dispatch('fetchData')

      console.log('Успешно отправлено:', responseData)
    })
    .catch((error) => {
      console.error('Ошибка при отправке:', error)
    })
}

function changeAcres() {
  const formData = new FormData()

  formData.append('acres', data.value.acres)
  formData.append('pk', store.state.choosenAdmin.pk)

  const requestOptions = {
    method: 'POST',
    body: formData
  }

  fetch('http://localhost:3000/api/change/acres', requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
      store.dispatch('fetchData')

      console.log('Успешно отправлено:', responseData)
    })
    .catch((error) => {
      console.error('Ошибка при отправке:', error)
    })
}

function changeStyle() {
  const formData = new FormData()

  formData.append('style', data.value.style)
  formData.append('pk', store.state.choosenAdmin.pk)

  const requestOptions = {
    method: 'POST',
    body: formData
  }

  fetch('http://localhost:3000/api/change/style', requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
      store.dispatch('fetchData')

      console.log('Успешно отправлено:', responseData)
    })
    .catch((error) => {
      console.error('Ошибка при отправке:', error)
    })
}

function changeCost() {
  const formData = new FormData()

  formData.append('cost', data.value.cost)
  formData.append('pk', store.state.choosenAdmin.pk)

  const requestOptions = {
    method: 'POST',
    body: formData
  }

  fetch('http://localhost:3000/api/change/cost', requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
      store.dispatch('fetchData')

      console.log('Успешно отправлено:', responseData)
    })
    .catch((error) => {
      console.error('Ошибка при отправке:', error)
    })
}

function changeData() {
  const formData = new FormData()

  formData.append('data', data.value.data)
  formData.append('pk', store.state.choosenAdmin.pk)

  const requestOptions = {
    method: 'POST',
    body: formData
  }

  fetch('http://localhost:3000/api/change/data', requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
      store.dispatch('fetchData')

      console.log('Успешно отправлено:', responseData)
    })
    .catch((error) => {
      console.error('Ошибка при отправке:', error)
    })
}

function changeMainPhoto() {
  const formData = new FormData()

  // Добавляем файлы
  if (typeof data.value.main_photo != 'string') {
    formData.append('main_photo', data.value.main_photo)
    formData.append('pk', store.state.choosenAdmin.pk)
    const requestOptions = {
      method: 'POST',
      body: formData
    }

    fetch('http://localhost:3000/api/change/main_photo', requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        store.dispatch('fetchData')

        console.log('Успешно отправлено:', responseData)
      })
      .catch((error) => {
        console.error('Ошибка при отправке:', error)
      })
  } else {
    console.log('Выберите фото!')
  }
}

function changePhotos() {
  const formData = new FormData()

  // Добавляем файлы
  if (data.value.photos.length > 0) {
    if (typeof data.value.photos[0] != 'string') {
      data.value.photos.forEach((el) => {
        formData.append('photos', el)
      })

      formData.append('pk', store.state.choosenAdmin.pk)

      const requestOptions = {
        method: 'POST',
        body: formData
      }

      fetch('http://localhost:3000/api/change/photos', requestOptions)
        .then((response) => response.json())
        .then((responseData) => {
          store.dispatch('fetchData')

          console.log('Успешно отправлено:', responseData)
        })
        .catch((error) => {
          console.error('Ошибка при отправке:', error)
        })
    }
  }
}
</script>

<style>
@import url('../assets/admin.scss');
</style>
