<template>
  <div class="wrap">
    <!-- <div ref="wrapper">
      <div  class="banner-wrapper">
        <div class="banner banner-item"  v-for='(item, index) in banners' :key='item.url +index ' :style='{backgroundImage: "url(" + item.url + ")"}'>
          <div class="headline" >
            <p class="important">[车来货往]</p>
            <p class="normal">专业运输信息平台</p>
          </div>
        </div>
      </div>
    </div> -->
    <self-swipe :arrList="banners" :autoTimerInterval="1500"></self-swipe>
    <div class="header">
      <div class="statistics-info">
        <span class="attention">关注： 2000人</span>
        <span class="click">今日点击： 5000</span>
      </div>
      <div class="nav">
        <div class="ul" v-for="item in navList" :key="item.name">
          <img class="icon" :src="item.logoItem" />
          <span class="name">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="info">
    </div>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import {tabNavList} from '@/util/basicConfig'
import getBanners from '@/util/common'
import selfSwipe from '@/baseComponents/selfSwipe'
export default {
  name: 'home',
  data () {
    return {
      navList: tabNavList,
      banners: getBanners()
    }
  },
  components:{
    selfSwipe
  },
  methods: {
    
  },
  created () {
   
  }
}
</script>
<style scoped lang="scss">
  .wrap{
    width: 100%;
    .banner-wrapper{
      position: relative;
      overflow: hidden;
      white-space: nowrap;
    }
    .banner{
      position: relative;
      width: 100%;
      height: 2rem;
      // background-image: url('../assets/banner.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      &.banner-item{
        // float: left;
        display:inline-block;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
      }
      .headline{
        position: absolute;
        top: 40%;
        right: 15px;
        text-align: left;
        cursor: pointer;
        .important{
          font-size: 26px;
          font-weight: bold;
          color: #ebb661;
        }
        .normal{
          margin-top: 10px;
          font-size: 16px;
          color: #ffffff;
        }
      }
    }
    .header{
      .statistics-info{
        box-sizing: border-box;
        width: 100%;
        height: .45rem;
        line-height: .45rem;
        background-color: #3D3D3D;
        color: #ffffff;
        font-size: .16rem;
        position: relative;
        padding-left: .15rem;
        .click{
          margin-left: .3rem;
        }
      }
      .nav{
        margin-top: .2rem;
        .ul{
          display: inline-block;
          width: 1.2rem;
          height: .9rem;
          position: relative;
          text-align: center;
          .icon{
            margin: 0 auto;
            border-radius: 50%;
            background-color: #fff;
            display: block;
            width: .4rem;
            height: .4rem;
          }
          .name{
            margin: 0 auto;
            font-size: .16rem;
          }
        }
      }
    }
  }
</style>
