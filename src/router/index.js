import Vue      from 'vue'
import Router   from 'vue-router'
import myPrize  from '@/components/my-prize/my-prize.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myPrize',
      component: myPrize
    }
  ]
})
