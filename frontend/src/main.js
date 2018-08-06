import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem.js'
import './sass/reset.scss'

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper' 
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
