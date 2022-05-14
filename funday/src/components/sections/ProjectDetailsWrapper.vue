<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Projects section start-->
        <div class="project-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-space--bottom--40">
                        <div class="project-image"><img :src="project.image" class="img-fluid" alt="image"></div>
                    </div>

                    <div class="col-lg-4 col-12 section-space--bottom--30">
                        <div class="project-information">
                            <h3>{{ project.title }}</h3>
                            <ul>
                                <li>
                                    <strong>Локация: </strong>{{ project.desc }}
                                </li>
                              <li>
                                <strong>Год: </strong>{{ project.year }}
                              </li>
                              <li>
                                <strong>Свободных мест: </strong>{{ project.places }}
                              </li>
                              <li>
                                <strong>Локация: </strong>{{ project.desc }}
                              </li>
                            </ul>
                        </div>
                    </div>

<!--                    <div class="col-lg-8 col-12 section-space&#45;&#45;bottom&#45;&#45;30 pl-30 pl-sm-15 pl-xs-15">-->
<!--                        <div class="project-details">-->
<!--                            <h2>{{ dataFolder.projectDetails.projectDetailsTitle }}</h2>-->
<!--                            <p v-html="dataFolder.projectDetails.projectDetailsDesc">{{ dataFolder.projectDetails.projectDetailsDesc }}</p>-->
<!--                        </div>-->
<!--                    </div>-->

                    <div class="col-12">
                        <div class="row row-5 image-popup" id="lightgallery">
                            <a :href="gallery.image" class="gallery-item single-gallery-thumb col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10" v-for="gallery in data.projectDetailsGallery" :key="gallery.id">
                                <img :src="gallery.image" class="img-fluid" alt="thumbnail">
                                <span class="plus"></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--Projects section end-->
    </div>
</template>

<script>
    import 'lightgallery.js'
    import 'lightgallery.js/dist/css/lightgallery.css'

    export default {
      props : ['project'],
        // dataFolder () {
        //     return {
        //         dataFolder,
        //         imageList: []
        //     }
        // },
        created() {
          console.log(this.project)
        },
        mounted() {
            const el = document.getElementById('lightgallery')
            window.lightGallery(el)
        }
    };
</script>