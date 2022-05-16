import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import HelpPage from '../pages/help/HelpPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/help',
      name: 'help',
      component: HelpPage
    }
  ]
})

export default router
