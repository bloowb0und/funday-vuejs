<template>
    <div class="about-section section-space--inner--120">
        <div class="container">
            <div class="about-wrapper row">
                <div class="col-sm-6 col-12 order-1 order-lg-2">
                    <div class="about-image about-image-1">
                        <img :src="experience.image_1" alt="thumbnail">
                    </div>
                </div>
                <div class="col-sm-6 col-12 order-2 order-lg-3">
                    <div class="about-image about-image-2">
                        <img :src="experience.image_2" alt="thumbnail">
                    </div>
                </div>
                <div class="col-lg-6 col-12 order-3 order-lg-1">
                    <div class="about-content about-content-1">
                        <h1 v-html="experience.title">{{ experience.title }}</h1>
                        <p>{{ experience.desc }}</p>
                    </div>
                </div>
                <div class="col-lg-6 col-12 order-4">
                    <div class="about-content about-content-2">
                        <p>{{ experience.desc2 }}</p>
                        <router-link to="/contact" class="ht-btn--default ht-btn--default--dark-hover section-space--top--20">Связаться с нами</router-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['experience']
    };
</script>