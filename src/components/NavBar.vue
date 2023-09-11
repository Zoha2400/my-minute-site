<script setup lang="ts">
    import icon from '../img/icon.svg';
    import NavMenu from './NavMenu.vue';
</script>

<template>
    <nav class="navbar-wrap">
        <div class="navbar">
            <img :src="icon">

            <NavMenu/>
        </div>
    </nav>
</template>


<style>

@import url('../assets/navbar.scss');

</style>