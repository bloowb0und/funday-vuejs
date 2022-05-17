<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Projects section start-->
        <div class="project-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-space--bottom--40">
                        <div class="project-image"><img :src="`../assets/img/projects/project-${project.id}/${project.image}`" class="img-fluid" alt="image"></div>
                    </div>

                    <div class="col-lg-4 col-12 section-space--bottom--30">
                        <div class="project-information">
                            <h3>{{ project.title }}</h3>
                            <ul>
                                <li>
                                    <strong>Локация: </strong>{{ project.location }}
                                </li>
                              <li>
                                <strong>Год: </strong>{{ project.year }}
                              </li>
                              <li>
                                <strong>Свободных мест: </strong>{{ project.places }}
                              </li>
                              <li>
                                <strong>Этажей: </strong>{{ project.floors }}
                              </li>
                            </ul>
                          <btn></btn>
                        </div>
                    </div>

                    <div class="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                        <div class="project-details">
                            <h2>{{ project.title }}</h2>
                            <p v-html="project.desc">{{ project.desc }}</p>
                        </div>
                    </div>
                  <div class="col-lg-8">
                    <div class="top-bar-right-wrapper">
                      <btn @click = "openModalWindow" class="ht-btn ht-btn--default d-inline-block">Забронировать</btn>
                    </div>
                  </div>
                  <div class="col-12 pt-lg-5">
                    <div class="row row-5 image-popup">
                      <a :href="`/assets/img/projects/project-${project.id}/1.jpg`" class="gallery-item single-gallery-thumb col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10">
                        <img :src="`/assets/img/projects/project-${project.id}/1.jpg`"class="img-fluid" alt="thumbnail">
                        <span class="plus"></span>
                      </a>
                      <a :href="`/assets/img/projects/project-${project.id}/2.jpg`" class="gallery-item single-gallery-thumb col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10">
                        <img :src="`/assets/img/projects/project-${project.id}/2.jpg`"class="img-fluid" alt="thumbnail">
                        <span class="plus"></span>
                      </a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import 'lightgallery.js'
    import 'lightgallery.js/dist/css/lightgallery.css'

    export default {
      props: ['project'],
        mounted() {
        console.log(this.project)
            const el = document.getElementById('lightgallery')
            window.lightGallery(el)
        },
      methods: {
        openModalWindow() {
          const el = document.querySelector('.modal-window-notshown');
          el.classList.add('modal-window')
          el.classList.remove('modal-window-notshown')
        },
        closeModalWindow()
        {
          const el = document.querySelector('.modal-window');
          el.classList.add('modal-window-notshown');
          el.classList.remove('modal-window');
        }
      },
    };
</script>