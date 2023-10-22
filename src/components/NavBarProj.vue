<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

import MyStyles from './MyStylesProj.vue';
import MyType from './MyTypeProj.vue';
import MyOptions from './MyOptionsProj.vue';


const selectedAreaM = ref(0);
const selectedAreaA = ref(0);
const selectedArces = ref(0);
const selectedHund = ref(null);



</script>


<template> 




    <nav class="navbar-menu">
        <RouterLink class="btn clickedNav" to="/">
            <Icon icon="material-symbols:arrow-back" width="23"/>
        </RouterLink>
    </nav>


    <MyStyles/>

    {{  $store.state.type.num   }}

    <MyType/>
    
    <div class="style-lable area">
        <p>Номер проекта</p>

        <div class="area-items">
            <input type="number" id="mt2" placeholder="1000" v-model="$store.state.type.num">
            <button @click="$store.commit('setArea', selectedAreaM+'x'+selectedAreaA )">OK</button>
            <button class="back" @click="$store.commit('backArea')">Отм</button>
        </div>

      </div>

   
  <div class="style-lable area">
    <p>Участок</p>

    <div class="area-items">
        <input type="number" id="mt1" placeholder="0" v-model="selectedAreaM">
        x
        <input type="number" id="mt2" placeholder="1000" v-model="selectedAreaA">
        <button @click="$store.commit('setArea', selectedAreaM+'x'+selectedAreaA )">OK</button>
        <button class="back" @click="$store.commit('backArea')">Отм</button>
    </div>
    
  </div>

  <MyOptions/>


</template>



<style>

@import url('../assets/navbar.scss');

</style>