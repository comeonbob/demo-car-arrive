<!--底部的tab-->
<template>
  <div class="tab-wrapper">
    <ul class="tabs-cont">
      <li class="tab-item tab-item-one" @click="backHome">
        <span class="icon-cont"></span>
        <!-- <span class="icon-word">返回首页</span> -->
      </li>
      <li class="tab-item tab-item-two" @click="editInfo">
        <span class="icon-cont"></span>
        <!-- <span class="icon-word">编辑信息</span> -->
      </li>
      <li class="tab-item tab-item-three" @click="personInfo">
        <span class="icon-cont"></span>
        <!-- <span class="icon-word">个人中心</span> -->
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
  methods: {
    // 返回主页
    backHome () {
      this.$router.push('/')
    },
    // 编辑信息
    editInfo () {
      this.$router.push({name: "EditInfo"})
    },
    // 个人中心
    personInfo () {
      this.$router.push({name: "PersonInfo"})
    }
  }
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
        padding-top:.15rem;
        .icon-cont{
          display: block;
          width:.3rem;
          height:.3rem;
          margin: 0 auto;
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
