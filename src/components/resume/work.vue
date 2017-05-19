<template>
  <transition name="slow">
    <div class="work">
      <div class="wrapper-work">
        <h2 class="work-title">{{resume.name}}</h2>
        <div class="wrapper" ref="work">
          <ul class="work-list">
            <li class="list-item" v-for="item in resume.work">
              <div class="list-content">
                <p class="time">时间：<span>{{item.time}} ~ {{item.end}}</span></p>
                <p class="place">地点：<span>{{item.place}}</span></p>
                <p class="job">职位：<span>{{item.done}}</span></p>
                <p>心得：<span>1111</span></p>
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
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.work, {
          click: true
        })
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/index.less";

  .work {
    .wrapper-work {
      position: relative;
      height: 100%;
      border-top: 30px solid transparent;
      box-sizing: border-box;
    }
    .work-title {
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
      .work-list {
        padding-bottom: 20px;
      }
      .list-item {
        margin: 20px 0;
        padding: 0 20px;
      }
      .list-content {
        padding: 10px 20px;
        line-height: 20px;
        font-size: 14px;
        color: #eee;
        box-shadow: -4px 4px 6px 0 rgba(48, 79, 100, .8);
        background: linear-gradient(to left bottom, transparent 49%, rgba(0, 0, 0, 0.4) 0) 100% 0 no-repeat,
        linear-gradient(-135deg, transparent 1.4em, #58a 0);
        background-size: 2em 2em, auto; /*折角矩形*/
        p {
          margin: 6px;
        }
        span {
          padding-left: 10px;
        }
      }
      .time {
        span {
          font-size: 10px;
        }
      }
    }
  }
</style>
