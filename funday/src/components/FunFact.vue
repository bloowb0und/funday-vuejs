<template>
    <div class="funfact-section section-space--inner--100" :style="{ backgroundImage: `url(${data.bgImg})` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="fun-fact-wrapper">
                        <div class="row" v-observe-visibility="{callback: visibilityChanged, once: true}">
                            <div class="single-fact col-md-3 col-6 section-space--bottom--30" v-for="item in data.funFacts" :key="item.id">
                                <img :src="item.icon" alt="icon">
                                <h1 class="counter" v-if="isVisible">
                                    <countTo :startVal='startVal' :endVal='item.counter' :duration='4000'></countTo>
                                </h1>
                                <h4>{{ item.title }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../dataFolder/funfact.json'
    import countTo from 'vue-count-to';
    
    export default {
        components: {
            countTo
        },
        data () {
            return {
                data,
                startVal: 1,
                isVisible: false,
            }
        },
        methods: {
            visibilityChanged (isVisible) {
                this.isVisible = isVisible
            },
        },
    };
</script>