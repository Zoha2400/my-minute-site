<script setup lang="ts">
import { Icon } from '@iconify/vue'
import faqsvg from '../img/faq.svg'
import checked from '../img/checked.svg'
import maps from '../img/maps.svg'
import { ref } from 'vue'
import MyDragonation from './MyDragonation.vue'
import MyFooter from './MyFooter.vue'
import MyProjects from './MyProjects.vue'
import RecentlyWin from './RecentlyWin.vue'
import myBook from '../img/book.svg'
import faqPers from '../img/faqPers.svg'
import car from '../img/car.svg'
import albom from '../img/albom.svg'
import compass from '../img/compas.svg'
import prj from '../img/prj.svg'

import store from '@/store/index'

let datal = ref(
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2998.416743648826!2d69.2149025!3d41.2780337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b863b3aaa6d%3A0xda62a6ffa353cae7!2sART%20DECO%20DESIGN!5e0!3m2!1sru!2s!4v1695546202261!5m2!1sru!2s'
)
let dataChekcer1 = ref(true)

function changeLocateOne() {
  datal.value =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2998.416743648826!2d69.2149025!3d41.2780337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b863b3aaa6d%3A0xda62a6ffa353cae7!2sART%20DECO%20DESIGN!5e0!3m2!1sru!2s!4v1695546202261!5m2!1sru!2s'
  dataChekcer1.value = true
}

function changeLocateTwo() {
  datal.value =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d189.95246291605815!2d71.7825938!3d40.3813863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb835f7834e053%3A0xe9f8402c3e4e1953!2zOVFKTStINDQsINCk0LXRgNCz0LDQvdCw!5e0!3m2!1sru!2s!4v1695555359219!5m2!1sru!2s'
  dataChekcer1.value = false
}

const dataTg = ref({
  name: '',
  number: '',
  message: ''
})

async function sendMessage() {
  const formData = new FormData()

  formData.append('name', dataTg.value.name)
  formData.append('number', dataTg.value.number)
  formData.append('message', dataTg.value.message)

  dataTg.value = {
    name: '',
    number: '',
    message: ''
  }

  const requestOptions = {
    method: 'POST',
    body: formData
  }

  await fetch(`${store.state.path}/api/telegram`, requestOptions)
    .then((res) => res.json())
    .then((resData) => {
      console.log('Успешно отправлено', resData)
    })
    .catch((error) => {
      console.error('Ошибка', error)
    })
}
</script>

<template>
  <MyDragonation />

  <div class="whocanuse" id="main">
    <div class="arrow">
      <a href="#offers">
        <Icon icon="solar:arrow-down-linear" color="white" width="40" class="animate" />
      </a>
    </div>

    <div class="ourOffers" id="offers">
      <p><span>ДЛЯ КОГО ПОДХДИТ</span> НАША УСЛУГА</p>
      <div class="light-design">
        <div class="lgitem"></div>
      </div>
    </div>

    <div class="container-wrap banner-wrap">
      <div class="container banner it-bn shadow-verst">
        <div class="banner-item it">
          <Icon icon="ic:baseline-percent" width="90" />
          <p>Тем, кто хочет сэкономить деньги до 70%</p>
        </div>
        <div class="banner-item it">
          <Icon icon="quill:calendar" width="90" />
          <p>Тем, кто не хочет терять месяц на создание нового проекта</p>
        </div>
        <div class="banner-item it">
          <Icon icon="tabler:checkup-list" width="90" />
          <p>Тем, кто ищет проверенные решения</p>
        </div>
        <div class="banner-item it">
          <Icon icon="game-icons:time-bomb" width="90" />
          <p>Тем, кто ценит свое время и умеет считать деньги</p>
        </div>
      </div>
    </div>

    <div class="ourOffers" id="aboutUs">
      <p><span>НАША КОМПАНИЯ</span> В ЦИФРАХ</p>
    </div>

    <div class="container-wrap ourNums-wrapper banner-wrap">
      <div class="container ourNums banner bn-t2">
        <div class="banner-item t">
          <div class="ticon-wrapper">
            <Icon
              class="ticon"
              icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
              width="70"
            />
          </div>
          <div class="banner-text">
            <p><span>11 лет</span> на рынке</p>
          </div>
        </div>
        <div class="banner-item t">
          <div class="ticon-wrapper">
            <Icon class="ticon" icon="ic:twotone-architecture" width="70" />
          </div>

          <div class="banner-text">
            <p>Архитекторы с <span>19 летним</span> опытом</p>
          </div>
        </div>
        <div class="banner-item t">
          <div class="ticon-wrapper">
            <Icon class="ticon" icon="octicon:project-template-16" width="70" />
          </div>

          <div class="banner-text">
            <p>Более <span>250</span> готовых проектов</p>
          </div>
        </div>
        <div class="banner-item t">
          <div class="ticon-wrapper">
            <Icon class="ticon" icon="mdi:house-outline" width="70" />
          </div>

          <div class="banner-text">
            <p>Более с <span>1500</span> релизованных домов</p>
          </div>
        </div>
      </div>
    </div>

    <RecentlyWin />

    <div class="ourOffers">
      <p>Приобретая готовый проект дома <span>Вы получаете:</span></p>
    </div>

    <div class="container-wrap banner-wrap nonBanner-wrap" id="offers">
      <div class="nonBanner-container container shadow-verst">
        <div class="container banner nonBanner">
          <div class="banner-item tti">
            <div class="tticon">
              <img :src="myBook" />
            </div>
            <p>Книгу “Cоветы по строительству”</p>
          </div>
          <div class="banner-item tti">
            <div class="tticon">
              <img :src="faqPers" />
            </div>
            <p>Онлайн сопровождение Вашего строительства</p>
          </div>
          <div class="banner-item tti">
            <div class="tticon">
              <img :src="car" />
            </div>

            <p>Индивидуальное расположение ворот</p>
          </div>
        </div>
        <div class="container banner nonBanner">
          <div class="banner-item tti">
            <div class="tticon">
              <img :src="albom" />
            </div>
            <p>Альбом чертежей для строительства от 40 до 60 листов</p>
          </div>
          <div class="banner-item tti">
            <div class="tticon">
              <img :src="prj" />
            </div>
            <p>Фирменные подарки от компании</p>
          </div>
          <div class="banner-item tti">
            <div class="tticon">
              <img :src="compass" />
            </div>
            <p>Корректировка проекта под Каабы и направления солнечнего света</p>
          </div>
        </div>
      </div>
    </div>

    <div class="ourOffers faq">
      <div class="light-design">
        <div class="lgitem"></div>
      </div>
      <img :src="faqsvg" />
      <div class="textFaq">
        <p>ЧАСТО</p>
        <p>ЗАДАВАЕМЫЕ</p>
        <p>ВОПРОСЫ</p>
      </div>
      <!-- <p>Приобретая готовый проект дома <span>Вы получаете:</span></p> -->
    </div>

    <div class="faq-banner container-wrap">
      <div class="faq-cont container">
        <div class="faq-side">
          <div class="block-wrap">
            <div class="faq-block right">
              <div class="msg">
                <span>вопрос:</span>
                <p>Можно ли внести корректировки в готовый проект?</p>
              </div>
              <img :src="checked" />
            </div>
          </div>
          <div class="block-wrap">
            <div class="faq-block left">
              <div class="msg">
                <span>ответ:</span>
                <p>Безусловно! Это возможно. Условия обсуждается индивидуально.</p>
              </div>
            </div>
          </div>
          <div class="block-wrap">
            <div class="faq-block right">
              <div class="msg">
                <span>вопрос:</span>
                <p>В каком виде Вы предоставляете проект - в электронном или в печатном виде?</p>
              </div>
              <img :src="checked" />
            </div>
          </div>

          <div class="block-wrap">
            <div class="faq-block left">
              <div class="msg">
                <span>ответ:</span>
                <p>
                  Клиентны получают свой проект в виде альбома в формате А3 со всеми чертежами и 3D
                  фотографиями.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="faq-side">
          <div class="block-wrap">
            <div class="faq-block right">
              <div class="msg">
                <span>вопрос:</span>
                <p>Компания предоставлает скидки?</p>
              </div>
              <img :src="checked" />
            </div>
          </div>
          <div class="block-wrap">
            <div class="faq-block left">
              <div class="msg">
                <span>ответ:</span>
                <p>Скидки до 20% для тех кто заключает договор в день консультации.</p>
              </div>
            </div>
          </div>
          <div class="block-wrap">
            <div class="faq-block right">
              <div class="msg">
                <span>вопрос:</span>
                <p>Может ли компания рекомендовать опытных строителей?</p>
              </div>
              <img :src="checked" />
            </div>
          </div>

          <div class="block-wrap">
            <div class="faq-block left">
              <div class="msg">
                <span>ответ:</span>
                <p>
                  Да, нашим клиентам мы предлагаем услуги строительных бригад с многолетным опытом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ourOffers dataContact" id="contacts">
      <h1>КОНТАКТНЫЕ ДАННЫЕ</h1>
    </div>

    <div class="container-wrap contacts-wrap">
      <div class="container contacts">
        <div class="map">
          <div class="map-animate"></div>
          <iframe
            v-bind:src="datal"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="locations">
          <div class="location">
            <div :class="{ 'lc-g-1 checked': dataChekcer1, 'lc-g-1': !dataChekcer1 }">
              <p>ГОЛОВНОЙ ОФИС:</p>
              <button class="loc-btn" @click="changeLocateOne">Локация</button>
            </div>
            <div class="lc-g-2">
              <div class="text-lc">
                <p>г. Ташкент, Чиланзарский р-н, ул. Чиланзар 81.</p>
                <p>Ориентир: напротив мечети “Катта Козиробод”</p>
                <Icon icon="solar:map-point-linear" width="15" class="icon-lc" />
              </div>
              <p>
                +998 71 200 35 35 / +998 90 996 80 30
                <Icon icon="bxs:phone" width="15" class="icon-lc" />
              </p>
            </div>
          </div>
          <div class="location">
            <div :class="{ 'lc-g-1 checked': !dataChekcer1, 'lc-g-1': dataChekcer1 }">
              <p>ГОЛОВНОЙ ОФИС:</p>
              <button class="loc-btn" @click="changeLocateTwo">Локация</button>
            </div>
            <div class="lc-g-2">
              <div class="text-lc">
                <p>г. Фергана, улица Комус, 18.</p>
                <p>Ориентир: рядом с кафе “Oybek”, ТРЦ “Central Festival”</p>
                <Icon icon="solar:map-point-linear" width="15" class="icon-lc" />
              </div>
              <p>
                +998 99 410 40 10
                <Icon icon="bxs:phone" width="15" class="icon-lc" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ourOffers smsOffer">
      <p><span>Оставьте сообщение</span> мы перезвоним</p>
    </div>

    <div class="container-wrap callback-wrap">
      <form @submit.prevent="sendMessage">
        <div class="container callback">
          <div class="cal-bl">
            <input type="text" v-model="dataTg.name" class="info cal-el" placeholder="Ваше имя" />
            <input
              type="text"
              class="info cal-el"
              v-model="dataTg.number"
              placeholder="Ваш телефон"
            />
          </div>
          <div class="cal-bl">
            <textarea
              name="sms"
              v-model="dataTg.message"
              placeholder="Ваше сообщение"
              class="sms cal-el"
              id="sms"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>

        <div class="sendMess container">
          <button type="submit" class="sendMessage">ОТПРАВИТЬ</button>
        </div>
      </form>
      <div class="light-design sendLg">
        <div class="lgitem"></div>
      </div>
    </div>
    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d189.95246291605815!2d71.7825938!3d40.3813863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb835f7834e053%3A0xe9f8402c3e4e1953!2zOVFKTStINDQsINCk0LXRgNCz0LDQvdCw!5e0!3m2!1sru!2s!4v1695555359219!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->

    <MyFooter />
  </div>
</template>

<style>
@import url('../assets/content.scss');
</style>
