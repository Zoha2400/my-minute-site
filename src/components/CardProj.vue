<script setup lang="ts"></script>

<template>

    <div :class="{'info-wrap hidden': $store.state.info, 'info-wrap': !$store.state.info}" @click.self="$store.commit('showInfo', {})">
        <div class="info">

            <div class="imgages">
              <img :src="$store.state.choosen.main_photo" alt="" class="main">
            </div>

            <div class="textin-info">
              <div class="header-info">
                <p>ПРОЕКТ № {{ $store.state.choosen.pk }}</p>
              </div>
              <div class="body-info">
                <p>Размер: {{ $store.state.choosen.size }}</p>
                <p>Площадь: {{ $store.state.choosen.area }}</p>
                <p>Cоток: {{ $store.state.choosen.acres }}</p>
                <p>Стиль: {{ $store.state.choosen.style }}</p>
              </div>

              <div class="footer-info">
                {{ $store.state.choosen.data }}
              </div>
            </div>
        </div>

        <div class="inpButton">
          
        </div>
    </div>

</template>