import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        keepAlive: false // 不需要缓存
      }
    }
  ]
})
