<template>
    <div class="main-container">
        <Header />
        <Breadcrumb :items="items" title="Детали помещения" />
        <ProjectDetailsWrapper />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import data from '../data/project.json'
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ProjectDetailsWrapper from '../components/sections/ProjectDetailsWrapper'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            Breadcrumb,
            ProjectDetailsWrapper,
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
                        text: 'Детали помещения',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Детали помещения - FunDay',
            htmlAttrs: {
                lang: 'ru',
                amp: true
            }
        }
    }
</script>

