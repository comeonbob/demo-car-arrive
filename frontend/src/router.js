import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

import PersonInfo from './views/PersonInfo'
import EditInfo from './views/EditInfo'
Vue.use(Router)

export default new Router({
  routes: [
    { // 默认页
      path: '*',
      redirect: () => {
        return '/'
      },
      meta: {
        status: false
      }
    },
    { // 主页
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
    },
    { // 个人中心
      path: '/PersonInfo',
      name: 'PersonInfo',
      component: PersonInfo,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    { // 信息编辑
      path: '/EditInfo',
      name: 'EditInfo',
      component: EditInfo,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
  ]
})
