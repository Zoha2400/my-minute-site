<template>
    <nav class="navbar-menu">
        <RouterLink class="btn clickedNav" to="/">
            <Icon icon="material-symbols:arrow-back" width="23"/>
        </RouterLink>

        <div class="btn account-viev">
            <div class="avatar">
                <Icon class="icon-avatar" icon="material-symbols:person" width="60"/>
            </div>
            <div class="info">
                <h5>Ваш Аккаунт</h5>
                <p>admin@gmail.com</p>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<style>
@import url('../assets/account.scss');
</style>