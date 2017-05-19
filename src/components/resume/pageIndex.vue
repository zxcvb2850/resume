<template>
  <transition name="slow">
    <div class="page-index">
      <h2 class="index-title">{{exhibit.pagename}}</h2>
      <div class="index-wrapper" ref="index">
        <ul>
          <a :href="item.href" target="_blank" v-for="item in exhibit.showcase">
            <li>
              <div class="item-img"><img :src="item.imgUrl" :title="item.name" alt=""></div>
              <h3 class="list-title">{{item.name}}</h3>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    data(){
      return {
        exhibit: {},
        default: ''
      }
    },
    created(){
      this.$http.get("./api/exhibit").then((response) => {
        response = response.body;
        if (response.errno === 0) {
          this.exhibit = Object.assign({}, this.exhibit, response.data)
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.index, {
              click: true
            });
          });
        }
      })
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/index";

  @media (min-width: 400px) {
    .page-index {
      ul {
        width: 400px
      }
      li {
        margin: 10px;
        width: 180px;
        height: 180px;
      }
    }
  }

  @media (max-width: 400px) {
    .page-index {
      width: 100%;
      ul {
        width: 90%;
      }
      li {
        margin: 10px 2%;
        width: 46%;
        height: 150px;
      }
    }
  }

  .page-index {
    .index-wrapper {
      height: 100%;
    }
    .index-title {
      position: relative;
      z-index: 1;
      line-height: 40px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      background-color: #fff;
    }
    ul {
      margin: 0 auto;
      padding-bottom: 60px;
      font-size: 0;
    }
    li {
      display: inline-block;
      position: relative;
      background-color: rgba(200, 200, 200, .6);
      border-radius: 10px;
      .item-img {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        border-radius: 5px;
        background-color: rgba(200, 200, 200, .8);
        overflow: hidden;
        img{
          width:100%;
        }
      }
      .list-title {
        position: absolute;
        bottom: 0;
        z-index: 2;
        width: 100%;
        line-height: 16px;
        text-align: center;
        font-size: 12px;
      }
    }
  }
</style>
