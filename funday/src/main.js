import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import VueMeta from 'vue-meta'
import VueSilentbox from 'vue-silentbox'
import BackToTop from 'vue-backtotop'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
Vue.use(VueSilentbox)
Vue.use(BootstrapVue)
Vue.use(BackToTop)
Vue.use(VueAwesomeSwiper)
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/material-design-iconic-font.min.css'
import '../src/assets/css/ionicons.min.css'
import '../src/assets/css/flaticon.min.css'
import 'swiper/css/swiper.min.css'
import '../src/assets/css/animate.min.css'
import '../src/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
