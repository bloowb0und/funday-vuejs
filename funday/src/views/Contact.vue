<template>
    <div class="main-container">
        <Header />
        <Breadcrumb :items="items" title="Напишите нам!" />
        <ContactMainWrapper />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ContactMainWrapper from '../components/sections/ContactMainWrapper'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumb,
            ContactMainWrapper,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                items: [
                    {
                        text: 'Главная',
                        to: "/"
                    },
                    {
                        text: 'Контакты',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Контакты - FunDay',
            htmlAttrs: {
                lang: 'ru',
                amp: true
            }
        }
    }
</script>

