<template>
  <div id="app">
    <!-- pc -->
    <div id="pc" v-if="isPC">
      <ChoiceDevice/>
    </div>
    <!-- mobile -->
    <div id="mobile" v-else>
      <!-- 暂时去掉 -->
      <div id="nav" v-if="false">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view></router-view>
      <footer-tabs/>
    </div>
  </div>
</template>
<script>
  import ChoiceDevice from './components/ChoiceDevice/ChoiceDevice'
  import footerTabs from '@/baseComponents/footerTab'
  import {IsPC} from './utils/common.js'
  export default {
    name: 'App',
    data () {
      return {
        isPC: IsPC()
      }
    },
    components: {
      ChoiceDevice,
      footerTabs
    }
  }
</script>
<style scoped lang="scss">
  #app {
  }
  #mobile {
    font-size: 24px;
    #nav {
      margin-top: .15rem;
    }
  }
</style>
