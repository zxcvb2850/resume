<template>
  <div class="menu">
    <div class="line-wrapper" @click="menuMask">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <transition name="move">
      <div class="content" v-show="ismask">
        <div class="avatar">
          <img :src="info.avatar" alt="头像">
        </div>
        <div class="menu-list" ref="menuList">
          <ul>
            <li class="menu-item indexBtn" @click="showPageIndex">主页</li>
            <router-link
              v-for="(item,index) in resume"
              :key="item"
              :to="{path:item.path}"
              tag="li"
              class="menu-item"
              @click.native="tagContent(item,$event)">
              {{item.pagename}}
            </router-link>
          </ul>
        </div>
        <div class="menu-tag">
          <ul>
            <li v-for="tag in info.tags" class="tag-item">{{tag}}</li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="home" ref="resume">
      <transition name="slow">
        <keep-alive>
          <router-view v-show="pageInfo" :resume="dataRseume" :basicData="resume"></router-view>
        </keep-alive>
      </transition>
      <page-index v-show="!pageInfo"></page-index>
    </div>
    <transition name="fade">
      <div class="menu-mask" v-show="ismask" @click="menuMaskRemove"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll  from 'better-scroll'
  import pageIndex from '@/components/resume/pageIndex.vue'

  const ERROR_OK = 0;

  export default{
    props: {
      info: {
        type: Object
      }
    },
    data() {
      return {
        resume: {},
        ismask: false,
        dataRseume: {},
        pageInfo: false
      }
    },
    created () {
      this.$http.get('./api/resume').then((response) => {
        response = response.body;
        if (response.errno === ERROR_OK) {
          this.resume = Object.assign({}, this.resume, response.data);
        }
      }, (response) => {
        console.log('数据调用失败')
      });
    },
    methods: {
      menuMask(){
        this.ismask = !this.ismask;
        this._initScroll();
      },
      menuMaskRemove(){
        this.ismask = false;
      },
      tagContent(item, event){
        if (!event._constructed) {
          return;
        }
        this.pageInfo = true;
        this.dataRseume = item.message;
        this.ismask = !this.ismask;
      },
      showPageIndex(){
        this.pageInfo = false;
        this.ismask = false;
      },
      _initScroll(){
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.menuList, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        })
      }
    },
    components: {
        pageIndex
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import '../common/less/public.less';

  @color: rgba(159, 26, 123, .5);

  .menu {
    .line-wrapper {
      position: fixed;
      top: 16px;
      left: 14px;
      z-index: 11;
    }
    .line {
      margin: 4px 0;
      display: block;
      width: 26px;
      height: 4px;
      border-radius: 4px;
      background-color: #eee;
    }
    .content {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 12;
      width: 40%;
      height: 100%;
      overflow: hidden;
      background-color: rgba(0, 0, 0, .8);
    }
    .move-enter-active, .move-leave-active {
      transition: all .35s linear;
    }
    .move-enter, .move-leave-active {
      left: -40%;
    }
    .avatar {
      margin: 50px auto 40px;
      width: 100px;
      height: 100px;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid #000;
      img {
        width: 100%
      }
    }
    .menu-list {
      padding: 0 20px;
      width: 100%;
      height: 40%;
      overflow: hidden;
      .box-sizing;
    }
    .menu-item {
      margin-top: 10px;
      width: 100%;
      height: 30px;
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      .border-1px(#ccc);
      color: #ddd;
    }
    .menu-tag {
      position: absolute;
      bottom: 30px;
      width: 100%;
      color: #fff;
      font-size: 0;
      ul {
        padding: 0 4px;
      }
      .tag-item {
        margin: 2px;
        padding: 2px 6px;
        display: inline-block;
        height: 16px;
        line-height: 16px;
        border-radius: 6px;
        background-color: @color;
        font-size: 10px;
      }
    }
    .menu-mask {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
    }
    .fade-enter-active, .fade-leave-active {
      transition: all .35s;
    }
    .fade-enter, .fade-leave-active {
      opacity: 0;
    }

  }

  .home {
    .slow-enter-active, .slow-leave-active {
      transition: all 0.2s linear
    }

    .slow-enter {
      transform: translate3d(100%, 0, 0)
    }

    .slow-leave-active {
      transform: translate3d(-100%, 0, 0)
    }

    .page-index, .basic, .campus, .work, .evaluate {
      padding-top: 60px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
</style>
