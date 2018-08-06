import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueResource from 'vue-resource'
require('../node_modules/animate.css/animate.min.css');

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
