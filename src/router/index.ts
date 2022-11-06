import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { HomeView } from '../modules/home'
import { ComposablesView } from '@/modules/composables'
import { RenderlessComponentsView } from '@/modules/renderless-components'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../modules/about/views/AboutView.vue'),
  },
  {
    path: '/composables',
    name: 'composables',
    component: ComposablesView,
  },
  {
    path: '/renderless-components',
    name: 'renderless-components',
    component: RenderlessComponentsView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
