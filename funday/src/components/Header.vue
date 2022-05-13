<template>
    <!--====================  header area ====================-->
    <div class="header-area">
        <div class="header-area__desktop header-area__desktop--default">

            <!--=======  header top bar  =======-->
            <div class="header-top-bar">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                            <!-- top bar left -->
                            <div class="top-bar-left-wrapper">
                                <div class="social-links social-links--white-topbar d-inline-block">
                                    <ul>
                                        <li>
                                            <a href="//facebook.com" target="_blank"><i class="zmdi zmdi-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="//twitter.com" target="_blank"><i class="zmdi zmdi-twitter"></i></a>
                                        </li>
                                      <li>
                                        <a href="//instagram.com" target="_blank"><i class="zmdi zmdi-instagram"></i></a>
                                      </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <!-- top bar right -->
                            <div class="top-bar-right-wrapper">
                                <router-link to="/contact" class="ht-btn ht-btn--default d-inline-block">Забронировать</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--=======  End of header top bar  =======-->

            <!--=======  header info area  =======-->
            <div class="header-info-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="header-info-wrapper align-items-center">
                                <!-- logo -->
                                <div class="logo">
                                    <router-link to="/">
                                        <img src="/assets/img/logo/black.png" class="img-fluid" alt="Brand Logo" width="75px">
                                    </router-link>
                                </div>

                                <!-- header contact info -->
                                <div class="header-contact-info">
                                    <div class="header-info-single-item">
                                        <div class="header-info-single-item__icon">
                                            <i class="zmdi zmdi-smartphone-android"></i>
                                        </div>
                                        <div class="header-info-single-item__content">
                                            <h6 class="header-info-single-item__title">Телефон</h6>
                                            <p class="header-info-single-item__subtitle">
                                                <a href="tel:989875596854">+7(499)703-00-95</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="header-info-single-item">
                                        <div class="header-info-single-item__icon">
                                            <i class="zmdi zmdi-home"></i>
                                        </div>
                                        <div class="header-info-single-item__content">
                                            <h6 class="header-info-single-item__title">Адрес</h6>
                                            <p class="header-info-single-item__subtitle">Кремль, Москва</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- mobile menu -->
                                <div class="mobile-navigation-icon" id="mobile-menu-trigger" @click="mobiletoggleClass('addClass', 'active')">
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--=======  End of header info area =======-->
            
            <!--=======  header navigation area  =======-->
            <div class="header-navigation-area default-bg" :class="{'is-sticky': isSticky}">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <!-- header navigation -->
                            <div class="header-navigation header-navigation--header-default position-relative">
                                <div class="header-navigation__nav position-static">
                                    <nav>
                                        <ul>
                                            <li>
                                                <router-link to="/">Главная</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/about">О нас</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/catalog">Каталог</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/contact">Контакты</router-link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--=======  End of header navigation area =======-->
        </div>
    </div>
    <!--====================  End of header area  ====================-->
</template>

<script>
    export default {
        data() {
            return {
                isSticky: false
            }
        },
        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        }
    };
</script>

<style lang="scss">
    .is-sticky {
        left: 0;
        top: 0;
        width: 100vw;
        z-index: 999;
        position: fixed;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
    }
</style>