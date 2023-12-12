<template>
  <div
    class="table-column"
    v-for="proj in $store.state.data"
    :key="proj.pk"
    @click="$store.commit('showInfoAdmin', proj)"
  >
    <img class="main_photo" :src="proj.main_photo" />
    <div class="part">
      <span>id</span>
      <p class="id">{{ proj.pk }}</p>
    </div>
    <div class="part">
      <span>Площадь</span>
      <p class="area">{{ proj.area }}</p>
    </div>
    <div class="part">
      <span>Размер</span>
      <p class="size">{{ proj.size }}</p>
    </div>
    <div class="part">
      <span>Сотки</span>
      <p class="acres">{{ proj.acres }}</p>
    </div>
    <div class="part">
      <span>Стиль</span>
      <p class="style">{{ proj.style }}</p>
    </div>
    <div class="part">
      <span>Цена</span>
      <p class="cost">{{ proj.cost }}</p>
    </div>
    <div class="part dt">
      <span>Информация</span>
      <p class="data">
        {{ proj.data }}
      </p>
    </div>
    <div class="part">
      <span>Лайки</span>
      <p class="likes">{{ proj.likes }}</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('../assets/admin.scss');
</style>
