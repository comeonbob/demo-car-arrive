import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem.js'
import './sass/reset.scss'

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper' 
Vue.use(VueAwesomeSwiper, /* { default global options } */)

// if (window.location.href.indexOf('http://localhost') > -1 || window.location.href.indexOf('http://10.9.8') > -1) { // 本地调试
//   if (navigator.userAgent) { // 针对ie10做的特殊处理
//     var ua = navigator.userAgent.toLowerCase()
//     var isIE = ua.indexOf('msie') > -1
//     if (isIE && ua.match(/msie ([\d.]+)/)[1] <= 10) {
//       console.log('')
//     } else {
//       let VConsole = require('VConsole')
//       let vConsole = new VConsole()
//       console.log(vConsole)
//     }
//   }
// }
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
