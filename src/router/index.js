import Vue      from 'vue'
import Router   from 'vue-router'
import myPrize  from '@/pages/my-prize/my-prize.vue'
import newPeople  from '@/pages/new-people/new-people.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newPeople',
      name: 'myPrize',
      component: myPrize
    },
    {
      path: '/',
      name: 'newPeople',
      component: newPeople
    },
  ]
})
