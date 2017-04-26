// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';

Vue.config.productionTip = false
/* eslint-disable no-new */
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


