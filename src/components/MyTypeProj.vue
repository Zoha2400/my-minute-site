<template>

<div class="style-lable">
    <p>Участок</p>
    <label v-for="tp in type" :key="tp.id" class="radio-label"  @click="$store.commit('setPlot', tp.data)">
      <input
        type="radio"
        v-model="selectedType"
        :value="tp.id"
        class="radio-input"
        name="type"
      />
      <span class="radio-text">{{ tp.name }}</span>
    </label>
  </div>

    
</template>
    
<script setup lang="ts">
    
    import { ref } from 'vue';
    
    const selectedType = ref(null);


    const type = [
    { id: 1, name: "Передняя стройка", data: "Передняя стройка" },
    { id: 2, name: "Задняя стройка", data: "Задняя стройка" },
    { id: 3, name: "Отмена", data: ""}
    ];

    
</script>