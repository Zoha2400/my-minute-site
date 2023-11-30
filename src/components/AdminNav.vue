<template>
  <div class="addinp">
    <form class="adpinp-form" action="" method="post">
      <input type="text" placeholder="Площадь" />
      <input type="text" placeholder="Размер" />
      <input type="text" placeholder="Соток" />
      <input type="text" placeholder="Стиль" />
      <input type="text" placeholder="Цена" />
      <textarea name="info" id="" cols="30" rows="10" placeholder="Информация"></textarea>
      <input type="file" class="file" name="mainphoto" id="mainphoto" />
      <input type="file" class="file" name="photos" id="photos" multiple accept="image/*" />
      <button type="submit">Добавить</button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('../assets/admin.scss');
</style>
