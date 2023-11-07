<template>
    <div :class="{'account' : $store.getters.getIsLogged, 'account hdn' : !$store.getters.getIsLogged}">

        Curva
        
    </div>
</template>

<script setup lang="ts">

</script>

<style>

@import url('../assets/account.scss');

</style>