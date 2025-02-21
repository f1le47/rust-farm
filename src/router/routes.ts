import HomeView from '@/views/HomeView.vue'
import { Paths, type Route } from './types'
import GeneticsView from '@/views/GeneticsView.vue'

export const routes: Route[] = [
  {
    path: Paths.Home,
    name: 'Home',
    component: HomeView,
  },
  {
    path: Paths.Genetics,
    name: 'Genetics',
    component: GeneticsView,
  },
]
