import type { RouteRecordRaw } from 'vue-router'
import { HomeView } from '../modules/home'
import { RouteName } from './RouteName'
import { ComposablesView } from '@/modules/composables'
import { RenderlessComponentsView } from '@/modules/renderless-components'

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
    path: '/composables',
    name: RouteName.Composables,
    component: ComposablesView,
  },
  {
    path: '/renderless-components',
    name: RouteName.RenderlessComponents,
    component: RenderlessComponentsView,
  },
]
