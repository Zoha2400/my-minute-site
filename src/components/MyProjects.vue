<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue/dist/iconify.js';

// Объявите dataAll как реактивную переменную с начальным значением null
const dataAll = ref([]);
const dataEll = ref([]);

const showInfoHook = ref(true);

function showInfo(dataEl: Array){
    showInfoHook.value = !showInfoHook.value;
    dataEll.value = dataEl;
}

onMounted(async () => {
  try {
    const response = await fetch('http://45.153.186.140:3009/api/projects/');
    if (response.ok) {
      const responseData = await response.json();
      // Устанавливайте значение переменной dataAll с помощью .value
      dataAll.value = responseData;
      console.log(dataAll.value);
    } else {
      console.error('Ошибка при загрузке данных');
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
});
</script>

<template>
<!-- :class="{'lc-g-1 checked': !dataChekcer1, 'lc-g-1': dataChekcer1} -->
    <div :class="{'info-wrap hidden': showInfoHook, 'info-wrap': !showInfoHook}" @click.self="showInfo">
        <div class="info">

            <div class="imgages">
              <img :src="dataEll.main_photo" alt="" class="main">
            </div>

            <div class="textin-info">
              <div class="header-info">
                <p>ПРОЕКТ № {{ dataEll.pk }}</p>
              </div>
              <div class="body-info">
                <p>Размер: {{ dataEll.size }}</p>
                <p>Площадь: {{ dataEll.area }}</p>
                <p>Cоток: {{ dataEll.acres }}</p>
                <p>Стиль: {{ dataEll.style }}</p>
              </div>

              <div class="footer-info">
                {{ dataEll.data }}
              </div>
            </div>
        </div>

        <div class="inpButton">
          
        </div>
    </div>

  <div class="container-wrap my-projects-wrp">
    <div class="container-proj my-projects">
      <!-- Проверка, что dataAll.value существует, перед обращением к нему -->
      <div v-for="proj in dataAll" :key="proj.pk" class="proj" @click="showInfo(proj)">
        <div class="img-proj">
            <img :src="proj.main_photo" alt="">
        </div>
        <div class="text-proj">
            <p class="name">
              ПРОЕКТ № {{ proj.pk }}
            </p>
            <p class="area">
                {{ proj.acres }} соток
            </p>
            <p class="cost">
                <span>{{ proj.cost }}</span> UZS
            </p>
        </div>
    </div>

    </div>
  </div>
</template>

<style>

@import url('../assets/myproj.scss');

</style>