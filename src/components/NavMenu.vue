<script setup lang="ts">
import { ref } from 'vue';


// // const btns = ref(document.querySelectorAll('.btn'));


// // export default (await import('vue')).defineComponent({
// //   data(){
// //     return {
// //       count: 0
// //     }
// //   },
// //   methods: {
// //     minus(){
// //       this.count--
// //     },
// //     plus(){
// //       this.count++
// //     } 
// //   }
// // }
// // )

// let count = ref(0);

// const plus = () => count.value++
// const minus = () => count.value--

import  NavLinks from './NavLinks.vue';

</script>

<template>
    <nav class="navbar-menu">
        <div class="btn">ГЛАВНЫЙ</div>
        <div class="btn">О НАС</div>

        <RouterLink class="btn" to="/projects"  @click="$store.commit('showAdpMenu')">
            <p>ПРОЕКТЫ</p>
        </RouterLink>
        <div class="btn">КОНТАКТЫ</div>

        <!-- <p>{{ count }}</p> -->
    </nav>

    <NavLinks/>
    
</template>



<style>

@import url('../assets/navbar.scss');

</style>