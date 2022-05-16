<template>
    <div class="main-container">
        <Header />
        <Breadcrumb :items="items" title="Детали помещения" />
        <ProjectDetailsWrapper :project="project"/>
        <Footer />
        <OffCanvasMobileMenu />
        <ModalWindow :project="project"/>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ProjectDetailsWrapper from '../components/sections/ProjectDetailsWrapper'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    import ProjectService from "@/ProjectService";
    import ModalWindow from '@/components/sections/ModalWindow'

    export default {
        components: {
            Header,
            Breadcrumb,
            ProjectDetailsWrapper,
            Footer,
            OffCanvasMobileMenu,
            ModalWindow
        },
      data() {
        return {
          project : {},
          error:'',
          text:'',
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
        };
      },
      async beforeCreate() {
        try {
          console.log(1);
          ProjectService.getProjectsId(this.$route.params.id).then((x) => this.project = x);
          console.log(this.project);
        } catch(err) {
          this.error = err.message;
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

