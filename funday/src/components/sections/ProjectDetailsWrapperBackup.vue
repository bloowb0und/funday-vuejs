<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Projects section start-->
        <div class="project-section">
            <div class="container">
                <div class="row">

                    <div class="col-12 section-space--bottom--40">
                        <div class="project-image"><img :src="data.projectDetails.projectDetailsImage" class="img-fluid" alt="image"></div>
                    </div>

                    <div class="col-lg-4 col-12 section-space--bottom--30">
                        <div class="project-information">
                            <h3>{{ data.projectDetailsInfo.title }}</h3>
                            <ul>
                                <li v-for="list in data.projectDetailsInfo.lists" :key="list.id">
                                    <strong>{{ list.label }}</strong>{{ list.desc }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                        <div class="project-details">
                            <h2>{{ data.projectDetails.projectDetailsTitle }}</h2>
                            <p v-html="data.projectDetails.projectDetailsDesc">{{ data.projectDetails.projectDetailsDesc }}</p>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="row row-5 image-popup">
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10" v-for="gallery in data.projectDetailsGallery" :key="gallery.id">
                                <router-link to="/project-details" class="gallery-item single-gallery-thumb">
                                    <img :src="gallery.image" class="img-fluid" alt="thumbnail">
                                    <span class="plus"></span>
                                </router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--Projects section end-->
    </div>
</template>

<script>
    import data from '../../data/project.json'
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>