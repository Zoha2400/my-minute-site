<script setup lang="ts"></script>

<template>
  <div class="draganation" id="up">
    <img src="../img/photo.svg" />
    <div class="draganation-absolute">
      <p>ВЫБРАВ ГОТОВЫЙ ПРОЕКТ ДЛЯ ДОМА</p>
      <p class="marked">УЖЕ СЕГОДНЯ</p>
      <p>ВЫ СЭКОНОМИТЕ 30 ДНЕЙ</p>

      <RouterLink class="projDrag" to="/projects/1">
        <p>ПРОЕКТЫ</p>
      </RouterLink>
    </div>
  </div>
</template>

<style>
@import url('../assets/content.scss');
</style>
