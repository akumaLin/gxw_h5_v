import flexible from "./flexible.js"
require('es6-promise').polyfill();
import Vue from 'vue'
import App from './App'
import router from './router';
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.prototype.hostUrl = (function () {
  var is_product = document.domain == 'm.gxw520.com';
  var hostUrl = is_product ? 'https://m.gxw520.com/' : 'http://192.168.1.10/gxw_mobile3/';
 /* var hostUrl = is_product ? 'http://192.168.1.10/gxw_mobile3/' : 'https://m.gxw520.com/';*/
  return hostUrl
})()
Vue.prototype.gxwloginUrl = (function () {
  var is_product = document.domain == 'm.gxw520.com';
  var gxwloginUrl = is_product ? 'https://www.gxw520.com/' : 'http://192.168.1.10/gxw520/';
  return gxwloginUrl
})()


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

})

Vue.filter('int_f', function (value) {
  return parseInt(value)
})

Vue.filter('time_f', function (value) {
  value=value.replace(/\-/g, "/");
  var oldTime = new Date(value);
  var curTime=oldTime.getFullYear()+"."+ parseInt(oldTime.getMonth()+1) +"."+oldTime.getDate()
  return curTime
})


