<template>
    <div class="swiper-slide">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class="slide"   v-for='(item, index) in arrList' :key='item.url +index ' :style='{backgroundImage: "url(" + item.url + ")"}'></swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
      </swiper>
    </div>
</template>
<script >
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'selfSwipe',
  data () {
    return{
      swiperOption: {
          spaceBetween: 30,
          effect: 'fade',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: this.autoTimerInterval,
          },
        }
    }
  },
  props:{
    arrList:{ // 用于接收数据数组
      type: Array,
      default: () => {
        return [];
      }
    },
    autoTimerInterval: { // 自动轮播时间间隔
      type: Number
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss" scoped>
  .swiper-slide {
    background-position: center;
    background-size: cover;
    height:200px;
  }
</style>
