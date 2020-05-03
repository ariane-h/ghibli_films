import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Films from '../views/Films.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Films',
    component: Films
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
