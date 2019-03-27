// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Routers from './router/index.js';
Vue.use(VueRouter);
import 'mint-ui/lib/style.css'
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import { Badge } from 'mint-ui';
Vue.component(Badge.name, Badge);
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
// 路由配置
const RouterConfig = {
 // mode: 'history',
  routes: Routers
}
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})
import store from './store/store.js';
Vue.config.productionTip = false
import axios from 'axios';
//Vue.use(axios);
Vue.prototype.$axios = axios;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
