<script lang="ts">
 // import Swiper core and required modules
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
 
<template>

    <div :class="{'info-wrap hidden': $store.state.info, 'info-wrap': !$store.state.info}" @click.self="$store.commit('showInfo', {})">
        <div class="info">

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
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              >
              <swiper-slide class="swpObj" v-for="i in $store.state.choosen.images" :key="i.id">
              <img :src="i.photo_path" alt="" class="main">
              </swiper-slide>
              </swiper>
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
                <!-- {{ $store.state.choosen.data }} -->
                dsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsa
              </div>
              <div class="btn-card">
                <input type="text" class="rgt" placeholder="Имя"/>
                <input type="text" class="lft" placeholder="Номер Телефона"/>
                <p> {{ $store.state.choosen.cost }} СУМ</p>
                <button class="inpButton">Оставить Заявку</button>
              </div>

            </div>
        </div>

    </div>

</template>

<style>

@import url('../assets/myproj.scss');

</style>