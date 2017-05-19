<template>
  <div id="app">
    <div class="header">{{info.username}}</div>
    <resume-nav :info="info"></resume-nav>
  </div>
</template>

<script>
  import resume from '@/components/resume'

  const ERROR_OK = 0;

  export default {
    data() {
      return {
        info: {}
      }
    },
    created () {
      this.$http.get('./api/info').then((response) => {
        response = response.body;
        if (response.errno === ERROR_OK) {
          this.info = Object.assign({}, this.info, response.data);
        }
      }, (response) => {
        console.log('数据调用失败')
      });
    },
    components: {
      resumeNav: resume
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  #app {
    .header {
      position: fixed;
      z-index: 10;
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      letter-spacing: 10px;
      color: #eee;
      background-color: rgb(55, 121, 199);
    }
  }
</style>
