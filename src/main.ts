import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick'; /*移动端300毫秒延迟点击解决*/
import VueAwesomeSwiper from 'vue-awesome-swiper';
import './registerServiceWorker';
import 'styles/reset.css'; /*全局css*/
import 'styles/border.css'; /*移动端1像素边框问题*/
import 'styles/iconfont.css'; /*iconfont*/
import 'swiper/dist/css/swiper.css'; /*banner*/

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper, /* { default global options } */);

new Vue({/*键值相同省略 router: router*/
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

/*路由用于url返回页面*/
/*q rem = 100px*/
