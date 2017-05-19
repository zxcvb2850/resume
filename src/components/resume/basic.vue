<template>
  <transition name="slow">
    <div class="basic">
      <div class="wrapper-basic">
        <h2 class="basic-title">{{resume.name}}</h2>
        <div class="wrapper" ref="basic">
          <ul class="basic-list">
            <li class="wrapp-img"><img :src="require('./img/ismi.jpg')" alt=""></li>
            <li class="item"><i class="iconfont icon-xingming"></i><span>{{resume.username}}</span></li>
            <li class="item"><i class="iconfont icon-nianling"></i><span>{{resume.birthday}}</span></li>
            <li class="item"><i class="iconfont icon-lianxifangshi"></i><span>{{resume.telephone}}</span></li>
            <li class="item"><i class="iconfont icon-youxiang"></i><span>{{resume.email}}</span></li>
            <li class="item"><i class="iconfont icon-llcouponsupportedshopaddress"></i><span>{{resume.from}}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      resume: {
        type: Object
      }
    },
    created(){
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.basic, {
          click: true
        });
      });
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import '../../common/less/index.less';

  .basic {
    .wrapper-basic {
      position: relative;
      top: 0px;
      height: 100%;
      border-top: 30px solid transparent;
      box-sizing: border-box;
      background-color: rgb(29, 54, 83)
    }
    .basic-title {
      position: absolute;
      top: -30px;
      width: 100%;
      margin: 4px 0 10px;
      font: 20px/30px "微软雅黑";
      text-align: center;
      color: #ddd;
    }
    .wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .basic-list {
      margin:0 auto;
      width: 300px;
      height: 400px;
      .wrapp-img {
        margin: 10px auto;
        width: 100px;
        border-radius: 20px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .item {
        margin: 10px 0;
        padding: 0 20px;
        color: #ddd;
        .iconfont {
          padding-right: 10px;
          display: inline-block;
          vertical-align: top;
          font-size: 30px;
        }
        span {
          line-height: 30px;
          font-size: 16px;
        }
      }
    }
    .basic-item {
      padding: 20px 20px;
      .border-1px(#aaa);
    }
  }
</style>
