<template>
    <div class="main-container">
        <Header />
        <Breadcrumb :items="items" title="Каталог" />

        <!-- Projects section start -->
        <div class="page-wrapper section-space--inner--120">
            <div class="project-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="project-item-wrapper">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-6 col-12 section-space--bottom--30" v-for="project in data.projectGrid" :key="project.id">
                                        <ProjectGrid :project="project" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row section-space--top--60">
                        <div class="col">
                            <ul class="page-pagination">
                                <li><a href="#"><i class="fa fa-angle-left"></i> Назад</a></li>
                                <li class="active"><a href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li><a href="#">03</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> Вперед</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Projects section end -->

        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import data from '../data/project.json'
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ProjectGrid from '../components/Catalog'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumb,
            ProjectGrid,
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
                        text: 'Каталог',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Каталог - FunDay',
            htmlAttrs: {
                lang: 'ru',
                amp: true
            }
        }
    }
</script>

