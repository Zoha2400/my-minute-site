<script setup lang="ts">
import { ref } from 'vue';

const btns = ref(document.querySelectorAll('.btn'));

function colored(i: number) {
  btns.value[i].classList.add('clickedNav');
}

</script>

<template>
    <nav class="navbar-menu">
        <div class="btn" @click="colored(0)">ГЛАВНЫЙ</div>
        <div class="btn" @click="colored(1)">О НАС</div>
        <div class="btn" @click="colored(2)">ПРОЕКТЫ</div>
        <div class="btn" @click="colored(3)">КОНТАКТЫ</div>
    </nav>
</template>



<style>

@import url('../assets/navbar.scss');

</style>