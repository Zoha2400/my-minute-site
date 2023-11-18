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
                <p>{{ $store.state.cookie }}</p>
            </div>
        </div>
        <a class="btn quit" href="/" @click="deleteCookie">
            <p>ВЫЙТИ</p>
        </a>
    </nav>

</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import store from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter();

if(store.state.cookie === ''){
    router.push('/reg');
}

function deleteCookie() {
    document.cookie = "account=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;"
}
</script>

<style>
@import url('../assets/account.scss');
</style>