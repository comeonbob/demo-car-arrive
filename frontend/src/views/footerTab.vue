<!--底部的tab-->
<template>
  <div class="tab-wrapper">
    <ul class="tabs-cont">
      <li class="tab-item tab-item-one">
        <span class="icon-cont"></span>
      </li>
      <li class="tab-item tab-item-two">
        <span class="icon-cont"></span>
      </li>
      <li class="tab-item tab-item-three">
        <span class="icon-cont"></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'footerTabs',
  data () {
    return {
      msg: 'eeeee'  
    }
  },
}
</script>
<style lang="scss" scoped>
  .tab-wrapper{
    position:fixed;
    bottom:0;
    background: #fff;
    box-shadow: -2px 0 3px 3px #f7f4f4;;
    height:.5rem;
    width:100%;
    .tabs-cont{
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      height:100%;
      .tab-item{
        flex:1;
        height: 100%;
        line-height:0.3rem;
        .icon-cont{
          display: inline-block;
          width:.4rem;
          height:.4rem;
        }
        &.tab-item-one{
          .icon-cont{
            background: url('../assets/icons/home.svg') no-repeat;
          }
        }
        &.tab-item-two{
          .icon-cont{
            background: url('../assets/icons/edit.svg') no-repeat;  
          }
        }
        &.tab-item-three{
          .icon-cont{
            background: url('../assets/icons/person.svg') no-repeat;
          }
        }
      }
    }
  }
</style>
