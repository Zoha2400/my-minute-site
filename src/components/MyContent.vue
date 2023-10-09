<script setup lang="ts">
import MyDragonation from './MyDragonation.vue';
import WhoCanUseVue from './WhoCanUse.vue';


</script>

<template>

    <div :class="{'content-wrap': $store.state.info, 'content-wrap noScroll': !$store.state.info}">

        <div class="content">

            <router-view></router-view>
        </div>

    </div>

</template>


<style>

@import url('../assets/content.scss');

</style>