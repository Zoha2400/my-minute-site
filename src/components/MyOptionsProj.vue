<template>

<div class="style-lable area optTbl">
    <p>Соток</p>

    <div class="btn-cont">

            <label v-for="option in options" :key="option.id" class="btn-label">
                <input
                    type="radio"
                    v-model="selectedHund"
                    :value="option.id"
                    class="radio-input"
                    name="options"
                />
                <span :class="{'radio-text active': $store.state.arcesChsn, 'radio-text': !$store.state.arcesChsn}" @click="$store.commit('setAcres', option.id, checkerInfo )">{{ option.id }}</span>
            </label>
            

    </div>

    <div class="inp-choos">
        <input type="number" id="mt1" placeholder="0" v-model="selectedArces">
        <button  @click="$store.commit('setAcres', selectedArces)">OK</button>
    </div>


</div>
    
</template>
    
<script setup lang="ts">
    
    import { ref } from 'vue';
    
    const selectedArces = ref(0);
    const selectedHund = ref(null);
    const checkerInfo = true;

    
    const options = [
      { id: 1, name: "Вариант 1" },
      { id: 2, name: "Вариант 2" },
      { id: 3, name: "Вариант 3" },
      { id: 4, name: "Вариант 4" },
      { id: 5, name: "Вариант 5" },
      { id: 6, name: "Вариант 6" },
      { id: 7, name: "Вариант 7" },
      { id: 8, name: "Вариант 8" },
      { id: 9, name: "Вариант 9" },
      { id: 10, name: "Вариант 10" },
    ];

    
</script>