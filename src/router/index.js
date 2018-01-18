import Vue from 'vue';
import Router from 'vue-router';
import home from 'page/home/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', // 游戏首页
      name: 'home',
      component: home
    }
  ]
});
