<template>
  <transition name="slow">
    <div class="evaluate">
      <div class="wrapper-evaluate">
        <h2 class="evaluate-title">{{resume.name}}</h2>
        <div class="wrapper" ref="evaluate">
          <div class="campus-content">
            <p class="time">{{resume.text}}</p>
          </div>
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
        this.scroll = new BScroll(this.$refs.evaluate, {
          click: true
        })
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/index.less";

  .evaluate {
    .wrapper-evaluate {
      position: relative;
      height: 100%;
      border-top: 30px solid transparent;
      box-sizing: border-box;
    }
    .evaluate-title {
      position: absolute;
      top: -30px;
      width: 100%;
      margin: 4px 0 10px;
      font: 20px/30px "微软雅黑";
      text-align: center;
      color: #000;
    }
    .wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .campus-content {
        padding: 20px 30px;
        text-indent: 20px;
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
</style>
