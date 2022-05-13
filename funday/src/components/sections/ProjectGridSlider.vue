<template>
    <!--====================  project grid slider area ====================-->
    <div class="service-slider-wrapper">
        <div class="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-area text-center">
                            <h2 class="section-title mb-0">{{ data.sectionTitleTwo }}<span class="title-icon"></span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="service-grid-slider-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="service-slider">
                            <div class="swiper-container service-slider__container service-slider__container--style2">
                                <div class="swiper-wrapper service-slider__wrapper">
                                    <swiper :options="swiperOption">
                                        <div class="swiper-slide" v-for="project in data.projectGrid" :key="project.id">
                                            <ProjectGrid :project="project" />
                                        </div>
                                    </swiper>
                                </div>
                            </div>

                            <div class="ht-swiper-button-prev ht-swiper-button-prev-4 ht-swiper-button-nav"><i class="ion-ios-arrow-left"></i></div>
                            <div class="ht-swiper-button-next ht-swiper-button-next-4 ht-swiper-button-nav"><i class="ion-ios-arrow-forward"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--====================  End of project grid slider area  ====================-->
</template>

<script>
    import ProjectGrid from '@/components/Catalog';
    import data from '../../data/project.json'
    export default {
        components: {
            ProjectGrid
        },
        data () {
            return {
                data,
                swiperOption: {
                    slidesPerView : 3,
                    loop: true,
                    speed: 1000,
                    watchSlidesVisibility: true,
                    spaceBetween : 30,
                    pagination: {
                        el: '.swiper-pagination-11',
                        type: 'bullets',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.ht-swiper-button-next-4',
                        prevEl: '.ht-swiper-button-prev-4'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        1200:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2

                        },

                        320:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    };
</script>