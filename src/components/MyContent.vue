<script setup lang="ts">
import MyDragonation from './MyDragonation.vue';
import WhoCanUseVue from './WhoCanUse.vue';
import AdpNav from './AdpNav.vue';


</script>

<template>

    <div :class="{'content-wrap': $store.state.info, 'content-wrap noScroll': !$store.state.info}">

        <div class="content">
            <AdpNav/>

            <router-view></router-view>
        </div>

    </div>

</template>


<style>

@import url('../assets/content.scss');

</style>