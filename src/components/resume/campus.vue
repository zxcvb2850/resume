<template>
  <transition name="slow">
    <div class="campus">
      <div class="campus-bg"></div>
      <div class="wrapper-campus">
        <h2 class="campus-title">{{resume.name}}</h2>
        <div class="wrapper" ref="campus">
          <ul class="campus-list">
            <li class="list-item" v-for="item in resume.exps">
              <div class="list-content">
                <p class="txt">{{item.event}}</p>
                <span class="time">{{item.time}}</span>
              </div>
            </li>
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
      this.$nextTick(()=>{
          this.scroll = new BScroll(this.$refs.campus,{
              click:true
          })
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/index.less";

  .campus {
    .campus-bg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url("http://pic1.win4000.com/wallpaper/d/5227e2d87163a.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      filter: blur(10px)
    }
    .wrapper-campus {
      position: relative;
      top:0px;
      height:100%;
      border-top: 30px solid transparent;
      box-sizing: border-box;
      background-color: rgba(0,0,0,.5)
    }
    .campus-title {
      position: absolute;
      top: -30px;
      width:100%;
      margin: 4px 0 10px;
      font: 20px/30px "微软雅黑";
      text-align: center;
      color: #ddd;
    }
    .wrapper{
      position: absolute;
      top:0;
      bottom:0;
      width:100%;
      height: 100%;
      overflow: hidden;
    }
    .list-item {
      padding: 20px 20px;
      .border-1px(#aaa);
      .txt {
        line-height: 20px;
        font-size: 14px;
        text-indent:20px;
        color: #ccc;
      }
      .time {
        display: block;
        font-size: 12px;
        text-align: right;
        color: #ff8282;
      }
    }
  }
</style>
