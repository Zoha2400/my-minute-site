<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


</script>


<template> 
    <nav class="navbar-menu">
        <RouterLink class="btn clickedNav" to="/">
            <Icon icon="material-symbols:arrow-back" width="23"/>
        </RouterLink>
    </nav>

    <RouterLink class="btn-in" to="/reg">
        <p :class="{'picked': $route.path == '/reg', '': $route.path != '/reg'}">Регистрация</p>
    </RouterLink>
    <RouterLink class="btn-in" to="/login">
        <p :class="{'picked': $route.path == '/login', '': $route.path != '/login'}">Вход</p>
    </RouterLink>


</template>



<style>

@import url('../assets/navbar.scss');

</style>
