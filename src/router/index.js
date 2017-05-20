import Vue      from 'vue'
import Router   from 'vue-router'
/*import myPrize  from '@/pages/my-prize/my-prize.vue'*/
const myPrize= r => require.ensure([], () => r(require('@/pages/my-prize/my-prize.vue')), 'group-myPrize')
/*import newPeople  from '@/pages/new-people/new-people.vue'*/
const newPeople= r => require.ensure([], () => r(require('@/pages/new-people/new-people.vue')), 'group-newPeople')
/*import home  from '@/pages/home/home.vue'*/
const home= r => require.ensure([], () => r(require('@/pages/home/home.vue')), 'group-home')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myPrize',
      component: myPrize
    },
    {
      path: '/newPeople',
      name: 'newPeople',
      component: newPeople
    },
    {
      path: '/home',
      name: 'home',
      component:home
    }
  ]
})
