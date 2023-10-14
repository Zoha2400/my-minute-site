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

            <a href="#main" class="btn">
                <div>
                    ГЛАВНЫЙ 
                </div>
            </a>
            <a href="#aboutUs" class="btn">
                <div>
                    О НАС
                </div>
            </a>

        <RouterLink class="btn" to="/projects">
            <p>ПРОЕКТЫ</p>
        </RouterLink>
            <a href="#contacts" class="btn">
                <div >
                    КОНТАКТЫ
                </div>
            </a>

        <!-- <p>{{ count }}</p> -->
    </nav>

    <NavLinks/>
    
</template>



<style>

@import url('../assets/navbar.scss');

</style>