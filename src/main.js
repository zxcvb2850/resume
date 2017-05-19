// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import basic from '@/components/resume/basic'
import campus from '@/components/resume/campus'
import work from '@/components/resume/work'
import evaluate from '@/components/resume/evaluate'


Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
  routes: [
    {
      path: '/basic',
      component: basic
    },
    {
      path: '/work',
      component: work
    },
    {
      path: '/campus',
      component: campus
    },
    {
      path:'/evaluate',
      component:evaluate
    }
  ]
})

new Vue({
  router,
  template: "<App/>",
  components: {
    App
  }
}).$mount('#app');



