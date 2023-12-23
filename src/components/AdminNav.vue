<template>
  <div class="addinp">
    <form class="adpinp-form" @submit.prevent="add">
      <input v-model="data.area" type="number" placeholder="Площадь" />
      <input v-model="data.size" type="text" placeholder="Размер" />
      <input v-model="data.acres" type="number" placeholder="Соток" />
      <input v-model="data.style" @focus="showSuggestionsHandler" type="text" placeholder="Стиль" />
      <ul v-if="showSuggestions">
        <li
          v-for="suggestion in suggestions"
          :key="suggestion"
          @click="selectSuggestionHandler(suggestion)"
        >
          {{ suggestion }}
        </li>
      </ul>
      <input v-model="data.cost" type="number" placeholder="Цена" />
      <textarea
        v-model="data.data"
        name="info"
        id=""
        cols="30"
        rows="10"
        placeholder="Информация"
        @change="chekcer"
      ></textarea>
      <input type="file" @change="handleFileChange" class="file" name="mainphoto" id="mainphoto" />
      <input
        type="file"
        @change="handleFileChangeOther"
        class="file"
        name="photos"
        id="photos"
        multiple
        accept="image/*"
      />
      <button type="submit">Добавить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import store from '@/store'
import { useRouter } from 'vue-router'

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

function chekcer() {
  console.log(data.value.data)
}

const suggestions = ['Классика', 'Неоклассика', 'Модерн', 'Хай-тек', 'Райт']
const showSuggestions = ref(false)

const showSuggestionsHandler = () => {
  showSuggestions.value = true
}

const selectSuggestionHandler = (suggestion) => {
  data.value.style = suggestion
  showSuggestions.value = false
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

  fetch('http://localhost:3000/api/add', requestOptions)
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

const router = useRouter()

if (store.state.token !== 'a004fc46-6236-4cea-9394-16f03037a7be') {
  router.push('/')
}
</script>

<style scoped>
@import url('../assets/admin.scss');
</style>
