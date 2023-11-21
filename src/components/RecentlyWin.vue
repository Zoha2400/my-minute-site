<template>

    <div class="buttons-recenltly container-wrap">
        <div class="btns-res-wrap container-proj">
            <div class="btn-rec">Новые</div>
            <div class="btn-rec rec-choosen">ПОПУЛЯРНЫE</div>
            <div class="btn-rec">Избранные</div>
        </div>
    </div>

  <div class="container-wrap my-projects-wrp" id="up">
    <div class="container-proj my-projects recently-app">
      <!-- Проверка, что dataAll.value существует, перед обращением к нему -->
      <div
        v-for="proj in $store.getters.filteredData"
        :key="proj.pk"
        class="proj"
      >
        <div class="img-proj">
          <img :src="proj.main_photo" alt="" />
        </div>
        <div class="text-proj">
          <p class="name">ПРОЕКТ № {{ proj.pk }}</p>
          <p class="area">{{ proj.acres }} соток</p>
          <p class="cost">
            <span>{{ proj.cost }} UZS</span>
            <Icon icon="mdi:heart-outline" width="25" color="#F9B60A" />
            <Icon icon="mdi:heart" width="25" classname="Heart" color="#F9B60A" />
          </p>
        </div>
      </div>
      <div
        v-for="proj in $store.getters.filteredData"
        :key="proj.pk"
        class="proj"
      >
        <div class="img-proj">
          <img :src="proj.main_photo" alt="" />
        </div>
        <div class="text-proj">
          <p class="name">ПРОЕКТ № {{ proj.pk }}</p>
          <p class="area">{{ proj.acres }} соток</p>
          <p class="cost">
            <span>{{ proj.cost }} UZS</span>
            <Icon icon="mdi:heart-outline" width="25" color="#F9B60A" />
            <Icon icon="mdi:heart" width="25" classname="Heart" color="#F9B60A" />
          </p>
        </div>
      </div>
      
      <div
        v-for="proj in $store.getters.filteredData"
        :key="proj.pk"
        class="proj"
      >
        <div class="img-proj">
          <img :src="proj.main_photo" alt="" />
        </div>
        <div class="text-proj">
          <p class="name">ПРОЕКТ № {{ proj.pk }}</p>
          <p class="area">{{ proj.acres }} соток</p>
          <p class="cost">
            <span>{{ proj.cost }} UZS</span>
            <Icon icon="mdi:heart-outline" width="25" color="#F9B60A" />
            <Icon icon="mdi:heart" width="25" classname="Heart" color="#F9B60A" />
          </p>
        </div>
      </div>
      
      <div
        v-for="proj in $store.getters.filteredData"
        :key="proj.pk"
        class="proj"
      >
        <div class="img-proj">
          <img :src="proj.main_photo" alt="" />
        </div>
        <div class="text-proj">
          <p class="name">ПРОЕКТ № {{ proj.pk }}</p>
          <p class="area">{{ proj.acres }} соток</p>
          <p class="cost">
            <span>{{ proj.cost }} UZS</span>
            <Icon icon="mdi:heart-outline" width="25" color="#F9B60A" />
            <Icon icon="mdi:heart" width="25" classname="Heart" color="#F9B60A" />
          </p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

@import url('../assets/account.scss');

</style>