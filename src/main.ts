import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick';/*移动端300毫秒延迟点击解决*/
import './registerServiceWorker';
import './assets/styles/reset.css';/*全局css*/
import './assets/styles/border.css';/*移动端1像素边框问题*/

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({/*//键值相同省略 router: router*/
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

/*//路由用于url返回页面*/
/*q rem = 100px*/
