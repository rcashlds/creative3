import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bio from '../views/Bio.vue'
import Commission from '../views/Commission.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bio',
    name: 'Bio',
    component: Bio
  },
  {
    path: '/commission',
    name: 'Commission',
    component: Commission
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
