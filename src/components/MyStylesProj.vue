<template>
  <div class="style-lable">
    <p>Стиль</p>
    <label
      v-for="style in styles"
      :key="style.id"
      class="radio-label"
      @click="$store.commit('setStyle', style.data)"
    >
      <input
        type="radio"
        v-model="selectedStyle"
        :value="style.id"
        class="radio-input"
        name="style"
      />
      <span class="radio-text">{{ style.name }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedStyle = ref(null)

const styles = [
  { id: 1, name: 'Классика', data: 'Классика' },
  { id: 2, name: 'Неоклассика', data: 'Неоклассика' },
  { id: 3, name: 'Модерн', data: 'Модерн' },
  { id: 4, name: 'Хай-тек', data: 'Хай-тек' },
  { id: 5, name: 'Райт', data: 'Райт' }
]
</script>
