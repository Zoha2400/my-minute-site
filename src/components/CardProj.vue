<script lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import BtnCardTelegram from './BtnCardTelegram.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    BtnCardTelegram
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }
}
</script>

<template>
  <div
    :class="{ 'info-wrap hidden': $store.state.info, 'info-wrap': !$store.state.info }"
    @click.self="$store.commit('showInfo', {})"
  >
    <div class="inf-scr">
      <div class="closebtn" @click="$store.commit('closeInfo')">X</div>
      <div class="info">
        <div class="textin-info">
          <div class="imgages">
            <!-- <img :src="$store.state.choosen.main_photo" alt="" class="main"> -->
            <swiper
              class="swiper"
              :modules="modules"
              :slides-per-view="1"
              :space-between="50"
              navigation
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              v-if="!Array.isArray($store.state.choosen.images?.photos)"
            >
              <swiper-slide class="swpObj">
                <img src="#" alt="" class="main" />
              </swiper-slide>
            </swiper>

            <swiper
              class="swiper"
              :modules="modules"
              :slides-per-view="1"
              :space-between="50"
              navigation
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              v-else-if="$store.state.choosen.images?.photos.length === 1"
            >
              <swiper-slide class="swpObj" v-for="i in $store.state.choosen.images" :key="i">
                <img :src="i" alt="" class="main" />
              </swiper-slide>
            </swiper>

            <swiper
              class="swiper"
              :modules="modules"
              :slides-per-view="1"
              :space-between="50"
              navigation
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              v-else
            >
              <swiper-slide
                class="swpObj"
                v-for="i in $store.state.choosen.images?.photos"
                :key="i"
              >
                <img :src="i" alt="" class="main" />
              </swiper-slide>
            </swiper>
          </div>

          <div class="cont-info">
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
              <!-- {{ $store.state.choosen.data }} -->
              <p v-html="$store.state.choosen.data"></p>
            </div>

            <BtnCardTelegram :pk="$store.state.choosen.pk" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('../assets/myproj.scss');
</style>
