<template>
    <div class="main-container">
        <Header />
        <Breadcrumb :items="items" title="Детали помещения" />
<!--        <ProjectDetailsWrapper v-if="project" :project="project"/>-->
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ProjectDetailsWrapper from '../components/sections/ProjectDetailsWrapper'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    import ProjectService from "@/ProjectService";

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
          project: { title: 'First', desc: 'Hello everyone', image: 'project-1.jpg', location: 'Moscow, Kasdasd',
            year: 2015,
            places: 10,
            floors: 2
          },
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
          let project = await ProjectService.getProjectsId(this.$route.params.id);
          this.project = project;
          // console.log(x);
          // this.project = x.map(prj => ({
          //   ...prj,
          // }))
          console.log(1);
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

