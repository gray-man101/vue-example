import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Company from './components/Company.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/company/:id',
      name: 'company',
      component: Company
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
//      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
