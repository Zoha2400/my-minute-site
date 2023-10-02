<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


const selectedStyle = ref(null);
const selectedType = ref(null);
const selectedAreaM = ref(null);
const selectedAreaA = ref(null);
const selectedHund = ref(null);

let selectedArea = "";

function sendArea(){
    selectedArea = `${selectedAreaM.value} x ${selectedAreaA.value}`;
    console.log(selectedArea);
}




const styles = [
  { id: 1, name: "Классика" },
  { id: 2, name: "Неоклассика" },
  { id: 3, name: "Модерн" },
  { id: 4, name: "Хай-тек" },
  { id: 5, name: "Райт" },
];

const type = [
  { id: 1, name: "Передняя стройка" },
  { id: 2, name: "Задняя стройка" }
];

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


<template> 

    <nav class="navbar-menu">
        <RouterLink class="btn clickedNav" to="/">
            <Icon icon="material-symbols:arrow-back" width="23"/>
        </RouterLink>
    </nav>

    <div class="style-lable">
    <p>Стиль</p>
    <label v-for="style in styles" :key="style.id" class="radio-label">
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

    <div class="style-lable">
    <p>Участок</p>
    <label v-for="tp in type" :key="tp.id" class="radio-label">
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

  <div class="style-lable area">
    <p>Участок</p>

    <div class="area-items">
        <input type="number" id="mt1" placeholder="0" v-model="selectedAreaM">
        x
        <input type="number" id="mt2" placeholder="1000" v-model="selectedAreaA">
        <button @click="sendArea">OK</button>
    </div>
    
  </div>

  <div class="style-lable area">
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
                <span class="radio-text">{{ option.id }}</span>
            </label>
            

    </div>

    <div class="inp-choos">
        <input type="number" id="mt1" placeholder="0" v-model="selectedAreaM">
        <button>OK</button>
    </div>


  </div>
</template>



<style>

@import url('../assets/navbar.scss');

</style>