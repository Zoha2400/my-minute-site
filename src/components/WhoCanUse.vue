<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import  faqsvg  from '../img/faq.svg';
    import  checked  from '../img/checked.svg';
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

        <div class="ourOffers"  id="offers">
            <p><span>ДЛЯ КОГО ПОДХДИТ</span> НАША УСЛУГА</p>
        </div>

        <div class="container-wrap banner-wrap">
                <div class="container banner shadow-verst">
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
                            <span>11 лет</span>
                            <p>на рынке</p>
                        </div>
                    </div>
                    <div class="banner-item">
                        <Icon icon="ic:twotone-architecture" width="70"/>
                        <div class="banner-text">
                            <p>Архитекторы с <span>19 летним</span> опытом</p>
                        </div>
                    </div>
                    <div class="banner-item">
                        <Icon icon="octicon:project-template-16" width="70"/>
                        <div class="banner-text">
                            <p>Более <span>250</span> готовых проектов</p>
                        </div>
                    </div>
                    <div class="banner-item">
                        <Icon icon="mdi:house-outline" width="70"/>
                        <div class="banner-text">
                            <p>Более с <span>1500</span> релизованных домов</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ourOffers">
                <p>Приобретая готовый проект дома <span>Вы получаете:</span></p>
            </div>

            <div class="container-wrap banner-wrap nonBanner-wrap" id="offers">
                
                <div class="nonBanner-container container shadow-verst">
                <div class="container banner nonBanner">
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
                </div>
                <div class="container banner nonBanner">
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
                </div>
               </div>
        </div>


        <div class="ourOffers faq">
            <div class="light-design">
                <div class="lgitem"></div>
            </div>
            <img :src="faqsvg">
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
                        <img :src="checked">
                    </div>
                    </div>
                    <div class="block-wrap">
                        <div class="faq-block left">
                            <div class="msg">
                                <span>ответ:</span>
                                <p>Можно ли внести корректировки в готовый проект?</p>
                            </div>
                        </div>
                    </div>
                    <div class="block-wrap">
                        <div class="faq-block right">
                            <div class="msg">
                                <span>вопрос:</span>
                                <p>Можно ли внести корректировки в готовый проект?</p>
                            </div>
                            <img :src="checked">
                        </div>
                    </div>

                    <div class="block-wrap">
                        <div class="faq-block left">
                            <div class="msg">
                                <span>ответ:</span>
                                <p>Можно ли внести корректировки в готовый проект?</p>
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
                            <p>Можно ли внести корректировки в готовый проект?</p>
                        </div>
                        <img :src="checked">
                    </div>
                    </div>
                    <div class="block-wrap">
                        <div class="faq-block left">
                            <div class="msg">
                                <span>ответ:</span>
                                <p>Можно ли внести корректировки в готовый проект?</p>
                            </div>
                        </div>
                    </div>
                    <div class="block-wrap">
                        <div class="faq-block right">
                            <div class="msg">
                                <span>вопрос:</span>
                                <p>Можно ли внести корректировки в готовый проект?</p>
                            </div>
                            <img :src="checked">
                        </div>
                    </div>

                    <div class="block-wrap">
                        <div class="faq-block left">
                            <div class="msg">
                                <span>ответ:</span>
                                <p>Можно ли внести корректировки в готовый проект?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>


<style>

@import url('../assets/content.scss');

</style>