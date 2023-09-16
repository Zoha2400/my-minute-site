<script setup lang="ts">
    import { Icon } from '@iconify/vue';
</script>

<template>

    <div class="whocanuse">

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

    </div>

</template>


<style>

@import url('../assets/content.scss');

</style>