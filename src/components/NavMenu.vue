<script setup lang="ts">
import { ref } from 'vue';

// const btns = ref(document.querySelectorAll('.btn'));


// export default (await import('vue')).defineComponent({
//   data(){
//     return {
//       count: 0
//     }
//   },
//   methods: {
//     minus(){
//       this.count--
//     },
//     plus(){
//       this.count++
//     } 
//   }
// }
// )

let count = ref(0);

const plus = () => count.value++
const minus = () => count.value--

</script>

<template>
    <nav class="navbar-menu">
        <div class="btn" @click="plus()">ГЛАВНЫЙ</div>
        <div class="btn" @click="plus()">О НАС</div>
        <div class="btn" @click="minus()">ПРОЕКТЫ</div>
        <div class="btn" @click="minus()">КОНТАКТЫ</div>

        <p>{{ count }}</p>
    </nav>
</template>



<style>

@import url('../assets/navbar.scss');

</style>