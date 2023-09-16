<script setup lang="ts">
    import { Icon } from '@iconify/vue';
</script>

<template>

    <div class="whocanuse">

        <div class="light-design">
            <div class="lgitem"></div>
        </div>
        <div class="arrow">
            
            <a href="#offers">
                <Icon icon="solar:arrow-down-linear" color="white" width="40" class="animate"/>
            </a>

        </div>

        <div class="ourOffers">
            <p><span>ДЛЯ КОГО ПОДХДИТ</span> НАША УСЛУГА</p>
        </div>

        <div class="container-wrap banner-wrap" id="offers">
                <div class="container banner">
                    <div class="banner-item">
                        <Icon icon="ic:baseline-percent" width="90"/>
                        <p>Тем, кто хочет сэкономить деньги до 70%</p>
                    </div>
                    <div class="banner-item">
                        <Icon icon="quill:calendar" width="90"/>
                        <p>Тем, кто не хочет терять месяц на создание нового проекта</p>
                    </div>
                    <div class="banner-item">
                        <Icon icon="tabler:checkup-list" width="90"/>
                        <p>Тем, кто ищет проверенные решения</p>
                    </div>
                    <div class="banner-item">
                        <Icon icon="game-icons:time-bomb" width="90"/>
                        <p>Тем, кто ценит свое время и умеет считать деньги</p>
                    </div>
                </div>
        </div>

        <div class="ourOffers">
            <p><span>НАША КОМПАНИЯ</span> В ЦИФРАХ</p>
        </div>

        <div class="container-wrap ourNums-wrapper banner-wrap">
                <div class="container ourNums banner">
                    <div class="banner-item">
                        <Icon icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow" width="70"/>
                        <div class="banner-text">
                            <h3>11 лет</h3>
                            <p>на рынке</p>
                        </div>
                    </div>
                    <div class="banner-item">
                        <Icon icon="ic:twotone-architecture" width="70"/>
                        <div class="banner-text">
                            <p>Архитекторы с <h3>19 летним</h3> опытом</p>
                        </div>
                    </div>
                    <div class="banner-item">
                        <Icon icon="octicon:project-template-16" width="70"/>
                        <div class="banner-text">
                            <p>Более <h3>250</h3> готовых проектов</p>
                        </div>
                    </div>
                    <div class="banner-item">
                        <Icon icon="mdi:house-outline" width="70"/>
                        <div class="banner-text">
                            <p>Более с <h3>1500</h3> релизованных домов</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>

</template>


<style>

@import url('../assets/content.scss');

</style>