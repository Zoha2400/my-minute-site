<template>

<div :class="{'adpMenu nonHide': !$store.state.adpMenu,'adpMenu hideAdp': $store.state.adpMenu}">
    <router-view name="navbar"></router-view>
</div>

</template>

<script setup lang="ts">

import NavMenu from './NavMenu.vue'

</script>

<style>

@import url('../assets/navbar.scss');

</style>