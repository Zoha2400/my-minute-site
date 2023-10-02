<script setup lang="ts">
    import icon from '../img/icon.svg';
    import  NavLinks from './NavLinks.vue';
</script>

<template>
    <nav class="navbar-wrap">
        <div class="navbar">
            <img :src="icon">

            <router-view name="navbar"></router-view>
        </div>
    </nav>
</template>


<style>

@import url('../assets/navbar.scss');

</style>