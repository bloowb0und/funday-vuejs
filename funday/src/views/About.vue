<template>
    <div class="main-container">
        <Header />
        <Breadcrumb :items="items" title="О нас" />
        <Experience :experience="data.experience" />
        <FunFact />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>

    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import Experience from '../components/Experience'
    import FunFact from '../components/FunFact'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    import data from '../dataFolder/about.json'
    export default {
        components: {
            Header,
            Breadcrumb,
            Experience,
            FunFact,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data,
                items: [
                    {
                        text: 'Главная',
                        to: "/"
                    },
                    {
                        text: 'О нас',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'О нас - FunDay',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

