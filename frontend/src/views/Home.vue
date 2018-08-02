<template>
  <div class="wrap">
    <div class="banner">
      <div class="headline">
        <p class="important">[车来货往]</p>
        <p class="normal">专业运输信息平台</p>
      </div>
    </div>
    <div class="header">
      <div class="statistics-info">
        <span class="attention">关注： 2000人</span>
        <span class="click">今日点击： 5000</span>
      </div>
      <div class="nav">
        <div class="ul" v-for="item in navList" :key="item.name">
          <span class="icon"></span>
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
export default {
  name: 'home',
  data () {
    return {
      navList: [
        { name: '车源信息' },
        { name: '货源信息' },
        { name: '发布信息' },
        { name: '保险服务' },
        { name: '身份验证' },
        { name: '积分商城' },
        { name: '运费查询' },
        { name: '里程税查询' },
        { name: '卡友助手' },
      ]
    }
  }
}
</script>
<style scoped lang="scss">
  .wrap{
    width: 100%;
    .banner{
      position: relative;
      width: 100%;
      height: 2rem;
      background-image: url('../assets/banner.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
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
            background-color: #5BA8FB;
            display: block;
            width: .5rem;
            height: .5rem;
          }
          .name{
            margin: 0 auto;
            font-size: .18rem;
          }
        }
      }
    }
  }
</style>
