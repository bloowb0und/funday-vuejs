<template>
    <div class="main-container">
        <Header />
        <HeroOne :sliderData="data.heroOne" />
        <FunFact />
        <AboutSection />
        <Testimonial />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import HeroOne from '../components/sections/HeroOne';
    import FunFact from '../components/FunFact';
    import AboutSection from '../components/sections/AboutSection';
    import Testimonial from '../components/Testimonial';
    import Footer from '../components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    import data from '../dataFolder/slider.json'
    export default {
        data () {
            return {
                data
            }
        },
        components: {
            Header,
            HeroOne,
            FunFact,
            AboutSection,
            Testimonial,
            Footer,
            OffCanvasMobileMenu
        },
        metaInfo: {
            title: 'Главная страница - FunDay',
            htmlAttrs: {
                lang: 'ru',
                amp: true
            }
        }
    }
</script>
