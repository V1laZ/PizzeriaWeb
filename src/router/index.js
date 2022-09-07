import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PizzaView from '../views/PizzaView.vue'
import BurgeryView from '../views/BurgeryView.vue'
import PrilohyView from '../views/PrilohyView.vue'
import CartView from '../views/CartView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pizza',
    name: 'Pizza',
    component: PizzaView
  },
  {
    path: '/burgery',
    name: 'Burgery',
    component: BurgeryView
  },
  {
    path: '/prilohy',
    name: 'Přílohy',
    component: PrilohyView
  },
  {
    path: '/kosik',
    name: 'Kosik',
    component: CartView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
