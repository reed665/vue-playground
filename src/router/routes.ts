import type { RouteRecordRaw } from 'vue-router'
import { HomeView } from '../modules/home'
import { RouteName } from './RouteName'
import { ComposablesAndRenderlessComponentsView } from '@/modules/composables-and-renderless-components'
import { ScaleFormWithVuelidateView } from '@/modules/scale-form-with-vuelidate'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.Home,
    component: HomeView,
  },
  {
    path: '/about',
    name: RouteName.About,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../modules/about/views/AboutView.vue'),
  },
  {
    path: '/composables-and-renderless-components',
    name: RouteName.ComposablesAndRenderlessComponents,
    component: ComposablesAndRenderlessComponentsView,
  },
  {
    path: '/scale-form-with-vuelidate',
    name: RouteName.ScaleFormWithVueldiate,
    component: ScaleFormWithVuelidateView,
  },
]
