<template>

    <div class="adp-menu">
            <div class="imageAdp">
                <img :src="iconMini"/>
            </div>
            <div class="buttonApdMenu">
                <Icon class="adpIcon" icon="grommet-icons:menu" color="white" width="40"/>
            </div>
    </div>

</template>

<script setup lang="ts">

import { iconMini } from '../img/iconMini.svg';
import { Icon } from '@iconify/vue';

</script>


<style>

@import url('../assets/navbar.scss');

</style>